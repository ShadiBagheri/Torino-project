import UserInfo from "@/components/templates/userInfo";
import PersonalInfo from "@/components/templates/personalInfo";
import UserBankInfo from "@/components/templates/userBankInfo";

function Profile() {
    return (
        <div className="container flex flex-col w-full h-full mx-auto gap-5 lg:gap-10 bg-red-600">
            <UserInfo/>
            <PersonalInfo/>
            {/*<UserBankInfo/>*/}
        </div>
    )
}

export default Profile