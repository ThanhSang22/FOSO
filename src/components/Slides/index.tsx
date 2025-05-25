import React, { useRef } from 'react'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import ProductCard from '../Card';
import { productList } from '@/utils/listProducts';

const Slides = () => {
  const swiperRefs = useRef<SwiperRef | any>([]);
  const handleSlide = (direction: any, index: number) => {
    const swiper = swiperRefs.current[index];
    if (swiper) {
      direction === "next" ? swiper.slideNext() : swiper.slidePrev();
    }
  };

  return (
    <div className="flex flex-col">
      <img src="/images/banner.png" alt="banner" className="w-full" />
      <div className="flex justify-center items-center bg-[#025FCA] shadow-[2px_15px_25px_0px_#6B72800A] p-6 lg:p-12 rounded-b-xl">
        <div className="relative w-full max-w-[1280px]">
          <Swiper
            slidesPerView={2.5}
            loop={true}
            autoplay={{ delay: 3000 }}
            spaceBetween={10}
            breakpoints={{
              1280: {
                slidesPerView: 4,
              },
              900: {
                slidesPerView: 3,
              },
              550: {
                slidesPerView: 2.5,
              },
              400: {
                slidesPerView: 2.1,
              },
              0: {
                slidesPerView: 1.5,
              },
            }}
            className="w-full md:container"
            modules={[Navigation, Autoplay]}
            onSwiper={(swiper) => (swiperRefs.current[0] = swiper)}
          >
            {productList.map((product, index) => {
              const discount = Math.round(
                ((product.oldPrice - product.price) / product.oldPrice) * 100
              );
              return (
                <SwiperSlide key={index} className="relative">
                  <ProductCard
                    image={product.image}
                    title={product.name}
                    price={product.price}
                    originalPrice={product.oldPrice}
                    discount={discount}
                    isHotDeal={true}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className="hidden xl:flex justify-between items-center absolute top-1/2 -translate-y-1/2 px-4 z-10 -right-[3%] -left-[3%]">
            <img
              src="/images/icons/add.svg"
              alt="icon-prev"
              className="cursor-pointer"
              onClick={() => handleSlide("prev", 0)}
            />
            <img
              src="/images/icons/add.svg"
              alt="icon-next"
              className="rotate-180 cursor-pointer"
              onClick={() => handleSlide("next", 0)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slides
