function Videos() {
    const videosInfo = [
      {
        id: 1,
        title: "Pixabay",
        url: "https://pixabay.com/videos/",
        src: "../../public/images/pixabay-videos.png",
        description: "Pixabay",
      },
      {
        id: 2,
        title: "Pexels",
        url: "https://www.pexels.com/videos/",
        src: "../../public/images/pexels.png",
        description: "Pexels",
      },
      {
        id: 3,
        title: "Coverr",
        url: "https://coverr.co/",
        src: "../../public/images/cover.png",
        description: "Coverr dispone de videos gratios para mostrar en tu web.",
      },
      {
        id: 4,
        title: "Mix-kit",
        url: "https://mixkit.co/free-stock-video/",
        src: "../../public/images/mazwai.png",
        description: "",
      },
      {
        id: 5,
        title: "Mazwai",
        url: "https://mazwai.com/",
        src: "../../public/images/svg-repo.png",
        description: "Mazwai",
      }
    ];
  
    return (
      <section className="flex flex-wrap justify-center">
        {videosInfo.map((video) => (
          <div
            key={video.id}
            className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <a href={video.url}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={video.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {video.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {video.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
    );
  }
  
  export default Videos;