import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const HostingLoading = () => {
  return (
    <section className="text-black bg-white w-full px-6 md:px-24 flex flex-col gap-y-6 md:gap-y-16">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-8 gap-y-4">
        <h3 className="text-xl md:text-3xl font-semibold text-center">
          <Skeleton width={200} />
        </h3>
        <div className="text-sm md:text-lg border border-black rounded-lg px-2 md:px-4 py-1 font-medium hover:bg-slate-100">
          <Skeleton width={120} height={24} />
        </div>
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-3xl font-semibold">
            <Skeleton width={200} />
          </h3>
          <div className="text-sm md:text-lg underline font-semibold">
            <Skeleton width={180} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-x-4 flex-wrap gap-y-4">
          <button className="border rounded-full mr-2 px-2 py-1 hover:border-black">
            <Skeleton width={200} />
          </button>
          <button className="border rounded-full mr-2 px-2 py-1 hover:border-black">
            <Skeleton width={200} />
          </button>
          <button className="border rounded-full mr-2 px-2 py-1 hover:border-black">
            <Skeleton width={200} />
          </button>
          <button className="border rounded-full mr-2 px-2 py-1 hover:border-black">
            <Skeleton width={200} />
          </button>
          <button className="border rounded-full mr-2 px-2 py-1 hover:border-black">
            <Skeleton width={200} />
          </button>
        </div>
      </div>
      <div className="rounded-lg bg-slate-100 py-12">
        <div className="flex flex-col items-center justify-center gap-y-8">
          <Skeleton width={250} height={32} />
        </div>
      </div>
      <div className="flex flex-col gap-y-8">
        <h3 className="text-3xl font-semibold">
          <Skeleton width={200} />
        </h3>
        <div className="flex flex-col md:flex-row items-center gap-x-6 gap-y-4">
          <div className="flex items-start gap-x-4 border rounded-lg w-full md:w-1/2 xl:w-[40%] px-4 py-2">
            <Skeleton circle={true} height={64} width={64} />
            <div>
              <h4 className="font-semibold text-lg">
                <Skeleton width={120} />
              </h4>
              <p className="text-slate-600">
                <Skeleton width={200} />
              </p>
            </div>
          </div>
          <div className="flex items-start gap-x-4 border rounded-lg w-full md:w-1/2 xl:w-[40%] px-4 py-2">
            <Skeleton circle={true} height={64} width={64} />
            <div>
              <h4 className="font-semibold text-lg">
                <Skeleton width={120} />
              </h4>
              <p className="text-slate-600">
                <Skeleton width={200} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingLoading;
