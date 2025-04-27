export default function Footer() {
  return (
    <footer className="bg-[#040e17] py-5 overflow-hidden" role="contentinfo">
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6 max-w-7xl lg:px-8 px-6 mx-auto">
        <p className="text-center text-sm/6 text-gray-400">
          &copy; 2025 Igor Slabykh, All rights reserved.
        </p>
        <a
          href="/privacy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-white/60 hover:text-[#aa0f24] focus-visible:text-[#aa0f24] transition-colors duration-300"
          aria-label="Открыть политику конфиденциальности в новой вкладке"
        >
          Политика&nbsp;Kонфиденциальности
        </a>
      </div>
    </footer>
  );
}
