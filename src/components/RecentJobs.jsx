import React, { useEffect, useState } from "react";
import { Button } from "./ui/moving-border";
import JobCard from "./JobCard";
import RightIcon from "../assets/right.png";
import { Link } from "react-router-dom";

const RecentJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        // Fetch jobs data
        const fetchJobs = async () => {
            try {
                const response = await fetch(
                    "https://remotive.io/api/remote-jobs?limit=3"
                );
                const data = await response.json();

                // Combine all arrays and get first three jobs
                const allJobs = data.jobs.flat(); // Flattening nested arrays
                const sortedJobs = allJobs
                    .sort(
                        (a, b) =>
                            new Date(b.publication_date) -
                            new Date(a.publication_date)
                    ) // Sort by latest
                    .slice(0, 3); // Get first 3 jobs

                setJobs(sortedJobs);
                console.log(sortedJobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        fetchJobs();
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center mt-20 mb-10">
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-[#070916] text-black dark:text-white border-neutral-200 dark:border-slate-800 poppins  font-semibold"
                >
                    Recentely Job Circular
                </Button>
            </div>
            <div>
                <ul className="flex flex-col gap-2 py-4 px-10">
                    {jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-center">
                <Link to="/jobs">
                    <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        Show more jobs{" "}
                        <img src={RightIcon} width={22} className="ml-2 mt-1" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default RecentJobs;
