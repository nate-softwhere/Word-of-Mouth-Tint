export default function Home() {
  const features = [
    {
      title: "Launch fast",
      description:
        "Ship a clean marketing site quickly with a straightforward structure and reusable sections.",
    },
    {
      title: "Built to scale",
      description:
        "Use flexible content blocks that can grow into product, pricing, and customer story pages later.",
    },
    {
      title: "Designed to convert",
      description:
        "Guide visitors from the headline to social proof and a clear call to action without distractions.",
    },
  ];

  const stats = [
    { value: "3x", label: "Faster page creation" },
    { value: "99%", label: "Uptime-ready foundation" },
    { value: "24/7", label: "Always available" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream via-white to-blush text-crimson">
      <section className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-10 lg:px-8">
        <header className="flex items-center justify-between rounded-full border border-crimson/10 bg-white/70 px-5 py-4 shadow-sm backdrop-blur">
          <div>
            <p className="text-lg font-semibold">LaunchKit</p>
            <p className="text-sm text-crimson/70">Next.js landing page starter</p>
          </div>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            <a href="#features" className="transition hover:text-crimson-light">
              Features
            </a>
            <a href="#proof" className="transition hover:text-crimson-light">
              Proof
            </a>
            <a href="#cta" className="transition hover:text-crimson-light">
              Get started
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-12">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full bg-crimson/10 px-4 py-2 text-sm font-semibold text-crimson">
              Simple, responsive, and ready to customize
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl">
              A basic landing page for your next big idea.
            </h1>
            <p className="mt-6 text-lg leading-8 text-crimson/80">
              Start with a clean headline, supporting copy, and clear calls to action.
              This page gives your Next.js app a polished front door without adding
              unnecessary complexity.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#cta"
                className="rounded-full bg-crimson px-6 py-3 text-center font-semibold text-cream transition hover:bg-crimson-light"
              >
                Start building
              </a>
              <a
                href="#features"
                className="rounded-full border border-crimson/20 bg-white px-6 py-3 text-center font-semibold transition hover:border-crimson/40 hover:bg-crimson/5"
              >
                Explore features
              </a>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-crimson/10 bg-white/80 p-5 shadow-sm"
                >
                  <p className="text-3xl font-bold">{stat.value}</p>
                  <p className="mt-1 text-sm text-crimson/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-crimson/10 bg-white/80 p-6 shadow-xl">
            <div className="rounded-[1.5rem] bg-crimson p-6 text-cream">
              <p className="text-sm uppercase tracking-[0.2em] text-cream/70">
                Why this works
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Everything you need for a strong first impression.
              </h2>
              <ul className="mt-6 space-y-4 text-base text-cream/90">
                <li>Clear hero copy that explains your value immediately</li>
                <li>Feature cards for product benefits and positioning</li>
                <li>Social proof and CTA sections to drive action</li>
              </ul>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-cream p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-crimson/60">
                  Audience
                </p>
                <p className="mt-2 text-lg font-semibold">Founders, teams, and creators</p>
              </div>
              <div className="rounded-2xl bg-blush p-5">
                <p className="text-sm font-semibold uppercase tracking-wide text-crimson/60">
                  Goal
                </p>
                <p className="mt-2 text-lg font-semibold">Turn visitors into signups</p>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-crimson/10 bg-white/80 p-8 shadow-sm"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson/10 text-xl font-bold">
                {feature.title.charAt(0)}
              </div>
              <h3 className="text-2xl font-semibold">{feature.title}</h3>
              <p className="mt-4 text-base leading-7 text-crimson/75">
                {feature.description}
              </p>
            </article>
          ))}
        </section>

        <section
          id="proof"
          className="rounded-[2rem] border border-crimson/10 bg-white/75 p-8 shadow-sm lg:p-12"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-crimson/60">
                Social proof
              </p>
              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Make your homepage feel credible from the start.
              </h2>
              <p className="mt-4 text-lg leading-8 text-crimson/75">
                Add testimonials, launch metrics, partner logos, or customer outcomes
                here. Even a simple block like this helps the page feel more complete
                and trustworthy.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                '"This gave us a strong landing page in minutes instead of hours."',
                '"Simple structure, solid styling, and easy to adapt to our brand."',
                '"A great starting point for a SaaS or portfolio homepage."',
              ].map((quote) => (
                <blockquote
                  key={quote}
                  className="rounded-2xl border border-crimson/10 bg-cream p-6 text-lg font-medium shadow-sm"
                >
                  {quote}
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        <section
          id="cta"
          className="rounded-[2rem] bg-crimson px-8 py-12 text-center text-cream shadow-xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cream/70">
            Ready to customize?
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Replace this copy with your product story and launch today.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/85">
            Update the headline, feature cards, and calls to action to match your app.
            The structure is already in place.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="rounded-full bg-cream px-6 py-3 font-semibold text-crimson transition hover:bg-white"
            >
              Contact sales
            </a>
            <a
              href="#"
              className="rounded-full border border-cream/30 px-6 py-3 font-semibold transition hover:bg-white/10"
            >
              View demo
            </a>
          </div>
        </section>
      </section>
    </main>
  );
}
