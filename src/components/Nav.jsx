import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav-bg-color mx-auto text-black rubik-font rubik-400 font-semibold">
      <div className="flex items-center justify-between mt-7 mr-10">
        <div className="flex flex-col items-center ml-10 mr-10">
          <img
            className="w-36 md:w-30"
            src="/public/images/jaxun.png"
            alt="logo"
          />
        </div>

        <div className="flex items-center gap-4 text-black text-xs md:text-sm lg:text-base">
          <ul className="flex space-x-4">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/services">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/enquiries">
                Enquiries
              </Link>
            </li>
            <li>
              <a className="nav-link" href="mailto:walkies@gmail.com">
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
