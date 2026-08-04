import { useEffect, useState } from 'react'

const SCRIPT = [
  { minute: "0'", event: '킥오프', home: 0, away: 0 },
  { minute: "12'", event: '대한민국 코너킥', home: 0, away: 0 },
  { minute: "34'", event: '⚽ 대한민국 득점!', home: 1, away: 0 },
  { minute: "58'", event: '브라질 반격', home: 1, away: 0 },
  { minute: "71'", event: '⚽ 브라질 동점골!', home: 1, away: 1 },
  { minute: "90+2'", event: '경기 종료 — 무승부', home: 1, away: 1 },
]

export default function MiniScoreboard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s + 1) % SCRIPT.length)
    }, 1800)
    return () => clearInterval(id)
  }, [])

  const { minute, event, home, away } = SCRIPT[step]

  return (
    <div className="rounded-2xl border border-[#d2d2d7] bg-[#f5f5f7] px-5 py-4">
      <div className="flex items-center justify-center gap-4 text-lg font-bold text-[#1d1d1f]">
        <span>🇰🇷 대한민국</span>
        <span className="rounded-md bg-white px-2.5 py-0.5 tabular-nums shadow-sm">
          {home} – {away}
        </span>
        <span>브라질 🇧🇷</span>
      </div>
      <p className="mt-2 text-center text-xs text-[#6e6e73]">
        <span className="font-semibold text-[#0071e3]">{minute}</span> {event}
      </p>
    </div>
  )
}
