import { Card } from '../../../components/ui/card';

export function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <Card className="rounded-2xl dark:bg-white/5 bg-white hover:bg-slate-100 dark:hover:bg-card/20 px-4 py-3">
      <div className="text-xs text-foreground/60">{label}</div>
      <div className="font-semibold">{value}</div>
    </Card>
  );
}
