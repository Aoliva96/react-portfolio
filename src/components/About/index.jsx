function About() {
  // JSX for About component
  return (
    <section>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
            marginBottom: "5px",
            minHeight: "82px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
            backgroundColor: "var(--alpha-dark)",
            borderRadius: "48px",
            alignItems: "center",
          }}
        >
          <h2>Welcome to my portfolio!</h2>
          <p>
            <a
              href="https://github.com/Aoliva96/react-portfolio"
              target="_blank"
            >
              ( Click here to view the GitHub repository )
            </a>
          </p>
        </div>
        <hr style={{ marginTop: "2.5rem" }} />
        <div>
          <div
            className="profile-img my-5"
            style={{
              display: "flex",
              backgroundColor: "var(--alpha-dark)",
              borderRadius: "48px",
              alignItems: "center",
            }}
          >
            <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
            <div>
              <h3 style={{ marginLeft: "2rem" }}>About Me</h3>
            </div>
          </div>
          <hr />
          <div
            style={{
              backgroundColor: "var(--alpha-dark)",
              borderRadius: "48px",
              marginTop: "2.5rem",
              paddingLeft: "5rem",
              paddingRight: "5rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            <p>
              I am an aspiring web developer that first got into coding due to
              it being well-suited to my interests as an avid puzzle-solver, and
              being someone that enjoys the challenge of tackling complex
              problems. I have come to find that coding is a great way to
              express my creativity and to build things that can be used by
              others.
            </p>
            <p>
              I am a quick learner and I am always looking to challenge myself
              with a new language or technology. As of early June 2024, I have
              completed a full-stack developer course provided by the UC
              Berkeley Extension bootcamp program. Throughout that course I have
              developed several highly-varied projects, both independently and
              in groups, that have helped me to develop my skills in both
              front-end and back-end development. Now that it is complete I am
              excited to continue learning new skills, and plan to take part in
              several continuation courses for technologies such as Python,
              Amazon Web Services, C sharp, and Java.
            </p>
            <p>
              I am currently working on both personal and freelance projects, to
              enhance my skills and knowledge with the goal of changing careers
              to something more tech-focused. I have an overall preference for
              front-end/client-side development, but I'm also quite happy in a
              flexible role. My current proficiencies include UI design,
              HTML/CSS, JavaScript, React/JSX, MySQL and MongoDB, but I'm always
              looking to learn something new!
            </p>
            <p>
              I you would like to get in contact with me, feel free to either
              visit the contact page and fill out the form, or to reach out to
              me at any of the social media links provided in the footer of this
              page. I look forward to hearing from you!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
