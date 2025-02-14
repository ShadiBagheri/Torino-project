"use client";

import { useState } from "react";
import BankForm from "@/components/templates/userBankInfo/BankForm";
import EditBankForm from "@/components/templates/userBankInfo/EditBankForm";

function UserBankInfo() {
    const [bankForm, setBankForm] = useState({
        shaba_code: "",
        debitCard_code: "",
        accountIdentifier: "",
    });

    const [isBankInfoOpen, setIsBankInfoOpen] = useState(false);
    const bankOpenHandler = () => {
        setIsBankInfoOpen(!isBankInfoOpen);
    }

    return(
        <>
            {!isBankInfoOpen ?
                <BankForm isBankInfoOpen={isBankInfoOpen} setIsBankInfoOpen={setIsBankInfoOpen} bankForm={bankForm} setBankForm={setBankForm} bankOpenHandler={bankOpenHandler}/> :
                <EditBankForm isBankInfoOpen={isBankInfoOpen} setIsBankInfoOpen={setIsBankInfoOpen} bankForm={bankForm} setBankForm={setBankForm}/>
            }
        </>
    )
}

export default UserBankInfo