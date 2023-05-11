import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

interface KerjaCarouselProps {
	kerjaSlides: {
		imageURL: string;
		headline: string;
		description: string;
	}[];
}

const KerjaCarousel = ({ kerjaSlides }: KerjaCarouselProps) => {
	return (
		<Swiper
			modules={[Navigation]}
			centeredSlides={true}
			slidesPerView={2}
			spaceBetween={40}
			navigation
			loop
		>
			{kerjaSlides.map((kerjaSlide, idx) => (
				<SwiperSlide
					className="relative overflow-hidden rounded-[3rem]"
					key={idx}
				>
					<Image
						src={kerjaSlide.imageURL}
						className="h-auto w-full"
						alt="slide"
						width={2000}
						height={1000}
					/>
					<div className="absolute bottom-0 z-10 p-12 text-white">
						<h2 className="text-[26px] font-bold">{kerjaSlide.headline}</h2>
						<p>{kerjaSlide.description}</p>
						<button className="mt-4 rounded-full bg-gojek-green px-5 py-2 font-[500]">
							Selengkapnya
						</button>
					</div>
					<div className="absolute top-0 h-full w-full bg-gradient-to-t from-black"></div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};
export default KerjaCarousel;
