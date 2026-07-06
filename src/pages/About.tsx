import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { StatStrip } from "@/components/sections/StatStrip";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { siteConfig } from "@/data/siteConfig";
import technicianPressureTest from "@/assets/images/hvac-technician-pressure-test.jpg";

export function About() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "About" }]} />
      <PageHero
        kicker="About"
        title="Built On Integrity And Quality Workmanship"
        subhead={`Founded in ${siteConfig.founded} on the idea that a contractor keeps referral business by doing the work right, not by winning it on price alone.`}
      />
      <StatStrip
        items={[
          { value: String(siteConfig.founded), label: "Founded, still serving the same Valley" },
          { value: "2", label: "Active Arizona ROC licenses" },
          { value: "3 yr", label: "Parts and labor warranty on every repair" },
        ]}
      />
      <SplitFeature
        heading="Almost All Of Our Work Comes From Referral"
        body="Technicians and craftspeople go through background checks, drug testing, and skill-specific testing before they're signed off to work unsupervised. The company serves everything from large national organizations to individual homeowners, and treats both the same way on pricing and warranty terms."
        mediaLabel="Technician performing a system inspection"
        image={{
          src: technicianPressureTest,
          alt: "Technician reading refrigerant pressure gauges during a system inspection",
          position: "56% 55%",
        }}
      />
      <KeyPoints
        heading="Licensing & Standing"
        items={[
          `AZ ROC K79, license #183933 (Residential, Commercial, Industrial HVAC and Refrigeration Contractor)`,
          `AZ ROC KB2, license #238225 (Residential, Commercial General Contractor)`,
          "BBB A+ Rated",
          "Complaint-free record with the Arizona Registrar of Contractors",
          "Licensed, bonded, and insured",
          "NATE certified technicians",
        ]}
      />
      <section className="border-b border-steel-700/60 py-14 md:py-20">
        <div className="container-page flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="max-w-[26ch] text-2xl font-semibold md:text-3xl">Warranty & Guarantee Terms</h2>
            <p className="mt-3 max-w-[52ch] text-sm text-sand-400">
              A three-year repair warranty, a lifetime install workmanship warranty, and a written guarantee behind
              both.
            </p>
          </div>
          <Link
            to="/quality-guarantee"
            className="flex shrink-0 items-center gap-2 rounded-full border border-steel-600 px-5 py-2.5 text-sm font-medium text-sand-100 hover:border-ice-400 hover:text-ice-300"
          >
            Full Quality Guarantee
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>
      <ContextualCTA label="Questions about a license, warranty, or past job? Ask directly." />
    </div>
  );
}
