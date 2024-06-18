import coverImage from "../../assets/cover/loop.png";

function Header(props) {
  // JSX for Header component
  return (
    <header className="space-between px-1">
      <img src={coverImage} alt="background image"></img>
      {props.children}
    </header>
  );
}

export default Header;
