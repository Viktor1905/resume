import { skills } from "../data/skills.ts";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ActionBlank } from "../components/ActionBlank.tsx";

export function Skills() {
  const skillsData = skills;
  const [showDetails, setShowDetails] = useState("");
  const popupRef = useRef<HTMLUListElement | null>(null);
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (
        popupRef.current?.contains(target) ||
        (showDetails && buttonRefs.current[showDetails]?.contains(target))
      ) {
        return;
      }

      setShowDetails("");
    }

    if (showDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showDetails]);

  return (
    <section>
      <div className="grid gap-6 p-5">
        {Object.entries(skillsData).map(([group, items]) => (
          <div key={group} className="h-fit ">
            <h2 className="capitalize">{group}</h2>
            <ul className="space-y-4 grid grid-cols-2 gap-x-5">
              {items.map((item) => (
                <li key={item.name} className="bg-black/70 p-2 rounded relative">
                  <div className="flex justify-between items-center">
                    <h3>{item.name}</h3>
                    <div>{item.level}%</div>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 rounded overflow-hidden w-[100%]">
                    <motion.div
                      className="h-full rounded bg-header-gradient animate-gradient-breathe border-1"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
                  <div>
                    <button
                      ref={(el) => {
                        buttonRefs.current[item.name] = el;
                      }}
                      onClick={() =>
                        setShowDetails((prev) => (prev === item.name ? "" : item.name))
                      }
                      className="!bg-black/0 !p-1 my-1"
                    >
                      Подробнее
                    </button>
                    {showDetails === item.name && (
                      <ul ref={popupRef} className="absolute bg-black/95 px-1 left-0 rounded z-1">
                        {item.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <ActionBlank page={"Мои работы"} link={"/projects"} />
    </section>
  );
}
