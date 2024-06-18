function Resume() {
  // JSX for the Resume component
  return (
    <section className="my-5">
      <div className="my-2">
        <p>
          {/* TODO: Add actual resume as downloadable file once complete */}
          Download my{" "}
          <a href="https://www.linkedin.com/in/aster-oliva/">resume</a>
        </p>
        <h3>Front-end Proficiencies</h3>
        <ul className="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Bootstrap, Bulma</li>
          <li>Responsive UIs</li>
          <li>SVG asset design</li>
        </ul>
        <h3>Back-end Proficiencies</h3>
        <ul className="skills">
          <li>REST APIs</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>GraphQL, Apollo</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;
