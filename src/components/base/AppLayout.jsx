import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import NavbarIcons from "./NavbarIcons.jsx";
import Particle from "../../lib/Particles.jsx";
import ScrollIndicator from "./ScrollIndicator.jsx";

function AppLayout() {
	return (
		<div className="h-dvh px-10 500:px-14 md:px-20 xl:px-36 max-w-[1900px] mx-auto relative">
			<Header />

			<main className="h-[calc(100%-8.9rem)]">
				<Outlet />
			</main>

			{/* <Particle /> */}

			{/* <Navbar className="lg:hidden flex justify-center  text-[1.4rem] 425:text-[1.8rem] w-full fixed bottom-10 left-1/2 -translate-x-1/2" /> */}
			<NavbarIcons />

			<ScrollIndicator />
		</div>
	);
}

export default AppLayout;
