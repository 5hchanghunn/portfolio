import {
  BrainCircuit,
  Boxes,
  Code2,
  ImageIcon,
  Layers,
  Network,
  ScanEye,
  Sparkles,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import { labNotes } from '../data/profile'

const TAG_ICONS: Record<string, LucideIcon> = {
  Multimodal: Layers,
  MLP: Network,
  미니배치: Boxes,
  TensorFlow: Code2,
  DNN: BrainCircuit,
  CNN: ScanEye,
  영상인식: ImageIcon,
}

export default function LabNotes() {
  return (
    <section
      id="lab"
      className="relative z-10 -mt-8 rounded-t-[40px] bg-white px-5 py-24 shadow-[0_-1px_0_rgba(0,0,0,0.04)] sm:rounded-t-[56px] sm:px-8 sm:py-32 md:px-10"
    >
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
        {labNotes.map((note, i) => {
          const Icon = TAG_ICONS[note.tag] ?? Sparkles
          return (
            <FadeIn
              key={note.number}
              delay={i * 0.05}
              className={`group flex items-start gap-5 rounded-2xl px-3 py-8 transition-colors duration-200 hover:bg-[#f5f5f7] sm:gap-8 sm:px-4 sm:py-10 ${note.muted ? 'opacity-50' : ''}`}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0071e3]/10 text-[#0071e3] transition-transform duration-200 group-hover:scale-110 sm:h-14 sm:w-14">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-[#0071e3]">
                    {note.tag}
                  </span>
                  <span className="text-xs text-[#d2d2d7]">·</span>
                  <span className="text-xs font-medium text-[#6e6e73]">{note.number}</span>
                </div>
                <h3 className="mt-1 text-xl font-semibold tracking-tight text-[#1d1d1f]">
                  {note.title}
                </h3>
                <p className="mt-2 max-w-xl leading-relaxed text-[#6e6e73]">{note.body}</p>
              </div>
            </FadeIn>
          )
        })}
      </div>
    </section>
  )
}
