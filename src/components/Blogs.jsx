import MuestraInfo from "./MuestraInfo";

function Blogs() {
    const infoData = [
      {
        id: 1,
        title: "Josh Comeau",
        url: "https://www.joshwcomeau.com/",
        src: "./public/images/josh.webp",
        description:
          "transhumans",
      },
      {
        id: 2,
        title: "DEV",
        url: "https://dev.to/",
        src: "./public/images/blog2.webp",
        description: "DEV",
      },
      {
        id: 3,
        title: "Modern CSS",
        url: "https://moderncss.dev/",
        src: "./public/images/moderncss.webp",
        description: "Modern CSS Solutions for old CSS problems",
      },
      {
        id: 4,
        title: "Medium",
        url: "https://medium.com/",
        src: "./public/images/medium.webp",
        description: "Medium",
      },
      {
        id: 5,
        title: "Rauno",
        url: "https://rauno.me/craft",
        src: "./public/images/blog3.webp",
        description: "rauno",
      },
    ];
    return (
     <MuestraInfo infoData={infoData} />
    );
  }
  
  export default Blogs;