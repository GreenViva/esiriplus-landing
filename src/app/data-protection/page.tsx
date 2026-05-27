"use client";

import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";

const retentionRows = [
  {
    type: "Consultation records",
    period: "7 years (Tanzanian healthcare regulations)",
  },
  {
    type: "Chat messages",
    period: "Automatically deleted 14 days after the consultation",
  },
  {
    type: "Payment records",
    period: "As required by Tanzanian financial regulations",
  },
  {
    type: "Patient ID and health profile",
    period: "Until deletion is requested, subject to the periods above",
  },
  {
    type: "Provider professional profile",
    period: "For as long as the provider account is active",
  },
];

export default function DataProtectionPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-2">{t("dataprotection.title", locale)}</h1>
            <p className="text-sm text-gray-500 mb-8">
              {t("dataprotection.updated", locale)}: 26 May 2026
            </p>

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
                A Tanzanian Telemedicine Platform — Anonymous Patient Access · Verified
                Doctors · Mobile Money Payments
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                This policy applies to all data processed through the eSIRIPlus platform,
                including patient data and provider data.
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Purpose</h2>
                <p className="leading-relaxed">
                  This policy describes the technical and organizational safeguards
                  eSIRIPlus uses to protect health information at every layer of the
                  platform. It sits alongside the eSIRIPlus Privacy Policy, which explains
                  what patient information we collect and why.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  1. Governing Principles
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Privacy by design.</strong> Patient anonymity is built into the
                    system architecture, not added as a setting. The patient identity
                    schema contains no personally identifying fields by design.
                  </li>
                  <li>
                    <strong>Data minimization.</strong> We collect only the data necessary
                    to deliver healthcare services.
                  </li>
                  <li>
                    <strong>Purpose limitation.</strong> Data is used only for the purposes
                    described in the eSIRIPlus Privacy Policy and Provider Privacy Policy.
                  </li>
                  <li>
                    <strong>Regulatory alignment.</strong> Our data governance is aligned
                    with the Tanzania Personal Data Protection Act (PDPA) and informed by
                    international standards including GDPR principles.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">2. Encryption</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>In transit.</strong> All data exchanged between your device and
                    our servers uses TLS 1.2 or higher.
                  </li>
                  <li>
                    <strong>At rest.</strong> Stored data, including provider credentials
                    and consultation records, is encrypted using AES-256.
                  </li>
                  <li>
                    <strong>Communications.</strong> Chat messages are encrypted in transit
                    and at rest (AES-256). They are visible to your treating provider and
                    are processed by our systems to generate your consultation report; chat
                    history is automatically deleted 14 days after the consultation. Voice
                    and video calls are encrypted in transit (DTLS-SRTP) and are never
                    recorded or stored.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  3. Authentication and Session Security
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Patient security question answers are hashed using PBKDF2 before
                    storage. The original answers are never stored on our servers at any
                    point.
                  </li>
                  <li>
                    Session tokens expire automatically after 24 hours. A separate refresh
                    token (valid up to 30 days) is used to issue new sessions securely. Each
                    session is bound to a specific device and cannot be reused once it
                    expires.
                  </li>
                  <li>
                    After 10 failed Patient ID recovery attempts, recovery is temporarily
                    locked for 30 minutes to prevent unauthorized access.
                  </li>
                  <li>
                    Biometric data (fingerprint or face) used for device login is stored
                    only on the user&apos;s own device and is never transmitted to or stored
                    on eSIRIPlus servers.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">4. Access Controls</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Row Level Security is configured at the database level so that each
                    patient can access only their own records — by design, not merely by
                    policy.
                  </li>
                  <li>No patient can view another patient&apos;s data.</li>
                  <li>
                    Our team accesses personal data only where necessary to operate,
                    support, and maintain the platform, under least-privilege access
                    controls with audit logging of staff actions. Routine operations and
                    analytics rely on anonymized or aggregated data.
                  </li>
                  <li>Provider credentials are held in secure, access-controlled storage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">5. No Plaintext Secrets</h2>
                <p className="leading-relaxed">
                  Sensitive tokens, keys, and credentials are never stored as plain text in
                  our applications. All such secrets are encrypted at rest using
                  industry-standard methods.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  6. Infrastructure and Data Location
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Platform infrastructure is hosted on managed cloud infrastructure
                    (Supabase) in a Central European (EU) region, with daily encrypted
                    backups and a 99.9% availability target.
                  </li>
                  <li>Auto-scaling is used to maintain performance during demand peaks.</li>
                </ul>
                <p className="leading-relaxed mt-3">
                  <strong>Cross-border processing.</strong> Because our primary data centre
                  is located in the European Union, some personal data is processed outside
                  Tanzania. The EU maintains a strong, comparable data-protection framework,
                  and we apply contractual and technical safeguards for these transfers
                  consistent with the Tanzania Personal Data Protection Act.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  7. Security Testing and Audits
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    We conduct regular internal security reviews and vulnerability testing
                    of our systems.
                  </li>
                  <li>Third-party penetration testing forms part of our security roadmap.</li>
                  <li>
                    Security practices are reviewed and updated in line with current
                    standards in healthcare data protection.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  8. Anonymized and Aggregated Data
                </h2>
                <p className="leading-relaxed mb-3">
                  Where eSIRIPlus produces aggregated public-health insights — such as
                  anonymized symptom and geographic trend data — that data contains no
                  individual patient information, and any location used is generalized to
                  district or region level.
                </p>
                <p className="leading-relaxed">
                  Operational location data is resolved to a region → district → ward →
                  street tuple and is attached only to an anonymous session record — never
                  to a name or identity. It is captured to match patients with nearby
                  providers and to surface local offers, and is not tracked continuously in
                  the background.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">9. Data Breach Response</h2>
                <p className="leading-relaxed mb-3">
                  In the event of a suspected data security incident, eSIRIPlus will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Investigate the incident promptly</li>
                  <li>Take steps to contain and remedy it</li>
                  <li>
                    Notify affected parties and the relevant Tanzanian authorities where
                    required by law
                  </li>
                  <li>Review and strengthen controls to prevent recurrence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">10. Data Retention</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-brand-navy">
                        <th className="px-4 py-3 font-semibold w-1/3">Data type</th>
                        <th className="px-4 py-3 font-semibold">Retention period</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {retentionRows.map((row) => (
                        <tr key={row.type} className="align-top">
                          <td className="px-4 py-3 font-medium text-brand-navy">{row.type}</td>
                          <td className="px-4 py-3 leading-relaxed">{row.period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="leading-relaxed mt-3">
                  When you request deletion, your account enters a recovery grace period
                  (30 days), after which your data is securely and permanently purged
                  — subject to the legal retention periods above. Data that reaches the end
                  of its retention period is likewise securely and permanently deleted.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">11. Your Rights</h2>
                <p className="leading-relaxed">
                  Both patients and providers have the right to access the data held about
                  them, correct inaccurate information, request deletion (subject to the
                  legal retention periods in section 10), export their data, and withdraw
                  consent. Patients can exercise these rights through in-app Help &amp;
                  Support; providers can do so through the Doctor Portal. These rights are
                  described more fully in the eSIRIPlus Privacy Policy and Provider Privacy
                  Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  12. Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Data Protection Policy from time to time to reflect
                  changes in technology, regulation, or platform practice. When we do, we
                  will revise the “Last Updated” date above and notify users within the app
                  where changes are significant.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">13. Contact Us</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>In-app:</strong> Help &amp; Support → Privacy
                  </li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a
                      href="mailto:support@esiri.africa"
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
