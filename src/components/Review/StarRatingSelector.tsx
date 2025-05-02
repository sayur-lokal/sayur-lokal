import StarIcon from "@/components/Icons/StarIcon";
import { starBaseClass } from "@/lib/constants/classNames";

interface Props {
  rating: number;
  onChange: (rating: number) => void;
}


const StarRatingSelector = ({ rating, onChange }: Props) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <button
            type="button"
            key={i}
            onClick={() => onChange(i + 1)}
            className="focus:outline-none"
            aria-label={`Rate ${i + 1} star${i > 0 ? "s" : ""}`}
          >
            <StarIcon
               filled={i < rating}
               className={starBaseClass}
            />
          </button>
        ))}
      </div>
    );
  };

export default StarRatingSelector;
