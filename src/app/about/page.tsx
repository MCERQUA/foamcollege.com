import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTA } from "@/components/sections/CTA";
import { Stats } from "@/components/sections/Stats";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";
import { site } from "@/lib/site";
import { Scale, BookOpenCheck, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.businessName} is a neutral guide to spray foam applicator certification, recertification, and state licensing, backed by Contractors Choice Agency.`,
};

const values = [
  {
    icon: Scale,
    title: "Neutral by Design",
    text: "We don't run a certification course ourselves, so we have no reason to steer you toward one program over another.",
  },
  {
    icon: BookOpenCheck,
    title: "The Whole Lifecycle, Not Just Sign-Up",
    text: "Most certification content stops once you've enrolled. We cover renewal, CEUs, and what happens if a credential lapses too.",
  },
  {
    icon: ShieldCheck,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a certification body's marketing department.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28 bg-background">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              A Guide, Not Another Course
            </h1>
            <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
              Search for spray foam certification and you'll mostly find certification bodies and
              manufacturers promoting their own programs. {site.businessName} exists to be the
              neutral resource in between &mdash; explaining how SPFA PCP, manufacturer
              certifications, and state licensing actually relate to each other, and covering
              recertification and CEU renewal, which most certification content treats as an
              afterthought.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              We're backed by Contractors Choice Agency, bringing over 20 years of
              former-contractor experience to every page. We don't sell a certification course
              ourselves &mdash; when you're ready, we'll help point you toward whatever actually
              fits your situation, including other CCA resources built for different needs.
            </p>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/about-credibility.jpg" alt={`${site.businessName} guidance resource`} fill className="object-cover" />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <FadeIn className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold">How We Write</h2>
          </FadeIn>
          <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {values.map((value) => (
              <StaggerItem key={value.title}>
                <div className="p-8 rounded-xl bg-card border border-border h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: value.text }} />
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      <Stats />

      <section className="py-20 md:py-28 bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-heading font-bold">Part of a Larger Contractor Network</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Contractors Choice Agency works with spray foam contractors across the country
              today &mdash; whatever stage you're at, we can help point you toward the right
              next step.
            </p>
          </FadeIn>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
}
