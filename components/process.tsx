import { SectionHeading } from '@/components/section-heading'

const steps = [
  {
    title: 'Discover',
    body: 'A free consultation to understand the problem, your goals, budget, and timeline.',
  },
  {
    title: 'Plan',
    body: 'A clear written scope with deliverables, milestones, and a fixed or hourly quote.',
  },
  {
    title: 'Deliver',
    body: 'Hands-on execution with regular updates — remote or on-site, whichever fits best.',
  },
  {
    title: 'Support',
    body: 'Documentation, handover, and ongoing support so your systems stay healthy.',
  },
]

export function Process() {
  return (
    <section id="process" className="scroll-mt-16 border-t border-border bg-card py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="How I work"
          title="A simple, transparent process."
          description="ITIL-informed and documentation-first, so you always know what is happening and why."
        />
        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="border-t-2 border-foreground pt-5">
              <p className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, '0')}</p>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
