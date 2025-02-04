import UserInfo from "@/components/templates/userInfo";
import PersonalInfo from "@/components/templates/personalInfo";
import UserBankInfo from "@/components/templates/userBankInfo";

function Profile() {
    return (
        <div className="container flex flex-col w-full h-full mx-auto gap-6 md:gap-8 lg:gap-10">
            <UserInfo/>
            <PersonalInfo/>
            <UserBankInfo/>
        </div>
    )
}

export default Profile