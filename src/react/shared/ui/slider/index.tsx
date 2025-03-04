import type { ReactNode } from "react";
import { cn } from "@/lib/utils.ts";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperProps } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Control from './control';

type Props = {
	panels: ReactNode[];
	hideControl?: boolean;
} & SwiperProps;

export default function Slider({ panels, nested, modules, hideControl = false, ...swiperProps }: Props) {

	return (
		<Swiper
			slidesPerView={1}
			modules={[Autoplay, ...(modules || [])]}
			autoplay={{
				delay: 5000,
				pauseOnMouseEnter: true,
			}}
			loop
			{...swiperProps}
		>
			{!hideControl && <Control />}
			{panels.map((panel, i) => (
				<SwiperSlide key={i} className={cn([
					'w-full',
				])}>
					{panel}
				</SwiperSlide>
			))}
		</Swiper>
	);
}

export { default as SwiperControl } from './control';
