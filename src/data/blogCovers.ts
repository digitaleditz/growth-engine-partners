import coverGrowthSystem from "@/assets/images/growth_system_board_1793913330528.jpg";
import coverCorporatePipeline from "@/assets/images/corporate_lead_engine_1793913383787.jpg";
import coverBrandFlywheel from "@/assets/images/brand_growth_flywheel_1793913384281.jpg";
import coverLuxuryVilla from "@/assets/images/luxury_villa_dusk_1793913356272.jpg";
import coverGoogleSearch from "@/assets/images/google_search_desk_1793913355141.jpg";
import coverMetaAds from "@/assets/images/meta_ads_dashboard_1793913354905.jpg";
import coverRealtyChecklist from "@/assets/images/real_estate_checklist_1793913381834.jpg";
import coverCpaAnalytics from "@/assets/images/cpa_analytics_chart_1793913382564.jpg";
import coverLandingDesign from "@/assets/images/landing_page_design_1793913356279.jpg";
import coverWhatsappCrm from "@/assets/images/whatsapp_crm_flow_1793913356924.jpg";
import coverD2cShoot from "@/assets/images/d2c_product_studio_shoot_1793911408320.jpg";
import coverCommercialProperty from "@/assets/images/real_estate_luxury_property_1793911388667.jpg";
import coverAgencyTeamBrainstorm from "@/assets/images/agency_vs_inhouse_1793913384196.jpg";

const covers: Record<string, string> = {
  // 1. Connected Digital Growth System
  "connected-digital-growth-system": coverGrowthSystem,

  // 2. Individual Services vs Integrated Engagement
  "individual-services-vs-integrated-engagement": coverCorporatePipeline,

  // 3. Aligning Brand, Website, Content, Acquisition & CRM
  "aligning-brand-website-content-acquisition-crm": coverBrandFlywheel,

  // 4. Real Estate Brand Performance Marketing in J&K
  "real-estate-brand-performance-marketing": coverLuxuryVilla,

  // 5. Google Ads for Real Estate Leads
  "google-ads-real-estate-leads": coverGoogleSearch,

  // 6. Meta Ads for Real Estate Leads
  "meta-ads-real-estate-leads": coverMetaAds,

  // 7. 10-Point Checklist for Choosing a Real Estate Agency
  "real-estate-lead-generation-agency-checklist": coverRealtyChecklist,

  // 8. Reducing Cost Per Lead (CPA) Without Sacrificing Quality
  "reduce-cost-per-lead-real-estate": coverCpaAnalytics,

  // 9. Real Estate Landing Page Architecture That Converts
  "real-estate-landing-page-that-converts": coverLandingDesign,

  // 10. WhatsApp Automation & CRM Routing for Real Estate Leads
  "whatsapp-crm-follow-up-real-estate-leads": coverWhatsappCrm,

  // 11. D2C Brand Marketing Playbook
  "d2c-brand-marketing-playbook": coverD2cShoot,

  // 12. Service Business Lead Generation System
  "service-business-lead-generation-system": coverCommercialProperty,

  // 13. Agency vs In-House Marketing Team Comparison
  "agency-vs-in-house-marketing-team": coverAgencyTeamBrainstorm,
};

export const getCover = (slug: string) => covers[slug] ?? coverGrowthSystem;

export default covers;
