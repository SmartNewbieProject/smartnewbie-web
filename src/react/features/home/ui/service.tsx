import Block from "./block";

export default function Service() {
	return (
		<nav>
			<section className="px-4 md:px-0">
				<span className="text-3xl text-slate-800 font-bold">주요 서비스</span>
				<div className="my-[14px]">
					<p className="text-slate-700 text-lg">
						아이디어에서 실행까지, 스마트뉴비가 함께합니다.
					</p>
					<p className="text-slate-700 text-lg">
						모두의 혁신적인 비전을 현실로 만들기 위해, 최적의 IT 솔루션을 구축하고 실현합니다.
					</p>
				</div>
			</section>

			<ul className="mt-12">
				<li>
					<Block bgSrc="/service-0.png" {...blockQuotes.develop} />
				</li>
				<li>
					<Block bgSrc="/service-2.png" {...blockQuotes.internmate} />
				</li>
				<li>
					<Block bgSrc="/service-1.png" {...blockQuotes.marketing} />
				</li>
			</ul>
		</nav>
	);
}

const blockQuotes = {
	develop: {
		title: '웹·앱 기획 및 MVP 개발',
		description: [
			'고객이 대표님의 서비스에 만족하고 사업이 성공하도록 돕는 것이 우리의 목표입니다.',
			'개발이 처음이어도 친절히 설명해드리며, 투명하고 합리적인 비용으로 진행합니다.',
		],
		className: 'rounded-none md:rounded-t-2xl',
	},
	marketing: {
		title: '마케팅 솔루션',
		description: [
			'스타트업과 기업의 브랜드 가치를 극대화하는 맞춤형 마케팅 솔루션을 제공합니다.',
			'서비스 초기 시장 진입부터 성장 단계까지, 데이터 기반의 전략적 접근으로 성공적인 마케팅을 지원합니다.',
		],
		className: 'rounded-none md:rounded-b-2xl',
	},
	internmate: {
		title: '인턴메이트 - 대전지역 청년채용 플랫폼',
		description: [
			'인턴메이트는 대전 지역 대학생과 기업을 연결하는 직무 맞춤형 채용 플랫폼입니다.',
			'지역 대학생이 현장에서 직접 실무를 경험하고, 기업은 신뢰할 수 있는 인재를 찾을 수 있습니다.',
			'실력 있고 믿고 맡길 수 있는 인턴을 찾고 계신가요? 인턴메이트에서 연결해드립니다!',
		],
	},
};
