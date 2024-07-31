function SkillItem({ skillName, icon }) {
	return (
		<div className="flex items-center gap-5">
			<div className=" size-16 center shrink-0 ring-[0.6px] ring-brand-500 bg-brand-900 rounded-full">
				{icon}
			</div>

			<span>{skillName}</span>
		</div>
	);
}

export default SkillItem;
