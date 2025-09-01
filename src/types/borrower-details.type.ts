export type BorrowerDetails = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  risk_signal?: string;
  ai_flags?: string[];
};

export type BorrowerState = {
  borrowerDetails: BorrowerDetails | null;
  loading: boolean;
  error: string | null;
  success: string | null;
  fetchBorrower: (id: string) => Promise<void>;
  handleAction: (endpoint: string, actionName: string) => Promise<void>;
};
