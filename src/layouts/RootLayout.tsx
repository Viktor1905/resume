import { Header } from "../components/Header.tsx";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "../components/Footer.tsx";
import { useEffect } from "react";

const titles: Record<string, string> = {
  "/": "Виктор Вонярха - резюме",
  "/projects": "Проекты",
  "/contacts": "Контакты",
  "/skills": "Навыки",
};

export function RootLayout() {
  const location = useLocation();
  useEffect(() => {
    document.title = titles[location?.pathname] ?? "Резюме";
  }, [location]);

  return (
    <>
      <Header />
      <main className={"min-h-[100vh] bg-main-img"}>
        <div className={"min-h-[100vh] bg-main"}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
