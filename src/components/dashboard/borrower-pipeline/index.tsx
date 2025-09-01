import { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import BorrowerItem from './borrower-item';
import BorrowerPipelineSkeleton from '../../../components/common/skeltons/borrow-pipline-skeltons';
import { usePipelineStore } from '../../../store/borrower-pipeline-store';
import StatusButtonGroup from './status-button-group';

export default function BorrowerPipeline() {
  const { borrowers, loading, error, fetchPipeline } = usePipelineStore();

  useEffect(() => {
    fetchPipeline();
  }, [fetchPipeline]);

  const isEmpty = !borrowers.length;

  const handleFilterChange = (status: string) => {
    console.log('Selected filter:', status);
  };

  return (
    <Card className="rounded-3xl dark:bg-card bg-slate-400 bg-background/40 border-white/10">
      <CardHeader>
        <CardTitle className=" items-center justify-between">
          <span>Borrower Pipeline</span>
          <StatusButtonGroup onFilterChange={handleFilterChange} />
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
        <div className="pt-4 ">
          <div className="text-xs dark:text-white/75 text-black uppercase  mb-2">
            F-SANITISED ACTIVE
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-cyan-700 dark:text-white/75 text-black">
              Enabled
            </Badge>
            <Badge
              variant="outline"
              className="border-white/20 dark:text-white/75 text-black "
            >
              Disabled
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
