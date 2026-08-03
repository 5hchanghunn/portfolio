import FadeIn from '../components/FadeIn'

export default function Focus() {
  return (
    <section
      id="focus"
      className="relative -mt-10 z-10 overflow-hidden rounded-t-[40px] bg-[#0C0C0C] px-5 py-28 text-center sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-36 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-44"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(circle at 20% 20%, rgba(190,76,0,0.14), transparent 45%), radial-gradient(circle at 80% 80%, rgba(118,33,176,0.14), transparent 45%)',
        }}
      />
      <FadeIn delay={0} y={40} className="relative mx-auto max-w-2xl">
        <span className="mb-4 block text-xs font-semibold uppercase tracking-widest text-[#D7E2EA]/50">
          Focus
        </span>
        <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-[clamp(2.4rem,7vw,5rem)]">
          Physical AI
        </h2>
        <p className="mx-auto mt-10 max-w-xl text-[clamp(1rem,1.8vw,1.25rem)] leading-loose text-[#D7E2EA]/80">
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
