import FadeIn from '../components/FadeIn'
import AnimatedText from '../components/AnimatedText'
import { timeline } from '../data/profile'

export default function Journey() {
  return (
    <section id="journey" className="bg-[#f5f5f7] px-5 py-24 sm:px-8 sm:py-32 md:px-10">
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

        <ol className="mt-6 w-full max-w-xl border-l border-[#d2d2d7] pl-8 text-left sm:pl-10">
          {timeline.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1} className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 h-[10px] w-[10px] rounded-full border-2 border-[#0071e3] bg-white sm:-left-[45px]" />
              <span className="mb-2 block text-xs font-semibold uppercase tracking-wide text-[#6e6e73]">
                {item.tag}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-[#1d1d1f] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6e6e73]">{item.body}</p>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  )
}
