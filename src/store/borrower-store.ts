import { BorrowerState } from '../types/borrower-details.type';
import { create } from 'zustand';

export const useBorrowerStore = create<BorrowerState>((set, get) => ({
  borrowerDetails: null,
  loading: false,
  error: null,
  success: null,

  fetchBorrower: async id => {
    set({ loading: true, error: null });
    try {
      const res = await fetch(`/api/borrowers/${id}`);
      if (!res.ok) throw new Error('Failed to fetch borrower data');
      const data = await res.json();
      set({ borrowerDetails: data });
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  handleAction: async (endpoint, actionName) => {
    const borrower = get().borrowerDetails;
    if (!borrower) return;
    set({ success: null, error: null, loading: true });
    try {
      const res = await fetch(`/api/borrowers/${borrower.id}/${endpoint}`, {
        method: 'POST',
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Action failed');
      set({ success: data.message });
      await get().fetchBorrower(borrower.id);
    } catch (err: any) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },
}));
