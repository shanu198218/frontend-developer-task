import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import { Switch } from '../../ui/switch';
import OnboardingWorkflow from './on-boarding-work-flow';
import { useOverviewStore } from '../../../store/borrower-overview-store';
import { useEffect } from 'react';
import { OverviewPercentage } from './overview-percentage';

export default function BrokerOverview() {
  const {
    broker,
    workflow,

    fetchBroker,
    fetchWorkflow,
  } = useOverviewStore();

  useEffect(() => {
    fetchBroker('1');
    fetchWorkflow();
  }, [fetchBroker, fetchWorkflow]);
  return (
    <Card className="rounded-3xl dark:bg-card bg-slate-100 border-white/10">
      <CardHeader data-cy="bo-header">
        <CardTitle data-cy="bo-title">Broker Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-3" data-cy="bo-identity">
          <Avatar className="h-9 w-9" data-cy="bo-avatar">
            <AvatarImage src="https://i.pravatar.cc/100?img=5" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold leading-tight" data-cy="bo-name">
              {broker?.name}
            </div>
            <div className="text-sm text-foreground/70">
              {broker?.employment || 'At Tech Company'} • West Coast
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2" data-cy="bo-metrics">
          <div data-cy="bo-metric-deals">
            <OverviewPercentage
              label="Deals"
              value={broker?.deals?.toString() ?? null}
            />
          </div>
          <div data-cy="bo-metric-approval-rate">
            <OverviewPercentage
              label="Approval Rate"
              value={broker?.approval_rate ?? null}
            />
          </div>
          <div data-cy="bo-metric-pending">
            <OverviewPercentage
              label="Pending"
              value={broker?.pending?.toString() ?? null}
            />
          </div>
        </div>

        <div
          className="flex items-center justify-center gap-4"
          data-cy="bo-actions"
        >
          <Button data-cy="bo-action-call" variant="secondary">
            Call
          </Button>
          <Button data-cy="bo-action-email" variant="secondary">
            Email
          </Button>
          <Button data-cy="bo-action-chat" variant="secondary">
            Chat
          </Button>
        </div>

        <Separator className="opacity-10" />

        <OnboardingWorkflow
          steps={(workflow?.steps ?? []).map((label, i) => ({
            label,
            done: false,
          }))}
        />

        <div className="pt-1" data-cy="bo-ai-section">
          <div className="mb-2 font-semibold">AI Assistant</div>
          <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-indigo-600 text-white font-semibold">
                E
              </span>
              <span className="font-medium" data-cy="bo-ai-name">
                E Ardassistant
              </span>
            </div>
            <Switch data-cy="bo-ai-toggle" defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
