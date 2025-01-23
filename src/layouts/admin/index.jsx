import { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/index";
import Sidebar from "../../components/sidebar/index";
import Footer from "../../components/footer/Footer";
import routes from "../../routes";

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = useState(window.innerWidth >= 1200);
  const [currentRoute, setCurrentRoute] = useState("Main Dashboard");

  useEffect(() => {
    const handleResize = () => {
      setOpen(window.innerWidth >= 1200);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const getActiveRoute = () => {
      let activeRoute = "Main Dashboard";
      routes.forEach((route) => {
        if (location.pathname.includes(`${route.layout}/${route.path}`)) {
          activeRoute = route.name;
        }
      });
      setCurrentRoute(activeRoute);
    };

    getActiveRoute();
  }, [location.pathname]);

  const getActiveNavbar = () => {
    return routes.some((route) => location.pathname.includes(`${route.layout}/${route.path}`) && route.secondary);
  };

  const getRoutes = () => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return <Route path={`/${prop.path}`} element={<prop.component />} key={key} />;
      }
      return null;
    });
  };

  document.documentElement.dir = "ltr";

  return (
    <div className="flex h-full w-full">
      <Sidebar open={open} onClose={() => setOpen(false)} />
      {/* Navbar & Main Content */}
      <div className="h-full w-full bg-lightPrimary">
        {/* Main Content */}
        <main className="mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]">
          {/* Routes */}
          <div className="h-full">
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText="New Dashboard"
              brandText={currentRoute}
              secondary={getActiveNavbar()}
              {...rest}
            />
            <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">
              <Routes>
                {getRoutes()}
                <Route path="/" element={<Navigate to="/admin/default" replace />} />
              </Routes>
            </div>
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
