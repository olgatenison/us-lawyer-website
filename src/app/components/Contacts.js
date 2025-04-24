import Image from "next/image";

export default function Contacts() {
  return (
    <section
      className="relative isolate overflow-hidden px-6 lg:px-8"
      id="contacts"
    >
      {/* background SVG */}
      <svg
        className="absolute inset-0 -z-10 size-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="pattern"
            width="200"
            height="200"
            x="50%"
            y="0"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="50%" y="0" className="overflow-visible fill-gray-800/20">
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z"
            strokeWidth="0"
          />
        </svg>
        <rect width="100%" height="100%" fill="url(#pattern)" strokeWidth="0" />
      </svg>

      {/* blur blob */}
      <div
        className="absolute inset-x-0 top-10 -z-10 flex justify-center overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          style={{
            clipPath: `polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)`,
          }}
        ></div>
      </div>

      <div className="mx-auto max-w-2xl text-center py-20">
        <div className="flex justify-center items-center gap-4 mb-5 flex-wrap">
          {[
            {
              href: "https://youtube.com/yourchannel",
              src: "/svg/youtube.svg",
              alt: "YouTube",
            },
            {
              href: "https://facebook.com/yourprofile",
              src: "/svg/facebook.svg",
              alt: "Facebook",
            },
            {
              href: "https://facebook.com/yourprofile",
              src: "/svg/linkedin.svg",
              alt: "LinkedIn",
            },
            {
              href: "https://t.me/yourtelegram",
              src: "/svg/telegram.svg",
              alt: "Telegram",
            },
            {
              href: "mailto:igor.slabykh@gmail.com",
              src: "/svg/message.svg",
              alt: "Email",
            },
          ].map(({ href, src, alt }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Перейти: ${alt}`}
              className="rounded-md bg-[#aa0f24] px-8 py-2.5 text-sm sm:text-lg/8 text-white shadow-sm hover:bg-[#650007] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans transition-colors duration-300"
            >
              <Image src={src} alt={alt} width={32} height={32} />
            </a>
          ))}
        </div>

        <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Свяжитесь со мной
        </h2>
        <p className="mt-10 text-xl/7 text-pretty font-semibold text-white/80">
          Открыт к деловым запросам, консультациям и информационному
          партнёрству. Напишите мне — и я постараюсь ответить в ближайшее время.
        </p>

        <div className="mt-10 mb-10">
          <a
            href="mailto:igor.slabykh@gmail.com"
            aria-describedby="contacts-description"
            className="rounded-md bg-[#aa0f24] px-8 py-2.5 text-sm sm:text-lg/8 text-white shadow-sm hover:bg-[#650007] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans transition-colors duration-300"
          >
            Написать на почту
          </a>
          <p id="contacts-description" className="sr-only">
            Свяжитесь со мной по email для консультаций и партнёрства
          </p>
        </div>
      </div>
    </section>
  );
}
