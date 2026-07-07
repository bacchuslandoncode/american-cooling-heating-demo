import { useState, type FormEvent } from "react";
import { Phone, EnvelopeSimple, MapPin, Info, CheckCircle } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";
import { Button } from "@/components/ui/Button";
import { siteConfig, ctas } from "@/data/siteConfig";
import { MapTrifold } from "@phosphor-icons/react";

function encode(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data }),
      });
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <Breadcrumbs trail={[{ label: "Contact" }]} />
      <PageHero
        kicker="Contact"
        title="Call, Email, Or Send A Request"
        subhead="Emergency? Calling gets the fastest response. For estimates and general questions, the form below works too."
      />

      <section className="pb-20">
        <div className="container-page grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-8">
            <div className="flex flex-col gap-5 rounded-[3px] border border-border bg-card p-6">
              <Button href={ctas.call.href} size="md" icon={<Phone size={15} weight="fill" />} className="w-full sm:w-auto">
                {ctas.call.label}
              </Button>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-ink hover:text-brand">
                <EnvelopeSimple size={18} className="text-brand" /> {siteConfig.email}
              </a>
              <div className="flex items-start gap-3 text-muted">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </span>
              </div>
              <p className="text-sm text-muted">{siteConfig.serviceHoursNote}</p>
            </div>

            <div className="flex items-start gap-3 rounded-[3px] border border-border bg-ice p-4 text-sm leading-relaxed text-ink/80">
              <Info size={16} className="mt-0.5 shrink-0 text-brand" />
              <span>{siteConfig.sameDayNote} Pricing is quoted flat-rate and up front, before any work starts.</span>
            </div>

            <MediaPlaceholder label="Map: Gilbert, AZ service center" icon={MapTrifold} aspect="aspect-[16/10]" />
          </div>

          <form
            name="contact"
            onSubmit={handleSubmit}
            data-netlify="true"
            netlify-honeypot="company"
            className="space-y-5 rounded-[3px] border border-border bg-card p-6 md:p-8"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="company" />
              </label>
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" required />
              <Field label="Phone" name="phone" type="tel" required />
            </div>
            <Field label="Email" name="email" type="email" required />
            <div>
              <label className="mb-2 block text-sm font-medium text-ink" htmlFor="topic">
                What do you need?
              </label>
              <select
                id="topic"
                name="topic"
                required
                className="w-full rounded-[7px] border border-border bg-canvas px-4 py-2.5 text-sm text-ink focus:border-brand"
              >
                <option value="">Select one</option>
                <option>Emergency repair</option>
                <option>Schedule maintenance</option>
                <option>Installation / replacement estimate</option>
                <option>Commercial / industrial</option>
                <option>Precision cooling / data center</option>
                <option>General question</option>
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-ink" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full rounded-[7px] border border-border bg-canvas px-4 py-2.5 text-sm text-ink placeholder:text-muted focus:border-brand"
                placeholder="System type, brand if known, and what's happening"
              />
            </div>

            {status === "success" ? (
              <div className="flex items-center gap-2 rounded-[3px] border border-brand/30 bg-ice p-4 text-sm text-brand">
                <CheckCircle size={18} weight="fill" />
                Request received. Expect a call back shortly, or call directly for anything urgent.
              </div>
            ) : (
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {status === "submitting" ? "Sending..." : "Send Request"}
              </Button>
            )}
            {status === "error" && (
              <p className="text-sm text-emergency">Something went wrong. Please call {siteConfig.phone} instead.</p>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-ink" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-[7px] border border-border bg-canvas px-4 py-2.5 text-sm text-ink focus:border-brand"
      />
    </div>
  );
}
