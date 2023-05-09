import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const handleMouseOver = (event) => {
    event.target.style.color = "#8BC34A";
  };

  const handleMouseOut = (event) => {
    event.target.style.color = "black";
  };

  const handleMouseClick = (event) => {
      event.target.style.color = "#FF0000";
  };

  return (
    <>
      <nav className="navigation-bar">
        <ul>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseClick}>
            <Link to="/">Home</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseClick}>
            <Link to="/AboutUs">About Us</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseClick}>
            <Link to="/RecipeIndex">Recipe Index</Link>
          </li>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} onClick={handleMouseClick}>
            <Link to="/ContactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;