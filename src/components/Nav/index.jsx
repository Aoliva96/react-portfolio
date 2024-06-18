import { Link } from "react-router-dom";
import { capitalizeFirst } from "../../utils/helpers";

function Nav({ currentPage }) {
  // Define pages for nav
  const pages = ["portfolio", "contact", "resume"];

  // JSX for Nav component
  return (
    <nav>
      <ul>
        <li
          className={`mx-5 ${currentPage === "/" && "navActive"}`}
          key="about"
        >
          <Link to="/">About</Link>
        </li>
        {pages.map((Page) => (
          <li
            className={`mx-5 ${currentPage === `/${Page}` && "navActive"}`}
            key={Page}
          >
            <Link to={`/${Page}`}>{capitalizeFirst(Page)}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
