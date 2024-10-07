import { getTranslations } from 'next-intl/server'
import TeamMember from '@/components/our-team/TeamMember'
import team from '@/data/team'

export async function generateMetadata({ params }) {
	const name = Object.values(team).find(
		(member) => member.path === params.name
	).name
	return {
		title: name,
	}
}

export default function TeamMemberPage({ params }) {
	return <TeamMember name={params.name} />
}
