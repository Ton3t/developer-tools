
function Tresd() {

    const tresD = [
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
           description: "KenneY - Thousand of completely free game assetes for you to use.",
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
        }
       ];
    return (
        <section className="flex flex-wrap justify-center">
          {tresD.map((info) => (
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

export default Tresd