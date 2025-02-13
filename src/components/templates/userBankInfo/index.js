"use client";

import { useState } from "react";
import BankForm from "@/components/templates/userBankInfo/BankForm";
import EditBankForm from "@/components/templates/userBankInfo/EditBankForm";

function UserBankInfo() {
    const [isBankInfoOpen, setIsBankInfoOpen] = useState(false);
    const bankOpenHandler = () => {
        setIsBankInfoOpen(!isBankInfoOpen);
    }

    return(
        <>
            {!isBankInfoOpen ?
                <BankForm isBankInfoOpen={isBankInfoOpen} setIsBankInfoOpen={setIsBankInfoOpen} bankOpenHandler={bankOpenHandler}/> :
                <EditBankForm isBankInfoOpen={isBankInfoOpen} setIsBankInfoOpen={setIsBankInfoOpen}/>
            }
        </>
    )
}

export default UserBankInfo