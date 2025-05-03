import { reviewSchema, type Review } from "@/types/review";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReviewThunk } from "../../redux/features/thunks/reviewThunks"
import StarRatingSelector from "./StarRatingSelector";
import { AppDispatch } from "@/redux/store";

type Props = {
  productId: number;
  buyerId: number;
};

export const ReviewForm = ({ productId, buyerId }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const rawReview = {
      productId,
      buyerId,
      rating,
      comment: comment.trim() || undefined,
      createdAt: new Date().toISOString(),
    }

    const result = reviewSchema.safeParse(rawReview);

    if (!result.success) {
      alert('Invalid review—please check your rating/comment.');
      return;
    }

    
    dispatch(addReviewThunk(result.data as Review));

    setRating(0);
    setComment("");
  
  };

  return (
    <div className="rounded-xl bg-white shadow-1 p-4 sm:p-6">
      <h2 className="font-medium text-2xl text-dark mb-4">Leave a Review</h2>

      <div className="mb-4">
        <StarRatingSelector rating={rating} onChange={setRating} />
      </div>

      <textarea
        className="w-full border border-gray-200 rounded-lg p-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder="Write your comment (optional)"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={handleSubmit}
        className="mt-4 bg-primary text-white px-5 py-2 rounded-lg font-medium hover:bg-primary-dark transition"
      >
        Submit Review
      </button>
    </div>
  );
};
