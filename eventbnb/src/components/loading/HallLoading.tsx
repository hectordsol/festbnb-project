import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HallLoading = () => {
  return (
    <section className="m-5">
      <Skeleton height={25} width={600} />
      <Skeleton height={25} width={1200} />

      <div className="flex items-center justify-between mt-2">
        <div className="">
          <Skeleton width={650} height={400} />
        </div>
        <div className="flex items-start justify-evenly flex-wrap">
          <Skeleton height={200} width={250} />
          <Skeleton height={200} width={250} />
          <Skeleton height={200} width={250} />
          <Skeleton height={200} width={250} />
        </div>
      </div>
    </section>
  );
};

export default HallLoading;
