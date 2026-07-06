# Content Coverage Inventory - American Cooling And Heating

Source: https://americancoolingandheating.com/ (live site, fetched 2026-07-06)
Purpose: account for every service, product, brand, resource, location, offer, warranty,
license, and legal item on the current site before building the demo. This file is the
audit trail, not the demo copy. Copy will be rewritten/modernized in the build phase, but
every fact below must remain traceable to a real source line.

---

## 1. Main Navigation (as currently structured)

1. Home
2. On Sale - Heat Pumps On Sale, Air Conditioning On Sale, Regions Bank HVAC Financing
3. Services - Fast A/C Service 24/7, Residential HVAC Services, Commercial HVAC Services,
   Liebert CRAC Services, Trane Commercial Services, Carrier Commercial Services,
   Arizona Cooling Tower Services, All Services Offered
4. Products - Trane, York, Goodman, Carrier, Rheem, Amana, Other Major Brands,
   Baltimore Air Coil, Cooling Towers And Fluid Coolers, Water Source Heat Pumps
5. Areas - Gilbert, Mesa, Tempe, Chandler, Scottsdale, Queen Creek, Phoenix Metro Area
6. News
7. Tips - FAQ's, What Is A Heat Pump?, HVAC Glossary, Consumer Literature, Videos,
   HVAC Learning / Study Guides
8. About Us - Company Information, Quality Guarantee, Our Reviews, Contact Us

**Note:** Lennox and Ruud are sold/serviced (confirmed via product pages and homepage
copy) but do not have a dedicated top-nav product entry - they live one level deeper.

---

## 2. Sitemap Inventory (grouped, not a raw URL dump)

The live sitemap index (`sitemap.xml`) references 5 sub-sitemaps: pages, posts,
categories, tags, authors. Full URL lists were pulled from `page-sitemap.xml`,
`post-sitemap.xml`, and `category-sitemap.xml`.

### 2.A Page sitemap - ~185 URLs, grouped by function
- Homepage
- Repair service hub + 6 city variants x (AC repair, heating repair) = ~12 city/service
  combination pages, plus a "we serve all cities" / valleywide repair rollup
- Installation/replacement hub + 6 city variants x (AC install, heating install) = ~12
  city/service combination pages, plus a valleywide install rollup
- Maintenance hub (single page, not city-split)
- Commercial & industrial hub (single page)
- Liebert CRAC / precision cooling hub (single page)
- Cooling tower services hub + cooling towers/fluid coolers product page + Baltimore Air
  Coil brand page
- Trane commercial hub + Carrier commercial hub
- Water source heat pumps page
- Custom design projects page (commercial/industrial custom engineering)
- Brand/product family pages: Trane (furnaces, package units, air handlers, coils,
  thermostats, humidifiers, Nexia, consumer literature, product data), Amana (~20
  sub-pages: Distinctions and Premium lines across AC/heat pump/package/furnace/coils/
  controls/UV/ventilation/humidification/filtration), Goodman (AC, heat pumps, package
  units), Carrier (AC, air handlers, coils, furnaces, IAQ, controls, heat pumps, package
  systems, product data, consumer literature), Rheem (AC, heat pumps, package units,
  repair service), York (AC/heat pump systems, service), Lennox (service page),
  ClimateMaster geothermal heat pumps
- 8 dedicated "AC service in [city]" landing pages: Gilbert, Mesa, Tempe, Chandler,
  Scottsdale, Glendale, Peoria, Queen Creek, Sun City
- Areas hub page + individual Queen Creek and Sun City area pages + "cities serviced" page
- On Sale hub + 3 sub-pages: AC sale, heat pump sale, air handler/furnace sale
- Financing page (Regions Bank)
- Reviews page, Company Information (about) page, Quality Guarantee page, Contact Us
  (two versions: `/contact-us` and `/contact-us-2`), Phone Numbers page
- FAQ, Glossary, What Is A Heat Pump, Consumer Literature (10 downloadable PDFs), Videos
  (+ 4 brand video sub-pages), Tips hub, HVAC Learning / NATE study guide pages (3)
- Privacy Policy, Terms of Use, Site Map page, Pay Online + Pay Online PayPal
- Miscellaneous/legacy: `/test`, `/test4`, `/system-450-test` (dev/QA leftovers, no
  content value), `/chandler-wrestling-fundraiser` (local sponsorship post),
  `/mesa-arizona-weather`, `/mesa-arizona-map` (local reference pages), a handful of
  near-duplicate slugs for the same brand/topic (e.g. two Trane heat pump equipment
  pages, two "about Carrier" style pages)

### 2.B Post sitemap - ~185 blog posts (2011-2026)
Individually enumerating every post is not useful for architecture planning. Grouped by
theme (via the live category sitemap, `category-sitemap.xml`):
- AC repair / AC service / AC installation / AC replacement tips
- Heat pump buying, maintenance, and troubleshooting posts
- Trane, Carrier, Goodman, Rheem, Amana, Lennox product/news posts
- Liebert precision cooling / data center HVACR posts
- Commercial HVAC / commercial controllers / Trane Tracer Concierge posts
- Seasonal cooling & heating tips (energy savings, monsoon/summer prep, filters,
  thermostats, indoor air quality, mold, insulation)
- Sales/promo announcements tied to specific cities and years (2012-2020 seasonal sales)
- A "global warming / climate change" editorial series (2014, includes a "persons of
  interest" sub-series) - dated opinion content, not a service offering
- Local/press-release posts (military discount announcement, city service launch
  announcements, a 2026 Gilbert installation news post)
- One community post: Chandler Wrestling fundraiser sponsorship

**Recommendation:** none of the blog archive needs to be rebuilt post-by-post for the
demo. It's accounted for here as "News / Tips" thematic coverage (see Section 12).

### 2.C Category sitemap - ~40 taxonomy terms
Confirms the theme groupings above (ac-repair, ac-installation, ac-replacement,
ac-service, heat-pumps, heating, trane, carrier, goodman, rheem-ac-products,
lennox-air-conditioning, amana-air-conditioning, liebert-precision-cooling-systems,
arizona-commercial-air-conditioning-hvac, hvac-maintenance, hvac-sales, air-purification,
air-cleaners, controls-and-switches (+ thermostats-and-controllers, commercial-controllers,
trane-tracer-concierge sub-terms), repair-or-replace, global-warming-2 (+ persons-of-
interest sub-term), gilbert-az, arizona-local, people, press-release, news, deals,
copeland-scroll-compressors, economic-ac-pricing, energy-efficient-hvac, home-maintenance,
uncategorized).

---

## 3. Services

**Services hub page (`/services`) states three residential categories (repair,
installation, maintenance) plus commercial/industrial, Liebert CRAC, Trane commercial,
Carrier commercial, and cooling tower services**, all under one roof with one phone number.

## 4. Residential Services

- AC and heat pump repair (all makes and models)
- AC and heat pump installation/replacement
- Furnace repair, installation, service
- Package units, split systems, condensing units, air handlers
- Annual/semi-annual maintenance program
- Free estimates on new installation/replacement
- Weekend and after-hours installation available
- City-specific residential landing pages: Gilbert, Mesa, Tempe, Chandler, Scottsdale,
  Glendale, Peoria, Queen Creek, Sun City (repair and install variants per city)

## 5. Commercial and Industrial Services

Facility types named on-site: data centers, telecommunications, hospitals, retail
centers, restaurants, banks, industrial facilities.

Equipment/scope named on-site: mission-critical cooling, computer room air conditioning,
electronics cooling, process cooling, chillers (centrifugal, reciprocating, screw),
cooling towers, air handlers, compressors, motors, control systems, thermal analysis,
motor bearing inspections, custom design/engineering projects.

Brands the company is trained on for commercial work: Trane, Carrier, Lennox, York,
Rheem, Liebert.

Service options: 24/7 emergency repair, installation/retrofit, maintenance contracts,
custom engineering.

## 6. 24/7 Emergency AC Service

- Homepage and services hub both lead with "Fast 24 Hour Air Conditioning and Heat Pump
  Service," "24 Hour Service, Open Nights And Weekends," "Valleywide Service - Fast
  Response 24/7."
- **No page states unconditional guaranteed dispatch.** Per the user's brief, this must
  be presented with the caveat that after-hours/emergency response depends on technician
  availability and schedule - the live site does not explicitly print that caveat, but it
  should be added in the demo to keep the claim honest and defensible.

## 7. Repair Pages

Repair hub (`/arizona-air-conditioning-and-heating-repair-service`) plus per-city
AC-repair and heating-repair pages for Chandler, Phoenix, Peoria, Scottsdale, Tempe,
Glendale, and a "we serve all cities / valleywide" repair rollup. Separate brand-specific
repair pages exist for Trane, Carrier, Rheem.

## 8. Installation and Replacement Pages

Install/replacement hub (`/arizona-air-conditioning-and-heating-installation-replacement`)
plus per-city AC-install and heating-install pages for Scottsdale, Peoria, Phoenix,
Chandler, Tempe, Glendale, and a valleywide install rollup. Also a general
`/air-conditioning-and-heating-installation` page and an
`/air-conditioning-and-heating-repair-and-installation-for-arizona` combined page.

## 9. Maintenance Pages

Single hub page: `/arizona-air-conditioning-and-heat-pump-maintenance`.
- "Annual or semi-annual system maintenance program"
- Checks: airflow measurements, refrigerant levels, manufacturer install specs, national/
  local code and electrical compliance
- Stated benefit: "10% to 25% reduction in energy consumption" from proper maintenance
- Stated cost-of-neglect figure: a dirty filter "can increase operating costs by $200 per
  10,000 cfm"
- No named maintenance plan tiers or membership pricing published on-site.

## 10. Cooling Towers and Fluid Coolers

Pages: `/arizona-cooling-tower-services`, `/cooling-towers-and-fluid-coolers`,
`/baltimore-air-coil`.
- Distinction stated on-site: "A Cooling Tower is typically used to reject unwanted heat
  from a chiller" vs. "A Fluid Cooler is typically used to reject unwanted heat from
  water source heat pumps."
- Brands named: Baltimore Air Coil (BAC), Marley, Evapco, Recold, Frigid Coil, CTS, Imeco.
  **Flag:** user brief named Baltimore Aircoil, Marley, Evapco explicitly; Recold, Frigid
  Coil, CTS, and Imeco were found on-site but not in the user's brief - confirm before
  using in the demo.
- Covers evaporative cooling towers and closed-circuit dry coolers.

## 11. Liebert CRAC / Precision Cooling

Page: `/arizona-liebert-precision-cooling-crac-systems-installation-service-repair`.
- Scope: installation, repair, and support for Liebert mission-critical precision cooling
  in data centers/server rooms.
- Named equipment: Liebert CW (chilled water, remote monitoring), Liebert iCOM (manages
  up to 32 units), Liebert DS (dual-circuit), Liebert XD (targeted heat-density cooling),
  Liebert DCW (water-based rack enclosure), Liebert DCP (water-based pumping unit).
- Positioning: reduced energy consumption, uptime/dependability for IT/data-center
  managers.

## 12. Trane and Carrier Commercial Pages

**Trane commercial** (`/trane-commercial-hvac-services-az`): Precedent and Voyager light
commercial rooftop units (3-25 tons), Odyssey split systems, IntelliPak large packaged
units. Services: install/replacement, repair, digital controls, startup/commissioning,
warranty service, planned maintenance agreements, 24-hour emergency service.

**Carrier commercial** (`/carrier-commercial-hvac-services-az`): WeatherMaker,
WeatherMaster, and Centurion rooftop units (3-27.5 tons), Gemini split systems,
WeatherExpert large units (75-150 tons), Aero and Airovision air handlers. Services:
commercial design, replacement/retrofit, repair, 24-hour emergency service, maintenance
agreements, warranty service.

## 13. Products and Brands

Confirmed brand pages/mentions on-site: **Trane, Goodman, Ruud, Carrier, York, Amana,
Rheem, Lennox** (all in user brief and confirmed). **American Standard, Day & Night,
Intertherm** from the user brief were **not found** on any fetched page or nav entry -
flag as unconfirmed, do not state these as current brands in the demo without further
verification. **ClimateMaster** (geothermal heat pumps) appears on-site but was not in
the user's brief - confirmed real, safe to include as a water-source/geo product line.

Product categories: package units, split systems, air handlers, evaporator coils,
furnaces (gas, and one oil-furnace blog reference under Carrier Performance Series),
thermostats/controls, humidifiers, UV/air purification, ventilation, water source heat
pumps.

## 14. On Sale Pages

Hub `/on-sale` + `/on-sale/ac-sale`, `/on-sale/heat-pump-sales-in-arizona`,
`/on-sale/air-conditioning-sales-in-arizona`, `/on-sale/air-handler-furnace-sales-in-arizona`.
- No fixed prices published; copy states inventory/pricing "frequently changes" with
  factory rebates.
- **Price match guarantee found on-site (not in user brief):** "If you provide a written
  bid from a licensed competitor, we will match it, or as in most cases we'll beat it."
  Flag for confirmation before using in the demo.

## 15. Financing

Page: `/hvac-financing`. Lender: Regions Bank. Application path: call (888) 724-3530,
give dealer number 1289 and plan number DRE2922 (traditional installment loan), request
e-sign. Payment estimator tool linked (`homeimprovement.rhif.regions.com`). No APR or
promotional rate published on-site.

## 16. Service Areas

Confirmed cities: Gilbert, Mesa, Tempe, Chandler, Scottsdale, Phoenix, Glendale, Peoria,
Queen Creek, Sun City, "Phoenix Metro Area," "valleywide," "surrounding cities, towns,
and areas," Arizona generally. Dedicated per-city "AC service in [city]" pages exist for
all of the above except plain "Phoenix" (which is covered as "Phoenix Metro Area" /
`ac-service-phoenix-az`, confirmed present).

## 17. Reviews / Testimonials

Platforms: Google (primary, linked to Google Maps listing), Yelp (badge/link found,
**not in user brief** - flag), BBB A+ (rating, not a review platform).
All visible testimonials show 5-star ratings. Named reviewers found: Lucy A. (Mesa),
Patrick H. (Scottsdale), Julie M. (Tempe), James, Manny, Joan, Jim, GM, Ed, Bob & Sheila,
Waheed, Robert, M. Scutt, Wayne W., Mary B., Henry R., Eileen B., Chris S., Aaron A.,
Cecilia W., Thomas W. Recurring themes: fast response, honest/fair pricing, technician
professionalism and knowledge. **No total review count or aggregate star average is
published on-site** - do not invent one for the demo.

## 18. FAQ, Glossary, Heat Pump Explainer, Videos, Consumer Literature, News/Tips

- **FAQ** (`/heating-and-air-conditioning-faqs`): 9 Q&As covering SEER, HSPF, AFUE,
  winterizing outdoor units, thermostat auto-vs-on, landscaping clearance (18 inches
  minimum), matched-system replacement, sizing factors, split system vs. package unit.
- **What Is A Heat Pump** (`/what-is-a-heat-pump`): explains refrigerant cycle, reversing
  valve, R22/R410A mention, air-source vs. ground-source/geothermal types, notes a
  standard AC is a heat pump running cooling-only.
- **Glossary** (`/heating-and-air-conditioning-glossary`): dictionary of HVAC terms (Air
  Change, BTU, Compressor, Damper, Evaporator, HVAC, Heat Pump, SEER, Split System,
  Thermostat, and more).
- **Videos** (`/videos` + 4 sub-pages): a navigation hub linking to brand-specific video
  libraries for Carrier, Goodman, Trane (including commercials), Rheem. No embedded video
  library of its own beyond links.
- **Consumer Literature** (`/air-conditioning-and-heating-consumer-literature`): 10
  downloadable ACCA-sourced PDFs (professional design, SEER 13 efficiency, outside air/
  ventilation, formicary corrosion, filter selection, coil cleaning, carbon monoxide
  safety, indoor air quality, mold, humidity control).
- **HVAC Learning / Study Guides**: 3 pages under `/hvac-learning-study-guides`,
  `/air-conditioning-refrigeration-education-learning-study-guides`,
  `/nate-certification-study-guides` - positions the company around NATE-certification-
  level technical knowledge.
- **News/Tips hub** (`/air-conditioning-news-tips`, `/heating-and-air-conditioning-tips`):
  rolls up the blog archive described in Section 2.B.

## 19. About / Company History

Page: `/company-information`.
- **Founded 1993** (confirmed, matches user brief).
- Founding intent: "to create a company built on integrity and quality workmanship."
- Staffing claim: technicians/craftspeople "must pass intensive background checks, drug
  testing, skill related testing, and the final company stamp of approval."
- Clientele claim: serves "large global and national organizations as well as small
  businesses and individuals"; "almost all of the work we do is through referral."
- **Licenses (confirmed, exact):**
  - AZROC K79, license #183933 - Residential, Commercial, Industrial HVAC and
    Refrigeration Contractor
  - AZROC KB2, license #238225 - Residential, Commercial General Contractor
  - **TDLR TACLA21146C (Texas)** - found in the same block as the two AZ licenses.
    **Flag:** this is a Texas licensing board credential on an Arizona-only service
    business; not in the user's brief and not corroborated elsewhere on-site. Do not
    use in the demo without the client confirming it's current/applicable - it reads
    as likely stale/legacy content on the source site.
- No specific staff names, headshots, or team bios found anywhere on-site.
- No specific award names or third-party award badges found (BBB A+ and AZ ROC
  complaint-free are standing/status claims, not awards).

## 20. Quality Guarantee

Page: `/quality-guarantee`.
- Installation: "all of our installation workmanship is warranted for the life of your
  new unit" (lifetime workmanship warranty - confirmed).
- Repair: "all parts and labor are warrantied for a period of three years, if the same
  component fails within the three year period then a new component will be installed
  at no additional cost and the three year warranty starts again" (three-year parts and
  labor warranty - confirmed, with the specific reset-on-failure detail not in the user's
  brief but worth preserving as accurate detail).
- "All Work Is 100% Guaranteed."
- Free estimate via phone call (confirmed).
- **Free second opinion on compressor replacements** was in the user's brief but was
  **not found verbatim** on the Quality Guarantee page in this fetch - it may live on a
  different page (e.g. a repair or replacement sub-page not yet fetched). Treat as
  "stated by user as accurate" and preserve it, but note the source page for it wasn't
  directly located during this pass.

## 21. Contact Information

- **Phone (primary, homepage/footer/nav):** (480) 699-2516
- **Phone (regional, found on `/american-cooling-and-heating-phone-numbers` only):**
  Central (602) 734-5422, West (623) 335-7697. **Flag:** not in user brief; these read as
  legacy regional routing numbers. Recommend keeping (480) 699-2516 as the single CTA
  number in the demo and, at most, footnoting the others on a contact page if desired.
- **Email (contact page only):** service@americancoolingandheating.com (confirmed)
- **Address conflict (confirmed, matches user brief exactly):**
  - Homepage / footer / phone-numbers page: 3651 E Baseline Rd E-111, Gilbert, AZ 85234
  - `/contact-us-2`: 745 N Gilbert Rd #124/276, Gilbert, AZ 85234
  - `/contact-us` (v1): no address rendered in this fetch, phone only.
- No published business hours beyond the 24/7 emergency framing.

## 22. Footer / Legal Links

- Privacy Policy (`/privacy-policy`): collects name/contact/demographic info, states
  "never sell your information," no first-party cookies (third-party linked sites may
  use their own), customers can request their data.
- Terms of Use (`/terms-of-use`): standard site-usage terms, no service-quality
  warranty implied by site use, proprietary content, liability limitation, "first come,
  first served" service basis, company-chosen jurisdiction for disputes.
- Site Map page (`/site-map-for-american-cooling-and-heating`) - a human-readable sitemap
  (fetch timed out in this pass; structure is otherwise fully covered via the XML
  sitemaps in Section 2).
- Pay Online / Pay Online PayPal pages - confirm "payments accepted" claim from user
  brief.
- Social: Facebook and Google+ links referenced on-site (Google+ is a defunct platform -
  flag as stale, do not carry into the demo).

## 23. Conflicts, Duplicates, and Risks Flagged

| # | Item | Detail |
|---|------|--------|
| 1 | **Address conflict** | Homepage/footer says 3651 E Baseline Rd E-111; `/contact-us-2` says 745 N Gilbert Rd #124/276. Both Gilbert, AZ 85234. **Resolved for the demo (2026-07-06):** the demo publicly shows only the contact-page address (745 N Gilbert Rd #124/276) with no visible conflict banner, per updated project direction. The discrepancy is tracked here only; confirm the correct address with the client before this goes live. |
| 2 | **Three phone numbers** | Primary (480) 699-2516 vs. regional (602) 734-5422 / (623) 335-7697 found only on one page. Recommend single-number CTA per user's brief. |
| 3 | **Texas license (TDLR TACLA21146C)** | Appears alongside two valid Arizona ROC licenses on an AZ-only business. Likely stale content. Exclude from demo unless client confirms. |
| 4 | **Google+ link** | Defunct social platform still linked on live site. Exclude from demo. |
| 5 | **Dev/test pages** | `/test`, `/test4`, `/system-450-test` are leftover QA pages with no content value. No action needed, just noting they exist so "everything is accounted for." |
| 6 | **Brands: American Standard, Day & Night, Intertherm** | Not found on any fetched page during the automated crawl. **Included in the demo (2026-07-06) per explicit project direction** on the "Other Major Brands" product page. Still not independently verified against the live site; confirm with the client before treating as fact outside this demo. |
| 7 | **Cooling tower brands: Recold, Frigid Coil, CTS, Imeco** | Found on-site in addition to Baltimore Air Coil/Marley/Evapco from the brief. Recommend confirming before use. |
| 8 | **Price match guarantee** | Found on-site, not in user brief: "match or beat a written competitor bid." Recommend confirming before use since it's a binding-sounding commercial claim. |
| 9 | **Yelp reviews** | Found on-site, not in user brief (brief only mentioned reviews generally + BBB). Safe to include as an additional real platform. |
| 10 | **No published review count/star average** | Neither the site nor the user brief gives a specific number. Demo must not invent one (e.g. no fake "500+ five-star reviews"). |
| 11 | **Free second opinion on compressor replacements** | User-confirmed fact, but the specific source page wasn't located in this pass (checked Quality Guarantee page, not present verbatim there). Treat as accurate per user instruction; keep language general rather than page-specific. |
| 12 | **Maintenance plan tiers** | No named/priced membership plans found anywhere on-site - only a general "annual or semi-annual" program description. Demo should describe the program qualitatively, not invent tier names or prices. |
| 13 | **On Sale specific pricing** | No live prices found; site explicitly says pricing "frequently changes." Demo should use a "current offers/call for pricing" pattern, not fabricated dollar amounts. |
| 14 | **Financing terms** | Dealer/plan numbers are real and specific (Regions Bank, dealer #1289, plan #DRE2922); no APR published. Demo should reference "financing available through Regions Bank" without inventing an APR. |
| 15 | **"Why choose us" claims** | Up-front flat-rate pricing, work-area mats/shoe covers, friendly technicians, and a well-stocked service fleet were provided as required content (2026-07-06) but weren't independently located on a specific crawled page. Included as qualitative service-standard claims, no invented numbers attached. Confirm wording with the client. |
| 16 | **Commercial facility list expansion** | Municipalities, federal organizations, business centers, churches, and civic centers were added to the commercial/industrial facility list per updated direction (2026-07-06); not independently confirmed on a specific crawled page. |
| 17 | **"Family-run" claim (corrected)** | The trust bar originally paired "Since 1993" with "Family-run, Valley-built." "Family-run" was never sourced from the live site or the user's fact list and has been removed during the premium polish pass (2026-07-06); replaced with the verifiable "Based in Gilbert, Arizona." No other unverified ownership/staffing claims were found on re-audit. |

---

## 24. Premium Polish Pass (2026-07-06)

**Covered** (no content change, verified still present and correctly sourced):
- All 22 required page topics from the previous build (services, brands, specials, service areas,
  reviews, resources, about, quality guarantee, contact, legal, site map).
- Since 1993, 24/7 with availability caveat, 3-year repair warranty, lifetime install warranty,
  free estimates, free second opinion, licensed/bonded/insured, BBB A+, AZ ROC complaint-free,
  NATE certified, Regions Bank financing details, senior/military discounts, all service areas,
  all brands.

**Consolidated:**
- CTA vocabulary unified into four canonical actions (`Call`, `Schedule Service`,
  `Request Free Estimate`, `View Financing`) defined once in `src/data/siteConfig.ts` and reused
  everywhere, replacing ad hoc button labels ("View Services," "Email Us," a bare phone number)
  that varied page to page.
- Bento-style grids that previously used a shared-background fill technique (brand grid, brand
  product-line lists, indoor air quality, quality guarantee, services grid) were consolidated onto
  either independent bordered cards or an odd-item-spans-full-width rule, removing every visible
  empty filled slab that appeared when an item count didn't divide evenly into the column count.
- Home page services section consolidated into a single mixed bento (one featured card plus a
  supporting grid) instead of a uniform card wall, and three scroll-reveal moments were added
  (services, why-choose-us, commercial capability) as the only motion on the page beyond the hero.

**Omitted:** none. No page or section was removed as duplicate or obsolete in this pass.

**Source conflict notes:**
- Address conflict (homepage/footer vs. contact page on the live site) remains unresolved on the
  real site; the demo continues to show only the contact-page address, per prior direction, with
  the discrepancy tracked here rather than displayed publicly.
- The "family-run" trust-bar claim was found to be unsourced and was corrected (see row 17 above).
  This is the only fabricated-sounding claim identified and removed during this pass; the
  previously-flagged items (rows 6, 7, 8, 15, 16) remain open questions for the client, not errors,
  since they were supplied as explicit build instructions rather than invented by the build.
