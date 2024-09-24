"use client";

import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useState } from "react";
import { AiFillPhone } from "react-icons/ai";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const MainHeader = observer(() => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            style={{
                background: "rgba(0,0,0,0.3)",
                backdropFilter: "blur(15px)",
            }}
            className={`w-[100%] text-white fixed top-0 z-50 transition-all duration-300`}
        >
            <div
                className={`px-5 md:px-10 lg:px-20 flex items-center justify-between py-7`}
            >
                <div className={"flex items-center gap-2"}>
                    <h3 className="text-lg font-bold sm:text-xl">
                        Cloud Solutions It Academy
                    </h3>
                </div>

                <div className={"flex items-center gap-4 sm:hidden"}>
                    {menuOpen ? (
                        <MdClose
                            className="text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <FaBars
                            className="text-2xl cursor-pointer"
                            onClick={toggleMenu}
                        />
                    )}
                    <AiFillPhone
                        onClick={() => {
                            if (typeof window !== "undefined") {
                                window.location.href = "tel:+998 90 351 72 61";
                            }
                        }}
                        className="text-2xl cursor-pointer"
                    />
                </div>

                <div className={"hidden sm:flex items-center gap-10"}>
                    <h3
                        className={
                            "hover:text-blue-400 cursor-pointer transition-all duration-300"
                        }
                    >
                        <Link href="/">Главное меню</Link>
                    </h3>
                    <Link href="/academy-interesded">
                        <h3
                            className={
                                "hover:text-blue-400 cursor-pointer transition-all duration-300"
                            }
                        >
                            Кто мы
                        </h3>
                    </Link>
                    <h3
                        className={
                            "hover:text-blue-400 cursor-pointer transition-all duration-300"
                        }
                    >
                        <Link href="/#trust">Нам доверяют</Link>
                    </h3>
                    <Link href="/#portfolio">
                        <h3
                            className={
                                "hover:text-blue-400 cursor-pointer transition-all duration-300"
                            }
                        >
                            Портфолио
                        </h3>
                    </Link>
                    <h3
                        className={
                            "hover:text-blue-400 cursor-pointer transition-all duration-300"
                        }
                    >
                        <Link href="/#services">Наши услуги</Link>
                    </h3>
                    <h3
                        className={
                            "hover:text-blue-400 cursor-pointer transition-all duration-300"
                        }
                    >
                        <Link href="/#contacts">Контакты</Link>
                    </h3>
                    <div
                        className={
                            "bg-green-600 py-1 px-1 rounded-xl cursor-pointer"
                        }
                    >
                        <AiFillPhone
                            onClick={() => {
                                if (typeof window !== "undefined") {
                                    window.location.href =
                                        "tel:+998 90 351 72 61";
                                }
                            }}
                        />
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="sm:hidden bg-black text-white w-[100%] h-screen text-center px-4 py-4 space-y-6 flex flex-col items-center justify-center">
                    <div className="space-y-3">
                        <h3
                            className={
                                "hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <Link href="/">
                                <span className="text-3xl relative hover:border-2-yellow-400 font-bold">
                                    Главное меню
                                </span>
                            </Link>
                        </h3>
                        <Link href="/academy-interesded" onClick={closeMenu}>
                            <h3
                                className={
                                    "mt-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                                }
                            >
                                <span className="relative font-bold text-3xl">
                                    Кто мы
                                </span>
                            </h3>
                        </Link>
                        <h3
                            className={
                                " hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <Link href="/#trust">
                                <span className="relative text-3xl font-bold">
                                    Нам доверяют
                                </span>
                            </Link>
                        </h3>
                        <h3
                            className={
                                " hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <Link href="/#services">
                                <span className={"font-bold text-3xl"}>
                                    Наши услуги
                                </span>
                            </Link>
                        </h3>
                        <h3
                            className={
                                " hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                            onClick={closeMenu}
                        >
                            <Link href="/#contacts">
                                <span className={"font-bold text-3xl"}>
                                    Контакты
                                </span>
                            </Link>
                        </h3>
                        <h3
                            className={
                                "mt-2 hover:cursor-pointer transition-all duration-300 transform hover:scale-105 hover:border-b-4 hover:border-yellow-400 text-[16px]"
                            }
                        >
                            <Link href="/#portfolio" onClick={closeMenu}>
                                <span className="relative font-bold text-3xl">
                                    Портфолио
                                </span>
                            </Link>
                        </h3>
                    </div>
                    <h2
                        className={
                            "text-4xl text-center text-amber-400 font-bold pt-40"
                        }
                    >
                        Мы заботимся о ваших ИТ-целях!
                    </h2>
                </div>
            )}
        </header>
    );
});

export default MainHeader;
