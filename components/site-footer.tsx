import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="text-sm font-semibold">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">
          {'© '}
          {new Date().getFullYear()} {site.shortName}
        </p>
      </div>
    </footer>
  )
}
