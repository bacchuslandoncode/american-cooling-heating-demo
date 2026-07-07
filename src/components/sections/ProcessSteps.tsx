export function ProcessSteps({
  heading,
  steps,
}: {
  heading: string;
  steps: { title: string; body: string }[];
}) {
  return (
    <section className="border-b border-border py-14 md:py-20">
      <div className="container-page">
        <h2 className="max-w-[26ch] text-2xl font-semibold md:text-3xl">{heading}</h2>
        <ol className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t border-border pt-5">
              <span className="font-mono text-xs text-brand">0{i + 1}</span>
              <h3 className="mt-2 font-display text-lg font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
