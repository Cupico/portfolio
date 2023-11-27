const ProjetCard = ({
  order_img,
  order_text,
  ref,
  img_path,
  job,
  company,
  date,
  description1,
  description2,
  href
}) => {
  return (
    <div className="h-full w-full ">
      <div ref={ref} className=" grid grid-cols-1 lg:grid-cols-5 rounded-lg">
        <div className={`order-2 ${order_img} lg:col-span-2 relative`}>
          <div className={`h-fit w-fit relative`}>
          <a href={href} target="_blank"
                rel="noreferrer">
            <div className="hover:scale-105 transition-all duration-200 cursor-pointer before:block before:transition-all before:duration-200 before:hover:opacity-0 before:top-0 before:left-0 before:right-0 before:bottom-0 before:z-[99] before:absolute before:content-[''] before:bg-blue-500 before:w-full before:h-full before:opacity-40 before:rounded-lg">
            
              <img
                src={require(`../../../assets/images/${img_path}`)}
                className="rounded-lg shadow-xl"
                alt="welease"
              />

            </div>
            </a>
          </div>
        </div>
        <div
          className={`order-1 ${order_text} min-[1400px]:h-fit flex items-center justify-center h-full pt-6 lg:pt-0 pb-6 px-0 lg:px-6 relative lg:col-span-3 rounded-lg`}
        >
          <div className=" w-full h-fit my-auto">
            <div className="flex flex-wrap items-center mb-2">
              <h2 className="text-blue-500 text-lg mr-2">{job}</h2>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="text-white text-md font-custom"
              >
                @ {company}
              </a>
            </div>
            <p className="text-white text-xs">{date}</p>
            <div className="text-white mt-4">
              <p className="">{description1}</p>
              <br />
              <p>{description2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetCard;
