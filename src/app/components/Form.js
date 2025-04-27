export default function Form() {
  return (
    <form
      action="#"
      method="POST"
      className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 "
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-light  text-[#5395ff]"
            >
              Имя
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white outline  -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:-outline-offset-2 focus:outline-[#3470bf]"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-light  text-[#5395ff]"
            >
              Фамилия
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white outline -outline-offset-1 outline-white/10 placeholder:text-gray-500  focus:-outline-offset-2 focus:outline focus:outline-[#3470bf]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-light  text-[#5395ff]"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white outline -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:-outline-offset-2 focus:outline-[#3470bf]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-light  text-[#5395ff]"
            >
              Номер телефона
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white outline 1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:-outline-offset-2 focus:outline-[#3470bf]"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-light  text-[#5395ff]"
            >
              Сообщение
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white outline  -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:-outline-offset-2 focus:outline-[#3470bf]"
                defaultValue={""}
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            className="rounded-md bg-[#aa0f24] px-8 py-2.5 text-sm sm:text-lg/8 text-white shadow-sm hover:bg-[#650007] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-sans transition-colors duration-300 w-full"
          >
            Отправить
          </button>
        </div>
        <p className="mt-4 block text-sm/6 font-light text-[#5395ff]">
          Отправляя эту форму, я соглашаюсь с{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/60 hover:text-[#aa0f24] focus-visible:text-[#aa0f24] transition-colors duration-300 "
            aria-label="Открыть политику конфиденциальности в новой вкладке"
          >
            политикой&nbsp;конфиденциальности
          </a>
          .
        </p>
      </div>
    </form>
  );
}
