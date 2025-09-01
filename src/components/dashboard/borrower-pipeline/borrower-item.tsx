import { Card } from '../../ui/card';
import { Badge } from '../../ui/badge';
import { Borrower } from '../../../types/borrower.type';
import { statusColor } from '../../../lib/color.utils';

export default function BorrowerItem({ borrower }: { borrower: Borrower }) {
  return (
    <Card
      className="
        flex items-between justify-between
        rounded-2xl border border-white/10
        bg-slate-900/70 px-4 py-3
        hover:bg-slate-900 transition
      "
    >
      <div className="flex">
        <div className="w-64 flex-initial">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="truncate font-semibold text-white max-w-[60%]">
                {borrower.name}
              </div>

              <Badge
                className={`
              ${statusColor[borrower.status]}
              text-black font-medium
              rounded-full px-2.5 py-0.5 text-xs
            `}
              >
                {borrower.status}
              </Badge>
            </div>

            <div className="text-sm my-2 text-white/60 truncate">
              {borrower.product} • {borrower.variant}
            </div>
          </div>
        </div>
        <div className="w-32 flex-initial">
          {' '}
          <div className="text-right font-semibold text-white whitespace-nowrap">
            {borrower.amount}
          </div>
        </div>
      </div>
    </Card>
  );
}
