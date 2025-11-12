import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <nav>
        <Link to={""}>Main</Link>
        <Link to={"projects"}>Projects</Link>
        <Link to={"skills"}>Skills</Link>
        <Link to={"contacts"}>Contacts</Link>
      </nav>
    </header>
  );
}
