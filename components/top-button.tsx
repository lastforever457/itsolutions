"use client";

import { observer } from "mobx-react-lite";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";

const TopButton = observer(() => {
    return (
        <>
            <Link href={""}>
                <button
                    className={
                        "fixed bottom-2 right-2 flex justify-center items-center w-[50px] h-[50px] float-right bg-white shadow-xl text-xl rounded-[120px] text-center"
                    }
                >
                    <FaArrowUp />
                </button>
            </Link>
        </>
    );
});

export default TopButton;
