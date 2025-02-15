"use client";
import { useState } from "react";
//Queries
import { useGetUserData } from "@/core/services/queries";
//Templates
import PersonalForm from "@/components/templates/personalInfo/PersonalForm";
import EditPersonalForm from "@/components/templates/personalInfo/EditPersonalForm";

function PersonalInfo() {
    const [personalForm, setPersonalForm] = useState({
        fullName: "",
        gender: "",
        birthDate: "",
        nationalCode: "",
    });
    const [isPersonalOpen, setIsPersonalOpen] = useState(false);

    const { data } = useGetUserData();

    const personalOpenHandler = () => {
        setIsPersonalOpen(!isPersonalOpen);
    }

    if (data?.data) return(
        <>
            {!isPersonalOpen ?
                <PersonalForm isPersonalOpen={isPersonalOpen} setIsPersonalOpen={setIsPersonalOpen} personalOpenHandler={personalOpenHandler} personalForm={personalForm}/> :
                <EditPersonalForm personalForm={personalForm} setPersonalForm={setPersonalForm} isPersonalOpen={isPersonalOpen} setIsPersonalOpen={setIsPersonalOpen}/>
            }
        </>
    )
}

export default PersonalInfo