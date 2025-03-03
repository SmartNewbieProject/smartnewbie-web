import { useSwiper } from "swiper/react";
import { Button } from "@shared/ui";

export default function SliderControl() {
	const swiper = useSwiper();
	const onClickNextSlide = () => swiper.slideNext();
	const onClickPrevSlide = () => swiper.slidePrev();

	return (
		<div className="flex w-full justify-end">
			<nav className="flex gap-x-2 mt-[12px]">
				<Button onClick={onClickPrevSlide} intent="secondary">이전</Button>
				<Button onClick={onClickNextSlide} intent="secondary">다음</Button>
			</nav>
		</div>
	);
};
