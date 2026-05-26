"use client";

import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";

const serviceFees = [
  { role: "Nurse", fee: "TZS 3,000" },
  { role: "Pharmacist", fee: "TZS 3,000" },
  { role: "Clinical Officer", fee: "TZS 5,000" },
  { role: "Drug Interaction Check", fee: "TZS 5,000" },
  { role: "Herbalist", fee: "TZS 5,000" },
  { role: "General Practitioner", fee: "TZS 10,000" },
  { role: "Specialist", fee: "TZS 30,000" },
  { role: "Psychologist", fee: "TZS 50,000" },
];

export default function UserTermsPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-2">{t("userterms.title", locale)}</h1>
            <p className="text-sm text-gray-500 mb-8">
              {t("userterms.updated", locale)}: 26 May 2026
            </p>

            {/* Intro block */}
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 mb-10">
              <p className="text-sm font-semibold text-brand-navy">
                Legal Documents · A Tanzanian Telemedicine Platform
              </p>
              <p className="text-sm text-gray-600 mt-3">
                This document contains: Privacy Policy · Data Security · Terms of Service ·
                Medical Disclaimer · Informed Consent.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                Please read carefully before using the platform.
              </p>
            </div>

            <div className="space-y-12 text-gray-600">
              {/* ───────────── PART 1 ───────────── */}
              <div>
                <span className="section-tag">Part 1</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Privacy Policy
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      We Built eSIRIPlus Around Your Privacy
                    </h3>
                    <p className="leading-relaxed">
                      Most healthcare apps ask for your name, phone number, email, and ID.
                      We don&apos;t. eSIRIPlus was designed from the ground up so that you
                      can access quality healthcare in Tanzania without revealing who you
                      are. Your health is personal — and it should stay that way.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. Your Patient ID — Your Identity on eSIRIPlus
                    </h3>
                    <p className="leading-relaxed">
                      When you first open eSIRIPlus, we generate a unique Patient ID just
                      for you (e.g. ESR-4K9X-M2PQ). This is the only identity you need. No
                      name. No phone number. No email. The doctor you consult with never
                      knows your real name. Your medical history is stored under your
                      Patient ID — not your personal details. If you lose your Patient ID,
                      you can recover it by answering 5 security questions set during
                      registration.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. What Information We Collect
                    </h3>
                    <p className="leading-relaxed">
                      We collect only what is necessary to provide healthcare services. This
                      includes your Patient ID (system-generated), age, sex, region,
                      optional blood type and allergies, consultation messages, medical
                      reports you upload, your M-Pesa phone number for payments, and
                      encrypted technical session data. We do NOT collect your full name,
                      national ID, email address, or home address. If you enable biometric
                      unlock (fingerprint or face), it is handled entirely on your device
                      and is never sent to or stored by us.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      3. How We Use Your Information
                    </h3>
                    <p className="leading-relaxed">
                      Your information is used solely to provide healthcare services:
                      connecting you with verified doctors, keeping your consultation
                      history accessible, processing M-Pesa payments, keeping the platform
                      secure, generating AI-assisted reports, and improving eSIRIPlus for
                      all patients in Tanzania. We do not use your information for selling to
                      third parties.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      4. Who Can See Your Information
                    </h3>
                    <p className="leading-relaxed">
                      Your doctor sees only the medical information you share during the
                      consultation. M-Pesa / Vodacom Tanzania sees your phone number and
                      payment amount only. VideoSDK handles video-call connection data with
                      no medical information. The eSIRIPlus team accesses your personal data
                      only where necessary to operate, support, and maintain the platform,
                      under least-privilege controls with audit logging — routine operations
                      rely on anonymized technical data. Tanzanian authorities may access
                      data only if required by a valid court order. We will never sell your
                      information to anyone.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      5. How We Protect Your Information
                    </h3>
                    <p className="leading-relaxed">
                      All data uses TLS 1.2 or higher encryption in transit. Security
                      question answers are hashed using PBKDF2 — the original answers are
                      never stored. Session tokens expire automatically after 24 hours. Row
                      Level Security ensures each patient can only access their own records.
                      Sensitive tokens are never stored as plain text. We conduct regular
                      internal security reviews and vulnerability testing, and third-party
                      penetration testing is part of our security roadmap.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      6. How Long We Keep Your Information
                    </h3>
                    <p className="leading-relaxed">
                      Consultation records are kept for 7 years as required by Tanzanian
                      healthcare regulations, and payment records are kept as required by
                      financial regulations. Consultation chat messages are automatically
                      deleted 14 days after the consultation. Your Patient ID and health
                      profile are kept until you request deletion; after a recovery grace
                      period (up to 90 days) your data is permanently deleted, subject to
                      the legal retention requirements above. You can request deletion via
                      the in-app support feature.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">7. Your Rights</h3>
                    <p className="leading-relaxed">
                      You have the right to access your full consultation history, correct
                      inaccurate health information, delete your data (subject to legal
                      retention requirements), export your medical records, withdraw consent
                      at any time by stopping use of the app, and lodge a complaint with the
                      Tanzania Communications Regulatory Authority (TCRA).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      8. Children&apos;s Privacy
                    </h3>
                    <p className="leading-relaxed">
                      eSIRIPlus is intended for adults aged 18 and above. If you are under
                      18, you may use the platform only with the supervision of a parent or
                      guardian, who is responsible for the information shared during
                      consultations.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">Contact Us</h3>
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
                    </ul>
                  </section>
                </div>
              </div>

              {/* ───────────── PART 2 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 2</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">Data Security</h2>

                <p className="leading-relaxed mb-3">
                  eSIRIPlus uses strong security practices to protect your health
                  information at every layer of the platform. The summary below describes
                  the technical safeguards we have in place.
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Encrypted Connections.</strong> All data between your device and
                    our servers uses TLS 1.2 or higher — among the strongest standards
                    available for mobile applications.
                  </li>
                  <li>
                    <strong>Hashed Security Answers.</strong> Your security question answers
                    are hashed using PBKDF2 before storage. The original answers are never
                    stored on our servers at any point.
                  </li>
                  <li>
                    <strong>Session Security.</strong> Your session token expires
                    automatically after 24 hours, and a refresh token issues new sessions
                    securely. Your session is bound to your device and cannot be reused once
                    it expires.
                  </li>
                  <li>
                    <strong>Row Level Security.</strong> Our database is configured so that
                    each patient can only access their own records. No patient can view
                    another patient&apos;s data — by design, not just policy.
                  </li>
                  <li>
                    <strong>No Plaintext Secrets.</strong> Sensitive tokens, keys, and
                    credentials are never stored as plain text in our database. All secrets
                    are encrypted at rest using industry-standard methods.
                  </li>
                  <li>
                    <strong>Regular Security Reviews.</strong> We test our systems regularly
                    for vulnerabilities, and third-party penetration testing is part of our
                    security roadmap. Our practices are reviewed and updated in line with
                    current standards in healthcare data protection.
                  </li>
                </ul>
              </div>

              {/* ───────────── PART 3 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 3</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Terms of Service
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      Welcome to eSIRIPlus
                    </h3>
                    <p className="leading-relaxed">
                      These Terms of Service explain how eSIRIPlus works and what we both
                      agree to when you use the platform. They are written in plain language
                      so they are easy to understand.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. What Is eSIRIPlus?
                    </h3>
                    <p className="leading-relaxed mb-3">
                      eSIRIPlus is a Tanzanian telemedicine platform connecting you with
                      verified, licensed healthcare providers for online consultations.
                      Services include chat consultations (the session length depends on the
                      service you choose, and can be extended), voice and video calls, and
                      AI-assisted consultation reports with QR-code verification. Extra call
                      minutes can be purchased during a call in packages — 10 minutes (TZS
                      200), 30 minutes (TZS 500), 60 minutes (TZS 900), or 120 minutes (TZS
                      1,500).
                    </p>
                    <p className="font-semibold text-brand-navy mb-2">
                      Service Fees (Economy tier)
                    </p>
                    <div className="overflow-x-auto rounded-2xl border border-gray-100">
                      <table className="w-full text-left text-sm">
                        <tbody className="divide-y divide-gray-100">
                          {serviceFees.map((row) => (
                            <tr key={row.role} className="align-top">
                              <td className="px-4 py-3 font-medium text-brand-navy">
                                {row.role}
                              </td>
                              <td className="px-4 py-3">{row.fee}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="text-sm text-gray-500 mt-3">
                      These are Economy-tier prices. Royal-tier (premium) pricing is higher
                      and is always shown in the app before you pay.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. Who Can Use eSIRIPlus
                    </h3>
                    <p className="leading-relaxed">
                      You must be 18 years or older (or have parental / guardian consent if
                      under 18), be located in Tanzania, have the legal ability to enter
                      into agreements, and provide accurate demographic information during
                      registration.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">3. Your Patient ID</h3>
                    <p className="leading-relaxed">
                      Your Patient ID (e.g., ESR-4K9X-M2PQ) is the key to your account. Treat
                      it like your ATM PIN. Keep it private, store it somewhere safe, and use
                      the Recover Patient ID feature if you lose it. After 10 failed recovery
                      attempts, your account will be temporarily locked for 30 minutes.
                      eSIRIPlus will never ask for your Patient ID via SMS, phone call, or
                      email.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">4. Payments</h3>
                    <p className="leading-relaxed mb-3">
                      We accept M-Pesa (Vodacom Tanzania). An M-Pesa STK Push is sent to your
                      phone after selecting your service tier. Your consultation begins only
                      after payment is confirmed.
                    </p>
                    <p className="leading-relaxed">
                      Refunds are issued if: a technical failure prevents the consultation
                      from starting, the doctor becomes unavailable after payment but before
                      the consultation begins, or your payment was processed but the
                      consultation never started within 24 hours. Refunds are not issued once
                      a consultation session has started. Requests must be submitted within 7
                      days and are processed within 14 business days.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      5. Your Responsibilities
                    </h3>
                    <p className="leading-relaxed mb-3">You agree to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Provide accurate and honest health information.</li>
                      <li>Use the platform for legitimate healthcare purposes only.</li>
                      <li>Treat healthcare providers respectfully.</li>
                      <li>
                        NOT use eSIRIPlus during a medical emergency — call 112
                        (Tanzania&apos;s national emergency number) instead.
                      </li>
                      <li>Not share your Patient ID.</li>
                      <li>Not attempt to hack or misuse the platform.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      6. Our Responsibilities to You
                    </h3>
                    <p className="leading-relaxed mb-3">We commit to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>
                        Verifying all healthcare providers are licensed with the Medical
                        Council of Tanganyika (MCT).
                      </li>
                      <li>Keeping your data private and secure.</li>
                      <li>Working to maintain high platform availability.</li>
                      <li>Responding to support requests within 24 hours.</li>
                      <li>Being transparent about any changes to our service or pricing.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      7. Dispute Resolution
                    </h3>
                    <p className="leading-relaxed">
                      Contact our support team first — we resolve most issues quickly. If
                      unresolved, binding arbitration under the Tanzanian Arbitration Act in
                      Dar es Salaam applies. These Terms are governed by the laws of the
                      United Republic of Tanzania.
                    </p>
                  </section>
                </div>
              </div>

              {/* ───────────── PART 4 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 4</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Medical Disclaimer
                </h2>

                <p className="leading-relaxed mb-6">
                  eSIRIPlus provides remote, non-emergency telemedicine consultations with
                  licensed healthcare providers. Please read this disclaimer carefully
                  before using the platform.
                </p>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. Not for Emergencies
                    </h3>
                    <p className="leading-relaxed">
                      eSIRIPlus must not be used for medical emergencies. If you are
                      experiencing chest pain, difficulty breathing, severe bleeding,
                      suicidal thoughts, or any other life-threatening situation, call
                      Tanzania&apos;s national emergency number (112) or go to the nearest
                      hospital immediately.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. Not a Replacement for In-Person Care
                    </h3>
                    <p className="leading-relaxed">
                      A telemedicine consultation cannot include a physical examination. It
                      is not a substitute for in-person diagnosis, hospitalization,
                      laboratory testing, or emergency treatment when these are needed.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      3. Advice Depends on the Information You Provide
                    </h3>
                    <p className="leading-relaxed">
                      Your provider&apos;s assessment is based only on the information and
                      symptoms you share during the consultation. Incomplete or inaccurate
                      information may affect the advice you receive.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      4. No Guaranteed Outcome
                    </h3>
                    <p className="leading-relaxed">
                      eSIRIPlus and its providers do not guarantee any particular diagnosis,
                      treatment result, or cure. Some conditions cannot be safely assessed or
                      treated remotely, and your provider may advise you to seek in-person
                      care.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">5. Prescriptions</h3>
                    <p className="leading-relaxed">
                      Any prescription is issued at your provider&apos;s professional
                      discretion, within their scope of practice and applicable Tanzanian
                      law. Providers do not prescribe controlled substances via telemedicine.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      6. AI-Assisted Reports
                    </h3>
                    <p className="leading-relaxed">
                      Consultation reports are generated with AI assistance from your
                      consultation and finalized by your provider. They support — and do not
                      replace — your provider&apos;s clinical judgment.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">7. Follow-Up Care</h3>
                    <p className="leading-relaxed">
                      You remain responsible for following your provider&apos;s
                      recommendations, including attending any recommended in-person
                      follow-up.
                    </p>
                  </section>
                </div>
              </div>

              {/* ───────────── PART 5 ───────────── */}
              <div className="border-t border-gray-100 pt-12">
                <span className="section-tag">Part 5</span>
                <h2 className="text-2xl font-bold text-brand-navy mt-3 mb-6">
                  Informed Consent for Telemedicine
                </h2>

                <div className="space-y-8">
                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      1. How Telemedicine Works
                    </h3>
                    <p className="leading-relaxed">
                      Telemedicine means consulting a licensed healthcare provider remotely
                      using your phone — via text chat, voice, or video call. Your
                      consultation is conducted by a provider who cannot physically examine
                      you and is completely anonymous (your doctor sees only your Patient
                      ID). Your consultation history (chat and report) is stored under your
                      Patient ID for your future reference. Voice and video calls are never
                      recorded.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      2. The Benefits You&apos;re Getting
                    </h3>
                    <p className="leading-relaxed">
                      Access to quality healthcare without travel, complete anonymity, an app
                      available in six languages (English, Swahili, Arabic, French, Spanish,
                      Hindi), affordable pricing compared to physical hospital visits, access
                      to specialists, and your full medical history always accessible via
                      your Patient ID.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      3. The Limitations You Should Know
                    </h3>
                    <p className="leading-relaxed">
                      Your doctor cannot physically examine you. Diagnosis is based only on
                      information you provide. Some conditions cannot be safely diagnosed or
                      treated via telemedicine. Technology issues may affect consultation
                      quality. You may still need in-person follow-up care. There is no
                      guarantee of a specific health outcome.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      4. Your Rights as a Patient
                    </h3>
                    <p className="leading-relaxed">
                      You have the right to stop using the service at any time, access your
                      full consultation history, refuse any recommended treatment, seek a
                      second opinion, have your anonymity protected at all times, and report
                      concerns about provider conduct to eSIRIPlus or the Medical Council of
                      Tanganyika (MCT).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      5. Payment Understanding
                    </h3>
                    <p className="leading-relaxed">
                      Consultation fees must be paid via M-Pesa before the session begins.
                      Economy-tier fees range from TZS 3,000 to TZS 50,000 depending on the
                      provider type; Royal-tier (premium) pricing is higher and is shown in
                      the app before payment. Payments are non-refundable once a consultation
                      starts. Extra call minutes can be purchased in packages from TZS 200
                      (10 minutes) up to TZS 1,500 (120 minutes).
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-brand-navy mb-2">
                      6. Your Final Acknowledgment
                    </h3>
                    <p className="leading-relaxed mb-3">
                      By continuing to use eSIRIPlus, you confirm:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>You have read and understood this consent.</li>
                      <li>You are using eSIRIPlus voluntarily.</li>
                      <li>You understand telemedicine&apos;s benefits and limitations.</li>
                      <li>You are 18 years or older, or have parental / guardian consent.</li>
                      <li>You will seek emergency care when needed (call 112).</li>
                      <li>You may withdraw consent at any time by stopping use of the app.</li>
                    </ul>
                  </section>
                </div>
              </div>

              <p className="text-sm text-gray-400 pt-8 border-t border-gray-100">
                eSIRIPlus · Eden World Company Limited · Dar es Salaam, Tanzania
              </p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
