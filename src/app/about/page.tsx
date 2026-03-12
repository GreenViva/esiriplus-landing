"use client";

import PageShell from "@/components/PageShell";
import { t } from "@/lib/i18n";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <PageShell>
      {(locale) => (
        <div className="section-container section-padding">
          <div className="max-w-3xl mx-auto">
            <h1 className="section-title mb-4">{t("about.page.title", locale)}</h1>
            <p className="text-xl text-gray-500 mb-12">The only telemedicine platform built around complete patient anonymity.</p>

            <div className="prose prose-lg max-w-none space-y-6 text-gray-600">
              {/* Lead with the problem */}
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">The Problem We Solve</h2>
                <p className="leading-relaxed">
                  Millions of people across Tanzania avoid seeking medical help — not because they cannot
                  access it, but because they are afraid. Afraid of being recognized at a clinic. Afraid
                  of judgment for their symptoms. Afraid that someone will find out.
                </p>
                <p className="leading-relaxed">
                  Mental health struggles, sexual health concerns, substance-related issues, embarrassing
                  symptoms — these are real medical conditions that deserve real medical attention. But
                  stigma keeps people silent, and silence costs lives.
                </p>
                <p className="leading-relaxed font-medium text-gray-800">
                  Other telemedicine apps moved the clinic online — but they still require your name, your
                  photo, and your ID. They solved distance, not stigma. eSIRIPlus solves both.
                </p>
              </section>

              {/* Core differentiator — anonymity */}
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">How eSIRIPlus Is Different</h2>
                <div className="bg-brand-teal-light/40 border border-brand-teal/20 rounded-2xl p-6 mb-4">
                  <p className="leading-relaxed text-gray-800 font-medium mb-4">
                    eSIRIPlus is built from the ground up around one principle: you should never have to choose
                    between your privacy and your health. Patient anonymity is not a feature we added — it is
                    the foundation everything else is built on.
                  </p>
                </div>

                {/* How it works — anonymous journey */}
                <h3 className="text-lg font-bold text-brand-navy mt-6 mb-4">Your Anonymous Journey</h3>
                <div className="grid gap-4">
                  {[
                    { step: "1", title: "Sign up without identity", text: "Create an account with just a phone number or email. No real name, no photo, no national ID required — ever." },
                    { step: "2", title: "Browse verified doctors", text: "Every doctor on eSIRIPlus is licensed and verified. You see their credentials. They see nothing about you." },
                    { step: "3", title: "Consult on your terms", text: "Chat, voice, or video — choose what you are comfortable with. Share only the medical details relevant to your concern." },
                    { step: "4", title: "Get your prescription", text: "Receive a digital prescription you can take to any pharmacy. The doctor never learns your real identity." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-teal text-white flex items-center justify-center flex-shrink-0 font-bold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-brand-navy mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Privacy guarantees */}
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Our Privacy Guarantees</h2>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span><strong>No real name collected.</strong> We never ask for or store your legal name. Your anonymous profile is the only identity that exists on our system.</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span><strong>No photo or ID verification for patients.</strong> Doctors are verified — you are not required to be. Your anonymity is protected by design.</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span><strong>End-to-end encrypted conversations.</strong> Your chats, calls, and records are encrypted so only you and your doctor can access them. Even eSIRIPlus staff cannot read them.</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.403 12.652a3 3 0 0 0 0-5.304 3 3 0 0 0-3.75-3.751 3 3 0 0 0-5.305 0 3 3 0 0 0-3.751 3.75 3 3 0 0 0 0 5.305 3 3 0 0 0 3.75 3.751 3 3 0 0 0 5.305 0 3 3 0 0 0 3.751-3.75Zm-2.546-4.46a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clipRule="evenodd" />
                    </svg>
                    <span><strong>Full data control.</strong> You decide what medical information to share with your doctor. You can delete your records and account at any time — permanently.</span>
                  </li>
                </ul>
              </section>

              {/* For both sides */}
              <section>
                <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">For Patients and Doctors</h2>
                <p className="leading-relaxed mb-4">
                  eSIRIPlus creates a unique exchange: patients get the anonymity they need to seek help
                  without fear, while doctors get a verified, professional platform to expand their
                  practice beyond clinic walls. Patients are protected. Doctors are empowered. Trust
                  flows in both directions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Our Vision</h2>
                <p className="leading-relaxed">
                  We envision a future where no one in East Africa avoids medical help because of stigma
                  or fear. Where a teenager can ask about mental health without shame. Where anyone can
                  discuss sensitive symptoms without worry. eSIRIPlus is building that future — one anonymous
                  consultation at a time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-brand-navy mt-8 mb-4">Healthcare Standards</h2>
                <p className="leading-relaxed">
                  Anonymous does not mean unregulated. All healthcare providers on our platform hold valid
                  medical licenses and undergo thorough verification. We maintain strict professional
                  standards through patient feedback, regular audits, and continuous quality monitoring.
                  Your identity is private — your care is not compromised.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
