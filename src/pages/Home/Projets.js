import { useRef } from "react";
import { useIsVisible } from "../../components/Detect";
import ProjetCard from "./Projets/projetCard";
import FadeAnimation from "../../components/FadeAnimation";

const Projets = () => {
  const welease = useRef();
  const weleaseVisible = useIsVisible(welease);

  const forinov = useRef();
  const forinovVisible = useIsVisible(forinov);

  const evaengines = useRef();
  const evaenginesVisible = useIsVisible(evaengines);

  const rap = useRef();
  const rapVisible = useIsVisible(rap);

  return (
    <section id="Projets" className="w-full h-full">
      <div className="p-10 sm:p-20">
        <div className="flex items-center">
          <h2 className="text-2xl sm:text-4xl font-bold">Projets</h2>
          <div className="ml-6 w-40 sm:w-60 md:w-96 h-[1px] bg-blue-500 mt-2"></div>
        </div>

        {/* Projet 1*/}
        <div
          ref={welease}
          className="mt-10 sm:mt-16 h-full w-full mb-20 sm:mb-20 lg:mb-28"
        >
          <FadeAnimation
            afterAnimation={"translate-x-0"}
            beforeAnimation={"-translate-x-10"}
            visible={weleaseVisible}
          >
            <ProjetCard
              order_img={"lg:order-1"}
              order_text={"lg:order-2"}
              inverse_responsive={false}
              img_path={"welease2.png"}
              job={"Développeur full stack"}
              company={"Welease"}
              date={"Septembre 2021 - Septembre 2022, Alternance"}
              description1={`Conception et réalisation d'un outil interne avec ReactJS, sur
           mesure, permettant aux commerciaux de générer des cotes de
           voiture, offrant des fonctionnalités avancées pour évaluer
           précisément les véhicules.`}
              description2={`Responsable de l'intégralité du processus de développement du site
           web de la start-up : création autonome du front-end et du back-end
           en utilisant des technologies tel que NextJS, NodeJS, MongoDB.`}
              href={"https://welease.fr/"}
            />
          </FadeAnimation>
        </div>

        <div
          ref={forinov}
          className="h-full w-full mb-6 sm:mb-0 mb-20 sm:mb-20 lg:mb-28"
        >
          <FadeAnimation
            afterAnimation={"translate-x-0"}
            beforeAnimation={"translate-x-10"}
            visible={forinovVisible}
          >
            <ProjetCard
              order_img={"lg:order-2"}
              order_text={"lg:order-1"}
              inverse_responsive={true}
              img_path={"forinov.png"}
              job={"Développeur front end"}
              company={"Forinov"}
              date={"Octobre 2020 - Septembre 2021, Alternance"}
              description1={`Conception et développement du site web de la start-up, en mettant en valeur l'objectif de connecter les besoins d'innovation entre entreprises et startups.`}
              description2={`Implémentation de différentes fonctionnalitées en ReactJS, en collaboration avec le designer.`}
              href={"https://fr.forinov.com/"}
            />
          </FadeAnimation>
        </div>

        {/* Projet 3*/}
        <div ref={evaengines} className="h-full w-full mb-20 sm:mb-20 lg:mb-28">
          <FadeAnimation
            afterAnimation={"translate-x-0"}
            beforeAnimation={"-translate-x-10"}
            visible={evaenginesVisible}
          >
            <ProjetCard
              order_img={"lg:order-1"}
              order_text={"lg:order-2"}
              inverse_responsive={false}
              img_path={"evaengines.webp"}
              job={"Développeur front end React"}
              company={"Eva Engines"}
              date={"Fevrier 2020 - Juillet 2020, Stage, Station F"}
              description1={`Conception et développement de la partie front-end d’un outil interne avec ReactJS basé sur l'IA et la reconnaissance faciale afin de faciliter le recrutement de mannequins.`}
              description2={`Implémentation d'une interface utilisateur conviviale offrant une expérience intuitive pour rechercher et filtrer des profils en fonction de critères spécifiques.`}
              href={"https://www.instagram.com/eva_engines/?hl=fr"}
            />
          </FadeAnimation>
        </div>



        <div
          ref={rap}
          className="h-full w-full mb-6 sm:mb-0 mb-20 sm:mb-20 lg:mb-28"
        >
          <FadeAnimation
            afterAnimation={"translate-x-0"}
            beforeAnimation={"translate-x-10"}
            visible={rapVisible}
          >
            <ProjetCard
              order_img={"lg:order-2"}
              order_text={"lg:order-1"}
              inverse_responsive={true}
              img_path={"rap.png"}
              job={"Projet personnel"}
              company={"David Elbar"}
              date={""}
              description1={`Les données, ont été récupérées en allant scrapper les pages de spotify pour récupérer les auditeurs mensuels, et en intéragissant avec l'api rap genius pour les images, noms et description des artistes.`}
              description2={`Application réalisé en React & Node, permettant de rechercher des rappeurs français pour accéder à leur informations, ainsi qu'un jeu mis en place en fonction de leur auditeurs.  `}
              href={"https://rap-cli-55f5382404b2.herokuapp.com/"}
              
            />
          </FadeAnimation>
        </div>
      </div>
    </section>
  );
};

export default Projets;
