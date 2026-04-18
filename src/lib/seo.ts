import type { Dict } from '../i18n/context'

function setMeta(selector: string, attr: 'content', value: string) {
  const el = document.head.querySelector<HTMLMetaElement>(selector)
  if (el) el.setAttribute(attr, value)
}

export function applySeo(meta: Dict['meta']) {
  document.title = meta.title
  setMeta('meta[name="description"]', 'content', meta.description)
  setMeta('meta[property="og:title"]', 'content', meta.ogTitle)
  setMeta('meta[property="og:description"]', 'content', meta.ogDescription)
  setMeta('meta[name="twitter:title"]', 'content', meta.ogTitle)
  setMeta('meta[name="twitter:description"]', 'content', meta.ogDescription)
}
