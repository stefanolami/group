import OurTeam from '../../../components/our-team/OurTeam'

export async function generateMetadata() {
	return {
		title: 'Our Team',
	}
}

export default async function OurTeamPage() {
	return <OurTeam />
}
