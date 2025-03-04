import Skill from "../skill";
import { cn } from "@/lib/utils.ts";
import type { PanelMetadata } from "@features/portfolios";
import { Badge, Slider } from "@shared/ui";
import { EffectCube } from 'swiper/modules';

const getColorMode = (darkMode: boolean | undefined) => !!darkMode ? 'text-white' : 'text-slate-800';

export default function Panel({ title, skills, rules, features, description, background, darkMode, slides }: PanelMetadata) {
	return (
		<article
			className={cn([
				'w-full p-[38px] relative min-h-[680px] h-full md:h-fit rounded-none md:rounded-xl',
				background,
			])}
		>
			<nav className="flex flex-col gap-y-1">
				<div>
					{title}
				</div>
				<div className="border-b h-px w-full" />
				<span className={cn([
					getColorMode(darkMode),
					'text-md'
				])}>
					{description}
				</span>
			</nav>

			<section className="flex gap-[36px] flex-col md:flex-row mt-3 overflow-hidden">
				<nav className="flex flex-col gap-y-1 max-w-[340px]">
					<span className={cn([getColorMode(darkMode), 'font-semibold text-lg'])}>역할</span>
					<div className="flex flex-wrap gap-1.5">
						{rules.map((rule) => (
							<Badge variant="secondary" key={rule}>{rule}</Badge>
						))}
					</div>

					<span className={cn([getColorMode(darkMode), 'font-semibold text-lg mt-2'])}>핵심 기능</span>
					<div className="flex flex-wrap gap-1.5">
						{features.map((desc) => (
							<Badge variant="secondary" key={desc}>{desc}</Badge>
						))}
					</div>

					<span className={cn([getColorMode(darkMode), 'font-semibold text-lg mt-2'])}>사용 기술</span>
					<div className="flex flex-wrap gap-x-3 gap-y-3">
						{skills.map((skill) => (
							<Skill {...skill} key={skill.name} />
						))}
					</div>
				</nav>

				<nav className="max-w-[620px] w-full h-full drop-shadow-xl">
					<Slider
						hideControl
						panels={slides}
						autoplay={{
							delay: 2500,
						}}
						effect="cube"
						modules={[EffectCube]}
						cubeEffect={{
							shadowOffset: 0,
							shadowScale: 0,
						}}
						autoHeight
					/>
				</nav>
		</section>
		</article>
	);
}
