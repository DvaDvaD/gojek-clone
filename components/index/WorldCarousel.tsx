import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { useState } from "react";

const WorldCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className="pb-[10rem] text-black">
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 0.5 }}
				viewport={{ margin: "-300px", once: true }}
			>
				<Swiper
					className="max-w-[50%]"
					modules={[Navigation]}
					navigation
					spaceBetween={100}
					slidesPerView={1}
					loop
					speed={600}
					centeredSlides
					onRealIndexChange={(swiper) => {
						setActiveIndex(swiper.realIndex);
					}}
				>
					{worldList.map((country) => (
						<SwiperSlide className="my-auto px-32 text-center">
							<h3 className="mb-4 text-4xl font-bold">{country.country}</h3>
							<p>{country.description}</p>
						</SwiperSlide>
					))}
				</Swiper>
				<button className="mx-auto mt-6 block rounded-full bg-gojek-green px-5 py-2 font-[500] text-white">
					Masuk Newsroom
				</button>
			</motion.div>
			<motion.div
				initial={{ scale: 0.6, y: -300 }}
				whileInView={{ scale: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}
				viewport={{ once: true, margin: "-300px" }}
			>
				<Image
					className="absolute inset-x-0 mx-auto w-4/5 transition-all duration-1000"
					style={{ rotate: `${activeIndex * 90}deg` }}
					width={2000}
					height={1000}
					src="https://lelogama.go-jek.com/prime/upload/image/General_impact_-_Globe.svg"
					alt=""
				/>
			</motion.div>
		</div>
	);
};
export default WorldCarousel;

const worldList = [
	{
		country: "Indonesia",
		description:
			"Pada 2019, Gojek berkontribusi hingga US$7,1 triliun bagi ekonomi Indonesia, membantu pembukaan lapangan kerja, peningkatan pendapatan dan kualitas hidup.",
	},
	{
		country: "Singapura",
		description:
			"Perkembangan Gojek sangat pesat di Singapura, 30 juta order di tahun pertama kami hadir di sini.",
	},
	{
		country: "Vietnam",
		description:
			"Saat ini, Gojek memiliki lebih dari 80.000 Mitra Usaha dan 150.000 Mitra Driver di Vietnam yang selalu siap membantu para pelanggan",
	},
	{
		country: "Thailand",
		description:
			"Dalam 1 tahun aja, kami menyelesaikan 20 juta order. Gojek melaju pesat di Thailand!",
	},
];
