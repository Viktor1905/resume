import { useSelector } from "react-redux";
import type { RootState } from "../../store/store.ts";
import { Carousel } from "./Carousel.tsx";

export function DetailInfo() {
  const project = useSelector((state: RootState) =>
    state.projects.list.find((p) => p.id === state.projects.currentId)
  );
  if (!project) return null;
  return (
    <>
      <h2 className="text-2xl font-extrabold font-special">{project.name}</h2>
      <Carousel media={project.media} />
      <div className="flex flex-col gap-5 mb-5">
        <div>
          <span className="font-extrabold">Описание проекта:</span> {project.addInfo}
        </div>
        <div>
          <span className="font-extrabold ">Используемые технологии:</span> {project.stack}
        </div>
        <div>
          <span className="font-extrabold ">Роль в проекте:</span> {project.role}
        </div>
        <div>
          <span className="font-extrabold ">Описание проекта:</span> {project.addInfo}
        </div>
      </div>
      <div className="flex justify-between mb-5">
        <a href={project.url} target="_blank" rel="noreferrer">
          <button className="px-5 py-3 !border-[#ffffff42] rounded-xl bg-header-gradient animate-gradient-breathe-fast hover:opacity-95 transition font-semibold">
            {" "}
            Открыть проект полностью
          </button>
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <span className="px-5 py-3 rounded-xl border border-indigo-300/40 hover:bg-white/5 transition font-semibold">
            {" "}
            Открыть github проекта
          </span>
        </a>
      </div>
    </>
  );
}
