import Image from "next/image";
import { FC } from "react";

interface Props {
  title: string;
  subtitle: string;
  description: string;
}

const Passed: FC<Props> = ({ title, subtitle, description }) => {
  return (
    <section className="m-auto px-32 py-12 flex items-center gap-x-12">
      <div className="w-1/2 flex flex-col items-start gap-y-4">
        <span className="font-semibold">{title}</span>
        <h3 className="font-semibold text-5xl">{subtitle}</h3>
        <p className="text-xl">{description}</p>
      </div>
      <Image
        width={250}
        height={250}
        className="w-1/2"
        src="https://i.postimg.cc/1RTs6ymh/1240776-144335-OTQR7-A-840.png"
        alt="salón de fiestas"
      />
      
    </section>
  );
};
export default Passed;
