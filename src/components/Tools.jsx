
function Tools() {
    const toolsInfo = [
        {
           id: 1,
           title: "Squoosh",
           url: "https://squoosh.app/",
           src: "../../public/images/squosh.png",
           description: "Squoosh - herramienta indispensable para reducir de tamaño tus imágenes.",
        },
        {
           id: 2,
           title: "Shots",
           url: "https://shots.so/",
           src: "../../public/images/shots.png",
           description: "shots - herramienta para retocar tus imágenes.",
        },
        {
           id: 3,
           title: "Layoutit Grid",
           url: "https://grid.layoutit.com/",
           src: "../../public/images/layoutit-grid.png",
           description: "Herramienta para  hacer tus layouts más fácilmente.",
        },
        {
           id: 4,
           title: "Monkeytype",
           url: "https://monkeytype.com/",
           src: "../../public/images/monkeytype.png",
           description: "Monkeytype.",
        },
        {
         id: 5,
         title: "Rapidapi",
         url: "https://rapidapi.com/collections",
         src: "../../public/images/rapidapi.png",
         description: "openverse",
        }
       ];
    return (
        <section className="flex flex-wrap justify-center">
          {toolsInfo.map((info) => (
            <div
              key={info.id}
              className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <a href={info.url}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={info.src}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {info.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {info.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </section>
      );
}

export default Tools