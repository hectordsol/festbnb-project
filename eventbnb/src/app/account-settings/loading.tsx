import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <section className="mx-4">
      <Skeleton className="flex items-center" height={30} width={800} />
      <div className="flex items-center justify-center flex-wrap gap-5 p-4">
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
        <Skeleton width={250} height={150} />
      </div>
    </section>
  );
}
