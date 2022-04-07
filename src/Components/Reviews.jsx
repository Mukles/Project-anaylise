import { useFetchData } from "../hook/fetchingData";
import ReviewList from "./ReviewList";

const Reviews = () => {
  const [data] = useFetchData();

  return (
    <div className="reviews w-1/2 mx-auto  flex flex-col justify-center items-center space-y-3">
      <h1 className="text-xl font-bold text-center">What our customer says?</h1>
      {data.map((Reviews) => (
        <ReviewList key={Reviews.id} {...Reviews} />
      ))}
    </div>
  );
};

export default Reviews;
