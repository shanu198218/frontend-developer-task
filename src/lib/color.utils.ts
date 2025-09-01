import { Borrower } from "../types/borrower.type";


export const statusColor: Record<Borrower['status'], string> = {
  New: 'bg-amber-500',
  'In Review': 'bg-blue-500',
  Approved: 'bg-emerald-500',
  Renew: 'bg-slate-400',
};
