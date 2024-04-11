function Collections() {
  const collectionsInfo = [
   {
    id: 1,
    title: "Curated Design",
    url: "https://www.curated.design/",
    src: "../../public/images/curated-design.png",
    description: "Curated Design",
   },
   {
    id: 2,
    title: "Godly Website",
    url: "https://godly.website/",
    src: "../../public/images/godly-website.png",
    description: "Godly Website",
   },
   {
    id: 3,
    title: "Landbook",
    url: "https://land-book.com/",
    src: "../../public/images/landbook.png",
    description: "Landbook",
   },
   {
    id: 4,
    title: "bentogrids",
    url: "https://bentogrids.com/",
    src: "../../public/images/bentogrids.png",
    description: "bentogrids",
   },
   {
    id: 5,
    title: "unsection",
    url: "https://www.unsection.com/",
    src: "../../public/images/unsection.png",
    description: "unsection",
   }
  ];

  return (
    <section className="flex flex-wrap justify-center">
      {collectionsInfo.map((collectionsInfo) => (
        <div
          key={collectionsInfo.id}
          className="m-2 w-[250px] flex flex-wrap items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <a href={collectionsInfo.url}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={collectionsInfo.src}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {collectionsInfo.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {collectionsInfo.description}
              </p>
            </div>
          </a>
        </div>
      ))}
    </section>
  );
}

export default Collections;
