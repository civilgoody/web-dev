export const BRAND_NAME = "webdev";
export const BRAND_TAGLINE = "Future Web Design"; // Example tagline, can be adjusted
export const BRAND_DOMAIN = "webdev.ng"; // Domain name
export const CONTACT_EMAIL = `connect@${BRAND_DOMAIN}`; 

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#featured-projects" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" }, // Added Pricing link
] 
