export function StatStrip({
  heading,
  items,
}: {
  heading?: string;
  items: { value: string; label: string }[];
}) {
  return (
    <section className="border-b border-border py-14 md:py-20">
      <div className="container-page">
        {heading && <h2 className="mb-8 max-w-[24ch] text-2xl font-semibold md:text-3xl">{heading}</h2>}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((s, i) => (
            <div key={s.label} className={i > 0 ? "border-border sm:border-l sm:pl-8" : ""}>
              <p className="font-mono text-4xl font-medium text-brand md:text-5xl">{s.value}</p>
              <p className="mt-2 max-w-[26ch] text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
