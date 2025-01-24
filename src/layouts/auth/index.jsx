import { Link, Routes, Route, Navigate } from "react-router-dom";
import routes from "../../routes";
import Footer from "../../components/footer/Footer";
import Spline from "@splinetool/react-spline";

export default function Auth() {
  document.documentElement.dir = "ltr";

  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full !bg-white">
        <main className="mx-auto min-h-screen">
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:min-h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pr-0 md:pl-12 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                <Link to="/admin" className="mt-0 w-max lg:pt-10">
                  <div className="mx-auto flex h-fit w-fit items-center hover:cursor-pointer">
                    <svg
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.70994 2.11997L2.82994 5.99997L6.70994 9.87997C7.09994 10.27 7.09994 10.9 6.70994 11.29C6.31994 11.68 5.68994 11.68 5.29994 11.29L0.709941 6.69997C0.319941 6.30997 0.319941 5.67997 0.709941 5.28997L5.29994 0.699971C5.68994 0.309971 6.31994 0.309971 6.70994 0.699971C7.08994 1.08997 7.09994 1.72997 6.70994 2.11997V2.11997Z"
                        fill="#A3AED0"
                      />
                    </svg>
                    <p className="ml-3 text-sm text-gray-600">
                      Back to Dashboard
                    </p>
                  </div>
                </Link>

                {/* Routes for Authentication */}
                <div className="flex h-full w-full items-center justify-center md:mx-0 md:px-0 lg:mb-10 lg:items-center lg:justify-start">
                  <Routes>
                    {routes.map((prop, key) => (
                      prop.layout === "/auth" ? (
                        <Route path={prop.path} element={<prop.component />} key={key} />
                      ) : null
                    ))}
                    <Route path="/" element={<Navigate to="/auth/sign-in" replace />} />
                  </Routes>
                </div>

                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <Spline scene="https://prod.spline.design/3ATQWL6qILQA-TyK/scene.splinecode"
                    className="absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]" 
                  />
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
