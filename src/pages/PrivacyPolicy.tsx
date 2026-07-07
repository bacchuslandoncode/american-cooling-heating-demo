import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/data/siteConfig";

export function PrivacyPolicy() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Privacy Policy" }]} />
      <PageHero kicker="Legal" title="Privacy Policy" subhead="How contact information submitted through this site is handled." />
      <div className="container-page max-w-[70ch] space-y-5 py-14 text-sm leading-relaxed text-muted md:py-20">
        <p>
          American Cooling And Heating collects information such as name, contact details, and basic demographic
          information in order to respond to service requests and communicate with customers.
        </p>
        <p>Your information is never sold. Reasonable security measures are used to protect data that is collected.</p>
        <p>
          This site does not use first-party tracking cookies. Links to external sites, including manufacturer and
          payment pages, may use their own cookies under their own policies.
        </p>
        <p>
          To ask what information is on file, or to request a correction, contact {siteConfig.email} or call{" "}
          {siteConfig.phone}.
        </p>
      </div>
    </div>
  );
}
