function Backgrounds() {
  const backgroundsInfo = [
    {
      id: 1,
      title: "bg.ibelick",
      url: "https://bg.ibelick.com/",
      src: "../../public/images/bg-ibelick.png",
    },
    {
      id: 2,
      title: "UVCanvas",
      url: "https://uvcanvas.com/",
      src: "../../public/images/uvcanvas.png",
    },
    {
      id: 3,
      title: "SVGPatterns",
      url: "https://nucleoapp.com/svg-patterns",
      src: "../../public/images/svgpatterns.png",
    },
    {
        id: 4,
        title: "CSS Backgrounds Patterns",
        url: "https://www.magicpattern.design/tools/css-backgrounds",
        src: "../../public/images/cssbacgroundpatterns.png",
    },
    {
        id: 5,
        title: "Pattern Generator",
        url: "https://doodad.dev/pattern-generator/",
        src: "../../public/images/pattern-generator.png",
    }
  ];

  return (
    <div>
      {backgroundsInfo.map((background) => (
        <div key={background.id}>
          <img src={background.src} alt={background.title} />
          <a href={background.url}>{background.title}</a>
        </div>
      ))}
    </div>
  );
}

export default Backgrounds;
