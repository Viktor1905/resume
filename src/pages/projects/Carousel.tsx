import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Carousel({ media }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    setCurrentSlide(0);
  }, [media]);
  const next = () => setCurrentSlide((prev) => (prev + 1) % media.length);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + media.length) % media.length);

  return (
    <div className="relative w-full mx-auto flex overflow-hidden aspect-[16/9]">
      <motion.div
        className="flex"
        transition={{ type: "spring", stiffness: 200, damping: 30 }}
        animate={{ x: `-${currentSlide * 100}%` }}
      >
        {media.map((item) => (
          <div key={item} className="w-full flex-shrink-0 overflow-hidden">
            {item.endsWith(".mp4") ? (
              <video
                src={buildMediaPath("video", item)}
                autoPlay
                loop
                controls
                muted
                className="w-full rounded-lg object-contain h-full"
              />
            ) : (
              <img
                src={buildMediaPath("screenshots", item)}
                alt=""
                className=" block w-full rounded-lg object-contain h-full"
              />
            )}
          </div>
        ))}
      </motion.div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-0 -translate-y-1/2 px-2 py-1 !bg-black/50 text-white rounded-r"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-0 -translate-y-1/2 px-2 py-1 !bg-black/50 text-white rounded-l"
      >
        ▶
      </button>
    </div>
  );
}

interface CarouselProps {
  media: string[];
}

function buildMediaPath(format: string, filename: string) {
  return `/assets/${format}/${filename}`;
}
