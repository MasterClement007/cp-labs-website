import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  inverted = false,
}: {
  eyebrow: string
  title: string
  description?: string
  inverted?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={cn(
          'font-mono text-xs font-medium uppercase tracking-widest',
          inverted ? 'text-ink-foreground/60' : 'text-primary',
        )}
      >
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance md:text-4xl">{title}</h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty md:text-lg',
            inverted ? 'text-ink-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
