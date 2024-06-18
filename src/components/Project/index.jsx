import { noHyphensAllCaps } from "../../utils/helpers";
import * as projects from "../../assets";

function Project({ project }) {
  // Define destructured project data
  const { name, repo, link, description } = project;

  // JSX for the Project component
  return (
    <div className="project" key={name}>
      <img
        src={projects[name]}
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
