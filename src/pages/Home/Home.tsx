import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className={" w-full"}>
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
            className="px-5 py-3 rounded-xl bg-header-gradient animate-gradient-breathe-fast hover:opacity-95 transition font-semibold"
          >
            Мои проекты
          </Link>
          <Link
            to="/contacts"
            className="px-5 py-3 rounded-xl border border-indigo-300/40 hover:bg-white/5 transition font-semibold"
          >
            Связаться
          </Link>
          <a
            href="/Viktor_Vonyarkha_Junior_React.pdf"
            download="Резюме_Виктор_Вонярха.pdf"
            className="px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 transition font-medium"
          >
            Скачать резюме
          </a>
        </div>

        <div className="mt-6 text-xs text-indigo-100/80">
          Ростов-на-Дону · 28 лет · Английский B1
        </div>
      </section>
    </div>
  );
}
