import StarIcons from "@/components/Icons/StarIcons";
// import { starBaseClass } from "@/lib/constants/classNames";


interface Props {
  rating: number;
  total?: number;
}

const StarRatingDisplay = ({ rating }: Props) => {
  const rounded = Math.round(rating);

  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-[2px]">
        {[...Array(5)].map((_, i) => (
          <StarIcons
          key={i}
          filled={i < rounded}
          // className={starBaseClass}
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
