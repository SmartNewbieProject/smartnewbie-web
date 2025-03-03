import ContactCard from "./ui/contact-card";
import { Button, Input, Select, Textarea } from "@shared/ui";
import Label from "./ui/label";
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@shared/ui/select.tsx";

export default function Contact() {
	return (
		<article
			id="ContactUs"
			className="flex flex-col gap-y-[32px] md:flex-row px-[32px] py-[32px] rounded-3xl w-full bg-white gap-x-[32px]">
			<ContactCard />

			<form className="w-full h-full flex flex-col">
				<section className="flex flex-col w-full h-full">
					<span className="text-slate-900 text-xl font-semibold mb-4">의뢰자 정보</span>

					<div className="flex flex-col gap-y-3">
						<div className="flex flex-col gap-y-1">
							<Label id="name" required>이름</Label>
							<Input placeholder="전준영" id="name" className="max-w-[160px]" />
						</div>
						<div className="flex flex-col gap-y-1">
							<Label id="email" required>이메일</Label>
							<Input placeholder="smartnewb2@gmail.com" id="email" />
						</div>
					</div>

					<span className="text-slate-900 text-xl font-semibold my-4">문의 정보</span>
					<div className="flex flex-col gap-y-3">
						<div>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="문의 종류" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="웹앱 또는 서비스 신규 개발">웹앱 또는 서비스 신규 개발</SelectItem>
									<SelectItem value="제품 유지보수">제품 유지보수</SelectItem>
									<SelectItem value="제품 QA 및 오류 수정">제품 QA 및 오류 수정</SelectItem>
									<SelectItem value="마케팅">마케팅</SelectItem>
									<SelectItem value="기타">기타</SelectItem>
								</SelectContent>
							</Select>
						</div>

						<div className="flex flex-col gap-y-1">
							<Label id="content" required>문의 내용</Label>
							<Textarea placeholder="문의하실 내용을 입력해주세요." id="content" className="w-full min-h-[320px]" />
						</div>
					</div>

				</section>

				<section
					className="mt-6"
				>
					<Button className="w-[240px] h-[48px]" full>
						문의하기
					</Button>
				</section>

			</form>
		</article>
	);
}
