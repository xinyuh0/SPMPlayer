import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}

export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export const formatGenreName = (genre: string): string => {
  let formatted = genre

  if (formatted.includes('-')) {
    formatted = formatted
      .split('-')
      .map((s) => capitalize(s))
      .join('-')
  } else {
    formatted = capitalize(formatted)
  }

  return formatted
}

export const sleep = (delay: number = 1000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export const formatDuration = (duration: number): string => {
  const seconds = Math.floor((duration / 1000) % 60)
  const minutes = Math.floor((duration / (1000 * 60)) % 60)
  const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`

  return formattedTime
}
