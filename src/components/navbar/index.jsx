
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { BsArrowBarUp } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import {
  IoMdNotificationsOutline,
} from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import Dropdown from "../dropdown/index";
import avatar from "/assets/img/avatars/avatar4.png";

const Navbar = (props) => {
  const { onOpenSidenav, brandText } = props;
  return (
    <>
      <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl">
        <div className="ml-[6px]">
          <div className="h-6 w-[224px] pt-1">
            <a className="text-sm font-normal text-navy-700 hover:underline" href=" ">
              Pages
              <span className="mx-1 text-sm text-navy-700 hover:text-navy-700"> / </span>
            </a>
            <Link className="text-sm font-normal capitalize text-navy-700 hover:underline" to="#">
              {brandText}
            </Link>
          </div>
          <p className="shrink text-[33px] capitalize text-navy-700">
            <Link to="#" className="font-bold capitalize hover:text-navy-700">
              {brandText}
            </Link>
          </p>
        </div>

        <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl shadow-shadow-500 md:w-[365px] md:flex-grow-0 md:gap-1 xl:w-[365px] xl:gap-2">
          <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 xl:w-[225px]">
            <p className="pl-3 pr-2 text-xl">
              <FiSearch className="h-4 w-4 text-gray-400" />
            </p>
            <input
              type="text"
              placeholder="Search..."
              className="block h-full w-full rounded-full bg-lightPrimary text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 sm:w-fit"
            />
          </div>
          <span className="flex cursor-pointer text-xl text-gray-600 xl:hidden" onClick={onOpenSidenav}>
            <FiAlignJustify className="h-5 w-5" />
          </span>
          {/* start Notification */}
          <Dropdown
            button={
              <p className="cursor-pointer">
                <IoMdNotificationsOutline className="h-4 w-4 text-gray-600" />
              </p>
            }
            animation="origin-[65%_0%] md:origin-top-right transition-all duration-300 ease-in-out"
            classNames={"py-2 top-4 -left-[230px] md:-left-[440px] w-max"}
          >
            <div className="flex w-[360px] flex-col gap-3 rounded-[20px] bg-white p-4 shadow-xl shadow-shadow-500 sm:w-[460px]">
              <div className="flex items-center justify-between">
                <p className="text-base font-bold text-navy-700">Notification</p>
                <p className="text-sm font-bold text-navy-700">Mark all read</p>
              </div>
              <button className="flex w-full items-center">
                <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-t from-slate-200 to-green-600 py-4 text-2xl text-white">
                  <BsArrowBarUp />
                </div>
                <div className="ml-2 flex h-full w-full flex-col justify-center rounded-lg px-1 text-sm">
                  <p className="mb-1 text-left text-base font-bold text-gray-900">
                    New Update: Horizon UI Dashboard PRO
                  </p>
                  <p className="font-base text-left text-xs text-gray-900">
                    A new update for your downloaded item is available!
                  </p>
                </div>
              </button>
            </div>
          </Dropdown>

          {/* Profile & Dropdown */}
          <Dropdown
            button={
              <img className="h-10 w-10 rounded-full" src={avatar} alt="Profile" />
            }
            classNames={"py-2 top-8 -left-[180px] w-max"}
          >
            <div className="flex w-56 flex-col justify-start rounded-[20px] bg-white bg-cover bg-no-repeat shadow-xl shadow-shadow-500">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold text-navy-700">👋 Hey, Adela</p>
                </div>
              </div>
              <div className="h-px w-full bg-gray-200" />
              <div className="flex flex-col p-4">
                <a href=" " className="text-sm text-gray-800 hover:text-gray-900">
                  Profile Settings
                </a>
                <a href=" " className="mt-3 text-sm text-gray-800 hover:text-gray-900">
                  Newsletter Settings
                </a>
                <a
                  href=" "
                  className="mt-3 text-sm font-medium text-red-500 hover:text-red-600 transition duration-150 ease-out hover:ease-in"
                >
                  Log Out
                </a>
              </div>
            </div>
          </Dropdown>
        </div>
      </nav>
    </>
  );
};
Navbar.propTypes = {
  onOpenSidenav: PropTypes.func.isRequired,
  brandText: PropTypes.string.isRequired,
};

export default Navbar;