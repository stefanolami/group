import HomePage from '@/components/HomePage'
import Hero from '@/components/Hero'

export default async function Home() {
	return (
		<>
			<Hero />
			{/* <div className="w-full h-screen"></div> */}
			<HomePage />
		</>
	)
}
