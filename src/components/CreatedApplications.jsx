import { getApplications } from "@/api/apiApplications";
import useFetch from "@/hooks/useFetch";
import { useUser } from "@clerk/clerk-react";
import React, { useEffect } from "react";
import { BarLoader } from "react-spinners";
import ApplicationCard from "./ApplicationCard";

const CreatedApplications = () => {
    const { user } = useUser();
    const {
        loading: loadingApplications,
        data: applications,
        fn: fnApplications,
    } = useFetch(getApplications, { user_id: user.id });

    useEffect(() => {
        fnApplications();
    }, []);

    if (loadingApplications) {
        return <BarLoader width="100%" className="mb-4" color="purple" />;
    }
    return (
        <div className="flex flex-col gap-4 m-5">
            {applications?.map((application) => {
                return (
                    <ApplicationCard
                        key={application.id}
                        application={application}
                        isCandiate
                    />
                );
            })}
        </div>
    );
};

export default CreatedApplications;
