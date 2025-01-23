import { MdHome,MdOutlineShoppingCart } from "react-icons/md";
import MainDashboard from "./view/admin/default/index";
import DataList from "./view/admin/data-list";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "home",
    icon: MdHome, 
    component: MainDashboard, 
  },
  {
    name: "List Data",
    layout: "/admin",
    path: "data-list",
    icon: MdOutlineShoppingCart,
    component: DataList,
  }
];

export default routes;
