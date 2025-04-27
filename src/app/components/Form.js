"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";

const cleanPhoneNumber = (input) => {
  return input.replace(/[^\d+]/g, "");
};

const validatePhoneNumber = (cleanedNumber) => {
  return /^\+?\d{7,15}$/.test(cleanedNumber);
};

const validateField = (name, value) => {
  if (!value.trim()) {
    return "Поле обязательно для заполнения";
  }

  if (name === "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Введите корректный email адрес";
    }
  }

  if (name === "phone-number") {
    const cleanedPhone = cleanPhoneNumber(value);
    if (!validatePhoneNumber(cleanedPhone)) {
      return "Введите корректный номер телефона";
    }
  }

  return null;
};

export default function Form() {
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const fields = {
      firstName: formData.get("first-name") || "",
      lastName: formData.get("last-name") || "",
      email: formData.get("email") || "",
      phoneNumber: formData.get("phone-number") || "",
      message: formData.get("message") || "",
    };

    const newErrors = {};
    for (const [name, value] of Object.entries(fields)) {
      const error = validateField(name, value);
      if (error) {
        newErrors[name] = error;
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Пожалуйста, заполните все обязательные поля.");
      return;
    }

    setErrors({});
    setIsLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),
      });

      if (res.ok) {
        toast.success("Ваше сообщение успешно отправлено!");
        e.target.reset();
      } else {
        toast.error("Произошла ошибка при отправке. Попробуйте ещё раз.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Ошибка сети. Пожалуйста, попробуйте позже.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="px-6 pb-24  pt-0 lg:pt-20 sm:pb-32 lg:px-8"
    >
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Имя */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-light text-[#5395ff]"
            >
              Имя
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-[#3470bf]"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
          </div>

          {/* Фамилия */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-light text-[#5395ff]"
            >
              Фамилия
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-[#3470bf]"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-light text-[#5395ff]"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-[#3470bf]"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Телефон */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-light text-[#5395ff]"
            >
              Номер телефона
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-[#3470bf]"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>
          </div>

          {/* Сообщение */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-light text-[#5395ff]"
            >
              Сообщение
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full rounded-md bg-[#2064bc]/10 px-3.5 py-2 text-base text-white placeholder:text-gray-500 focus:outline focus:outline-[#3470bf]"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* Кнопка отправки */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={isLoading}
            className={`rounded-md px-8 py-2.5 text-sm sm:text-lg/8 font-sans transition-colors duration-300 w-full shadow-sm ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#aa0f24] hover:bg-[#650007]"
            } text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="h-5 w-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                Отправляем...
              </div>
            ) : (
              "Отправить"
            )}
          </button>
        </div>

        {/* Политика */}
        <p className=" mt-4 block text-sm/6 font-light text-[#5395ff]">
          Отправляя эту форму, я соглашаюсь с{" "}
          <a
            href="/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white/60 hover:text-[#aa0f24] focus-visible:text-[#aa0f24] transition-colors duration-300"
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
