import MuestraInfo from "./MuestraInfo";

function Collections() {
  const infoData = [
   {
    id: 1,
    title: "Curated Design",
    url: "https://www.curated.design/",
    src: "./public/images/curated-design.png",
    description: "Curated Design",
   },
   {
    id: 2,
    title: "Godly Website",
    url: "https://godly.website/",
    src: "./public/images/godly-website.png",
    description: "Godly Website",
   },
   {
    id: 3,
    title: "Landbook",
    url: "https://land-book.com/",
    src: "./public/images/landbook.png",
    description: "Landbook",
   },
   {
    id: 4,
    title: "bentogrids",
    url: "https://bentogrids.com/",
    src: "./public/images/bentogrids.png",
    description: "bentogrids",
   },
   {
    id: 5,
    title: "unsection",
    url: "https://www.unsection.com/",
    src: "./public/images/unsection.png",
    description: "unsection",
   }
  ];

  return (
   <MuestraInfo key={infoData.id} infoData={infoData} />
  );
}

export default Collections;
