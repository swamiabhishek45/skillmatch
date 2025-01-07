import React from "react";
import { Link } from "react-router-dom";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import PeerList from "../assets/peerlist.svg";

export default function LandingPage() {
    const words = [
        {
            text: "remotely",
            className: "text-purple-500 dark:text-purple-500",
        },
    ];
    return (
        <div className="px-4 md:px-0 mt-14">
            {/* Peerlist Tag */}
            <Link
                to="https://peerlist.io/kashyap1ankit/project/job-junction"
                aria-label="peerlist-tag"
                target="_blank"
            >
                <img
                    src={PeerList}
                    width={400}
                    height={400}
                    alt="Peerlist Logo"
                    className="mx-auto mb-4 w-24 md:w-32"
                />
            </Link>

            {/* Heading Section */}
            <div className="flex flex-col items-center gap-4">
                <p
                    className={`roboto-slab w-11/12 text-center text-3xl text-white sm:text-4xl md:text-5xl lg:w-3/4 lg:text-6xl xl:text-7xl`}
                >
                    Want to work remotely? then find jobs on{" "}
                    <span className="inline-block ">
                        <TypewriterEffectSmooth words={words} />
                    </span>
                </p>
                <p className="poppins md:text-md w-full text-center text-xs text-gray-400 sm:w-1/2 lg:text-lg">
                    Whether you&apos;re looking for your next career move or you
                    know a great opportunity for others, Job Junction is the
                    place to be.
                </p>
            </div>

            {/* Buttons Section */}
            <div className="mt-12 flex w-full flex-col justify-center gap-6 sm:flex-row">
                <Link
                    to="/jobs"
                    className="work-sans md:text-md cursor-pointer rounded-lg bg-primarySkyBlue px-6 py-3 text-center text-sm font-medium text-white shadow-md bg-purple-700 focus:ring-2 focus:ring-offset-2 focus:ring-primarySkyBlue transition-transform transform hover:scale-105 active:scale-95"
                    aria-label="Explore Careers"
                >
                    Explore Careers
                </Link>

                <Link
                    to="/#testimonal"
                    className="work-sans md:text-md z-30 cursor-pointer rounded-lg bg-gray-800 px-6 py-3 text-center text-sm font-medium text-gray-300 shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-transform transform hover:scale-105 active:scale-95"
                    aria-label="Success Stories"
                >
                    Success Stories
                </Link>
            </div>
        </div>
    );
}
