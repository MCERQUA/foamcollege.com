import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${site.businessName}.`,
};

export default function TermsPage() {
  return (
    <main>
      <Navbar businessName={site.businessName} phone={site.phone} />
      <section className="pt-36 pb-24 md:pt-44">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-heading font-bold mb-8">Terms of Service</h1>
          <div className="post-prose">
            <p>Last updated: 2026-08-20</p>
            <h2>Use of This Website</h2>
            <p>
              This website provides general educational content on spray foam applicator
              certification, recertification, and state licensing requirements. It is offered for
              general informational purposes and does not constitute legal advice on licensing
              requirements — always confirm current requirements directly with your state's
              licensing board. {site.businessName} does not offer or sell any certification course
              directly.
            </p>
            <h2>Guidance Requests</h2>
            <p>
              Submitting a form constitutes a request to be contacted and does not create a
              binding agreement for any product or service, and does not constitute enrollment in
              any certification program.
            </p>
            <h2>Contact</h2>
            <p>Questions about these terms can be directed to {site.email} or {site.phone}.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
