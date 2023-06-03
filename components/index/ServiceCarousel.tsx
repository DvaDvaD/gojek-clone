import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useRef, useState } from "react";

const ServiceCarousel = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const swiperRef = useRef<any>(null);

	const updateActiveIndex = (idx: number) => {
		const newIndex = idx;
		setActiveIndex(newIndex);
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideTo(newIndex);
		}
	};
	return (
		<div className="overflow-hidden">
			<Swiper
				className="my-28 -rotate-12 !pb-24"
				slidesPerView={5}
				spaceBetween={50}
				loop
				allowTouchMove={false}
				ref={swiperRef}
			>
				{services.map((service) => (
					<SwiperSlide
						style={{ backgroundColor: service.color }}
						className="relative flex !h-72 flex-col space-y-4 rounded-3xl p-8"
					>
						{service.servicesList.map((el) => (
							<p className="text-lg font-semibold">{el}</p>
						))}
						<div
							style={{ backgroundColor: service.color }}
							className="absolute -bottom-24 left-0 -z-10 h-32 w-full rounded-b-3xl p-8 pt-4 brightness-75"
						>
							<h3 className="text-sm font-semibold">{service.title}</h3>
							<p className="text-[8px]">{service.description}</p>
						</div>
					</SwiperSlide>
				))}
				{services.map((service) => (
					<SwiperSlide
						style={{ backgroundColor: service.color }}
						className="relative flex !h-72 flex-col space-y-4 rounded-3xl p-8"
					>
						{service.servicesList.map((el) => (
							<p className="text-lg font-semibold">{el}</p>
						))}
						<div
							style={{ backgroundColor: service.color }}
							className="absolute -bottom-24 left-0 -z-10 h-32 w-full rounded-b-3xl p-8 pt-4 brightness-75"
						>
							<h3 className="text-sm font-semibold">{service.title}</h3>
							<p className="text-[8px]">{service.description}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex justify-center space-x-10 pt-10">
				{services.map((service, idx) => (
					<p
						key={idx}
						className={`${
							idx === activeIndex && "font-semibold"
						} group relative cursor-pointer transition-all hover:font-semibold`}
						onClick={() => updateActiveIndex(idx)}
					>
						{service.title}
						<span
							className={`${
								idx === activeIndex && "w-8"
							} absolute inset-x-0 -bottom-2 mx-auto h-1 w-0 rounded-sm bg-gojek-green transition-all group-hover:w-8`}
						></span>
					</p>
				))}
			</div>
			<button className="mx-auto mt-10 block rounded-full bg-gojek-green px-5 py-2 font-[500]">
				Lihat semua layanan
			</button>
		</div>
	);
};
export default ServiceCarousel;

const services = [
	{
		title: "Transportasi dan Logistik",
		description:
			"Mitra Driver kami sudah melakukan lebih dari 13.000 kali perjalanan bolak-balik antara bumi dan bulan.",
		servicesList: ["goride", "gocar", "gobluebird", "gosend", "gobox"],
		color: "#00aa13",
	},
	{
		title: "Pembayaran",
		description:
			"Dari belanja sampai donasi, kami bikin transaksi jadi mudah dan aman.",
		servicesList: ["gopay", "gotagihan", "gopaylater", "gosure"],
		color: "#00aed5",
	},
	{
		title: "Pesan makanan & belanja",
		description:
			"Mau jajan atau belanja di minimarket? Gampang, tinggal pesan dari aplikasi dan tidak perlu keluar rumah.",
		servicesList: ["gofood", "gomed", "gomart", "goshop"],
		color: "#ee2737",
	},
	{
		title: "Bisnis",
		description:
			"Kelola restoranmu mulai dari operasional harian sampai pasang iklan.",
		servicesList: ["gobiz", "gostore"],
		color: "#93328e",
	},
	{
		title: "Hiburan",
		description:
			"Tonton film favoritmu lewat streaming online, beli tiket nonton film atau konser, main games, dan lain-lain.",
		servicesList: ["goplay", "gotix"],
		color: "#df1995",
	},
];
