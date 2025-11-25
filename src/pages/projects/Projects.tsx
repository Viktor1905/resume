import { DetailInfo } from "./DetailInfo.tsx";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store.ts";
import { setCurrentProject } from "../../store/projectsSlice.ts";
import { ActionBlank } from "../../components/ActionBlank.tsx";

export function Projects() {
  const projects = useSelector((state: RootState) => state.projects.list);
  const current = useSelector((state: RootState) => state.projects.currentId);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <section className="grid grid-cols-4 p-2 gap-4 ">
      <div>
        <h2 className="self-center text-center mb-5 font-extrabold text-2xl">Проекты</h2>
        <ul className="flex flex-col gap-2">
          {projects.map((item) => (
            <li
              key={item.id}
              className={
                item.id === current
                  ? "font-bold w-fit active-project  bg-header-gradient animate-gradient-breathe-fast cursor-pointer"
                  : "cursor-pointer"
              }
              onClick={() => dispatch(setCurrentProject(item.id))}
            >
              {item.id.toUpperCase()}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-3 grid-cols-subgrid">
        <h2 className="self-center text-center mb-5 font-extrabold text-2xl">
          Информация о проекте
        </h2>
        <DetailInfo />
      </div>
      <ActionBlank page={"Обо мне"} link={"/"} />
    </section>
  );
}
