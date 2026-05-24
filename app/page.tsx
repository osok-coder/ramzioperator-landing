"use client";

import { useState } from "react";

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

const factorySteps = ["Idea", "Score", "Build small", "Launch", "Measure", "Improve or kill"];

const statusFacts = ["2 live apps", "Building in public", "Small web and iPhone apps", "Goal: real users and feedback"];

const primaryBuildTypes = ["Simple tools", "Small dashboards", "iPhone apps", "Web apps"];

const supportingBuildTypes = ["Useful experiments", "Workflow apps", "Small games"];

const credibleStory = [
  "How Credible started",
  "I work as a locum pharmacist",
  "That means I can be in different pharmacies every few days or weeks",
  "I might do a good shift, solve problems, help the team, and leave a strong impression",
  "But when I move to the next place, most of that proof stays behind",
  "A manager saying they would have me back",
  "A colleague saying I made the day easier",
  "A reliable handover",
  "A calm shift under pressure",
  "All useful proof",
  "But none of it sits in one place",
  "When I spoke to friends, I realised this was not just a locum problem",
  "Doctors have it",
  "Freelancers have it",
  "Contractors have it",
  "Students on placements have it",
  "Consultants have it",
  "Agency workers have it",
  "Anyone whose work depends on trust can have it",
  "You can be good at what you do and still have no simple way to show it when it matters",
  "I wanted my work proof to travel with me",
  "Something I could share before a shift, a job, a project, a placement, or a first conversation",
  "Not a CV",
  "Not a polished sales page",
  "Just one clean place where real people could say:",
  "yes, I trust this person",
  "That is where Credible came from",
  "A simple Proof Page for collecting short recommendations, choosing what becomes public, and sharing one clean link",
];

export default function Home() {
  const [isCredibleStoryOpen, setIsCredibleStoryOpen] = useState(false);

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

      <section id="top" className="mx-auto grid w-full max-w-6xl gap-14 px-6 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-20 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-16 lg:px-10 lg:pb-24 lg:pt-28">
        <div>
          <p className="mb-7 max-w-xl border-l border-cyan-200/40 pl-4 text-sm font-semibold leading-6 tracking-[0.12em] text-cyan-100/80 uppercase sm:tracking-[0.18em]">
            A pharmacist building in public
          </p>
          <h1 className="max-w-3xl text-6xl font-semibold leading-[0.92] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Ramzi Operator
          </h1>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-tight text-cyan-100/95 sm:text-3xl">
            Building small apps that help reduce dependence on physical work.
          </p>
          <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
            <p>I&apos;m a pharmacist building useful web and iPhone apps in public.</p>
            <p>The goal is online leverage: tools people can use, income that can travel, and less dependence on always being physically present.</p>
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

        <div className="relative rounded-[2rem] border border-white/[0.09] bg-slate-950/70 p-4 shadow-[0_34px_110px_rgba(0,0,0,0.34)] ring-1 ring-cyan-200/[0.04] sm:p-5">
          <div className="mb-4 flex items-center justify-between border-b border-white/[0.06] pb-4">
            <p className="text-xs font-bold tracking-[0.2em] text-cyan-100/75 uppercase">Operator loop</p>
            <p className="text-xs font-semibold text-slate-500">Ship / measure / decide</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {factorySteps.map((step, index) => (
              <div
                key={step}
                className="min-h-28 rounded-2xl border border-white/[0.065] bg-white/[0.04] p-4 sm:p-5"
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

      <section className="mx-auto w-full max-w-6xl px-6 pb-16 sm:px-8 sm:pb-20 lg:px-10">
        <div className="grid gap-px overflow-hidden rounded-[1.5rem] border border-white/[0.07] bg-white/[0.07] shadow-[0_22px_80px_rgba(0,0,0,0.2)] sm:grid-cols-2 lg:grid-cols-4">
          {statusFacts.map((fact) => (
            <div key={fact} className="bg-slate-950/80 px-5 py-4">
              <p className="text-sm font-semibold leading-6 text-slate-200">{fact}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="apps" className="border-y border-white/[0.06] bg-white/[0.022]">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 sm:py-28 lg:px-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-bold tracking-[0.16em] text-cyan-100/70 uppercase">Real shipped proof</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Live apps</h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              These are small apps already online. The point is to put useful tools in front of people, learn from real use, and keep building where there is signal.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {liveApps.map((app) => (
              <article
                key={app.title}
                className="flex min-h-full flex-col rounded-[1.75rem] border border-white/[0.09] bg-slate-950/80 p-5 shadow-[0_26px_90px_rgba(0,0,0,0.3)] hover:border-cyan-200/30 sm:p-6"
              >
                <div className="rounded-[1.25rem] border border-white/[0.07] bg-[#050815] p-3">
                  {app.title === "Credible" ? (
                    <div className="rounded-2xl bg-white/[0.035] p-4">
                      <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                        <p className="text-xs font-bold tracking-[0.14em] text-cyan-100/75 uppercase">
                          Sample proof page
                        </p>
                        <p className="text-xs font-semibold text-slate-500">Shareable link</p>
                      </div>
                      <div className="mt-5 flex items-start justify-between gap-4">
                        <div>
                          <p className="text-lg font-semibold text-white">Ramzi Nasser</p>
                          <p className="mt-1 text-sm leading-6 text-slate-400">Locum pharmacist proof page</p>
                        </div>
                        <div className="rounded-full border border-cyan-100/20 px-3 py-1 text-xs font-semibold text-cyan-100/80">
                          Public
                        </div>
                      </div>
                      <div className="mt-6 rounded-xl border border-white/[0.07] bg-slate-950/65 p-4">
                        <p className="text-xs font-bold tracking-[0.12em] text-cyan-100/65 uppercase">
                          Sample recommendation
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-200">
                          &ldquo;Calm, reliable, and easy to work with under pressure.&rdquo;
                        </p>
                        <p className="mt-4 text-xs font-semibold text-slate-500">Selected proof, ready to share</p>
                      </div>
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        <div className="rounded-xl border border-white/[0.06] bg-slate-950/45 p-3">
                          <p className="text-xs font-semibold text-slate-500">Proof type</p>
                          <p className="mt-2 text-sm font-semibold text-slate-200">Recommendation</p>
                        </div>
                        <div className="rounded-xl border border-white/[0.06] bg-slate-950/45 p-3">
                          <p className="text-xs font-semibold text-slate-500">Control</p>
                          <p className="mt-2 text-sm font-semibold text-slate-200">Choose public</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-2xl bg-white/[0.035] p-4">
                      <div className="flex items-center justify-between border-b border-white/[0.07] pb-3">
                        <p className="text-xs font-bold tracking-[0.14em] text-cyan-100/75 uppercase">
                          Sample audit result
                        </p>
                        <p className="text-xs font-semibold text-slate-500">Workflow view</p>
                      </div>
                      <div className="mt-5 grid gap-3 sm:grid-cols-[0.72fr_1fr]">
                        <div className="rounded-xl border border-white/[0.06] bg-slate-950/65 p-3">
                          <p className="text-xs font-semibold text-slate-500">Friction score</p>
                          <p className="mt-2 text-4xl font-semibold text-white">74</p>
                          <p className="mt-1 text-xs font-semibold text-cyan-100/70">Sample output</p>
                        </div>
                        <div className="space-y-2">
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.045] p-3">
                            <p className="text-xs font-semibold text-slate-500">Issue found</p>
                            <p className="mt-2 text-sm leading-6 text-slate-200">Too many manual handoffs before review</p>
                          </div>
                          <div className="rounded-xl border border-white/[0.06] bg-white/[0.045] p-3">
                            <p className="text-xs font-semibold text-slate-500">Suggested improvement</p>
                            <p className="mt-2 text-sm leading-6 text-slate-200">Move checks earlier in the workflow</p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 rounded-xl border border-white/[0.06] bg-slate-950/50 p-3">
                        <p className="text-xs font-semibold text-slate-500">Result line</p>
                        <p className="mt-2 text-sm leading-6 text-slate-200">Clearer queue, fewer avoidable delays</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-1 flex-col pt-6">
                  <span className="text-sm font-bold text-cyan-200/85">{app.label}</span>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{app.title}</h3>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">{app.description}</p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <a className="text-sm font-semibold text-cyan-100/90 hover:text-white" href={app.href}>
                      Open app
                    </a>
                    {app.title === "Credible" ? (
                      <button
                        className="w-fit text-sm font-semibold text-slate-400 hover:text-cyan-100"
                        type="button"
                        onClick={() => setIsCredibleStoryOpen(true)}
                      >
                        How Credible started
                      </button>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="map" className="mx-auto w-full max-w-6xl px-6 py-18 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              How I decide what survives
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Small apps only matter if people use them. I launch early, look for real behaviour, improve what gets signal, and move on from what does not.
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

      <section className="border-y border-white/[0.06] bg-white/[0.014]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.55fr_1fr] lg:px-10">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">What I build</h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              <p>I am not tied to one niche.</p>
              <p>Pharmacy is my first test area because I understand the problems from inside.</p>
              <p>The wider goal is to build where the need is real.</p>
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-white/[0.07] bg-slate-950/55 p-5 sm:p-6">
            <div className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.06] sm:grid-cols-2">
              {primaryBuildTypes.map((item) => (
                <div key={item} className="bg-slate-950/80 p-5">
                  <p className="text-lg font-semibold text-slate-100">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {supportingBuildTypes.map((item) => (
                <span key={item} className="rounded-full border border-white/[0.06] px-4 py-2 text-sm font-semibold text-slate-400">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.75fr_1fr] lg:px-10">
        <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Why this exists</h2>
        <div className="space-y-5 text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
          <p>Pharmacy work depends heavily on being physically present.</p>
          <p>
            Ramzi Operator is my attempt to build useful tools that can create online leverage outside the shift.
          </p>
          <p>I am learning in public, shipping small, and trying to build income that does not always need me in the room.</p>
        </div>
      </section>

      <section id="follow" className="mx-auto w-full max-w-6xl px-6 pb-24 sm:px-8 sm:pb-28 lg:px-10">
        <div className="rounded-[2rem] border border-white/[0.08] bg-slate-950/75 p-6 shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-8">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Follow</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Follow the process as I build, launch, test, improve, and kill small app ideas.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-3">
            <a className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 font-semibold text-slate-200 hover:border-cyan-200/30 sm:p-5" href="https://x.com/RamziOperator">
              X: @RamziOperator
            </a>
            <a className="rounded-2xl border border-white/[0.07] bg-white/[0.04] p-4 font-semibold text-slate-200 hover:border-cyan-200/30 sm:p-5" href="https://www.linkedin.com/in/ramzinasser/">
              LinkedIn: Ramzi Nasser
            </a>
            <span className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 font-semibold text-slate-500 sm:p-5">
              Contact link coming soon
            </span>
          </div>
        </div>
      </section>

      {isCredibleStoryOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="credible-story-title"
          onClick={() => setIsCredibleStoryOpen(false)}
        >
          <div
            className="max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] border border-white/[0.08] bg-[#070b16] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.5)] sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-5">
              <h2 id="credible-story-title" className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {credibleStory[0]}
              </h2>
              <button
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.035] text-lg leading-none text-slate-300 hover:border-white/20 hover:text-white"
                type="button"
                aria-label="Close"
                onClick={() => setIsCredibleStoryOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className="mt-8 space-y-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              {credibleStory.slice(1).map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
