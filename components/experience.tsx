import { SectionHeading } from '@/components/section-heading'

const roles = [
  {
    title: 'Customer Engineer',
    company: 'NCR Atleos',
    period: 'Nov 2025 — Present',
    summary:
      'Maintain, diagnose, and repair ATM hardware and software to minimize downtime, including OS reimaging and DHCP/DNS network troubleshooting.',
    highlights: [
      'Helped cut escalated Tier 2 support cases by 43% through bridge-line collaboration',
      'Data center operations including NVIDIA system setups',
      'Managed banking SLAs and audited cash settlements with Loomis and Brinks',
    ],
  },
  {
    title: 'IT Support Professional',
    company: 'Ghana Cocoa Board',
    period: 'Jan 2020 — Aug 2023',
    summary:
      'Administered SharePoint and Microsoft 365 environments and provided multi-channel support across the enterprise.',
    highlights: [
      'Achieved a 91% CSAT score and cut ticket resolution times by 45 seconds',
      'Configured permissions, document libraries, and end-user access',
      'Handled data center issues, database security, and technical reporting',
    ],
  },
  {
    title: 'Data Entry Clerk',
    company: 'MTN Communications',
    period: 'Jan 2019 — Dec 2019',
    summary:
      'Tracked inventory and project progress in Excel, maintaining database integrity and strict data confidentiality.',
    highlights: ['Advanced Excel reporting with VLOOKUP', 'Customer & account data management'],
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 bg-ink py-20 text-ink-foreground md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              inverted
              eyebrow="Experience"
              title="Proven in high-pressure environments."
              description="From banking infrastructure to enterprise Microsoft 365, I bring field-tested discipline to every client engagement."
            />
          </div>
        </div>
        <ol className="flex flex-col lg:col-span-8">
          {roles.map((role) => (
            <li
              key={role.company}
              className="grid gap-4 border-t border-white/10 py-8 first:border-t-0 first:pt-0 md:grid-cols-[180px_1fr]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-ink-foreground/55 md:pt-1.5">
                {role.period}
              </p>
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {role.title}
                  <span className="font-normal text-ink-foreground/60">{' · '}{role.company}</span>
                </h3>
                <p className="mt-3 leading-relaxed text-ink-foreground/75">{role.summary}</p>
                <ul className="mt-4 flex flex-col gap-2">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-ink-foreground/85">
                      <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-ink-foreground/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
