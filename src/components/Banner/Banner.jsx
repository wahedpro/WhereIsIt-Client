import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Banner = () => {
    return (
        <div className="bg-gray-400">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
            >
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co/3hWTVHh/1.jpg"
                            alt="Slide 1"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                            <h2 className="text-white text-4xl font-bold">Welcome to Our Platform</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co/BBD36k4/2.jpg"
                            alt="Slide 2"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                            <h2 className="text-white text-4xl font-bold">Find What You Lost</h2>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="relative">
                        <img
                            className="w-full h-96 object-cover"
                            src="https://i.ibb.co/BCs72n7/3.jpg"
                            alt="Slide 3"
                        />
                        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                            <h2 className="text-white text-4xl font-bold">Helping You Connect</h2>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;
