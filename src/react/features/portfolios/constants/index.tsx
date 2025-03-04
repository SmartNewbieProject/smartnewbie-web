import { Icons } from "@shared/ui";
import type { PanelMetadata } from "@features/portfolios";
import { cn } from "@/lib/utils";

interface SlideImageProps {
  src: string;
  className?: string;
  desc?: string;
}

const SlideImage = ({ src, className, desc }: SlideImageProps) => (
  <div className="w-full flex flex-col items-center gap-y-2">
    <img 
      src={src} 
      className={cn(["rounded-lg object-fit max-h-[540px]", className])}
      onClick={e => e.preventDefault()} 
    />
    {desc && (
      <p className="text-center text-sm text-gray-500 mt-3">{desc}</p>
    )}
  </div>
);

const easyJoin: PanelMetadata = {
	title: (
		<div className="flex gap-x-1 items-center" onDrag={e => e.preventDefault()}>
			<img src="/easyjoin/favicon.ico" width={32} height={32} onClick={e => e.preventDefault()} />
			<span className="text-xl font-semibold text-slate-900">EasyJoin - 비대면 전자계약 서비스</span>
		</div>
	),
	description: '부동산 전자계약 비대면 지원 서비스입니다. 서명, 직인, 첨부파일 등 전자계약에 필요한 다양한 기능을 제공하며 사전 계약서 템플릿을 작성해두고 언제든 쉽게 업체와 고객 간 전자계약서 작성을 진행할 수 있게 도와줍니다.',
	darkMode: false,
	skills: [
		{ element: <Icons.Nodejs />, name: 'Node.js', darkMode: false },
		{ element: <Icons.React />, name: 'React 18+', darkMode: false },
		{ element: <Icons.ReactRouter />, name: 'Router', darkMode: false },
		{ element: <Icons.MongoDB />, name: 'MongoDB', darkMode: false },
		{ element: <Icons.Express />, name: 'Express', darkMode: false },
		{ element: <Icons.Nginx />, name: 'Nginx', darkMode: false },
		{ element: <Icons.TanstackQuery />, name: 'Tanstack Query', darkMode: false },
	],
	background: 'bg-white box-shadow-sm border border-gray-50',
	features: ['본인인증(Nice)', '기업/사용자용 랜딩', '비대면 전자계약 기능', '대용량 이미지 처리', '전자계약 문서 관리', '계약 인증서 자동 생성', '전자계약용 파일업로드 용 모바일앱 개발'],
	rules: ['기능명세', '서비스 기획', '개발', '프로젝트 관리'],
	slides: [
		<SlideImage src="/easyjoin/bus-home.png" desc="PC 메인페이지" />,
		<SlideImage src="/easyjoin/template.png" desc="기업 사용자 - 전자계약 템플릿 문서함" />,
		<SlideImage src="/easyjoin/template-w.png" desc="기업 사용자 - 전자계약 템플릿 작성화면" />,
		<SlideImage src="/easyjoin/drawing.png" desc="전자계약 - 서명 그리기 기능" />,
		<SlideImage src="/easyjoin/comp-docs.png" desc="기업 사용자 - 계약 완료문서함 관리" />,
		<SlideImage src="/easyjoin/progress.png" desc="계약 사용자 - 계악 중 화면" />,
		<SlideImage src="/easyjoin/sign.png" desc="계약 사용자 - 직인 부여" />,
		<SlideImage src="/easyjoin/sign-management.png" desc="기업 사용자 - 직인 관리" />,
		<SlideImage src="/easyjoin/client-system.png" desc="계약 사용자 - 계약자 전용 화면" />,
		<SlideImage src="/easyjoin/my-info.png" desc="기업 사용자 - 내 정보 관리" />,
		<SlideImage src="/easyjoin/required-attachment.png" desc="전자계약 - 신분증 등 필수파일 업로드 화면" />
	],
};

const treedStudio: PanelMetadata = {
	title: (
		<div className="flex gap-x-1 items-center" onDrag={e => e.preventDefault()}>
			<img src="/treed/logo_treed.png" onClick={e => e.preventDefault()} />
			<span className="text-xl font-semibold text-slate-900">Treed Studio - AI 데이터 거래 및 수집 서비스</span>
		</div>
	),
	description: '(주)알체라에서 운영하는 인공지능 모델을 위한 사전 데이터 수집 서비스입니다. 사용자가 기업 측에서 제시하는 프로젝트에 자율적으로 참여하여 전자계약을 체결하고 데이터(음성, 영상, ...)를 제출하면 관리자에서 확인하고 결제처리를 수행할 수 있습니다.',
	darkMode: false,
	skills: [
		{ element: <Icons.Spring />, name: 'Spring 6.0+', darkMode: false },
		{ element: <Icons.React />, name: 'React 18+', darkMode: false },
		{ element: <Icons.ReactRouter />, name: 'Router', darkMode: false },
		{ element: <Icons.MariaDB />, name: 'MariaDB', darkMode: false },
		{ element: <Icons.Nginx />, name: 'Nginx', darkMode: false },
		{ element: <Icons.Hibernate />, name: 'Hibernate', darkMode: false },
		{ element: <Icons.TanstackQuery />, name: 'Tanstack Query', darkMode: false },
	],
	background: 'bg-white box-shadow-sm border border-gray-50',
	features: ['모두싸인 연동(전자계약)', '결제(NicePay)', '캔버스 기반 이미지 탐색', '어드민', '회원 관리', 'RBAC 권한 관리', '대용량 이미지 압축', '실시간 상태 변경(ws)'],
	rules: ['개발', '자동화 서버 운영', '프로젝트 관리'],
	slides: [
		<SlideImage src="/treed/treed-admin-user-management.png" desc="관리자 - 회원 관리" />,
		<SlideImage src="/treed/treed-pics-valid.png" desc="관리자 - 회원 데이터 검수" />,
		<SlideImage src="/treed/treed-collection.png" desc="관리자 - 회원 데이터 수집 현황" />,
		<SlideImage src="/treed/treed-contract.png" desc="관리자 - 회원 계약 관리" />,
		<SlideImage src="/treed/treed-inspect.png" desc="관리자 - 회원 제출 데이터 실시간 검수" />
	],
};

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
		<SlideImage src="/esg-main.png" className="rounded-lg object-fit" desc="메인 화면" />,
		<SlideImage src="/esg-iphone.gif" desc="모바일 화면" />,
		<SlideImage src="/education.png" desc="교육 화면" />
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
		<SlideImage src="/internmate/im-home.png" desc="메인 화면" />,
		<SlideImage src="/internmate/im-my-career.gif" desc="내 커리어 관리" />,
		<SlideImage src="/internmate/im-recruitment-details.gif" desc="채용 상세 페이지" />,
		<SlideImage src="/internmate/im-data-management.png" desc="개인 데이터 관리" />
	],
};

const portfolioData = {
	fsComEsg,
	internMate,
	treedStudio,
	easyJoin
};

export default portfolioData;
