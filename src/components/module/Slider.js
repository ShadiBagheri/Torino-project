"use client";

import Image from "next/image";
//Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards ,Pagination, Navigation, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import './style.css';


function Slider() {

    return (
        <div className="flex w-full h-full px-10">
            <div className="container flex flex-col lg:flex-row items-center justify-between w-full h-[400px] sm:h-[550px] md:h-[780px] lg:w-[1190px] lg:h-[480px] xl:w-[1270px] mt-10 mx-auto md:px-16 lg:px-0 xl:pr-20 relative">
                <div className="flex flex-col items-start ">
                    <div className="flex ml-32 sm:ml-64 md:ml-0">
                        <div className="relative">
                            <Image className="w-[37px] h-[40px] md:w-[52px] md:h-[58] lg:w-[59px] lg:h-[68px]" src="/images/qs.png" width={100} height={100} alt="qs"/>
                            <h2 className="-mt-9 mr-3 md:mr-5 md:-mt-[50px] text-[30px] lg:-mt-14 lg:mr-5 md:text-[36px] lg:text-[38px] xl:text-[40px] font-black text-[#fff] absolute">؟</h2>
                        </div>
                        <h1 className="mt-1 mr-3 text-[26px] md:text-[36px] lg:text-[40px] font-extrabold text-[#282828] tracking-wider">
                            چرا
                            <span className="mx-2 text-[#28A745] tracking-wider">تورینو</span>
                            ؟
                        </h1>
                    </div>
                    <div className="hidden md:flex flex-col md:mt-5 lg:mt-8">
                        <h1 className="md:text-[22px] lg:text-[26px] font-semibold">تور طبیعت گردی و تاریخی</h1>
                        <p className="md:w-full lg:w-[450px] md:h-[264px] xl:w-[530px] xl:h-[264px] mt-5 text-justify md:text-xl xl:text-2xl font-normal xl:tracking-wide leading-5  lg:leading-10">
                            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید
                            و در دل طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید،
                            باید تورهای طبیعت گردی را خریداری کنید.
                            اما اگر بخواهید از جاذبه های گردشگری و آثار تاریخی یک مقصد
                            خاص بازدید کنید، میتوانید تورهای فرهنگی و تاریخی را خریداری کنید.
                        </p>
                    </div>
                </div>
                <div className="mt-16 sm:mt-20 md:mt-72 lg:mt-0 ml-8 md:ml-0 lg:mr-[490px] xl:mr-[700px] absolute">
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
                            <Image className="w-[260px] h-[300px] sm:w-full sm:h-full lg:w-[360] lg:h-[420] absolute" src="/images/s1.png" width={600} height={600} alt="slide1"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="w-[260px] h-[300px] sm:w-full sm:h-full lg:w-[360] lg:h-[420] absolute" src="/images/s2.png" width={600} height={600} alt="slide2"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="w-[260px] h-[300px] sm:w-full sm:h-full lg:w-[360] lg:h-[420] absolute" src="/images/s3.png" width={600} height={600} alt="slide3"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image className="w-[260px] h-[300px] sm:w-full sm:h-full lg:w-[360] lg:h-[420] absolute" src="/images/s4.png" width={600} height={600} alt="slide4"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default Slider



