function Ilustraciones() {
    const ilustracionesInfo = [
      {
        id: 1,
        title: "transhumans",
        url: "https://www.transhumans.xyz/",
        src: "../../public/images/transhumans.png",
        description:
          "transhumans",
      },
      {
        id: 2,
        title: "Open Doodles",
        url: "https://www.opendoodles.com/",
        src: "../../public/images/opendoodles.png",
        description: "Opendoodles",
      },
      {
        id: 3,
        title: "Open Peeps",
        url: "https://www.openpeeps.com/",
        src: "../../public/images/openpeeps.png",
        description: "A hand-drawn illustration library",
      },
      {
        id: 4,
        title: "Reshot",
        url: "https://www.reshot.com/free-vector-illustrations/",
        src: "../../public/images/reshot.png",
        description: "reshot.",
      },
      {
        id: 5,
        title: "Illustration Kit",
        url: "https://illustrationkit.com/",
        src: "../../public/images/illustrationkit.png",
        description: "openverse",
      },
    ];
    return (
      <section className="flex flex-wrap justify-center">
        {ilustracionesInfo.map((info) => (
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
  
  export default Ilustraciones;