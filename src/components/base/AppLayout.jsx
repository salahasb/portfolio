import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import NavbarIcons from "./NavbarIcons.jsx";
import Particle from "../../lib/Particles.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";
import { useEffect, useState } from "react";
import Loader from "../Loader.jsx";

function AppLayout() {
	const [isPageLoaded, setIsPageLoaded] = useState(false);

	useEffect(() => {
		const handlePageLoad = () => {
			setIsPageLoaded(true);
		};

		window.addEventListener("load", handlePageLoad);

		return () => {
			window.removeEventListener("load", handlePageLoad);
		};
	}, []);

	// if (!isPageLoaded) {
	// 	return (
	// 		<div className="font-extralight h-dvh xl:text-[2.5rem] size-full  flex justify-center items-center text-white animate-pulse   before:content-['Loading...'] tracking-[25px] uppercase"></div>
	// 		// <div className="h-dvh px-10 500:px-14 md:px-20 xl:px-36 max-w-[1900px] mx-auto relative">
	// 		// {/* <Particle /> */}
	// 		// {/* </div> */}
	// 	);

	// 	// return <img src="/Spinner@1x-1.0s-200px-200px.svg">Loading......</img>;
	// }

	return (
		<div className="h-dvh px-10 500:px-14 md:px-20 xl:px-36 max-w-[1900px] mx-auto relative">
			{/* {!isPageLoaded &&  */}
			<Loader isPageLoaded={isPageLoaded} />
			{/* } */}
			{isPageLoaded && (
				<>
					<Header />

					<main className="h-[calc(100%-8.9rem)]">
						<Outlet />
					</main>

					<Particle
						className={` ${isPageLoaded ? "animate-[fadeIn_3s_forwards]" : ""}`}
					/>
					{/* <Navbar className="lg:hidden flex justify-center  text-[1.4rem] 425:text-[1.8rem] w-full fixed bottom-10 left-1/2 -translate-x-1/2" /> */}
					<NavbarIcons />
					<ScrollIndicator />
				</>
			)}
		</div>
	);
}

export default AppLayout;
