import { Link, useLocation } from "react-router-dom";

export function Header() {
  const isIndex = useLocation().pathname === "/";
  return (
    <header
      className={`flex sticky top-0 w-full px-4 py-4 bg-header-gradient animate-gradient-breathe rounded-b-xl ${isIndex ? "justify-end" : "justify-between"}`}
    >
      {!isIndex && (
        <h2 className="font-special text-[25px] leading-none font-extrabold cursor-default">
          Виктор Вонярха
        </h2>
      )}
      <nav className="flex gap-2">
        <Link to={""}>Главная</Link>
        <Link to={"projects"}>Проекты</Link>
        <Link to={"skills"}>Навыки</Link>
        <Link to={"contacts"}>Контакты</Link>
      </nav>
    </header>
  );
}
