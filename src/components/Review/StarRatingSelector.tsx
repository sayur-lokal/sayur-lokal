"use client"
import StarIcons from "@/components/Icons/StarIcons";
import { useState } from "react";
// import { starBaseClass } from "@/lib/constants/classNames";

interface Props {
  rating: number;
  onChange: (rating: number) => void;
}


const StarRatingSelector = ({ rating, onChange }: Props) => {
  const [hovered, setHovered] = useState<number | null>(null);

    return (
      <div className="flex gap-[2px]">
        {[...Array(5)].map((_, i) => {
            const starIndex = i + 1;
            const isFilled = hovered !== null ? starIndex <= hovered : starIndex <= rating;
    
            return (
              <button
                key={i}
                type="button"
                onClick={() => onChange(starIndex)}
                onMouseEnter={() => setHovered(starIndex)}
                onMouseLeave={() => setHovered(null)}
                className="p-1 hover:scale-110 transition-transform focus:outline-none"
                aria-label={`Rate ${starIndex} star${starIndex > 1 ? "s" : ""}`}
                aria-pressed={rating === starIndex}
              >
                <StarIcons filled={isFilled} />
              </button>
            );
          })}
        </div>
      );
    };

export default StarRatingSelector;
