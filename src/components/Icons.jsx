function Icons() {
  const iconsInfo = [
    {
      id: 1,
      title: "Iconify",
      url: "https://icon-sets.iconify.design/",
      src: "../../public/images/iconify.png",
      description: "Iconify",
    },
    {
      id: 2,
      title: "Google Icons",
      url: "https://fonts.google.com/icons",
      src: "../../public/images/google-icons.png",
      description: "Iconos de google",
    },
    {
      id: 3,
      title: "Simple Icons",
      url: "https://simpleicons.org/",
      src: "../../public/images/simple-icons.png",
      description: "Muchos iconos simples",
    },
    {
      id: 4,
      title: "Tabler Icons",
      url: "https://tabler.io/icons",
      src: "../../public/images/tabler-icons.png",
      description: "Tabler Icons, más de 5200 iconos. Mira si tienes para elegir.",
    },
    {
      id: 5,
      title: "SVGRepo",
      url: "https://www.svgrepo.com/",
      src: "../../public/images/svg-repo.png",
      description: "Iconos de Font Awesome",
    }
  ];

  return (
    <section className="flex flex-wrap justify-center">
      {iconsInfo.map((icon) => (
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

export default Icons;
