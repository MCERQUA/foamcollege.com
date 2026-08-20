import { Scale, MapPinned, RefreshCw, Users } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import { StaggerChildren, StaggerItem } from "@/components/animations/StaggerChildren";

const points = [
  {
    icon: Scale,
    title: "Neutral, Not a Sales Pitch",
    text: "We don't sell a certification course, so we have no reason to steer you toward one program over another &mdash; the comparison is built around your situation, not a commission.",
  },
  {
    icon: RefreshCw,
    title: "We Cover Recertification, Not Just Sign-Up",
    text: "Most certification content stops at enrollment. Renewal cycles, CEU requirements, and what happens if you let a credential lapse get the same attention here as getting started.",
  },
  {
    icon: MapPinned,
    title: "State Licensing, Actually Tracked Down",
    text: "Insulation contractor licensing is genuinely fragmented across states &mdash; we did the work of pulling that fragmented picture into one place instead of leaving you to search state by state.",
  },
  {
    icon: Users,
    title: "Backed by Former-Contractor Experience",
    text: "Written with 20+ years of Contractors Choice Agency's contractor-side experience behind it, not a certification body's marketing department.",
  },
];

export function WhyThisMatters() {
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why This Resource Exists</p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">A Neutral Guide, Not Another Course</h2>
        </FadeIn>

        <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {points.map((point) => (
            <StaggerItem key={point.title}>
              <div className="p-8 rounded-xl bg-card border border-border h-full">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <point.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: point.text }} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
