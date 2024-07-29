import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-bg-color mx-auto text-black rubik-font rubik-400 font-semibold">
      <div className="flex items-center justify-between p-4 md:mx-10">
        <div className="flex items-center">
          <img
            className="w-36 md:w-30"
            src="/public/logos/jaxun-dog-care.png"
            alt="logo"
          />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex items-center gap-4 ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row text-xs md:text-sm lg:text-base mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
            <li>
              <Link className="nav-link" to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about-jaxun" onClick={toggleMenu}>
                About Jaxun
              </Link>
            </li>
            <li>
              <Link
                className="nav-link"
                to="/dog-walking-services"
                onClick={toggleMenu}
              >
                Services & Pricing
              </Link>
            </li>
            <li>
              <a className="nav-link" href="/contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
