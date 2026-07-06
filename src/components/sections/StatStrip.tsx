export function StatStrip({
  heading,
  items,
}: {
  heading?: string;
  items: { value: string; label: string }[];
}) {
  return (
    <section className="border-b border-steel-700/60 py-14 md:py-20">
      <div className="container-page">
        {heading && <h2 className="mb-8 max-w-[24ch] text-2xl font-semibold md:text-3xl">{heading}</h2>}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {items.map((s, i) => (
            <div key={s.label} className={i > 0 ? "border-steel-700/60 sm:border-l sm:pl-8" : ""}>
              <p className="font-mono text-4xl font-medium text-copper-400 md:text-5xl">{s.value}</p>
              <p className="mt-2 max-w-[26ch] text-sm text-sand-400">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
