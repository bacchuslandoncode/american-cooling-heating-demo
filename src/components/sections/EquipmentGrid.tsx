export function EquipmentGrid({ heading, items }: { heading: string; items: string[] }) {
  return (
    <section className="border-b border-steel-700/60 py-14 md:py-20">
      <div className="container-page">
        <h2 className="max-w-[26ch] text-2xl font-semibold md:text-3xl">{heading}</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {items.map((item) => (
            <span
              key={item}
              className="rounded-[3px] border border-steel-700/60 bg-graphite-800 px-4 py-2.5 font-mono text-sm text-sand-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
