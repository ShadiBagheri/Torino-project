import Image from "next/image";

function Banner() {
    return(
        <div>
            <div>
                <Image className="w-full" src="/images/banner.png" width={1500} height={400} alt="banner"/>
            </div>
            <div>
                <h1>
                    <span>تورینو</span>
                    برگزار کننده بهترین تورهای داخلی و خارجی
                </h1>

            </div>
        </div>
    )
}

export default Banner