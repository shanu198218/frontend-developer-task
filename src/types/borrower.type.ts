export type Borrower = {
  id: string;
  name: string;
  status: 'New' | 'In Review' | 'Approved' | 'Renew';
  product: string;
  variant: string;
  amount: string; 
};