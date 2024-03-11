import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export const capitaliza = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const formatGenreName = (genre: string): string => {
  let formatted = genre

  if (formatted.includes('-')) {
    formatted = formatted
      .split('-')
      .map((s) => capitaliza(s))
      .join('-')
  } else {
    formatted = capitaliza(formatted)
  }

  return formatted
}
