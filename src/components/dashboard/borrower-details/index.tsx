import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Separator } from '../../ui/separator';
import LoanSummaryCard from './loan-summary-card';
import AlertList from './alert-list';
import InfoGrid from './info-grid';

export default function BorrowerDetail() {
  return (
    <Card className="rounded-3xl bg-background/40 border-white/10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-9 w-9">
              <AvatarImage src="https://i.pravatar.cc/100?img=1" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-semibold leading-tight">Ava Patel</div>
              <div className="text-sm text-foreground/70">
                ava.patel@example.com • +1 (415) 202-1222
              </div>
            </div>
          </div>
          <Badge className="bg-amber-500 text-black">In Review</Badge>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="secondary">Request Documents</Button>
          <Button variant="secondary">Send to Valuer</Button>
          <Button>Approve</Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <LoanSummaryCard title="AI Explainability" />
        <AlertList
          items={[
            'Income Inconsistency detected over last 3 months.',
            'High Debt-to-Income Ratio relative to peer cohort.',
          ]}
        />
        <InfoGrid />
        <Card className="rounded-2xl bg-amber-500/90 px-4 py-3 border-0">
          <div className="flex items-start gap-3">
            <span className="mt-0.5">⚠️</span>
            <p className="text-sm font-medium">
              Risk Signal: Manual income verification recommended.
            </p>
          </div>
        </Card>
      </CardContent>

      <CardFooter>
        <Button className="w-full h-11 text-base">
          Escalate to Credit Committee
        </Button>
      </CardFooter>

      <Separator className="opacity-10" />
    </Card>
  );
}
