function Resume() {
  // JSX for the Resume component
  return (
    <div className="my-5">
      <hr style={{ marginTop: "2.5rem" }} />
      <div
        style={{
          backgroundColor: "var(--alpha-dark)",
          borderRadius: "48px",
          marginTop: "2.5rem",
          paddingLeft: "5rem",
          paddingRight: "5rem",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <section className="my-2">
          <div className="my-2">
            <h3>Resume File</h3>
            <p>
              {/* TODO: Add actual resume as downloadable file once complete */}
              <button>Download .pdf</button>
              <div id="resumeMessage" className="mt-2">
                <p>Apologies, my resume isn't quite ready yet.</p>
                <p>Please check again later!</p>
              </div>
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
      </div>
    </div>
  );
}

export default Resume;
