import {
  Bot,
  ClipboardCheck,
  Cloud,
  Compass,
  Cpu,
  Network,
  ShieldCheck,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

const services: Service[] = [
  {
    icon: Compass,
    title: 'IT Consulting',
    description:
      'Practical technology guidance for small businesses and individuals — what to buy, how to set it up, and how to keep it running.',
    points: ['Infrastructure assessments', 'Microsoft 365 & Entra setup', 'ITIL-aligned support processes'],
  },
  {
    icon: ClipboardCheck,
    title: 'Freelance Project Management',
    description:
      'Clear scope, realistic timelines, and steady communication from kickoff to handover for IT and software projects.',
    points: ['Planning & roadmaps', 'Vendor coordination', 'Documentation & reporting'],
  },
  {
    icon: Bot,
    title: 'AI Agent Development',
    description:
      'Custom AI assistants and automations that take repetitive work off your plate and plug into the tools you already use.',
    points: ['Workflow automation', 'Python & PowerShell scripting', 'Chat & support agents'],
  },
  {
    icon: Wrench,
    title: 'Software Repair',
    description:
      'Diagnosing and fixing the issues that slow you down — from OS reimaging to malware cleanup and application errors.',
    points: ['OS reinstall & reimaging', 'Virus & malware removal', 'Driver & app troubleshooting'],
  },
  {
    icon: Cpu,
    title: 'Hardware Repair',
    description:
      'Field-tested repair experience across laptops, desktops, peripherals, and specialized enterprise equipment.',
    points: ['Component diagnostics & replacement', 'Upgrades (RAM, SSD)', 'Device deployment'],
  },
  {
    icon: Network,
    title: 'Networking',
    description:
      'Stable, secure connectivity for homes and offices, with careful troubleshooting when things go wrong.',
    points: ['DNS / DHCP troubleshooting', 'Wi-Fi & router setup', 'Network documentation'],
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Basics',
    description:
      'Security+ certified hardening for the essentials: accounts, devices, backups, and access control.',
    points: ['Access & permissions review', 'MFA rollout', 'Security best-practice audits'],
  },
  {
    icon: Cloud,
    title: 'Cloud & Device Management',
    description:
      'Move to the cloud with confidence and manage every device from one place.',
    points: ['AWS fundamentals', 'Microsoft Intune MDM', 'SharePoint administration'],
  },
]

export function Services() {
  return (
    <section id="services" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Everything around IT, handled end to end."
          description="Whether you need a strategy, a project manager, an automation, or someone to open up the machine and fix it — I cover the full stack."
        />
        <ul className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.title} className="flex flex-col bg-card p-6 transition-colors hover:bg-background">
              <span className="flex size-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <service.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-base font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              <ul className="mt-5 flex flex-col gap-1.5 border-t border-border pt-4">
                {service.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-foreground/80">
                    <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
