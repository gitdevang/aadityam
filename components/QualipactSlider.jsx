// components\QualipactSlider.jsx
import React, { useEffect, useState, useRef } from "react";
import { useQualipactSlider } from "../hooks/useQualipactSlider";
import {
  LiaChevronCircleLeftSolid,
  LiaChevronCircleRightSolid,
} from "react-icons/lia";

export default function QualipactSlider({
  images,
  imageStyle = "",
  dotBefore = "bg-white",
  borderColor = "border-white",
  dotAfter = "bg-blue-800",
  swipeThreshold = 50,
}) {
  const {
    currentIndex,
    nextSlide,
    prevSlide,
    handleIndicatorClick,
    handleTouchStart,
    handleTouchEnd,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleMouseLeave,
  } = useQualipactSlider(images, swipeThreshold);

  const [isSliderClicked, setIsSliderClicked] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isSliderClicked) {
      intervalRef.current = setInterval(() => {
        nextSlide();
      }, 2500);
    }

    return () => {
      // Cleanup interval on unmount or when user interacts with slider
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isSliderClicked, currentIndex, images.length, nextSlide, prevSlide]);

  const handleUserInteraction = () => {
    setIsSliderClicked(true);
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Stop the auto sliding
    }
  };

  return (
    <div
      className={`relative w-full mx-auto overflow-hidden ${imageStyle}`}
      onTouchStart={(event) => {
        handleTouchStart(event);
        handleUserInteraction();
      }}
      onTouchEnd={(event) => {
        handleTouchEnd(event);
        handleUserInteraction();
      }}
      onClick={handleUserInteraction}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Images */}
      <div
        className="flex transition-transform duration-300"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move by 100% to show full images
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className={`object-cover rounded-lg shadow-lg ${imageStyle}`}
              style={{ width: "100%" }} // Ensures image width scales with container
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Buttons */}
          <button
            onClick={() => {
              prevSlide();
              handleUserInteraction(); // Pause auto slide when clicking prev button
            }}
            className="w-10 aspect-square absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-10 flex justify-center items-center active:scale-95 transition-all duration-100"
          >
            <LiaChevronCircleLeftSolid className="text-3xl" />
          </button>
          <button
            onClick={() => {
              nextSlide();
              handleUserInteraction(); // Pause auto slide when clicking next button
            }}
            className="w-10 aspect-square absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full z-10 flex justify-center items-center active:scale-95 transition-all duration-100"
          >
            <LiaChevronCircleRightSolid className="text-3xl" />
          </button>
        </>
      )}
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => {
              handleIndicatorClick(index);
              handleUserInteraction(); // Pause auto slide when clicking indicator
            }}
            className={`w-4 aspect-square rounded-full cursor-pointer border-4 ${borderColor} ${
              currentIndex === index ? dotAfter : dotBefore
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
