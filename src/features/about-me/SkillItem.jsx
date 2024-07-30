import { PiAirTrafficControlBold } from "react-icons/pi";

function SkillItem({ skillName }) {
	return (
		<div className="flex items-center gap-5">
			<div className="p-3 bg-brand-800 rounded-full">
				<PiAirTrafficControlBold />
			</div>

			<span>{skillName}</span>
		</div>
	);
}

export default SkillItem;
