import { WorkFlowStep } from '@/types/on-boarding-workflow';

type OnboardingWorkflowProps = {
  steps: WorkFlowStep[];
};

export default function OnboardingWorkflow({ steps }: OnboardingWorkflowProps) {
  return (
    <div>
      <div className="mb-2 font-semibold">Onboarding Workflow</div>
      <ul className="space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span
              className={`grid place-items-center h-6 w-6 shrink-0 rounded-full text-white ${
                s.done
                  ? 'bg-emerald-500'
                  : 'dark:bg-white/10 bg-gray-500 text-foreground/70'
              }`}
            >
              {i + 1}
            </span>
            <span
              className={
                s.done
                  ? 'dark:text-foreground text-black'
                  : 'dark:text-foreground/70 text-black'
              }
            >
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
