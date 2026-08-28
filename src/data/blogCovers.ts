import coverConnected from "@/assets/blog-connected-system.jpg";
import coverChoose from "@/assets/blog-choose-engagement.jpg";
import coverAlignment from "@/assets/blog-alignment.jpg";
import coverRealEstate from "@/assets/blog-real-estate.jpg";
import coverGoogleAds from "@/assets/blog-google-ads.jpg";
import coverMetaAds from "@/assets/blog-meta-ads.jpg";
import coverD2C from "@/assets/blog-d2c.jpg";

const covers: Record<string, string> = {
  "connected-digital-growth-system": coverConnected,
  "individual-services-vs-integrated-engagement": coverChoose,
  "aligning-brand-website-content-acquisition-crm": coverAlignment,
  "real-estate-brand-performance-marketing": coverRealEstate,
  "google-ads-real-estate-leads": coverGoogleAds,
  "meta-ads-real-estate-leads": coverMetaAds,
  "real-estate-lead-generation-agency-checklist": coverRealEstate,
  "reduce-cost-per-lead-real-estate": coverGoogleAds,
  "real-estate-landing-page-that-converts": coverAlignment,
  "whatsapp-crm-follow-up-real-estate-leads": coverMetaAds,
  "d2c-brand-marketing-playbook": coverD2C,
  "service-business-lead-generation-system": coverConnected,
  "agency-vs-in-house-marketing-team": coverChoose,
};

export const getCover = (slug: string) => covers[slug] ?? coverConnected;

export default covers;
