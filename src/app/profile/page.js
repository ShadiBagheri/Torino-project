import UserInfo from "@/components/templates/userInfo";
import PersonalInfo from "@/components/templates/personalInfo";
import UserBankInfo from "@/components/templates/userBankInfo";

function Profile() {
    return (
        <div className="flex flex-col w-full h-full gap-10 relative">
            <UserInfo/>
            <PersonalInfo/>
            <UserBankInfo/>
        </div>
    )
}

export default Profile