"use client";

import { useEffect, useState } from "react";
//Queries
import { useGetUserData } from "@/core/services/queries";
//Templates
import Info from "@/components/templates/userInfo/Info";
import EditInfo from "@/components/templates/userInfo/EditInfo";

function UserInfo() {
    const [isInfoOpen, setIsInfoOpen] = useState(false);
    const [email, setEmail] = useState("");

    const { data } = useGetUserData();

    useEffect(() => {
        if (data?.data?.email) {
            setEmail(data.data.email);
        }
    },[data]);

    const infoOpenHandler = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    const emailUpdateHandler = (newEmail) => {
        setEmail(newEmail);
    };

    if (data?.data)
        return (
            <>
                { !isInfoOpen ?
                    <Info isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} infoOpenHandler={infoOpenHandler} email={email}/> :
                    <EditInfo isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} emailUpdateHandler={emailUpdateHandler}/>
                }
            </>
        );
}

export default UserInfo;



//
//
// function UserInfo() {
//     const [isInfoOpen, setIsInfoOpen] = useState(false);
//     const infoOpenHandler = () => {
//         setIsInfoOpen(!isInfoOpen);
//     }
//
//     const { data } = useGetUserData();
//
//     if (data?.data)
//    return (
//        <>
//            { !isInfoOpen ?
//                <Info isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} infoOpenHandler={infoOpenHandler}/> :
//                <EditInfo/>
//            }
//        </>
//    )
// }
//
// export default UserInfo