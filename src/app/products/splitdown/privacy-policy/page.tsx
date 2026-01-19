import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy – Splitdown",
    description: "Privacy Policy for Splitdown - Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800 bg-white">
            <h1 className="text-4xl font-bold mb-4">Privacy Policy for Splitdown</h1>
            <p className="text-sm text-gray-500 italic mb-8">
                Effective Date: January 15, 2026<br />
                Last Updated: January 15, 2026
            </p>

            <Section title="1. Introduction">
                <p className="mb-4">
                    Sunleaf System Pvt. Ltd. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the Splitdown mobile application
                    (the &quot;App&quot;). This Privacy Policy explains how we collect, use, disclose, and safeguard your
                    information when you use our App.
                </p>
                <p className="mb-4">
                    By using Splitdown, you agree to the collection and use of information in accordance with this policy.
                    If you do not agree with our policies and practices, please do not use our App.
                </p>
                <p>
                    <strong>Company Information:</strong><br />
                    Sunleaf System Pvt. Ltd.<br />
                    Nepal<br />
                    Email: sunleafsystem2025@gmail.com<br />
                    Website: <a href="https://sunleafsystem.com.np/" className="text-emerald-600 hover:underline">sunleafsystem.com.np</a>
                </p>
            </Section>

            <Divider />

            <Section title="2. Information We Collect">
                <p className="mb-4">
                    We collect several types of information from and about users of our App, including:
                </p>

                <SubTitle>2.1 Personal Information You Provide</SubTitle>
                <Bullet><strong>Account Information:</strong> Name, email address, phone number (optional), and profile picture</Bullet>
                <Bullet><strong>User-Generated Content:</strong> Groups you create, friends you add, expense details, transaction descriptions, receipts, and notes</Bullet>
                <Bullet><strong>Payment Information:</strong> If you use premium features, payment information is processed by third-party payment processors (we do not store credit card details)</Bullet>
                <Bullet><strong>Communications:</strong> Messages you send through the App and correspondence with our support team</Bullet>

                <SubTitle>2.2 Automatically Collected Information</SubTitle>
                <Bullet><strong>Device Information:</strong> Device model, operating system version, unique device identifiers, mobile network information</Bullet>
                <Bullet><strong>Usage Data:</strong> App features used, time spent in the App, interaction with notifications, frequency of use</Bullet>
                <Bullet><strong>Log Data:</strong> IP address, access times, app crashes, performance data, and error reports</Bullet>
                <Bullet><strong>Location Data:</strong> Approximate location based on IP address (we do not collect precise GPS location)</Bullet>

                <SubTitle>2.3 Information from Third-Party Services</SubTitle>
                <p className="ml-4 mb-2 text-gray-700">
                    If you choose to sign in using third-party services (Google, Facebook, Apple), we may receive:
                </p>
                <Bullet>Profile information (name, email, profile picture)</Bullet>
                <Bullet>Authentication tokens</Bullet>
                <Bullet>Any other information you authorize the third-party service to share</Bullet>

                <SubTitle>2.4 Permissions We Request</SubTitle>
                <p className="ml-4 mb-2 text-gray-700">
                    The App may request the following permissions (all optional):
                </p>
                <Bullet><strong>Camera:</strong> To capture photos of receipts and bills</Bullet>
                <Bullet><strong>Storage/Photos:</strong> To upload receipt images and save expense reports</Bullet>
                <Bullet><strong>Notifications:</strong> To send reminders, payment alerts, and group activity updates</Bullet>
                <Bullet><strong>Contacts:</strong> To easily add friends to groups (only with your explicit permission)</Bullet>
                <p className="ml-4 mt-2 text-gray-700 italic">
                    You can revoke these permissions at any time through your device settings.
                </p>
            </Section>

            <Divider />

            <Section title="3. How We Use Your Information">
                <p className="mb-4">We use the collected information for the following purposes:</p>

                <SubTitle>3.1 To Provide and Maintain Our Service</SubTitle>
                <Bullet>Create and manage your account</Bullet>
                <Bullet>Process and track expenses, splits, and settlements</Bullet>
                <Bullet>Sync data across your devices</Bullet>
                <Bullet>Enable group collaboration and expense sharing</Bullet>

                <SubTitle>3.2 To Communicate with You</SubTitle>
                <Bullet>Send transaction notifications and payment reminders</Bullet>
                <Bullet>Notify you of group activity and updates</Bullet>
                <Bullet>Respond to your inquiries and support requests</Bullet>
                <Bullet>Send important updates about the App and our policies</Bullet>

                <SubTitle>3.3 To Improve Our Service</SubTitle>
                <Bullet>Analyze usage patterns to enhance user experience</Bullet>
                <Bullet>Monitor and analyze trends, usage, and activities</Bullet>
                <Bullet>Detect, prevent, and address technical issues and bugs</Bullet>
                <Bullet>Develop new features and functionality</Bullet>

                <SubTitle>3.4 For Security and Fraud Prevention</SubTitle>
                <Bullet>Protect against unauthorized access and abuse</Bullet>
                <Bullet>Verify user identity and prevent fraudulent transactions</Bullet>
                <Bullet>Enforce our Terms of Service</Bullet>

                <p className="mt-6 p-4 bg-emerald-50 border-l-4 border-emerald-600 rounded">
                    <strong>We do NOT:</strong>
                    <br />• Sell your personal information to third parties
                    <br />• Use your data for targeted advertising
                    <br />• Share your expense details with anyone outside your groups
                </p>
            </Section>

            <Divider />

            <Section title="4. Third-Party Services and Data Sharing">
                <p className="mb-4">
                    We may share your information with trusted third-party service providers who assist us in operating
                    our App. These parties are obligated to keep your information confidential and use it only for the
                    purposes we specify.
                </p>

                <SubTitle>4.1 Service Providers We Use</SubTitle>
                <Bullet><strong>Firebase (Google LLC):</strong> Cloud storage, authentication, real-time database, and analytics</Bullet>
                <Bullet><strong>Cloud Storage Services:</strong> For storing receipts and backup data</Bullet>
                <Bullet><strong>Analytics Services:</strong> To understand app usage and improve performance (Google Analytics, Firebase Analytics)</Bullet>
                <Bullet><strong>Crash Reporting:</strong> To identify and fix bugs (Firebase Crashlytics)</Bullet>
                <Bullet><strong>Payment Processors:</strong> For processing premium subscriptions (if applicable)</Bullet>

                <SubTitle>4.2 When We May Disclose Your Information</SubTitle>
                <Bullet><strong>Legal Compliance:</strong> When required by law, court order, or government regulation</Bullet>
                <Bullet><strong>Protection of Rights:</strong> To protect our rights, privacy, safety, or property, and that of our users</Bullet>
                <Bullet><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (you will be notified)</Bullet>
                <Bullet><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</Bullet>

                <SubTitle>4.3 Links to Third-Party Services</SubTitle>
                <p className="ml-4 text-gray-700">
                    Our App may contain links to third-party websites or services. We are not responsible for the privacy
                    practices of these external sites. We encourage you to review their privacy policies.
                </p>
            </Section>

            <Divider />

            <Section title="5. Data Storage, Security, and Retention">
                <SubTitle>5.1 Data Storage</SubTitle>
                <p className="ml-4 mb-4 text-gray-700">
                    Your data is stored on secure servers provided by Firebase (Google Cloud Platform). Data may be
                    transferred to and stored in countries outside your country of residence, including the United States,
                    where data protection laws may differ.
                </p>

                <SubTitle>5.2 Security Measures</SubTitle>
                <p className="ml-4 mb-2 text-gray-700">
                    We implement industry-standard security measures to protect your information:
                </p>
                <Bullet>Data encryption in transit (TLS/SSL) and at rest</Bullet>
                <Bullet>Secure authentication protocols</Bullet>
                <Bullet>Regular security audits and updates</Bullet>
                <Bullet>Access controls and authentication requirements</Bullet>
                <Bullet>Firewall protection and intrusion detection</Bullet>
                <p className="ml-4 mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded text-sm">
                    <strong>Important:</strong> While we strive to protect your personal information, no method of transmission
                    over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>

                <SubTitle>5.3 Data Retention</SubTitle>
                <Bullet>We retain your personal information for as long as your account is active</Bullet>
                <Bullet>After account deletion, personal data is permanently removed within 30 days</Bullet>
                <Bullet>Some information may be retained longer if required by law or for legitimate business purposes (e.g., dispute resolution, fraud prevention)</Bullet>
                <Bullet>Anonymized or aggregated data may be retained indefinitely for analytics purposes</Bullet>
            </Section>

            <Divider />

            <Section title="6. Your Privacy Rights and Choices">
                <p className="mb-4">
                    Depending on your location, you may have certain rights regarding your personal information:
                </p>

                <SubTitle>6.1 General Rights</SubTitle>
                <Bullet><strong>Access:</strong> Request a copy of the personal information we hold about you</Bullet>
                <Bullet><strong>Correction:</strong> Update or correct inaccurate or incomplete information</Bullet>
                <Bullet><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</Bullet>
                <Bullet><strong>Data Portability:</strong> Receive your data in a structured, machine-readable format</Bullet>
                <Bullet><strong>Objection:</strong> Object to certain processing of your personal information</Bullet>
                <Bullet><strong>Restriction:</strong> Request restriction of processing in certain circumstances</Bullet>

                <SubTitle>6.2 How to Exercise Your Rights</SubTitle>
                <p className="ml-4 mb-2 text-gray-700">
                    You can exercise these rights by:
                </p>
                <Bullet>Accessing your account settings within the App</Bullet>
                <Bullet>Contacting us at sunleafsystem2025@gmail.com</Bullet>
                <Bullet>Using the in-app &quot;Delete Account&quot; feature for permanent account deletion</Bullet>
                <p className="ml-4 mt-4 text-gray-700">
                    We will respond to your request within 30 days. For security purposes, we may need to verify your
                    identity before processing your request.
                </p>

                <SubTitle>6.3 GDPR Rights (European Users)</SubTitle>
                <p className="ml-4 mb-2 text-gray-700">
                    If you are located in the European Economic Area (EEA), you have additional rights under GDPR:
                </p>
                <Bullet>Right to withdraw consent at any time</Bullet>
                <Bullet>Right to lodge a complaint with a supervisory authority</Bullet>
                <Bullet>Right to know the legal basis for processing your data</Bullet>

                <SubTitle>6.4 CCPA Rights (California Users)</SubTitle>
                <p className="ml-4 mb-2 text-gray-700">
                    If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA):
                </p>
                <Bullet>Right to know what personal information is collected, used, shared, or sold</Bullet>
                <Bullet>Right to delete personal information</Bullet>
                <Bullet>Right to opt-out of the sale of personal information (we do not sell your data)</Bullet>
                <Bullet>Right to non-discrimination for exercising your rights</Bullet>
            </Section>

            <Divider />

            <Section title="7. Account Deletion">
                <p className="mb-4">
                    You have the right to delete your account and all associated data at any time.
                </p>

                <SubTitle>7.1 How to Delete Your Account</SubTitle>
                <Bullet>Open the Splitdown app</Bullet>
                <Bullet>Go to Settings → Account Settings</Bullet>
                <Bullet>Select &quot;Delete Account&quot;</Bullet>
                <Bullet>Confirm your decision</Bullet>
                <p className="ml-4 mt-4 text-gray-700">
                    Alternatively, you can request account deletion by emailing us at sunleafsystem2025@gmail.com
                    with the subject line &quot;Account Deletion Request.&quot;
                </p>

                <SubTitle>7.2 What Happens When You Delete Your Account</SubTitle>
                <Bullet>Your profile, groups, and expense data will be permanently deleted within 30 days</Bullet>
                <Bullet>You will be removed from all shared groups</Bullet>
                <Bullet>Other group members will no longer see your personal information</Bullet>
                <Bullet>Some data may be retained if required by law or for fraud prevention</Bullet>
                <p className="ml-4 mt-4 p-3 bg-red-50 border-l-4 border-red-500 rounded text-sm">
                    <strong>Warning:</strong> Account deletion is permanent and cannot be undone. Please export any data
                    you wish to keep before deleting your account.
                </p>
            </Section>

            <Divider />

            <Section title="8. Children's Privacy">
                <p className="mb-4">
                    Splitdown is not intended for use by children under the age of 13 (or the applicable age of digital
                    consent in your jurisdiction). We do not knowingly collect personal information from children under 13.
                </p>
                <p className="mb-4">
                    If you are a parent or guardian and believe your child has provided us with personal information,
                    please contact us immediately at sunleafsystem2025@gmail.com. We will take steps to delete such
                    information from our systems.
                </p>
                <p>
                    If we discover that we have collected personal information from a child under 13 without parental
                    consent, we will delete that information as quickly as possible.
                </p>
            </Section>

            <Divider />

            <Section title="9. International Data Transfers">
                <p className="mb-4">
                    Your information may be transferred to and maintained on computers located outside of your state,
                    province, country, or other governmental jurisdiction where data protection laws may differ.
                </p>
                <p className="mb-4">
                    If you are located outside Nepal and choose to use our App, please note that we transfer data,
                    including personal information, to Nepal and other countries where our service providers operate,
                    and process it there.
                </p>
                <p>
                    By using Splitdown, you consent to the transfer of your information to countries outside your
                    country of residence, which may have different data protection rules.
                </p>
            </Section>

            <Divider />

            <Section title="10. Cookies and Tracking Technologies">
                <p className="mb-4">
                    While our mobile app does not use traditional browser cookies, we use similar technologies to
                    collect information and improve our services:
                </p>

                <SubTitle>10.1 Technologies We Use</SubTitle>
                <Bullet><strong>Local Storage:</strong> To store user preferences and app settings on your device</Bullet>
                <Bullet><strong>Analytics SDKs:</strong> To collect usage statistics and performance data</Bullet>
                <Bullet><strong>Session Identifiers:</strong> To maintain your logged-in state</Bullet>
                <Bullet><strong>Device Identifiers:</strong> To recognize your device and prevent fraud</Bullet>

                <SubTitle>10.2 Managing Tracking Preferences</SubTitle>
                <p className="ml-4 text-gray-700">
                    You can control certain tracking features through:
                </p>
                <Bullet>Your device settings (e.g., &quot;Limit Ad Tracking&quot; on iOS, &quot;Opt out of Ads Personalization&quot; on Android)</Bullet>
                <Bullet>App settings within Splitdown</Bullet>
                <Bullet>Disabling analytics in the app&apos;s privacy settings</Bullet>
            </Section>

            <Divider />

            <Section title="11. Changes to This Privacy Policy">
                <p className="mb-4">
                    We may update this Privacy Policy from time to time to reflect changes in our practices, technology,
                    legal requirements, or other factors.
                </p>
                <p className="mb-4">
                    When we make changes, we will:
                </p>
                <Bullet>Update the &quot;Last Updated&quot; date at the top of this policy</Bullet>
                <Bullet>Notify you through the App or via email for material changes</Bullet>
                <Bullet>Obtain your consent if required by applicable law</Bullet>
                <p className="mt-4 text-gray-700">
                    We encourage you to review this Privacy Policy periodically. Your continued use of the App after
                    changes are posted constitutes your acceptance of the updated policy.
                </p>
            </Section>

            <Divider />

            <Section title="12. Contact Us">
                <p className="mb-4">
                    If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                    please contact us:
                </p>

                <div className="ml-4 space-y-4">
                    <div>
                        <strong className="block text-gray-900 mb-2">Email:</strong>
                        <a
                            href="mailto:sunleafsystem2025@gmail.com"
                            className="text-emerald-600 font-medium hover:underline"
                        >
                            sunleafsystem2025@gmail.com
                        </a>
                    </div>

                    <div>
                        <strong className="block text-gray-900 mb-2">Website:</strong>
                        <a
                            href="https://sunleafsystem.com.np/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 font-medium hover:underline"
                        >
                            sunleafsystem.com.np
                        </a>
                    </div>

                    <div>
                        <strong className="block text-gray-900 mb-2">Company:</strong>
                        <p className="text-gray-700">
                            Sunleaf System Pvt. Ltd.<br />
                            Nepal
                        </p>
                    </div>

                    <div>
                        <strong className="block text-gray-900 mb-2">Response Time:</strong>
                        <p className="text-gray-700">
                            We aim to respond to all inquiries within 5-7 business days.
                        </p>
                    </div>
                </div>
            </Section>

            <Divider />

            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600 text-center">
                    By using Splitdown, you acknowledge that you have read and understood this Privacy Policy
                    and agree to its terms.
                </p>
            </div>
        </main>
    );
}

/* ---------------- Components ---------------- */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">{title}</h2>
            <div className="text-gray-700 leading-relaxed">{children}</div>
        </section>
    );
}

function SubTitle({ children }: { children: React.ReactNode }) {
    return <h3 className="text-lg font-semibold text-emerald-700 mt-6 mb-3">{children}</h3>;
}

function Bullet({ children }: { children: React.ReactNode }) {
    return <p className="ml-4 mb-2 text-gray-700 flex items-start"><span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-emerald-600 rounded-full flex-shrink-0"></span><span>{children}</span></p>;
}

function Divider() {
    return <hr className="my-10 border-gray-300" />;
}
