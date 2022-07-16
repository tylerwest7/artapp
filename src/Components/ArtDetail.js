import React from "react";

export default function ArtDetail(props) {
  const extURL = "/full/843,/0/default.jpg";

  const imageLink =
    props?.imgData.iiif_url + "/" + props?.selectArtwork.image_id + extURL;

  var divStyle = {
    backgroundImage: `url(${imageLink})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  console.log(props.selectArtwork);

  //console.log(`From component => ${imageLink}`);

  return (
    <div
      className={
        props.detailVisible
          ? "visible fixed h-screen w-screen z-10"
          : "invisible fixed h-screen w-screen z-10"
      }
    >
      <div className="flex flex-wrap justify-center items-center h-full">
        <div className="z-10 relative">
          <div className="h-96 w-96 bg-cover mx-auto overflow-hidden">
            <div
              className={
                props.detailVisible
                  ? "h-full w-full transform delay-100 duration-300 ease-out -translate-x-0 relative z-1"
                  : "h-full w-full transform delay-100 duration-300 ease-out -translate-x-96 relative z-1"
              }
              style={divStyle}
            >
              <div className="bg-white h-10 w-10 relative z-10 flex items-center justify-center float-right">
                <button onClick={props.detailClose}>
                  <div className="rotate-45 text-2xl">+</div>
                </button>
              </div>
            </div>
          </div>
          <h1 className="text-white text-center text-4xl pt-10">
            {props?.selectArtwork.title}
          </h1>
          <h3 className="text-gray-300 text-center text-white text-md pt-4">
            {props?.selectArtwork.date_display}
          </h3>
          <h3 className="text-gray-300 text-center text-white text-md pt-4">
            {props?.selectArtwork.artist_title}
          </h3>
          <h3 className="text-gray-300 text-center text-white text-md pt-4">
            {props?.selectArtwork.medium_display}
          </h3>
          <h3 className="text-gray-300 text-center text-white text-md pt-4">
            {props?.selectArtwork.artwork_type_title}
          </h3>
        </div>
      </div>
      <div
        onClick={props.detailClose}
        className={
          props.detailVisible
            ? "absolute inset-0 h-full w-full bg-black opacity-80 transform duration-200 ease-out"
            : "absolute inset-0 h-full w-full bg-black opacity-0 transform duration-200 ease-out"
        }
      ></div>
    </div>
  );
}
