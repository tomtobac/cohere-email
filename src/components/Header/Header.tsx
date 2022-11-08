import { NavLink } from "react-router-dom";
import cs from "classnames";

export const Header = () => {
  return (
    <header className="mb-2 flex align-middle">
      <a href="https://cohere.ai" target="_blank">
        <img
          src="/logo-ukraine.svg"
          alt="Cohere logo"
          width={112}
          height={32}
        />
      </a>
      <nav className="ml-auto">
        <ul className="flex gap-6">
          <li>
            <NavLink
              to="/settings"
              title="Settings"
              className={({ isActive }) =>
                cs({
                  "underline decoration-indigo-500 decoration-wavy": isActive,
                })
              }
            >
              Settings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/samples"
              title="Samples"
              className={({ isActive }) =>
                cs({
                  "underline decoration-indigo-500 decoration-wavy": isActive,
                })
              }
            >
              Samples
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
