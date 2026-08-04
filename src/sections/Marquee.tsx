import { useEffect, useRef, useState } from 'react'
import { marqueeRow1, marqueeRow2 } from '../data/profile'

function tripleRow(items: string[]) {
  return [...items, ...items, ...items]
}

function Tile({ label }: { label: string }) {
  return (
    <div className="flex h-[52px] shrink-0 items-center whitespace-nowrap rounded-full border border-[#d2d2d7] bg-[#f5f5f7] px-6 text-sm font-medium text-[#1d1d1f]/70 sm:h-[60px] sm:px-7">
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
    <section ref={sectionRef} className="overflow-x-clip bg-white pb-16 pt-4 sm:pb-20">
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
