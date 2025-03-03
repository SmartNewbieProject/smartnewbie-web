export default function ContactCard() {
	return (
		<section
			style={{
				background: 'url("/contact-bg.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
			id="ContactUs"
			className="px-[24px] md:px-[42px] py-[28px] md:py-[52px] rounded-2xl w-full md:max-w-[402px] h-fit md:h-[960px]"
		>
			<div className="flex flex-col justify-between h-full">
				<div className="flex flex-col gap-y-[18px]">
					<p className="text-white font-bold text-[32px] md:text-[48px]">Contact Us.</p>
					<div className="flex flex-col">
						<p className="text-white text-md">당신의 아이디어, 우리의 기술력.</p>
						<p className="text-white text-md">함께하면 현실이 됩니다.</p>
						<p className="text-white text-md">개발이 어렵게 느껴지실 때</p>
						<p className="text-white text-md">스마트뉴비가 처음부터 끝까지 함께합니다.</p>
						<p className="text-white text-md">편하게 문의하세요. 새로운 시작을 함께 만들어갑니다!</p>
					</div>
				</div>

				<div className="flex flex-col gap-y-[4px]">
					<p className="text-white text-md">email: smartnewb2@gmail.com</p>
					<p className="text-white text-md">phone: 010-8465-2476</p>
				</div>
			</div>
		</section>
	);
}
