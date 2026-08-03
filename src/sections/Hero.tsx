import FadeIn from '../components/FadeIn'
import Magnet from '../components/Magnet'
import ContactButton from '../components/ContactButton'

const navLinks = [
  { href: '#journey', label: '여정' },
  { href: '#lab', label: '연구실' },
  { href: '#focus', label: 'Focus' },
  { href: '#contact', label: 'Contact' },
]

export default function Hero() {
  return (
    <header id="top" className="relative flex h-screen flex-col overflow-x-clip">
      <FadeIn delay={0} y={-20}>
        <nav className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </FadeIn>

      <div className="relative flex flex-1 items-center justify-center">
        <FadeIn delay={0.15} y={40} className="w-full overflow-hidden text-center">
          <h1 className="hero-heading w-full whitespace-nowrap text-[14vw] font-black uppercase leading-none tracking-tight sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Physical AI.
          </h1>
        </FadeIn>

        <Magnet
          padding={140}
          strength={5}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <FadeIn delay={0.6} y={30}>
            <div className="flex h-[220px] w-[220px] items-end justify-center overflow-hidden rounded-full border border-[#D7E2EA]/40 bg-white/[0.03] backdrop-blur-sm sm:h-[280px] sm:w-[280px] md:h-[340px] md:w-[340px]">
              <img
                src="/portrait.png"
                alt=""
                className="h-full w-full object-cover object-top"
              />
            </div>
          </FadeIn>
        </Magnet>
      </div>

      <div className="flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
          <p
            className="font-light uppercase leading-snug tracking-wide text-[#D7E2EA]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            소프트웨어 지능과 전자 회로를 함께 엮어가는 학부생
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </header>
  )
}
