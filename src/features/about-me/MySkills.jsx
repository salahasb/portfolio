import SkillItem from "./SkillItem";

import {
	PiDevicesFill,
	PiLightbulbFill,
	PiSparkleFill,
	PiSpeedometerFill,
} from "react-icons/pi";

import {
	BiLogoCss3,
	BiLogoHtml5,
	BiLogoJavascript,
	BiLogoReact,
	BiLogoTailwindCss,
} from "react-icons/bi";

const skills = [
	{ name: "Html", icon: <BiLogoHtml5 size={22} /> },
	{ name: "Css", icon: <BiLogoCss3 size={22} /> },
	{ name: "Tailwind", icon: <BiLogoTailwindCss size={22} /> },
	{ name: "Javascript", icon: <BiLogoJavascript size={22} /> },
	{ name: "React", icon: <BiLogoReact size={22} /> },
	{ name: "Responsive Design", icon: <PiDevicesFill size={22} /> },
	{ name: "Clean Code", icon: <PiSparkleFill size={22} /> },
	{ name: "Performance", icon: <PiSpeedometerFill size={22} /> },
	{ name: "Problem Solving", icon: <PiLightbulbFill size={22} /> },
];

function MySkills() {
	return (
		<div className="h-full">
			<h4 className="text-[2.8rem] font-semibold text-[#ddd]  mb-16 500:mb-16 md:mb-[6.4rem] w-fit  md:text-[3.5rem]  animate-fadeIn-translateUp about-me-titles-accent ">
				My skills
			</h4>

			<div className="grid grid-cols-1 500:grid-cols-[auto_1fr] gap-5 500:gap-10 md:gap-y-12 md:gap-x-2 text-[1.8rem] lg:mt-[6rem] text-[#ddd]">
				{skills.map((skill, i) => (
					<SkillItem
						key={skill.name}
						skillName={skill.name}
						icon={skill.icon}
						style={{
							animation: `fadeIn-translateUp 0.8s ${
								i === 0 ? "0.5s" : 0.5 + (i - 1 + 1) / 10 + "s"
							}  forwards`,
						}}
					/>
				))}
			</div>
		</div>
	);
}

export default MySkills;
