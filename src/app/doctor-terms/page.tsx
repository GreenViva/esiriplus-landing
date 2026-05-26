"use client";

import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";

export default function DoctorTermsPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-2">{t("doctorterms.title", locale)}</h1>
            <p className="text-sm text-gray-500 mb-8">
              {t("doctorterms.updated", locale)}: 26 May 2026
            </p>

            {/* Intro block */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 mb-10">
              <p className="text-sm font-semibold text-brand-navy">
                Doctor Portal · Provider Terms &amp; Privacy Policy
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Legal documents for healthcare providers · A Tanzanian Telemedicine
                Platform
              </p>
              <p className="text-sm text-gray-600 mt-3">
                This document contains: Provider Privacy Policy · Provider Terms of Service
                · Telemedicine Practice Guidelines · Informed Provider Consent.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                Please review these terms before continuing.
              </p>
            </div>

            <div className="space-y-12 text-gray-600">
              {/* ───────────── PART 1 ───────────── */}
              <div>
                <span className="section-tag">Part 1</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Provider Privacy Policy
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      Your Privacy as a Healthcare Provider
                    </h3>
                    <p className="leading-relaxed">
                      eSIRIPlus is committed to protecting the personal and professional
                      information of all healthcare providers on our platform. This policy
                      explains what data we collect, how we use it, and your rights.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. Information We Collect
                    </h3>
                    <p className="leading-relaxed mb-3">
                      We collect the following information during registration and platform
                      use:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Full name, email address, and phone number.</li>
                      <li>Medical license number and credentials.</li>
                      <li>Professional qualifications and experience.</li>
                      <li>Profile photo (optional).</li>
                      <li>
                        Biometric data for device authentication — stored locally, never
                        transmitted.
                      </li>
                      <li>Consultation session data and messages.</li>
                      <li>Payment and earnings information.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. How We Use Your Information
                    </h3>
                    <p className="leading-relaxed mb-3">Your information is used to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Verify your identity and medical credentials.</li>
                      <li>Display your professional profile to patients.</li>
                      <li>Facilitate consultations and communications.</li>
                      <li>Process your earnings and payments.</li>
                      <li>Maintain platform security and compliance.</li>
                      <li>Improve our services and user experience.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      3. Information Shared with Patients
                    </h3>
                    <p className="leading-relaxed mb-3">
                      <strong>Patients can see:</strong> your name, profile photo, specialty
                      (and specialist field), years of experience, languages spoken,
                      professional bio, services offered, ratings, verification status, and
                      your medical license number — which is public information on the
                      Medical Council of Tanganyika register.
                    </p>
                    <p className="leading-relaxed">
                      <strong>Patients cannot see:</strong> your email address, phone
                      number, home address, or personal financial information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">4. Data Security</h3>
                    <p className="leading-relaxed">
                      All data is encrypted using TLS 1.2 or higher in transit and AES-256
                      at rest. Your credentials are stored in secure, access-controlled
                      storage. Biometric data never leaves your device. We conduct regular
                      internal security reviews and vulnerability testing, and third-party
                      penetration testing forms part of our security roadmap.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">5. Data Retention</h3>
                    <p className="leading-relaxed">
                      Your professional profile is retained for as long as your account is
                      active. Consultation records are retained for 7 years per Tanzanian
                      healthcare regulations; consultation chat messages are automatically
                      deleted 14 days after the consultation. You may request account
                      deletion at any time; after a recovery grace period (up to 90 days)
                      your data is permanently deleted, subject to the legal retention
                      requirements above.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">6. Your Rights</h3>
                    <p className="leading-relaxed mb-3">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Access all data we hold about you.</li>
                      <li>Correct inaccurate information.</li>
                      <li>Request data deletion (subject to legal requirements).</li>
                      <li>Export your data.</li>
                      <li>Withdraw consent by deactivating your account.</li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* ───────────── PART 2 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 2</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Provider Terms of Service
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      Welcome to the eSIRIPlus Provider Network
                    </h3>
                    <p className="leading-relaxed">
                      These terms govern your participation as a healthcare provider on the
                      eSIRIPlus telemedicine platform. By registering, you agree to these
                      terms in full.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">1. Eligibility</h3>
                    <p className="leading-relaxed mb-3">
                      To join the eSIRIPlus provider network, you must:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Hold a valid medical license recognized in your country of practice.</li>
                      <li>
                        Be registered with the relevant medical council (e.g., Medical
                        Council of Tanganyika).
                      </li>
                      <li>Have professional liability insurance (recommended).</li>
                      <li>Be in good standing with no active disciplinary actions.</li>
                      <li>Complete the full registration and credential verification process.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. Credential Verification
                    </h3>
                    <p className="leading-relaxed">
                      All providers must submit valid credentials for verification. Our team
                      will review your medical license and any additional certificates. You
                      will be notified once verification is complete. You may not conduct
                      consultations until your profile is verified.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      3. Consultation Standards
                    </h3>
                    <p className="leading-relaxed mb-3">You agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide care consistent with established medical standards.</li>
                      <li>Only practice within your scope of expertise and licensure.</li>
                      <li>Maintain accurate and complete consultation records.</li>
                      <li>Refer patients to emergency services when clinically indicated.</li>
                      <li>Respond to patient messages within reasonable timeframes.</li>
                      <li>Maintain professional conduct at all times.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">4. Compensation</h3>
                    <p className="leading-relaxed">
                      Consultation fees are set by eSIRIPlus based on the service and tier.
                      For each completed consultation, your share is credited to your in-app
                      earnings ledger (shown first as pending, then paid). Earnings are
                      disbursed periodically — typically monthly — to your registered M-Pesa
                      or bank account. eSIRIPlus retains a platform fee, which varies by
                      tier.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">5. Availability</h3>
                    <p className="leading-relaxed">
                      You control your own availability through the dashboard toggle. When
                      marked as available, you may receive consultation requests. There is no
                      minimum availability requirement, but consistent availability improves
                      your visibility to patients.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      6. Account Suspension
                    </h3>
                    <p className="leading-relaxed mb-3">
                      eSIRIPlus may suspend or terminate your account for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Providing false credentials or information.</li>
                      <li>Practicing outside your scope of licensure.</li>
                      <li>Repeated patient complaints or low ratings.</li>
                      <li>Violation of platform policies.</li>
                      <li>Failure to maintain a valid medical license.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      7. Dispute Resolution
                    </h3>
                    <p className="leading-relaxed">
                      Contact our provider support team for any disputes. If unresolved,
                      binding arbitration under the Tanzanian Arbitration Act in Dar es
                      Salaam applies. These Terms are governed by the laws of the United
                      Republic of Tanzania.
                    </p>
                  </section>
                </div>
              </div>

              {/* ───────────── PART 3 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 3</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Telemedicine Practice Guidelines
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Purpose</h3>
                    <p className="leading-relaxed">
                      These guidelines ensure that all consultations conducted through
                      eSIRIPlus meet the highest standards of telemedicine practice in
                      Tanzania and East Africa.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. Scope of Telemedicine
                    </h3>
                    <p className="leading-relaxed mb-3">
                      Telemedicine consultations on eSIRIPlus are suitable for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Non-emergency medical consultations.</li>
                      <li>Follow-up visits for chronic conditions.</li>
                      <li>Mental health counseling sessions.</li>
                      <li>Medication reviews and prescription renewals.</li>
                      <li>Health education and wellness guidance.</li>
                      <li>Second opinions on existing diagnoses.</li>
                    </ul>
                    <p className="leading-relaxed mt-3">
                      Telemedicine is <strong>NOT</strong> suitable for: medical
                      emergencies, conditions requiring physical examination, surgical
                      procedures, or acute life-threatening situations.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. Clinical Documentation
                    </h3>
                    <p className="leading-relaxed mb-3">For every consultation, you must:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Document the patient&apos;s presenting complaint.</li>
                      <li>Record relevant medical history discussed.</li>
                      <li>Note your clinical assessment and reasoning.</li>
                      <li>Document any prescriptions or referrals made.</li>
                      <li>Include follow-up recommendations.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      3. Prescribing Standards
                    </h3>
                    <p className="leading-relaxed mb-3">
                      When prescribing medications via telemedicine:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Only prescribe within your scope of practice.</li>
                      <li>Consider drug interactions and allergies.</li>
                      <li>Avoid prescribing controlled substances via telemedicine.</li>
                      <li>Provide clear dosage and administration instructions.</li>
                      <li>Document all prescriptions in the consultation record.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      4. Emergency Protocols
                    </h3>
                    <p className="leading-relaxed mb-3">
                      If during a consultation you identify signs of a medical emergency:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Instruct the patient to call Tanzania&apos;s national emergency
                        number (112) immediately.
                      </li>
                      <li>Provide first-aid guidance while waiting for emergency responders.</li>
                      <li>Document the emergency in the consultation record.</li>
                      <li>
                        Do not end the consultation until the patient has contacted
                        emergency services or is receiving help.
                      </li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      5. Patient Communication
                    </h3>
                    <p className="leading-relaxed mb-3">
                      Maintain clear, professional communication:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Use language the patient can understand.</li>
                      <li>Confirm the patient understands your recommendations.</li>
                      <li>Encourage patients to ask questions.</li>
                      <li>Be culturally sensitive and respectful.</li>
                      <li>Maintain appropriate professional boundaries.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      6. Continuing Education
                    </h3>
                    <p className="leading-relaxed mb-3">
                      eSIRIPlus encourages all providers to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Stay current with telemedicine best practices.</li>
                      <li>Attend relevant continuing medical education programs.</li>
                      <li>Keep your specialty knowledge up to date.</li>
                      <li>Participate in platform quality improvement initiatives.</li>
                    </ul>
                  </section>
                </div>
              </div>

              {/* ───────────── PART 4 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 4</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Informed Provider Consent
                </h2>

                <p className="leading-relaxed mb-6">
                  By registering as a provider on eSIRIPlus, you acknowledge and consent to
                  the following:
                </p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. Credential Verification
                    </h3>
                    <p className="leading-relaxed">
                      I consent to eSIRIPlus verifying my medical credentials, license
                      status, and professional standing with relevant medical councils and
                      regulatory bodies. I understand that my profile will not be activated
                      until verification is complete.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. Platform Monitoring
                    </h3>
                    <p className="leading-relaxed">
                      I understand that eSIRIPlus may monitor consultation quality through
                      patient ratings, feedback, and periodic reviews. This is done to
                      maintain high standards of care and is not intended to interfere with
                      my clinical judgment.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">3. Data Collection</h3>
                    <p className="leading-relaxed">
                      I consent to the collection and processing of my personal and
                      professional information as described in the Provider Privacy Policy.
                      I understand this data is necessary for platform operation and
                      regulatory compliance.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      4. Professional Responsibility
                    </h3>
                    <p className="leading-relaxed">
                      I acknowledge that I am solely responsible for the medical advice and
                      care I provide through eSIRIPlus. The platform facilitates the
                      connection between providers and patients but does not practice
                      medicine. I will maintain my own professional liability coverage.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      5. Biometric Authentication
                    </h3>
                    <p className="leading-relaxed">
                      I consent to enrolling my biometric data (fingerprint or face) for
                      secure access to my account. I understand this data is stored only on
                      my device and is never transmitted to eSIRIPlus servers.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">6. Payment Terms</h3>
                    <p className="leading-relaxed">
                      I agree to the compensation structure as outlined in the Terms of
                      Service. I understand that eSIRIPlus sets consultation fees and retains
                      a platform fee, and that my earnings are credited per completed
                      consultation and disbursed periodically to my registered M-Pesa or
                      bank account.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">7. Code of Conduct</h3>
                    <p className="leading-relaxed">
                      I agree to maintain the highest standards of professional conduct,
                      treat all patients with dignity and respect, and comply with all
                      applicable laws and regulations governing healthcare practice in my
                      jurisdiction.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      8. Withdrawal of Consent
                    </h3>
                    <p className="leading-relaxed">
                      I understand I may withdraw my consent and deactivate my account at
                      any time by contacting eSIRIPlus support. Withdrawal does not affect
                      the lawfulness of processing based on consent before withdrawal.
                    </p>
                  </section>
                </div>
              </div>

              {/* Provider Support */}
              <div className="border-t border-gray-100 pt-12">
                <h2 className="text-xl font-bold text-brand-navy mb-3">Provider Support</h2>
                <ul className="list-disc pl-6 space-y-2">
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

                <p className="text-sm text-gray-400 pt-6 mt-6 border-t border-gray-100">
                  eSIRIPlus · Eden World Company Limited · Dar es Salaam, Tanzania
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
