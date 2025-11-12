import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="flex sticky-top justify-between w-full px-4 py-4 bg-header-gradient animate-gradient-breathe">
      <h2 className="font-special text-[25px] text-white leading-none font-extrabold cursor-default">
        Виктор Вонярха
      </h2>
      <nav className="flex gap-2">
        <Link to={""}>Главная</Link>
        <Link to={"projects"}>Проекты</Link>
        <Link to={"skills"}>Навыки</Link>
        <Link to={"contacts"}>Контакты</Link>
      </nav>
    </header>
  );
}
