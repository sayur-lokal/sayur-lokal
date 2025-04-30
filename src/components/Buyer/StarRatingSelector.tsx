export const StarRatingSelector = ({
    rating,
    onChange,
  }: {
    rating: number;
    onChange: (value: number) => void;
  }) => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          onClick={() => onChange(i + 1)}
          className={`cursor-pointer text-2xl ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
  