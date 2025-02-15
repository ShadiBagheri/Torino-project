"use client";

import {  useState } from "react";
//Queries
import { useGetUserData } from "@/core/services/queries";
//Templates
import Info from "@/components/templates/userInfo/Info";
import EditInfo from "@/components/templates/userInfo/EditInfo";

function UserInfo() {
    const [infoForm, setInfoForm] = useState({ email: "" });
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const { data } = useGetUserData();

    const infoOpenHandler = () => {
        setIsInfoOpen(!isInfoOpen);
    };

    if (data?.data) return (
        <>
            {!isInfoOpen ?
                <Info isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} infoOpenHandler={infoOpenHandler} infoForm={infoForm}/> :
                <EditInfo isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} infoForm={infoForm} setInfoForm={setInfoForm}/>
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