function Footer() {
  // Array of icon objects for socials
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/Aoliva96",
    },
    {
      name: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/aster-oliva/",
    },
    {
      name: "fab fa-stack-overflow",
      link: "https://stackoverflow.com/users/23574107/aster-oliva",
    },
  ];

  // JSX for Footer component
  return (
    <footer className="flex-row px-1 pb-2">
      <div style={{ marginBottom: "1rem" }}>
        {icons.map((icon) => (
          <a
            href={icon.link}
            key={icon.name}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className={icon.name}></i>
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
