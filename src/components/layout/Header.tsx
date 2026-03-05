import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <nav className="section-container relative flex items-center justify-between py-3 md:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity flex-shrink-0">
          <div className="relative">
            <img src={logo} alt="AINEXIA Intelligence" className="h-9 w-auto rounded-lg" />
            <div className="absolute inset-0 rounded-lg bg-primary/10 opacity-0 hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-extrabold tracking-tight gradient-text">AINEXIA</span>
            <span className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase">Intelligence</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-0.5">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-3 py-2 text-sm rounded-lg transition-all duration-200 ${location.pathname === item.href
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
            >
              {item.name}
              {location.pathname === item.href && (
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-primary animate-fade-in" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <div className="relative group">
            <Button variant="hero" size="sm" asChild>
              <Link to="/contact" className="flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                Start a Project
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="p-2 rounded-xl hover:bg-secondary/60 transition-colors border border-transparent hover:border-border/50"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen
              ? <X className="h-5 w-5" />
              : <Menu className="h-5 w-5" />
            }
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="section-container py-4 flex flex-col gap-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-3 text-sm rounded-xl transition-all duration-200 ${location.pathname === item.href
                    ? "text-primary bg-primary/10 font-semibold border border-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`}
                style={{ animationDelay: `${index * 40}ms` }}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border/50">
              <Button variant="hero" className="w-full" asChild>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="flex items-center justify-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Start a Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
