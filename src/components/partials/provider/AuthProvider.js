"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
//Queries
import { useGetUserData } from "@/core/services/queries";


function AuthProvider({ children }) {
    const router = useRouter();
    const { isPending, data } = useGetUserData();

    useEffect(() => {
        if (!isPending && !data?.data) router.push("/");
    }, [isPending]);

    if (isPending)
        return (
            <p className=" m-auto bg-blue-100 text-blue-500 w-fit animate-ping">
                Loading...
            </p>
        );
    return children;
}

export default AuthProvider;