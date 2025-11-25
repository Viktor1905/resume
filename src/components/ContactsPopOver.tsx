import { useEffect, useRef } from "react";

export function ContactsPopOver({
  closeModal,
  isBottom,
}: {
  closeModal: () => void;
  isBottom: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleCloseModal(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (ref.current && !ref.current.contains(target)) {
        closeModal();
      }
    }
    document.addEventListener("mousedown", handleCloseModal);
    return () => {
      document.removeEventListener("mousedown", handleCloseModal);
    };
  }, [closeModal]);
  return (
    <div
      className={`absolute ${isBottom ? `top-[100%]` : `bottom-[100%]`} left-[-50%] z-3 rounded-xl border border-gray-100/40 p-4 bg-black w-fit`}
      ref={ref}
    >
      <h4 className="font-semibold mb-2">Контакты</h4>
      <div className="text-sm flex items-start flex-col">
        <a
          href="mailto:webdevvva@gmail.com"
          className="underline whitespace-nowrap block"
          onClick={closeModal}
        >
          📧 webdevvva@gmail.com
        </a>
        <a
          href="https://t.me/KapJl161"
          target="_blank"
          rel="noreferrer"
          className="underline whitespace-nowrap block"
          onClick={closeModal}
        >
          💬 Telegram
        </a>
        <a
          href="https://github.com/Viktor1905"
          target="_blank"
          rel="noreferrer"
          className="underline block"
          onClick={closeModal}
        >
          🐙GitHub
        </a>
      </div>
      <div className="mt-3 text-xs ">Открыт к полной занятости, удалённо</div>
    </div>
  );
}
