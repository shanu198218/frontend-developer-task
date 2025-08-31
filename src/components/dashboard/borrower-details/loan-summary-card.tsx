import { Card, CardTitle } from '../../ui/card';

export default function LoanSummaryCard({ title }: { title: string }) {
  return (
    <Card className="rounded-2xl bg-cyan-900/60 px-4 py-2 border-0">
      <CardTitle className="text-sm">{title}</CardTitle>
    </Card>
  );
}
