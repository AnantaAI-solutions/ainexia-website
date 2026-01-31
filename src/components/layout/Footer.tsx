import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navigation = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" }
  ],
  services: [
    { name: "Services", href: "/services" },
    { name: "Technologies", href: "/technologies" },
    { name: "Products", href: "/products" }
  ],
  industries: [
    { name: "Industries", href: "/industries" },
    { name: "Use Cases", href: "/industries" }
  ]
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-card/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="section-container py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 hover:opacity-90 transition-opacity">
              <img src={logo} alt="AINEXIA Intelligence" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The Next Era of Intelligent Systems.
              <br />
              Building next-generation AI-powered systems for real-world impact.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Solutions</h3>
            <ul className="space-y-3">
              {navigation.services.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Industries</h3>
            <ul className="space-y-3">
              {navigation.industries.map(item => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AINEXIA Intelligence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">
              India – Mehsana, Gujarat (Serving globally)
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}