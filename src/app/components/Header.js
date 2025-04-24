// src/app/components/Header.js
export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-10">
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-10 flex justify-center lg:justify-end items-center py-7"
        aria-label="Главная навигация"
      >
        <ul className="flex sm:gap-6 flex-wrap gap-4">
          <li>
            <a
              href="#about"
              className="font-semibold text-sm text-[#5395ff] hover:text-[#aa0f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa0f24] transition-colors duration-300"
            >
              Обо мне
            </a>
          </li>
          <li>
            <a
              href="#what-i-do"
              className="font-semibold text-sm text-[#5395ff] hover:text-[#aa0f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa0f24] transition-colors duration-300"
            >
              Что делаю?
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="font-semibold text-sm text-[#5395ff] hover:text-[#aa0f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa0f24] transition-colors duration-300"
            >
              Услуги
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className="font-semibold text-sm text-[#5395ff] hover:text-[#aa0f24] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#aa0f24] transition-colors duration-300"
            >
              Контакты
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
