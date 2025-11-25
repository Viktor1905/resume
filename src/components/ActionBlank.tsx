import { Link } from "react-router-dom";
import { useState } from "react";
import { ContactsPopOver } from "./ContactsPopOver.tsx";

export function ActionBlank({ page, link }: { page: string; link: string }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <section
      id="contact-cta"
      className="relative rounded-xl border border-gray-100/20 p-6 flex flex-col md:flex-row items-center justify-between gap-4 col-span-4 bg-white/3"
    >
      <div>
        <h4 className="text-lg font-semibold">Ищете ответственного Junior-разработчика?</h4>
        <p className="text-sm ">
          Я быстро расту и думаю стратегически — готов влиять на продукт и учиться в команде.
        </p>
      </div>
      <div className="flex gap-3">
        <div
          className="px-4 relative cursor-pointer py-2 rounded-md text-center flex items-center bg-header-gradient animate-gradient-breathe-fast hover:opacity-95"
          onClick={(e) => {
            e.stopPropagation();
            setShowModal(!showModal);
          }}
        >
          Связаться
          {showModal && <ContactsPopOver closeModal={() => setShowModal(false)} isBottom={false} />}
        </div>
        <Link to={link} className="px-4 py-2 rounded-md border border-indigo-400">
          {page}
        </Link>
      </div>
    </section>
  );
}
