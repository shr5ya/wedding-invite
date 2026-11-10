
"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HomeAdress() {
    const sectionRef = useRef<HTMLElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentEl = sectionRef.current;

        if (currentEl) {
            observer.observe(currentEl);
        }

        return () => {
            if (currentEl) {
                observer.unobserve(currentEl);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="w-full px-4 py-4 flex flex-col items-center select-none"
        >
            <div
                className={`w-full max-w-[390px] pb-20 p-4 flex flex-col items-center text-center transition-all duration-700 ease-out transform ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-5 opacity-0"
                }`}
            >
                {/* RSVP */}
                <div className="mt-6 pt-4 text-center">

                    <h3 className="font-serif text-2xl text-stone-900 mb-1">
                        R.S.V.P
                    </h3>

                    <p className="text-sm text-stone-800 mb-3">
                        All Chawla Family
                    </p>

                    <div className="flex flex-col items-center gap-2 text-xs text-zinc-900">
                        {["9416680177", "7404553557", "9992281968"].map((number) => (
                            <a
                                key={number}
                                href={`tel:${number}`}
                                className="hover:text-black transition-colors tracking-wider"
                            >
                                M. &nbsp; {number}
                            </a>
                        ))}
                    </div>

                    <p className="font-serif italic text-sm text-stone-400 mt-4">
                        Your presence would mean the world to us ♡
                    </p>

                </div>
            </div>
        </section>
    );
}
