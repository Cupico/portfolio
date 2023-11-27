import { IoIosArrowForward } from "react-icons/io";
import { HiOutlinePhone } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useState, useEffect, useCallback } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const navItems = [
  {
    name: "Accueil",
    id: "Accueil",
    active: true,
  },
  {
    name: "Projets",
    id: "Projets",
    active: false,
  },
  {
    name: "A propos",
    id: "About",
    active: false,
  },
  {
    name: "Contact",
    id: "Contact",
    active: false,
  },
];

const Nav = ({ open, setNavOpen }) => {
  const [activeNavItem, setActiveNavItem] = useState(navItems);

  const duration = "duration-300";

  const disableItemActive = (items) => {
    let elementActive = items.find((e) => e.active === true);
    if (elementActive) {
      elementActive.active = false;
    }
  };

  const handleClick = (e) => {
    // Scroll
    document.getElementById(e.id).scrollIntoView({ behavior: "smooth" });
    setNavOpen(false);
  };

  const handleScroll = useCallback(() => {
    let getItems = [...activeNavItem];

    const scrollActiveItem = (id) => {
      disableItemActive(getItems);
      getItems.find((e) => e.id === id).active = true;
      setActiveNavItem(getItems);
    };

    // Scroll position
    const scrollPosition = window.scrollY;

    const accueil = document.getElementById("Accueil").offsetTop * 0.85;
    const projets = document.getElementById("Projets").offsetTop * 0.85;
    const about = document.getElementById("About").offsetTop * 0.85;
    const contact = document.getElementById("Contact").offsetTop * 0.85;

    if (accueil <= scrollPosition) scrollActiveItem("Accueil");
    if (projets <= scrollPosition) scrollActiveItem("Projets");
    if (about <= scrollPosition) scrollActiveItem("About");
    if (contact <= scrollPosition) scrollActiveItem("Contact");
  }, [activeNavItem]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });
    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    };
  }, [handleScroll]);

  return (
    <div className="">
      <div className="z-[99] fixed top-6 right-6 md:hidden cursor-pointer">
        <button
          className={`${
            open ? "opacity-0" : " opacity-100"
          } transition-all duration-300 text-3xl bg-blue-600 hover:bg-blue-800 rounded-full p-3 cursor-pointer`}
          onClick={() => setNavOpen((prevState) => !prevState)}
        >
          <RxHamburgerMenu />
        </button>
      </div>

      <nav
        className={`z-[999] fixed md:sticky top-0 left-0 overflow-auto h-screen
      ${open ? "translate-x-0 w-full sm:w-72" : "w-0 md:w-32"}
       bg-[#121415] transition-all ${duration}`}
      >
        <div className="relative w-full">
          <div className={`${duration} w-full flex mb-6 mt-4`}>
            <button
              className={`transition-all duration-500 text-center ml-auto mr-4 hover:scale-125 ${
                open ? "rotate-180" : ""
              }`}
              onClick={() => setNavOpen((prevState) => !prevState)}
            >
              <span
                className={`text-3xl ${open ? "text-blue-500" : "text-white"} hover:text-blue-500`}
              >
                <IoIosArrowForward />
              </span>
            </button>
          </div>

          {/* Nav element */}
          <div className=" mx-auto font-custom">
            <ul className="w-full mx-auto">
              {navItems.map((e, i) => (
                <li
                  key={i}
                  onClick={() => handleClick(e)}
                  className={`${
                    e.active
                      ? "bg-[#1E2328] text-blue-500"
                      : "bg-[#121415] text-white"
                  } my-2 hover:bg-[#1E2328] rounded-l-lg transition-all duration-500 p-4 mx-auto w-full text-center cursor-pointer`}
                >
                  {e.name}
                </li>
              ))}
              <li
                className={`mt-10 w-full mx-auto text-center flex flex-col items-center justify-center`}
              >
                <span className="cursor-pointer block text-blue-500">
                  <HiOutlinePhone />
                </span>
                {open && (
                  <span className="mt-2 underline uderline decoration-blue-500 underline-offset-4">
                    06 84 28 66 50
                  </span>
                )}
              </li>
              <li
                className={`mt-10 w-full mx-auto text-center flex flex-col items-center justify-center`}
              >
                <span className="cursor-pointer block text-blue-500">
                  <CiMail />
                </span>
                {open && (
                  <span className="mt-2 underline uderline decoration-blue-500 underline-offset-4">
                    davidelbar2@gmail.com
                  </span>
                )}
              </li>
              <li
                className={`mt-10 w-full mx-auto text-center flex flex-col items-center justify-center`}
              >
                <a
                  href="https://www.linkedin.com/in/david-elbar-0b54a4171/"
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-pointer block text-blue-500"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
