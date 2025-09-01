import { OctagonAlert } from 'lucide-react';
import { Card } from '../../ui/card';

export default function AlertList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3" data-cy="alert-list" role="list">
      {items.map((t, i) => (
        <Card
          key={`${i}-${t}`}
          data-cy={`alert-item-${i}`}
          role="listitem"
          className="rounded-2xl dark:bg-white/5 dark:hover:bg-card/20 bg-white hover:bg-slate-100 px-4 py-3"
        >
          <div className="flex items-start gap-3">
            <span className="text-red-400" data-cy="alert-icon">
              <OctagonAlert size={24} />
            </span>
            <p className="text-sm leading-snug" data-cy="alert-text">
              {t}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
}
