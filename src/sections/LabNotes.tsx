import FadeIn from '../components/FadeIn'
import { labNotes } from '../data/profile'

export default function LabNotes() {
  return (
    <section
      id="lab"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="font-display mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          연구실 노트
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {labNotes.map((note, i) => (
          <FadeIn
            key={note.number}
            delay={i * 0.1}
            className={`flex items-start gap-6 border-b border-[rgba(12,12,12,0.15)] py-8 sm:gap-10 sm:py-10 md:py-12 ${
              i === 0 ? 'border-t' : ''
            } ${note.muted ? 'opacity-50' : ''}`}
          >
            <span
              className="font-display shrink-0 font-black text-[#0C0C0C]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {note.number}
            </span>
            <div>
              <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-[#0C0C0C]/50">
                {note.tag}
              </span>
              <h3
                className="font-medium uppercase tracking-tight"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {note.title}
              </h3>
              <p
                className="mt-2 max-w-2xl font-light leading-relaxed opacity-60"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
              >
                {note.body}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
