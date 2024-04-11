function Components() {
    const ComponentsInfo = [
      {
        id: 1,
        title: "shadcn/ui",
        url: "https://ui.shadcn.com/",
        src: "./public/images/shadcn.webp",
        description:
          "Build your component library",
      },
      {
        id: 2,
        title: "Radix",
        url: "https://www.radix-ui.com/",
        src: "./public/images/radix.webp",
        description: "Start building your app now",
      },
      {
        id: 3,
        title: "NextUI",
        url: "https://nextui.org/",
        src: "./public/images/next-ui.webp",
        description: "Make beautiful websites regardless of your desing experience",
      },
      {
        id: 4,
        title: "FloatUI",
        url: "https://floatui.com/",
        src: "./public/images/float-ui.webp",
        description: "Build and ship fast with Tailwind CSS UI components",
      },
      {
        id: 5,
        title: "Tailblocks",
        url: "https://tailblocks.cc/",
        src: "./public/images/tailblocks.webp",
        description: "tailblocks",
      },
      {
        id: 6,
        title: "Component Gallery",
        url: "https://component.gallery/components/",
        src: "./public/images/component-library.webp",
        description: "Component Gallery",
      },
      {
        id: 7,
        title: "Headless UI",
        url: "https://headlessui.com/",
        src: "./public/images/headless-ui.webp",
        description: "Completely unstyled, fully accesible UI components, designed to integrate beautifully with Tailwind CSS",
      },
      {
        id: 8,
        title: "Mantine",
        url: "https://ui.mantine.dev/",
        src: "./public/images/mantine-ui.webp",
        description: "Build your next website even faster with premade responsive components designed and built by Mantine maintainers and community. All components are free forever for everyone.",
      },
      
    ];
    return (
      <section className="flex flex-wrap justify-center">
        {ComponentsInfo.map((info) => (
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
  
  export default Components;