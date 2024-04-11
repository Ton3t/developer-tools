function Blogs() {
    const BlogsInfo = [
      {
        id: 1,
        title: "Josh Comeau",
        url: "https://www.joshwcomeau.com/",
        src: "../../public/images/josh.webp",
        description:
          "transhumans",
      },
      {
        id: 2,
        title: "DEV",
        url: "https://dev.to/",
        src: "../../public/images/blog2.webp",
        description: "DEV",
      },
      {
        id: 3,
        title: "Modern CSS",
        url: "https://moderncss.dev/",
        src: "../../public/images/moderncss.webp",
        description: "Modern CSS Solutions for old CSS problems",
      },
      {
        id: 4,
        title: "Medium",
        url: "https://medium.com/",
        src: "../../public/images/medium.webp",
        description: "Medium",
      },
      {
        id: 5,
        title: "Rauno",
        url: "https://rauno.me/craft",
        src: "../../public/images/blog3.webp",
        description: "rauno",
      },
    ];
    return (
      <section className="flex flex-wrap justify-center">
        {BlogsInfo.map((info) => (
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
  
  export default Blogs;