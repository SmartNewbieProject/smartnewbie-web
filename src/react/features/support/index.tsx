import { Card, Icons, Marquee } from "@shared/ui";
import Layout from "../layout";

export default function Support() {
	return (
			<section className="px-2 md:px-0 w-full flex justify-center my-[128px]">
				<div className="w-full md:max-w-[960px] flex justify-center flex-col">
				<span className="text-3xl text-slate-800 font-bold mb-[36px]">스마트뉴비와 함께한 파트너</span>

				<Marquee
					className="[--duration:20s] w-full"
				>
					<Card className="w-[152px] h-[152px]">
						<img
							src="/support/jnp.jpg"
							className="w-full h-full"
							alt="jnp-globals"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/hbu.jpg"
								 alt="한밭대학교 이미지"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/hannam.png"
								 alt="한남대학교 이미지"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/hb_link.png"
								 alt="한밭대학교 링크사업단 이미지"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/handu.jpg"
								 alt="(주)핸듀"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/alchera.jpg"
								 alt="(주)알체라"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/koresg.jpg"
								 alt="한국ESG협회"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/fs.png"
								 alt="(주)에프애스"
						/>
					</Card>
				</Marquee>

				<Marquee
					reverse
					className="[--duration:25s] w-full"
				>
					<Card className="w-[152px] h-[152px]">
						<img
							src="/support/jnp.jpg"
							className="w-full h-full"
							alt="jnp-globals"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/hbu.jpg"
								 alt="한밭대학교 이미지"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/hannam.png"
								 alt="한남대학교 이미지"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/hb_link.png"
								 alt="한밭대학교 링크사업단 이미지"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/handu.jpg"
								 alt="(주)핸듀"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/alchera.jpg"
								 alt="(주)알체라"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/koresg.jpg"
								 alt="한국ESG협회"
						/>
					</Card>
					<Card className="w-[152px] h-[152px] flex justify-center items-center px-3">
						<img src="/support/fs.png"
								 alt="(주)에프애스"
						/>
					</Card>
				</Marquee>
			</div>
		</section>
	)
}
