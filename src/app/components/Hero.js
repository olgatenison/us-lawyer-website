import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden bg-[#040e17]"
      role="banner"
      aria-label="Главный баннер — юридическая помощь в США"
      aria-labelledby="hero-title"
    >
      {/* background */}
      <svg
        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="bg-pattern"
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
        <rect width="100%" height="100%" fill="url(#bg-pattern)" />
      </svg>

      {/* blur shape */}
      <div
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath:
              "polygon(73.6% 51.7%,91.7% 11.8%,100% 46.4%,97.4% 82.2%,92.5% 84.9%,75.7% 64%,55.3% 47.5%,46.5% 49.4%,45% 62.9%,50.3% 87.2%,21.3% 64.1%,0.1% 100%,5.4% 51.1%,21.4% 63.9%,58.9% 0.2%,73.6% 51.7%)",
          }}
        />
      </div>

      {/* content */}
      <div className="mx-auto max-w-7xl pb-0 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 px-0 md:px-8">
          {/* text */}
          <div className="w-full lg:w-1/2 lg:px-0 font-sans px-6 sm:px-0">
            <div className="mx-auto flex flex-col items-center text-center md:text-left md:items-start">
              <div className="rounded-full px-8 py-2 w-fit font-semibold text-sm text-[#3470bf] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] mx-2 sm:mx-0">
                Консультирую по праву, бизнесу и коммуникациям
              </div>
              <h1
                className="text-pretty text-4xl sm:text-7xl font-bold tracking-tight text-white mt-10"
                id="hero-title"
              >
                Комплексная юридическая помощь в США
              </h1>
              <p className="py-8 text-pretty font-thin text-white/80 text-sm sm:text-lg/8 sm:max-w-lg max-w-sm">
                Помогаю клиентам находить адвокатов, понимать свои права и
                избегать дорогостоящих ошибок.
              </p>
              <div className="mt-10 flex items-center mb-10">
                <a
                  href="mailto:igor.slabykh@gmail.com"
                  className="rounded-md bg-[#aa0f24] px-8 py-2.5 text-sm sm:text-lg/8 text-white shadow-sm hover:bg-[#650007] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans transition-colors duration-300"
                  aria-describedby="hero-title"
                >
                  Получить консультацию
                </a>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="w-full lg:w-1/2 relative">
            <figure className="absolute bottom-3 sm:bottom-10 right-6 lg:-right-12 p-6 rounded-2xl text-sm font-sans w-[270px] text-[#3470bf] bg-[#2064bc]/10 ring-1 ring-inset ring-[#2064bc]/20 backdrop-blur-md shadow-[inset_-0.75px_-0.5px_rgba(255,255,255,0.1),inset_0.75px_0.5px_rgba(255,255,255,0.025),3px_2px_10px_rgba(0,0,0,0.25),inset_0px_0px_10px_5px_rgba(255,255,255,0.025),inset_0px_0px_40px_5px_rgba(255,255,255,0.025)] font-regular">
              <figcaption className="text-white/80 uppercase font-semibold">
                Игорь Слабых
              </figcaption>
              <p>
                Юрист, автор телеграм-канала USLegalNews, эксперт в правовой и
                политической системе США
              </p>
            </figure>

            <Image
              className="md:rounded-2xl"
              src="/img/igor.webp"
              alt="Игорь Слабых — юрист, консультант по праву и бизнесу в США"
              width={600}
              height={800}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
