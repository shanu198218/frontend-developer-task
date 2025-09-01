import { filters } from '../../../lib/data';
import { Badge } from '../../ui/badge';

interface StatusButtonGroupProps {
  onFilterChange?: (status: string) => void;
}

export default function StatusButtonGroup({
  onFilterChange,
}: StatusButtonGroupProps) {
  return (
    <div
      role="group"
      aria-label="Status filter"
      className="flex items-center gap-2 my-3"
    >
      {filters.map(({ label, className }) => (
        <Badge
          key={label}
          asChild
          variant="secondary"
          className={`${className} text-sm cursor-pointer`}
        >
          <button type="button" onClick={() => onFilterChange?.(label)}>
            {label}
          </button>
        </Badge>
      ))}
    </div>
  );
}
