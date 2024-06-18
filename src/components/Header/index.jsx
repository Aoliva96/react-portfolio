import bannerImage from "../../assets/banner/loop.png";

function Header(props) {
  // JSX for Header component
  return (
    <header className="space-between px-1">
      <img src={bannerImage} alt="background image"></img>
      {props.children}
    </header>
  );
}

export default Header;
