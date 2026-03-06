import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Computer Vision", href: "/solutions" },
    { name: "Language Models (NLP)", href: "/solutions" },
    { name: "Robotics Autonomy", href: "/solutions" },
    { name: "Predictive Analytics", href: "/services" },
  ],
  services: [
    { name: "Custom AI Development", href: "/services" },
    { name: "AI Consulting & Advisory", href: "/services" },
    { name: "Dedicated AI Teams", href: "/services" },
  ]
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/ainexia", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/ainexia", label: "X (Twitter)" },
  { icon: Github, href: "https://github.com/ainexia", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Main footer */}
      <div className="bg-card/30">
        <div className="section-container py-14 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
            {/* Brand - Takes up 4 columns on large screens */}
            <div className="lg:col-span-4 lg:pr-8">
              <Link to="/" className="flex items-center gap-4 mb-6 hover:opacity-80 transition-all duration-300 group inline-flex">
                <div className="relative flex items-center justify-center">
                  <img src={logo} alt="AINEXIA" className="h-10 w-auto transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="flex flex-col leading-none pt-0.5">
                  <span className="text-xl font-extrabold tracking-[0.18em] text-foreground font-display uppercase">AINEXIA</span>
                  <span className="text-[9px] text-primary/80 font-bold tracking-[0.4em] uppercase mt-1">Intelligence</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-sm">
                The Next Era of Intelligent Systems. We design, build, and deploy production-grade AI solutions for real-world business impact.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-xl border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-300"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Section - Takes up 8 columns, split into 3 sub-columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              {/* Solutions */}
              <div>
                <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-[0.15em]">Solutions</h3>
                <ul className="space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-[0.15em]">Services</h3>
                <ul className="space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h3 className="font-semibold mb-6 text-foreground text-sm uppercase tracking-[0.15em]">Company</h3>
                <ul className="space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        to={item.href}
                        className="text-muted-foreground text-sm hover:text-primary transition-all duration-200 hover:translate-x-1 inline-block"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 mt-12 pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AINEXIA Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="mailto:contact@ainexia.in"
              className="flex items-center gap-1.5 text-muted-foreground text-sm hover:text-primary transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              contact@ainexia.in
            </a>
            <span className="text-muted-foreground text-sm hidden sm:inline">
              Mehsana, Gujarat, India · Serving globally
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}