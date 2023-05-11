import Image from "next/image";
import megawati from "@/public/index/megawati.svg";
import ibuJualan from "@/public/index/ibu-jualan.svg";
import pakNdut from "@/public/index/pak-ndut.svg";
import bapakGojek from "@/public/index/bapak-gojek.svg";
import DetailCard from "./DetailCard";
import RainbowCard from "./RainbowCard";
import PromotionCarousel from "./PromotionCarousel";
import JoinCard from "./JoinCard";
import KerjaCarousel from "./KerjaCarousel";
import { motion } from "framer-motion";

const Main = () => {
	return (
		<main className="min-h-screen bg-dark">
			{/* Hero */}
			<p className="pt-32 text-center text-5xl font-bold leading-[60px] text-white">
				Kenalin, Gojek. <br /> Si pembawa perubahan
			</p>
			<button className="mx-auto mt-8 block rounded-full bg-gojek-green px-5 py-2 font-semibold">
				Gabung
			</button>

			{/* Gabung Dengan Kami */}
			<section className="rounded-t-[6rem] bg-white text-black">
				<div className="relative -top-44 -mb-14 mt-56 flex justify-center space-x-10">
					{detailCards.map((detailCard, idx) => (
						<DetailCard {...detailCard} key={idx} />
					))}
				</div>
			</section>

			{/* Skala Kami */}
			<section className="bg-white pb-32 text-black">
				<p className="text-center text-5xl font-bold leading-[60px]">
					Skala kami
				</p>
				<button className="mx-auto mt-8 block rounded-full bg-gojek-green px-5 py-2 font-semibold text-white">
					Gabung
				</button>
				<div className="mt-28 flex justify-center space-x-8">
					{rainbowCards.map((rainbowCard, idx) => (
						<RainbowCard {...rainbowCard} key={idx} />
					))}
				</div>
			</section>

			{/* Carousel */}
			<section className="h-screen overflow-hidden">
				<PromotionCarousel promotionSlides={promotionSlides} />
			</section>

			{/* Gabung */}
			<section className="pb-32">
				<div className="relative overflow-hidden rounded-b-[6rem]">
					<div className="absolute top-0 h-full w-full bg-gradient-to-b from-black">
						<h2 className="mt-40 text-center text-7xl font-[800]">
							Bertumbuh besar <br /> bersama Gojek
						</h2>
					</div>
					<Image
						src="https://lelogama.go-jek.com/prime/upload/cache/15/d0/15d0ca41185801981410a7c5ce2087cf.webp"
						width={2000}
						height={1000}
						alt="happy"
					/>
				</div>
				<div className="relative z-10 -mt-20 flex justify-center space-x-10">
					{joinCards.map((joinCard, idx) => (
						<JoinCard {...joinCard} key={idx} />
					))}
				</div>
			</section>

			{/* Kerja Gojek Beda */}
			<section className="rounded-t-[6rem] bg-white pt-36 pb-32 text-black">
				<h2 className="mb-16 text-center text-5xl font-[800]">
					Kerja di Gojek itu beda karena...
				</h2>
				<KerjaCarousel kerjaSlides={kerjaSlides} />
			</section>

			{/* Layanan */}
			<section>
				<motion.div
					initial={{ opacity: 0, y: -50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					viewport={{ margin: "-80px" }}
				>
					<h2 className="mt-32 text-center text-5xl font-[800]">
						Kami membangun layanan <br /> untuk membantumu melewati halangan
					</h2>
					<button className="mx-auto mt-10 block rounded-full bg-gojek-green px-5 py-2 font-[500]">
						Lihat semua layanan
					</button>
				</motion.div>
				<div></div>
				<div className="mx-auto mt-20 flex max-w-[70rem] space-x-10">
					<Image
						className="w-[45%]"
						src="https://lelogama.go-jek.com/prime/upload/image/home-spot-image-goclub.svg"
						alt="image"
						width={2000}
						height={1000}
					/>
					<div>
						<h3 className="text-5xl font-[800]">
							Program Loyalti <br /> Gojek
						</h3>
						<p className="mt-10">
							Banyakin transaksi, dapetin banyak hadiahnya
						</p>
						<button className="mt-10 rounded-full bg-gojek-green px-5 py-2 font-[500]">
							Cek Benefit
						</button>
					</div>
				</div>
			</section>
		</main>
	);
};
export default Main;

const detailCards = [
	{
		image: bapakGojek,
		headline: "Fortune Top 20",
		description:
			"Satu-satunya perusahaan di Asia Tenggara yang dua kali berada di, daftar Perusahaan Pengubah Dunia versi majalah Fortune",
	},
	{
		image: megawati,
		headline: "Berkontribusi lebih dari $7.1 triliun",
		description: "Penggerak roda perekonomian Indonesia",
	},
	{
		image: pakNdut,
		headline: "Jaket hijau, pergerakan juga hijau",
		description:
			"Gojek mengurangi pemakaian plastik hingga 11.3 ton sejak Oktober 2020",
	},
	{
		image: ibuJualan,
		headline: "Tumbuh 80% sejak pandemi",
		description:
			"Mitra Food merchants naik 80% sejak pandemi berkat solusi digitalisasi Gojek untuk UMKM.",
	},
];

const rainbowCards = [
	{
		color: "#7ccc6c",
		image: "https://lelogama.go-jek.com/prime/upload/image/170_mil.png",
		headline: "190 juta+",
		description: "jumlah install aplikasi kami.",
	},
	{
		color: "#bd7ab3",
		image: "https://lelogama.go-jek.com/prime/upload/image/2_million.png",
		headline: "2 juta+",
		description: "mitra Driver yang sudah bergabung dengan kami",
	},
	{
		color: "#ff8f1c",
		image: "https://lelogama.go-jek.com/prime/upload/image/50_million.png",
		headline: "900.000+",
		description: "jumlah mitra GoFood",
	},
	{
		color: "#4ac9e3",
		image: "https://lelogama.go-jek.com/prime/upload/image/12x_growth.png",
		headline: "2.448x",
		description: "lipat kenaikan unduhan aplikasi Gojek dari 2015 sampai 2020",
	},
];

const promotionSlides = [
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/9f/17/9f17d4829825f11841faae777bbd667c.webp",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/59/04/590458e775eaa662cad4836326124c07.webp",
		description: "Nikmati berbagai macam reward khusus untukmu di sini!",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/6d/20/6d20e56ca21a82c8f82cb0b53b846532.webp",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/71/35/71357bb16ed48cdb6522f95ff523c309.webp",
	},
];

const joinCards = [
	{
		imageURL: "https://lelogama.go-jek.com/prime/upload/image/employees.svg",
		headline: "Gabung jadi GoTroops, yuk!",
		description:
			"Di belakang startup dengan pertumbuhan paling tinggi di Asia Tenggara, terdapat talenta yang memiliki ide-ide cemerlang",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/image/driver_partner.svg",
		headline: "Gabung jadi Mitra Driver",
		description:
			"Kami adalah rumah bagi lebih dari 2 juta mitra driver di Asia Tenggara, yang mendapat jaminan finansial dan fasilitas kesehatan.",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/image/merchant_partner.svg",
		headline: "Gabung jadi Mitra Usaha",
		description:
			"Kami membantu 500.000+ Mitra Usaha melipatgandakan penjualan, meluaskan jangkauan, dan berkembang dengan teknologi baru.",
	},
];

const kerjaSlides = [
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/b1/6b/b16b3d1eb2109b812ffffc65032f52c5.webp",
		headline: "Asuransi kesehatan buat ayah ibu",
		description: "Subsidi asuransi kesehatan buat kedua orang tuamu.",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/23/cd/23cdb979a6cea6146b58cf30cc98c9bc.webp",
		headline: "Bermacam-macam subsidi",
		description:
			"Mau beli buku, daftar gym membership, isi pulsa? Gojek bisa kasih subsidi ;).",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/b1/6b/b16b3d1eb2109b812ffffc65032f52c5.webp",
		headline: "Asuransi kesehatan buat ayah ibu",
		description: "Subsidi asuransi kesehatan buat kedua orang tuamu.",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/73/bb/73bbe62f39da4b90d6c997b88380fa1c.webp",
		headline: "Kolabirasi antar budaya",
		description: "Bisa kerjasama dengan GoTroops dari berbagai negara!",
	},
	{
		imageURL:
			"https://lelogama.go-jek.com/prime/upload/cache/18/5b/185be9baef4bcbf2a94df9839ba38599.webp",
		headline: "Peduli kesehatan mental",
		description: "Konseling gratis untukmu dan keluargamu.",
	},
];
