import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const navLinks = [
  { href: '#journey', label: '여정' },
  { href: '#lab', label: '연구실' },
  { href: '#projects', label: '만든 것' },
  { href: '#contact', label: '연락' },
]

export default function Hero() {
  return (
    <header id="top" className="relative overflow-x-clip bg-white">
      <FadeIn delay={0} y={-12}>
        <nav className="sticky top-0 z-20 flex items-center justify-between border-b border-[#d2d2d7]/60 bg-white/80 px-6 py-4 backdrop-blur-md md:px-10">
          <a href="#top" className="text-sm font-semibold tracking-tight text-[#1d1d1f]">
            한남대 AI융합학과
          </a>
          <div className="flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#1d1d1f]/70 transition-colors duration-200 hover:text-[#1d1d1f]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </FadeIn>

      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 pb-20 pt-20 text-center sm:pt-28 md:pb-28 md:pt-36">
        <FadeIn delay={0.1} y={24}>
          <span className="mb-5 inline-block text-sm font-medium text-[#0071e3]">
            한남대학교 AI융합학과 2학년 · 전기전자공학 복수전공
          </span>
        </FadeIn>

        <FadeIn delay={0.2} y={30}>
          <h1 className="hero-heading text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-6xl md:text-7xl">
            물리 세계와 만나는
            <br />
            AI를 공부합니다
          </h1>
        </FadeIn>

        <FadeIn delay={0.35} y={20}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#6e6e73] sm:text-xl">
            코드로 짓는 지능과, 손으로 만지는 전자 회로 사이에서 —{' '}
            <span className="text-[#1d1d1f]">Physical AI</span>로 향하는 기록.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={16} className="mt-9">
          <ContactButton />
        </FadeIn>

        <Magnet padding={140} strength={6} className="mt-16">
          <FadeIn delay={0.6} y={24}>
            <div className="flex h-[220px] w-[220px] items-end justify-center overflow-hidden rounded-full border border-[#d2d2d7] bg-[#f5f5f7] shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] sm:h-[260px] sm:w-[260px]">
              <img
                src={`${import.meta.env.BASE_URL}portrait.png`}
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>
        </Magnet>
      </div>
    </header>
  )
}
