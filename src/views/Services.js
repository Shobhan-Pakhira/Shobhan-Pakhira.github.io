import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../constant";

const services = [
	{
		name: "UI/UX Design",
		description:
			"UI/UX Design creates intuitive and user-friendly digital experiences by combining design elements with functional purpose. It involves understanding user needs, designing interfaces, conducting testing and refining the final product. The goal is to provide seamless and aesthetically pleasing experiences for end users.",
		link: "Learn More",
	},
	{
		name: "Logo Design",
		description:
			"UI/UX Design creates intuitive and user-friendly digital experiences by combining design elements with functional purpose. It involves understanding user needs, designing interfaces, conducting testing and refining the final product. The goal is to provide seamless and aesthetically pleasing experiences for end users.",
		link: "Learn More",
	},
	{
		name: "Branding",
		description:
			"UI/UX Design creates intuitive and user-friendly digital experiences by combining design elements with functional purpose. It involves understanding user needs, designing interfaces, conducting testing and refining the final product. The goal is to provide seamless and aesthetically pleasing experiences for end users.",
		link: "Learn More",
	},
	{
		name: "Graphic Designing",
		description:
			"UI/UX Design creates intuitive and user-friendly digital experiences by combining design elements with functional purpose. It involves understanding user needs, designing interfaces, conducting testing and refining the final product. The goal is to provide seamless and aesthetically pleasing experiences for end users.",
		link: "Learn More",
	},
];

const Services = () => {
	return (
		<section className="section" id="services">
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row">
					{/* text */}
					<motion.div 
					variants={fadeIn('right',0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{once:false, amount:0.3}}
					className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0">
						<h2 className="h2 text-accent mb-6"> What I Do</h2>
						<h3 className="h3 max-w-[455px] mb-16">
							Driving my passion for design, technology, and automobiles
							forward.
						</h3>
						<button className="btn btn-sm"> Take a look at my work </button>
					</motion.div>
					{/* services */}
					<motion.div
					variants={fadeIn('left',0.3)}
					initial="hidden"
					whileInView={"show"}
					viewport={{once:false, amount:0.3}}
					className="flex-1">
						{/* service list */}
						<div>
							{services.map((service, index) => {
								//Destructuring Service
								const { name, description, link } = service;
								return (
									<div className="border-b border-white/20 h-[190px] mb-[20px] flex" key={{ index }}>
										<div className="max-w-[476px]">
											<h4 className="text-[20px] tracking-wider font-primary font-semibold mb-4">{name}</h4>
											<p className="font-secondary mb-4 leading-tight">{description}</p>
										</div>
										<div className="flex flex-col flex-1 items-end">
											<a className="btn w-9 h-9 mb-[42px] flex justify-center items-center" href="#">
												<BsArrowUpRight />
											</a>
											<a className="text-gradient text-sm" href="#">{link}</a>
										</div>
									</div>
								);
							})}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Services;
