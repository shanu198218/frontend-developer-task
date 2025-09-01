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
        dark:bg-slate-900/70 bg-white hover:bg-slate-100 px-4 py-3
        dark:hover:bg-card/20 transition
      "
    >
      <div className="flex">
        <div className="w-64 flex-initial">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <div className="truncate md:text-base text-sm font-semibold dark:text-white text-black  max-w-[60%]">
                {borrower.name}
              </div>

              <Badge
                className={`
              ${statusColor[borrower.status]}
              text-black font-medium
              rounded-full px-2 py- md:text-sm text-xs
            `}
              >
                {borrower.status}
              </Badge>
            </div>

            <div className="text-sm my-2 dark:text-white/60 truncate">
              {borrower.product} • {borrower.variant}
            </div>
            <div className="font-semibold dark:text-white text-black whitespace-nowrap md:hidden">
              {borrower.amount}
            </div>
          </div>
        </div>
        <div className="w-32 flex-initial hidden md:block">
          {' '}
          <div className="text-right font-semibold dark:text-white text-black whitespace-nowrap">
            {borrower.amount}
          </div>
        </div>
      </div>
    </Card>
  );
}
