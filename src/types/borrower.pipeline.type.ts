export type ApiBorrower = {
  id: string;
  name: string;
  loan_type: string;
  amount: number;
  status: string;
};

export type PipelineResponse = {
  new: ApiBorrower[];
  in_review: ApiBorrower[];
  approved: ApiBorrower[];
};

export type ComponentStatus = 'New' | 'In Review' | 'Approved' | 'Renew'

export const STATUS_MAP: Record<string, ComponentStatus> = {
  new: 'New',
  'in review': 'In Review',
  approved: 'Approved',
  renew: 'Renew',
};
