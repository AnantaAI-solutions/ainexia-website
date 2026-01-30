import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
const navigation = [{
  name: "Home",
  href: "/"
}, {
  name: "About",
  href: "/about"
}, {
  name: "Services",
  href: "/services"
}, {
  name: "Technologies",
  href: "/technologies"
}, {
  name: "Products",
  href: "/products"
}, {
  name: "Industries",
  href: "/industries"
}, {
  name: "Careers",
  href: "/careers"
}, {
  name: "Contact",
  href: "/contact"
}];
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/50">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 opacity-50" />
      
      <nav className="section-container relative flex items-center justify-between py-4">
        <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
          <img src={logo} alt="AINEXIA Intelligence" className="h-20 w-auto rounded-none" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map(item => <Link key={item.name} to={item.href} className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${location.pathname === item.href ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}>
              {item.name}
            </Link>)}
        </div>

        <div className="hidden lg:block">
          <Button variant="hero" size="sm" asChild>
            <Link to="/contact">Start Your AI Project</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="section-container py-4 flex flex-col gap-2">
            {navigation.map(item => <Link key={item.name} to={item.href} onClick={() => setMobileMenuOpen(false)} className={`px-4 py-3 text-sm rounded-lg transition-all duration-200 ${location.pathname === item.href ? "text-primary bg-primary/10 font-medium" : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"}`}>
                {item.name}
              </Link>)}
            <Button variant="hero" className="mt-4" asChild>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Start Your AI Project
              </Link>
            </Button>
          </div>
        </div>}
    </header>;
}