import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { pageMetadata, siteConfig } from "@/lib/seo";

export const metadata = pageMetadata("/delete-account");

const subject = encodeURIComponent("Account deletion request");
const body = encodeURIComponent(
  "I would like to delete my Gully Fame India account and the data associated with it.\n\n" +
    "Name on the account:\n" +
    "Registered mobile number or email:\n",
);

export default function DeleteAccountPage() {
  return (
    <PageShell
      path="/delete-account"
      intro="You can ask us to delete your Gully Fame India account and the personal data linked to it at any time."
    >
      <div className="gf-prose">
        <h2>Option 1: in the app</h2>
        <p>
          Open the app, tap your profile picture, then{" "}
          <strong>Settings &amp; Help &gt; Delete Account</strong> and choose{" "}
          <strong>Request account deletion</strong>.
        </p>

        <h2>Option 2: by email</h2>
        <p>
          If you cannot open the app, email us from the address or send us the
          mobile number registered on your account:
        </p>
        <p>
          <a
            href={`mailto:${siteConfig.contactEmail}?subject=${subject}&body=${body}`}
          >
            {siteConfig.contactEmail}
          </a>{" "}
          with the subject <em>Account deletion request</em>.
        </p>
        <p>
          We will ask you to confirm that the request is from you before we
          delete anything, so nobody else can delete your account.
        </p>

        <h2>What happens next</h2>
        <p>
          We confirm that the request comes from you, then delete your account
          and the personal data linked to it. We will tell you when it is done.
        </p>

        <h2>What we may keep</h2>
        <p>
          Deletion may not immediately remove information that we must keep by
          law or that is needed for security, fraud prevention or financial
          records, for example payment and KYC records. Public content,
          competition records and transaction records can follow separate
          retention rules. All of this is described in our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2>Before you delete</h2>
        <ul>
          <li>Deleting your account cannot be undone.</li>
          <li>
            Use or withdraw any wallet balance first; it may not be recoverable
            after deletion.
          </li>
          <li>
            Download any reels you want to keep. Logging out or deactivating is
            not the same as deleting: your data is kept until you ask us to
            delete it.
          </li>
        </ul>
      </div>
    </PageShell>
  );
}
