import { SectionEyebrow } from './SectionEyebrow'

type Props = {
  eyebrow?: string
  eyebrowVariant?: 'brand' | 'slate'
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  reveal?: boolean
}

export function SectionHeader({
  eyebrow,
  eyebrowVariant = 'brand',
  title,
  subtitle,
  align = 'left',
  reveal = true,
}: Props) {
  const wrapper =
    align === 'center' ? 'max-w-2xl mx-auto text-center' : 'max-w-2xl'

  return (
    <div className={wrapper} {...(reveal ? { 'data-reveal': true } : {})}>
      {eyebrow && <SectionEyebrow variant={eyebrowVariant}>{eyebrow}</SectionEyebrow>}
      <h2 className={`${eyebrow ? 'mt-3' : ''} text-3xl md:text-4xl font-semibold tracking-tight`}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 dark:text-slate-400">{subtitle}</p>
      )}
    </div>
  )
}
