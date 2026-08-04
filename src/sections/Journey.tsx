import { Building2, FlaskConical, GraduationCap, Shield } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { timeline } from '../data/profile'

const ICONS = [GraduationCap, Shield, Building2, FlaskConical]

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative z-10 -mt-8 rounded-t-[40px] bg-[#f5f5f7] px-5 py-24 shadow-[0_-1px_0_rgba(0,0,0,0.04)] sm:rounded-t-[56px] sm:px-8 sm:py-32 md:px-10"
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-12 text-center sm:gap-16">
        <FadeIn delay={0} y={30}>
          <span className="mb-3 block text-sm font-medium text-[#0071e3]">Journey</span>
          <h2 className="hero-heading text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            여정
          </h2>
        </FadeIn>

        <AnimatedText
          text="한남대학교 AI융합학과에서 인공지능을, 전기전자공학과에서 회로와 신호를 배우고 있습니다. 언젠가 이 둘이 만나 물리 세계를 실제로 움직이는 Physical AI를 만들고 싶습니다."
          className="max-w-[560px] text-lg leading-relaxed text-[#6e6e73]"
        />

        <ol className="mt-6 w-full max-w-xl border-l border-[#d2d2d7] pl-10 text-left sm:pl-12">
          {timeline.map((item, i) => {
            const Icon = ICONS[i] ?? FlaskConical
            return (
              <FadeIn key={item.title} delay={i * 0.1} className="relative pb-12 last:pb-0">
                <span className="absolute -left-[53px] top-0 flex h-9 w-9 items-center justify-center rounded-full border border-[#d2d2d7] bg-white text-[#0071e3] shadow-sm sm:-left-[57px]">
                  <Icon size={16} strokeWidth={2} />
                </span>
                <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">
                  {item.tag}
                </span>
                <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f] sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{item.body}</p>
              </FadeIn>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
