"use client";

import Info from "@/components/templates/userInfo/Info";
import EditInfo from "@/components/templates/userInfo/EditInfo";
import { useState } from "react";
import {useGetUserData} from "@/core/services/queries";

function UserInfo() {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const { data } = useGetUserData();

    const infoOpenHandler = () => {
        setIsInfoOpen(!isInfoOpen);
    }

    if (data?.data) return(
        <>
            { !isInfoOpen ?
                <Info isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} infoOpenHandler={infoOpenHandler}/> :
                <EditInfo/>
            }
        </>
    )
}

export default UserInfo