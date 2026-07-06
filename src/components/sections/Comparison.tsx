export function Comparison({
  heading,
  left,
  right,
}: {
  heading: string;
  left: { title: string; points: string[] };
  right: { title: string; points: string[] };
}) {
  return (
    <section className="border-b border-steel-700/60 py-14 md:py-20">
      <div className="container-page">
        <h2 className="max-w-[26ch] text-2xl font-semibold md:text-3xl">{heading}</h2>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[3px] border border-steel-700/60 bg-steel-700/60 md:grid-cols-2">
          {[left, right].map((col, i) => (
            <div key={col.title} className="bg-graphite-800 p-7">
              <h3 className={i === 0 ? "font-display text-lg font-medium text-copper-400" : "font-display text-lg font-medium text-ice-400"}>
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.points.map((p) => (
                  <li key={p} className="text-sm leading-relaxed text-sand-200">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
