export function OverviewPercentage({
  label,
  value,
}: {
  label: string;
  value: string | null;
}) {
  return (
    <div className="rounded-2xl dark:bg-white/5 bg-white px-4 py-3 text-center">
      <div className="md:text-sm text-xs dark:text-foreground/60 text-black">
        {label}
      </div>
      <div className="mt-1 md:text-xl text-md font-semibold">{value}</div>
    </div>
  );
}
