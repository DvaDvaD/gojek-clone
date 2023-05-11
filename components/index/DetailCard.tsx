import Image from "next/image";

interface DetailCardProps {
	image: string;
	headline: string;
	description: string;
	alt?: string;
}

const DetailCard = ({ image, headline, description, alt }: DetailCardProps) => {
	return (
		<div className="flex max-w-[16rem] flex-col items-center text-center">
			<Image className="mb-4 h-auto w-[13rem]" src={image} alt="people" />
			<h3 className="mb-1 text-2xl font-bold">{headline}</h3>
			<p>{description}</p>
		</div>
	);
};
export default DetailCard;
