export function OverviewPercentage({ label, value }: { label: string; value: string | null }) {
  return (
    <div className="rounded-2xl bg-white/5 px-4 py-3 text-center">
      <div className="md:text-sm text-xs text-foreground/60">{label}</div>
      <div className="mt-1 md:text-xl text-md font-semibold">{value}</div>
    </div>
  );
}