import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { PipelineResponse } from '../../../types/borrower.pipeline.type';
import { transformBorrower } from '../../../lib/helper.utils';
import { Borrower } from '../../../types/borrower.type';
import BorrowerItem from './borrower-item';
import BorrowerPipelineSkeleton from '../../../components/common/skeltons/borrow-pipline-skeltons';

export default function BorrowerPipeline() {
  const [borrowers, setBorrowers] = useState<Borrower[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/borrowers/pipeline');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      const data: PipelineResponse = await res.json();
      setBorrowers([
        ...data.new.map(transformBorrower),
        ...data.in_review.map(transformBorrower),
        ...data.approved.map(transformBorrower),
      ]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

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
            <Badge variant="outline" className="border-white/20 text-foreground/70">
              Disabled
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
