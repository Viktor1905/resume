import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ActionBlank } from "../../components/ActionBlank.tsx";
import { ContactsPopOver } from "../../components/ContactsPopOver.tsx";
import { useEffect, useState } from "react";

export function Home() {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className={" w-full p-7"}>
      <section className="text-center flex flex-col justify-center items-center cursor-default">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-special text-4xl md:text-6xl font-extrabold"
        >
          Виктор Вонярха
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-lg md:text-2xl font-medium text-indigo-100"
        >
          Junior React Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl text-sm md:text-lg leading-relaxed"
        >
          Расту быстро — думаю на несколько шагов вперёд. Создаю продуманные интерфейсы, сочетаю
          внимание к деталям и стратегическое мышление, чтобы проекты работали и приносили
          результат.
        </motion.p>
        <div className="flex gap-3 mt-6 ">
          <Link
            to="/projects"
            className=" rounded-xl bg-header-gradient animate-gradient-breathe-fast transition font-semibold relative"
          >
            <span className="relative animate-blink block px-5 py-3 ">Мои проекты</span>
          </Link>
          <div
            className="px-5 relative py-3 rounded-xl border border-indigo-300/40 hover:bg-white/5 transition font-semibold cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Связаться
            {showModal && (
              <ContactsPopOver closeModal={() => setShowModal(false)} isBottom={true} />
            )}
          </div>
          <a
            href="/Viktor_Vonyarkha_Junior_React.pdf"
            download="Резюме_Виктор_Вонярха.pdf"
            className="px-4 animate-blink py-3 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium"
          >
            Скачать резюме
          </a>
        </div>

        <div className="mt-6 text-xs text-indigo-100/80">
          Ростов-на-Дону · 28 лет · Английский B1
        </div>
      </section>
      <section id="about" className="grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-extrabold mb-2 ">Обо мне</h3>
          <p className="leading-relaxed">
            После нескольких лет в рекламе и управлении остановил свой выбор на фронтенд-разработке.
            <br />
            Начал изучение JS самостоятельно, используя такие источники как: learn.javascript.ru,
            документацию по React, JS, HTML, CSS.
            <br />
            Прошел ряд курсов, в т.ч. курсы RS School (JS, Front-end, React), собрал несколько
            pet-проектов и на одном из pet-проектов выступал в качестве тимлида: работал над
            архитектурой каталога интернет-магазина, организовывал работу.
            <br />
            Люблю системный подход и аналитическое мышление — это помогает писать понятный и
            поддерживаемый код.
          </p>
          <div className=" my-4">
            <h4 className="font-bold text-lg">Личные качества:</h4>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              <li>• Аналитическое мышление</li>
              <li>• Ответственность</li>
              <li>• Инициативность</li>
              <li>• Коммуникабельность</li>
              <li>• Обучаемость </li>
              <li>• Организационные способности</li>
            </ul>
          </div>
        </div>

        <aside className="border border-gray-100/40 rounded-xl p-4 bg-white/5">
          <h4 className="font-semibold mb-2">Контакты</h4>
          <div className="text-sm ">
            <div>
              📧{" "}
              <a href="mailto:webdevvva@gmail.com" className="underline">
                webdevvva@gmail.com
              </a>
            </div>
            <div>
              💬{" "}
              <a
                href="https://t.me/KapJl161"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Telegram
              </a>
            </div>
            <div>
              🐙{" "}
              <a
                href="https://github.com/Viktor1905"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-3 text-xs ">Открыт к полной занятости, удалённо</div>
        </aside>
      </section>

      <section className="my-4">
        <h3 className="text-2xl font-extrabold mb-4">Ключевые навыки</h3>

        <div className="flex flex-wrap gap-3">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Redux Toolkit",
            "REST API",
            "Tailwind CSS",
            "Vitest",
            "Zod",
            "Git",
          ].map((s) => (
            <span
              key={s}
              className="px-3 py-1 rounded-full bg-gray-100/10 text-sm  border border-gray-100/10"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-4 text-xs text-indigo-100/80">
          *Подробно — на странице{" "}
          <Link to="/skills" className="underline">
            Навыки
          </Link>
        </div>
      </section>
      <section id="experience" className="grid md:grid-cols-2 gap-6 my-4">
        <div>
          <h4 className="font-semibold mb-2">Опыт (управление, аналитика, реклама)</h4>
          <ol className="list-decimal pl-5 text-sm  space-y-2">
            <li>
              <strong>Руководитель отдела рекламы</strong> — ИП Радко (06.2021 – н.в.) — организация
              отдела (5 чел)
            </li>
            <li>
              <strong>Генеральный директор</strong> — ООО «БронВеб» (11.2023 – 11.2024) — запуск ПВЗ
              Ozоn
            </li>
            <li>
              <strong>Таргетолог / Контекстолог / Фриланс</strong> — 2020–н.в.
            </li>
            <li>
              <strong>Юрист / Помощник юриста</strong> — 2019–2021
            </li>
          </ol>
        </div>

        <div>
          <h4 className="font-semibold mb-2">Образование и курсы</h4>
          <ul className="text-sm space-y-2">
            <li>Белорусский Государственный Университет — Юридический факультет (Высшее, 2020)</li>
            <li>RS School — JS/FE Pre-School (07.2024 – 11.2024)</li>
            <li>RS School — JavaScript/Front-end (11.2024 – 07.2025)</li>
            <li>RS School — React (07.2025 – 10.2025)</li>
          </ul>
        </div>
      </section>

      <ActionBlank page={"Мои работы"} link={"/projects"} />
    </div>
  );
}
