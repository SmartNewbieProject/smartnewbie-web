import type { ReactElement } from "react";
import { Badge } from "@shared/ui";
import { cn } from "@/lib/utils.ts";

export type SkillProps = {
	element: ReactElement;
	name: string;
	darkMode?: boolean;
};

export default function Skill({ name, element, darkMode }: SkillProps) {
	return (
		<div className="flex flex-col items-center gap-y-2">
			<div className={cn([
				'w-[48px] h-[48px] rounded-full flex items-center justify-center',
				darkMode ? "bg-white" : "bg-gray-100",
			])}>
				{element}
			</div>

			<Badge variant={darkMode ? "secondary" : "default"}>
				{name}
			</Badge>
		</div>
	)
}