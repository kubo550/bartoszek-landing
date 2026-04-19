import { useState, type FormEvent } from 'react'
import { useTranslation } from '../hooks/useTranslation'
import { ArrowIcon, PhoneIcon } from './ui/icons'
import { phoneHref } from '../lib/phone'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export function ContactForm() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    const form = e.currentTarget
    const formData = new FormData(form)
    if (ACCESS_KEY) formData.append('access_key', ACCESS_KEY)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = (await response.json()) as { success?: boolean; message?: string }
      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
        setErrorMessage(data.message ?? t.form.error)
      }
    } catch {
      setStatus('error')
      setErrorMessage(t.form.error)
    }
  }

  const f = t.form.fields
  const tel = phoneHref(t.footer.phone)

  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28 bg-slate-900 text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse at 20% 10%, rgba(59,130,246,0.22), transparent 55%), radial-gradient(ellipse at 80% 90%, rgba(14,165,233,0.18), transparent 60%)',
        }}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-noise opacity-[0.35] mix-blend-soft-light" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-brand-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto" data-reveal>
          <span className="inline-flex items-center rounded-full bg-white/5 ring-1 ring-white/10 text-brand-200 text-xs font-medium px-3 py-1 backdrop-blur">
            {t.nav.contact}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight text-white">
            {t.form.title}
          </h2>
          <p className="mt-3 text-slate-300">{t.form.subtitle}</p>

          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-3">
            <a
              href={tel}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors shadow-lg shadow-black/20"
            >
              <span className="relative inline-flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 animate-soft-pulse" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <PhoneIcon />
              {t.nav.callCta}
            </a>
            <span className="text-sm text-slate-400">{t.form.orCall}</span>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          data-reveal
          className="mt-10 grid gap-4 sm:grid-cols-2 bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 rounded-2xl ring-1 ring-white/10 shadow-2xl shadow-black/30"
        >
          <input type="hidden" name="subject" value="Nowe zapytanie z www — Komfort Instal" />
          <input type="hidden" name="from_name" value="Komfort Instal — landing" />
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
            style={{ display: 'none' }}
          />

          <Field label={f.name} name="name" placeholder={f.namePlaceholder} required autoComplete="given-name" />
          <Field label={f.lastName} name="lastName" placeholder={f.lastNamePlaceholder} required autoComplete="family-name" />
          <Field
            label={f.email}
            name="email"
            type="email"
            placeholder={f.emailPlaceholder}
            required
            autoComplete="email"
          />
          <Field
            label={f.phone}
            name="phone"
            type="tel"
            placeholder={f.phonePlaceholder}
            autoComplete="tel"
          />

          <label className="sm:col-span-2 flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-slate-200">{f.message}</span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={f.messagePlaceholder}
              className="rounded-lg bg-white/[0.04] ring-1 ring-white/10 focus:ring-2 focus:ring-brand-500 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] focus:outline-none px-3 py-2.5 text-white placeholder:text-slate-500 resize-none transition"
            />
          </label>

          <div className="sm:col-span-2 flex flex-col gap-3 items-start pt-2">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 hover:bg-brand-600 disabled:opacity-60 px-6 py-3 text-sm font-semibold text-white transition-all tracking-wide shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-0.5"
            >
              {status === 'submitting' ? t.form.submitting : t.form.submit}
              <ArrowIcon className="transition-transform group-hover:translate-x-0.5" />
            </button>
            {status === 'success' && (
              <p role="status" className="text-sm text-emerald-300">
                {t.form.success}
              </p>
            )}
            {status === 'error' && (
              <p role="alert" className="text-sm text-rose-300">
                {errorMessage || t.form.error}
              </p>
            )}
            <p className="text-xs text-slate-400">{t.form.privacy}</p>
          </div>
        </form>
      </div>
    </section>
  )
}

type FieldProps = {
  label: string
  name: string
  placeholder?: string
  type?: string
  required?: boolean
  autoComplete?: string
}

function Field({ label, name, placeholder, type = 'text', required, autoComplete }: FieldProps) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-slate-200">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="rounded-lg bg-white/[0.04] ring-1 ring-white/10 focus:ring-2 focus:ring-brand-500 focus:bg-white/[0.06] focus:shadow-[0_0_0_4px_rgba(59,130,246,0.12)] focus:outline-none px-3 py-2.5 text-white placeholder:text-slate-500 transition"
      />
    </label>
  )
}
