import FadeIn from '../components/FadeIn'
import SparkTrail from '../components/SparkTrail'

export default function Focus() {
  return (
    <SparkTrail>
      <section
        id="focus"
        className="relative z-10 -mt-8 overflow-hidden rounded-t-[40px] bg-white px-5 py-28 text-center shadow-[0_-1px_0_rgba(0,0,0,0.04)] sm:rounded-t-[56px] sm:px-8 sm:py-36 md:px-10"
      >
        <div className="ambient-glow" />
        <FadeIn delay={0} y={30} className="relative z-10 mx-auto max-w-2xl">
          <span className="mb-4 block text-sm font-medium text-[#0071e3]">Focus</span>
          <h2 className="hero-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            Physical AI
          </h2>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-loose text-[#6e6e73] sm:text-xl">
            지능은 화면 안에서 멈추지 않습니다.
            <br className="hidden sm:inline" />
            전기전자공학으로 회로와 신호를 이해하고,
            <br className="hidden sm:inline" />
            AI융합학과에서 학습과 추론을 이해하며 —
            <br className="hidden sm:inline" />그 둘이 만나는 지점, 물리 세계를 움직이는 AI를 향해 갑니다.
          </p>
          <p className="mt-10 text-xs text-[#6e6e73]/60">(마우스를 움직여보세요)</p>
        </FadeIn>
      </section>
    </SparkTrail>
  )
}
