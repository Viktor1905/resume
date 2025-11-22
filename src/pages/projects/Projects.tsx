import { DetailInfo } from "./DetailInfo.tsx";

export function Projects() {
  return (
    <section className="grid grid-cols-4 p-2 gap-4 ">
      <div>
        <h2>Проекты</h2>
        <ul>
          <li>REST CLIENT</li>
          <li>ZOO SHOP</li>
          <li>API QUERIES</li>
          <li>Game: NONOGRAMS</li>
          <li>Game: CHECKERS</li>
        </ul>
      </div>
      <div className="col-span-3 grid-cols-subgrid">
        <h2>Информация о проекте</h2>
        <DetailInfo />
      </div>
    </section>
  );
}
