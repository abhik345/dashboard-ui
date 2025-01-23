import { MdHome } from "react-icons/md";
import MainDashboard from "./view/admin/default/index";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: MdHome, 
    component: MainDashboard, 
  },
  // {
  //   name: "Main Dashboard",
  //   layout: "/admin",
  //   path: "default",
  //   icon: MdHome,
  //   component: MainDashboard,
  // }
];

export default routes;
