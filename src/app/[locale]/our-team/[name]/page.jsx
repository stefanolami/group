import TeamMember from '@/components/our-team/TeamMember'

export default function TeamMemberPage({ params }) {
	return <TeamMember name={params.name} />
}
