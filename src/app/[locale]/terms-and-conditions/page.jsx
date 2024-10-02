import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import OurProjects from '../../../components/our-projects/OurProjects'

export async function generateMetadata({ params: { locale } }) {
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: t('title'),
	}
}

export default function TermsPage({ params: { locale } }) {
	unstable_setRequestLocale(locale)
	const t = useTranslations('Index')
	return (
		<div className="w-[90%] xl:w-[70%] mx-auto pt-8 xl:pt-20 pb-16 xl:pb-32 ">
			<h1 className="font-unna font-bold text-xl xl:text-[48px] text-center text-black mb-10 xl:mb-20">
				TERMS AND CONDITIONS
			</h1>
			<div className="space-y-6 font-jose text-sm xl:text-base">
				<p>
					Welcome to the website of Time&amp;Place Group
					(&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or
					&quot;us&quot;). By accessing or using our website, located
					at www.groupontap.com (the &quot;Site&quot;), you agree to
					be bound by these Terms &amp; Conditions (the
					&quot;Terms&quot;). Please read these Terms carefully before
					using the Site. If you do not agree to these Terms, you
					should not access or use the Site.
				</p>

				<p>
					<strong>1. Acceptance of Terms</strong>
					<br />
					By using the Site, you confirm that you have read,
					understood, and agree to be bound by these Terms, as well as
					any applicable laws and regulations. You also agree to our
					Privacy Policy, which is incorporated by reference. If you
					do not agree with any part of the Terms, please discontinue
					using the Site immediately.
				</p>

				<p>
					<strong>2. Services Offered</strong>
					<br />
					Time&amp;Place Group provides professional consulting
					services in the areas of [consulting, funding &amp; project
					management, marketing, education, real estate, e-mobility,
					aviation, association management, event organisation, legal
					services, media relations, compliance, corporate social
					responsibility, government relations, mediation,
					negociation, reputation management, stakeholder management,
					crisis management]. These services are described on the Site
					but are offered subject to a separate agreement, proposal,
					or statement of work (the &quot;Consulting Agreement&quot;)
					between Time&amp;Place Group and its clients.
				</p>

				<p>
					The Consulting Agreement will define the specific scope,
					deliverables, fees, timelines, and other terms related to
					our consulting services. The information on the Site does
					not constitute a binding offer or guarantee of service. Any
					request for our services must be made directly through
					appropriate communication channels.
				</p>

				<p>
					<strong>3. Use of the Website</strong>
					<br />
					You agree to use the Site only for lawful purposes and in
					compliance with all applicable laws. You are prohibited
					from:
				</p>

				<ul className="list-disc pl-5 space-y-2">
					<li>
						Using the Site in any way that violates any applicable
						national, regional, or local laws or regulations.
					</li>
					<li>
						Attempting to gain unauthorized access to any portion of
						the Site, including accounts, computer systems, or
						networks connected to the Site.
					</li>
					<li>
						Engaging in any conduct that restricts or inhibits
						anyone else’s use or enjoyment of the Site or that may
						harm Time&amp;Place Group or users of the Site.
					</li>
				</ul>

				<p>
					We reserve the right to monitor your use of the Site and
					terminate your access for violating these Terms.
				</p>

				<p>
					<strong>4. Intellectual Property Rights</strong>
					<br />
					All materials and content on the Site, including text,
					images, logos, designs, data compilations, software, and
					other intellectual property (collectively,
					&quot;Content&quot;), are owned or licensed by
					Time&amp;Place Group and are protected by copyright,
					trademark, and other intellectual property laws. You may not
					use, reproduce, distribute, modify, or create derivative
					works of the Content without our express prior written
					consent.
				</p>

				<p>
					The use of our trademarks or service marks without explicit
					permission is strictly prohibited. Any unauthorized use may
					violate applicable laws and be subject to legal action.
				</p>

				<p>
					<strong>
						5. Consulting Services and Client Obligations
					</strong>
					<br />
					The provision of consulting services is subject to the terms
					and conditions outlined in a separate Consulting Agreement
					between Time&amp;Place Group and its clients. Clients are
					expected to provide timely access to relevant information,
					personnel, and other resources necessary for the performance
					of consulting services.
				</p>

				<p>
					Clients are responsible for ensuring that the information
					provided to us is accurate and complete. Time&amp;Place
					Group is not liable for any delays or failure in the
					performance of services caused by incomplete, inaccurate, or
					delayed information from clients.
				</p>

				<p>
					<strong>6. Limitation of Liability</strong>
					<br />
					To the maximum extent permitted by Belgian Law,
					Time&amp;Place Group shall not be liable for any direct,
					indirect, incidental, special, or consequential damages,
					including but not limited to loss of profits, revenue, or
					business opportunities, resulting from:
				</p>

				<ul className="list-disc pl-5 space-y-2">
					<li>The use or inability to use the Site.</li>
					<li>
						Errors, mistakes, or inaccuracies in the content
						provided on the Site.
					</li>
					<li>
						Any unauthorized access to or use of our servers or the
						information stored therein.
					</li>
				</ul>

				<p>
					Our total liability in any case shall not exceed the amount
					paid, if any, by you to Time&amp;Place Group for services
					related to the claim.
				</p>

				<p>
					<strong>7. Disclaimer of Warranties</strong>
					<br />
					The Site and its content are provided on an
					&quot;as-is&quot; and &quot;as-available&quot; basis.
					Time&amp;Place Group makes no warranties or representations
					regarding the accuracy, completeness, or reliability of the
					Site or its content. We disclaim all warranties, whether
					express or implied, including but not limited to warranties
					of merchantability, fitness for a particular purpose, and
					non-infringement.
				</p>

				<p>
					We do not guarantee that the Site will be available at all
					times or that it will operate without interruption or error.
					We may suspend access to the Site for routine maintenance,
					upgrades, or unforeseen technical issues.
				</p>

				<p>
					<strong>8. User Accounts and Security</strong>
					<br />
					In certain cases, users may be required to create an account
					to access specific features or services on the Site. When
					creating an account, you agree to provide accurate and
					current information. You are responsible for safeguarding
					your account credentials and for any activities or actions
					under your account, whether or not authorized by you.
				</p>

				<p>
					If you suspect unauthorized use of your account, notify us
					immediately. We are not responsible for any loss or damage
					resulting from unauthorized access to your account.
				</p>

				<p>
					<strong>9. Third-Party Links and Resources</strong>
					<br />
					The Site may contain links to third-party websites or
					resources. These links are provided for your convenience,
					and Time&amp;Place Group does not endorse or take
					responsibility for the content or practices of any
					third-party websites. You acknowledge that accessing
					third-party websites is at your own risk and subject to the
					terms and conditions of those websites.
				</p>

				<p>
					<strong>10. Termination of Use</strong>
					<br />
					We reserve the right, at our sole discretion, to terminate
					or suspend your access to the Site without notice or
					liability, for any reason, including but not limited to a
					violation of these Terms. All provisions of these Terms that
					by their nature should survive termination will survive,
					including but not limited to intellectual property rights,
					disclaimers, limitations of liability, and governing law.
				</p>

				<p>
					<strong>11. Modifications to Terms &amp; Conditions</strong>
					<br />
					Time&amp;Place Group reserves the right to modify or update
					these Terms &amp; Conditions at any time, and any changes
					will be effective immediately upon posting on this page.
					Your continued use of the Site after such changes
					constitutes your acceptance of the new Terms. It is your
					responsibility to review these Terms periodically.
				</p>

				<p>
					<strong>12. Governing Law and Jurisdiction</strong>
					<br />
					These Terms &amp; Conditions and any disputes related to
					your use of the Site or services provided by Time&amp;Place
					Group are governed by and construed in accordance with
					Belgian Law. Any legal action or proceedings arising out of
					or related to these Terms will be brought exclusively in the
					courts of Belgium, and you consent to the jurisdiction and
					venue of such courts.
				</p>

				<p>
					<strong>13. Indemnification</strong>
					<br />
					You agree to indemnify, defend, and hold harmless
					Time&amp;Place Group, its affiliates, officers, employees,
					and agents from and against any and all claims, liabilities,
					damages, losses, or expenses, including reasonable legal
					fees, arising out of or in connection with your use of the
					Site, your violation of these Terms, or your violation of
					any rights of a third party.
				</p>

				<p>
					<strong>14. Contact Information</strong>
					<br />
					If you have any questions or concerns regarding these Terms
					&amp; Conditions or wish to contact us for any other reason,
					please reach out to us at:
				</p>

				<p>
					Time&amp;Place Group
					<br />
					Email:{' '}
					<a
						href="mailto:info@groupontap.com"
						className="underline"
					>
						info@groupontap.com
					</a>
					<br />
					Address: Rue de la Loi 81A, 1040 Brussels, Belgium
				</p>
			</div>
		</div>
	)
}
