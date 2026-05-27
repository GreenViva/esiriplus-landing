"use client";

import PageShell from "@/components/PageShell";

const deletedRows = [
  { type: "Patient ID and anonymous session", detail: "Permanently removed" },
  {
    type: "Health profile (blood group, allergies, chronic conditions)",
    detail: "Permanently removed",
  },
  {
    type: "Security-question answers (stored only as PBKDF2 hashes)",
    detail: "Permanently removed",
  },
  {
    type: "Saved location (region / district / ward / street tuple)",
    detail: "Permanently removed",
  },
  {
    type: "Notifications, reminders and device push tokens",
    detail: "Permanently removed",
  },
  {
    type: "Chat messages",
    detail: "Already auto-deleted 14 days after each consultation",
  },
];

const retainedRows = [
  {
    type: "Consultation / medical records",
    detail: "7 years — required by Tanzanian healthcare regulations",
  },
  {
    type: "Payment and transaction records",
    detail: "As required by Tanzanian financial regulations",
  },
];

export default function DeleteAccountPage() {
  return (
    <PageShell>
      {() => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-2">Delete Your Account &amp; Data</h1>
            <p className="text-sm text-gray-500 mb-8">Last Updated: 27 May 2026</p>

            {/* Operator intro */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 mb-10">
              <p className="text-sm text-gray-700">
                <strong>Operated by Eden World Company Limited</strong> · Dar es Salaam,
                Tanzania ·{" "}
                <a
                  href="https://esiri.africa"
                  className="text-brand-teal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  esiri.africa
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                This page explains how patients and doctors can request deletion of their
                eSIRIPlus account and associated data, what is removed, and the limited
                records we are legally required to keep.
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  1. Delete from inside the app
                </h2>
                <p className="leading-relaxed mb-3">
                  This is the fastest way and is available to all patients:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>Open the eSIRIPlus app.</li>
                  <li>
                    Go to <strong>Settings &rarr; Delete account</strong>.
                  </li>
                  <li>
                    Confirm by typing the requested phrase. Your account is deactivated
                    immediately and scheduled for permanent deletion.
                  </li>
                </ol>
                <p className="leading-relaxed mt-3">
                  Doctors can request deletion by emailing us from their registered email
                  address (see section 2).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  2. Request deletion by email
                </h2>
                <p className="leading-relaxed mb-3">
                  If you can no longer access the app, email{" "}
                  <a
                    href="mailto:support@esiri.africa?subject=Account%20deletion%20request"
                    className="text-brand-teal hover:underline"
                  >
                    support@esiri.africa
                  </a>{" "}
                  with the subject &ldquo;Account deletion request&rdquo; and:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Patients:</strong> your <strong>Patient ID</strong>. eSIRIPlus
                    patient accounts are anonymous — we hold no name, email or phone tied to
                    your identity, so the Patient ID is how we locate the account to delete.
                  </li>
                  <li>
                    <strong>Doctors:</strong> send the request from the email address
                    registered to your doctor account.
                  </li>
                </ul>
                <p className="leading-relaxed mt-3">
                  We action verified requests and your data is permanently purged within the
                  same recovery window described below.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  3. Recovery grace period
                </h2>
                <p className="leading-relaxed">
                  After you request deletion your account is deactivated immediately and
                  enters a <strong>30-day recovery grace period</strong>. If you do nothing,
                  your data is securely and permanently purged at the end of that period.
                  During the 30 days you can recover the account by signing back in (patients
                  using their Patient ID), which cancels the deletion.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  4. What is deleted
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-brand-navy">
                        <th className="px-4 py-3 font-semibold w-1/2">Data</th>
                        <th className="px-4 py-3 font-semibold">Outcome</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {deletedRows.map((row) => (
                        <tr key={row.type} className="align-top">
                          <td className="px-4 py-3 font-medium text-brand-navy">
                            {row.type}
                          </td>
                          <td className="px-4 py-3 leading-relaxed">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  5. What we are required to keep
                </h2>
                <p className="leading-relaxed mb-3">
                  Some records cannot be deleted on request because Tanzanian law requires us
                  to retain them. These are kept only for the periods below, are not used to
                  contact or profile you, and are securely and permanently destroyed once the
                  period ends.
                </p>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-brand-navy">
                        <th className="px-4 py-3 font-semibold w-1/2">Record</th>
                        <th className="px-4 py-3 font-semibold">Retention period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {retainedRows.map((row) => (
                        <tr key={row.type} className="align-top">
                          <td className="px-4 py-3 font-medium text-brand-navy">
                            {row.type}
                          </td>
                          <td className="px-4 py-3 leading-relaxed">{row.detail}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed mt-3">
                  See our{" "}
                  <a href="/data-protection/" className="text-brand-teal hover:underline">
                    Data Protection Policy
                  </a>{" "}
                  and{" "}
                  <a href="/privacy/" className="text-brand-teal hover:underline">
                    Privacy Policy
                  </a>{" "}
                  for full detail.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">6. Contact</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>In-app:</strong> Settings &rarr; Delete account
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@esiri.africa?subject=Account%20deletion%20request"
                      className="text-brand-teal hover:underline"
                    >
                      support@esiri.africa
                    </a>
                  </li>
                  <li>
                    <strong>Phone:</strong> +255 663 582 994
                  </li>
                  <li>
                    <strong>Website:</strong>{" "}
                    <a
                      href="https://esiri.africa"
                      className="text-brand-teal hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      esiri.africa
                    </a>
                  </li>
                </ul>
              </section>

              <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
                eSIRIPlus · Eden World Company Limited · Dar es Salaam, Tanzania
              </p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
