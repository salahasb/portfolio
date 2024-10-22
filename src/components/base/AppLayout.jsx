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
		<div className="h-dvh  max-w-[190rem] mx-auto relative bg-[radial-gradient(50%_35%_at_50%_-20%,#ec13512a_-20%,transparent),radial-gradient(#1c0209_40%,transparent_80%)] md:bg-[radial-gradient(50%_50%_at_50%_-5%,#ec13512a_-50%,transparent),radial-gradient(#1c0209_40%,transparent_80%)]  bg-no-repeat bg-center">
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
