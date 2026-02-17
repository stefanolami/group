import TeamMember from '@/components/our-team/TeamMember'
import { team, managingTeam } from '@/data/team'

const locales = ['en']

export function generateStaticParams() {
	const allMembers = [...Object.values(managingTeam), ...Object.values(team)]
	return locales.flatMap((locale) =>
		allMembers.map((member) => ({
			locale,
			name: member.path,
		})),
	)
}

export async function generateMetadata({ params }) {
	const awaited = await params
	let name
	if (
		awaited.name == 'glenn-cezanne' ||
		awaited.name == 'corina-gheorgheza'
	) {
		name = Object.values(managingTeam).find(
			(member) => member.path === awaited.name,
		).name
	} else {
		name = Object.values(team).find(
			(member) => member.path === awaited.name,
		).name
	}

	return {
		title: name,
	}
}

export default async function TeamMemberPage({ params }) {
	const awaited = await params
	return <TeamMember name={awaited.name} />
}
