import { Award, GraduationCap } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const certifications = [
  { name: 'CompTIA A+', issuer: 'CompTIA' },
  { name: 'CompTIA Network+', issuer: 'CompTIA' },
  { name: 'CompTIA Security+', issuer: 'CompTIA' },
  { name: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services' },
  { name: 'Linux Essentials', issuer: 'Linux Professional Institute' },
  { name: 'ITIL Foundation', issuer: 'IT Service Management' },
]

const skillGroups = [
  {
    label: 'Systems & Cloud',
    items: ['Windows Server', 'Active Directory', 'Entra ID', 'Microsoft 365', 'AWS', 'Linux', 'VMware VDI'],
  },
  {
    label: 'Networking & Security',
    items: ['DNS', 'DHCP', 'Cybersecurity', 'Access management', 'Remote support tools'],
  },
  {
    label: 'Automation & Dev',
    items: ['Python', 'PowerShell', 'AI agents', 'Web & software development'],
  },
  {
    label: 'Business',
    items: ['ITIL framework', 'Project management', 'Technical documentation', 'Asset management', 'Process improvement'],
  },
]

export function Credentials() {
  return (
    <section id="credentials" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Credentials"
          title="Certified, educated, and always learning."
          description="A broad foundation of industry certifications backed by a Bachelor of Science in Information Technology."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6">
            <div>
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <GraduationCap className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">B.S. Information Technology</h3>
              <p className="mt-1 text-sm text-muted-foreground">Western Governors University · Millcreek, UT</p>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-wider text-muted-foreground">Graduated April 2026</p>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-2">
            {certifications.map((cert) => (
              <li key={cert.name} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4">
                <Award className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold">{cert.name}</p>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3 className="font-mono text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-card px-2.5 py-1 text-sm text-foreground/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
