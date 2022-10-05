import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { FiSearch, FiEdit2, FiFolder, FiUser, FiSun } from "react-icons/fi";
type Props = {
  toggleDarkModeCB: () => void;
};
const Navigation = ({ toggleDarkModeCB }: Props) => {
  const Links = [
    { name: "Search", path: "/", component: <FiSearch /> },
    { name: "Make a review", path: "/write", component: <FiEdit2 /> },
    { name: "Your reviews", path: "/getreviews", component: <FiFolder /> },
    { name: "Your account", path: "/account", component: <FiUser /> },
  ];
  return (
    <nav className="bg-slate-100 dark:bg-zinc-800 p-1 h-4/5  flex flex-col justify-between">
      <ul className="w-10/12 mx-auto border-0 ">
        {Links.map((link) => (
          <li className="my-3">
            <NavLink to={link.path}>
              <Button fullWidth={true} startIcon={link.component}>
                {link.name}
              </Button>
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
