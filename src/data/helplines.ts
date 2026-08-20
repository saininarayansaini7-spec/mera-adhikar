import type { Helpline, L, Portal } from '../types';

const ALWAYS: L = { en: '24 hours, all days', hi: '24 घंटे, सभी दिन' };
const FREE: L = { en: 'Toll free', hi: 'नि:शुल्क' };

export const HELPLINES: Helpline[] = [
  {
    id: '112',
    number: '112',
    name: { en: 'Emergency Response — police, fire, ambulance', hi: 'आपातकालीन सहायता — पुलिस, दमकल, एम्बुलेंस' },
    who: {
      en: 'One number for any emergency anywhere in India. Works even from a locked phone and from a phone with no balance.',
      hi: 'भारत में कहीं भी किसी भी आपात स्थिति के लिए एक ही नंबर। लॉक फ़ोन और बिना बैलेंस वाले फ़ोन से भी लगता है।',
    },
    hours: ALWAYS,
    category: 'emergency',
  },
  {
    id: '100',
    number: '100',
    name: { en: 'Police', hi: 'पुलिस' },
    who: { en: 'The older police number, still working in most States.', hi: 'पुलिस का पुराना नंबर, अधिकांश राज्यों में अब भी चालू।' },
    hours: ALWAYS,
    category: 'emergency',
  },
  {
    id: '101',
    number: '101',
    name: { en: 'Fire brigade', hi: 'दमकल' },
    who: { en: 'Fire, gas leak, building collapse and rescue.', hi: 'आग, गैस रिसाव, इमारत गिरना और बचाव कार्य।' },
    hours: ALWAYS,
    category: 'emergency',
  },
  {
    id: '108',
    number: '108',
    name: { en: 'Ambulance', hi: 'एम्बुलेंस' },
    who: { en: 'Free emergency ambulance in most States. 102 is used for pregnant women and infants.', hi: 'अधिकांश राज्यों में मुफ़्त आपातकालीन एम्बुलेंस। 102 गर्भवती महिलाओं और शिशुओं के लिए है।' },
    hours: ALWAYS,
    category: 'health',
  },
  {
    id: '1091',
    number: '1091',
    name: { en: 'Women in distress', hi: 'संकट में महिला' },
    who: { en: 'Immediate police help for a woman facing violence, stalking or harassment.', hi: 'हिंसा, पीछा किए जाने या उत्पीड़न का सामना कर रही महिला के लिए तुरंत पुलिस सहायता।' },
    hours: ALWAYS,
    category: 'women',
  },
  {
    id: '181',
    number: '181',
    name: { en: 'Women Helpline (One Stop Centre)', hi: 'महिला हेल्पलाइन (वन स्टॉप सेंटर)' },
    who: {
      en: 'Counselling, shelter, medical aid, police and legal help for women facing violence — all in one place.',
      hi: 'हिंसा झेल रही महिलाओं के लिए परामर्श, आश्रय, चिकित्सा, पुलिस और कानूनी मदद — सब एक ही जगह।',
    },
    hours: ALWAYS,
    category: 'women',
  },
  {
    id: '1098',
    number: '1098',
    name: { en: 'Childline — child in need', hi: 'चाइल्डलाइन — ज़रूरतमंद बच्चा' },
    who: {
      en: 'For any child in danger: child labour, child marriage, abuse, a runaway or an abandoned child.',
      hi: 'खतरे में किसी भी बच्चे के लिए: बाल श्रम, बाल विवाह, दुर्व्यवहार, घर से भागा या छोड़ा गया बच्चा।',
    },
    hours: ALWAYS,
    category: 'child',
  },
  {
    id: '15100',
    number: '15100',
    name: { en: 'NALSA — free legal aid', hi: 'नालसा — नि:शुल्क विधिक सहायता' },
    who: {
      en: 'A free lawyer and legal advice from the Legal Services Authority. Free for women, children, SC/ST, disabled persons, industrial workmen, disaster victims, persons in custody and anyone with a low income.',
      hi: 'विधिक सेवा प्राधिकरण से मुफ़्त वकील और कानूनी सलाह। महिलाओं, बच्चों, SC/ST, दिव्यांगजन, औद्योगिक कामगारों, आपदा पीड़ितों, हिरासत में बंद व्यक्तियों और कम आय वालों के लिए नि:शुल्क।',
    },
    hours: { en: 'Office hours, all working days', hi: 'कार्यालय समय, सभी कार्य दिवस' },
    category: 'legal',
  },
  {
    id: '1930',
    number: '1930',
    name: { en: 'Cyber fraud — money lost online', hi: 'साइबर धोखाधड़ी — ऑनलाइन पैसा गया' },
    who: {
      en: 'Call within the first few hours of losing money online. Quick reporting can freeze the fraudster’s account before the money moves on.',
      hi: 'ऑनलाइन पैसा जाने के कुछ ही घंटों में कॉल करें। जल्दी शिकायत से पैसा आगे जाने से पहले ठग का खाता रोका जा सकता है।',
    },
    hours: ALWAYS,
    category: 'cyber',
  },
  {
    id: '14567',
    number: '14567',
    name: { en: 'Elderline — senior citizens', hi: 'एल्डरलाइन — वरिष्ठ नागरिक' },
    who: {
      en: 'For older people facing neglect, abuse, or trouble getting a pension or maintenance from their children.',
      hi: 'उपेक्षा, दुर्व्यवहार, या बच्चों से पेंशन/भरण-पोषण न मिलने की स्थिति में बुज़ुर्गों के लिए।',
    },
    hours: { en: 'Morning to evening, all days', hi: 'सुबह से शाम, सभी दिन' },
    category: 'other',
  },
  {
    id: '14416',
    number: '14416',
    name: { en: 'Tele-MANAS — mental health', hi: 'टेली-मानस — मानसिक स्वास्थ्य' },
    who: {
      en: 'Free, confidential counselling in many Indian languages, including for suicidal thoughts.',
      hi: 'कई भारतीय भाषाओं में मुफ़्त, गोपनीय परामर्श — आत्महत्या के विचारों सहित।',
    },
    hours: ALWAYS,
    category: 'health',
  },
  {
    id: 'ragging',
    number: '1800-180-5522',
    name: { en: 'National Anti-Ragging Helpline', hi: 'राष्ट्रीय एंटी-रैगिंग हेल्पलाइन' },
    who: { en: 'For students facing ragging in any college or hostel.', hi: 'किसी भी कॉलेज या हॉस्टल में रैगिंग झेल रहे छात्रों के लिए।' },
    hours: ALWAYS,
    category: 'other',
  },
  {
    id: '1064',
    number: '1064',
    name: { en: 'Anti-corruption', hi: 'भ्रष्टाचार निरोधक' },
    who: {
      en: 'To report a demand for a bribe by a government official. Run by the Anti-Corruption Bureau; the number varies in some States.',
      hi: 'किसी सरकारी अधिकारी द्वारा रिश्वत माँगे जाने की शिकायत के लिए। भ्रष्टाचार निरोधक ब्यूरो द्वारा संचालित; कुछ राज्यों में नंबर अलग है।',
    },
    hours: { en: 'Office hours, varies by State', hi: 'कार्यालय समय, राज्य के अनुसार भिन्न' },
    category: 'other',
  },
  {
    id: '1800111565',
    number: '1800-11-1565',
    name: { en: 'Labour helpline (Shram Suvidha / PGRS)', hi: 'श्रम हेल्पलाइन (श्रम सुविधा / PGRS)' },
    who: {
      en: 'For unpaid wages, unsafe work and other labour complaints. Your District Labour Commissioner’s office is the local authority.',
      hi: 'बकाया मज़दूरी, असुरक्षित काम और अन्य श्रम शिकायतों के लिए। स्थानीय प्राधिकरण आपके ज़िला श्रम आयुक्त का कार्यालय है।',
    },
    hours: { en: 'Office hours', hi: 'कार्यालय समय' },
    category: 'other',
  },
];

export const FREE_NOTE = FREE;

export const PORTALS: Portal[] = [
  {
    name: { en: 'National Cyber Crime Reporting Portal', hi: 'राष्ट्रीय साइबर अपराध रिपोर्टिंग पोर्टल' },
    url: 'https://cybercrime.gov.in',
    what: {
      en: 'Online fraud, hacking, obscene content, and crimes against women and children online.',
      hi: 'ऑनलाइन धोखाधड़ी, हैकिंग, अश्लील सामग्री, और महिलाओं व बच्चों के विरुद्ध ऑनलाइन अपराध।',
    },
  },
  {
    name: { en: 'CPGRAMS — public grievances', hi: 'CPGRAMS — लोक शिकायत' },
    url: 'https://pgportal.gov.in',
    what: {
      en: 'Complain about any central or State government department that is not doing its job.',
      hi: 'किसी भी केंद्रीय या राज्य सरकारी विभाग की लापरवाही की शिकायत करें।',
    },
  },
  {
    name: { en: 'e-Daakhil — consumer cases', hi: 'ई-दाखिल — उपभोक्ता मामले' },
    url: 'https://edaakhil.nic.in',
    what: { en: 'File a consumer complaint online, without going to the court building.', hi: 'अदालत गए बिना ऑनलाइन उपभोक्ता शिकायत दर्ज करें।' },
  },
  {
    name: { en: 'National Consumer Helpline', hi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन' },
    url: 'https://consumerhelpline.gov.in',
    what: { en: 'Free help before you go to court — call 1915 or complain online.', hi: 'अदालत जाने से पहले मुफ़्त मदद — 1915 पर कॉल करें या ऑनलाइन शिकायत करें।' },
  },
  {
    name: { en: 'RTI Online', hi: 'आरटीआई ऑनलाइन' },
    url: 'https://rtionline.gov.in',
    what: { en: 'File an RTI application to any central government body and pay the ₹10 fee online.', hi: 'किसी भी केंद्रीय सरकारी निकाय को RTI आवेदन दें और ₹10 शुल्क ऑनलाइन भरें।' },
  },
  {
    name: { en: 'NHRC — human rights complaints', hi: 'NHRC — मानवाधिकार शिकायत' },
    url: 'https://hrcnet.nhrc.gov.in',
    what: { en: 'Custodial violence, illegal detention, and failure of the police or public servants.', hi: 'हिरासत में हिंसा, अवैध निरोध, और पुलिस या लोक सेवकों की चूक।' },
  },
  {
    name: { en: 'SHe-Box — workplace sexual harassment', hi: 'शी-बॉक्स — कार्यस्थल पर यौन उत्पीड़न' },
    url: 'https://shebox.wcd.gov.in',
    what: { en: 'A single window to complain of sexual harassment at any workplace, government or private.', hi: 'किसी भी कार्यस्थल — सरकारी या निजी — पर यौन उत्पीड़न की शिकायत के लिए एक ही खिड़की।' },
  },
  {
    name: { en: 'NALSA — free legal services', hi: 'नालसा — नि:शुल्क विधिक सेवाएँ' },
    url: 'https://nalsa.gov.in',
    what: { en: 'Apply online for a free lawyer, or find your District Legal Services Authority.', hi: 'मुफ़्त वकील के लिए ऑनलाइन आवेदन करें, या अपना ज़िला विधिक सेवा प्राधिकरण खोजें।' },
  },
  {
    name: { en: 'National Commission for Women', hi: 'राष्ट्रीय महिला आयोग' },
    url: 'https://ncwapps.nic.in',
    what: { en: 'Complaints of crimes and discrimination against women, from anywhere in India.', hi: 'भारत में कहीं से भी महिलाओं के विरुद्ध अपराध और भेदभाव की शिकायत।' },
  },
  {
    name: { en: 'PENCIL — child labour', hi: 'पेंसिल — बाल श्रम' },
    url: 'https://pencil.gov.in',
    what: { en: 'Report a child found working, and track what action was taken.', hi: 'काम करते मिले बच्चे की सूचना दें, और की गई कार्रवाई देखें।' },
  },
];
