import MuestraInfo from "./MuestraInfo";

function Tresd() {
  const infoData = [
    {
      id: 1,
      title: "Poly Haven",
      url: "https://polyhaven.com/",
      src: "./public/images/poly-haven.png",
      description: "Pixabay",
    },
    {
      id: 2,
      title: "itch.io",
      url: "https://itch.io/game-assets/free",
      src: "./public/images/itch-io.png",
      description: "itch.io",
    },
    {
      id: 3,
      title: "Kenney",
      url: "https://kenney.nl/",
      src: "./public/images/kenney.png",
      description:
        "KenneY - Thousand of completely free game assetes for you to use.",
    },
    {
      id: 4,
      title: "ambientCG",
      url: "https://ambientcg.com/",
      src: "./public/images/ambientcg.png",
      description: "PicoGraphy.",
    },
    {
      id: 5,
      title: "Sketchfab",
      url: "https://sketchfab.com/nebulousflynn/collections/cc0-9e9b8c5442ab4b59ba16b6fa5e43b8da",
      src: "./public/images/sketchfab.png",
      description: "openverse",
    },
  ];
  return <MuestraInfo infoData={infoData} />;
}

export default Tresd;
