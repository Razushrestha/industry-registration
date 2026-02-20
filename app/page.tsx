export default function Home() {
  const services = [
    {
      title: "MSME (Udyam) Registration",
      description:
        "Get your MSME certificate quickly to access government tenders, subsidies, and business loan benefits.",
    },
    {
      title: "GST Registration",
      description:
        "End-to-end GST registration with document preparation, filing support, and compliance guidance.",
    },
    {
      title: "Startup India Registration",
      description:
        "Build startup credibility and unlock tax exemptions, grants, and recognition under Startup India.",
    },
    {
      title: "IEC (Import Export Code)",
      description:
        "Start global trade operations with fast IEC registration and proper documentation assistance.",
    },
    {
      title: "ISO Certification Support",
      description:
        "Improve trust and operational standards with guided ISO certification for your business category.",
    },
    {
      title: "FSSAI & License Services",
      description:
        "Food business registration and license support with expert document checks and filing accuracy.",
    },
  ];

  const process = [
    "Share your business details",
    "Upload required documents",
    "Expert verification & drafting",
    "Application filing with authority",
    "Certificate delivered to your email",
  ];

  const documents = [
    "Aadhaar Card of proprietor/partners/directors",
    "PAN Card of business/entity",
    "Business address proof (electricity bill/rent agreement)",
    "Bank account details and canceled cheque",
    "Business activity details and contact information",
  ];

  const faqs = [
    {
      question: "How long does registration take?",
      answer:
        "Most registrations are initiated within the same day after receiving complete documents. Final approval depends on the respective department timelines.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Your documents are handled through a secure process and used strictly for authorized registration purposes.",
    },
    {
      question: "Do you support all states in India?",
      answer:
        "Yes, our registration support services are available across India for individuals, proprietorships, partnerships, and companies.",
    },
    {
      question: "Can I get help after registration?",
      answer:
        "Absolutely. We offer post-registration support for updates, corrections, and compliance-related follow-up services.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900">
      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-slate-900 text-center text-lg font-bold leading-9 text-white">
              IR
            </div>
            <span className="text-lg font-semibold">Industry Registration</span>
          </div>
          <div className="hidden items-center gap-7 text-sm font-medium text-slate-600 md:flex">
            <a href="#services" className="hover:text-slate-900">
              Services
            </a>
            <a href="#process" className="hover:text-slate-900">
              Process
            </a>
            <a href="#contact" className="hover:text-slate-900">
              Contact
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
          </div>
          <a
            href="#contact"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Start Registration
          </a>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.15fr_0.85fr] md:items-center">
          <div>
            <span className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-1 text-xs font-semibold tracking-wide text-slate-700">
              Fast • Trusted • Pan-India Support
            </span>
            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Register Your Business with Complete Expert Assistance
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              From MSME and GST to Startup India, IEC, and compliance services —
              get accurate filing, faster approvals, and dedicated support at
              every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-full bg-slate-900 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Apply Now
              </a>
              <a
                href="#services"
                className="rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                View Services
              </a>
            </div>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { value: "10,000+", label: "Registrations Completed" },
                { value: "99%", label: "Documentation Accuracy" },
                { value: "24x7", label: "Support Availability" },
                { value: "4.9/5", label: "Client Satisfaction" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200 bg-white px-4 py-4"
                >
                  <p className="text-xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Why Businesses Choose Us
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li className="rounded-xl bg-slate-50 px-4 py-3">
                ✅ End-to-end application handling by trained experts
              </li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">
                ✅ Error-free documentation checks before submission
              </li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">
                ✅ Transparent pricing with no hidden process charges
              </li>
              <li className="rounded-xl bg-slate-50 px-4 py-3">
                ✅ Dedicated support until final certificate delivery
              </li>
            </ul>
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-6xl px-6 py-10">
          <div className="mb-8 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
              Our Services
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Complete Registration & Compliance Solutions
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-slate-300"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="bg-white py-14">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Registration Process
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Simple, Structured, and Stress-Free
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-5">
              {process.map((step, index) => (
                <div
                  key={step}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                >
                  <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm font-medium text-slate-700">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-14 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-slate-900">Required Documents</h2>
            <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600">
              {documents.map((item) => (
                <li key={item} className="rounded-xl bg-slate-50 px-4 py-3">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7">
            <h2 className="text-2xl font-bold text-slate-900">Contact Information</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Reach out to our support team for registration guidance, document
              help, and application status updates.
            </p>
            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <a
                href="mailto:info@industryregistration.com"
                className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium hover:bg-slate-100"
              >
                E-Mail: info@industryregistration.com
              </a>
              <a
                href="tel:+9779849417661"
                className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium hover:bg-slate-100"
              >
                Telephone: +977 984-9417661
              </a>
              <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-medium">
                Address: Banasthali Chowk, Kathmandu
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-white py-14">
          <div className="mx-auto w-full max-w-6xl px-6">
            <div className="mb-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                FAQ
              </p>
              <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
                Common Questions, Clear Answers
              </h2>
            </div>
            <div className="grid gap-4">
              {faqs.map((faq) => (
                <article
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                >
                  <h3 className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto w-full max-w-6xl px-6 py-16">
          <div className="rounded-3xl bg-slate-900 px-6 py-12 text-center text-white sm:px-10">
            <p className="text-sm uppercase tracking-widest text-slate-300">
              Ready to Register?
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Start Your Business Registration Today
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Share your business details and our experts will guide you through
              the right registration path with complete filing support.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-4 text-sm font-semibold">
              <a
                href="mailto:info@industryregistration.com"
                className="rounded-full bg-white px-6 py-3 text-slate-900 transition hover:bg-slate-200"
              >
                info@industryregistration.com
              </a>
              <a
                href="tel:+9779849417661"
                className="rounded-full border border-slate-500 px-6 py-3 text-white transition hover:bg-slate-800"
              >
                +977 984-9417661
              </a>
            </div>
            <p className="mt-6 text-sm text-slate-300">
              Banasthali Chowk, Kathmandu
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center text-xs text-slate-500 sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} Nepatronix. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with love <span className="inline-block animate-pulse text-rose-500">❤</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
