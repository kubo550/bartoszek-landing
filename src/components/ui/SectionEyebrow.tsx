import type { ReactNode } from 'react'

type Variant = 'brand' | 'slate' | 'dark'

const VARIANTS: Record<Variant, string> = {
  brand:
    'bg-brand-50 ring-brand-100 text-brand-700 dark:bg-brand-500/15 dark:ring-brand-500/30 dark:text-brand-300',
  slate:
    'bg-white ring-slate-200 text-slate-700 shadow-sm dark:bg-slate-800 dark:ring-slate-700 dark:text-slate-200 dark:shadow-none',
  dark: 'bg-white/5 ring-white/10 text-brand-200 backdrop-blur',
}

type Props = {
  children: ReactNode
  variant?: Variant
  className?: string
}

export function SectionEyebrow({ children, variant = 'brand', className = '' }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full ring-1 px-3 py-1 text-xs font-medium ${VARIANTS[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
