import { React, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onLinkClick, refs }) => {
  // State to determine if the header is sticky
  const [isSticky, setIsSticky] = useState(false);

  // Define handleScroll as a callback
  const handleScroll = useCallback(() => {
    // Update isSticky based on the scroll position
    setIsSticky(window.scrollY > 50);
  }, []);

  useEffect(() => {
    // Attach event listener to track scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]); // Adding handleScroll as a dependency

  return (
    <>
      <header
        className={`transition-colors transition-opacity transition-shadow transition-transform transition-filter 
          duration-150 ease-out bg-white bg-opacity-80 top-0 left-0 z-40 w-full flex items-center justify-between backdrop-blur-sm ${
            isSticky ? "fixed shadow-inset-bottom" : "absolute"
          }`}
      >
        <div className="w-full mx-auto px-4 max-w-[540px] sm:max-w-[720px] md:max-w-[960px] lg:max-w-[1140px] xl:max-w-[1320px]">
          <div className="flex justify-between items-center -mx-4 relative">
            <div className="px-4 max-w-full w-[15rem]">
              <Link to="/" className="w-full block  text-inherit no-underline">
                <img
                  src="images/logo.svg"
                  alt="logo"
                  className={`w-full ${isSticky ? "py-2" : "py-6"}`}
                ></img>
              </Link>
            </div>
            <div className="flex px-4 w-full justify-between items-center">
              <div>
                <button
                  id="navbarToggler"
                  name="navbarToggler"
                  aria-label="navbarToggler"
                  className="relative block lg:hidden  ring ring-blue-600 opacity-100 pt-1.5 pb-1.5 pl-3 pr-3 rounded-lg transform translate-y-[-50%]  absolute right-4"
                >
                  <span className="bg-gray-800 w-8 h-0.5 block mt-1.5 mb-1.5 relative"></span>
                  <span className="bg-gray-800 w-8 h-0.5 block mt-1.5 mb-1.5 relative"></span>
                  <span className="bg-gray-800 w-8 h-0.5 block mt-1.5 mb-1.5 relative"></span>
                </button>
                <nav
                  id="navbarCollapse"
                  className="lg:pl-4 lg:pr-4 lg:pt-0 lg:pb-0 lg:bg-transparent lg:max-w-full lg:w-full lg:block lg:static pt-5 pb-5 bg-white rounded-md w-full hidden absolute"
                >
                  <ul className="lg:flex">
                    <li className="relative group">
                      <a
                        href="#home"
                        onClick={(e) => {
                          e.preventDefault();
                          onLinkClick(refs.home);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Home
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#about"
                        onClick={(e) => {
                          e.preventDefault();
                          onLinkClick(refs.about);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        About
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#services"
                        onClick={(e) => {
                          e.preventDefault();
                          onLinkClick(refs.services);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Services
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#skills"
                        onClick={(e) => {
                          e.preventDefault();
                          onLinkClick(refs.skills);
                        }}
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Skills
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#resume"
                        onClick={(e) => {
                          e.preventDefault();
                          onLinkClick(refs.resume);
                        }}

                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Resume
                      </a>
                    </li>
                    <li className="relative group">
                      <a
                        href="#contact"
                        className="menu-scroll lg:px-0 lg:py-6 lg:inline-flex lg:mr-0 text-custom-color text-base leading-6 py-2 flex mx-8 group-hover:text-[rgb(74,108,247)]"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="pr-16 lg:pr-0 sm:flex justify-end">
                <a
                  href="#contact"
                  className="pl-9 pr-9 md:pl-9 md:pr-9 lg:pl-8 lg:pr-8 ease-in-out duration-300 text-white font-bold text-base leading-6 pt-3 pb-3 rounded-full bg-blue-600"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
