import { Header } from "../components/Header.tsx";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer.tsx";

export function RootLayout() {
  return (
    <>
      <Header />
      <main className={"min-h-[100vh] px-7"}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
