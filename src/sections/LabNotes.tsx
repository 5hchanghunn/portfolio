import FadeIn from '../components/FadeIn'
import { labNotes } from '../data/profile'

export default function LabNotes() {
  return (
    <section id="lab" className="bg-white px-5 py-24 sm:px-8 sm:py-32 md:px-10">
      <FadeIn delay={0} y={30} className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="mb-3 block text-sm font-medium text-[#0071e3]">Lab Notes</span>
        <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          연구실 노트
        </h2>
        <p className="mt-4 text-lg text-[#6e6e73]">
          완성된 결과보다, 지금 쌓고 있는 이해를 기록합니다.
        </p>
      </FadeIn>

      <div className="mx-auto max-w-3xl divide-y divide-[#d2d2d7] border-y border-[#d2d2d7]">
        {labNotes.map((note, i) => (
          <FadeIn
            key={note.number}
            delay={i * 0.1}
            className={`flex items-start gap-6 py-8 sm:gap-10 sm:py-10 ${note.muted ? 'opacity-50' : ''}`}
          >
            <span className="shrink-0 text-3xl font-semibold text-[#d2d2d7] sm:text-5xl">
              {note.number}
            </span>
            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
                {note.tag}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-[#1d1d1f]">
                {note.title}
              </h3>
              <p className="mt-2 max-w-xl leading-relaxed text-[#6e6e73]">{note.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
