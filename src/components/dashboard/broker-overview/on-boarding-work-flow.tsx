const steps = [
  { label: 'KYC Completed', done: true },
  { label: 'Broker Agreement Signed', done: true },
  { label: 'AML Training', done: true },
  { label: 'Compliance Review', done: false },
  { label: 'Portal Access Granted', done: false },
  { label: 'First Deal Submitted', done: false },
  { label: 'Performance Checkpoint', done: false },
];

export default function OnboardingWorkflow() {
  return (
    <div>
      <div className="mb-2 font-semibold">Onboarding Workflow</div>
      <ul className="space-y-2">
        {steps.map((s, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <span
              className={`grid place-items-center h-6 w-6 shrink-0 rounded-full text-white ${
                s.done ? 'bg-emerald-500' : 'bg-white/10 text-foreground/70'
              }`}
            >
              {i + 1}
            </span>
            <span className={s.done ? 'text-foreground' : 'text-foreground/70'}>
              {s.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
