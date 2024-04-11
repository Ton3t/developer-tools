function Photos() {
    const photos = [
     {
        id: 1,
        title: "Pixabay",
        url: "https://pixabay.com/videos/",
        src: "./public/images/pixabay-videos.png",
        description: "Pixabay",
     },
     {
        id: 2,
        title: "Pexels",
        url: "https://www.pexels.com/videos/",
        src: "./public/images/pexels.png",
        description: "Pexels",
     },
     {
        id: 3,
        title: "Unsplash",
        url: "https://unsplash.com/es",
        src: "./public/images/unsplash.png",
        description: "Unsplash.",
     },
     {
        id: 4,
        title: "PicoGraphy",
        url: "https://picography.co/",
        src: "./public/images/picography.png",
        description: "PicoGraphy.",
     },
     {
      id: 5,
      title: "openverse",
      url: "https://openverse.org/",
      src: "./public/images/openverse.png",
      description: "openverse",
     }
    ];
  
    return (
      <section className="flex flex-wrap justify-center">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <a href={photo.url}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={photo.src}
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {photo.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {photo.description}
                </p>
              </div>
            </a>
          </div>
        ))}
      </section>
    );
  }
  
  export default Photos;