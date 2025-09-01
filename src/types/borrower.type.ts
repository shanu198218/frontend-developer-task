export type Borrower = {
  id: string;
  name: string;
  status: 'New' | 'In Review' | 'Approved' | 'Renew';
  product: string;
  variant: string;
  amount: string;
};

export type BorrowerState = {
  borrowers: Borrower[];
  loading: boolean;
  error: string | null;
  success: string | null;
  fetchPipeline: () => Promise<void>;
};
