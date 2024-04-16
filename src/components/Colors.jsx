import MuestraInfo from "./MuestraInfo";

function Colors() {

    const infoData = [{
        id: 1,
        title: "Realtime Colors",
        url: "https://www.realtimecolors.com/?colors=080305-faf3f5-b74d6d-98d393-7fcbb5&fonts=Poppins-Poppins",
        src: "./public/images/time-colors.png",
        description: "Realtime Colors",
      },
      {
        id: 2,
        title: "Pigment",
        url: "https://pigment.shapefactory.co/",
        src: "./public/images/pigment.png",
        description: "Página muy buena para convinar colores...",
      },
      {
        id: 3,
        title: "Tintmint",
        url: "https://tintmint.net/",
        src: "./public/images/tintmint.png",
        description: "Tintmint",
      },
      {
        id: 4,
        title: "Grabient",
        url: "https://www.grabient.com/",
        src: "./public/images/grabient.png",
        description: "Grabient",
      },
      {
        id: 5,
        title: "Picular",
        url: "https://picular.co/",
        src: "./public/images/picular.png",
        description: "Picular",
      }
    ];

    return (
        <MuestraInfo infoData={infoData} />
      );
}

export default Colors