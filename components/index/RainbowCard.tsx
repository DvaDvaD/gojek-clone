import Image from "next/image";

interface RainbowCardProps {
	color: string;
	image: string;
	headline: string;
	description: string;
	alt?: string;
}

const RainbowCard = ({
	color,
	image,
	headline,
	description,
	alt,
}: RainbowCardProps) => {
	return (
		<div
			style={{
				backgroundColor: color,
				boxShadow: `0px 0px 40px 2px ${color}`,
			}}
			className="flex max-w-[16rem] flex-col rounded-[2.5rem] pb-10"
		>
			<Image
				className="mb-4 h-auto w-full -translate-y-[4rem]"
				width={208}
				height={300}
				src={image}
				alt="people"
			/>
			<div className="mx-9">
				<h3 className="mb-2 text-4xl font-[800]">{headline}</h3>
				<p className="text-lg font-semibold">{description}</p>
			</div>
		</div>
	);
};
export default RainbowCard;
