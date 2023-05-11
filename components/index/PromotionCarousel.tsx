import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";

interface PromotionCarouselProps {
	promotionSlides: {
		imageURL: string;
		description?: string;
	}[];
}

const PromotionCarousel = ({ promotionSlides }: PromotionCarouselProps) => {
	return (
		<Swiper
			className="relative"
			modules={[Navigation, Autoplay]}
			centeredSlides={true}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			slidesPerView={1}
			navigation={{
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			}}
			onSwiper={(swiper) => console.log(swiper)}
		>
			{promotionSlides.map((promotionSlide) => (
				<SwiperSlide>
					<Image
						className="h-auto w-full object-cover object-center brightness-90"
						width={6000}
						height={3000}
						src={promotionSlide.imageURL}
						alt="slide"
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default PromotionCarousel;
