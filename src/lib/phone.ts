export function phoneHref(display: string) {
  return `tel:+48${display.replace(/\s/g, '')}`
}
