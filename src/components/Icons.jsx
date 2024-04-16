import MuestraInfo from "./MuestraInfo";

function Icons() {
  const infoData = [
    {
      id: 1,
      title: "Iconify",
      url: "https://icon-sets.iconify.design/",
      src: "./public/images/iconify.png",
      description: "Iconify",
    },
    {
      id: 2,
      title: "Google Icons",
      url: "https://fonts.google.com/icons",
      src: "./public/images/google-icons.png",
      description: "Iconos de google",
    },
    {
      id: 3,
      title: "Simple Icons",
      url: "https://simpleicons.org/",
      src: "./public/images/simple-icons.png",
      description: "Muchos iconos simples",
    },
    {
      id: 4,
      title: "Tabler Icons",
      url: "https://tabler.io/icons",
      src: "./public/images/tabler-icons.png",
      description: "Tabler Icons, más de 5200 iconos. Mira si tienes para elegir.",
    },
    {
      id: 5,
      title: "SVGRepo",
      url: "https://www.svgrepo.com/",
      src: "./public/images/svg-repo.png",
      description: "Iconos de Font Awesome",
    },
    {
      id: 6,
      title: "Reshot",
      url: "https://www.reshot.com/free-svg-icons/",
      src: "./public/images/reshot.webp",
      description: "Design freely with instant downloads and commercial lcenses for over 40,000 icons.",
    },
    {
      id: 7,
      title: "Radix Icons",
      url: "https://www.radix-ui.com/icons",
      src: "./public/images/radix-icons.webp",
      description: "Radix Icons",
    },
    {
      id: 8, 
      title: "Iconoir",
      url: "https://iconoir.com/",
      src: "./public/images/iconoir.webp",
      description: "Say hello to your new free icon library.",
    },
    {
      id: 9,
      title: "Hero Icons",
      url: "https://heroicons.com/",
      src: "./public/images/heroicons.webp",
      description: "Beautiful hand-crafted SVG icons",
    },
    {
      id: 10,
      title: "Lucide",
      url: "https://lucide.dev/",
      src: "./public/images/lucide.webp",
      description: "Beautiful & consistent icons. Made by the community.",
    }
  ];

  return (
    <MuestraInfo infoData={infoData} />
  );
}

export default Icons;
