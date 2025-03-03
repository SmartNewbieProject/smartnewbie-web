import type { ReactNode } from "react";

type Props = {
	id: string;
	children: ReactNode;
	required?: boolean;
};

export default function Label({ children, id, required }: Props) {
	return (
		<label htmlFor={id} className="flex gap-x-1">
			<span className="text-slate-8	00 text-md">{children}</span>
			{required && <div className="mt-[6px] w-[5px] h-[5px] rounded-4xl bg-rose-500" />}
		</label>
	);
}
