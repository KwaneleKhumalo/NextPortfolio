import webDesign from '../images/pricing/web_design.jpg'
import logoDesign from '../images/pricing/logo_design.jpg'
import brand from '../images/pricing/brand.jpg'
import marketing from '../images/pricing/marketing.jpg'

export const Prices = [
  {
    id: 1,
    service: "Web Development",
    services: ["Web Design", "Mobile Responsive", "Search Engine Optimization", "Custom Built"],
    media: webDesign
  },

  {
    id: 2,
    service: "Logo Design",
    services: ["Brand Analysis & Evaluation", "Website Icons", "Color Palette", "Multi-revision", "Pattern Design", "Variations"],
    media: logoDesign
  },

  {
    id: 3,
    service: "Brand Management",
    services: ["Brand Identity & Strategy", "Rebranding & Logo Design", "Marketing Swag", "Web Development", "Web Design", "Business Cards"],
    media: brand
  },

  {
    id: 4,
    service: "Digital Marketing",
    services: ["Google Business", "Social Media Management", "Digital Design", "Graphic Design", "Content Creation"],
    media: marketing
  }
]
