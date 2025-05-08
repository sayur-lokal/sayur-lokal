import StarIcons from "@/components/Icons/StarIcons";
import { starFilledClass, starEmptyClass } from "@/lib/constants/classNames";


interface Props {
  rating: number;
  total?: number;
}

const StarRatingDisplay = ({ rating }: Props) => {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-[2px] ${starBaseClass}">
        {[...Array(5)].map((_, i) => (
          <StarIcons
          key={i}
          filled={i < rounded}
          className={i < rounded ? starFilledClass : starEmptyClass}
        />
        ))}
      </div>
      {/* {typeof total === "number" && (
        <span className="text-sm text-gray-600">({total})</span>
      )} */}
    </div>
  );
};

export default StarRatingDisplay;
