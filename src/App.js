import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState, useRef } from "react";
import Art from "./Components/Art";
import { Scrollbar } from "smooth-scrollbar-react";
import ArtDetail from "./Components/ArtDetail";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [artworks, setArworks] = useState(null);
  const [ifURL, setIfURL] = useState("");
  const [selectedArtwork, setSelectedArtwork] = useState([]);
  const [displayImageDetail, setDisplayImageDetail] = useState(false);
  const [isInViewport, setIsInViewport] = useState(null);

  //Get data
  function getArtworks() {
    fetch("https://api.artic.edu/api/v1/artworks")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArworks(data);
        setIfURL(data.config);
      })
      .catch((err) => console.log(err));
  }

  function imageHandler(artwork, index) {
    setSelectedArtwork(artwork);
    setDisplayImageDetail(true);
  }

  function closeDetail() {
    setDisplayImageDetail(false);
  }

  function viewportHandler() {}

  //Use Effect
  useEffect(() => {
    getArtworks();
  }, []);

  return (
    <div className="App bg-yellow-50">
      <ArtDetail
        detailVisible={displayImageDetail}
        selectArtwork={selectedArtwork}
        detailClose={() => closeDetail()}
        imgData={ifURL}
      />
      <Navbar />
      <div className="container mx-auto px-4 relative min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 cursor-pointer">
          {artworks?.data.map((artwork, index) => (
            <Art
              key={artwork.id}
              artData={artwork}
              imgData={ifURL}
              detailVisible={displayImageDetail}
              rowDirection={index}
              imageTapped={() => imageHandler(artwork, index)}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
