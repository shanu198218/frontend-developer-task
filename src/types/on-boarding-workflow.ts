export type WorkFlowStep = {
  label: string;
  done: boolean;
};

export type Workflow = {
  steps: string[];
};

export type BrokerInfo = {
  name: string;
  deals: number;
  approval_rate: string;
  pending: number;
  employment: string;
};
