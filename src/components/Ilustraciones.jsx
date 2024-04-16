import MuestraInfo from "./MuestraInfo";

function Ilustraciones() {
    const infoData = [
      {
        id: 1,
        title: "transhumans",
        url: "https://www.transhumans.xyz/",
        src: "../../public/images/transhumans.png",
        description:
          "transhumans",
      },
      {
        id: 2,
        title: "Open Doodles",
        url: "https://www.opendoodles.com/",
        src: "../../public/images/opendoodles.png",
        description: "Opendoodles",
      },
      {
        id: 3,
        title: "Open Peeps",
        url: "https://www.openpeeps.com/",
        src: "../../public/images/openpeeps.png",
        description: "A hand-drawn illustration library",
      },
      {
        id: 4,
        title: "Reshot",
        url: "https://www.reshot.com/free-vector-illustrations/",
        src: "../../public/images/reshot.png",
        description: "reshot.",
      },
      {
        id: 5,
        title: "Illustration Kit",
        url: "https://illustrationkit.com/",
        src: "../../public/images/illustrationkit.png",
        description: "openverse",
      },
    ];
    return (
      <MuestraInfo infoData={infoData} />
    );
  }
  
  export default Ilustraciones;