import { useRef, useState, type MouseEvent } from 'react'

interface Spark {
  id: number
  x: number
  y: number
}

let sparkId = 0

export default function SparkTrail({ children }: { children: React.ReactNode }) {
  const [sparks, setSparks] = useState<Spark[]>([])
  const lastSpawn = useRef(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const now = performance.now()
    if (now - lastSpawn.current < 45) return
    lastSpawn.current = now

    const rect = e.currentTarget.getBoundingClientRect()
    const id = sparkId++
    const spark = { id, x: e.clientX - rect.left, y: e.clientY - rect.top }

    setSparks((prev) => [...prev.slice(-24), spark])
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => s.id !== id))
    }, 700)
  }

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      {children}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {sparks.map((s) => (
          <span
            key={s.id}
            className="spark-dot"
            style={{ left: s.x, top: s.y }}
          />
        ))}
      </div>
    </div>
  )
}
