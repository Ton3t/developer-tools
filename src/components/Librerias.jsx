function Librerias() {
    const libreriasInfo = [
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
      <section className="flex flex-wrap justify-center">
        {libreriasInfo.map((librerias) => (
          <div
            key={librerias.id}
            className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <a href={librerias.url}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={librerias.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {librerias.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {librerias.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
    );
  }
  
  export default Librerias;