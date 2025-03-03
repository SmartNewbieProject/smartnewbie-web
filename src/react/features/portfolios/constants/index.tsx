import { Icons } from "@shared/ui";
import type { PanelMetadata } from "@features/portfolios";

const fsComEsg: PanelMetadata = {
	title: <img src="/esg-logo.png" alt="esg-logo.png" />,
	description: '한국 ESG 협회의 공식 웹사이트를 기획 및 개발하여, 협회의 핵심 가치를 효과적으로 전달할 수 있도록 최적화된 디지털 플랫폼을 구축했습니다.',
	darkMode: true,
	skills: [
		{ element: <Icons.Spring />, name: 'Spring 6.0+', darkMode: true },
		{ element: <Icons.Figma />, name: 'Figma', darkMode: true },
		{ element: <Icons.MariaDB />, name: 'MariaDB', darkMode: true },
		{ element: <Icons.TailwindCSS />, name: 'TailwindCSS', darkMode: true },
		{ element: <Icons.Thymeleaf />, name: 'Thymeleaf', darkMode: true },
		{ element: <Icons.Webpack />, name: 'Webpack 5', darkMode: true },
	],
	background: 'gray-gradient-bg',
	features: ['전자결제(후원)', '공지사항', '챗봇(GPT 3.5 기반)', '반응형 지원', '어드민'],
	rules: ['기능명세', '서비스 기획', '디자인', '개발'],
	slides: [
			<div>
				<img src="/esg-main.png" className="rounded-lg object-fit" onClick={e => e.preventDefault()} />
	</div>,
	<div className="w-full flex justify-center">
	<img src="/esg-iphone.gif" className="rounded-lg object-fit max-h-[540px]" onClick={e => e.preventDefault()} />
	</div>,
	<div className="w-full flex justify-center">
	<img src="/education.png" className="rounded-lg object-fit max-h-[540px]" onClick={e => e.preventDefault()} />
	</div>
	],
};

const internMate: PanelMetadata = {
	title: (
		<div className="flex gap-x-1 items-center" onDrag={e => e.preventDefault()}>
			<Icons.Symbol />
			<span className="text-xl font-semibold text-slate-900">인턴메이트 - 대전지역 청년채용플랫폼</span>
		</div>
	),
	description: '인턴메이트는 지역 기반 청년 맞춤형 채용 플랫폼으로, 기업과 인재를 효율적으로 연결하는 스마트한 솔루션을 제공합니다.',
	darkMode: false,
	skills: [
		{ element: <Icons.Spring />, name: 'Spring 6.0+', darkMode: false },
		{ element: <Icons.Figma />, name: 'Figma', darkMode: false },
		{ element: <Icons.RDS />, name: 'RDS', darkMode: false },
		{ element: <Icons.AWS />, name: 'AWS', darkMode: false },
		{ element: <Icons.React />, name: 'React 18+', darkMode: false },
		{ element: <Icons.ReactRouter />, name: 'Router', darkMode: false },
		{ element: <Icons.TanstackQuery />, name: 'Tanstack Query', darkMode: false },
		{ element: <Icons.Nginx />, name: 'Nginx', darkMode: false },
	],
	background: 'bg-white box-shadow-sm border border-gray-50',
	features: ['AOS/IOS 스토어 출시', '추천 매칭 알고리즘', '기업 사용자 기능', '일반 사용자 기능', '마이페이지', '내 커리어 관리'],
	rules: ['자사 솔루션', '기능명세', '서비스 기획', '디자인', '개발'],
	slides: [
		<div className="w-full flex justify-center">
			<img src="/internmate/im-home.png" className="rounded-lg object-fit max-h-[540px]" onClick={e => e.preventDefault()} />
		</div>,
		<div className="w-full flex justify-center">
			<img src="/internmate/im-my-career.gif" className="rounded-lg object-fit max-h-[540px]" onClick={e => e.preventDefault()} />
		</div>,
		<div className="w-full flex justify-center">
			<img src="/internmate/im-recruitment-details.gif" className="rounded-lg object-fit max-h-[540px]" onClick={e => e.preventDefault()} />
		</div>,
		<div className="w-full flex justify-center">
			<img src="/internmate/im-data-management.png" className="rounded-lg object-fit max-h-[540px]" onClick={e => e.preventDefault()} />
		</div>
	],
};



const portfolioData = {
	fsComEsg,
	internMate,
};

export default portfolioData;
