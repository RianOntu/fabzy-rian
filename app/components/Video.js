"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    axios
      .get(`https://glore-bd-backend-node-mongo.vercel.app/api/product`)
      .then((data) => setVideoUrl(data?.data?.data[0]?.video.secure_url))
      .catch((error) => console.error("Error fetching video URL:", error));
  }, [videoUrl]);

  return (
    <div className="relative w-full h-[400px] flex items-center justify-center text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center w-[80%] h-[455px] mx-auto top-[6%]"
        style={{
          backgroundImage: `url('/women.jpg')`, // Replace with your actual thumbnail image
          backgroundPosition: "top center",
          filter: "brightness(60%)",
        }}
      ></div>

      {/* Text Overlay */}
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* Play Button */}
        <div className="relative w-16 h-16 cursor-pointer">
          <div
            className="absolute flex items-center justify-center w-full h-full bg-white text-black rounded-full shadow-lg transition hover:scale-110 transform-origin-center"
            onClick={() => setIsOpen(true)}
          >
            <FaPlay className="text-2xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold mt-5">FASHION FOR ALL ERA</h2>
        <p className="text-lg mt-4">
          Clothes mean nothing until someone lives in them!!!
        </p>
      </div>

      {/* Video Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative w-[80%] max-w-4xl">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>
            {videoUrl && (
              <iframe
                key={videoUrl}
                className="w-full h-[500px] rounded-lg"
                src={videoUrl}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Fashion Video"
                muted
                sandbox="allow-scripts allow-same-origin" // Add this if needed
              ></iframe>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
