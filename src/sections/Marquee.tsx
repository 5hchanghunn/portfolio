import { useEffect, useRef, useState } from 'react'
import { marqueeRow1, marqueeRow2 } from '../data/profile'

function tripleRow(items: string[]) {
  return [...items, ...items, ...items]
}

function Tile({ label }: { label: string }) {
  return (
    <div className="flex h-[64px] shrink-0 items-center whitespace-nowrap rounded-2xl border border-[#D7E2EA]/20 bg-white/[0.02] px-8 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/80 sm:h-[80px] sm:text-base">
      {label}
    </div>
  )
}

export default function Marquee() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const sectionTop = el.getBoundingClientRect().top + window.scrollY
      const next = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(next)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1 = tripleRow(marqueeRow1)
  const row2 = tripleRow(marqueeRow2)

  return (
    <section ref={sectionRef} className="overflow-x-clip pb-10 pt-24 sm:pt-32 md:pt-40">
      <div
        className="mb-3 flex gap-3"
        style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
      >
        {row1.map((label, i) => (
          <Tile key={i} label={label} />
        ))}
      </div>
      <div
        className="flex gap-3"
        style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
      >
        {row2.map((label, i) => (
          <Tile key={i} label={label} />
        ))}
      </div>
    </section>
  )
}
