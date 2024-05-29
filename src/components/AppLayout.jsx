import { Outlet } from "react-router-dom";
import Header from "./Header";
import NavbarIcons from "./NavbarIcons";

function AppLayout() {
	return (
		<div className="h-dvh lg:container px-10 sm:px-14 relative">
			<Header />
			<Outlet />
			{/* <Navbar className="lg:hidden flex justify-center  text-[1.4rem] 425:text-[1.8rem] w-full fixed bottom-10 left-1/2 -translate-x-1/2" /> */}
			<NavbarIcons />
		</div>
	);
}

export default AppLayout;
