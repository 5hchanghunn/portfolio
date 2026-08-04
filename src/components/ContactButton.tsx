import { contactEmail } from '../data/profile'

export default function ContactButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={`mailto:${contactEmail}`}
      className={`inline-flex items-center rounded-full bg-[#0071e3] px-6 py-2.5 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#0077ed] ${className}`}
    >
      연락하기
    </a>
  )
}
