import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../../ui/avatar';
import { Button } from '../../ui/button';
import { Separator } from '../../ui/separator';
import { Switch } from '../../ui/switch';
import OnboardingWorkflow from './on-boarding-work-flow';

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/5 px-4 py-3 text-center">
      <div className="text-sm text-foreground/60">{label}</div>
      <div className="mt-1 text-xl font-semibold">{value}</div>
    </div>
  );
}

export default function BrokerOverview() {
  return (
    <Card className="rounded-3xl bg-background/40 border-white/10">
      <CardHeader>
        <CardTitle>Broker Overview</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src="https://i.pravatar.cc/100?img=5" />
            <AvatarFallback>RT</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold leading-tight">Robert Turner</div>
            <div className="text-sm text-foreground/70">
              Senior Broker • West Coast
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Stat label="Deals" value="16" />
          <Stat label="Approval Rate" value="75%" />
          <Stat label="Pending" value="$7,660" />
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary">Call</Button>
          <Button variant="secondary">Email</Button>
          <Button variant="secondary">Chat</Button>
        </div>

        <Separator className="opacity-10" />

        <OnboardingWorkflow />

        <div className="pt-1">
          <div className="mb-2 font-semibold">AI Assistant</div>
          <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-indigo-600 text-white font-semibold">
                E
              </span>
              <span className="font-medium">E Ardassistant</span>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
