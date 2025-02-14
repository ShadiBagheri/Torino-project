"use client";
import { useState } from "react";
//Templates
import PersonalForm from "@/components/templates/personalInfo/PersonalForm";
import EditPersonalForm from "@/components/templates/personalInfo/EditPersonalForm";


function PersonalInfo() {
    const [isPersonalOpen, setIsPersonalOpen] = useState(false);

    const personalOpenHandler = () => {
        setIsPersonalOpen(!isPersonalOpen);
    }

    return(
        <>
            {!isPersonalOpen ?
                <PersonalForm isPersonalOpen={isPersonalOpen} setIsPersonalOpen={setIsPersonalOpen} personalOpenHandler={personalOpenHandler}/> :
                <EditPersonalForm/>
            }

        </>
    )
}

export default PersonalInfo