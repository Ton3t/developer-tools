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
      {
        id: 9,
        title: "Tailus UI",
        url: "https://tailus.io/",
        src: "./images/tailus-io.webp",
        description: "Easy to customize Modern Tailwindcss Templates",
      },
      {
        id: 10,
        title: "Rewind-UI",
        url: "https://rewind-ui.dev/",
        src: "./images/rewind-ui.webp",
        description: "A fully customizable React-TailwindCSS component library",
      },
      {
        id: 11,
        title: "Preline UI",
        url: "https://preline.co/",
        src: "./images/preline.webp",
        description: "Preline UI is an open-source set of prebuilt UI compoents based on the utility-first Tailwind CSS framework",
      },
      {
        id: 12,
        title: "HyperUI",
        url: "https://www.hyperui.dev/",
        src: "./images/hyper-ui.webp",
        description: "Free Open Source Tailwind CSS Components",
      },
      {
        id: 13,
        title: "LangUI",
        url: "https://www.langui.dev/",
        src: "./images/lang-ui.webp",
        description: "Beautiful components for your Al projects",
      },
      {
        id: 14,
        title: "Shadcn for Vue",
        url: "https://www.shadcn-vue.com/",
        src: "./images/shadcn-vue.webp",
        description: "Bautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.",
      },
      {
        id: 15,
        title: "daisyUI",
        url: "https://www.material-tailwind.com/",
        src: "./images/daisy-ui.webp",
        description: "Material Tailwind is an open-source library that uses the power of Tailwind CSS and React to help you build unique web projects faster and easier. The stunning design inspired by Material Design is a bonus!",
      },
      {
        id: 16,
        title: "Windstatic",
        url: "https://windstatic.com/",
        src: "./images/windstatic.webp",
        description: "Discover a collection of components ready to be seamlessly integrated into your applications with just a simple copy and paste.",
      },
      {
        id: 17,
        title: "UIverse",
        url: "https://tailwindui.com/",
        src: "https://uiverse.io/",
        description: "Create, share, and use beautiful custom elements made with CSS or Tailwind.",
      },
      {
        id: 18,
        title: "Material UI",
        url: "https://mui.com/material-ui/",
        src: "./images/material-ui.webp",
        description: "Material UI is an open-source React component library that implements Google's Material Design. It's comprehensive and can be used in production out of the box.",
      },
      {
        id: 19,
        title: "Material Tailwind",
        url: "https://tailwindui.com/",
        src: "./images/material-tailwind.webp",
        description: "Material Tailwind is an open-source library that uses the power of Tailwind CSS and React to help you build unique web projects faster and easier. The stunning design inspired by Material Design is a bonus!",
      },
      {
        id: 20,
        title: "Ark UI",
        url: "https://ark-ui.com/",
        src: "./images/ark-ui.webp",
        description: "Easy to customize Modern Tailwindcss Templates",
      },
      {
        id: 21,
        title: "Park UI",
        url: "https://park-ui.com/",
        src: "./images/park-ui.webp",
        description: "Beautifully designed components built for your choice of JS and CSS frameworks.",
      },
      {
        id: 22,
        title: "Wedges",
        url: "https://www.lemonsqueezy.com/wedges",
        src: "./images/wedges-ui.webp",
        description: "Beautiful UI components for React, lovingly crafted with the Wedges Design System, Radix UI, and Tailwind CSS.",
      },
      {
        id: 23,
        title: "Melt UI",
        url: "https://melt-ui.com/",
        src: "./images/melt-ui.webp",
        description: "An open-source Svelte library for building high-quality, accessible design systems and web apps.",
      },
      {
        id: 24,
        title: "Tremor",
        url: "https://www.tremor.so//",
        src: "./images/tremor.webp",
        description: "20+ open-source components built on top of Tailwind CSS to make visualizing data simple again. Fully open-source, accessible and customizable.",
      }
      
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