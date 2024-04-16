import MuestraInfo from "./MuestraInfo";

function Fonts() {
    const infoData = [
      {
        id: 1,
        title: "Google Fonts",
        url: "https://fonts.google.com/",
        src: "./public/images/google-fonts.png",
        description: "Tipografías de google",
      },
      {
        id: 2,
        title: "Fontsource",
        url: "https://fontsource.org/",
        src: "./public/images/fontsource.png",
        description: "Fontsource",
      },
      {
        id: 3,
        title: "Typewolf",
        url: "https://www.typewolf.com/",
        src: "./public/images/typewolf.png",
        description: "Muchos iconos simples",
      },
      {
        id: 4,
        title: "Typo/Graphic Posters",
        url: "https://www.typographicposters.com/",
        src: "./public/images/typo-graphic.png",
        description: "Tipografías gráficas para posters y cosas así",
      },
      {
        id: 5,
        title: "Fontshare",
        url: "https://www.fontshare.com/",
        src: "./public/images/fontshare.png",
        description: "Fontshare, tipografías de todo tipo",
      }
    ];
  
    return (
      <MuestraInfo infoData={infoData} />
    );
  }
  
  export default Fonts;
  