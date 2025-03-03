import type { DetailedHTMLProps, HTMLAttributes } from "react";
import { button } from "./variant";
import type { Variant } from "./variant";

type Props =
	DetailedHTMLProps<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	& Variant;

export default function Button({ intent, size, disabled, full, children, className, ...props }: Props) {
	const variant = {
		intent, size, disabled, full, className,
	};

	return (
		<button className={button(variant)} {...props}>{children}</button>
	);
}

