import { Icons } from "@shared/ui";

export default function Footer() {
	return (
		<footer className="bg-[#0A1017] flex w-full justify-center px-[24px] py-[32px] md:px-[146px] md:py-[48px]">
			<article className="w-full max-w-full md:max-w-[1400px]">
				<div className="flex flex-col md:flex-row justify-between gap-8">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<Icons.Symbol />
							<div className="flex items-center gap-1">
								<span className="text-white font-bold">스마트뉴비</span>
							</div>
						</div>
						<div className="flex flex-col gap-1 text-sm text-gray-400">
							<p>대전광역시 유성구 동서대로 125, 한발인큐베이터 타운 2층 202(덕명동, 국립한발대학교)</p>
							<p>대표: 전준영</p>
							<p>사업자등록번호: 498-05-02914</p>
						</div>
					</div>

					<div className="flex gap-6">
						<a href="https://www.instagram.com/all.about.hanbat/" target="_blank" rel="noopener noreferrer">
							<img src="/icons/instagram.svg" alt="instagram" />
						</a>
					</div>
				</div>
				<div className="mt-8 text-sm text-gray-500">
					© 2025 스마트뉴비 All rights reserved.
				</div>
			</article>

		</footer>
	);
}
