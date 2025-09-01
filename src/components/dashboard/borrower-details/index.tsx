import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Separator } from '../../ui/separator';
import LoanSummaryCard from './loan-summary-card';
import AlertList from './alert-list';
import InfoGrid from './info-grid';
import { useEffect, useState } from 'react';
import { BorrowerDetails } from '../../../types/borrower-details.type';
import { useBorrowerStore } from '../../../store/borrower-store';
import BorrowerDetailSkeleton from '../../../components/common/skeltons/borrow-details-skeltons';

export default function BorrowerDetail({ borrowerId }: { borrowerId: string }) {
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const {
    borrowerDetails,
    loading,
    error,
    success,
    fetchBorrower,
    handleAction,
  } = useBorrowerStore();

  useEffect(() => {
    fetchBorrower(borrowerId);
  }, [borrowerId, fetchBorrower]);

  if (loading)
    return (
      <div>
        <BorrowerDetailSkeleton />
      </div>
    );
  if (error) return <div className="text-red-500">{error}</div>;
  if (!borrowerDetails) return null;

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
              <div className="font-semibold leading-tight">
                {borrowerDetails.name}
              </div>
              <div className="text-sm text-foreground/70">
                {borrowerDetails.email} • {borrowerDetails.phone}
              </div>
            </div>
          </div>
          <Badge className="bg-amber-500 text-black">
            {borrowerDetails.status}
          </Badge>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button
            variant="secondary"
            disabled={actionLoading === 'request-documents'}
            onClick={() =>
              handleAction('request-documents', 'request-documents')
            }
          >
            {actionLoading === 'request-documents'
              ? 'Requesting...'
              : 'Request Documents'}
          </Button>

          <Button
            variant="secondary"
            disabled={actionLoading === 'send-valuer'}
            onClick={() => handleAction('send-valuer', 'send-valuer')}
          >
            {actionLoading === 'send-valuer' ? 'Sending...' : 'Send to Valuer'}
          </Button>

          <Button
            disabled={actionLoading === 'approve'}
            onClick={() => handleAction('approve', 'approve')}
          >
            {actionLoading === 'approve' ? 'Approving...' : 'Approve'}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <LoanSummaryCard title="AI Explainability" />
        <AlertList items={borrowerDetails.ai_flags || []} />

        <InfoGrid />
        {borrowerDetails.risk_signal && (
          <Card className="rounded-2xl bg-amber-500/90 px-4 py-3 border-0">
            <div className="flex items-start gap-3">
              <span className="mt-0.5">⚠️</span>
              <p className="text-sm font-medium">
                {borrowerDetails.risk_signal}
              </p>
            </div>
          </Card>
        )}
      </CardContent>

      <CardFooter>
        <Button
          className="w-full h-11 text-base"
          disabled={actionLoading === 'escalate'}
          onClick={() => handleAction('escalate', 'escalate')}
        >
          {actionLoading === 'escalate'
            ? 'Escalating...'
            : 'Escalate to Credit Committee'}
        </Button>
      </CardFooter>

      <Separator className="opacity-10" />
    </Card>
  );
}
