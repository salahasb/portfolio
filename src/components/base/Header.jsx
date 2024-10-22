import Navbar from "./Navbar";
import Button from "../Button";
import useAnimatedNavigate from "../../features/animated-routing/hooks/useAnimatedNavigate";

function Header() {
	const { handleNavigate } = useAnimatedNavigate();

	return (
		<header className=" px-10 500:px-14 md:px-20 xl:px-36 justify-between items-center py-10 relative z-20 opacity-0 animate-[fadeIn-translateDown_1s_1s_forwards] flex ">
			<button
				onClick={() => handleNavigate("/")}
				className="  text-white text-[2.6rem] font-extrabold"
			>
				<span>Salah </span> <span className="text-brand-500">Asb</span>
			</button>

			<Navbar />

			<Button
				onClick={() => handleNavigate("/projects")}
				className={"px-8 hidden 425:inline-block text-[1.8rem] "}
			>
				My Work
			</Button>
		</header>
	);
}

export default Header;
