import FadeIn from '../components/FadeIn'
import { projects } from '../data/profile'

export default function Projects() {
  return (
    <section id="projects" className="bg-[#f5f5f7] px-5 py-24 sm:px-8 sm:py-32 md:px-10">
      <FadeIn delay={0} y={30} className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
        <span className="mb-3 block text-sm font-medium text-[#0071e3]">Projects</span>
        <h2 className="text-4xl font-semibold tracking-tight text-[#1d1d1f] sm:text-5xl">
          만든 것
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-3xl">
        {projects.map((project) => (
          <FadeIn
            key={project.title}
            delay={0.1}
            className="overflow-hidden rounded-3xl border border-[#d2d2d7] bg-white shadow-[0_20px_50px_-25px_rgba(0,0,0,0.15)]"
          >
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">
                  {project.title}
                </h3>
                <span className="rounded-full bg-[#0071e3]/10 px-2.5 py-0.5 text-xs font-semibold text-[#0071e3]">
                  Vibe Coding
                </span>
              </div>
              <p className="mt-2 text-base font-medium text-[#0071e3]">{project.tagline}</p>
              <p className="mt-4 max-w-xl leading-relaxed text-[#6e6e73]">{project.body}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stats.map((stat) => (
                  <span
                    key={stat}
                    className="rounded-full bg-[#f5f5f7] px-3 py-1 text-xs font-medium text-[#1d1d1f]/70"
                  >
                    {stat}
                  </span>
                ))}
              </div>

              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-1 text-sm font-medium text-[#0071e3] transition-opacity hover:opacity-70"
              >
                사이트 보러 가기 →
              </a>

              <p className="mt-4 text-xs text-[#6e6e73]">{project.buildNote}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
