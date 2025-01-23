import { MdHome } from "react-icons/md";
import MainDashboard from "./view/admin/default/index";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: MdHome, // ✅ Pass the component reference
    component: MainDashboard, // ✅ Pass the component reference
  },
];

export default routes;
