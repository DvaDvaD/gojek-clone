import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);

	const navbarRef = useRef<HTMLElement>({} as HTMLElement);

	const handleScroll = useCallback(() => {
		if (window.scrollY === 0) {
			navbarRef.current.classList.add("!bg-transparent");
		} else {
			navbarRef.current.classList.remove("!bg-transparent");
		}

		if (window.scrollY > prevScrollPos) {
			navbarRef.current.classList.add("-translate-y-[100px]");
			navbarRef.current.classList.add("opacity-0");
		} else {
			navbarRef.current.classList.remove("-translate-y-[100px]");
			navbarRef.current.classList.remove("opacity-0");
		}

		setPrevScrollPos(window.scrollY);
	}, [window.scrollY]);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [handleScroll]);

	return (
		<>
			<style jsx global>{`
				.underline-grow::before {
					content: "";
					position: absolute;
					height: 1px;
					width: 0px;
					bottom: 0px;
					left: 0px;
					right: 0px;
					margin: 0 auto;
					background-color: currentColor;
				}

				.underline-grow:hover::before {
					width: 100%;
					transition: width 0.2s ease-out;
				}
			`}</style>
			<nav
				ref={navbarRef}
				className="fixed top-0 z-50 w-full transform bg-dark transition delay-75 duration-300"
			>
				<div className="mx-auto flex max-w-6xl items-center justify-between py-8 text-white">
					<Link href="/">
						<svg
							width="92px"
							height="30px"
							viewBox="0 0 112 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M15.9959 2.01688C8.51147 2.35301 2.42141 8.27578 2.02177 15.6027C1.69599 21.619 5.14065 26.8823 10.2534 29.3246C12.1603 30.2351 14.4234 29.0906 14.7927 27.044C15.0403 25.6654 14.3235 24.2996 13.0421 23.6869C10.1361 22.2913 8.18568 19.2746 8.41591 15.8409C8.68523 11.8243 12.0039 8.56086 16.1045 8.28429C20.9522 7.95667 24.992 11.7095 24.992 16.3898C24.992 19.6022 23.0894 22.3764 20.3267 23.6954C19.067 24.2996 18.3763 25.6569 18.6196 27.0099L18.6326 27.078C18.9932 29.0906 21.2172 30.2351 23.0937 29.3459C28.0023 27.0185 31.3905 22.0913 31.3905 16.3898C31.3861 8.21622 24.4273 1.63394 15.9959 2.01688Z"
								fill="#00AA13"
							></path>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M16.7082 21.4616C13.8543 21.4616 11.5347 19.1895 11.5347 16.3941C11.5347 13.5986 13.8543 11.3265 16.7082 11.3265C19.5621 11.3265 21.8817 13.5986 21.8817 16.3941C21.8817 19.1895 19.5621 21.4616 16.7082 21.4616V21.4616Z"
								fill="#00AA13"
							></path>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M89.5928 17.8166C89.467 17.7439 89.3057 17.7802 89.2271 17.9054C88.4838 19.072 87.1978 19.8471 85.7348 19.8471C83.8038 19.8471 82.1835 18.5028 81.7037 16.6782H92.979C93.1166 16.6782 93.2346 16.5732 93.2503 16.4319C93.2818 16.1453 93.2975 15.8546 93.2975 15.5599C93.2975 11.1516 89.7148 7.59915 85.3769 7.80503C81.5031 7.98669 78.3569 11.2162 78.1799 15.1926C77.9794 19.6453 81.4402 23.3229 85.7348 23.3229C88.4405 23.3229 90.812 21.8656 92.1452 19.6735C92.2278 19.5363 92.1885 19.3587 92.0508 19.2779L89.5889 17.8166H89.5928ZM85.7348 11.2768C87.4573 11.2768 88.9361 12.3506 89.5732 13.8806H81.8925C82.5296 12.3506 84.0083 11.2768 85.7309 11.2768H85.7348Z"
								fill="#454545"
							></path>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M63.0978 7.84546C58.9252 7.84546 55.543 11.3172 55.543 15.6004C55.543 19.8835 58.9252 23.3553 63.0978 23.3553C67.2705 23.3553 70.6527 19.8835 70.6527 15.6004C70.6527 11.3172 67.2705 7.84546 63.0978 7.84546V7.84546ZM63.0978 19.8714C60.8011 19.8714 58.937 17.9579 58.937 15.6004C58.937 13.2428 60.8011 11.3293 63.0978 11.3293C65.3946 11.3293 67.2587 13.2428 67.2587 15.6004C67.2587 17.9579 65.3946 19.8714 63.0978 19.8714Z"
								fill="#454545"
							></path>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M75.9265 8.05946H72.9022C72.7607 8.05946 72.6466 8.16845 72.6309 8.30571V22.6004C72.6309 23.9164 72.1865 24.9903 71.3409 25.7088C70.7903 26.1771 70.0746 26.4879 69.2762 26.6131C69.1425 26.6333 69.0442 26.7503 69.0442 26.8916V29.7175C69.0442 29.8749 69.1661 30.0001 69.3195 30.0001H69.3509C73.1264 30.0001 76.1861 26.8593 76.1861 22.9839L76.2018 8.338C76.2018 8.18056 76.0799 8.05542 75.9265 8.05542V8.05946Z"
								fill="#454545"
							></path>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M53.258 8.0553H50.2337C50.0803 8.0553 49.9584 8.18045 49.9584 8.33789V8.71332V9.32289C49.4196 8.68102 48.5662 8.32578 48.228 8.20467C47.465 7.94227 46.6509 7.80098 45.8054 7.80502C41.6917 7.81713 38.3095 11.2485 38.2505 15.4711C38.1915 19.8189 41.6052 23.3633 45.829 23.3633C46.6706 23.3633 47.4847 23.222 48.2398 22.9596C48.5858 22.8344 49.4274 22.4792 49.9623 21.8454V22.4509V22.5962C49.9623 23.9123 49.5179 24.9861 48.6724 25.7047C47.9409 26.3304 46.9144 26.6735 45.7818 26.6735C44.1379 26.6735 42.5608 25.9832 41.6366 24.8811C41.5344 24.76 41.3535 24.752 41.2394 24.865L39.2337 26.8713C39.1236 26.9803 39.1236 27.158 39.2298 27.271C40.9366 29.0634 43.1547 29.9798 45.825 29.9959H46.6784C50.4539 29.9959 53.5136 26.8552 53.5136 22.9798V21.6112C53.5136 21.6112 53.5136 21.5911 53.5136 21.5789L53.5293 8.33385C53.5293 8.17641 53.4074 8.05127 53.254 8.05127L53.258 8.0553ZM49.9584 15.6285C49.9348 17.9498 48.0942 19.8229 45.829 19.8229C43.5637 19.8229 41.6996 17.9255 41.6996 15.5841C41.6996 13.2427 43.548 11.3454 45.829 11.3454C48.11 11.3454 49.9348 13.2185 49.9584 15.5397V15.6285Z"
								fill="#454545"
							></path>
							<path
								className="fill-current transition-colors duration-100 ease-out"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M106.048 23.0888C106 23.0888 105.953 23.0646 105.926 23.0242L101.273 16.6096L98.823 19.0559V22.9072C98.823 22.9919 98.7562 23.0646 98.6697 23.0646H95.4212C95.3386 23.0646 95.2678 22.996 95.2678 22.9072V3.64706C95.2678 3.56229 95.3347 3.48962 95.4212 3.48962H98.6697C98.7523 3.48962 98.823 3.55825 98.823 3.64706V14.3085L105.076 8.10785C105.104 8.07959 105.143 8.06344 105.182 8.06344H109.489C109.583 8.06344 109.619 8.13611 109.63 8.16033C109.638 8.18455 109.662 8.26125 109.595 8.32988L103.704 14.1955L109.972 22.8385C110.008 22.887 110.012 22.9475 109.984 23C109.957 23.0525 109.906 23.0848 109.851 23.0848H106.051L106.048 23.0888Z"
								fill="#454545"
							></path>
						</svg>
					</Link>
					<ul className="flex space-x-8 text-lg font-[500]">
						<Link className="underline-grow relative" href="#">
							Beranda
						</Link>
						<Link className="dropdown underline-grow relative" href="#">
							Gabung Menjadi Mitra
						</Link>
						<Link className="underline-grow relative" href="#">
							Karir
						</Link>
						<Link className="dropdown underline-grow relative" href="#">
							Perusahaan
						</Link>
						<Link className="underline-grow relative" href="#">
							Produk
						</Link>
						<Link className="underline-grow relative" href="#">
							Blog
						</Link>
						<Link className="underline-grow relative" href="#">
							Bantuan
						</Link>
						<select className="bg-inherit">
							<option value="">ID</option>
							<option value="">EN</option>
						</select>
					</ul>
				</div>
			</nav>
		</>
	);
};
export default Navbar;
