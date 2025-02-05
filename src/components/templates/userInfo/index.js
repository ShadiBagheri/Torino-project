"use client";

import Info from "@/components/templates/userInfo/Info";
import EditInfo from "@/components/templates/userInfo/EditInfo";
import { useState } from "react";

function UserInfo() {
    const [isInfoOpen, setIsInfoOpen] = useState(false);

    const infoOpenHandler = () => {
        setIsInfoOpen(!isInfoOpen);
    }

    return(
        <>
            { !isInfoOpen ?
                <Info isInfoOpen={isInfoOpen} setIsInfoOpen={setIsInfoOpen} infoOpenHandler={infoOpenHandler}/> :
                <EditInfo/>
            }
        </>
    )
}

export default UserInfo