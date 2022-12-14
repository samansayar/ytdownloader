import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import CardSubscrib from '@/components/cards/CardSubscrib';
import "swiper/css";
import "swiper/css/pagination";
import CardExplore from "../cards/CardExplore";
import CardVideo from "../cards/CardVideo";
import CardSubscrib from "@/components/cards/CardSubscrib";
import { useEffect } from "react";
import { GetVideo } from "pages/api/getvideo";


export default function Header({ AllVideo, AllCategory, AllChannel }) {
  return (
    <div className="w-full">
      {/* Subscripition */}
      <section className='w-full relative lg:pr-10'>
        <Swiper
          slidesPerView={1}
          spaceBetween={13}
          className="mySwiper"
          breakpoints={{
            300: {
              width: 300,
              slidesPerView: 1,
            },
            568: {
              width: 568,
              slidesPerView: 2,
            },
            970: {
              width: 970,
              slidesPerView: 3,
            },
          }}
        >
          {AllChannel.map((item, key) => <SwiperSlide key={item.id}><CardSubscrib item={item} key={key} /></SwiperSlide>)}
        </Swiper>
      </section>
      <div className="lg:pr-10">
        <section className="mt-10 w-full relative grid gap-[7px] place-content-start items-center lg:grid-cols-6 grid-cols-3" style={{ direction: 'ltr' }}>
          {AllCategory.map((res, index) => <CardExplore data={res} key={index} />)}
        </section>

        <section className="mt-10 w-full relative">
          <div className="grid place-content-center place-items-center grid-cols-12 gap-y-4 w-full mt-6">
            {AllVideo.map((data, index) => <CardVideo data={data} key={index} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
