import Link from "next/link"
import { Github, Instagram, Linkedin, Twitter } from "lucide-react"
import { BRAND_NAME, CONTACT_EMAIL } from "@/lib/constants"

export function FooterSection() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 md:py-16 border-t border-blue-800/20 bg-black relative">
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/80 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="relative w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-sm opacity-70 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">W</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-blue-300 transition-colors">{BRAND_NAME}</span>
            </Link>
            <p className="text-blue-200/60 text-sm leading-relaxed mb-6">
              Architecting the future of digital interaction with immersive web experiences that captivate and convert.
            </p>
            <div className="flex gap-5">
              {[
                { href: "#", icon: Twitter, label: "Twitter" },
                { href: "#", icon: Instagram, label: "Instagram" },
                { href: "#", icon: Linkedin, label: "LinkedIn" },
                { href: "#", icon: Github, label: "GitHub" },
              ].map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="text-blue-400/70 hover:text-blue-300 transition-colors duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-blue-100 tracking-wide uppercase">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Design",
                "Web Development",
                "UI/UX Strategy",
                "AI Integration",
                "Brand Architecture",
              ].map((service) => (
                <li key={service}>
                  <Link href="#services" className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors duration-200">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-blue-100 tracking-wide uppercase">Company</h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Work", href: "#projects" },
                { label: "Careers", href: "#" },
                { label: "Insights Blog", href: "#" },
                { label: "Contact Matrix", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-blue-200/60 hover:text-blue-300 transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-blue-100 tracking-wide uppercase">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="text-blue-200/60 hover:text-blue-300 transition-colors duration-200">
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </li>
              <li className="text-blue-200/60 hover:text-blue-300 transition-colors duration-200">
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li className="text-blue-200/60">
                123 Innovation Nexus
                <br />
                Cyberspace District, CA 94103
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200/40 text-xs mb-4 md:mb-0">
            &copy; {currentYear} {BRAND_NAME} Digital Architects. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Protocol", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Sitemap", href: "#" },
            ].map((link) => (
               <Link
                key={link.label}
                href={link.href}
                className="text-blue-200/40 text-xs hover:text-blue-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
} 
