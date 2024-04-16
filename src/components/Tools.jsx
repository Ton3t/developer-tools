import MuestraInfo from "./MuestraInfo";

function Tools() {
  const infoData = [
    {
      id: 1,
      title: "Squoosh",
      url: "https://squoosh.app/",
      src: "./public/images/squosh.png",
      description:
        "Squoosh - herramienta indispensable para reducir de tamaño tus imágenes.",
    },
    {
      id: 2,
      title: "Shots",
      url: "https://shots.so/",
      src: "./public/images/shots.png",
      description: "shots - herramienta para retocar tus imágenes.",
    },
    {
      id: 3,
      title: "Layoutit Grid",
      url: "https://grid.layoutit.com/",
      src: "./public/images/layoutit-grid.png",
      description: "Herramienta para  hacer tus layouts más fácilmente.",
    },
    {
      id: 4,
      title: "Monkeytype",
      url: "https://monkeytype.com/",
      src: "./public/images/monkeytype.png",
      description: "Monkeytype.",
    },
    {
      id: 5,
      title: "Rapidapi",
      url: "https://rapidapi.com/collections",
      src: "./public/images/rapidapi.png",
      description: "openverse",
    },
    {
      id: 6,
      title: "Mockaroo",
      url: "https://www.mockaroo.com/",
      src: "./public/images/mockaroo.png",
      description: "Aplicación para generar archivos JSON en un momento. Muy útil.",
    }
  ];
  return (
    <MuestraInfo infoData={infoData} />
  );
}

export default Tools;
