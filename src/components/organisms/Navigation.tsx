import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FiSearch, FiEdit2, FiFolder, FiUser, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
type Props = {
  toggleDarkModeCB: () => void;
};
const Navigation = ({ toggleDarkModeCB }: Props) => {
  const Links = [
    { name: "Make a review", path: "/write", component: <FiEdit2 /> },
    { name: "Your reviews", path: "/reviews", component: <FiFolder /> },
    { name: "Your account", path: "/account", component: <FiUser /> },
  ];
  const className =
    "flex items-center text-blue-700 hover:bg-blue-100 p-2 items-center rounded-xl dark:text-white dark:hover:bg-zinc-600 ";
  const activeClassName =
    " flex bg-blue-700 text-white p-2 items-center rounded-xl dark:bg-white dark:text-black ";
  return (
    <nav className="bg-slate-100 dark:bg-zinc-800 p-1 h-4/5 transition-all flex flex-col justify-between">
      <ul className="w-10/12 mx-auto border-0 ">
        <li className="mb-20">
          <Link
            className="bg-black text-white p-3 w-full rounded-full flex items-center"
            to="/"
          >
            <span className="mr-2">
              <FiSearch />
            </span>
            Search a site
          </Link>
        </li>
        {Links.map((link) => (
          <li className="my-3">
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                isActive ? activeClassName : className
              }
            >
              <span className="mr-2">{link.component}</span>
              <span>{link.name}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="flex mx-auto justify-center">
        <Button startIcon={<FiSun />} onClick={() => toggleDarkModeCB()}>
          Turn Off Lights
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
