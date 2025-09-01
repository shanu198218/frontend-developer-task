import { Card } from '../../ui/card';

export default function AlertList({ items }: { items: string[] }) {
  return (
    <div className="space-y-3">
      {items.map((t, i) => (
        <Card
          key={i}
          className="rounded-2xl dark:bg-white/5 dark:hover:bg-card/20 bg-white hover:bg-slate-100 px-4 py-3"
        >
          <div className="flex items-start gap-3">
            <span className="mt-0.5 text-red-400">⚠️</span>
            <p className="text-sm leading-snug">{t}</p>
          </div>
        </Card>
      ))}
    </div>
  );
}
