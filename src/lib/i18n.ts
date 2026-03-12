export type Locale = "en" | "sw";

const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.about": "About",
    "nav.features": "Features",
    "nav.doctors": "For Doctors",
    "nav.support": "Support",
    "nav.download": "Download App",

    // Hero
    "hero.title": "See a Doctor. Stay Anonymous. No Identity Required.",
    "hero.subtitle":
      "eSIRIPlus is the only telemedicine platform where you get real medical consultations without sharing your name, face, or any personal identity. Just the care you need — completely stigma-free.",
    "hero.cta.download": "Download App",
    "hero.cta.learn": "Learn More",

    // About
    "about.tag": "What Makes Us Different",
    "about.title": "The Only Truly Anonymous Telemedicine Platform",
    "about.description":
      "Other telemedicine apps ask for your name, photo, and ID before you can even talk to a doctor. eSIRIPlus doesn't. We built a platform where complete anonymity is the default — so you can seek help for any condition without fear, stigma, or judgment.",
    "about.card1.title": "Zero Identity Required",
    "about.card1.text":
      "No name, no photo, no national ID. Create an account and start a consultation without revealing who you are — ever.",
    "about.card2.title": "Stigma-Free Care",
    "about.card2.text":
      "Whether it's mental health, sexual health, or any sensitive condition — get professional help without anyone knowing it's you.",
    "about.card3.title": "Verified Doctors, Anonymous Patients",
    "about.card3.text":
      "Every doctor is licensed and verified. But your identity? That stays completely private throughout the entire consultation.",

    // Features
    "features.tag": "Platform Features",
    "features.title": "Full Medical Consultations, Zero Identity Exposure",
    "features.subtitle":
      "Every feature is designed with your anonymity in mind. Get the same quality care as an in-person visit — without anyone knowing it's you.",
    "features.consultation.title": "Anonymous Consultations",
    "features.consultation.text":
      "Connect with a qualified doctor within minutes — no name, no photo, no identity check required.",
    "features.messaging.title": "Private Encrypted Messaging",
    "features.messaging.text":
      "End-to-end encrypted chat that can never be traced back to your real identity.",
    "features.video.title": "Audio & Video Calls",
    "features.video.text":
      "Face-to-face remote consultations with crystal-clear audio and video quality.",
    "features.scheduling.title": "Appointment Scheduling",
    "features.scheduling.text":
      "Book consultations at a time that works for you with flexible scheduling.",
    "features.ratings.title": "Doctor Ratings",
    "features.ratings.text":
      "Rate your consultations to help maintain high-quality healthcare standards.",
    "features.records.title": "Private Medical Records",
    "features.records.text":
      "Your consultation history and prescriptions, securely stored under your anonymous profile — accessible only to you.",

    // Platform — for both patients and doctors
    "platform.tag": "Built for Everyone",
    "platform.title": "Anonymous for Patients. Professional for Doctors.",
    "platform.subtitle":
      "eSIRIPlus is the bridge between patients who need privacy and doctors who want to help. Patients stay completely anonymous. Doctors are fully verified. Everyone gets what they need.",
    "platform.patients.heading": "For Patients",
    "platform.patient1.title": "100% Anonymous — From Start to Finish",
    "platform.patient1.text":
      "Unlike other telemedicine apps, eSIRIPlus never asks for your real name, photo, or ID. Your entire consultation — from booking to prescription — happens without revealing who you are.",
    "platform.patient2.title": "No Stigma, No Judgment",
    "platform.patient2.text":
      "Mental health, sexual health, embarrassing symptoms — whatever it is, get professional medical advice without fear of anyone finding out.",
    "platform.patient3.title": "Your Data, Your Control",
    "platform.patient3.text":
      "End-to-end encrypted conversations tied to your anonymous profile. You decide what to share and can delete everything at any time.",
    "platform.doctors.heading": "For Doctors",
    "platform.doctor1.title": "Expand Your Patient Reach",
    "platform.doctor1.text":
      "Connect with patients across Tanzania, beyond the walls of your clinic. Set your own availability.",
    "platform.doctor2.title": "Build Your Reputation",
    "platform.doctor2.text":
      "Earn ratings and reviews from satisfied patients to grow your digital practice.",
    "platform.doctor3.title": "Earn on Your Terms",
    "platform.doctor3.text":
      "Flexible scheduling, transparent earnings, and professional-grade tools for consultations and prescriptions.",

    // App Download
    "download.tag": "Get Started",
    "download.title": "Your Anonymous Doctor Is One Download Away",
    "download.subtitle":
      "No name required. No ID needed. Download eSIRIPlus and start a private consultation in minutes.",
    "download.playstore": "Get it on Google Play",
    "download.coming": "iOS Coming Soon",
    "download.scan": "Scan to download",

    // Trust
    "trust.tag": "Why Trust eSIRIPlus",
    "trust.title": "Anonymous Doesn't Mean Unsafe",
    "trust.subtitle":
      "Your identity stays hidden, but your safety never does. Here's how we ensure quality care while protecting your anonymity.",
    "trust.verification.title": "Doctor Verification",
    "trust.verification.text":
      "Every doctor undergoes license verification and credential checks before joining the platform.",
    "trust.encryption.title": "End-to-End Encryption",
    "trust.encryption.text":
      "All communications between patients and doctors are encrypted and secure.",
    "trust.privacy.title": "True Anonymity",
    "trust.privacy.text":
      "We don't collect your real name, photo, or government ID. Your medical data is protected and never linked to your real-world identity.",
    "trust.standards.title": "Professional Standards",
    "trust.standards.text":
      "We maintain strict quality standards with regular audits and patient feedback systems.",

    // Stats
    "stats.doctors": "Verified Doctors",
    "stats.consultations": "Consultations",
    "stats.patients": "Active Patients",
    "stats.rating": "Average Rating",

    // Contact
    "contact.tag": "Get in Touch",
    "contact.title": "Contact & Support",
    "contact.subtitle":
      "Have questions? We're here to help. Reach out through any of these channels.",
    "contact.email": "Email Us",
    "contact.email.address": "support@esiri.africa",
    "contact.phone": "Call Us",
    "contact.phone.number": "+255 XXX XXX XXX",
    "contact.hours": "Business Hours",
    "contact.hours.text": "Mon - Fri, 8:00 AM - 6:00 PM EAT",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.success": "Message sent! We will respond within 24 hours.",

    // FAQ
    "faq.title": "Frequently Asked Questions",
    "faq.q1": "How anonymous is eSIRIPlus really?",
    "faq.a1":
      "Completely anonymous. You don't need to provide your real name, photo, or any government ID to use eSIRIPlus. You create a private profile, choose a doctor, and start your consultation — all without revealing your identity. Doctors see only what you choose to share.",
    "faq.q2": "Are the doctors verified?",
    "faq.a2":
      "Yes. Every doctor on eSIRIPlus undergoes a thorough verification process including license validation, credential checks, and identity verification before they can accept consultations.",
    "faq.q3": "How much does a consultation cost?",
    "faq.a3":
      "Consultation fees vary by doctor and service tier. You can see the exact cost before booking. We offer affordable rates to make healthcare accessible to everyone.",
    "faq.q4": "Is my identity truly protected?",
    "faq.a4":
      "Yes. We never collect your real name, photo, or national ID. All communications are encrypted end-to-end and tied to your anonymous profile. Even eSIRIPlus staff cannot see who you are.",
    "faq.q5": "Can I get prescriptions through eSIRIPlus?",
    "faq.a5":
      "Yes. Doctors can issue digital prescriptions during your consultation, which you can take to any pharmacy.",
    "faq.q6": "What if I need emergency care?",
    "faq.a6":
      "eSIRIPlus is designed for non-emergency consultations. If you have a medical emergency, please call emergency services or visit your nearest hospital immediately.",

    // Footer
    "footer.description":
      "Tanzania's first fully anonymous telemedicine platform. See a real doctor without sharing your identity.",
    "footer.product": "Product",
    "footer.company": "Company",
    "footer.legal": "Legal",
    "footer.about": "About eSIRIPlus",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.download": "Download",
    "footer.mission": "Our Mission",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.blog": "Blog",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.data": "Data Protection",
    "footer.cookies": "Cookie Policy",
    "footer.rights": "All rights reserved.",
    "footer.newsletter": "Stay Updated",
    "footer.newsletter.text": "Get the latest health tips and platform updates.",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.submit": "Subscribe",

    // Pages
    "privacy.title": "Privacy Policy",
    "privacy.updated": "Last updated",
    "terms.title": "Terms of Service",
    "terms.updated": "Last updated",
    "about.page.title": "About eSIRIPlus",
    "support.page.title": "Support Center",

    // Doctor Apply
    "apply.title": "Apply to Join eSIRIPlus",
    "apply.subtitle":
      "Complete this form to begin your onboarding as a healthcare provider on eSIRIPlus.",
    "apply.fullname": "Full Name",
    "apply.email": "Email Address",
    "apply.phone": "Phone Number",
    "apply.license": "Medical License Number",
    "apply.specialty": "Specialty",
    "apply.experience": "Years of Experience",
    "apply.bio": "Brief Bio",
    "apply.submit": "Submit Application",
    "apply.success":
      "Application submitted! Our team will review your credentials and contact you within 3-5 business days.",
    "apply.specialties.general": "General Practice",
    "apply.specialties.pediatrics": "Pediatrics",
    "apply.specialties.obstetrics": "Obstetrics & Gynecology",
    "apply.specialties.internal": "Internal Medicine",
    "apply.specialties.dermatology": "Dermatology",
    "apply.specialties.psychiatry": "Psychiatry",
    "apply.specialties.cardiology": "Cardiology",
    "apply.specialties.other": "Other",
  },

  sw: {
    // Nav
    "nav.home": "Nyumbani",
    "nav.about": "Kuhusu",
    "nav.features": "Huduma",
    "nav.doctors": "Kwa Madaktari",
    "nav.support": "Msaada",
    "nav.download": "Pakua App",

    // Hero
    "hero.title": "Ona Daktari. Baki Bila Kujulikana. Hakuna Utambulisho Unaohitajika.",
    "hero.subtitle":
      "eSIRIPlus ndiyo jukwaa pekee la telemedicine ambapo unapata mashauriano halisi ya kimatibabu bila kushiriki jina lako, uso, au utambulisho wowote. Huduma unayohitaji tu — bila aibu kabisa.",
    "hero.cta.download": "Pakua App",
    "hero.cta.learn": "Jifunze Zaidi",

    // About
    "about.tag": "Kinachotutofautisha",
    "about.title": "Jukwaa Pekee la Telemedicine Lisilo na Utambulisho",
    "about.description":
      "Programu nyingine za telemedicine zinakuuliza jina lako, picha, na kitambulisho kabla hujazungumza na daktari. eSIRIPlus haifanyi hivyo. Tulijenga jukwaa ambapo kutokuwa na utambulisho ni chaguo-msingi — ili uweze kutafuta msaada kwa hali yoyote bila hofu, aibu, au hukumu.",
    "about.card1.title": "Hakuna Utambulisho Unaohitajika",
    "about.card1.text":
      "Hakuna jina, hakuna picha, hakuna kitambulisho cha taifa. Fungua akaunti na anza mashauriano bila kufichua wewe ni nani — kamwe.",
    "about.card2.title": "Huduma Bila Aibu",
    "about.card2.text":
      "Iwe ni afya ya akili, afya ya ngono, au dalili za aibu — pata msaada wa kitaalamu bila mtu yeyote kujua ni wewe.",
    "about.card3.title": "Madaktari Waliothibitishwa, Wagonjwa Wasiojulikana",
    "about.card3.text":
      "Kila daktari ana leseni na amethibitishwa. Lakini utambulisho wako? Unabaki faragha kabisa wakati wote wa mashauriano.",

    // Features
    "features.tag": "Huduma za Jukwaa",
    "features.title": "Mashauriano Kamili ya Kimatibabu, Bila Kufichua Utambulisho",
    "features.subtitle":
      "Kila huduma imeundwa kwa kuzingatia faragha yako. Pata huduma sawa na ile ya ana kwa ana — bila mtu yeyote kujua ni wewe.",
    "features.consultation.title": "Mashauriano ya Siri",
    "features.consultation.text":
      "Ungana na daktari aliyethibitishwa ndani ya dakika — hakuna jina, hakuna picha, hakuna uthibitishaji wa utambulisho.",
    "features.messaging.title": "Ujumbe wa Faragha Uliosimbwa",
    "features.messaging.text":
      "Mazungumzo yaliyosimbwa mwisho-hadi-mwisho ambayo hayawezi kufuatiliwa hadi utambulisho wako halisi.",
    "features.video.title": "Simu za Sauti na Video",
    "features.video.text":
      "Mashauriano ya ana kwa ana ya mbali na ubora wa sauti na video.",
    "features.scheduling.title": "Kupanga Miadi",
    "features.scheduling.text":
      "Panga mashauriano wakati unaokufaa na ratiba inayobadilika.",
    "features.ratings.title": "Ukadiriaji wa Madaktari",
    "features.ratings.text":
      "Kadiria mashauriano yako kusaidia kudumisha viwango vya juu.",
    "features.records.title": "Rekodi za Kimatibabu za Faragha",
    "features.records.text":
      "Historia yako ya mashauriano na maagizo, yamehifadhiwa kwa usalama chini ya wasifu wako usiojulikana — yanapatikana kwako tu.",

    // Platform — for both patients and doctors
    "platform.tag": "Imejengwa kwa Wote",
    "platform.title": "Faragha kwa Wagonjwa. Utaalamu kwa Madaktari.",
    "platform.subtitle":
      "eSIRIPlus ni daraja kati ya wagonjwa wanaohitaji faragha na madaktari wanaotaka kusaidia. Wagonjwa wanabaki bila kujulikana kabisa. Madaktari wamethibitishwa kikamilifu. Kila mtu anapata anachohitaji.",
    "platform.patients.heading": "Kwa Wagonjwa",
    "platform.patient1.title": "Siri 100% — Kuanzia Mwanzo hadi Mwisho",
    "platform.patient1.text":
      "Tofauti na programu nyingine za telemedicine, eSIRIPlus haiulizi kamwe jina lako halisi, picha, au kitambulisho. Mashauriano yako yote — kuanzia kuhifadhi hadi maagizo — yanafanyika bila kufichua wewe ni nani.",
    "platform.patient2.title": "Bila Aibu, Bila Hukumu",
    "platform.patient2.text":
      "Afya ya akili, afya ya ngono, dalili za aibu — chochote kile, pata ushauri wa kimatibabu wa kitaalamu bila hofu ya mtu yeyote kugundua.",
    "platform.patient3.title": "Data Yako, Udhibiti Wako",
    "platform.patient3.text":
      "Mazungumzo yaliyosimbwa mwisho-hadi-mwisho yanayohusishwa na wasifu wako usiojulikana. Unaamua unachoshiriki na unaweza kufuta kila kitu wakati wowote.",
    "platform.doctors.heading": "Kwa Madaktari",
    "platform.doctor1.title": "Panua Ufikiaji wa Wagonjwa",
    "platform.doctor1.text":
      "Unganisha na wagonjwa kote Tanzania, zaidi ya kuta za kliniki yako. Weka ratiba yako mwenyewe.",
    "platform.doctor2.title": "Jenga Sifa Yako",
    "platform.doctor2.text":
      "Pata ukadiriaji na mapitio kutoka kwa wagonjwa walioridhika kukuza mazoezi yako ya dijitali.",
    "platform.doctor3.title": "Pata Kipato kwa Masharti Yako",
    "platform.doctor3.text":
      "Ratiba inayobadilika, mapato wazi, na zana za kitaalamu za mashauriano na maagizo.",

    // App Download
    "download.tag": "Anza",
    "download.title": "Daktari Wako Asiyejulikana Yuko Pakua Moja Tu Mbali",
    "download.subtitle":
      "Hakuna jina linalohitajika. Hakuna kitambulisho kinachohitajika. Pakua eSIRIPlus na anza mashauriano ya faragha ndani ya dakika.",
    "download.playstore": "Pata kwenye Google Play",
    "download.coming": "iOS Inakuja Hivi Karibuni",
    "download.scan": "Scan kupakua",

    // Trust
    "trust.tag": "Kwa Nini Uamini eSIRIPlus",
    "trust.title": "Kutokuwa na Utambulisho Haimaanishi Kutokuwa Salama",
    "trust.subtitle":
      "Utambulisho wako unabaki siri, lakini usalama wako haufi kamwe. Hivi ndivyo tunavyohakikisha huduma bora huku tukilinda faragha yako.",
    "trust.verification.title": "Uthibitishaji wa Madaktari",
    "trust.verification.text":
      "Kila daktari anapitia uthibitishaji wa leseni kabla ya kujiunga.",
    "trust.encryption.title": "Usimbaji wa Mwisho-hadi-Mwisho",
    "trust.encryption.text":
      "Mawasiliano yote kati ya wagonjwa na madaktari yamesimbwa na salama.",
    "trust.privacy.title": "Faragha ya Kweli",
    "trust.privacy.text":
      "Hatukusanyi jina lako halisi, picha, au kitambulisho cha serikali. Data yako ya kimatibabu inalindwa na haiunganishwi na utambulisho wako halisi.",
    "trust.standards.title": "Viwango vya Kitaalamu",
    "trust.standards.text":
      "Tunadumisha viwango vikali vya ubora na ukaguzi wa mara kwa mara.",

    // Stats
    "stats.doctors": "Madaktari Waliothibitishwa",
    "stats.consultations": "Mashauriano",
    "stats.patients": "Wagonjwa Hai",
    "stats.rating": "Ukadiriaji wa Wastani",

    // Contact
    "contact.tag": "Wasiliana Nasi",
    "contact.title": "Mawasiliano na Msaada",
    "contact.subtitle":
      "Una maswali? Tuko hapa kusaidia. Wasiliana nasi kupitia njia yoyote hizi.",
    "contact.email": "Tuma Barua Pepe",
    "contact.email.address": "support@esiri.africa",
    "contact.phone": "Piga Simu",
    "contact.phone.number": "+255 XXX XXX XXX",
    "contact.hours": "Saa za Kazi",
    "contact.hours.text": "Jumatatu - Ijumaa, 8:00 AM - 6:00 PM EAT",
    "contact.form.name": "Jina Lako",
    "contact.form.email": "Barua Pepe Yako",
    "contact.form.message": "Ujumbe Wako",
    "contact.form.submit": "Tuma Ujumbe",
    "contact.form.success":
      "Ujumbe umetumwa! Tutajibu ndani ya masaa 24.",

    // FAQ
    "faq.title": "Maswali Yanayoulizwa Mara kwa Mara",
    "faq.q1": "eSIRIPlus ni ya siri kiasi gani kweli?",
    "faq.a1":
      "Siri kabisa. Huhitaji kutoa jina lako halisi, picha, au kitambulisho chochote cha serikali kutumia eSIRIPlus. Unafungua wasifu wa faragha, unachagua daktari, na kuanza mashauriano yako — yote bila kufichua utambulisho wako. Madaktari wanaona tu unachochagua kushiriki.",
    "faq.q2": "Je, madaktari wamethibitishwa?",
    "faq.a2":
      "Ndiyo. Kila daktari kwenye eSIRIPlus anapitia utaratibu wa kina wa uthibitishaji ikiwa ni pamoja na uthibitishaji wa leseni.",
    "faq.q3": "Mashauriano yanagharimu kiasi gani?",
    "faq.a3":
      "Ada za mashauriano zinatofautiana kwa daktari na kiwango cha huduma. Unaweza kuona gharama halisi kabla ya kuhifadhi.",
    "faq.q4": "Je, utambulisho wangu unalindwa kweli?",
    "faq.a4":
      "Ndiyo. Hatukusanyi kamwe jina lako halisi, picha, au kitambulisho cha taifa. Mawasiliano yote yamesimbwa mwisho-hadi-mwisho na yamefungwa kwa wasifu wako usiojulikana. Hata wafanyakazi wa eSIRIPlus hawawezi kuona wewe ni nani.",
    "faq.q5": "Naweza kupata maagizo kupitia eSIRIPlus?",
    "faq.a5":
      "Ndiyo. Madaktari wanaweza kutoa maagizo ya dijitali wakati wa mashauriano yako.",
    "faq.q6": "Nikifanya nini kama nahitaji huduma ya dharura?",
    "faq.a6":
      "eSIRIPlus imetengenezwa kwa mashauriano yasiyo ya dharura. Kama una dharura ya kimatibabu, tafadhali piga simu huduma za dharura.",

    // Footer
    "footer.description":
      "Jukwaa la kwanza la telemedicine lisilo na utambulisho nchini Tanzania. Ona daktari halisi bila kushiriki utambulisho wako.",
    "footer.product": "Bidhaa",
    "footer.company": "Kampuni",
    "footer.legal": "Kisheria",
    "footer.about": "Kuhusu eSIRIPlus",
    "footer.features": "Huduma",
    "footer.pricing": "Bei",
    "footer.download": "Pakua",
    "footer.mission": "Dhamira Yetu",
    "footer.careers": "Kazi",
    "footer.contact": "Mawasiliano",
    "footer.blog": "Blogu",
    "footer.privacy": "Sera ya Faragha",
    "footer.terms": "Masharti ya Huduma",
    "footer.data": "Ulinzi wa Data",
    "footer.cookies": "Sera ya Kuki",
    "footer.rights": "Haki zote zimehifadhiwa.",
    "footer.newsletter": "Endelea Kupata Habari",
    "footer.newsletter.text":
      "Pata vidokezo vya afya na masasisho ya jukwaa.",
    "footer.newsletter.placeholder": "Weka barua pepe yako",
    "footer.newsletter.submit": "Jiandikishe",

    // Pages
    "privacy.title": "Sera ya Faragha",
    "privacy.updated": "Ilisasishwa mwisho",
    "terms.title": "Masharti ya Huduma",
    "terms.updated": "Ilisasishwa mwisho",
    "about.page.title": "Kuhusu eSIRIPlus",
    "support.page.title": "Kituo cha Msaada",

    // Doctor Apply
    "apply.title": "Omba Kujiunga na eSIRIPlus",
    "apply.subtitle":
      "Jaza fomu hii kuanza mchakato wako wa kujiunga kama mtoa huduma za afya kwenye eSIRIPlus.",
    "apply.fullname": "Jina Kamili",
    "apply.email": "Anwani ya Barua Pepe",
    "apply.phone": "Nambari ya Simu",
    "apply.license": "Nambari ya Leseni ya Kimatibabu",
    "apply.specialty": "Utaalamu",
    "apply.experience": "Miaka ya Uzoefu",
    "apply.bio": "Wasifu Mfupi",
    "apply.submit": "Tuma Maombi",
    "apply.success":
      "Maombi yametumwa! Timu yetu itakagua stakabadhi zako na kukuwasiliana ndani ya siku 3-5 za kazi.",
    "apply.specialties.general": "Daktari Mkuu",
    "apply.specialties.pediatrics": "Watoto",
    "apply.specialties.obstetrics": "Uzazi na Wanawake",
    "apply.specialties.internal": "Dawa ya Ndani",
    "apply.specialties.dermatology": "Ngozi",
    "apply.specialties.psychiatry": "Akili",
    "apply.specialties.cardiology": "Moyo",
    "apply.specialties.other": "Nyingine",
  },
} as const;

type TranslationKey = keyof (typeof translations)["en"];

export function t(key: TranslationKey, locale: Locale = "en"): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function getTranslations(locale: Locale) {
  return (key: TranslationKey) => t(key, locale);
}
