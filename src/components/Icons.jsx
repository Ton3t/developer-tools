function Icons() {
    const iconsInfo = [
      {
        id: 1,
        title: "Iconify",
        url: "https://icon-sets.iconify.design/",
        src: "../../public/images/iconify.png",
      },
      
    ];
  
    return (
      <div>
        {iconsInfo.map((icon) => (
          <div key={icon.id}>
            <img src={icon.src} alt={icon.title} />
            <a href={icon.url}>{icon.title}</a>
          </div>
        ))}
      </div>
    );
  }
  
  export default Icons;