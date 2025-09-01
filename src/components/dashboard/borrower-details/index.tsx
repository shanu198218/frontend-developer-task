import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Separator } from '../../ui/separator';
import LoanSummaryCard from './loan-summary-card';
import AlertList from './alert-list';
import InfoGrid from './info-grid';
import { useEffect, useState } from 'react';
import { useBorrowerStore } from '../../../store/borrower-store';
import BorrowerDetailSkeleton from '../../../components/common/skeltons/borrow-details-skeltons';
import { OctagonX } from 'lucide-react';

export default function BorrowerDetail({ borrowerId }: { borrowerId: string }) {
  const [actionLoading] = useState<string | null>(null);

  const { borrowerDetails, loading, error, fetchBorrower, handleAction } =
    useBorrowerStore();

  useEffect(() => {
    if (borrowerId) fetchBorrower(borrowerId);
  }, [borrowerId, fetchBorrower]);

if (loading || error)
  return (
    <div data-cy="borrower-detail-skeleton">
      <BorrowerDetailSkeleton />
    </div>
  );

  if (!borrowerDetails) return null;

  return (
    <Card
      data-cy="borrower-detail"
      className="rounded-3xl dark:bg-card bg-background/40 border-white/10"
    >
      <CardHeader data-cy="borrower-detail-header">
        <div className="flex items-center justify-between">
          <div className="md:flex items-center gap-3">
            <Avatar className="h-9 w-9" data-cy="borrower-avatar">
              <AvatarImage src="https://i.pravatar.cc/100?img=1" />
              <AvatarFallback>AP</AvatarFallback>
            </Avatar>
            <div>
              <div
                data-cy="borrower-name"
                className="font-semibold leading-tight"
              >
                {borrowerDetails.name}
              </div>
              <div
                data-cy="borrower-contact"
                className="text-sm text-foreground/70"
              >
                {borrowerDetails.email} • {borrowerDetails.phone}
              </div>
            </div>
          </div>
          <Badge data-cy="borrower-status" className="bg-amber-500 text-black">
            {borrowerDetails.status}
          </Badge>
        </div>

        <div className="mt-3 flex flex-wrap gap-2" data-cy="borrower-actions">
          <Button
            data-cy="btn-request-docs"
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
            data-cy="btn-send-valuer"
            variant="secondary"
            disabled={actionLoading === 'send-valuer'}
            onClick={() => handleAction('send-valuer', 'send-valuer')}
          >
            {actionLoading === 'send-valuer' ? 'Sending...' : 'Send to Valuer'}
          </Button>

          <Button
            data-cy="btn-approve"
            disabled={actionLoading === 'approve'}
            onClick={() => handleAction('approve', 'approve')}
          >
            {actionLoading === 'approve' ? 'Approving...' : 'Approve'}
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div data-cy="explainability-section">
          <LoanSummaryCard
            title="AI Expandability"
            content={
              <ul
                className="list-disc pl-5 space-y-1"
                data-cy="explainability-content"
              >
                <li>Income verified</li>
                <li>Debt ratio checked</li>
                <li>Credit score analysis</li>
              </ul>
            }
          />
        </div>

        <AlertList items={borrowerDetails.ai_flags || []} />

        <div data-cy="info-grid">
          <InfoGrid />
        </div>

        {borrowerDetails.risk_signal && (
          <Card
            data-cy="risk-signal"
            className="rounded-2xl bg-amber-500/90 px-4 py-3 border-0"
          >
            <div className="flex items-center justify-center gap-3">
              <span className="mt-0.5">
                <OctagonX color="black" size={24} />
              </span>
              <p className="text-sm text-center dark:text-black font-medium">
                {borrowerDetails.risk_signal}
              </p>
            </div>
          </Card>
        )}
      </CardContent>

      <CardFooter>
        <Button
          data-cy="btn-escalate"
          className="w-full h-11 text-base"
          variant="default"
          disabled={borrowerDetails.risk_level === 'High'}
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
