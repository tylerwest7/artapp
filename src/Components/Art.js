import { React, useEffect, useRef, useState } from "react";

export default function Art(props) {
  const [rowDirection, setRowDirection] = useState(false);
  const [visible, setIsVisible] = useState();

  const targetRef = useRef();

  const extURL = "/full/843,/0/default.jpg";

  const imageLink =
    props.imgData?.iiif_url + "/" + props.artData.image_id + extURL;

  var divStyle = {
    backgroundImage: `url(${imageLink})`,
    backgroundColor: "black",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
      //console.log("entry", entry);
    });
    observer.observe(targetRef.current);

    if (props.rowDirection % 2 === 0) {
      setRowDirection(true);
    } else {
      setRowDirection(false);
    }
  }, []);

  return (
    <div>
      <div
        className={
          visible
            ? "container w-auto grid grid-cols-2 gap-12 transition-all duration-500 translate-y-0 opacity-100 ease-in-out"
            : "container w-auto grid grid-cols-2 gap-12 transition-all duration-500 translate-y-16 opacity-0 ease-in-out"
        }
      >
        <div
          onClick={props.imageTapped}
          className={
            rowDirection
              ? "max-h-screen min-h-screen w-full order-1 py-11"
              : "max-h-screen min-h-screen w-full order-2 py-11"
          }
        >
          <div className="w-full h-full" style={divStyle}></div>
        </div>
        <div
          className={
            rowDirection
              ? "flex flex-wrap items-center order-2"
              : "flex flex-wrap items-center order-1"
          }
        >
          <div className="text-container">
            {/* <h3>{visible ? "Yes" : "No"}</h3> */}
            <h1 ref={targetRef} className="w-full md:text-5xl sm:text-1xl">
              {props.artData.title}
            </h1>
            <h2 className="w-full text-lg py-7">
              {props.artData.artist_title}
            </h2>
            <a target="_blank" rel="noopener noreferrer" href={imageLink}>
              <button className="rounded border border-black p-2">
                View full image
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
