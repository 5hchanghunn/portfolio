import FadeIn from '../components/FadeIn'

export default function Focus() {
  return (
    <section id="focus" className="bg-white px-5 py-28 text-center sm:px-8 sm:py-36 md:px-10">
      <FadeIn delay={0} y={30} className="mx-auto max-w-2xl">
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
      </FadeIn>
    </section>
  )
}
