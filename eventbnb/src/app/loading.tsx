import CardLoading from "../components/loading/CardLoading";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Loading() {
  return (
    <main className="mx-4">
      <section>
        <div className="flex items-center justify-center mt-2">
          <Skeleton width={350} height={50} />
        </div>
        <div className="flex items-center justify-center flex-wrap gap-5 p-8">
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
          <CardLoading />
        </div>
      </section>
    </main>
  );
}
