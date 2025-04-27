import Image from "next/image";

export default function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="border-t border-[#80caff]/20"
    >
      <div className="relative isolate overflow-hidden bg-[#040e17]">
        <svg
          className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] scale-x-[-1]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="services-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#services-pattern)"
          />
        </svg>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
          <div className="mx-auto flex lg:justify-between lg:flex-row flex-col items-center justify-start lg:items-start gap-y-10">
            <h2
              id="services-title"
              className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:mb-0 text-left max-w-2xl lg:mr-1 mr-10 sm:mr-0"
            >
              На вашей стороне в вопросах права и бизнеса
            </h2>

            <div className="flex flex-col max-w-2xl">
              <ol className="flex flex-col sm:flex-row pb-16 pt-4 gap-12">
                <li>
                  <span className="rounded-full px-8 py-2 w-fit font-semibold text-sm text-[#5395ff] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] mb-5">
                    Поиск и подбор адвокатов
                  </span>
                  <p className="mt-5 text-base/6 font-thin text-white/80">
                    Помогаю найти подходящего адвоката под задачу, сопровождаю
                    процесс как медиатор и коммуникационный менеджер.
                  </p>
                </li>

                <li>
                  <span className="rounded-full px-8 py-2 w-fit font-semibold text-sm text-[#5395ff] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] mb-5">
                    Консультации для бизнеса
                  </span>
                  <p className="mt-5 text-base/6 font-thin text-white/80">
                    Консультирую по американскому рынку: запуск, структура,
                    юридические риски и эффективная коммуникация в правовом
                    поле.
                  </p>
                </li>
              </ol>

              <div className="w-full">
                <Image
                  src="/img/hands.webp"
                  alt="рукопожатие"
                  width={1280}
                  height={720}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px"
                  className="w-full object-cover rounded-2xl shadow-lg ring-1 ring-[#2064bc]/20"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
