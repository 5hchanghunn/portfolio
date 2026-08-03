import { contactEmail } from '../data/profile'
import FadeIn from '../components/FadeIn'

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0C0C0C] px-5 pb-16 pt-10 text-center">
      <FadeIn delay={0} y={20}>
        <p className="text-sm uppercase tracking-wide text-[#D7E2EA]/70">
          한남대학교 AI융합학과 · 전기전자공학 복수전공
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-3 inline-block text-sm text-[#D7E2EA]/50 transition-opacity hover:opacity-70"
        >
          {contactEmail}
        </a>
        <p className="mt-6 text-xs text-[#D7E2EA]/30">이 페이지는 계속 자라는 중입니다.</p>
      </FadeIn>
    </footer>
  )
}
