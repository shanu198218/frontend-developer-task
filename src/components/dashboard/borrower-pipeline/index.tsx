import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import BorrowerItem from './borrower-item';
import BorrowerPipelineSkeleton from '../../../components/common/skeltons/borrow-pipline-skeltons';
import { usePipelineStore } from '../../../store/borrower-pipeline-store';

export default function BorrowerPipeline() {
  const { borrowers, loading, error, success, fetchPipeline } =
    usePipelineStore();

  useEffect(() => {
    fetchPipeline();
  }, [fetchPipeline]);

  const isEmpty = !borrowers.length;

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
        {loading || error ? (
          <BorrowerPipelineSkeleton count={3} />
        ) : isEmpty ? (
          <div className="text-center py-8 text-foreground/60">
            No borrowers in pipeline
          </div>
        ) : (
          borrowers.map(b => <BorrowerItem key={b.id} borrower={b} />)
        )}
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
