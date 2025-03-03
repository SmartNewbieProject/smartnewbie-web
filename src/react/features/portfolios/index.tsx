import type { ReactElement, ReactNode } from 'react';
import type { SkillProps } from "./ui/skill";
import Panel from "@features/portfolios/ui/panel";
import { Slider } from "@shared/ui";
import type { SwiperProps } from "swiper/react";
import portfolioData from "@features/portfolios/constants";

export type PanelMetadata = {
	title: ReactElement | string;
	description: string;
	skills: SkillProps[];
	darkMode?: boolean;
	background: string;
	rules: string[],
	features: string[],
	slides: ReactNode[];
	sliderOptions?: SwiperProps;
};



const panels = [
	<Panel {...portfolioData.internMate} />,
	<Panel {...portfolioData.fsComEsg} />,
];


export default function Portfolios() {
	return (
		<nav className="w-full mt-[36px]">
			<Slider panels={panels} />
		</nav>
	);
}
