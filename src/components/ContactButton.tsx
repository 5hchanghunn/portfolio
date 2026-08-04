import { useEffect, useRef, useState } from 'react'
import { contactEmail, githubHandle, githubUrl } from '../data/profile'

export default function ContactButton({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const handleOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', handleOutside)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactEmail)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch {
      // clipboard unavailable — email is still visible and mailto link still works
    }
  }

  return (
    <div ref={wrapperRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0077ed]"
      >
        연락하기
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-30 mt-3 w-72 -translate-x-1/2 rounded-2xl border border-[#d2d2d7] bg-white p-5 text-left shadow-[0_20px_50px_-15px_rgba(0,0,0,0.25)]">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">Email</p>
          <div className="mt-1.5 flex items-center justify-between gap-2">
            <a
              href={`mailto:${contactEmail}`}
              className="truncate text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3]"
            >
              {contactEmail}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="shrink-0 rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#1d1d1f] transition-colors hover:bg-[#e8e8ed]"
            >
              {copied ? '복사됨' : '복사'}
            </button>
          </div>

          <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">
            GitHub
          </p>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-1.5 block truncate text-sm font-medium text-[#1d1d1f] hover:text-[#0071e3]"
          >
            github.com/{githubHandle}
          </a>
        </div>
      )}
    </div>
  )
}
