import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useRef } from 'react'

function Char({
  ch,
  progress,
  start,
  end,
}: {
  ch: string
  progress: MotionValue<number>
  start: number
  end: number
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1])
  return <motion.span style={{ opacity }}>{ch === ' ' ? ' ' : ch}</motion.span>
}

export default function AnimatedText({
  text,
  className = '',
}: {
  text: string
  className?: string
}) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = text.split('')

  return (
    <p ref={ref} className={className}>
      {chars.map((ch, i) => (
        <Char
          key={i}
          ch={ch}
          progress={scrollYProgress}
          start={i / chars.length}
          end={(i + 1) / chars.length}
        />
      ))}
    </p>
  )
}
