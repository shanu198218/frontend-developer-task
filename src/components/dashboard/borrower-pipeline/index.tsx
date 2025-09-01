import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import BorrowerItem from './borrower-item';
import BorrowerPipelineSkeleton from '../../../components/common/skeltons/borrow-pipline-skeltons';
import { usePipelineStore } from '../../../store/borrower-pipeline-store';
import StatusButtonGroup from './status-button-group';
import StatusToggle from './status-toggle';

interface BorrowerPipelineProps {
  onSelectBorrower?: (borrowerId: string) => void;
}
export default function BorrowerPipeline({
  onSelectBorrower,
}: BorrowerPipelineProps) {
  const { borrowers, loading, error, fetchPipeline } = usePipelineStore();
  const [, setStatus] = useState<'Enabled' | 'Disabled'>('Enabled');
  useEffect(() => {
    fetchPipeline();
  }, [fetchPipeline]);

  const isEmpty = !borrowers.length;

  const handleFilterChange = (status: string) => {
    console.log('Selected filter:', status);
  };
  const handleStatusChange = (val: 'Enabled' | 'Disabled') => {
    setStatus(val);
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
          borrowers.map(b => (
            <BorrowerItem
              key={b.id}
              borrower={b}
              onClick={() => onSelectBorrower?.(b.id)}
            />
          ))
        )}
        <div className="pt-4 ">
          <StatusToggle onChange={handleStatusChange} />
        </div>
      </CardContent>
    </Card>
  );
}
