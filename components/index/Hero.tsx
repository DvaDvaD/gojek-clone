const Hero = () => {
	return (
		<div className="relative h-screen w-full overflow-hidden">
			<p className="mx-auto max-w-6xl translate-y-1/2 text-7xl font-bold text-white">
				3 negara. <br />
				20+ layanan. <br />
				1 platform <br />
				on-demand <br />
				terkemuka. <br />
			</p>
			<iframe
				title="Gojek - The Flow"
				className="absolute top-0 -z-10 aspect-video w-screen"
				src="https://www.youtube.com/embed/VJH5FJ5kaJA?enablejsapi=1&amp;version=3&amp;controls=0&amp;rel=0&amp;autoplay=1&amp;loop=1&amp;mute=1&amp;playlist=VJH5FJ5kaJA&amp;playsinline=1"
			/>
		</div>
	);
};
export default Hero;
