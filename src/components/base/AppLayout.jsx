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

	return (
		<div className="h-dvh px-10 500:px-14 md:px-20 xl:px-36 max-w-[1900px] mx-auto relative">
			<Loader isPageLoaded={isPageLoaded} />

			{isPageLoaded && (
				<>
					<Header />

					<main className="h-[calc(100%-8.9rem)]">
						<Outlet />
					</main>

					<Particle
						className={` ${isPageLoaded ? "animate-[fadeIn_3s_forwards]" : ""}`}
					/>

					<NavbarIcons />

					<ScrollIndicator />
				</>
			)}
		</div>
	);
}

export default AppLayout;
