import { PiMouseSimple } from "react-icons/pi";

function ScrollIndicator() {
	return (
		<div className="absolute top-0 right-0 w-fit h-full flex flex-col justify-center items-center gap-10 ">
			<div className="h-[28%] w-[0.2rem] bg-gray-300 rounded-xl"></div>

			<div className="border-[0.2rem] w-[2rem] h-[3.3rem] border-gray-300 rounded-2xl relative z-10">
				<div className="absolute top-[0.3rem] left-1/2 w-[0.3rem] h-[0.7rem] bg-gray-300  rounded-xl -translate-x-1/2"></div>
			</div>

			<div className="h-[28%] w-[0.2rem] bg-gray-300 rounded-xl"></div>
		</div>
	);
}

export default ScrollIndicator;
