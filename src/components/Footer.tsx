import GitHubIcon from "../icons/GitHubIcon.tsx";
import TelegramIcon from "../icons/TelegramIcon.tsx";
import EmailIcon from "../icons/EmailIcon.tsx";

export function Footer() {
  return (
    <footer className="flex justify-between w-full px-4 py-4 bg-header-gradient animate-gradient-breathe rounded-t-xl max-w-[1920px]">
      <div className="cursor-default">
        <span>© 2025</span>
      </div>
      <a
        href={"public/Viktor_Vonyarkha_Junior_React.pdf"}
        download={"Резюме_Виктор_Вонярха.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        Скачать PDF-резюме
      </a>
      <div className="flex gap-2">
        <a href={"https://github.com/Viktor1905/"} target="_blank" rel="noopener noreferrer">
          <GitHubIcon className={"hover:#535bf2"} />
        </a>
        <a href={"https://t.me/KapJl161"} target="_blank" rel="noopener noreferrer">
          <TelegramIcon className={"hover:#535bf2"} />
        </a>
        <a href="mailto:webdevvva@gmail.com" target="_blank" rel="noopener noreferrer">
          <EmailIcon className={"hover:#535bf2"} />
        </a>
      </div>
    </footer>
  );
}
