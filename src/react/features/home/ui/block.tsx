type Props = {
	bgSrc: string;
	title: string;
	description: string[];
	className?: string;
};

export default function Block({ bgSrc, title, description, className }: Props) {
	return (
		<nav
			style={{
				background: `url(${bgSrc})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			className={`w-full min-h-[274px] flex px-[20px] py-[24px] ${className || ''}`}
		>
			<div className="flex flex-col w-full md:w-4/5 self-end">
				<h1 className="text-2xl text-white font-bold">
					{title}
				</h1>
				<div className="border-b border-white w-full my-[8px]" />
				{description.map((s, i) => (
					<p key={i} className="text-md text-white">
						{s}
					</p>
				))}
			</div>
		</nav>
	);
}
