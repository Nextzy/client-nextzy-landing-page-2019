import { links } from '../components/layout/nav'
import Router from 'next/router'
export const addPath = (index): void => {
  const currentLink = links.filter((link) => link.key === index)[0]
  const original = `/?goto=${currentLink.href}`
  const as = `/${currentLink.href}`
  Router.replace(original, original, { shallow: true })
  // Router.replace(original, as, { shallow: true })
}
