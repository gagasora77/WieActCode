import { ReactComponent as Bar } from "../Assets/SVG/Bar.svg";
function NavBar() {
  return (
    <nav className="navbar">
      <Bar className="bar"></Bar>
      <img src={require("../Assets/WIE ACT 3.png")} className="logo" />
      <ul className="navbar-ul">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/AboutUs">About Us</a>
        </li>
        <li>
          <a href="/Program">Program</a>
        </li>
        <li>
          <a href="/Speakers">Speakers</a>
        </li>
        <li>
          <a href="/Partners">Collaborators</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
