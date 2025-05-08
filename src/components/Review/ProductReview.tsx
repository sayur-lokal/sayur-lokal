import { Product } from "@/types/product";
import { useAppSelector } from "@/redux/store";
import StarRatingDisplay from "./StarRatingDisplay"
import { ReviewForm } from "./ReviewForm"

type Props = {
  product: Product;
};

export const ProductReview = ({ product }: Props) => {
  const user = useAppSelector((state) => state.currentuser.user); // or wherever your user comes from
  const productId = product.id;

  const reviews = product.reviews || [];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-dark mb-4">Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet.</p>
        ) : (
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li key={index} className="border-b pb-4">
                <StarRatingDisplay rating={review.rating} />
                <p className="text-sm text-gray-700 mt-1">{review.comment}</p>
                <p className="text-xs text-gray-400 mt-1">{review.createdAt ? new Date(review.createdAt).toLocaleString(): 'N/A'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {user?.id ? (
        <ReviewForm productId={product.id} buyerId={user.id} />
      ) : (
        <p className="text-sm text-gray-500 italic">Please log in to leave a review.</p>
      )}
    </div>
  );
};
