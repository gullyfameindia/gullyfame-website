import Link from "next/link";
import { LegalContents } from "@/components/legal-contents";
import { PageShell } from "@/components/page-shell";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/privacy");

/*
 * Based on "PRIVACY POLICY - GullyFame India", V03.09.2026 (version 1.0), in
 * documents/. Version 1.1 keeps that document's structure and legal wording
 * but describes what the app and backend actually collect and use (checked
 * against the code on 24 November 2026): video-only posts (no photo posts),
 * the real sign-up and profile fields, KYC document and selfie images,
 * approximate location, chat, AI captions, no ads or analytics SDKs, and the
 * named service providers. Contact details match the GST registration.
 */

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "scope", title: "Scope" },
  { id: "definitions", title: "Definitions" },
  { id: "information-we-collect", title: "Information we collect" },
  { id: "purposes", title: "Purposes of processing" },
  { id: "lawful-basis", title: "Lawful basis, notice and consent" },
  { id: "personalisation", title: "Personalisation, analytics and advertising" },
  { id: "creator-content", title: "Creator content and platform rights" },
  { id: "payments-kyc", title: "Payments, KYC and creator payouts" },
  { id: "competitions", title: "Competitions, rewards and integrity" },
  { id: "ai-content", title: "AI, deepfakes and synthetic content" },
  { id: "sharing", title: "Sharing and disclosure" },
  { id: "retention", title: "Data retention" },
  { id: "deletion", title: "Data deletion and account closure" },
  { id: "user-rights", title: "User rights" },
  { id: "security", title: "Data security" },
  { id: "breaches", title: "Data breaches and incident response" },
  { id: "cross-border", title: "Cross-border transfers" },
  { id: "grievance-officer", title: "Grievance officer and contact" },
  { id: "changes", title: "Changes to this policy" },
  { id: "governing-law", title: "Governing law" },
  { id: "related-policies", title: "Related policies" },
] as const;

const h = (n: number) => ({ id: sections[n - 1].id });
const alpha = { listStyleType: "lower-alpha" } as const;

export default function PrivacyPage() {
  return (
    <PageShell
      path="/privacy"
      intro="What personal data GullyFame India collects, why we collect it, how we use and share it, how long we keep it, and the rights you have over it."
      updated="24 November 2026 · Version 1.1 (effective 3 September 2026)"
    >
      <LegalContents items={sections} />

      <div className="gf-prose">
        <h2 {...h(1)} className="mt-0!">1. Introduction</h2>
        <p>
          Gully Fame India Private Limited (&quot;GullyFame India,&quot;
          &quot;we,&quot; &quot;us,&quot; &quot;our,&quot; or the
          &quot;Company&quot;) operates the GullyFame India mobile application
          and related services (collectively, the &quot;Platform&quot;). We
          respect your privacy and are committed to protecting personal data in
          accordance with applicable Indian law, including the Digital Personal
          Data Protection Act, 2023 (&quot;DPDP Act&quot;), the Digital Personal
          Data Protection Rules, 2025, to the extent applicable and in force,
          the Information Technology Act, 2000 and applicable rules, and other
          applicable privacy, cybersecurity and intermediary requirements.
        </p>
        <p>
          This Privacy Policy (&quot;Policy&quot;) explains what personal data
          we collect, why we collect it, how we use and share it, how long we
          retain it, the choices and rights available to you, and how you can
          contact us.
        </p>

        <h2 {...h(2)}>2. Scope</h2>
        <p>
          This Policy applies to personal data processed through the Platform,
          including the GullyFame India mobile application, this website,
          competitions, payments, payouts and support channels. Where a feature
          has a separate privacy notice or specific terms, that notice will
          apply together with this Policy.
        </p>
        <p>
          The Platform is not intended for anyone under 18 years of age, as set
          out in our <Link href="/terms">Terms of Use</Link>. If you believe a
          person under 18 has created an account, please contact the Grievance
          Officer in section 19 so that we can review and remove it.
        </p>
        <p>
          This website does not have user accounts or sign-up forms and does
          not use cookies, advertising or analytics trackers. Our hosting
          provider may keep standard server logs, such as IP address and pages
          requested, to deliver and secure the website.
        </p>

        <h2 {...h(3)}>3. Definitions</h2>
        <p>For the purposes of this Policy:</p>
        <ul>
          <li>
            <strong>&quot;Personal Data&quot;</strong> means data about an
            identifiable individual, as defined by applicable law.
          </li>
          <li>
            <strong>&quot;Data Principal&quot;</strong> means the individual to
            whom the personal data relates, where that term applies under the
            DPDP Act.
          </li>
          <li>
            <strong>&quot;Consent&quot;</strong> means a lawful, informed,
            specific and unambiguous indication of the individual&apos;s wishes,
            where consent is the applicable basis of processing.
          </li>
          <li>
            <strong>&quot;User Content&quot;</strong> means the videos you post
            (including any music, sounds, effects, stickers, text or images you
            add to a video in the editor), captions, comments and chat messages
            submitted or shared through the Platform. The Platform does not
            support posting standalone photos.
          </li>
        </ul>

        <h2 {...h(4)}>4. Information we collect</h2>
        <p>
          We collect only information reasonably necessary for the purposes
          described in this Policy and as permitted by applicable law.
        </p>

        <h3>4.1 Information you provide</h3>
        <ul>
          <li>
            <strong>Account and profile data:</strong> first and last name,
            username, mobile number, email address, password (stored only in
            hashed form), date of birth, gender, profile photograph, the role
            you choose (participant or fan) and the talent categories you
            select.
          </li>
          <li>
            <strong>Sign-in with Google:</strong> if you choose to sign in with
            Google, we receive your Google account identifier, name and verified
            email address from Google. We do not receive your Google password.
          </li>
          <li>
            <strong>User Content:</strong> videos you record or upload and their
            captions, comments, replies and reactions, and chat messages you
            send to other users.
          </li>
          <li>
            <strong>Activity on the Platform:</strong> votes, likes, saves,
            follows, competitions you join, tips and coins sent or received,
            profile views, referral codes used, reports you submit and accounts
            you block.
          </li>
          <li>
            <strong>Communications:</strong> messages you send to us by email or
            through Help &amp; Support.
          </li>
          <li>
            <strong>Payment and payout data:</strong> details of coin purchases
            (amount, order and payment reference and status, as confirmed by our
            payment gateway). If you request a withdrawal, the UPI ID or bank
            account number, IFSC and account holder name you give us. Card,
            UPI PIN and net-banking credentials are entered with the payment
            gateway and are not received or stored by us.
          </li>
          <li>
            <strong>KYC data:</strong> if you complete identity verification
            (required before payouts), the type of identity document you choose
            (Aadhaar card, PAN card, passport, driving licence or other), photos
            of the front and back of that document, and a selfie photo used to
            match you to the document.
          </li>
        </ul>

        <h3>4.2 Sensitive/high-risk information</h3>
        <p>
          We treat KYC document images and selfies as high-risk information.
          They are used only to verify your identity and eligibility for
          payouts, are reviewed by authorised staff, and are not shown to other
          users. When you upload an Aadhaar card, we recommend using a masked
          Aadhaar that shows only the last four digits.
        </p>
        <p>
          The Platform does not use biometric authentication, face recognition
          or fingerprint login, and does not collect biometric templates.
        </p>

        <h3>4.3 Information collected automatically</h3>
        <ul>
          <li>
            <strong>Device and technical data:</strong> device type and model,
            operating-system version, app version, push-notification token, IP
            address, and crash and error reports with timestamps.
          </li>
          <li>
            <strong>Approximate location:</strong> only if you allow location
            access, we collect your approximate (low-accuracy) location to show
            competitions and creators near you. You can refuse or turn this off
            in your device settings and still use the Platform.
          </li>
          <li>
            <strong>Device permissions:</strong> the app asks for camera and
            microphone access to record videos, photo and media access to pick
            clips for the editor and save your videos, and notification access
            to send alerts. Media on your device is accessed only when you
            choose it.
          </li>
        </ul>

        <h3>4.4 Information from third parties</h3>
        <p>
          We receive information from Google when you use Sign-in with Google,
          and payment and order status from our payment gateway (Razorpay) when
          you buy coins. We do not buy personal data from data brokers.
        </p>

        <h2 {...h(5)}>5. Purposes of processing</h2>
        <p>We process personal data to:</p>
        <ol style={alpha}>
          <li>create and manage accounts;</li>
          <li>
            authenticate users and recover accounts, including by sending
            one-time passwords (OTPs) by SMS or email;
          </li>
          <li>provide, maintain and improve the Platform;</li>
          <li>
            personalise feeds and show competitions and creators relevant to
            your categories and, if you allow it, your approximate location;
          </li>
          <li>
            run competitions, voting, leaderboards, rewards, tipping, referrals
            and payouts;
          </li>
          <li>process coin purchases, withdrawals, KYC and tax requirements;</li>
          <li>
            send service notifications, such as competition updates, activity
            alerts, security alerts and support responses (you can turn off
            push notifications in the app or your device settings);
          </li>
          <li>
            generate automatic captions for your videos when you use the
            auto-caption tool;
          </li>
          <li>detect fraud, spam, abuse, vote manipulation and security threats;</li>
          <li>moderate and protect the Platform and its community;</li>
          <li>troubleshoot crashes and errors; and</li>
          <li>
            comply with applicable law, court orders and lawful government
            requests.
          </li>
        </ol>

        <h2 {...h(6)}>6. Lawful basis, notice and consent</h2>
        <p>
          We process personal data on the basis permitted by applicable law,
          including consent where required, specified legitimate uses/lawful
          purposes where available, compliance with legal obligations, and
          other permitted grounds. Where consent is required, we will provide an
          appropriate notice and seek consent in a manner required by law.
        </p>
        <p>
          You may withdraw consent where processing is based on consent, for
          example by turning off location or notification access. Withdrawal
          may affect features that require that processing, and we may continue
          processing where permitted or required by law, including for
          security, fraud prevention, dispute resolution, accounting, tax or
          legal compliance.
        </p>

        <h2 {...h(7)}>7. Personalisation, analytics and advertising</h2>
        <p>
          We use your categories, activity on the Platform and, if you allow
          it, your approximate location to personalise feeds and
          recommendations. We use crash and error reports to find and fix
          problems in the app.
        </p>
        <p>
          The Platform does not show third-party advertising and does not use
          advertising, marketing-analytics or cross-app tracking tools. We do
          not sell personal data.
        </p>

        <h2 {...h(8)}>8. Creator content and platform rights</h2>
        <p>
          You retain ownership of original content that you create and submit,
          subject to any separate agreement you enter into. By uploading or
          sharing User Content, you grant GullyFame the permissions reasonably
          necessary to host, store, reproduce, display, transmit, distribute,
          format, technically modify and make the content available through the
          Platform and to promote the Platform using your content, subject to
          the <Link href="/terms">Terms of Use</Link> and applicable law.
        </p>
        <p>
          You grant GullyFame a worldwide, non-exclusive, royalty-free,
          transferable and sublicensable licence, for the maximum period
          permitted by law, to host, store, reproduce, process, adapt, edit,
          translate, format, publicly perform, publicly display, distribute,
          communicate, promote and otherwise use Your Content as reasonably
          necessary to operate, secure, improve, market and develop the Platform
          and its services.
        </p>
        <p>
          Any separate commercial licensing, brand usage or third-party use of
          creator content will be governed by the{" "}
          <Link href="/terms">Terms of Use</Link>, the rules of the relevant
          competition shown in the app, or a separate agreement with you. We
          will not interpret this Privacy Policy as granting GullyFame unlimited
          ownership of your original content.
        </p>

        <h2 {...h(9)}>9. Payments, KYC and creator payouts</h2>
        <p>
          Coin purchases are processed by our payment gateway, Razorpay. We
          receive the order and payment references and the payment status, not
          your card, UPI PIN or banking credentials.
        </p>
        <p>
          Before you can withdraw earned coins, we ask you to complete KYC
          (section 4.1). Withdrawals are paid to the UPI ID or bank account you
          provide and are reviewed and paid by our team. We use payment, payout
          and KYC information to provide the service, prevent fraud, comply
          with tax and financial obligations, verify eligibility and make
          lawful payouts.
        </p>
        <p>
          We retain financial and transaction records for the period required
          by applicable law, accounting, tax, fraud-prevention or
          dispute-resolution requirements.
        </p>

        <h2 {...h(10)}>10. Competitions, rewards and integrity</h2>
        <p>
          When you take part in competitions or rewards, we process account,
          content, engagement, voting, referral, payment and verification
          information to administer the competition, detect manipulation,
          verify eligibility, determine winners, make payouts and handle
          disputes. Your entries, points and leaderboard positions are visible
          to other users.
        </p>
        <p>
          We use automated systems and human review to detect bots, purchased
          engagement, multiple-account abuse, coordinated or automated voting,
          fraudulent referrals and other manipulation. We may restrict, suspend,
          disqualify or withhold rewards where permitted under the applicable
          competition rules.
        </p>

        <h2 {...h(11)}>11. AI, deepfakes and synthetic content</h2>
        <p>
          GullyFame may process content and technical signals to identify or
          manage AI-generated, synthetically generated or materially manipulated
          content where required for safety, transparency, legal compliance or
          Platform integrity.
        </p>
        <p>
          Users must comply with applicable requirements concerning disclosure,
          labelling or other treatment of synthetically generated information as
          detailed in the <Link href="/faqs">FAQs</Link>. Content that
          impersonates a real person, deceives users, facilitates fraud, or
          otherwise violates applicable law or Platform rules may be labelled,
          restricted or removed.
        </p>
        <p>
          GullyFame may use automated detection or moderation technologies and
          may require additional disclosures or verification where appropriate.
          Specific AI-content rules are set out in the{" "}
          <Link href="/community-guidelines">Community Guidelines</Link> and{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
        <p>
          When you use the auto-caption tool, the audio of that video is sent
          to our speech-to-text provider (OpenAI) to create the captions. It is
          not sent if you do not use the tool.
        </p>
        <p>
          Any violation may lead to immediate content deletion, temporary
          account suspension or permanent termination, along with forfeiture of
          account rights.
        </p>
        <p>
          Upon receiving actual knowledge, court orders or government notices,
          the Platform reserves the right to remove or disable access to
          unlawful content within 3 hours, without prior notice. GullyFame is
          legally obligated to cooperate with law enforcement (under Sections 78
          and 80 of the IT Act) and may preserve and share user logs, metadata,
          or device information during criminal investigations.
        </p>

        <h2 {...h(12)}>12. Sharing and disclosure</h2>
        <p>
          <strong>With other users:</strong> your username, name, profile
          photograph, posted videos, captions, comments, vote counts, points,
          followers and leaderboard positions are visible to other users. Chat
          messages are visible to the people you send them to. Your mobile
          number, email address, date of birth, location, KYC and payout
          details are not shown to other users.
        </p>
        <p>
          <strong>With service providers acting on our behalf</strong>, only as
          needed for the service they provide:
        </p>
        <ol style={alpha}>
          <li>Amazon Web Services: storage of videos, profile photos and KYC images;</li>
          <li>Razorpay: payment processing for coin purchases;</li>
          <li>Twilio: sending OTPs by SMS;</li>
          <li>
            Google: Sign-in with Google, push notifications (Firebase Cloud
            Messaging) and sending emails such as password-reset OTPs;
          </li>
          <li>Sentry: crash and error reporting;</li>
          <li>OpenAI: automatic captions, only when you use that tool.</li>
        </ol>
        <p>
          <strong>With authorities:</strong> law-enforcement agencies,
          regulators, courts or government authorities where legally required
          or permitted.
        </p>
        <p>
          We require appropriate contractual, technical or organisational
          safeguards from our service providers where required. We do not sell
          personal data or share it with advertisers.
        </p>

        <h2 {...h(13)}>13. Data retention</h2>
        <p>
          We retain personal data only for as long as reasonably necessary for
          the purposes for which it was collected, for the operation and
          security of the Platform, and for applicable legal, tax, accounting,
          fraud-prevention, dispute-resolution and enforcement requirements.
        </p>
        <p>
          Account and profile data, User Content and KYC images are kept while
          your account exists and are erased when you delete your account, as
          described in section 14. Wallet, transaction, payout, referral and
          competition-result records are kept for the periods required by law
          and for fraud prevention, linked only to an anonymous account
          identifier. Security logs, crash reports and support or dispute
          records are kept for as long as reasonably necessary to protect the
          Platform and to resolve and evidence the matter.
        </p>
        <p>
          When retention is no longer necessary and no legal exception applies,
          we will delete or anonymise the relevant personal data.
        </p>

        <h2 {...h(14)}>14. Data deletion and account closure</h2>
        <p>
          You can delete your account in the app from{" "}
          <strong>Settings &amp; Help &gt; Delete Account</strong>, or by
          contacting us as described on our{" "}
          <Link href="/delete-account">Delete account</Link> page. When you
          delete your account:
        </p>
        <ul>
          <li>
            your name, username, mobile number, email address, password, date
            of birth, gender, profile photograph, location, Google sign-in link
            and push token are erased, and you are signed out of every device;
          </li>
          <li>
            your videos and their files, your comments, likes, votes, saves,
            follows, blocks and notifications are deleted;
          </li>
          <li>your KYC document images are deleted from storage;</li>
          <li>
            chat messages you sent remain visible to the people you sent them
            to, shown as coming from a deleted account; and
          </li>
          <li>
            wallet, transaction, payout, referral and competition-result
            records are kept, linked only to an anonymous account identifier,
            for accounting, tax and fraud-prevention purposes.
          </li>
        </ul>
        <p>
          You can instead deactivate your account temporarily from the same
          screen. Deactivation hides your profile, videos and comments and signs
          you out; signing in again reactivates the account.
        </p>

        <h2 {...h(15)}>15. User rights</h2>
        <p>
          Subject to applicable law, you have rights to access information
          about the processing of your personal data, request correction or
          updating, request erasure, withdraw consent where consent is the
          basis, nominate another person to exercise your rights in the event
          of death or incapacity, and raise grievances with GullyFame and/or
          the competent authority, including the Data Protection Board of
          India, as provided by law.
        </p>
        <p>
          You can correct most profile details yourself in the app. Other
          requests should be made through the contact details in section 19. We
          may need to verify your identity before completing a request and may
          decline or limit a request where permitted by law.
        </p>

        <h2 {...h(16)}>16. Data security</h2>
        <p>
          We implement reasonable and appropriate technical and organisational
          safeguards designed to protect personal data against unauthorised
          access, alteration, disclosure, loss, misuse and destruction. These
          include encryption in transit (HTTPS), hashed passwords, short-lived
          sign-in tokens, access controls on KYC and payout data, logging and
          monitoring.
        </p>
        <p>
          No electronic system is completely secure. Users are responsible for
          protecting their passwords, devices and account credentials and should
          promptly report suspected unauthorised access.
        </p>

        <h2 {...h(17)}>17. Data breaches and incident response</h2>
        <p>
          If a personal-data breach occurs, GullyFame will assess and respond in
          accordance with applicable law, including required notifications to
          affected users, the Data Protection Board of India, CERT-In or other
          parties where legally required. We may take immediate measures such as
          account restrictions, credential resets, content restrictions or
          other security controls to contain an incident.
        </p>

        <h2 {...h(18)}>18. Cross-border transfers</h2>
        <p>
          Some of our service providers listed in section 12, including Google,
          Twilio, Sentry and OpenAI, may process personal data outside India,
          including in the United States. GullyFame transfers personal data
          outside India only in accordance with applicable Indian law, including
          any restrictions, safeguards or government requirements that apply to
          the relevant transfer or recipient.
        </p>

        <h2 {...h(19)}>19. Grievance officer and contact</h2>
        <p>
          For privacy-related queries, complaints, or requests, contact:
        </p>
        <p>
          <strong>Data Protection Officer / Privacy Officer / Grievance Officer</strong>
          <br />
          Name: Dhruv Kathuria
          <br />
          Email: <a href="mailto:admin@gullyfame.com">admin@gullyfame.com</a>
          <br />
          Phone: <a href="tel:+919821234605">+91 98212 34605</a>
          <br />
          Address: Gully Fame India Private Limited, Ground Floor, 55 B, House
          55B, Satguru Ram Singh Marg, Travel Masti, Najafgarh Road Industrial
          Area, New Delhi, West Delhi, Delhi, 110015
        </p>
        <p>
          GullyFame India will acknowledge each grievance within 24 hours of
          receiving it and resolve it within 15 days, as required under the
          Information Technology (Intermediary Guidelines and Digital Media
          Ethics Code) Rules, 2021.
        </p>

        <h2 {...h(20)}>20. Changes to this policy</h2>
        <p>
          We may update this Policy to reflect changes in law, technology,
          Platform features or business practices. Where required, we will
          provide notice of material changes and obtain consent where legally
          necessary. The latest version will always be available on this page
          and in the app.
        </p>

        <h2 {...h(21)}>21. Governing law</h2>
        <p>
          This Policy is intended to operate under the laws of India and
          applicable rules and regulations. Any dispute relating specifically to
          privacy will be handled in accordance with applicable law and the
          Platform&apos;s <Link href="/terms">Terms of Use</Link>.
        </p>

        <h2 {...h(22)}>22. Related policies</h2>
        <p>
          This Privacy Policy should be read together with the GullyFame India{" "}
          <Link href="/terms">Terms of Use</Link>,{" "}
          <Link href="/community-guidelines">Community Guidelines</Link>, the{" "}
          <Link href="/delete-account">Delete account</Link> page and the{" "}
          <Link href="/faqs">FAQs</Link>, and the rules of any competition you
          enter, which are shown in the app.
        </p>
      </div>
    </PageShell>
  );
}
