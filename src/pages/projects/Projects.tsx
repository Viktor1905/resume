import { DetailInfo } from "./DetailInfo.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store.ts";
import { setCurrentProject } from "../../store/projectsSlice.ts";

export function Projects() {
  const projects = useSelector((state: RootState) => state.projects.list);
  const current = useSelector((state: RootState) => state.projects.currentId);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="grid grid-cols-4 p-2 gap-4 ">
      <div>
        <h2>Проекты</h2>
        <ul>
          {projects.map((item) => (
            <li
              key={item.id}
              className={item.id === current ? "font-bold cursor-pointer" : "cursor-pointer"}
              onClick={() => dispatch(setCurrentProject(item.id))}
            >
              {item.id.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3 grid-cols-subgrid">
        <h2>Информация о проекте</h2>
        <DetailInfo />
      </div>
    </section>
  );
}
