const liveApps = [
  {
    title: "Pharmacy Workflow Friction Audit",
    label: "First test area: pharmacy",
    description: "A simple tool that helps spot friction in a pharmacy workflow.",
    href: "https://workflow.ramzioperator.com",
  },
  {
    title: "Credible",
    label: "Trust and proof",
    description: "A public Proof Page for people who need trust before the first conversation.",
    href: "https://credible.ramzioperator.com",
  },
];

const buildTypes = [
  "Simple tools",
  "Small dashboards",
  "iPhone apps",
  "Web apps",
  "Useful experiments",
  "Workflow apps",
  "Small games",
];

const factorySteps = ["Idea", "Score", "Build small", "Launch", "Measure", "Improve or kill"];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 sm:px-8 lg:px-10">
        <a className="text-sm font-semibold tracking-[0.22em] text-cyan-100 uppercase" href="#top">
          Ramzi Operator
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-400 sm:flex">
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

      <section id="top" className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-36 lg:pt-28">
        <div>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Ramzi Operator
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-tight text-cyan-100/95 sm:text-3xl">
            Building simple apps that can earn online.
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            <p>I&apos;m a pharmacist learning to build and test small web and iPhone apps.</p>
            <p>The goal is to create income that does not always depend on being physically at work.</p>
          </div>
          <div className="mt-11 flex flex-col gap-3 sm:flex-row">
            <a
              href="#apps"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-cyan-200 px-6 text-sm font-bold text-slate-950 shadow-[0_18px_48px_rgba(103,232,249,0.16)] hover:bg-cyan-100"
            >
              View live apps
            </a>
            <a
              href="#map"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-6 text-sm font-bold text-slate-100 hover:border-white/20 hover:bg-white/[0.07]"
            >
              See the app map
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/[0.08] bg-slate-950/55 p-4 shadow-[0_30px_90px_rgba(0,0,0,0.28)] ring-1 ring-cyan-200/[0.03] sm:p-5">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {factorySteps.map((step, index) => (
              <div
                key={step}
                className="min-h-28 rounded-2xl border border-white/[0.06] bg-white/[0.035] p-4 sm:p-5"
              >
                <p className="text-xs font-bold tracking-[0.18em] text-cyan-200/75 uppercase">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-6 text-lg font-semibold text-white">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="apps" className="border-y border-white/[0.06] bg-white/[0.018]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.7fr_1fr] lg:px-10">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Live apps</h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              Small apps and tests. Real use matters more than perfect plans.
            </p>
          </div>
          <div className="grid gap-4">
            {liveApps.map((app) => (
              <a
                key={app.title}
                href={app.href}
                className="block rounded-[1.75rem] border border-white/[0.08] bg-slate-950/65 p-6 shadow-[0_22px_70px_rgba(0,0,0,0.22)] hover:border-cyan-200/30 sm:p-8"
              >
                <span className="text-sm font-bold text-cyan-200/85">{app.label}</span>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white">{app.title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-300">{app.description}</p>
                <p className="mt-7 text-sm font-semibold text-cyan-100/90">Open app</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              How I decide what survives
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Most ideas should start small. If people do not use it, need it, or care about it, I move on.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-white/[0.07] bg-slate-950/55 p-5 shadow-[0_22px_70px_rgba(0,0,0,0.18)] sm:p-6">
            <div className="space-y-4">
              <div className="border-b border-white/[0.06] pb-4">
                <p className="text-sm font-semibold text-white">Build small</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Keep the first version narrow enough to finish.</p>
              </div>
              <div className="border-b border-white/[0.06] pb-4">
                <p className="text-sm font-semibold text-white">Launch early</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Put it in front of people before polishing too much.</p>
              </div>
              <div className="border-b border-white/[0.06] pb-4">
                <p className="text-sm font-semibold text-white">Measure real use</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Look for behaviour, not just opinions.</p>
              </div>
              <div className="border-b border-white/[0.06] pb-4">
                <p className="text-sm font-semibold text-white">Improve what gets signal</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Spend more time where there is pull.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Kill what does not</p>
                <p className="mt-2 text-sm leading-6 text-slate-400">Move on when the need is not real enough.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/[0.06] bg-white/[0.018]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">What I build</h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {buildTypes.map((item) => (
              <div key={item} className="rounded-2xl border border-white/[0.06] bg-slate-950/55 p-5 sm:p-6">
                <p className="text-lg font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            <p>I am not tied to one niche.</p>
            <p>Pharmacy is my first test area because I understand the problems from inside.</p>
            <p>The wider goal is to build where the need is real.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1fr] lg:px-10">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Why this exists</h2>
        <div className="space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
          <p>My day job depends heavily on being physically present.</p>
          <p>
            Ramzi Operator is my attempt to build online leverage through small apps, useful tools, and digital products.
          </p>
          <p>I am learning in public and shipping small.</p>
        </div>
      </section>

      <section id="follow" className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 sm:pb-28 lg:px-10">
        <div className="rounded-[2rem] border border-white/[0.08] bg-slate-950/65 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:p-8">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Follow</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Follow the process as I build, launch, test, improve, and kill small app ideas.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-3">
            <a className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 font-semibold text-slate-200 hover:border-cyan-200/30 sm:p-5" href="https://x.com/RamziOperator">
              X: @RamziOperator
            </a>
            <a className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-4 font-semibold text-slate-200 hover:border-cyan-200/30 sm:p-5" href="https://www.linkedin.com/in/ramzinasser/">
              LinkedIn: Ramzi Nasser
            </a>
            <span className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4 font-semibold text-slate-500 sm:p-5">
              Contact link coming soon
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
