import { useDebounce } from '@renderer/hooks/useDebounce'
import { cn } from '@renderer/utils'
import { ComponentProps, useEffect, useRef, useState } from 'react'
import { LuSearch, LuX } from 'react-icons/lu'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export type SearchInputProps = ComponentProps<'div'> & {
  placeholder?: string
}

export const SearchInput = ({ className, placeholder, ...props }: SearchInputProps) => {
  const { query } = useParams()
  const navigate = useNavigate()
  const location = useLocation()

  const [value, setValue] = useState<string>(query || '')
  const [isFocused, setIsFocused] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const debouncedValue = useDebounce(value)

  const focus = () => {
    if (inputRef.current) {
      inputRef.current.focus()
      setIsFocused(true)
    }
  }

  const handleClearInput = () => {
    setValue('')
    navigate('/search', { replace: true })
  }

  useEffect(() => {
    if (debouncedValue.length === 0) {
      // Avoid rerender Search Component when first mount
      if (location.pathname !== '/search') {
        navigate('/search', { replace: true })
      }
    } else {
      navigate(`/search/${encodeURIComponent(debouncedValue)}`, { replace: true })
    }
  }, [debouncedValue])

  useEffect(() => {
    const handleMouseClickEvent = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsFocused(false)
      }
    }

    document.addEventListener('click', handleMouseClickEvent)

    return () => {
      document.removeEventListener('click', handleMouseClickEvent)
    }
  }, [])

  return (
    <div
      className={cn(
        'px-2.5 py-1 flex flex-row justify-start items-center rounded-full border border-transparent',
        { 'border-zinc-50': isFocused, 'hover:border-zinc-300/30 ': !isFocused },
        className
      )}
      ref={containerRef}
      onClick={focus}
      {...props}
    >
      <LuSearch
        className={cn('w-5 h-5 text-zinc-300', {
          'text-white': isFocused
        })}
      />
      <input
        type="text"
        value={value}
        ref={inputRef}
        placeholder={placeholder}
        className="h-full flex-1 ml-2 bg-transparent outline-0"
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
      <LuX
        // using `hidden` here will cause losing focus
        // because when clearing input, this icon is removed and is no longer a child of the container
        className={cn('w-5 h-5 ml-2', { invisible: value.length === 0 })}
        onClick={handleClearInput}
      />
    </div>
  )
}
