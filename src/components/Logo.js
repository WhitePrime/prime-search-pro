import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo() {
  return (
    <section className="logo">
      <h1>
        <Link to="/">
		  <span className="red">P</span>
          <span className="yellow">r</span>
          <span className="blue">i</span>
          <span className="green">m</span>
          <span className="red">e</span>
          <span className="blue">S</span>
          <span className="red">e</span>
          <span className="yellow">a</span>
          <span className="green">r</span>
          <span className="red">c</span>
          <span className="yellow">h</span>
          <span className="blue">P</span>
          <span className="green">r</span>
          <span className="red">o</span>
        </Link>
      </h1>
    </section>
  );
}
