"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import './style.css';
// import required modules
import { EffectCards ,Pagination, Navigation, Virtual } from 'swiper/modules';
import Image from "next/image";


function Slider() {
    return (
        <div className="flex w-full bg-yellow-300 lg:px-10">
            <div className="container flex items-center justify-between lg:w-[1270px] lg:h-[570px] mt-10 mx-auto">
                <div className="flex flex-col items-start">
                    <div className="flex">
                        <div className=" relative">
                            <Image className="w-[59px] h-[68px]" src="/images/qs.png" width={100} height={100} alt="qs"/>
                            <h2 className="-mt-14 mr-5 text-[40px] font-black text-[#fff] absolute">؟</h2>
                        </div>
                        <h1 className="mt-1 mr-3 text-[40px] font-extrabold text-[#282828] tracking-wider">
                            چرا
                            <span className="mx-2 text-[#28A745] tracking-wider">تورینو</span>
                            ؟
                        </h1>
                    </div>
                    <div className="flex flex-col mt-8">
                        <h1 className="text-[26px] font-semibold">تور طبیعت گردی و تاریخی</h1>
                        <p className="w-[530px] h-[264px] mt-5 text-justify text-2xl font-normal tracking-wide leading-10">
                            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید
                            و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید،
                            باید تورهای طبیعت گردی را خریداری کنید.
                            اما اگر بخواهید از جاذبه های گردشگری و آثار تاریخی یک مقصد
                            خاص بازدید کنید، میتوانید تورهای فرهنگی و تاریخی را خریداری کنید.
                        </p>
                    </div>
                </div>
                <div className="ml-16">
                    <Swiper
                        effect={'cards'}
                        pagination={{
                            type: 'fraction',
                        }}
                        navigation={true}
                        modules={[EffectCards , Pagination, Navigation , Virtual]}
                        className="mySwiper "
                    >
                        <SwiperSlide>
                            <Image className="lg:w-[599px] lg:h-[580px]" src="/images/s1.png" width={600} height={600} alt="slide1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="lg:w-[599px] lg:h-[580px]" src="/images/s2.png" width={600} height={600} alt="slide2"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="lg:w-[599px] lg:h-[580px]" src="/images/s3.png" width={600} height={600} alt="slide3"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="lg:w-[599px] lg:h-[580px]" src="/images/s4.png" width={600} height={600} alt="slide4"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider



