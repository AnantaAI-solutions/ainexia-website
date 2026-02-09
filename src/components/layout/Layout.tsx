import { Link, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const reviewLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Technologies", href: "/technologies" },
  { name: "Products", href: "/products" },
  { name: "Industries", href: "/industries" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-[73px]">
        <div className="section-container py-4">
          <div className="rounded-xl border border-border/60 bg-card/40 px-3 py-2">
            <p className="text-xs text-muted-foreground mb-2">Quick page review</p>
            <div className="flex flex-wrap gap-2">
              {reviewLinks.map((item) => {
                const isActive = location.pathname === item.href;

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-3 py-1.5 rounded-md text-xs transition-colors ${
                      isActive
                        ? "bg-primary/20 text-primary border border-primary/40"
                        : "bg-secondary/40 text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}
