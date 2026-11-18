import { buttonVariants } from '@/components/ui/button'
import { navLinks, site } from '@/lib/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${site.brand}, home`}>
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-md bg-ink font-mono text-xs font-semibold text-ink-foreground"
          >
            CP
          </span>
          <span className="text-sm font-semibold tracking-tight">{site.brand}</span>
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a href="#contact" className={cn(buttonVariants({ size: 'lg' }), 'px-4')}>
          Book a consult
        </a>
      </div>
    </header>
  )
}
