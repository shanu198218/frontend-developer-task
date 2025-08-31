import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';

export type Borrower = {
  id: string;
  name: string;
  status: 'New' | 'In Review' | 'Approved' | 'Renew';
  product: string;
  variant: string;
  amount: string;
};

const statusColor: Record<Borrower['status'], string> = {
  New: 'bg-blue-600',
  'In Review': 'bg-amber-500',
  Approved: 'bg-emerald-500',
  Renew: 'bg-slate-500',
};

export default function BorrowerItem({ borrower }: { borrower: Borrower }) {
  return (
    <Card className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
      <div className="min-w-0">
        <div className="flex items-center gap-2">
          <div className="truncate font-semibold">{borrower.name}</div>
          <Badge className={`${statusColor[borrower.status]} text-black`}>
            {borrower.status}
          </Badge>
        </div>
        <div className="text-sm text-foreground/70">
          {borrower.product} • {borrower.variant}
        </div>
      </div>
      <div className="text-right font-semibold">{borrower.amount}</div>
    </Card>
  );
}
