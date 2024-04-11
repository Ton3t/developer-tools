
function Colors() {

    const colors = [{
        id: 1,
        title: "Realtime Colors",
        url: "https://www.realtimecolors.com/?colors=080305-faf3f5-b74d6d-98d393-7fcbb5&fonts=Poppins-Poppins",
        src: "./public/images/time-colors.png",
        description: "Realtime Colors",
      },
      {
        id: 2,
        title: "Pigment",
        url: "https://pigment.shapefactory.co/",
        src: "./public/images/pigment.png",
        description: "Página muy buena para convinar colores...",
      },
      {
        id: 3,
        title: "Tintmint",
        url: "https://tintmint.net/",
        src: "./public/images/tintmint.png",
        description: "Tintmint",
      },
      {
        id: 4,
        title: "Grabient",
        url: "https://www.grabient.com/",
        src: "./public/images/grabient.png",
        description: "Grabient",
      },
      {
        id: 5,
        title: "Picular",
        url: "https://picular.co/",
        src: "./public/images/picular.png",
        description: "Picular",
      }
    ];

    return (
        <section className="flex flex-wrap justify-center">
          {colors.map((color) => (
            <div
              key={color.id}
              className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <a href={color.url}>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={color.src}
                  alt=""
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {color.title}
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {color.description}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </section>
      );
}

export default Colors