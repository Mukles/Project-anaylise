const ReviewList = ({ img, name, content }) => {
  return (
    <div className="flex justify-between space-x-4 shadow-lg rounded items-center py-3 px-3 w-full">
      <img
        className="rounded-full object-cotaine  h-28 w-28"
        src={img}
        alt=""
        srcSet=""
      />
      <div className="content">
        <div className="name text-xl font-bold">{name}</div>
        <p className="text-sm font-semibold">{content}</p>
      </div>
    </div>
  );
};

export default ReviewList;
