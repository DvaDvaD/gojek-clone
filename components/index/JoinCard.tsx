import Image from "next/image";

interface JoinCardProps {
	imageURL: string;
	headline: string;
	description: string;
	alt?: string;
}

const JoinCard = ({ imageURL, headline, description, alt }: JoinCardProps) => {
	return (
		<div className="max-w-[25%] rounded-[2.5rem] bg-[#182430] p-16">
			<Image
				className="-mt-[6.75rem] mb-4 h-auto w-[5.5rem]"
				width={200}
				height={200}
				src={imageURL}
				alt="people"
			/>
			<h3 className="my-6 text-2xl font-bold">{headline}</h3>
			<p className="mb-16">{description}</p>
			<button className="absolute bottom-0 mb-16 block rounded-full bg-gojek-green px-5 py-2 font-[500]">
				Selengkapnya
			</button>
		</div>
	);
};
export default JoinCard;
