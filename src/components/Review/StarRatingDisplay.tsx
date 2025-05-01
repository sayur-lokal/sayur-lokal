import StarIcon from "@/components/Icons/StarIcon";
import { starBaseClass } from "@/lib/constants/classNames";


interface Props {
  rating: number;
  total?: number;
}

const StarRatingDisplay = ({ rating, total }: Props) => {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
          key={i}
          filled={i < rounded}
          className={starBaseClass}
        />
        ))}
      </div>
      {typeof total === "number" && (
        <span className="text-sm text-gray-600">({total})</span>
      )}
    </div>
  );
};

export default StarRatingDisplay;
