"use client";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const split = Math.ceil(images.length / 2);

  const firstPart = images.slice(0, split);
  const secondPart = images.slice(split);

  return (
    <div
      className={cn(
        "h-160 w-full items-start overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        className,
      )}
      ref={gridRef}
    >
      <div
        className="mx-auto grid grid-cols-2 items-start gap-4 pt-4 sm:gap-6 md:gap-10"
      >
        <div className="grid gap-4 sm:gap-6 md:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="m-0! h-80 w-full gap-10 rounded-lg object-cover object-top-left p-0!"
                height="400"
                width="400"
                alt={`Art image ${idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6 md:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <img
                src={el}
                className="m-0! h-80 w-full gap-10 rounded-lg object-cover object-top-left p-0!"
                height="400"
                width="400"
                alt={`Art image ${split + idx + 1}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
