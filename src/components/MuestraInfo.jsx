
function MuestraInfo({infoData}) {
  return (
    <section className="flex flex-wrap justify-center w-[1200px]">
      {infoData.map((info) => (
        <div
          key={info.id}
          className="m-2 w-[280px] h-64 flex flex-wrap overflow-auto items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
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
  )
}

export default MuestraInfo