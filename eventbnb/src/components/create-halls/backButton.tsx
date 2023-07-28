import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { FC } from "react";

interface Props {
    href: string;
}

const BackButton: FC<Props> = ({href}) => {
    return(
        <div>
            <Link className="font-semibold underline rounded-lg p-2 hover:bg-slate-100" href={href}>Atrás</Link>
        </div>
    )
}

export default BackButton;
