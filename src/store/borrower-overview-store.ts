
import { BrokerInfo, Workflow } from "@/types/on-boarding-workflow";
import { create } from "zustand";





interface OverviewStore {

  broker: BrokerInfo | null;
  workflow: Workflow | null;

  fetchBroker: (id: string) => Promise<void>;
  fetchWorkflow: () => Promise<void>;
}

export const useOverviewStore = create<OverviewStore>((set) => ({

  broker: null,
  workflow: null,



  fetchBroker: async (id: string) => {
    const res = await fetch(`/api/broker/${id}`);
    const data = await res.json();
    set({ broker: data });
  },

  fetchWorkflow: async () => {
    const res = await fetch("/api/onboarding/workflow");
    const data = await res.json();
    set({ workflow: data });
  },

 
}));
