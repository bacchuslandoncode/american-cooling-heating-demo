import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { ServicesHub } from "@/pages/services/ServicesHub";
import { ServiceDetail } from "@/pages/services/ServiceDetail";
import { ProductsHub } from "@/pages/products/ProductsHub";
import { BrandDetail } from "@/pages/products/BrandDetail";
import { WaterSourceHeatPumps } from "@/pages/products/WaterSourceHeatPumps";
import { IndoorAirQuality } from "@/pages/products/IndoorAirQuality";
import { SpecialsHub } from "@/pages/specials/SpecialsHub";
import { OfferDetail } from "@/pages/specials/OfferDetail";
import { ServiceAreas } from "@/pages/ServiceAreas";
import { Reviews } from "@/pages/Reviews";
import { ResourcesHub } from "@/pages/resources/ResourcesHub";
import { Faqs } from "@/pages/resources/Faqs";
import { HeatPumpGuide } from "@/pages/resources/HeatPumpGuide";
import { Glossary } from "@/pages/resources/Glossary";
import { ConsumerLiterature } from "@/pages/resources/ConsumerLiterature";
import { Videos } from "@/pages/resources/Videos";
import { TipsNews } from "@/pages/resources/TipsNews";
import { About } from "@/pages/About";
import { QualityGuarantee } from "@/pages/QualityGuarantee";
import { Contact } from "@/pages/Contact";
import { PrivacyPolicy } from "@/pages/PrivacyPolicy";
import { TermsOfUse } from "@/pages/TermsOfUse";
import { SiteMap } from "@/pages/SiteMap";
import { NotFound } from "@/pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="services" element={<ServicesHub />} />
          <Route path="services/:slug" element={<ServiceDetail />} />

          <Route path="products" element={<ProductsHub />} />
          <Route path="products/water-source-heat-pumps" element={<WaterSourceHeatPumps />} />
          <Route path="products/indoor-air-quality" element={<IndoorAirQuality />} />
          <Route path="products/:slug" element={<BrandDetail />} />

          <Route path="specials" element={<SpecialsHub />} />
          <Route path="specials/:slug" element={<OfferDetail />} />

          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="reviews" element={<Reviews />} />

          <Route path="resources" element={<ResourcesHub />} />
          <Route path="resources/faqs" element={<Faqs />} />
          <Route path="resources/heat-pump-guide" element={<HeatPumpGuide />} />
          <Route path="resources/glossary" element={<Glossary />} />
          <Route path="resources/consumer-literature" element={<ConsumerLiterature />} />
          <Route path="resources/videos" element={<Videos />} />
          <Route path="resources/tips-news" element={<TipsNews />} />

          <Route path="about" element={<About />} />
          <Route path="quality-guarantee" element={<QualityGuarantee />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-of-use" element={<TermsOfUse />} />
          <Route path="site-map" element={<SiteMap />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
