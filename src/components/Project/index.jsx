import { noHyphensAllCaps } from "../../utils/helpers";
import * as projectImages from "../../assets/index.js";

function Project({ project }) {
  // Define destructured project data
  const { name, repo, link, description } = project;

  // Function to convert name string to camel case
  function toCamelCase(name) {
    let words = name.replace(/[-\s]/g, " ").toLowerCase().split(" ");
    for (let i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    return words.join("");
  }

  // Store function output
  const pathName = toCamelCase(name);

  // JSX for the Project component
  return (
    <div className="project" key={name}>
      <img
        src={projectImages[pathName]}
        alt={noHyphensAllCaps(name)}
        className="project-bg"
      />
      <div className="project-text">
        <h3>
          <a href={link}>{noHyphensAllCaps(name)}</a>
          &nbsp;
          <a href={repo}>
            <i className="fab fa-github" />
          </a>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;
