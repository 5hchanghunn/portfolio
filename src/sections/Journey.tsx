import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { timeline } from '../data/profile'

function CircuitCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="#D7E2EA"
      strokeWidth="1.4"
      strokeOpacity="0.35"
    >
      <path d="M4 40 H40 V4" />
      <circle cx="40" cy="40" r="3" fill="#D7E2EA" fillOpacity="0.35" />
      <path d="M40 40 H90" />
      <circle cx="90" cy="40" r="5" />
      <path d="M4 80 H60" />
      <circle cx="60" cy="80" r="3" fill="#D7E2EA" fillOpacity="0.35" />
    </svg>
  )
}

function OrbitCorner({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      stroke="#D7E2EA"
      strokeWidth="1.4"
      strokeOpacity="0.35"
    >
      <circle cx="60" cy="60" r="50" />
      <circle cx="60" cy="60" r="28" />
      <circle cx="60" cy="10" r="4" fill="#D7E2EA" fillOpacity="0.35" />
    </svg>
  )
}

export default function Journey() {
  return (
    <section id="journey" className="relative min-h-screen px-5 py-20 sm:px-8 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] w-[90px] sm:left-[2%] sm:w-[130px] md:left-[4%] md:w-[160px]">
        <CircuitCorner />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] w-[90px] sm:right-[2%] sm:w-[130px] md:right-[4%] md:w-[160px]">
        <OrbitCorner />
      </FadeIn>

      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            여정
          </h2>
        </FadeIn>

        <AnimatedText
          text="한남대학교 AI융합학과에서 인공지능을, 전기전자공학과에서 회로와 신호를 배우고 있습니다. 언젠가 이 둘이 만나 물리 세계를 실제로 움직이는 Physical AI를 만들고 싶습니다."
          className="max-w-[560px] font-medium leading-relaxed text-[#D7E2EA]"
        />

        <ol className="mt-10 w-full max-w-xl border-l border-[#D7E2EA]/20 pl-8 text-left sm:pl-10">
          {timeline.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-[10px] w-[10px] rounded-full border-2 border-[#D7E2EA] bg-[#0C0C0C] sm:-left-[45px]" />
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#D7E2EA]/60">
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#D7E2EA]/70">{item.body}</p>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
