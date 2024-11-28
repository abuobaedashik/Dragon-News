import React, { useState, useEffect } from "react";
import Vcategory from "../Components/Vcategory";
import Videosec from "../Components/Videosec";
import VModal from "../Components/VModal";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Footer from "./Footer";

function VideoPage() {
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    // Load categories and videos on component mount
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((err) => console.error("Error loading categories", err));

    fetch("https://openapi.programming-hero.com/api/phero-tube/videos?title=")
      .then((res) => res.json())
      .then((data) => setVideos(data.videos))
      .catch((err) => console.error("Error loading videos", err));
  }, []);

  const loadCategoryVideos = (categoryId) => {
    setSelectedCategory(categoryId);
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${categoryId}`)
      .then((res) => res.json())
      .then((data) => setVideos(data.category))
      .catch((err) => console.error("Error loading category videos", err));
  };

  const loadVideoDetails = (videoId) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`)
      .then((res) => res.json())
      .then((data) => setModalContent(data.video))
      .catch((err) => console.error("Error loading video details", err));
  };

  return (
    <div className="App">
      {/* <Header /> */}
      <Header></Header>
       <Navbar></Navbar>
      <Vcategory
        categories={categories}
        loadCategoryVideos={loadCategoryVideos}
        selectedCategory={selectedCategory}
      />
      <Videosec videos={videos} loadVideoDetails={loadVideoDetails} />
      {modalContent && (
        <VModal
          video={modalContent}
          onClose={() => setModalContent(null)}
        />
      )}
      <div className="footer mt-5">
          <Footer></Footer>
      </div>
    </div>
  );
}

export default VideoPage;
