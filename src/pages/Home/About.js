import { Parallax } from "react-scroll-parallax";

const About = () => {
  const windowWidth = window.innerWidth;


  return (
    <section id="About" className="w-full h-full relative">
      <div className="relative p-10 sm:p-20">
        <div className="flex items-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold">A propos</h2>
          <div className="ml-6 w-40 sm:w-60 md:w-96 h-[1px] bg-blue-500 mt-2"></div>
        </div>

        <div className="">
          <Parallax translateX={["-100px", `${windowWidth}px`]}>
            <div
              id="skate"
              className="absolute -top-14 left-0 transition-all w-40 h-40 "
            >
              <img
                src={require("./../../assets/images/skate.png")}
                className="object-cover"
                alt="skate"
              />
            </div>
          </Parallax>
          <div className="pt-20 font-custom grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-[#181818] p-10 flex flex-col justify-center rounded-md">
              <div className="w-fit mx-auto">
                <p className="-ml-4 mb-2">
                  <span className="text-blue-400">{`<div`}</span>{" "}
                  <span className="text-blue-400 ">id</span>
                  <span className="text-blue-300">=</span>
                  <span className="text-orange-400">{`"about_me"`}</span>
                  <span className="text-blue-400">{`>`}</span>
                </p>
                <p>
                  <span className="text-red-400">{`<p`}</span>
                  <span className="text-red-400">{`>`}</span>
                  <span className="text-yellow-400 px-1">{`{`}</span>
                  <span className="">enfance</span>
                  <span className="text-yellow-400 px-1">{`}`}</span>
                  <span className="text-red-400">{`</p>`}</span>
                </p>
                <p>
                  <span className="text-red-400">{`<p`}</span>
                  <span className="text-red-400">{`>`}</span>
                  <span className="text-yellow-400 px-1">{`{`}</span>
                  <span className="">études</span>
                  <span className="text-yellow-400 px-1">{`}`}</span>
                  <span className="text-red-400">{`</p>`}</span>
                </p>
                <p>
                  <span className="text-red-400">{`<p`}</span>
                  <span className="text-red-400">{`>`}</span>
                  <span className="text-yellow-400 px-1">{`{`}</span>
                  <span className="">passions</span>
                  <span className="text-yellow-400 px-1">{`}`}</span>
                  <span className="text-red-400">{`</p>`}</span>
                </p>
                <p className="-ml-4 mt-2">
                  <span className="text-blue-400">{`</div>`}</span>{" "}
                </p>
              </div>
            </div>
            <div className="text-white">
              <p>
                J’ai vécu jusqu’à mes 18 ans à Casablanca, au Maroc. En tant que
                véritable geek, mon intérêt pour le développement est né lors de
                mon stage de 3ème, où j'ai eu l'opportunité de collaborer avec
                un développeur front-end dans une entreprise locale.
              </p>
              <p className="my-4">
                Après l’obtention d’un Bac ES, j'ai poursuivi un{" "}
                <span className="text-blue-500 font-bold">Mastère</span> à
                l'IIM, au pôle Léonard de Vinci, et j'y ai consolidé mes
                compétences au cours de{" "}
                <span className="text-blue-500 font-bold">
                  stages et d'années d'alternances
                </span>
                , toutes réalisées au sein de start-ups innovantes.
              </p>
              <p>
                Lorsque je ne suis pas sur mon ordinateur, je cultive ma passion
                pour <span className="text-blue-500 font-bold">le skate</span>,
                une discipline qui m'accompagne depuis plusieurs années et qui
                incarne mon équilibre entre créativité et persévérance. En
                parallèle, je vais souvent à{" "}
                <span className="text-blue-500 font-bold">
                  la salle de sport
                </span>
                , si jamais le bureau a besoin de quelqu'un pour porter
                l'équipe, je suis déjà bien entraîné !
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
