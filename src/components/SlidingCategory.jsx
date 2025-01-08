// import { BACKEND_STACKS, FRONTEND_STACKS } from "@/constants/stacks";
import React from "react";
import Marquee from "react-fast-marquee";

const SlidingCategory = () => {
    const stack1 = [
        "Software Development",
        "Design ",
        "Frontend Development",
        "Backend Development",
        "Mobile Development",
        "Web Development",
        "Game Development",
        "Machine Learning",
        "Artificial Intelligence",
    ];
    
    const stack2 = [
        "Data Science",
        "Cloud Computing",
        "Cyber Security",
        "DevOps",
        "Blockchain",
        "Internet of Things",
        "Augmented Reality",
        "Virtual Reality",
        "Quantum Computing",
    ];
    return (
        <section aria-label="skills" className="my-4 space-y-8 mt-20">
            

            <div className="space-y-6 w-full">
                <Marquee autoFill pauseOnHover speed={20}>
                    <CategoryList stacks={stack1} />
                </Marquee>

                <Marquee autoFill pauseOnHover direction="right" speed={20}>
                    <CategoryList stacks={stack2} />
                </Marquee>
            </div>
        </section>
    );
};

export default SlidingCategory;

const CategoryList = ({stacks}) => {
    
    return (
        <ul className="flex items-center" role="list">
            {stacks.map((stack, index) => {
                // const Icon = stacks[stack].Icon;
                // const className = stacks[stack].className;
                return (
                    <li
                        role="listitem"
                        key={index}
                        className="mr-2 flex w-max items-center gap-2 rounded-full border  px-3 py-2 text-[15px] shadow-sm border-neutral-800 bg-[#070916] text-neutral-50"
                    >
                        {/* {<Icon className={className} aria-label={stack} />} */}
                        <span className="whitespace-nowrap">{stack}</span>
                    </li>
                );
            })}
        </ul>
    );
};
