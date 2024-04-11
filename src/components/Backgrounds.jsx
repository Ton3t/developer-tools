function Backgrounds() {
  const backgroundsInfo = [
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
    <section className="flex flex-wrap justify-center">
      {backgroundsInfo.map((background) => (
        <div
          key={background.id}
          className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <a href={background.url}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={background.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {background.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {background.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}

export default Backgrounds;
