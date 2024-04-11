function Fonts() {
    const fontsInfo = [
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
      <section className="flex flex-wrap justify-center">
        {fontsInfo.map((icon) => (
          <div
            key={icon.id}
            className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <a href={icon.url}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={icon.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {icon.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {icon.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
    );
  }
  
  export default Fonts;
  