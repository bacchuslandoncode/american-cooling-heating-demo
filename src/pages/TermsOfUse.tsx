import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";

export function TermsOfUse() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Terms Of Use" }]} />
      <PageHero kicker="Legal" title="Terms Of Use" subhead="Standard terms governing use of this website." />
      <div className="container-page max-w-[70ch] space-y-5 py-14 text-sm leading-relaxed text-sand-400 md:py-20">
        <p>By using this website, you agree to these terms. Content on this site is proprietary and may not be reproduced without permission.</p>
        <p>American Cooling And Heating reserves the right to modify or discontinue any part of this site or its services without notice, and makes no warranty regarding uninterrupted availability.</p>
        <p>Service is provided on a first-come, first-served basis. Liability for damages arising from use of this site is limited to the extent permitted by law.</p>
        <p>These terms may be updated at any time, and disputes are subject to the jurisdiction selected by American Cooling And Heating.</p>
      </div>
    </div>
  );
}
