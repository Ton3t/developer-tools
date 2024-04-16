import MuestraInfo from "./MuestraInfo";

function Photos() {
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
      <MuestraInfo infoData={infoData} />
    );
  }
  
  export default Photos;