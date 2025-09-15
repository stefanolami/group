import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }) {
	const { locale } = await params
	const t = await getTranslations({
		locale,
		namespace: 'Index' /* replace with metadata file */,
	})

	return {
		title: 'Privacy Policy',
	}
}

export default async function PrivacyPolicyPage({ params }) {
	const { locale } = await params
	const t = await getTranslations('Index')
	return (
		<div className="w-[90%] xl:w-[70%] mx-auto pt-8 xl:pt-20 pb-16 xl:pb-32 text-primary">
			<h1 className="font-unna font-bold text-xl xl:text-[48px] text-center mb-10 xl:mb-20">
				PRIVACY POLICY
			</h1>
			<div className="space-y-6 font-jose text-sm xl:text-base">
				<p>
					At Time&amp;Place Group (&quot;Company&quot; &quot;we&quot;
					&quot;our&quot; or &quot;us&quot;), we are committed to
					protecting your privacy and complying with the General Data
					Protection Regulation (EU Regulation 2016/679,
					&quot;GDPR&quot;) and relevant Belgian data protection laws.
					This Privacy Policy explains how we collect, use, disclose,
					and safeguard your personal data when you visit our website
					www.groupontap.com (the &quot;Site&quot;) or engage with our
					consulting services. Please read this policy carefully to
					understand our practices regarding your personal data.
				</p>

				<p>
					<strong>1. Data Controller</strong>
					<br />
					For the purposes of GDPR and other relevant data protection
					laws, Time&amp;Place Group is the &quot;data
					controller.&quot; This means we are responsible for deciding
					how and why personal data is processed. Our registered
					office is located at Rue de la Loi 81A, 1040 Brussels,
					Belgium, and you can contact us via info@groupontap.com for
					any inquiries regarding this policy.
				</p>

				<p>
					<strong>2. Compliance with GDPR and Belgian Law</strong>
					<br />
					We comply with the General Data Protection Regulation
					(GDPR), which provides a legal framework for protecting
					personal data and privacy in the European Union, as well as
					with relevant Belgian privacy laws, including the Belgian
					Law of 30 July 2018 on the protection of individuals with
					regard to the processing of personal data.
				</p>

				<p>
					<strong>3. Information We Collect</strong>
					<br />
					We collect several types of information from and about users
					of our Site and services, including:
				</p>

				<p>
					<strong>a. Personal Data You Provide</strong>
					<br />
					- Contact Information: Name, email address, phone number,
					and other personal information you provide when you contact
					us or engage our services.
					<br />
					- Billing Information: Company name, address, and payment
					details when you engage our services.
					<br />- Communications: Information provided through
					correspondence via email, phone, or through our Site.
				</p>

				<p>
					<strong>b. Automatically Collected Information</strong>
					<br />
					When you access our Site, we may collect certain information
					automatically:
					<br />
					- Device Information: IP address, browser type, operating
					system.
					<br />
					- Usage Data: Information about your interaction with the
					Site, such as pages viewed, links clicked, and duration of
					visits.
					<br />- Cookies: We use cookies to improve user experience
					and for analytics. You can manage your cookie preferences
					through your browser settings.
				</p>

				<p>
					<strong>
						4. Lawful Basis for Processing Personal Data
					</strong>
					<br />
					We process personal data under GDPR Article 6(1) based on
					one or more of the following legal grounds:
				</p>

				<p>
					<strong>a. Contractual Necessity</strong>
					<br />
					To provide our consulting services and fulfill our
					contractual obligations with you. This includes processing
					personal data to manage client relationships, issue
					invoices, and deliver consulting services.
				</p>

				<p>
					<strong>b. Legitimate Interests</strong>
					<br />
					We process personal data based on our legitimate interests,
					such as improving our services, ensuring the security of our
					Site, and for marketing purposes, provided that these
					interests are not overridden by your data protection rights.
				</p>

				<p>
					<strong>c. Consent</strong>
					<br />
					We may seek your explicit consent for certain types of data
					processing, particularly for sending marketing
					communications. You can withdraw your consent at any time by
					contacting us or using the opt-out feature in any marketing
					emails.
				</p>

				<p>
					<strong>d. Legal Obligation</strong>
					<br />
					We may process your personal data to comply with legal
					obligations under Belgian law or EU law, such as tax
					reporting and regulatory compliance.
				</p>

				<p>
					<strong>5. Your Rights Under GDPR and Belgian Law</strong>
					<br />
					As a data subject under GDPR and Belgian law, you have the
					following rights regarding your personal data:
				</p>

				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Right of Access</strong>: You have the right to
						request access to the personal data we hold about you.
						This includes information on how and why we process your
						data.
					</li>
					<li>
						<strong>Right to Rectification</strong>: You have the
						right to request corrections to any inaccurate or
						incomplete personal data.
					</li>
					<li>
						<strong>
							Right to Erasure (&quot;Right to be Forgotten&quot;)
						</strong>
						: In certain circumstances, you may request the deletion
						of your personal data. This applies if the data is no
						longer needed for the purpose for which it was
						collected.
					</li>
					<li>
						<strong>Right to Restriction of Processing</strong>: You
						may request that we restrict the processing of your
						personal data under certain conditions, such as when you
						contest the accuracy of the data or object to its
						processing.
					</li>
					<li>
						<strong>Right to Data Portability</strong>: You have the
						right to receive your personal data in a structured,
						commonly used, and machine-readable format and to
						request that we transfer this data to another
						controller, where technically feasible.
					</li>
					<li>
						<strong>Right to Object</strong>: You have the right to
						object to the processing of your personal data based on
						our legitimate interests or for direct marketing
						purposes.
					</li>
					<li>
						<strong>Right to Withdraw Consent</strong>: If we rely
						on your consent for processing, you have the right to
						withdraw this consent at any time, without affecting the
						lawfulness of processing carried out prior to the
						withdrawal.
					</li>
					<li>
						<strong>Right to Lodge a Complaint</strong>: If you
						believe that we are violating your privacy rights under
						GDPR or Belgian law, you have the right to lodge a
						complaint with a supervisory authority, such as the
						Belgian Data Protection Authority.
					</li>
				</ul>

				<p>
					Belgian Data Protection Authority
					<br />
					Rue de la Presse 35, 1000 Brussels, Belgium
					<br />
					Tel: +32 (0)2 274 48 00
					<br />
					Website:{' '}
					<a
						href="https://www.gegevensbeschermingsautoriteit.be/"
						className="underline"
					>
						https://www.gegevensbeschermingsautoriteit.be/
					</a>
				</p>

				<p>
					<strong>6. How We Use Your Data</strong>
					<br />
					We use your personal data for the following purposes:
				</p>

				<ul className="list-disc pl-5 space-y-2">
					<li>
						Providing Services: To deliver our consulting services
						and manage our contractual relationships.
					</li>
					<li>
						Communications: To respond to your inquiries, provide
						updates on services, and manage client relationships.
					</li>
					<li>
						Marketing: To send you promotional materials about our
						services, with your consent.
					</li>
					<li>
						Improvement of Services: To analyze usage patterns,
						improve the functionality and security of our Site, and
						develop new services.
					</li>
					<li>
						Legal Compliance: To comply with legal obligations, such
						as tax or regulatory reporting.
					</li>
				</ul>

				<p>
					<strong>7. Sharing Your Data</strong>
					<br />
					We do not sell or rent your personal data. We may share your
					information with third parties in the following ways:
				</p>

				<ul className="list-disc pl-5 space-y-2">
					<li>
						<strong>Service Providers</strong>: We may share your
						data with third-party service providers who assist us
						with business operations, such as IT support, payment
						processing, and marketing.
					</li>
					<li>
						<strong>Legal and Regulatory Requirements</strong>: We
						may disclose your personal data to comply with legal
						obligations.
					</li>
					<li>
						<strong>Business Transfers</strong>: In the event of a
						merger, acquisition, or sale, your personal data may be
						transferred to the new entity under the same level of
						data protection as outlined in this Privacy Policy.
					</li>
				</ul>

				<p>
					<strong>8. International Data Transfers</strong>
					<br />
					Your personal data may be transferred to, and processed in,
					countries outside the European Economic Area (EEA),
					including countries that may not offer the same level of
					data protection as the EEA. We ensure that such transfers
					are conducted in compliance with GDPR requirements, using
					Standard Contractual Clauses or other lawful mechanisms.
				</p>

				<p>
					<strong>9. Data Security</strong>
					<br />
					We implement appropriate technical and organizational
					measures to protect your personal data from unauthorized
					access, use, or disclosure. These measures include
					encryption, secure servers, and access controls. However, no
					system is completely secure, and we cannot guarantee the
					absolute security of your data.
				</p>

				<p>
					<strong>10. Data Retention</strong>
					<br />
					We will retain your personal data only for as long as
					necessary to fulfill the purposes for which it was collected
					or as required by law. The retention period may vary
					depending on the nature of the data and legal obligations
					(e.g., tax or regulatory requirements).
				</p>

				<p>
					<strong>11. Children’s Privacy</strong>
					<br />
					Our services are not directed to individuals under 18, and
					we do not knowingly collect personal data from minors. If we
					learn that we have inadvertently collected personal data
					from a child under 18, we will take appropriate steps to
					delete the data as soon as possible.
				</p>

				<p>
					<strong>12. Changes to This Privacy Policy</strong>
					<br />
					We may update this Privacy Policy to reflect changes in our
					practices or legal obligations. Any changes will be posted
					on this page with an updated &quot;Last Updated&quot; date.
					We encourage you to review this policy periodically to stay
					informed about how we are protecting your data.
				</p>

				<p>
					<strong>13. Contact Information</strong>
					<br />
					If you have any questions or concerns about this Privacy
					Policy or wish to exercise any of your rights under GDPR or
					Belgian law, please contact us at:
				</p>

				<p>
					Time&amp;Place Group
					<br />
					Address: Rue de la Loi 81A, 1040 Brussels, Belgium
					<br />
					Email: info@groupontap.com
					<br />
					+32 (0) 485 38 22 21
				</p>
			</div>
		</div>
	)
}
