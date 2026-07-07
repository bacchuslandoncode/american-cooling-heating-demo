import { Phone, CalendarCheck, PiggyBank, ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { Kicker } from "@/components/ui/Panel";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { EmergencyStrip } from "@/components/sections/EmergencyStrip";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { FeaturedServices } from "@/components/sections/FeaturedServices";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { Comparison } from "@/components/sections/Comparison";
import { EquipmentGrid } from "@/components/sections/EquipmentGrid";
import { OfferCards } from "@/components/sections/OfferCards";
import { BrandGrid } from "@/components/sections/BrandGrid";
import { ServiceAreaList } from "@/components/sections/ServiceAreaList";
import { ReviewsGrid } from "@/components/sections/ReviewsSection";
import { CTASection } from "@/components/sections/CTASection";
import { KeyPoints } from "@/components/sections/KeyPoints";
import { siteConfig, ctas } from "@/data/siteConfig";
import { servicesByCategory, getServiceBySlug } from "@/data/services";
import { offers } from "@/data/offers";
import { brands } from "@/data/products";
import { serviceAreas } from "@/data/serviceAreas";
import { reviews } from "@/data/reviews";
import { whyChooseUs } from "@/data/whyChooseUs";
import agingMiniSplits from "@/assets/images/aging-mini-split-condensers.jpg";
import technicianPressureTest from "@/assets/images/hvac-technician-pressure-test.jpg";

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border">
        <div className="container-page grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10 lg:py-20">
          <div>
            <Kicker>Since {siteConfig.founded} &middot; Licensed, Bonded, Insured</Kicker>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] md:text-5xl">
              Fast Arizona AC Repair, Replacement, and Precision Cooling
            </h1>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-muted md:text-lg">
              Residential, commercial, and industrial HVAC across the Phoenix Valley since 1993, built around fast
              dispatch and systems sized right.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={ctas.call.href} size="lg" icon={<Phone size={17} weight="fill" />}>
                {ctas.call.label}
              </Button>
              <Button href={ctas.schedule.href} variant="secondary" size="lg" icon={<CalendarCheck size={17} />}>
                {ctas.schedule.label}
              </Button>
            </div>
          </div>
          <Reveal>
            <PhotoFrame
              photo={{
                src: technicianPressureTest,
                alt: "HVAC technician checking system pressure gauges",
                position: "58% 52%",
              }}
              aspect="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/5]"
            />
          </Reveal>
        </div>
      </section>

      <EmergencyStrip />
      <TrustBar />

      {/* Services split by category */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <Kicker>What We Service</Kicker>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-semibold md:text-4xl">
            One Company, Three Scales Of HVAC Work
          </h2>
          <div className="mt-10 space-y-12">
            <Reveal>
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">Residential</h3>
                <FeaturedServices
                  featured={getServiceBySlug("24-7-ac-service")!}
                  items={servicesByCategory("residential").filter((s) => s.slug !== "24-7-ac-service")}
                />
              </div>
            </Reveal>
            <Reveal delay={0.06}>
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">Commercial</h3>
                <ServicesGrid items={servicesByCategory("commercial")} />
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.14em] text-muted">Precision &amp; Industrial</h3>
                <ServicesGrid items={servicesByCategory("precision")} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Reveal>
        <WhyChooseUs heading="Why Homeowners And Facility Managers Call Back" items={whyChooseUs} />
      </Reveal>

      <SplitFeature
        heading="Arizona Heat Doesn't Give A System Room To Fail Quietly"
        body="A 112-degree afternoon turns a slow refrigerant leak into a no-cool emergency in hours, not days. Systems here run longer duty cycles than almost anywhere else in the country, which is exactly why maintenance timing and repair speed matter more here than they do most places."
        bullets={[
          "Emergency dispatch built around the summer load, not a normal business day",
          "Diagnosis before repair, every time",
          "Same warranty terms on nights, weekends, and holidays",
        ]}
        mediaLabel="Rooftop condensing unit in direct desert sun"
        image={{
          src: agingMiniSplits,
          alt: "Aging outdoor condensing units mounted on a building wall, showing years of wear",
          position: "center 40%",
        }}
      />

      <Comparison
        heading="Repair Or Replace?"
        left={{
          title: "Repair Usually Makes Sense When",
          points: [
            "The system is under 10 years old",
            "This is the first major repair",
            "The repair cost is a small fraction of replacement cost",
          ],
        }}
        right={{
          title: "Replacement Is Worth Discussing When",
          points: [
            "The compressor has failed on an older system",
            "Repairs are becoming frequent or expensive",
            "Efficiency gains would meaningfully lower summer bills",
          ],
        }}
      />

      {/* Commercial / precision capability */}
      <Reveal>
        <section className="border-b border-border py-16 md:py-24">
          <div className="container-page">
            <Kicker tone="cooling">Beyond The House</Kicker>
            <h2 className="mt-3 max-w-[26ch] text-3xl font-semibold md:text-4xl">
              Data Centers, Cooling Towers, And Mission-Critical Uptime
            </h2>
            <p className="mt-4 max-w-[62ch] text-muted">
              Precision cooling for server rooms, Liebert CRAC support, and cooling tower or fluid cooler service for
              commercial chiller plants, the same equipment classes most residential contractors don't touch.
            </p>
          </div>
          <div className="mt-10">
            <EquipmentGrid
              heading="Precision & Commercial Equipment In Scope"
              items={[
                "Liebert CRAC Units",
                "Chilled Water Systems",
                "Cooling Towers",
                "Fluid Coolers",
                "Rooftop Package Units",
                "Centrifugal & Screw Chillers",
                "Water Source Heat Pumps",
                "Building Controls",
              ]}
            />
          </div>
        </section>
      </Reveal>

      {/* Offers */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <h2 className="max-w-[24ch] text-3xl font-semibold md:text-4xl">Ways To Save On The Work That Matters</h2>
            <Link to={ctas.financing.href} className="flex shrink-0 items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-dark">
              <PiggyBank size={16} />
              {ctas.financing.label}
              <ArrowUpRight size={13} />
            </Link>
          </div>
          <div className="mt-8">
            <KeyPoints
              items={[
                "Free in-home estimate on new installation and replacement",
                "Free second opinion before approving a compressor replacement",
                "Price match on a written bid from a licensed competitor",
              ]}
            />
          </div>
          <OfferCards items={offers} />
        </div>
      </section>

      {/* Brands */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <h2 className="max-w-[24ch] text-3xl font-semibold md:text-4xl">Every Major Brand, One Warranty Standard</h2>
          <div className="mt-8">
            <BrandGrid items={brands} />
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <h2 className="max-w-[24ch] text-3xl font-semibold md:text-4xl">Valleywide, With A Gilbert Home Base</h2>
          <div className="mt-8">
            <ServiceAreaList items={serviceAreas} />
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="border-b border-border py-16 md:py-24">
        <div className="container-page">
          <Kicker>Reviews</Kicker>
          <h2 className="mt-3 max-w-[24ch] text-3xl font-semibold md:text-4xl">What The Valley Says After The Job's Done</h2>
          <div className="mt-8">
            <ReviewsGrid items={reviews.slice(0, 3)} />
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
