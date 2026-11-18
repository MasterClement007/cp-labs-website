import Image from 'next/image'
import { ArrowRight, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const stats = [
  { value: '3+', label: 'Years in IT support & field engineering' },
  { value: '43%', label: 'Fewer escalated Tier 2 cases at NCR Atleos' },
  { value: '91%', label: 'Customer satisfaction score' },
  { value: '6', label: 'Industry certifications' },
]

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-20 md:px-8 md:pt-24 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-7">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
            </span>
            Available for new projects
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-balance md:text-6xl md:leading-[1.05]">
            Reliable IT, delivered by someone who actually fixes things.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {"I'm "}
            <span className="font-medium text-foreground">{site.shortName}</span>
            {
              ' — an IT consultant helping individuals and small businesses with technology strategy, project delivery, AI agents, and hands-on hardware and software repair.'
            }
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-5 text-sm')}>
              Start a project
              <ArrowRight data-icon="inline-end" />
            </a>
            <a
              href="#services"
              className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-5 text-sm')}
            >
              Explore services
            </a>
          </div>
          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            {site.location} · Remote & on-site
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="relative overflow-hidden rounded-2xl border border-border bg-muted">
            <Image
              src="/images/workbench.png"
              alt="An organized IT workbench with a laptop, motherboard, memory modules, and precision tools"
              width={1024}
              height={1024}
              priority
              className="aspect-[4/5] h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-white/15 bg-ink/85 p-4 text-ink-foreground backdrop-blur">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink-foreground/60">
                Currently
              </p>
              <p className="mt-1 text-sm font-medium">Customer Engineer, NCR Atleos</p>
              <p className="text-sm text-ink-foreground/70">B.S. Information Technology, WGU</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-border bg-card">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4 md:px-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={cn(
                'py-8 pr-4',
                i % 2 === 1 && 'border-l pl-6',
                i === 2 && 'md:border-l md:pl-6',
                i >= 2 && 'border-t md:border-t-0',
              )}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-3xl font-semibold tracking-tight md:text-4xl">{stat.value}</dd>
              <dd className="mt-1 text-sm leading-snug text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
