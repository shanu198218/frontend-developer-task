import { Card, CardContent, CardFooter, CardHeader } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Separator } from '../../ui/separator';
import { Skeleton } from '../../ui/skeleton';

export default function BorrowerDetailSkeleton() {
  return (
    <Card className="rounded-3xl bg-background/40 border-white/10">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Skeleton className="h-9 w-9 rounded-full" />
            <div className="space-y-1">
              <Skeleton className="h-4 w-40" />
              <Skeleton className="h-3 w-64" />
            </div>
          </div>
          <Badge className="bg-amber-500/40 text-transparent">
            <span className="opacity-0">Status</span>
          </Badge>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          <Skeleton className="h-9 w-40 rounded-md" />
          <Skeleton className="h-9 w-36 rounded-md" />
          <Skeleton className="h-9 w-28 rounded-md" />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="rounded-2xl border border-white/10 p-4">
          <Skeleton className="h-4 w-40 mb-3" />
          <div className="grid grid-cols-2 gap-3">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <Skeleton className="h-4 w-28 mb-3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-4">
          <Skeleton className="h-4 w-28 mb-3" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>

        <div className="rounded-2xl bg-amber-500/40 px-4 py-3 border-0">
          <div className="flex items-start gap-3">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 w-3/4" />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Skeleton className="h-11 w-full rounded-md" />
      </CardFooter>

      <Separator className="opacity-10" />
    </Card>
  );
}
