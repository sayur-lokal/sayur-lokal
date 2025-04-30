import type { Review } from "@/types/review";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReview } from "../../redux/features/review-slice"
import { StarRatingSelector } from "../../components/Buyer/StarRatingSelector";

type Props = {
  productId: string;
  userId: number;
};

export const ReviewForm = ({ productId, userId }: Props) => {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }

    const review: Review = {
      productId,
      userId: userId.toString(),
      rating,
      comment,
      createdAt: new Date().toISOString(),
    };

    dispatch(addReview(review));
    setRating(0);
    setComment("");
    alert("Review submitted!");
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
