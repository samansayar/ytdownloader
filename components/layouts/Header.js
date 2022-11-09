import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// import CardSubscrib from '@/components/cards/CardSubscrib';
import "swiper/css";
import "swiper/css/pagination";
import CardExplore from "../cards/CardExplore";
import CardVideo from "../cards/CardVideo";
import CardSubscrib from "../cards/CardSubscrib";
import { useEffect } from "react";
import { GetVideo } from "pages/api/getvideo";


export default function Header({ AllVideo }) {
  const Items = [
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/trending_color_64.png",
      "title": "trending"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/music_color_64.png",
      "title": "music"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/movies_color_64.png",
      "title": "movies"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/live_color_64.png",
      "title": "live"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/gaming_color_64.png",
      "title": "gaming"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/news_color_64.png",
      "title": "news"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/live_color_64.png",
      "title": "live"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/gaming_color_64.png",
      "title": "gaming"
    },
    {
      "icon": "https://www.youtube.com/img/explore/destinations/icons/trending_color_64.png",
      "title": "trending"
    },
  ]
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

          <SwiperSlide>
            <CardSubscrib />
          </SwiperSlide>
          <SwiperSlide>
            <CardSubscrib />
          </SwiperSlide>
          <SwiperSlide>
            <CardSubscrib />
          </SwiperSlide>
          <SwiperSlide>
            <CardSubscrib />
          </SwiperSlide>
          <SwiperSlide>
            <CardSubscrib />
          </SwiperSlide>
        </Swiper>
      </section>
      <div className="lg:pr-10">
        <section dir="ltr" className="mt-10 w-full relative grid gap-[7px] place-content-start items-center lg:grid-cols-6 grid-cols-3">
          {/* {Items.sort((a, b) => a > b ? -1 : (a > b ? 1 : 0)).map((data, index) => ( */}
          <CardExplore Items={Items[0]} index={1} />
          <CardExplore Items={Items[1]} index={2} />
          <CardExplore Items={Items[2]} index={3} />
          <CardExplore Items={Items[3]} index={4} />
          <CardExplore Items={Items[4]} index={5} />
          <CardExplore Items={Items[5]} index={6} />

        </section>

        <section className="mt-10 w-full relative">
          <div dir="ltr" className="grid place-content-center place-items-center grid-cols-12 gap-y-4 w-full mt-6">
            {AllVideo.map((data, index) => (
              <CardVideo data={data} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
