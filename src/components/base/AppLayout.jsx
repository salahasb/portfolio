import Header from "./Header.jsx";
import NavbarIcons from "./NavbarIcons.jsx";
import Particle from "../../lib/Particles.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";
import { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import RouteManager from "../../features/animated-routing/components/RouteManager.jsx";
import { AnimatedRoutingProvider } from "../../features/animated-routing/contexts/AnimatedRoutingContext.jsx";

// the page will begin with "loading"  and after that, the page will render after it completely loaded
function AppLayout() {
	const [isPageLoaded, setIsPageLoaded] = useState(false);
	const [isWaiting, setIsWaiting] = useState(true);

	// effect for rendering the page after the page has loaded + setting a delay for waiting the animation to finish in order to render the main content
	useEffect(() => {
		const handlePageLoad = () => {
			setIsPageLoaded(true);
			setTimeout(() => setIsWaiting(false), 1500);
		};

		if (document.readyState === "complete") {
			handlePageLoad();
		} else {
			window.addEventListener("load", handlePageLoad);

			return () => {
				window.removeEventListener("load", handlePageLoad);
			};
		}
	}, []);

	return (
		<div className="h-dvh px-10 500:px-14 md:px-20 xl:px-36 max-w-[190rem] mx-auto relative bg-[radial-gradient(circle_at_50%_-40%,#ec135123_20%,transparent_60%),radial-gradient(#2b040f_30%,transparent_70%)]">
			<Loader isPageLoaded={isPageLoaded} />

			{isPageLoaded && (
				<AnimatedRoutingProvider>
					<Header />

					<main className="h-[calc(100%-8.9rem)] relative w-full overflow-auto  ">
						{!isWaiting && <RouteManager />}
					</main>

					<Particle isPageLoaded={isPageLoaded} />

					<NavbarIcons />

					<ScrollIndicator />
				</AnimatedRoutingProvider>
			)}
		</div>
	);
}

export default AppLayout;
