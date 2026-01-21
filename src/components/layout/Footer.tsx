import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
const navigation = {
  company: [{
    name: "About Us",
    href: "/about"
  }, {
    name: "Careers",
    href: "/careers"
  }, {
    name: "Contact",
    href: "/contact"
  }],
  services: [{
    name: "Services",
    href: "/services"
  }, {
    name: "Technologies",
    href: "/technologies"
  }, {
    name: "Products",
    href: "/products"
  }],
  industries: [{
    name: "Industries",
    href: "/industries"
  }, {
    name: "Use Cases",
    href: "/industries"
  }]
};
export function Footer() {
  return <footer className="border-t border-border bg-card">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={logo} alt="AnantaAI Logo" className="h-8 w-auto" />
              <span className="font-semibold text-lg text-destructive">AnantaAI Solutions</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Infinite Intelligence. Practical Solutions.
              <br />
              Building custom AI products for real-world impact.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map(item => <li key={item.name}>
                  <Link to={item.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {navigation.services.map(item => <li key={item.name}>
                  <Link to={item.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {navigation.industries.map(item => <li key={item.name}>
                  <Link to={item.href} className="text-muted-foreground text-sm hover:text-foreground transition-colors">
                    {item.name}
                  </Link>
                </li>)}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} AnantaAI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-muted-foreground text-sm">
              India – Mehsana, Gujarat (Serving globally)
            </span>
          </div>
        </div>
      </div>
    </footer>;
}