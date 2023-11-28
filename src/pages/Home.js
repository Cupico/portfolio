import { stack } from "../utils/techStackLogo";

import Projets from "./Home/Projets";
import About from "./Home/About";
import Contact from "./Home/Contact";

import { useRef } from "react";
import { useIsVisible } from "../components/Detect";

import { useMouse } from "../components/useMouse";

const Home = () => {
  const name = useRef();
  const nameVisible = useIsVisible(name);

  useMouse();

  return (
    <main>
      <div id="cursor-bg"></div>
      <div className="w-full h-screen mb-72 sm:mb-0 p-10 sm:p-20">
        <section id="Accueil" className="w-full h-full">
          <div className="gap-10 grid grid-cols-1 md:grid-cols-2 place-content-center sm:h-full ">
            {/* Description  */}
            <div
              ref={name}
              className=" order-2 md:order-1 flex flex-col justify-center items-center"
            >
              <div className="">
                <h1
                  className={`transition-all delay-150 duration-500 ${
                    nameVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } text-left font-custom font-bold text-4xl mb-4`}
                >
                  Développeur Full Stack
                </h1>
                <h2
                  className={`transition-all delay-300 duration-500 ${
                    nameVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } text-left font-custom`}
                >
                  Salut ! Je m'appelle{" "}
                  <span className="uppercase text-xl font-bold text-blue-500">
                    David Elbar
                  </span>
                  , je suis développeur full stack. J'ai 24 ans et me situe à
                  Courbevoie, France.{" "}
                </h2>

                {/* Tech stack */}
                <div
                  className={`transition-all delay-500 duration-500 ${
                    nameVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } mt-20 flex flex-col sm:flex-row flex-wrap items-center  gap-x-4 gap-y-10`}
                >
                  {" "}
                  <div className="border-r-2 pr-4 mr-4 border-gray-400">
                    <h3>Tech Stack </h3>
                  </div>
                  {stack.map((e, i) => (
                    <div
                      key={i}
                      className={`${
                        i % 2 ? "mr-6" : ""
                      } hidden sm:flex h-10 w-10 flex items-center`}
                    >
                      <img src={e.img} alt={e.name} className="cover" />
                    </div>
                  ))}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-10">
                    {stack.map((e, i) => (
                      <div
                        key={i}
                        className={`${
                          i % 2 ? "mr-6" : ""
                        }  flex sm:hidden h-12 w-12 flex items-center justify-center`}
                      >
                        <img src={e.img} alt={e.name} className="cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Image profil */}
            <div
              className={`transition-all md:delay-700 duration-500 ${
                nameVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              } order-1 md:order-2 flex justify-center items-center`}
            >
              <div className="scale-75 sm:scale-100 relative w-96 h-96">
                <div className="relative w-full h-full border-solid border-[3px] border-[#969696] bg-[url('./assets/images/davidelbar.jpeg')] bg-cover bg-center bg-no-repeat clip-triangle "></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Projets />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
