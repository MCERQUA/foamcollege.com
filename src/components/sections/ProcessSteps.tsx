import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    title: "Understand Your Options",
    text: "Read how SPFA PCP, manufacturer certifications, and other credentials actually relate to each other before picking one.",
  },
  {
    number: "02",
    title: "Check Your State's Requirements",
    text: "Confirm what your specific state actually requires before you spend time or money on a credential it doesn't recognize.",
  },
  {
    number: "03",
    title: "Plan for Renewal, Not Just Sign-Up",
    text: "Understand the recertification cycle and CEU requirements up front, so a credential doesn't quietly lapse on you later.",
  },
  {
    number: "04",
    title: "Get Guidance When You're Ready",
    text: "Tell us where you are and we'll help point you toward the right next step &mdash; a program, a state resource, or a CCA sibling site built for exactly your situation.",
  },
];

export function ProcessSteps() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How to Use This Resource</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">From Confused to Certified</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative">
                <span className="text-5xl font-heading font-bold text-primary/20">{step.number}</span>
                <h3 className="mt-3 text-lg font-heading font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: step.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
