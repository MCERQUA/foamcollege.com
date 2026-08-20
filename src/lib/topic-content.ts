import type { FAQItem } from "@/components/sections/FAQ";

export interface TopicSection {
  heading: string;
  paragraphs: string[];
}

export interface TopicContent {
  slug: string;
  heroImage: string;
  heroImageAlt: string;
  intro: string[];
  sections: TopicSection[];
  keyTakeaways: string[];
  faqs: FAQItem[];
}

export const topicContent: Record<string, TopicContent> = {
  "spfa-pcp-certification-explained": {
    slug: "spfa-pcp-certification-explained",
    heroImage: "/images/topic-spfa-pcp.jpg",
    heroImageAlt: "Installer reviewing SPFA Professional Certification Program materials",
    intro: [
      "If you've researched spray foam certification at all, you've run into the acronym SPFA PCP fairly quickly — it's the closest thing this trade has to an industry-wide credential, as opposed to something tied to one manufacturer's product line. Understanding what it actually is, and isn't, is the right starting point before comparing anything else.",
    ],
    sections: [
      {
        heading: "What SPFA PCP Actually Is",
        paragraphs: [
          "The Spray Polyurethane Foam Alliance's Professional Certification Program is an accredited personnel certification — accredited to the ISO/IEC 17024 standard, which is the same general accreditation framework used for a range of professional certifications outside this trade, not a marketing label SPFA invented itself. That accreditation matters because it means the program has been independently evaluated against a recognized standard for how certification programs should be run, not just self-certified by the organization issuing it.",
          "PCP certification is manufacturer-agnostic — it certifies knowledge of SPF application standards, safety practices, and building-science fundamentals generally, rather than proficiency with one specific brand's chemistry or equipment. That's the core distinction from manufacturer-specific certification, covered in more depth on our comparison page.",
        ],
      },
      {
        heading: "Who Actually Recognizes It",
        paragraphs: [
          "Beyond general industry recognition, SPFA PCP certification has documented recognition in government and institutional contexts, including having been referenced in Department of Defense specification contexts for SPF work on federal projects. That kind of institutional recognition is a genuinely different tier of credibility than a certificate a regional trainer hands out after a weekend course — it reflects a credential that outside parties, not just the trade itself, treat as meaningful.",
        ],
      },
      {
        heading: "What the Certification Process Actually Involves",
        paragraphs: [
          "PCP certification generally requires demonstrating both knowledge (through examination covering application standards, safety, and building science) and, depending on the specific track, some verification of practical experience or competency — it isn't purely a written test disconnected from real application skill. The exact requirements and tiers have evolved over time, so confirming current specifics directly with SPFA before planning around any particular detail is worth doing rather than relying on secondhand summaries, including this one.",
        ],
      },
      {
        heading: "Is It the Right Starting Point for You?",
        paragraphs: [
          "For someone building a career across potential employers or planning to work with multiple manufacturers' products over time, an industry-wide credential like PCP has real portability advantages over a certification tied to one product line. For someone committed to a single manufacturer's system long-term, that manufacturer's own certification (often required to purchase or use their products at all) may be the more immediately practical requirement, with PCP as a longer-term addition rather than the first step. Neither is universally correct — it depends on your specific career and business situation.",
        ],
      },
    ],
    keyTakeaways: [
      "SPFA PCP is ISO/IEC 17024-accredited, independently evaluated against a recognized certification standard, not a self-issued industry label.",
      "It's manufacturer-agnostic — it certifies general SPF application, safety, and building-science knowledge, not proficiency with one brand's specific chemistry.",
      "It has documented institutional recognition, including in Department of Defense specification contexts for federal SPF work.",
      "Whether it's the right first certification depends on your career situation — portability across employers/manufacturers favors PCP; commitment to one manufacturer's system favors starting with their certification.",
    ],
    faqs: [
      {
        question: "What does ISO 17024 accreditation actually mean for SPFA PCP?",
        answer: "It means the certification program has been independently evaluated against a recognized international standard for how personnel certification programs should be run — not just a credential SPFA created and self-certified without outside evaluation.",
      },
      {
        question: "Is SPFA PCP recognized outside the spray foam industry itself?",
        answer: "Yes — it has documented recognition in institutional contexts, including having been referenced in Department of Defense specification contexts for SPF work on federal projects, which is a different tier of recognition than an informal trade credential.",
      },
      {
        question: "Should I get SPFA PCP certification or a manufacturer certification first?",
        answer: "It depends on your situation — PCP offers portability across employers and manufacturers, while a specific manufacturer's certification is often required just to purchase or use their products, making it the more immediately practical first step if you're committed to one system.",
      },
    ],
  },

  "manufacturer-certifications-vs-spfa-pcp": {
    slug: "manufacturer-certifications-vs-spfa-pcp",
    heroImage: "/images/topic-manufacturer-certs.jpg",
    heroImageAlt: "Comparing manufacturer-specific spray foam certification materials",
    intro: [
      "Manufacturer certifications and SPFA PCP aren't competing versions of the same thing — they serve genuinely different purposes, and understanding how they actually relate to each other (rather than treating them as interchangeable options) is what makes this decision make sense.",
    ],
    sections: [
      {
        heading: "Why Manufacturer Certification Often Isn't Optional",
        paragraphs: [
          "Major spray foam manufacturers — BASF, Icynene-Lapolla/Demilec, Carlisle, and others — typically require their own product-specific certification before a contractor can purchase or apply their chemistry at all. This isn't primarily about proving general competency; it's about the manufacturer verifying you understand their specific product's ratio requirements, application parameters, and any product-specific handling considerations, since a mistake with their chemistry reflects on their product's reputation directly.",
        ],
      },
      {
        heading: "What Manufacturer Certification Actually Covers",
        paragraphs: [
          "Manufacturer training tends to be narrowly focused and practical: correct ratio and application parameters for that specific chemistry, proper equipment setup and calibration for their recommended proportioner configurations, and product-specific troubleshooting. It's typically shorter and more hands-on than a broader industry credential, precisely because it's scoped to one product line rather than the trade generally.",
        ],
      },
      {
        heading: "The Portability Problem",
        paragraphs: [
          "The real limitation of manufacturer-only certification shows up if you ever switch chemical suppliers or work for an employer using a different manufacturer's system — that certification generally doesn't transfer, since it was specific to the product line you were trained on, not a general competency credential. This is where an industry-wide credential like SPFA PCP has a real, practical advantage: it documents competency that isn't tied to a specific supplier relationship that might change.",
        ],
      },
      {
        heading: "Why Having Both Isn't Redundant",
        paragraphs: [
          "Because manufacturer certification and SPFA PCP cover genuinely different scope — one product-specific and often mandatory to purchase, the other industry-wide and portable — holding both isn't duplicative the way two overlapping certifications might be. A contractor who wants both flexibility across suppliers and the ability to actually buy and use a specific manufacturer's product has a real reason to pursue both rather than treating it as an either-or choice.",
        ],
      },
    ],
    keyTakeaways: [
      "Manufacturer certification is often required just to purchase or use that company's spray foam chemistry — it's not purely a competency credential, it's frequently a purchasing gate.",
      "Manufacturer training is narrowly scoped to that specific product's ratio, equipment, and handling requirements, not general industry knowledge.",
      "Manufacturer certification typically doesn't transfer if you switch suppliers, since it was specific to that product line's training.",
      "Holding both a manufacturer certification and an industry-wide credential like SPFA PCP isn't redundant — they serve different, complementary purposes.",
    ],
    faqs: [
      {
        question: "Do I need manufacturer certification to buy spray foam chemicals?",
        answer: "Often yes — major manufacturers typically require their own product-specific certification before a contractor can purchase or apply their chemistry, functioning as both a competency check and a purchasing gate.",
      },
      {
        question: "Does a manufacturer certification transfer if I switch to a different brand of chemicals?",
        answer: "Generally no — manufacturer certification is specific to that company's product line and training, so switching suppliers typically means completing that new manufacturer's own certification process.",
      },
      {
        question: "Is it worth getting both SPFA PCP and a manufacturer certification?",
        answer: "Often yes, since they serve different purposes — manufacturer certification is frequently required just to buy and use that specific product, while SPFA PCP provides portable, industry-wide credibility that doesn't depend on which supplier you're currently working with.",
      },
    ],
  },

  "state-by-state-spray-foam-licensing-requirements": {
    slug: "state-by-state-spray-foam-licensing-requirements",
    heroImage: "/images/topic-state-map.jpg",
    heroImageAlt: "Reviewing state licensing requirements for spray foam insulation contractors",
    intro: [
      "There's no single national license required to install spray foam insulation, which surprises people expecting this to work like an electrician's or plumber's license. The real picture is genuinely fragmented — roughly 30 states have some form of insulation contractor licensing, and requirements vary significantly rather than following one national pattern.",
    ],
    sections: [
      {
        heading: "Why There's No Single National Standard",
        paragraphs: [
          "Contractor licensing in the US is generally a state (and sometimes local/municipal) matter, not a federal one, and insulation work specifically often falls into a gray area — some states have a dedicated insulation contractor license, some fold it under general contractor licensing, some regulate it only through building-code compliance and inspection rather than a standalone license, and some have essentially no specific licensing requirement for this particular trade. This isn't a gap in available information so much as a genuine structural reality of how contractor licensing works in the US.",
        ],
      },
      {
        heading: "What 'Licensed' Can Actually Mean, Depending on the State",
        paragraphs: [
          "In states with dedicated insulation contractor licensing, requirements typically include some combination of a written exam, proof of insurance, a surety bond, and sometimes documented experience or apprenticeship hours. In states that fold this under general contractor licensing, the requirements are usually broader and not SPF-specific at all — you're meeting a general contractor threshold, not one tailored to insulation work specifically. And in states without either, code compliance and inspection are the operative regulatory mechanism instead of a licensing credential.",
        ],
      },
      {
        heading: "Why This Matters Beyond Legal Compliance",
        paragraphs: [
          "Operating without required licensing in a state that mandates it creates real legal and business risk — voided insurance coverage in a claim, invalidated contracts, and potential fines are realistic consequences, not hypothetical ones. Beyond the legal requirement itself, being able to point to a real license (where one exists and applies) is a genuine credibility signal to customers and general contractors evaluating who to hire, distinct from manufacturer or industry certification.",
        ],
      },
      {
        heading: "How to Actually Find Your State's Requirements",
        paragraphs: [
          "Because this is genuinely fragmented and changes over time, the reliable source is always your specific state's contractor licensing board or department of labor/commerce directly — not a summary (including this one) that could be outdated by the time you read it. Search for \"[your state] contractor licensing board\" or \"[your state] insulation contractor license\" and confirm current requirements directly, especially before making a business decision that depends on the answer.",
        ],
      },
    ],
    keyTakeaways: [
      "There is no single national spray foam or insulation contractor license — licensing is a state (and sometimes local) matter with no uniform national pattern.",
      "Roughly 30 states have some form of insulation contractor licensing, but requirements range from SPF-specific licenses to general contractor thresholds to code-compliance-only regulation.",
      "Operating without required licensing where it's mandated creates real legal and insurance risk, not just a compliance technicality.",
      "Always confirm current requirements directly with your specific state's licensing board — this is a fast-changing, fragmented area where secondhand summaries can go stale.",
    ],
    faqs: [
      {
        question: "Is there a national license required to install spray foam insulation?",
        answer: "No — there's no single national license. Contractor licensing in the US is generally a state matter, and insulation work specifically is regulated differently state by state, with roughly 30 states having some form of licensing.",
      },
      {
        question: "Does every state require a specific insulation contractor license?",
        answer: "No — some states have a dedicated insulation contractor license, some fold it under general contractor licensing, and some regulate it only through building-code compliance rather than a standalone license.",
      },
      {
        question: "Where should I check my state's actual spray foam licensing requirements?",
        answer: "Directly with your state's contractor licensing board or department of labor/commerce — this area changes over time and varies enough that a secondhand summary shouldn't be relied on for a real business decision.",
      },
    ],
  },

  "how-recertification-and-ceus-actually-work": {
    slug: "how-recertification-and-ceus-actually-work",
    heroImage: "/images/topic-ceu-tracking.jpg",
    heroImageAlt: "Tracking continuing education credits for spray foam certification renewal",
    intro: [
      "Almost every resource about spray foam certification focuses on how to get certified the first time. Almost none of them cover what happens after — and that gap is exactly why a real credential can quietly lapse on someone who assumed it was permanent.",
    ],
    sections: [
      {
        heading: "Why Certifications Expire in the First Place",
        paragraphs: [
          "Application standards, safety requirements, and building codes genuinely change over time — a certification that never required renewal would eventually certify someone against standards that no longer reflect current practice. Renewal cycles and continuing education requirements exist specifically to keep a credential meaningful over time, not as a revenue mechanism for the certifying body (though renewal fees are real too).",
        ],
      },
      {
        heading: "What a Typical Renewal Cycle Looks Like",
        paragraphs: [
          "Renewal periods and requirements vary by specific program, but the general pattern across professional certifications — including in this trade — involves a defined renewal period (commonly one to a few years), a requirement to complete a set number of continuing education units (CEUs) or hours within that period, and sometimes a renewal fee or abbreviated re-assessment rather than the full original exam. The exact numbers differ by program and have changed over time, so confirming current specifics directly with whichever certifying body issued your credential is the only reliable way to know your actual requirement.",
        ],
      },
      {
        heading: "What Actually Happens If You Let It Lapse",
        paragraphs: [
          "Consequences for a lapsed certification vary by program, but commonly range from a grace period where late renewal is still possible (sometimes with a penalty fee) to, past a certain point, having to retake the full original certification process as if starting over. Beyond the certifying body's own consequences, a lapsed credential can also affect eligibility for certain contracts (particularly ones that specify current certification, like some government or institutional work) and can be a red flag to customers or general contractors who check credentials before hiring.",
        ],
      },
      {
        heading: "A Practical System for Not Losing Track",
        paragraphs: [
          "Because renewal deadlines are easy to lose track of amid running an actual business, setting a calendar reminder well before your actual renewal deadline (not on the deadline itself) is a simple, practical safeguard. Keeping a running log of completed CEU activities as you complete them — rather than trying to reconstruct it at renewal time — also makes the actual renewal process significantly less stressful when the deadline arrives.",
        ],
      },
    ],
    keyTakeaways: [
      "Certifications expire because application standards, safety requirements, and codes genuinely change — renewal keeps a credential meaningful, not just as a revenue mechanism.",
      "Typical renewal involves a defined period, required CEU hours, and sometimes a fee or abbreviated re-assessment — but exact requirements vary by program and change over time.",
      "Consequences for lapsing range from a grace period to having to retake the full original certification, plus potential loss of contract eligibility and a credibility red flag.",
      "A calendar reminder set well before the actual deadline, plus a running CEU log kept as you go, is a simple practical safeguard against losing track.",
    ],
    faqs: [
      {
        question: "Do spray foam certifications expire?",
        answer: "Most professional certifications, including in this trade, have a renewal cycle rather than being permanent — because application standards, safety requirements, and codes change over time and a permanent credential would eventually be out of date.",
      },
      {
        question: "What happens if my spray foam certification lapses?",
        answer: "It depends on the specific program, but consequences commonly range from a grace period with a late fee to, past a certain point, having to retake the full original certification process — plus potential loss of eligibility for contracts requiring current certification.",
      },
      {
        question: "How do I keep track of my certification renewal deadline?",
        answer: "Set a calendar reminder well before the actual deadline (not on it), and keep a running log of completed CEU activities as you complete them rather than trying to reconstruct your history at renewal time.",
      },
    ],
  },

  "choosing-between-competing-certification-programs": {
    slug: "choosing-between-competing-certification-programs",
    heroImage: "/images/topic-comparing-programs.jpg",
    heroImageAlt: "Comparing different spray foam certification program options side by side",
    intro: [
      "Every certification program's own website will tell you it's the right choice. That's not useful for actually deciding — what's useful is a framework for evaluating your own situation against what each type of credential actually offers, which is what this page tries to do honestly.",
    ],
    sections: [
      {
        heading: "Start With What You're Actually Trying to Accomplish",
        paragraphs: [
          "If you need to legally purchase and apply a specific manufacturer's product, their certification isn't really optional — that's your starting point regardless of anything else. If you're building long-term career portability across employers or supplier relationships, an industry-wide credential like SPFA PCP matters more. If your immediate concern is a specific state's licensing requirement, that's a separate track entirely from either certification type, covered on our state licensing page. These aren't competing questions with one right answer — they're often genuinely different, parallel requirements.",
        ],
      },
      {
        heading: "Questions Worth Asking About Any Program Before Committing",
        paragraphs: [
          "Is the program accredited by a recognized outside body (like ISO 17024), or is it self-certified by whoever created it? What's the actual renewal requirement and cycle, not just the initial certification cost? Is the credential recognized by the specific employers, general contractors, or government contract types you're targeting — a credential that sounds impressive but isn't recognized where you need it doesn't help you. What does the program actually test — is it knowledge-only, or does it include some verification of practical competency?",
        ],
      },
      {
        heading: "A Genuine Comparison Isn't About Naming a Winner",
        paragraphs: [
          "It's tempting to want a single ranked answer, but SPFA PCP, manufacturer certifications, and other credentials (like BPI or Caliber, which show up in insulation-adjacent contexts) aren't actually competing for the same use case in most situations — they're often complementary, each covering a different, specific need. The honest comparison framework is matching credential type to your specific goal, not picking a single \"best\" certification in the abstract.",
        ],
      },
      {
        heading: "Where to Get Help With This Specific to Your Situation",
        paragraphs: [
          "Because the right answer genuinely depends on your specific career stage, employer situation, and state, a generic article (including this one) can only get you so far. If you want help thinking through your specific situation, that's exactly what our guidance form is for — free, and without a program to sell you regardless of what you land on.",
        ],
      },
    ],
    keyTakeaways: [
      "Start from what you're actually trying to accomplish — legal ability to use a specific product, career portability, or a state licensing requirement are often separate, parallel needs, not one decision.",
      "Ask whether a program is independently accredited, what its real renewal requirement is, whether it's recognized where you actually need it, and what it actually tests before committing.",
      "Most certification types aren't really competing for the same use case — they're often complementary, each covering a different specific need.",
      "The right combination genuinely depends on your specific situation — a generic ranked \"best certification\" answer doesn't actually exist.",
    ],
    faqs: [
      {
        question: "Which spray foam certification is the best one to get?",
        answer: "There isn't a single \"best\" one — it depends on your specific goal. Manufacturer certification is often required just to use that product; SPFA PCP offers career portability; state licensing is a separate, parallel requirement. Most people end up needing more than one, not choosing between them.",
      },
      {
        question: "What should I ask before committing to a certification program?",
        answer: "Whether it's independently accredited (like ISO 17024) versus self-certified, what the real renewal requirement is, whether it's recognized by the specific employers or contracts you're targeting, and what it actually tests.",
      },
      {
        question: "How do BPI or Caliber certifications relate to SPFA PCP?",
        answer: "They're credentials that show up in insulation-adjacent contexts with their own specific scope and recognition — like manufacturer certifications, they're generally complementary to rather than a direct substitute for an industry-wide SPF-specific credential like SPFA PCP.",
      },
    ],
  },

  "what-certification-doesnt-teach-you": {
    slug: "what-certification-doesnt-teach-you",
    heroImage: "/images/hero-application-still.jpg",
    heroImageAlt: "Installer developing hands-on spray foam application technique on a real job site",
    intro: [
      "This is the page most certification-focused content skips, because it's honestly not in a certification provider's interest to say clearly: passing a certification exam proves you know the standards. It doesn't automatically mean you can spray foam well, or run a profitable business doing it. Both of those require something certification alone doesn't provide.",
    ],
    sections: [
      {
        heading: "Certification Tests Knowledge, Not Hands-On Skill",
        paragraphs: [
          "Correct spray-gun technique — distance, angle, pass speed, overlap — is a physical, practiced skill, and most certification exams (knowledge-based, sometimes with a practical component but rarely extensive hands-on evaluation) don't fully substitute for real repetitions with real equipment and real material. Someone can pass a knowledge exam and still need real supervised practice before they're producing consistently correct application on their own — that's not a failure of the certification, it's simply outside what a knowledge-based exam is designed to measure.",
        ],
      },
      {
        heading: "Certification Doesn't Teach You to Run a Business",
        paragraphs: [
          "Estimating, sales, hiring, marketing, and financial management for a spray foam contracting business are a genuinely separate skill set from application technique and safety standards — a certification exam covering SPF-specific knowledge isn't testing any of that, and shouldn't be expected to. This is exactly the gap that dedicated business-focused resources exist to fill.",
        ],
      },
      {
        heading: "Where to Actually Find What Certification Doesn't Cover",
        paragraphs: [
          "For structured course-based training in application technique, rig operation, and business fundamentals together, Spray Foam Institute runs an actual course catalog built for that. For personal, ongoing 1:1 mentorship from someone who's run this exact kind of business, Spray Foam Mentor is built around an ongoing relationship rather than a course. For an intensive, in-person business-only bootcamp for owners who already know how to spray and need to fix the business side specifically, Spray Foam Business Bootcamp is built for exactly that, with zero technique training mixed in. Each of these covers a different specific need that certification itself doesn't.",
        ],
      },
      {
        heading: "The Honest Bottom Line",
        paragraphs: [
          "Certification is a real, worthwhile credential for what it actually proves — standards knowledge, safety awareness, and in many cases a purchasing requirement for specific chemistry. It's not, on its own, a substitute for hands-on training or business education, and treating it as one sets up a false expectation. Knowing which gap you're actually trying to close — technique, business skills, or the credential itself — is what makes the next step obvious instead of confusing.",
        ],
      },
    ],
    keyTakeaways: [
      "Certification exams primarily test knowledge of standards and safety, not hands-on spray-gun technique — real supervised practice is a separate, necessary step.",
      "Running a profitable spray foam business (estimating, sales, hiring, marketing, financials) is a genuinely separate skill set certification doesn't cover.",
      "Different specific gaps have different real resources built for them — structured courses, 1:1 mentorship, and business-only bootcamps each serve a distinct need.",
      "Certification is a real, worthwhile credential for what it actually proves — the key is not expecting it to be something it was never designed to be.",
    ],
    faqs: [
      {
        question: "Does passing a spray foam certification exam mean I can spray foam correctly?",
        answer: "Not necessarily — most certification exams test knowledge of standards and safety, not hands-on spray-gun technique, which is a physical skill developed through real, supervised practice separate from the exam itself.",
      },
      {
        question: "Does spray foam certification teach business skills like estimating or hiring?",
        answer: "No — certification tests SPF-specific technical and safety knowledge, not business operations, which is a genuinely separate skill set covered by dedicated business-focused training and mentorship resources instead.",
      },
      {
        question: "Where can I get hands-on training or business mentorship if certification alone isn't enough?",
        answer: "Depends on the specific gap — structured course-based training (application technique, rig operation, business fundamentals) is one path, ongoing 1:1 mentorship is another, and an intensive business-only bootcamp is a third — each built for a different specific need.",
      },
    ],
  },
};
