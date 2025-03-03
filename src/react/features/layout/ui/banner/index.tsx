export default function Banner() {
	return (
		<div className="relative w-full max-w-[960px] h-[400px] md:h-[600px] drop-shadow-md">
			<div className="absolute inset-0 flex items-center justify-center">
				<img
					src="/banner.avif"
					alt="배너 이미지"
					className="w-full h-full object-cover overflow-hidden rounded-none md:rounded-xl"
				/>
				<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-none md:rounded-xl" />
			</div>
			<div className="absolute bottom-0 left-0 p-4 md:p-8 text-white z-10">
				<h1 className="text-2xl md:text-5xl font-bold mb-4">
					작은 아이디어도 현실이 되는 공간
				</h1>
				<p className="text-md md:text-lg">
					모든 아이디어가 현실이 되는 곳, 스토리텔링이 펼쳐집니다.
				</p>
				<p className="text-md md:text-lg">
					우리는 끊임없이 가능성을 탐구하며 기술과 창의를 연결하여 더 큰 가치를 만들기 위한 시스템을 구축하며 혁신과 가능성을 제공합니다.
				</p>
				<p>
					모두의 비즈니스가 더 큰 가능성으로 확장될 수 있도록 실현될 수 있는 비즈니스를 발견하여 이끌어갑니다.
				</p>
			</div>
		</div>
	);
}
