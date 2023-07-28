import Link from "next/link";
import { FC } from "react";


interface Props {
  href: string;
  content: string;
  backBtn: boolean;
}

const ButtonHalls: FC<Props> = ({ href, content, backBtn }) => {
  if (!backBtn) {
    return (
        <Link
          className={`bg-pink-700 px-6 py-2 text-white rounded-md font-semibold`}
          href={href}
        >
          {content}
        </Link>
    );
  } else {
    return (
        <Link
        className={`bg-black/90 hover:bg-black px-6 py-3 rounded-md text-white font-semibold` }
        href={href}
        >
        {content}
        </Link>
    );
  }
};

export default ButtonHalls;
