import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import BorrowerItem, { Borrower } from './borrower-item';

const borrowers: Borrower[] = [
  {
    id: '1',
    name: 'Ava Patel',
    status: 'New',
    product: 'Home Loan',
    variant: 'Fixed',
    amount: '$520,000',
  },
  {
    id: '2',
    name: 'Liam Chen',
    status: 'In Review',
    product: 'Refinance',
    variant: 'Variable',
    amount: '$310,000',
  },
  {
    id: '3',
    name: 'Sophia Nguyen',
    status: 'Approved',
    product: 'Investment',
    variant: 'Fixed',
    amount: '$780,000',
  },
  {
    id: '4',
    name: 'Ethan Brooks',
    status: 'Renew',
    product: 'Renewal',
    variant: 'Variable',
    amount: '$220,000',
  },
];

export default function BorrowerPipeline() {
  return (
    <Card className="rounded-3xl bg-background/40 border-white/10">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Borrower Pipeline</span>
          <div className="flex items-center gap-2">
            <Badge className="bg-blue-600">New</Badge>
            <Badge className="bg-amber-500">In Review</Badge>
            <Badge className="bg-emerald-500">Approved</Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {borrowers.map(b => (
          <BorrowerItem key={b.id} borrower={b} />
        ))}

        <div className="pt-4">
          <div className="text-xs uppercase text-foreground/60 mb-2">
            F-SANITISED ACTIVE
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-cyan-700">Enabled</Badge>
            <Badge
              variant="outline"
              className="border-white/20 text-foreground/70"
            >
              Disabled
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
