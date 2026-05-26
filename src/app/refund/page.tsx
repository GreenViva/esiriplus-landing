"use client";

import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";

export default function RefundPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-2">{t("refund.title", locale)}</h1>
            <p className="text-sm text-gray-500 mb-8">
              {t("refund.updated", locale)}: May 2026
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
                Please read this policy carefully before paying for a consultation on
                eSIRIPlus.
              </p>
            </div>

            <div className="prose prose-gray max-w-none space-y-8 text-gray-600">
              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">Overview</h2>
                <p className="leading-relaxed">
                  eSIRIPlus accepts payment through mobile money, with M-Pesa (Vodacom
                  Tanzania) as the primary method and other mobile money providers and
                  card payment also supported. To protect both patients and doctors, all
                  consultation fees are held in <strong>escrow</strong> from the moment of
                  payment and are only released to the doctor after the consultation
                  successfully completes. This policy explains when a refund is, and is
                  not, available.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  1. How Payment Works
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    After you select your service tier, a mobile money payment prompt is
                    sent to your phone.
                  </li>
                  <li>
                    Your consultation begins{" "}
                    <strong>only after payment is confirmed</strong>.
                  </li>
                  <li>
                    The fee is held in escrow until the consultation completes. If the
                    session fails before it starts, the escrow protects you — no money is
                    lost by either side.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  2. When You Will Receive a Refund
                </h2>
                <p className="leading-relaxed mb-3">
                  A refund is issued automatically or on request in the following
                  situations:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Technical failure</strong> prevents the consultation from
                    starting.
                  </li>
                  <li>
                    <strong>The doctor becomes unavailable</strong> after payment but
                    before the consultation begins.
                  </li>
                  <li>
                    <strong>Payment was processed but the consultation never started</strong>{" "}
                    within 24 hours of payment.
                  </li>
                </ul>
                <p className="leading-relaxed mt-3">
                  Because the fee is held in escrow until the consultation completes,
                  these situations do not result in any loss to the patient or the doctor.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  3. When You Will Not Receive a Refund
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Refunds are not issued once a consultation session has started.</strong>{" "}
                    This includes text chat sessions that have begun and voice or video
                    calls that have connected.
                  </li>
                  <li>
                    Dissatisfaction with a clinical opinion is not, on its own, grounds for
                    a refund. Telemedicine has inherent limitations — a doctor cannot
                    physically examine you, and there is no guarantee of a specific health
                    outcome. Concerns about the quality or conduct of a consultation should
                    instead be raised through in-app support (see section 6).
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  4. Video Call Recharges
                </h2>
                <p className="leading-relaxed">
                  Additional video consultation time purchased as a recharge is consumed as
                  it is used. Recharge amounts are non-refundable once the recharged time
                  has started, under the same rule as section 3.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  5. How to Request a Refund
                </h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Submit your refund request through the in-app{" "}
                    <strong>Help &amp; Support</strong> feature.
                  </li>
                  <li>
                    Requests must be submitted <strong>within 7 days</strong> of the
                    payment.
                  </li>
                  <li>
                    Eligible refunds are processed{" "}
                    <strong>within 14 business days</strong>, returned to the mobile money
                    number used for the original payment.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  6. Disputes and Complaints
                </h2>
                <p className="leading-relaxed mb-3">
                  If you believe a charge was incorrect, or you have a concern about a
                  consultation:
                </p>
                <ol className="list-decimal pl-6 space-y-2">
                  <li>
                    <strong>Contact eSIRIPlus support first</strong> — most issues are
                    resolved quickly.
                  </li>
                  <li>
                    If the matter remains unresolved, it may proceed to binding arbitration
                    under the Tanzanian Arbitration Act in Dar es Salaam.
                  </li>
                </ol>
                <p className="leading-relaxed mt-3">
                  This policy is governed by the laws of the United Republic of Tanzania.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  7. Agent-Facilitated Payments
                </h2>
                <p className="leading-relaxed">
                  Where a patient pays cash to an eSIRIPlus agent who then settles the fee
                  digitally, the same refund rules in this policy apply. An eligible refund
                  is returned through the agent channel or to a nominated mobile money
                  number, as arranged through in-app support.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">
                  8. Changes to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Refund Policy from time to time. When we do, we will
                  revise the “Last Updated” date above and notify patients within the app
                  where changes are significant. Continued use of eSIRIPlus after an update
                  means you accept the revised policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-brand-navy mb-3">9. Contact Us</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>In-app:</strong> Help &amp; Support → Payments &amp; Refunds
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
