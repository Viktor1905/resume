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
      <h2>{project.name}</h2>
      <Carousel media={project.media} />
      <div>Описание проекта: {project.addInfo}</div>
      <div>Используемые технологии: {project.stack}</div>
      <div>Роль в проекте: {project.role}</div>
      <div>Описание проекта: {project.addInfo}</div>
      <a href={project.url} target="_blank" rel="noreferrer">
        <button className="text-black"> Открыть проект полностью</button>
      </a>
      <a href={project.githubUrl} target="_blank" rel="noreferrer">
        <button className="text-black"> Открыть github проекта</button>
      </a>
    </>
  );
}
