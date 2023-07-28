import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardLoading = () => {
  return (
    <div>
      <div className="">
        <Skeleton width={250} height={200} />
      </div>
      <div className="mt-3 pb-4 px-6">
        <div>
          <Skeleton height={24} width={200} />
          <Skeleton height={18} width={100} />
          <Skeleton height={24} width={200} />
          <Skeleton height={18} width={100} />
        </div>
      </div>
    </div>
  );
};

export default CardLoading;
