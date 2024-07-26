import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "../Button";
import useAnimatedNavigate from "../../features/animated-routing/hooks/useAnimatedNavigate";

function Header() {
	const handleNavigate = useAnimatedNavigate();

	return (
		<header className="justify-between items-center py-10 relative z-20 opacity-0 animate-[fadeIn-translateDown_1s_1s_forwards] flex ">
			<Link to="/" className="text-white text-[2.6rem] font-extrabold">
				Salah <span className="text-brand-500">Asb</span>
			</Link>

			<Navbar />

			{/* <Button className={"px-8 hidden 425:inline-block text-[1.8rem] "}>
				Let&apos;s talk
			</Button> */}
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
