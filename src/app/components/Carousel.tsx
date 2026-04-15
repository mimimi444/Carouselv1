import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import imgRectangle1 from "figma:asset/ece298d0ec2c16f10310d45724b276a6035cb503.png";
import imgRectangle2 from "figma:asset/dc74b94f54e405be185afe3930fd6fd64e2805c1.png";
import imgRectangle3 from "figma:asset/81d74dbd707174a937ad2be49e8f09e5582c7c58.png";
import imgRectangle4 from "figma:asset/6de6f5573adee951cc4ec1849065f27c4936bdb7.png";

const slides = [
  { id: 1, image: imgRectangle3 },
  { id: 2, image: imgRectangle2 },
  { id: 3, image: imgRectangle4 },
  { id: 4, image: imgRectangle3 },
  { id: 5, image: imgRectangle2 },
];

function Card({
  image,
  size,
  rotation,
  opacity,
  zIndex,
  translateX,
}: {
  image: string;
  size: number;
  rotation: number;
  opacity: number;
  zIndex: number;
  translateX: number;
}) {
  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-500 ease-in-out"
      style={{
        width: size,
        height: size,
        transform: `translate(-50%, -50%) translateX(${translateX}px) rotate(${rotation}deg)`,
        opacity,
        zIndex,
      }}
    >
      <div className="pointer-events-none relative rounded-[56px] size-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[56px]">
          <img
            alt=""
            className="absolute max-w-none object-cover rounded-[56px] size-full"
            src={imgRectangle1}
          />
          <img
            alt=""
            className="absolute max-w-none object-cover rounded-[56px] size-full"
            src={image}
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute border-8 border-black border-solid inset-0 rounded-[56px] shadow-[0px_24px_0px_0px_black]"
        />
      </div>
    </div>
  );
}

export function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + slides.length) % slides.length);
  const next = () =>
    setCurrentIndex((i) => (i + 1) % slides.length);

  const getSlideProps = (offset: number) => {
    // Normalize offset to [-2, 2] range for 5 slides
    let o = offset;
    if (o > 2) o -= slides.length;
    if (o < -2) o += slides.length;

    if (o === 0)
      return { size: 670, rotation: 0, opacity: 1, zIndex: 10, translateX: 0 };
    if (o === -1)
      return { size: 596, rotation: -5.85, opacity: 0.7, zIndex: 5, translateX: -620 };
    if (o === 1)
      return { size: 596, rotation: 5.85, opacity: 0.7, zIndex: 5, translateX: 620 };
    if (o === -2)
      return { size: 520, rotation: -8, opacity: 0, zIndex: 1, translateX: -1100 };
    if (o === 2)
      return { size: 520, rotation: 8, opacity: 0, zIndex: 1, translateX: 1100 };
    return { size: 520, rotation: 0, opacity: 0, zIndex: 0, translateX: 0 };
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto" style={{ height: 800 }}>
      <div className="relative size-full overflow-hidden">
        {slides.map((slide, index) => {
          const offset = index - currentIndex;
          const props = getSlideProps(offset);
          return (
            <Card key={slide.id} image={slide.image} {...props} />
          );
        })}
      </div>

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  );
}