function About() {
  // JSX for About component
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
          <i className="fas fa-user-circle" style={{ fontSize: "96px" }}></i>
        </div>
        <div>
          <h4>Hi there, welcome to my portfolio!</h4>
          <p>
            <a href="https://github.com/Aoliva96/react-portfolio">
              Click to view my GitHub repository for this project.
            </a>
          </p>
        </div>
        <hr />
        <div>
          <h4>About Me</h4>
          <p>
            I am a junior developer that first got into coding due to it being
            well-suited to my interests as an avid puzzle-solver, and being
            someone that enjoys the challenge of tackling complex problems. I
            have come to find that coding is a great way to express my
            creativity and to build things that can be used by others.
          </p>
          <p>
            I am a quick learner and I am always looking to challenge myself
            with a new language or technology. As of early June 2024, I have
            completed a full-stack developer course provided by the UC Berkeley
            Extension bootcamp program. Throughout that course I have developed
            several highly-varied projects, both independently and in groups,
            that have helped me to develop my skills in both front-end and
            back-end development. Now that it is complete I am excited to
            continue learning new skills, and plan to take part in several
            continuation courses for technologies such as Python, Amazon Web
            Services, C sharp, and Java.
          </p>
          <p>
            I am currently working on both personal and freelance projects, to
            enhance my skills and knowledge with the goal of changing careers to
            something more tech-focused. I have an overall preference for
            front-end/client-side development, but I'm also quite happy in a
            flexible role. My current proficiencies include UI design, HTML/CSS,
            JavaScript, React/JSX, MySQL and MongoDB, but I'm always looking to
            learn something new!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
