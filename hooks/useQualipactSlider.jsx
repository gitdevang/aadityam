// hooks\useQualipactSlider.jsx
import { useState, useRef } from 'react';

export function useQualipactSlider(images, swipeThreshold = 50) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartRef = useRef(null);
  const mouseStartRef = useRef(null);
  const isDraggingRef = useRef(false);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartRef.current === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStartRef.current - touchEnd > swipeThreshold) {
      nextSlide();
    } else if (touchStartRef.current - touchEnd < -swipeThreshold) {
      prevSlide();
    }
    touchStartRef.current = null;
  };

  const handleMouseDown = (e) => {
    mouseStartRef.current = e.clientX;
    isDraggingRef.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current || mouseStartRef.current === null) return;
    const mouseEnd = e.clientX;
    if (mouseStartRef.current - mouseEnd > swipeThreshold) {
      nextSlide();
      isDraggingRef.current = false;
    } else if (mouseStartRef.current - mouseEnd < -swipeThreshold) {
      prevSlide();
      isDraggingRef.current = false;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    mouseStartRef.current = null;
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    mouseStartRef.current = null;
  };

  return {
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
  };
}
