function MyInfo() {
	return (
		<div className=" 500:grow">
			<h3 className="text-[2.8rem] w-fit  font-semibold text-[#fff]/90 mb-16 md:mb-[4.5rem]  md:text-[3.5rem] animate-fadeIn-translateUp about-me-titles-accent ">
				My info
			</h3>

			<div className="flex items-center mb-10 gap-8 opacity-0 animate-[fadeIn-translateUp_1s_0.2s_forwards]  ">
				<img
					src="/picture.webp"
					alt="my personal picture"
					className="w-32 rounded-full  animate-[ringSpread_1s_1.3s_forwards] aspect-square "
				/>

				<p className=" text-[2.2rem]  font-semibold tracking-wider text-[#fff]/90  ">
					Salah Aassab
				</p>
			</div>

			<div className="text-[1.5rem] [&>*]:mb-6 min-w-[28rem]  max-w-[36rem]  lg:text-[1.6rem] text-[#ddd] leading-relaxed ">
				<p className="opacity-0 animate-[fadeIn-translateUp_0.8s_0.5s_forwards]">
					Hello! I&apos;m Salah Aassab, a front-end web developer specializing
					in React.js.
				</p>

				<p className="opacity-0 animate-[fadeIn-translateUp_0.8s_0.7s_forwards]">
					Since 2020, I&apos;ve been honing my skills in HTML, CSS, and
					JavaScript, with a particular focus on building responsive and dynamic
					web applications.
				</p>
				<p className="opacity-0 animate-[fadeIn-translateUp_0.8s_0.9s_forwards]">
					I&apos;ve completed several projects showcasing my expertise in React
					and am currently expanding my skills towards becoming a MERN stack
					developer.
				</p>
				<p className="opacity-0 animate-[fadeIn-translateUp_0.8s_1.1s_forwards]">
					Let&apos;s work together to bring your project to life with clean,
					efficient, and effective code.
				</p>
			</div>
		</div>
	);
}

export default MyInfo;
