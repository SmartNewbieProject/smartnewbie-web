import type { MouseEvent } from "react";
import { Button, Icons, TextAnimate } from "@shared/ui";

export default function Header() {
	const handleScrollToContact = (e: MouseEvent) => {
		e.preventDefault();
		const contactSection = document.querySelector('#ContactUs');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
			<header className="px-2 md:px-[40px] h-[60px] bg-white border-b border-gray-100 flex items-center justify-between">
				<nav>
					<a href="/" className="flex gap-x-3 items-center">
						<Icons.Symbol />
						<TextAnimate animation="blurInUp" by="character" className="font-semibold text-slate-900">
							스마트뉴비
						</TextAnimate>
					</a>
				</nav>

				<nav className="flex">
					<ul className="flex gap-[32px] items-center">
						{/* <li className="hidden md:block relative group cursor-pointer">
							<span className="relative text-slate-700">
								회사소개
								<span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-[#0167FF] transition-all duration-300 group-hover:w-full"></span>
							</span>
						</li>
						<li className="hidden md:block relative group cursor-pointer">
							<span className="relative text-slate-700">
								커리어
								<span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-[#0167FF] transition-all duration-300 group-hover:w-full"></span>
							</span>
						</li>
						<li className="hidden md:block relative group cursor-pointer">
							<span className="relative text-slate-700">
								블로그
								<span className="absolute -bottom-[4px] left-0 w-0 h-[2px] bg-[#0167FF] transition-all duration-300 group-hover:w-full"></span>
							</span>
						</li> */}
						<li>
							<Button onClick={handleScrollToContact}>
								문의하기
							</Button>
						</li>
					</ul>
				</nav>
			</header>
	);
}
