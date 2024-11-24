import Hero from "@/components/sections/Hero"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import Benefits from "@/components/sections/Benefits"
import Pricing from "@/components/sections/Pricing"
import CTA from "@/components/sections/CTA"

export default function Home() {
	return (
		<>
			<Hero />
			<Features />
			<HowItWorks />
			<Benefits />
			<Pricing />
			<CTA />
		</>
	);
}
