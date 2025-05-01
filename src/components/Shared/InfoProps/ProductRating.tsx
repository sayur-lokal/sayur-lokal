import StarRatingDisplay from "@/components/Buyer/Review/StarRatingDisplay";
import type { Review } from "@/types/review";

const ProductRating = ({ reviews }: { reviews: Review[] }) => {
  const totalReviews = reviews.length;
  const averageRating = totalReviews
    ? reviews.reduce((acc, r) => acc + r.rating, 0) / totalReviews
    : 0;

  return (
    <div className="flex items-center gap-2.5 mb-2">
      <StarRatingDisplay rating={averageRating} total={totalReviews} />
    </div>
  );
};

export default ProductRating;