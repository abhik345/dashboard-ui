import { MdHome,MdOutlineShoppingCart,MdLock } from "react-icons/md";
import MainDashboard from "./view/admin/default/index";
import DataList from "./view/admin/data-list";
import SignIn from "./view/auth/SignIn"

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
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: MdLock ,
    component: SignIn ,
  },
];

export default routes;
