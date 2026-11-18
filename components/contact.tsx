import { ArrowUpRight, MapPin } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { site } from '@/lib/site'
import { cn } from '@/lib/utils'

const mailto = `mailto:${site.email}?subject=${encodeURIComponent('Project inquiry')}`

export function Contact() {
  const details: { icon: typeof MapPin; label: string; value: string; href?: string }[] = [
    { icon: MapPin, label: 'Location', value: 'Remote worldwide' },
  ]

  return (
    <section id="contact" className="scroll-mt-16 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="overflow-hidden rounded-3xl bg-ink text-ink-foreground">
          <div className="grid gap-12 p-8 md:p-14 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-widest text-ink-foreground/60">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-5xl">
                {"Let's solve your next IT challenge."}
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-ink-foreground/70">
                {
                  "Tell me what you're working on — a broken laptop, a network that keeps dropping, an AI agent idea, or a project that needs steering. I usually reply within one business day."
                }
              </p>
              <a
                href={mailto}
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'mt-8 h-11 bg-ink-foreground px-5 text-sm text-ink hover:bg-ink-foreground/90 [a]:hover:bg-ink-foreground/90',
                )}
              >
                Email me about a project
                <ArrowUpRight data-icon="inline-end" />
              </a>
            </div>
            <ul className="flex flex-col justify-center divide-y divide-white/10 lg:border-l lg:border-white/10 lg:pl-12">
              {details.map((item) => {
                const content = (
                  <>
                    <item.icon className="size-5 shrink-0 text-ink-foreground/60" aria-hidden="true" />
                    <span className="flex flex-col">
                      <span className="font-mono text-[11px] uppercase tracking-widest text-ink-foreground/50">
                        {item.label}
                      </span>
                      <span className="mt-0.5 text-base break-all md:text-lg">{item.value}</span>
                    </span>
                  </>
                )
                return (
                  <li key={item.label} className="py-5 first:pt-0 last:pb-0">
                    {item.href ? (
                      <a href={item.href} className="flex items-center gap-4 transition-opacity hover:opacity-80">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{content}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
