import React from 'react'


const features = [
  {
    title: "Fast onboarding",
    description:
      "Start your journey in seconds with a clean and simple experience.",
  },
  {
    title: "Smart dashboard",
    description:
      "Stay productive with a beautiful workspace designed for modern teams.",
  },
  {
    title: "Secure access",
    description:
      "Enjoy trusted sign-in options and a polished authentication flow.",
  },
];

const Home = ({ name, onLogout }) => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.3),_transparent_35%),linear-gradient(135deg,_#020617_0%,_#111827_45%,_#312e81_100%)] px-4 py-6 text-slate-100 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <header className="flex flex-wrap items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/10 px-5 py-4 shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-fuchsia-300">AI SaaS</p>
            <h1 className="text-2xl font-semibold">Welcome back, {name}</h1>
          </div>
          <button
            onClick={onLogout}
            className="rounded-full border border-fuchsia-400/40 bg-fuchsia-500/20 px-4 py-2 font-medium text-fuchsia-100 transition hover:bg-fuchsia-500/40"
          >
            Log out
          </button>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2rem] border border-fuchsia-400/20 bg-slate-900/70 p-8 shadow-2xl shadow-purple-950/40 backdrop-blur-xl">
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-sm font-medium text-cyan-200">
              Your AI workspace is ready
            </p>
            <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Build faster with a beautiful, intelligent dashboard.
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-slate-300">
              Launch ideas quickly, stay organized, and enjoy a polished experience from day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-gradient-to-r from-fuchsia-500 to-violet-500 px-5 py-3 font-semibold text-white shadow-lg shadow-fuchsia-500/30 transition hover:scale-[1.01]">
                Start exploring
              </button>
              <button className="rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-slate-100 transition hover:bg-white/20">
                View insights
              </button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-6 shadow-2xl shadow-slate-950/50">
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Today&apos;s focus</p>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <p className="text-3xl font-semibold">12 tasks</p>
                  <p className="text-slate-300">Ahead of schedule</p>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-2 text-sm font-medium text-emerald-300">
                  +24%
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-1 text-sm text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home
