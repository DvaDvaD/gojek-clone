import Image from "next/image";
import megawati from "../../public/index/megawati.svg";

const Main = () => {
	return (
		<main className="min-h-screen bg-dark">
			<p className="pt-32 text-center text-5xl font-bold leading-[60px] text-white">
				Kenalin, Gojek. <br /> Si pembawa perubahan
			</p>
			<button className="mx-auto mt-8 block rounded-full bg-green px-5 py-2 font-semibold">
				Gabung
			</button>
			<Image src={megawati} alt="megawati" />
		</main>
	);
};
export default Main;
