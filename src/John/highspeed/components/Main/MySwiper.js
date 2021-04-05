// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import p1Img from "../../Images/p1.jpg";
import p2Img from "../../Images/p2.jpg";
import p3Img from "../../Images/p3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MySwiper = () => {
  return (
    <Swiper
      // spaceBetween={50}
      slidesPerView={1}
      // navigation={true}
      pagination={{ clickable: true }}
      autoplay={true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {/* <SwiperSlide>
        <div
          className="swiperContent"
          style={{
            backgroundImage: `url(${p1Img})`,
          }}
        >
          <div className="mask"></div>
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div
          className="swiperContent"
          style={{
            backgroundImage: `url(${p2Img})`,
          }}
        >
          <div className="mask"></div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          className="swiperContent"
          style={{
            backgroundImage: `url(${p3Img})`,
          }}
        >
          <div className="mask"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
