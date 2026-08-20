import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TopicsGrid } from "@/components/sections/TopicsGrid";
import { WhyThisMatters } from "@/components/sections/WhyThisMatters";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { Stats } from "@/components/sections/Stats";
import { TrustSignals } from "@/components/sections/TrustSignals";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

const homeFAQs = [
  {
    question: "Does FoamCollege sell or run a certification course?",
    answer:
      "No. We're a neutral guide to understanding SPFA PCP, manufacturer certifications, and state licensing requirements — not a course provider. We have no financial reason to steer you toward one program over another.",
  },
  {
    question: "What's the difference between SPFA PCP and a manufacturer certification?",
    answer:
      "SPFA PCP is an industry-wide, ISO-17024-accredited credential recognized across the trade regardless of which chemicals or equipment you use. Manufacturer certifications (BASF, Icynene-Lapolla/Demilec, Carlisle) are typically tied to that specific manufacturer's product line and often required to purchase or use their systems.",
  },
  {
    question: "Do all states require a license to install spray foam insulation?",
    answer:
      "No — roughly 30 states have some form of insulation contractor licensing, but requirements vary significantly and aren't specific to spray foam in most cases. Check our state-by-state guide for the real, fragmented picture.",
  },
  {
    question: "What happens if I let my spray foam certification lapse?",
    answer:
      "It depends on the specific program's renewal requirements — some require you to retake an exam, others just require completing missed CEU hours. Covered in detail on our recertification and CEUs topic page.",
  },
  {
    question: "Can certification teach me how to actually spray foam correctly?",
    answer:
      "Certification proves you know the standards and safety requirements — it generally doesn't replace real hands-on practice developing spray-gun technique. Covered honestly on our \"What Certification Doesn't Teach You\" page.",
  },
  {
    question: "Is this related to CCA's other spray foam training sites?",
    answer:
      "We're a neutral guide, not a competing course — if you're looking for actual course delivery or mentorship, we'll help point you toward the right CCA resource or external program for your specific situation.",
  },
];

export default function HomePage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />

      <Hero
        title="Your Guide to Spray Foam Certification, Recertification & State Licensing"
        subtitle="Not a course to sell you — a neutral guide to understanding SPFA PCP, manufacturer certifications, state licensing requirements, and how to keep a credential current once you have it."
        image="/images/hero-certification-review.jpg"
        imageAlt="Installer reviewing spray foam certification and training materials"
      />

      <TopicsGrid />
      <WhyThisMatters />
      <ProcessSteps />
      <Stats />
      <TrustSignals />

      <FAQ
        title="Certification, Answered Neutrally"
        subtitle="Real questions installers ask before choosing a path."
        faqs={homeFAQs}
      />

      <CTA />
      <Footer />
    </main>
  );
}
