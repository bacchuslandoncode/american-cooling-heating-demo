import { SealCheck } from "@phosphor-icons/react";
import { Breadcrumbs } from "@/components/sections/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ReviewsGrid } from "@/components/sections/ReviewsSection";
import { ContextualCTA } from "@/components/sections/ContextualCTA";
import { reviews, reviewPlatforms } from "@/data/reviews";

export function Reviews() {
  return (
    <div>
      <Breadcrumbs trail={[{ label: "Reviews" }]} />
      <PageHero
        kicker="Reviews"
        title="What The Valley Says"
        subhead="Reviews from Google and Yelp, alongside a complaint-free record with the Arizona Registrar of Contractors and a BBB A+ rating."
      />
      <section className="border-b border-border py-10">
        <div className="container-page flex flex-wrap items-center gap-8">
          {Object.values(reviewPlatforms).map((p) => (
            <div key={p.label} className="flex items-center gap-2 text-sm text-ink">
              <SealCheck size={16} className="text-brand" />
              {p.label}
            </div>
          ))}
        </div>
      </section>
      <section className="py-14 md:py-20">
        <div className="container-page">
          <ReviewsGrid items={reviews} />
        </div>
      </section>
      <ContextualCTA label="Ready to be the next five-star call? Schedule service." action="schedule" />
    </div>
  );
}
