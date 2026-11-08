import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Technology Lab | FrankX',
  description: 'Independent AI, gaming, and device evaluations. Practical integrations, reproducible benchmarks, and technology partnerships.',
}

const pillars = [
  { number: '01', title: 'The Lab', detail: 'Independent, reproducible evaluations of AI systems, gaming hardware, foldables, and creator workstations.', href: '#standards' },
  { number: '02', title: 'The Setup', detail: 'Curated device configurations and implementation blueprints. Recommendations separate tested hardware from research-only coverage.', href: '#standards' },
  { number: '03', title: 'The Studio', detail: 'Working demonstrations connecting personal devices, local AI, cloud agents, and production workflows.', href: '#demonstrations' },
  { number: '04', title: 'Work With Us', detail: 'Architecture reviews, AI integration sprints, and ongoing technology advisory for ambitious teams.', href: '#work-with-us' },
]
const demonstrations = [
  { title: 'Cross-device intelligence', status: 'Planned', detail: 'Capture on mobile, orchestrate agents in the cloud, review results on desktop and foldable interfaces.' },
  { title: 'Creator workstation', status: 'Planned', detail: 'An evidence-based local + cloud workflow for video, writing, research, and distribution.' },
  { title: 'Gaming performance lab', status: 'Research phase', detail: 'Repeatable device measurements and post-match coaching workflows, without competitive rule violations.' },
]
export default function TechnologyLabPage() {
  return <main className="min-h-screen bg-[#090d16] text-[#f4f2ed]">
    <div className="mx-auto max-w-6xl px-6 py-8">
      <nav className="flex items-center justify-between text-sm"><Link href="/" className="font-semibold tracking-widest">FRANKX<span className="text-cyan-300"> / LAB</span></Link><a href="mailto:frank@frankx.ai?subject=Technology%20Lab%20inquiry" className="rounded-full border border-white/30 px-5 py-2 hover:bg-white/10">Collaborate ↗</a></nav>
      <section className="py-24 md:py-36">
        <p className="mb-6 text-xs uppercase tracking-[0.3em] text-cyan-300">Technology × Intelligence × Human Performance</p>
        <h1 className="max-w-5xl text-5xl font-semibold leading-[1.08] tracking-tight md:text-8xl">Experience the future.<br/><span className="text-cyan-300">Build what matters.</span></h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300">An independent technology lab for extraordinary devices, useful AI systems, reproducible evaluations, and ambitious builders. Powered by Starlight Intelligence.</p>
        <div className="mt-10 flex flex-wrap gap-4"><a href="#work-with-us" className="rounded-full bg-cyan-300 px-7 py-3 font-semibold text-slate-950">Build with us ↗</a><a href="#demonstrations" className="rounded-full border border-white/30 px-7 py-3">Explore the lab ↓</a></div>
      </section>
      <section className="grid gap-4 md:grid-cols-2">{pillars.map(p=><a key={p.number} href={p.href} className="rounded-2xl border border-white/15 bg-white/[0.04] p-8 transition hover:border-cyan-300/60"><span className="text-xs text-cyan-300">{p.number}</span><h2 className="mt-4 text-3xl font-semibold">{p.title}</h2><p className="mt-4 leading-relaxed text-slate-300">{p.detail}</p></a>)}</section>
      <section id="demonstrations" className="py-24"><p className="text-xs uppercase tracking-widest text-cyan-300">The build log</p><h2 className="mt-4 text-4xl font-semibold">Demonstrations in development</h2><p className="mt-4 max-w-2xl text-slate-300">These are planned demonstrations, not published test results or claims of completed deployments.</p><div className="mt-8 grid gap-4 md:grid-cols-3">{demonstrations.map(d=><article key={d.title} className="rounded-xl border border-white/15 p-6"><span className="text-xs text-cyan-300">{d.status}</span><h3 className="mt-4 text-xl font-semibold">{d.title}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{d.detail}</p></article>)}</div></section>
      <section id="standards" className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.05] p-8 md:p-12"><h2 className="text-3xl font-semibold">Evidence before hype.</h2><p className="mt-4 max-w-3xl leading-relaxed text-slate-300">We distinguish hands-on tests from desk research, disclose commercial relationships, document methodology and limitations, and never sell favorable coverage. Recommendations are editorially independent. Review samples remain the property of their owners unless expressly transferred.</p></section>
      <section id="work-with-us" className="py-24"><p className="text-xs uppercase tracking-widest text-cyan-300">Commercial engagements</p><h2 className="mt-4 text-4xl font-semibold">From prototype to production.</h2><div className="mt-8 grid gap-4 md:grid-cols-3">{[{name:'Architecture Review',detail:'A scoped review of your AI and device workflows with a prioritized implementation plan.'},{name:'Integration Sprint',detail:'A fixed-scope build of one measurable cross-device or agent-powered workflow.'},{name:'Technology Partnership',detail:'Ongoing evaluation, technical enablement, and implementation collaboration.'}].map(o=><article key={o.name} className="rounded-xl border border-white/15 p-6"><h3 className="text-xl font-semibold">{o.name}</h3><p className="mt-3 text-sm leading-relaxed text-slate-300">{o.detail}</p></article>)}</div><a className="mt-8 inline-block rounded-full bg-cyan-300 px-7 py-3 font-semibold text-slate-950" href="mailto:frank@frankx.ai?subject=FrankX%20Technology%20Lab%20-%20Project%20inquiry">Discuss a project ↗</a></section>
      <footer className="border-t border-white/15 py-8 text-sm text-slate-400">© FrankX · Independent technology intelligence · <a href="mailto:frank@frankx.ai" className="underline">Contact</a></footer>
    </div>
  </main>
}