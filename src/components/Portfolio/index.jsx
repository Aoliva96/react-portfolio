import { useState } from "react";
import Project from "../Project";

function Portfolio() {
  // Define array of project data objects
  const [projects] = useState([
    {
      // Group project
      name: "Recall Rocket",
      description: "React/JavaScript/GraphQL/MongoDB",
      link: "https://recall-rocket.onrender.com/",
      repo: "https://github.com/Aoliva96/recall-rocket",
    },
    {
      // Group project
      name: "ANA Market",
      description: "React/JavaScript/GraphQL/MongoDB",
      link: "https://ana-market-eae58deca7b8.herokuapp.com/",
      repo: "https://github.com/Aoliva96/ana-market",
    },
    {
      // Group project
      name: "Outfit Organizer",
      description: "HTML/CSS/Bulma/JavaScript",
      link: "https://sabrinasaunders.github.io/outfit-organizer/",
      repo: "https://github.com/Aoliva96/outfit-organizer",
    },
    {
      name: "Tech Blog",
      description: "JavaScript/Handlebars/CSS/MongoDB",
      link: "https://bootcamp-project-tech-blog-6939c1dede08.herokuapp.com/",
      repo: "https://github.com/Aoliva96/tech-blog",
    },
    {
      name: "Code Quiz",
      description: "HTML/CSS/JavaScript",
      link: "https://Aoliva96.github.io/code-quiz/",
      repo: "https://github.com/Aoliva96/code-quiz",
    },
    {
      name: "Weather Dashboard",
      description: "HTML/CSS/JavaScript",
      link: "https://Aoliva96.github.io/weather-dashboard/",
      repo: "https://github.com/Aoliva96/weather-dashboard",
    },
    {
      name: "Workday Scheduler",
      description: "HTML/CSS/JQuery",
      link: "http://youtube.com",
      repo: "https://github.com/Aoliva96/workday-scheduler",
    },
    {
      name: "Note Taker",
      description: "HTML/CSS/JavaScript/Express",
      link: "https://bootcamp-project-note-taker-0ee4c6227030.herokuapp.com/",
      repo: "https://github.com/Aoliva96/note-taker",
    },
    {
      name: "E-Commerce Backend",
      description: "JavaScript/MySQL/Express",
      link: "https://drive.google.com/file/d/1JGFLwuLY55Ke_t0Ek8nNC6UB1yW-UzGX/view?usp=sharing",
      repo: "https://github.com/Aoliva96/e-commerce-backend",
    },
    {
      name: "Social Media API",
      description: "JavaScript/Express/MongoDB/Mongoose",
      link: "https://drive.google.com/file/d/1785a6aV-FwBQsWAfhkgwrWAJN_EElPSU/view?usp=sharing",
      repo: "https://github.com/Aoliva96/social-api",
    },
  ]);

  // JSX for the Portfolio component
  return (
    <div className="my-5">
      <hr style={{ marginTop: "2.5rem" }} />
      <div
        style={{
          backgroundColor: "var(--alpha-dark)",
          borderRadius: "48px",
          marginTop: "2.5rem",
          padding: "1rem",
        }}
      >
        <div className="flex-row">
          <div>
            <p style={{ width: "85%", margin: "2rem auto" }}>
              See below for several of my favorite projects I've worked on so
              far! Clicking on the project's name will take you to its deployed
              live version, and clicking on the adjacent GitHub logo will take
              you to the repo.
            </p>
          </div>
          {projects.map((project, idx) => (
            <Project project={project} key={"project" + idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
