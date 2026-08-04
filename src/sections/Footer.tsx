import { contactEmail } from '../data/profile'
import FadeIn from '../components/FadeIn'

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 -mt-8 rounded-t-[40px] bg-[#f5f5f7] px-5 pb-16 pt-14 text-center shadow-[0_-1px_0_rgba(0,0,0,0.04)] sm:rounded-t-[56px]"
    >
      <FadeIn delay={0} y={16}>
        <p className="text-sm text-[#1d1d1f]">
          한남대학교 AI융합학과 · 전기전자공학 복수전공
        </p>
        <a
          href={`mailto:${contactEmail}`}
          className="mt-3 inline-block text-sm text-[#0071e3] transition-opacity hover:opacity-70"
        >
          {contactEmail}
        </a>
        <p className="mt-6 text-xs text-[#6e6e73]">이 페이지는 계속 자라는 중입니다.</p>
      </FadeIn>
    </footer>
  )
}
