import { NavLink } from "react-router-dom";
import cs from "classnames";

import "./Header.css";

export const Header = () => {
  return (
    <header>
      <a href="https://cohere.ai" target="_blank">
        <img
          src="/logo-ukraine.svg"
          alt="Cohere logo"
          width={112}
          height={32}
        />
      </a>
      <nav>
        <ul className="menu">
          <li>
            <NavLink
              to="/settings"
              title="Settings"
              className={({ isActive }) => cs({ "link-is-active": isActive })}
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/samples"
              title="Samples"
              className={({ isActive }) => cs({ "link-is-active": isActive })}
            >
              Samples
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
