import { Link, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import DashIcon from "../../icons/DashIcon";

export function SidebarLinks({ routes }) {
  let location = useLocation();

  const activeRoute = (routePath) => location.pathname.includes(routePath);

  const createLinks = (routes) => {
    return routes.filter((route) => route.layout === "/admin" || route.layout === "/auth")
      .map((route, index) => (
        <Link key={index} to={`${route.layout}/${route.path}`}>
          <div className="relative mb-3 flex hover:cursor-pointer">
            <li className="my-[3px] flex cursor-pointer items-center px-8">
              <span
                className={`flex items-center ${
                  activeRoute(route.path)
                    ? "font-bold text-brand-500"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.icon ? <route.icon className="h-6 w-6" /> : <DashIcon />}
              </span>
              <p
                className={`leading-1 ml-4 flex ${
                  activeRoute(route.path)
                    ? "font-bold text-navy-700"
                    : "font-medium text-gray-600"
                }`}
              >
                {route.name}
              </p>
            </li>
            {activeRoute(route.path) && (
              <div className="absolute right-0 top-px h-9 w-1 rounded-lg bg-brand-500" />
            )}
          </div>
        </Link>
      ));
  };

  return <>{createLinks(routes)}</>;
}
SidebarLinks.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      layout: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      icon: PropTypes.elementType,
    })
  ).isRequired,
};

export default SidebarLinks;
