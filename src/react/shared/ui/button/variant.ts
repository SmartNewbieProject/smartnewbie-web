import { cva, type VariantProps } from "class-variance-authority";

export type Variant = VariantProps<typeof button>;

export const button = cva(["font-semibold", "cursor-pointer", "border", "rounded-lg"], {
	variants: {
		intent: {
			primary: ["bg-blue-500", "text-white", "border-transparent"],
			secondary: ["bg-white", "text-gray-800", "border-gray-400"],
		},
		size: {
			small: ["text-sm", "py-1", "px-2"],
			medium: ["text-base", "h-[40px]", "py-1", "px-4"],
		},
		// `boolean` variants are also supported!
		disabled: {
			false: null,
			true: ["opacity-50", "cursor-not-allowed"],
		},
		full: {
			false: null,
			true: 'w-full',
		},
	},
	compoundVariants: [
		{
			intent: "primary",
			disabled: false,
			class: "hover:bg-blue-600",
		},
		{
			intent: "secondary",
			disabled: false,
			class: "hover:bg-gray-100",
		},
		{
			intent: "primary",
			size: "medium",
			// **or** if you're a React.js user, `className` may feel more consistent:
			// className: "uppercase"
			class: "uppercase",
		},
	],
	defaultVariants: {
		intent: "primary",
		size: "medium",
		disabled: false,
	},
});
