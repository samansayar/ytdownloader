import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import CardSubscrib from '@/components/cards/CardSubscrib';
import "swiper/css";
import "swiper/css/pagination";
import CardExplore from "../cards/CardExplore";
import CardVideo from "../cards/CardVideo";


export default function Header() {
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
  const params = {
    slidesPerView: 4,
    spaceBetween: 20,
  }
  return (
    <div className="w-full">
      {/* Subscripition */}
      <section className='w-full relative' dir="ltr">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          className="mySwiper"
        >
          {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((res, index) => (
            <SwiperSlide key={index}>
              <CardSubscrib />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div className="lg:pr-10">
        <section dir="ltr" className="mt-10 w-full relative grid gap-[7px] place-content-center items-center lg:grid-cols-6 grid-cols-3">
          {Items.sort((a, b) => a > b ? -1 : (a > b ? 1 : 0)).map(data => (
            <>
              <CardExplore Items={data} />
            </>
          ))}
        </section>

        <section className="mt-10 w-full relative">
          <div dir="ltr" className="grid place-content-center place-items-center grid-cols-12 gap-2 gap-y-4 w-full mt-6">
            {Items.sort((a, b) => a > b ? -1 : (a > b ? 1 : 0)).map((data, index) => (
           
                <CardVideo />
              // </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
