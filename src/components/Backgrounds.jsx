import MuestraInfo from "./MuestraInfo";

function Backgrounds() {
  const infoData = [
    {
      id: 1,
      title: "bg.ibelick",
      url: "https://bg.ibelick.com/",
      src: "./public/images/bg-ibelick.png",
      description: "bg.ibelick",
    },
    {
      id: 2,
      title: "UVCanvas",
      url: "https://uvcanvas.com/",
      src: "./public/images/uvcanvas.png",
      description: "UVCanvas",
    },
    {
      id: 3,
      title: "SVGPatterns",
      url: "https://nucleoapp.com/svg-patterns",
      src: "./public/images/svgpatterns.png",
      description: "SVGPatterns",
    },
    {
      id: 4,
      title: "CSS Backgrounds Patterns",
      url: "https://www.magicpattern.design/tools/css-backgrounds",
      src: "./public/images/cssbacgroundpatterns.png",
      description: "CSS Backgrounds Patterns",
    },
    {
      id: 5,
      title: "Pattern Generator",
      url: "https://doodad.dev/pattern-generator/",
      src: "./public/images/pattern-generator.png",
      description: "Pattern Generator",
    },
  ];

  return (
    <MuestraInfo infoData={infoData} />
  );
}

export default Backgrounds;
