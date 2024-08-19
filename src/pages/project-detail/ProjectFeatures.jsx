import { PiDotBold } from "react-icons/pi";
import Title from "./Title";

function ProjectFeatures({ project }) {
	return (
		<div className="basis-1/2 tracking-wider leading-relaxed text-[clamp(0rem,4vw,1.8rem)] text-[#ddd] max-w-[60rem]">
			<Title title="Features" />

			{project.features.map((feature, i) => (
				<p className=" mb-[2rem] " key={i}>
					<span className="  text-[#eee] font-bold shrink-0 ">
						<span>{feature.title} </span>
					</span>
					<span>{feature.description}</span>
				</p>
			))}
			{/* <p className=" mb-[2rem] ">
				<span className="  text-[#eee] font-bold shrink-0 ">
					<span>Extensive Recipe Search: </span>
				</span>
				<span className=" ">
					Users can search through a database of over 1,000,000 recipes with
					pagination to easily browse through results.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="  text-[#eee] font-bold shrink-0 ">
					Detailed Recipe View:{" "}
				</span>
				<span className=" ">
					Each recipe includes detailed information such as the name, image,
					cooking time, servings, ingredients, and step-by-step instructions.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="  text-[#eee] font-bold shrink-0 ">
					Interactive Serving Size Adjustment:{" "}
				</span>
				<span className=" ">
					Users can adjust the number of servings, and the ingredients
					automatically scale to match the selected serving size.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="  text-[#eee] font-bold shrink-0 ">
					Recipe Bookmarking:{" "}
				</span>
				<span className=" ">
					Users can bookmark their favorite recipes, which are stored locally on
					their device for easy access.
				</span>
			</p>

			<p className=" mb-[2rem] ">
				<span className="  text-[#eee] font-bold shrink-0">
					Add Your Own Recipes:{" "}
				</span>
				<span className=" ">
					A user-friendly form allows users to add their own recipes, complete
					with all relevant details, to the backend (external API).
				</span>
			</p> */}
		</div>
	);
}

export default ProjectFeatures;
