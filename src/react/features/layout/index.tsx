import type { ReactNode } from "react";

type Props = {
	children: ReactNode;
	header?: boolean;
}

export default function Layout({ children, header = true }: Props) {
	return (
			<div className="LayoutRoot">
				<div className="flex flex-col items-center w-full" id="LayoutContent">
					<section className="w-full flex-col items-center flex h-full">
						{children}
					</section>
				</div>
			</div>
	);
}

export { default as Header } from './ui/header';
export { default as Banner } from './ui/banner';
export { default as Footer } from './ui/footer';
