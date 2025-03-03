import type {ReactNode} from 'react';
import Layout from "../features/layout";
import { Banner } from "@features/layout";
import HomePart from '@features/home';
import Contact from "@features/contact";
import Portfolios from "@features/portfolios";

function TopContent() {
	return (
			<Layout>
				<div className="mt-[36px] max-w-[960px] flex flex-col gap-y-[128px] w-full">
					<Banner />
					<HomePart.Service />
				</div>



				{/*<div className="mt-[36px] max-w-[960px] flex flex-col gap-y-[128px] w-full">*/}
				{/*	<Contact />*/}
				{/*</div>*/}
			</Layout>
	);
}

const PortfolioComp = () => (
	<Layout header={false}>
		<div className="max-w-[960px] mt-[128px] flex flex-col gap-y-[128px] w-full">
			<span className="text-3xl text-slate-800 font-bold">포트폴리오</span>
		</div>
		<section className="px-4 md:px-0" id="portfolio">
		</section>
		<div className="max-w-[960px] flex flex-col gap-y-[128px] w-full">
			<Portfolios />
		</div>
	</Layout>
);

const ContactComp = () => (
	<Layout header={false}>

		<div className="max-w-[960px] my-[128px] flex flex-col w-full">
			<section className="px-4 md:px-0 mb-[36px]" id="portfolio">
				<span className="text-3xl text-slate-800 font-bold">문의하기</span>
			</section>
			<Contact />
		</div>
	</Layout>
);

const Home = {
	TopContent,
	Portfolios: PortfolioComp,
	Contact: ContactComp,
};

export default Home;
