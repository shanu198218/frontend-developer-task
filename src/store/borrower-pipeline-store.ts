import { Borrower, BorrowerState } from '@/types/borrower.type';
import { create } from 'zustand';
import { PipelineResponse } from '../types/borrower.pipeline.type';
import { transformBorrower } from '../lib/helper.utils';

export const usePipelineStore = create<BorrowerState>(set => ({
  borrowers: [],
  loading: false,
  success: null,
  error: null,

  fetchPipeline: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch('/api/borrowers/pipeline');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: PipelineResponse = await res.json();

      const borrowers: Borrower[] = [
        ...data.new.map(transformBorrower),
        ...data.in_review.map(transformBorrower),
        ...data.approved.map(transformBorrower),
      ];

      set({ borrowers, loading: false, error: null });
    } catch (e: any) {
      set({ error: e?.message ?? 'Failed to load pipeline', loading: false });
    }
  },
}));
