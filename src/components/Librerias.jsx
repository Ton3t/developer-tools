import MuestraInfo from "./MuestraInfo";

function Librerias() {
    const infoData = [
     {
      id: 1,
      title: "matter.js",
      url: "https://brm.io/matter-js/",
      src: "./public/images/matterjs.png",
      description: "Curated Design",
     },
     {
      id: 2,
      title: "react-magic-motion",
      url: "https://www.react-magic-motion.com/",
      src: "./public/images/react-magic-motion.png",
      description: "Godly Website",
     },
     {
      id: 3,
      title: "useHooks",
      url: "https://usehooks.com/",
      src: "./public/images/useHooks.png",
      description: "useHooks",
     },
     {
      id: 4,
      title: "_AutoAnimate",
      url: "https://auto-animate.formkit.com/",
      src: "./public/images/auto-animate.png",
      description: "bentogrids",
     },
     {
      id: 5,
      title: "Mousetrap",
      url: "https://craig.is/killing/mice",
      src: "./public/images/mousetrap.png",
      description: "MouseTrap",
     }
    ];
  
    return (
      <MuestraInfo infoData={infoData} />
    );
  }
  
  export default Librerias;