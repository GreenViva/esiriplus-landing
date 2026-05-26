"use client";

import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";

const verifiedElements = [
  {
    element: "Medical license number",
    standard:
      "Checked in real time against the MCT registry; displayed publicly on the profile for patient verification",
  },
  {
    element: "Full name and medical title",
    standard: "Confirmed against licensing records",
  },
  {
    element: "Primary specialization",
    standard:
      "Confirmed against credentials (e.g. General Practice, Paediatrics, Psychiatry, Obstetrics & Gynaecology, Internal Medicine, Dermatology, Cardiology)",
  },
  {
    element: "Sub-specialties",
    standard: "Listed only where supported by submitted certificates",
  },
  {
    element: "Years of clinical experience",
    standard: "Confirmed and displayed as a patient trust signal",
  },
  {
    element: "Languages spoken",
    standard: "Recorded for the patient language filter",
  },
  {
    element: "Professional photo",
    standard:
      "A clear circular portrait, displayed on all doctor cards and consultation screens",
  },
];

export default function DoctorVerificationPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-2">{t("verification.title", locale)}</h1>
            <p className="text-sm text-gray-500 mb-8">
              {t("verification.updated", locale)}: May 2026
            </p>

            {/* Operator intro */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 mb-10">
              <p className="text-sm text-gray-700">
                <strong>Operated by Eden World Company Limited</strong> · Dar es Salaam,
                Tanzania ·{" "}
                <a
                  href="https://www.edenworld.co.tz"
                  className="text-brand-teal hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.edenworld.co.tz
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">
                A Tanzanian Telemedicine Platform — Anonymous Patient Access · Verified
                Doctors · Mobile Money Payments
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                This policy applies to all healthcare providers applying to or practising
                on the eSIRIPlus platform.
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  Why This Policy Exists
                </h2>
                <p className="leading-relaxed">
                  On eSIRIPlus, patients are anonymous — but doctors are completely
                  transparent. Patients must be able to trust the professional they are
                  speaking to. This policy explains how every doctor on the platform is
                  verified before they can see a single patient, and the standards they
                  must continue to meet.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  1. Eligibility to Join the Provider Network
                </h2>
                <p className="leading-relaxed mb-3">
                  To be considered for the eSIRIPlus provider network, an applicant must:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Hold a valid medical license recognized in their country of practice</li>
                  <li>
                    Be registered with the relevant medical council — for Tanzania, the{" "}
                    <strong>Medical Council of Tanganyika (MCT)</strong>
                  </li>
                  <li>Be in good standing, with no active disciplinary action against them</li>
                  <li>Hold professional liability insurance (recommended)</li>
                  <li>Complete the full registration and credential verification process</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  2. The Verification Process
                </h2>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Application and credential submission.</strong> The applicant
                    submits their medical license number, professional qualifications,
                    certificates, and experience details through the eSIRIPlus Doctor
                    Portal.
                  </li>
                  <li>
                    <strong>Real-time license check.</strong> The medical license number is
                    verified against the official Medical Council of Tanganyika (MCT)
                    registry.
                  </li>
                  <li>
                    <strong>Credential review.</strong> The eSIRIPlus medical verification
                    team reviews the submitted license and any additional certificates for
                    validity, scope, and standing.
                  </li>
                  <li>
                    <strong>Profile preparation.</strong> A clear, professional cropped
                    portrait photo is confirmed for display on the doctor&apos;s public
                    profile.
                  </li>
                  <li>
                    <strong>Outcome notification.</strong> The applicant is notified once
                    verification is complete.
                  </li>
                </ol>
                <p className="leading-relaxed mt-3 font-semibold text-brand-navy">
                  A provider may not conduct any consultations until their profile has been
                  fully verified and activated.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">3. What Is Verified</h2>
                <div className="overflow-x-auto rounded-2xl border border-gray-100">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-gray-50 text-brand-navy">
                        <th className="px-4 py-3 font-semibold w-1/3">Element</th>
                        <th className="px-4 py-3 font-semibold">Verification standard</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {verifiedElements.map((row) => (
                        <tr key={row.element} className="align-top">
                          <td className="px-4 py-3 font-medium text-brand-navy">
                            {row.element}
                          </td>
                          <td className="px-4 py-3 leading-relaxed">{row.standard}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  4. What Patients See — and Don&apos;t See
                </h2>
                <p className="leading-relaxed mb-3">
                  <strong>Patients can see:</strong> the doctor&apos;s name, professional
                  photo, specialty and sub-specialties, years of experience, languages
                  spoken, services offered, and an aggregate anonymized patient rating.
                </p>
                <p className="leading-relaxed">
                  <strong>Patients cannot see:</strong> the doctor&apos;s email address,
                  phone number, home address, or financial information. The license number
                  is displayed for verification purposes only; no personal contact details
                  are ever shown.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">5. Ongoing Standards</h2>
                <p className="leading-relaxed mb-3">Verified providers must continue to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Practise only within their scope of expertise and licensure</li>
                  <li>Maintain a valid, current medical license and medical council registration</li>
                  <li>Provide care consistent with established medical standards</li>
                  <li>Maintain accurate and complete consultation records</li>
                  <li>Refer patients to emergency services (112 / 114 / 115) when clinically indicated</li>
                  <li>Respond to patient messages within reasonable timeframes</li>
                  <li>Maintain professional conduct and appropriate professional boundaries at all times</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  6. Re-Verification and License Monitoring
                </h2>
                <p className="leading-relaxed">
                  eSIRIPlus may periodically re-confirm a provider&apos;s license status
                  with the Medical Council of Tanganyika. A provider whose license lapses,
                  is suspended, or is revoked will have their profile deactivated until
                  valid registration is restored.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">7. Platform Monitoring</h2>
                <p className="leading-relaxed">
                  eSIRIPlus may monitor consultation quality through anonymized patient
                  ratings, patient feedback, and periodic reviews. This is done solely to
                  maintain high standards of care across the platform and is not intended
                  to interfere with a provider&apos;s independent clinical judgment.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">8. Suspension and Removal</h2>
                <p className="leading-relaxed mb-3">
                  eSIRIPlus may suspend or permanently remove a provider&apos;s account for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Providing false credentials or information</li>
                  <li>Practising outside their scope of licensure</li>
                  <li>Loss of a valid medical license or medical council registration</li>
                  <li>Repeated patient complaints or persistently low ratings</li>
                  <li>Violation of platform policies or the provider code of conduct</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">9. Reporting a Concern</h2>
                <p className="leading-relaxed">
                  Patients and providers can report concerns about provider conduct through
                  in-app support. Serious concerns may also be reported directly to the
                  Medical Council of Tanganyika (MCT).
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  10. Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Doctor Verification Policy from time to time. When we
                  do, we will revise the “Last Updated” date above and notify providers
                  within the Doctor Portal where changes are significant. Continued use of
                  the platform after an update means the provider accepts the revised
                  policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">11. Contact Us</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>In-app:</strong> Doctor Portal → Help &amp; Support
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
