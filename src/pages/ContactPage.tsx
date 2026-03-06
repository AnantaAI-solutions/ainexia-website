import { useState } from "react";
import { z } from "zod";
import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import {
  MapPin, Mail, Phone, ArrowRight, ChevronDown, Clock,
  MessageSquare, CheckCircle2, Linkedin
} from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import contactAbstract from "@/assets/graphics/contact_comms.png";
import contactAbstractLight from "@/assets/graphics/contact_comms_light.png";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  company: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

const faqs = [
  {
    q: "How quickly can you start a project?",
    a: "We typically begin the discovery phase within 1–2 weeks of an initial consultation. Actual development start depends on project complexity and scope alignment."
  },
  {
    q: "What is the minimum project size you work on?",
    a: "We work on projects of all sizes — from targeted PoCs and MVPs to full-scale enterprise AI platforms. The key is that the problem must be meaningful and the solution deployable."
  },
  {
    q: "Do you provide ongoing support after deployment?",
    a: "Yes. All production systems include model monitoring, performance reporting, and retraining recommendations. We offer ongoing maintenance and improvement plans."
  },
  {
    q: "Can you work with our existing data infrastructure?",
    a: "Absolutely. We integrate with your existing data pipelines, databases, and cloud infrastructure. We design our solutions to fit into your ecosystem, not replace it."
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes, we are happy to sign NDAs before any project discussions to protect your intellectual property and business information."
  },
];

export default function ContactPage() {
  const { theme } = useTheme();
  const currentImage = theme === "dark" ? contactAbstract : contactAbstractLight;
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const validated = contactFormSchema.parse(formData);
      const { error } = await supabase
        .from('contact_inquiries')
        .insert({
          name: validated.name,
          email: validated.email,
          company: validated.company || null,
          message: validated.message,
        });

      if (error) throw error;

      toast({
        title: "Message sent! ✓",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({
          title: "Validation Error",
          description: err.errors[0]?.message || "Please check your input.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or email us directly.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative section-padding overflow-hidden">

        {/* Animated Background Graphic */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none z-0">
          <img
            src={currentImage}
            alt="AI communication connectivity abstract"
            className={`w-full max-w-[1200px] object-cover animate-float-slow filter brightness-90 contrast-125 ${theme === "dark" ? "mix-blend-screen" : "mix-blend-multiply opacity-70"}`}
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <span className="section-label mb-5 block">Let's Talk</span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 animate-fade-in">
              <span className="gradient-text">Contact</span> Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-delay-1 max-w-2xl">
              Start your AI project with AINEXIA Intelligence. We'd love to hear about
              your challenges and explore how we can help you build something remarkable.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="section-container relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>

              {/* Response badges */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                <div className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card">
                  <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Response Time</div>
                    <div className="text-xs text-muted-foreground">Within 24 hours</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <div className="text-xs font-bold">Free Consultation</div>
                    <div className="text-xs text-muted-foreground">No commitment</div>
                  </div>
                </div>
              </div>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4 group">
                  <div className="icon-box flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">
                      India – Mehsana, Gujarat
                      <br />
                      <span className="text-primary font-medium">Serving clients globally</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="icon-box flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@ainexia.in"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      contact@ainexia.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="icon-box flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+918128569967"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      +91 8128 569 967
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="icon-box flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/company/ainexia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                    >
                      linkedin.com/company/ainexia
                    </a>
                  </div>
                </div>
              </div>

              {/* Ready to start box */}
              <div className="p-6 rounded-2xl gradient-border border border-primary/20 bg-gradient-to-br from-primary/8 to-violet-500/5">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Ready to Start?</h3>
                    <p className="text-sm text-foreground/80">
                      Fill out the form and our team will get back to you within
                      24–48 hours to discuss your project in detail.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Your Name <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="bg-background/60 border-border focus:border-primary/60 transition-colors h-11"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@company.com"
                    className="bg-background/60 border-border focus:border-primary/60 transition-colors h-11"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2">
                    Company <span className="text-muted-foreground font-normal">(Optional)</span>
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="bg-background/60 border-border focus:border-primary/60 transition-colors h-11"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, challenge, or inquiry..."
                    className="bg-background/60 border-border focus:border-primary/60 transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  className="w-full h-12 text-base group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="section-container relative">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="section-label mb-4 block">Common Questions</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">
                Answers to the most common questions about working with AINEXIA.
              </p>
            </div>

            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-2xl bg-card overflow-hidden hover:border-primary/30 transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold text-foreground pr-4">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-primary flex-shrink-0 transition-transform duration-200 ${openFaq === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ${openFaq === index ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                      }`}
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}