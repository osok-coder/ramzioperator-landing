const liveApps = [
  {
    title: "Pharmacy Workflow Friction Audit",
    label: "Case study: pharmacy operations",
    description: "A quick workflow audit built from my pharmacy day job.",
    href: "https://workflow.ramzioperator.com",
  },
];

const buildTypes = [
  "Useful tools",
  "Small dashboards",
  "iOS apps",
  "Simple games",
  "AI-assisted utilities",
  "Clone-plus experiments",
  "Workflow apps",
];

const factorySteps = ["Idea", "Score", "MVP", "Build", "Launch", "Measure", "Improve or kill"];

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 sm:px-8 lg:px-10">
        <a className="text-sm font-semibold tracking-[0.18em] text-slate-100 uppercase" href="#top">
          Ramzi Operator
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-slate-400 sm:flex">
          <a href="#apps" className="hover:text-white">
            Apps
          </a>
          <a href="#map" className="hover:text-white">
            Map
          </a>
          <a href="#follow" className="hover:text-white">
            Follow
          </a>
        </nav>
      </header>

      <section id="top" className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-36 lg:pt-28">
        <div>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.96] tracking-normal text-white sm:text-7xl lg:text-8xl">
            Ramzi Operator
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-medium leading-tight text-cyan-100/95 sm:text-3xl">
            Building small apps that can earn online.
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            <p>I use AI-assisted development to build, launch, and test simple web and iOS apps in public.</p>
            <p>The goal is online leverage beyond presence-based income.</p>
          </div>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <a
              href="#apps"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-200 px-6 text-sm font-bold text-slate-950 shadow-[0_12px_36px_rgba(103,232,249,0.14)] hover:bg-cyan-100"
            >
              View live apps
            </a>
            <a
              href="#map"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-6 text-sm font-bold text-slate-100 hover:border-white/20 hover:bg-white/[0.06]"
            >
              See the app map
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-white/[0.08] bg-slate-950/45 p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {factorySteps.map((step, index) => (
              <div
                key={step}
                className="min-h-24 rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 sm:p-5"
              >
                <p className="text-xs font-bold tracking-[0.18em] text-cyan-200/80 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-5 text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="border-y border-white/[0.07] bg-white/[0.025]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1fr] lg:px-10">
          <div>
            <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">Live Apps</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-400">
              Small apps and tests. Real usage beats perfect plans.
            </p>
          </div>
          <div className="grid gap-4">
            {liveApps.map((app) => (
              <a
                key={app.title}
                href={app.href}
                className="block rounded-3xl border border-white/[0.08] bg-slate-950/55 p-6 hover:border-cyan-200/30 sm:p-8"
              >
                <span className="text-sm font-bold text-cyan-200/85">{app.label}</span>
                <h3 className="mt-5 text-2xl font-semibold text-white">{app.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{app.description}</p>
                <p className="mt-7 text-sm font-semibold text-cyan-100/90">{app.href}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">App Factory Map</h2>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Every app starts small. I score ideas for demand, distribution, money path, build speed, and maintenance. Most ideas will be killed quickly. That is the point.
          </p>
        </div>
        <div className="mt-12 grid gap-3 md:grid-cols-7">
          {factorySteps.map((step) => (
            <div key={step} className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4">
              <p className="text-sm font-semibold text-slate-100">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/[0.07] bg-white/[0.025]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">What I Build</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {buildTypes.map((item) => (
              <div key={item} className="rounded-2xl border border-white/[0.08] bg-slate-950/50 p-5 sm:p-6">
                <p className="text-lg font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-4xl text-lg leading-8 text-slate-300">
            I am not tied to one niche. Pharmacy is my first lab because I understand the problems from inside. The wider goal is to build where the pain, demand, and money are real.
          </p>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1fr] lg:px-10">
        <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">Why This Exists</h2>
        <p className="text-lg leading-8 text-slate-300">
          My day job depends heavily on physical presence. Ramzi Operator is my attempt to build online leverage through small software products, digital assets, attention, and distribution. I am learning in public and shipping small.
        </p>
      </section>

      <section id="follow" className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 sm:pb-28 lg:px-10">
        <div className="rounded-3xl border border-white/[0.08] bg-slate-950/50 p-6 sm:p-8">
          <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">Follow</h2>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <a className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 font-semibold text-slate-200 hover:border-cyan-200/30 sm:p-5" href="https://x.com/RamziOperator">
              X: @RamziOperator
            </a>
            <a className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 font-semibold text-slate-200 hover:border-cyan-200/30 sm:p-5" href="https://www.linkedin.com/in/ramzinasser/">
              LinkedIn: Ramzi Nasser
            </a>
            <span className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-4 font-semibold text-slate-500 sm:p-5">
              Contact link coming soon
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
