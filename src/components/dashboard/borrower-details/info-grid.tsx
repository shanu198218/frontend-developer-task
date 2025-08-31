import { Card } from '../../ui/card';

function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <Card className="rounded-2xl bg-white/5 px-4 py-3">
      <div className="text-xs text-foreground/60">{label}</div>
      <div className="font-semibold">{value}</div>
    </Card>
  );
}

export default function InfoGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <InfoBox label="Employment" value="Software Engineer, 5 yrs" />
      <InfoBox label="Existing Loan" value="Auto • $18,400" />
      <InfoBox label="Credit Score" value="742" />
      <InfoBox label="Source of Funds" value="Savings + RSUs" />
    </div>
  );
}
