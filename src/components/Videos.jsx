import MuestraInfo from "./MuestraInfo";

function Videos() {
    const infoData = [
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
        title: "Coverr",
        url: "https://coverr.co/",
        src: "./public/images/cover.png",
        description: "Coverr dispone de videos gratios para mostrar en tu web.",
      },
      {
        id: 4,
        title: "Mix-kit",
        url: "https://mixkit.co/free-stock-video/",
        src: "./public/images/mazwai.png",
        description: "",
      },
      {
        id: 5,
        title: "Mazwai",
        url: "https://mazwai.com/",
        src: "./public/images/svg-repo.png",
        description: "Mazwai",
      }
    ];
  
    return (
      <MuestraInfo infoData={infoData} />
    );
  }
  
  export default Videos;