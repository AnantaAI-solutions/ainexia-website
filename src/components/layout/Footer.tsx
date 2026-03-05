import { Link } from "react-router-dom";
import { Linkedin, Twitter, Github, ArrowRight, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  services: [
    { name: "AI Services", href: "/services" },
    { name: "Technologies", href: "/technologies" },
    { name: "Products", href: "/products" },
  ],
  industries: [
    { name: "Industries", href: "/industries" },
    { name: "Drones & Robotics", href: "/industries" },
    { name: "Healthcare AI", href: "/industries" },
    { name: "Enterprise AI", href: "/industries" },
  ],
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
                <img src={logo} alt="AINEXIA Intelligence" className="h-10 w-auto rounded-lg" />
                <div className="flex flex-col leading-none">
                  <span className="text-lg font-bold tracking-tight gradient-text">AINEXIA</span>
                  <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Intelligence</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                The Next Era of Intelligent Systems. Building production-grade AI for real-world impact.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg border border-border/70 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-5 text-foreground text-sm uppercase tracking-widest">Company</h3>
              <ul className="space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-5 text-foreground text-sm uppercase tracking-widest">Solutions</h3>
              <ul className="space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h3 className="font-semibold mb-5 text-foreground text-sm uppercase tracking-widest">Industries</h3>
              <ul className="space-y-3">
                {navigation.industries.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
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
      </div>
    </footer>
  );
}