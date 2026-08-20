import type { Duty, L, Principle, QuizQuestion } from '../types';

/** Article 51A — added by the 42nd Amendment (1976); the 11th by the 86th (2002). */
export const DUTIES: Duty[] = [
  {
    n: 1,
    text: {
      en: 'Abide by the Constitution and respect its ideals and institutions, the National Flag and the National Anthem.',
      hi: 'संविधान का पालन करे और उसके आदर्शों, संस्थाओं, राष्ट्र ध्वज और राष्ट्रगान का आदर करे।',
    },
    everyday: {
      en: 'Stand for the anthem, do not deface the flag, and follow lawful orders of courts and authorities.',
      hi: 'राष्ट्रगान के समय खड़े हों, ध्वज का अपमान न करें, और अदालतों तथा अधिकारियों के वैध आदेश मानें।',
    },
  },
  {
    n: 2,
    text: {
      en: 'Cherish and follow the noble ideals that inspired the national struggle for freedom.',
      hi: 'स्वतंत्रता के राष्ट्रीय आंदोलन को प्रेरित करने वाले उच्च आदर्शों को हृदय में संजोए रखे और उनका पालन करे।',
    },
    everyday: {
      en: 'Non-violence, truthfulness and service — the values the freedom movement was built on.',
      hi: 'अहिंसा, सत्य और सेवा — वही मूल्य जिन पर स्वतंत्रता संग्राम खड़ा था।',
    },
  },
  {
    n: 3,
    text: {
      en: 'Uphold and protect the sovereignty, unity and integrity of India.',
      hi: 'भारत की संप्रभुता, एकता और अखंडता की रक्षा करे और उसे अक्षुण्ण रखे।',
    },
    everyday: {
      en: 'Do not spread rumours or content that sets one region or community against another.',
      hi: 'ऐसी अफ़वाह या सामग्री न फैलाएँ जो एक क्षेत्र या समुदाय को दूसरे के विरुद्ध खड़ा करे।',
    },
  },
  {
    n: 4,
    text: {
      en: 'Defend the country and render national service when called upon to do so.',
      hi: 'देश की रक्षा करे और आह्वान किए जाने पर राष्ट्र की सेवा करे।',
    },
    everyday: {
      en: 'Help in disasters, cooperate with civil defence and relief work in your area.',
      hi: 'आपदा में मदद करें, अपने इलाके में नागरिक सुरक्षा और राहत कार्य में सहयोग दें।',
    },
  },
  {
    n: 5,
    text: {
      en: 'Promote harmony and the spirit of common brotherhood among all people, transcending religious, linguistic, regional or sectional diversities; and renounce practices derogatory to the dignity of women.',
      hi: 'धर्म, भाषा, प्रदेश या वर्ग के भेदों से ऊपर उठकर सभी लोगों में समरसता और भाईचारे की भावना बढ़ाए; और स्त्रियों के सम्मान के विरुद्ध प्रथाओं का त्याग करे।',
    },
    everyday: {
      en: 'Refuse dowry, stop casteist or sexist jokes, and do not forward hate messages.',
      hi: 'दहेज से इनकार करें, जातिवादी या स्त्री-विरोधी मज़ाक रोकें, और नफ़रत भरे संदेश आगे न भेजें।',
    },
  },
  {
    n: 6,
    text: {
      en: 'Value and preserve the rich heritage of our composite culture.',
      hi: 'हमारी सामासिक संस्कृति की गौरवशाली परंपरा का महत्व समझे और उसका परिरक्षण करे।',
    },
    everyday: {
      en: 'Do not damage monuments, and keep local languages, crafts and festivals alive.',
      hi: 'स्मारकों को नुकसान न पहुँचाएँ, और स्थानीय भाषाओं, शिल्प तथा त्योहारों को जीवित रखें।',
    },
  },
  {
    n: 7,
    text: {
      en: 'Protect and improve the natural environment including forests, lakes, rivers and wildlife, and have compassion for living creatures.',
      hi: 'वनों, झीलों, नदियों और वन्य जीवों सहित प्राकृतिक पर्यावरण की रक्षा करे और उसका संवर्धन करे तथा प्राणिमात्र के प्रति दयाभाव रखे।',
    },
    everyday: {
      en: 'Do not burn waste or dump it in water bodies; plant trees; do not harm stray or wild animals.',
      hi: 'कचरा न जलाएँ, न जलस्रोतों में डालें; पेड़ लगाएँ; आवारा या वन्य पशुओं को नुकसान न पहुँचाएँ।',
    },
  },
  {
    n: 8,
    text: {
      en: 'Develop the scientific temper, humanism and the spirit of inquiry and reform.',
      hi: 'वैज्ञानिक दृष्टिकोण, मानववाद और ज्ञानार्जन तथा सुधार की भावना का विकास करे।',
    },
    everyday: {
      en: 'Check facts before believing or forwarding them; do not encourage superstition or quack cures.',
      hi: 'मानने या आगे भेजने से पहले तथ्य जाँचें; अंधविश्वास और झोलाछाप इलाज को बढ़ावा न दें।',
    },
  },
  {
    n: 9,
    text: {
      en: 'Safeguard public property and abjure violence.',
      hi: 'सार्वजनिक संपत्ति को सुरक्षित रखे और हिंसा से दूर रहे।',
    },
    everyday: {
      en: 'Buses, trains and government buildings are paid for with your own tax money.',
      hi: 'बसें, रेलगाड़ियाँ और सरकारी इमारतें आपके ही कर के पैसे से बनी हैं।',
    },
  },
  {
    n: 10,
    text: {
      en: 'Strive towards excellence in all spheres of individual and collective activity.',
      hi: 'व्यक्तिगत और सामूहिक गतिविधि के सभी क्षेत्रों में उत्कृष्टता की ओर बढ़ने का सतत प्रयास करे।',
    },
    everyday: {
      en: 'Do your own work honestly and well — that too is a constitutional duty.',
      hi: 'अपना काम ईमानदारी और मन से करें — यह भी एक संवैधानिक कर्तव्य है।',
    },
  },
  {
    n: 11,
    text: {
      en: 'Provide opportunities for education to your child or ward between the ages of six and fourteen years.',
      hi: 'छह से चौदह वर्ष तक की आयु वाले अपने बालक या प्रतिपाल्य को शिक्षा के अवसर उपलब्ध कराए।',
    },
    everyday: {
      en: 'Keeping a child out of school to work is both a duty broken and, often, an offence.',
      hi: 'बच्चे को काम के लिए स्कूल से दूर रखना कर्तव्य का उल्लंघन है और अक्सर अपराध भी।',
    },
  },
];

/** Part IV, Articles 36-51. Not enforceable in court, but the State is bound to follow them. */
export const PRINCIPLES: Principle[] = [
  {
    article: { en: 'Article 38', hi: 'अनुच्छेद 38' },
    title: { en: 'A just social order', hi: 'न्यायपूर्ण समाज व्यवस्था' },
    plain: {
      en: 'The State must work to reduce inequalities in income, status, facilities and opportunity.',
      hi: 'राज्य आय, हैसियत, सुविधाओं और अवसरों की असमानता घटाने का प्रयास करेगा।',
    },
  },
  {
    article: { en: 'Article 39', hi: 'अनुच्छेद 39' },
    title: { en: 'Livelihood and equal pay', hi: 'आजीविका और समान वेतन' },
    plain: {
      en: 'Adequate means of livelihood for all, equal pay for equal work for men and women, and no abuse of workers or children.',
      hi: 'सबके लिए पर्याप्त आजीविका, स्त्री-पुरुष को समान काम का समान वेतन, और श्रमिकों तथा बच्चों का शोषण न हो।',
    },
  },
  {
    article: { en: 'Article 39A', hi: 'अनुच्छेद 39A' },
    title: { en: 'Free legal aid', hi: 'नि:शुल्क विधिक सहायता' },
    plain: {
      en: 'Justice must not be denied to anyone because of poverty. This is the basis of free legal aid under the Legal Services Authorities Act, 1987.',
      hi: 'गरीबी के कारण किसी को न्याय से वंचित नहीं किया जाएगा। विधिक सेवा प्राधिकरण अधिनियम, 1987 के तहत मुफ़्त कानूनी सहायता का आधार यही है।',
    },
  },
  {
    article: { en: 'Article 40', hi: 'अनुच्छेद 40' },
    title: { en: 'Village panchayats', hi: 'ग्राम पंचायतें' },
    plain: {
      en: 'Organise village panchayats as units of self-government — later given shape by the 73rd Amendment.',
      hi: 'ग्राम पंचायतों को स्वशासन की इकाई के रूप में गठित करना — बाद में 73वें संशोधन ने इसे रूप दिया।',
    },
  },
  {
    article: { en: 'Article 41', hi: 'अनुच्छेद 41' },
    title: { en: 'Work, education and public assistance', hi: 'काम, शिक्षा और लोक सहायता' },
    plain: {
      en: 'Help with work, education and public assistance in old age, sickness, disability and unemployment.',
      hi: 'बुढ़ापे, बीमारी, दिव्यांगता और बेरोज़गारी में काम, शिक्षा और लोक सहायता का प्रबंध।',
    },
  },
  {
    article: { en: 'Article 42', hi: 'अनुच्छेद 42' },
    title: { en: 'Humane work and maternity relief', hi: 'मानवोचित काम और प्रसूति सहायता' },
    plain: {
      en: 'Just and humane conditions of work and maternity relief — the root of the Maternity Benefit Act.',
      hi: 'काम की न्यायसंगत और मानवोचित दशाएँ तथा प्रसूति सहायता — मातृत्व लाभ अधिनियम की जड़ यही है।',
    },
  },
  {
    article: { en: 'Article 43', hi: 'अनुच्छेद 43' },
    title: { en: 'Living wage', hi: 'निर्वाह मज़दूरी' },
    plain: {
      en: 'A living wage and decent conditions of life for all workers, in industry and agriculture alike.',
      hi: 'उद्योग हो या खेती, सभी श्रमिकों के लिए निर्वाह मज़दूरी और सम्मानजनक जीवन दशाएँ।',
    },
  },
  {
    article: { en: 'Article 44', hi: 'अनुच्छेद 44' },
    title: { en: 'Uniform civil code', hi: 'समान नागरिक संहिता' },
    plain: {
      en: 'The State shall endeavour to secure a uniform civil code throughout India.',
      hi: 'राज्य पूरे भारत में समान नागरिक संहिता लाने का प्रयास करेगा।',
    },
  },
  {
    article: { en: 'Article 45', hi: 'अनुच्छेद 45' },
    title: { en: 'Care for children under six', hi: 'छह वर्ष से कम आयु के बच्चों की देखभाल' },
    plain: {
      en: 'Early childhood care and education for all children until they complete six years.',
      hi: 'छह वर्ष की आयु पूरी करने तक सभी बच्चों के लिए प्रारंभिक बाल देखभाल और शिक्षा।',
    },
  },
  {
    article: { en: 'Article 46', hi: 'अनुच्छेद 46' },
    title: { en: 'Weaker sections', hi: 'दुर्बल वर्ग' },
    plain: {
      en: 'Promote the educational and economic interests of SCs, STs and other weaker sections and protect them from injustice.',
      hi: 'अनुसूचित जातियों, जनजातियों और अन्य दुर्बल वर्गों के शिक्षा तथा अर्थ संबंधी हितों की उन्नति और अन्याय से रक्षा।',
    },
  },
  {
    article: { en: 'Article 47', hi: 'अनुच्छेद 47' },
    title: { en: 'Nutrition and public health', hi: 'पोषण और लोक स्वास्थ्य' },
    plain: {
      en: 'Raise nutrition and the standard of living, improve public health, and ban intoxicating drinks and drugs that harm health.',
      hi: 'पोषण और जीवन स्तर ऊँचा उठाना, लोक स्वास्थ्य सुधारना, और स्वास्थ्य के लिए हानिकारक मादक पेय तथा नशीले पदार्थों पर रोक।',
    },
  },
  {
    article: { en: 'Article 48A', hi: 'अनुच्छेद 48A' },
    title: { en: 'Environment and wildlife', hi: 'पर्यावरण और वन्य जीव' },
    plain: {
      en: 'Protect and improve the environment and safeguard forests and wildlife.',
      hi: 'पर्यावरण का संरक्षण तथा संवर्धन और वन एवं वन्य जीवों की रक्षा।',
    },
  },
  {
    article: { en: 'Article 50', hi: 'अनुच्छेद 50' },
    title: { en: 'Judiciary apart from the executive', hi: 'कार्यपालिका से न्यायपालिका का पृथक्करण' },
    plain: {
      en: 'Separate the judiciary from the executive in the public services of the State.',
      hi: 'राज्य की लोक सेवाओं में न्यायपालिका को कार्यपालिका से पृथक करना।',
    },
  },
  {
    article: { en: 'Article 51', hi: 'अनुच्छेद 51' },
    title: { en: 'International peace', hi: 'अंतरराष्ट्रीय शांति' },
    plain: {
      en: 'Promote international peace and security and respect for international law and treaty obligations.',
      hi: 'अंतरराष्ट्रीय शांति और सुरक्षा तथा अंतरराष्ट्रीय विधि और संधि दायित्वों के प्रति आदर बढ़ाना।',
    },
  },
];

export const PREAMBLE: { en: string; hi: string } = {
  en: `WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC and to secure to all its citizens:

JUSTICE, social, economic and political;
LIBERTY of thought, expression, belief, faith and worship;
EQUALITY of status and of opportunity;
and to promote among them all
FRATERNITY assuring the dignity of the individual and the unity and integrity of the Nation;

IN OUR CONSTITUENT ASSEMBLY this twenty-sixth day of November, 1949, do HEREBY ADOPT, ENACT AND GIVE TO OURSELVES THIS CONSTITUTION.`,
  hi: `हम, भारत के लोग, भारत को एक संपूर्ण प्रभुत्व-संपन्न समाजवादी पंथनिरपेक्ष लोकतंत्रात्मक गणराज्य बनाने के लिए, तथा उसके समस्त नागरिकों को:

सामाजिक, आर्थिक और राजनैतिक न्याय,
विचार, अभिव्यक्ति, विश्वास, धर्म और उपासना की स्वतंत्रता,
प्रतिष्ठा और अवसर की समता
प्राप्त कराने के लिए, तथा उन सब में
व्यक्ति की गरिमा और राष्ट्र की एकता और अखंडता सुनिश्चित करने वाली बंधुता बढ़ाने के लिए

दृढ़संकल्प होकर अपनी इस संविधान सभा में आज तारीख 26 नवंबर, 1949 ई. को एतद्द्वारा इस संविधान को अंगीकृत, अधिनियमित और आत्मार्पित करते हैं।`,
};

export const FACTS: { label: L; value: L }[] = [
  {
    label: { en: 'Adopted', hi: 'अंगीकृत' },
    value: { en: '26 November 1949 — celebrated as Constitution Day', hi: '26 नवंबर 1949 — संविधान दिवस के रूप में मनाया जाता है' },
  },
  {
    label: { en: 'Came into force', hi: 'लागू हुआ' },
    value: { en: '26 January 1950 — Republic Day', hi: '26 जनवरी 1950 — गणतंत्र दिवस' },
  },
  {
    label: { en: 'Time taken to write', hi: 'लिखने में लगा समय' },
    value: { en: '2 years, 11 months and 18 days', hi: '2 वर्ष, 11 महीने और 18 दिन' },
  },
  {
    label: { en: 'Chairman of the Drafting Committee', hi: 'प्रारूप समिति के अध्यक्ष' },
    value: { en: 'Dr. B.R. Ambedkar', hi: 'डॉ. भीमराव आंबेडकर' },
  },
  {
    label: { en: 'President of the Constituent Assembly', hi: 'संविधान सभा के अध्यक्ष' },
    value: { en: 'Dr. Rajendra Prasad', hi: 'डॉ. राजेंद्र प्रसाद' },
  },
  {
    label: { en: 'Size at the start', hi: 'आरंभ में आकार' },
    value: { en: '395 articles, 22 parts, 8 schedules', hi: '395 अनुच्छेद, 22 भाग, 8 अनुसूचियाँ' },
  },
  {
    label: { en: 'Size today', hi: 'आज का आकार' },
    value: {
      en: 'Around 470 articles, 25 parts and 12 schedules after more than 100 amendments',
      hi: '100 से अधिक संशोधनों के बाद लगभग 470 अनुच्छेद, 25 भाग और 12 अनुसूचियाँ',
    },
  },
  {
    label: { en: 'Longest written constitution', hi: 'सबसे लंबा लिखित संविधान' },
    value: { en: 'Of any sovereign country in the world', hi: 'दुनिया के किसी भी संप्रभु देश का' },
  },
  {
    label: { en: 'Basic structure', hi: 'मूल ढाँचा' },
    value: {
      en: 'Since Kesavananda Bharati (1973), Parliament may amend the Constitution but not destroy its basic structure',
      hi: 'केशवानंद भारती (1973) के बाद संसद संविधान में संशोधन कर सकती है, पर उसका मूल ढाँचा नष्ट नहीं कर सकती',
    },
  },
];

export const QUIZ: QuizQuestion[] = [
  {
    q: {
      en: 'Within how many hours must an arrested person be produced before a magistrate?',
      hi: 'गिरफ़्तार व्यक्ति को कितने घंटे के भीतर मजिस्ट्रेट के सामने पेश करना होता है?',
    },
    options: [
      { en: '12 hours', hi: '12 घंटे' },
      { en: '24 hours', hi: '24 घंटे' },
      { en: '48 hours', hi: '48 घंटे' },
      { en: '72 hours', hi: '72 घंटे' },
    ],
    answer: 1,
    why: {
      en: 'Article 22(2) — within 24 hours, excluding the time needed for the journey to the court.',
      hi: 'अनुच्छेद 22(2) — 24 घंटे के भीतर, अदालत तक की यात्रा का समय छोड़कर।',
    },
  },
  {
    q: {
      en: 'Which article did Dr. Ambedkar call the “heart and soul” of the Constitution?',
      hi: 'डॉ. आंबेडकर ने किस अनुच्छेद को संविधान की “आत्मा” कहा था?',
    },
    options: [
      { en: 'Article 14', hi: 'अनुच्छेद 14' },
      { en: 'Article 19', hi: 'अनुच्छेद 19' },
      { en: 'Article 32', hi: 'अनुच्छेद 32' },
      { en: 'Article 51A', hi: 'अनुच्छेद 51A' },
    ],
    answer: 2,
    why: {
      en: 'Article 32 — the right to move the Supreme Court directly to enforce fundamental rights.',
      hi: 'अनुच्छेद 32 — मौलिक अधिकार लागू कराने के लिए सीधे सुप्रीम कोर्ट जाने का अधिकार।',
    },
  },
  {
    q: {
      en: 'A police officer refuses to register your FIR for a cognizable offence. What is the next step?',
      hi: 'पुलिस अधिकारी किसी संज्ञेय अपराध की आपकी FIR दर्ज करने से मना कर देता है। अगला कदम क्या है?',
    },
    options: [
      { en: 'Give up and go home', hi: 'हार मानकर घर लौट जाएँ' },
      { en: 'Send the complaint in writing to the Superintendent of Police', hi: 'शिकायत लिखित में पुलिस अधीक्षक को भेजें' },
      { en: 'Pay a fee at the station', hi: 'थाने में शुल्क जमा करें' },
      { en: 'Wait for 30 days', hi: '30 दिन प्रतीक्षा करें' },
    ],
    answer: 1,
    why: {
      en: 'Send it in writing by registered post to the SP. If that also fails, apply to the Magistrate, who can order an investigation.',
      hi: 'रजिस्टर्ड डाक से लिखित शिकायत SP को भेजें। वहाँ भी न हो तो मजिस्ट्रेट के पास आवेदन करें, जो जाँच का आदेश दे सकते हैं।',
    },
  },
  {
    q: {
      en: 'How much does it cost a person below the poverty line to file an RTI application?',
      hi: 'गरीबी रेखा से नीचे के व्यक्ति को RTI आवेदन दाखिल करने में कितना खर्च आता है?',
    },
    options: [
      { en: 'Nothing', hi: 'कुछ नहीं' },
      { en: '₹10', hi: '₹10' },
      { en: '₹50', hi: '₹50' },
      { en: '₹100', hi: '₹100' },
    ],
    answer: 0,
    why: {
      en: 'BPL applicants pay no fee. For everyone else the application fee is ₹10.',
      hi: 'BPL आवेदकों से कोई शुल्क नहीं लिया जाता। बाकी सबके लिए आवेदन शुल्क ₹10 है।',
    },
  },
  {
    q: {
      en: 'Free and compulsory education under Article 21A covers children of which ages?',
      hi: 'अनुच्छेद 21A के तहत नि:शुल्क और अनिवार्य शिक्षा किस आयु के बच्चों के लिए है?',
    },
    options: [
      { en: '3 to 10 years', hi: '3 से 10 वर्ष' },
      { en: '5 to 12 years', hi: '5 से 12 वर्ष' },
      { en: '6 to 14 years', hi: '6 से 14 वर्ष' },
      { en: '6 to 18 years', hi: '6 से 18 वर्ष' },
    ],
    answer: 2,
    why: {
      en: 'Article 21A, added by the 86th Amendment in 2002, covers children from 6 to 14 years.',
      hi: '2002 में 86वें संशोधन से जोड़ा गया अनुच्छेद 21A, 6 से 14 वर्ष के बच्चों को शामिल करता है।',
    },
  },
  {
    q: {
      en: 'Which of these is NOT a fundamental right today?',
      hi: 'इनमें से कौन आज मौलिक अधिकार नहीं है?',
    },
    options: [
      { en: 'Right to equality', hi: 'समानता का अधिकार' },
      { en: 'Right to property', hi: 'संपत्ति का अधिकार' },
      { en: 'Right against exploitation', hi: 'शोषण के विरुद्ध अधिकार' },
      { en: 'Right to constitutional remedies', hi: 'संवैधानिक उपचारों का अधिकार' },
    ],
    answer: 1,
    why: {
      en: 'The 44th Amendment (1978) removed the right to property from Part III. It remains a legal right under Article 300A.',
      hi: '44वें संशोधन (1978) ने संपत्ति के अधिकार को भाग III से हटा दिया। यह अनुच्छेद 300A के तहत विधिक अधिकार बना हुआ है।',
    },
  },
  {
    q: {
      en: 'Which writ is used to free a person held in illegal custody?',
      hi: 'अवैध हिरासत में बंद व्यक्ति को मुक्त कराने के लिए कौन सी रिट प्रयोग होती है?',
    },
    options: [
      { en: 'Mandamus', hi: 'परमादेश' },
      { en: 'Certiorari', hi: 'उत्प्रेषण' },
      { en: 'Habeas Corpus', hi: 'बंदी प्रत्यक्षीकरण' },
      { en: 'Quo Warranto', hi: 'अधिकार पृच्छा' },
    ],
    answer: 2,
    why: {
      en: 'Habeas corpus literally means “produce the body”. The court asks the detainer to justify the detention.',
      hi: 'बंदी प्रत्यक्षीकरण का शाब्दिक अर्थ है “शरीर को प्रस्तुत करो”। अदालत हिरासत में रखने वाले से कारण पूछती है।',
    },
  },
  {
    q: {
      en: 'A woman can normally be arrested at what time of day?',
      hi: 'किसी महिला को सामान्यतः दिन के किस समय गिरफ़्तार किया जा सकता है?',
    },
    options: [
      { en: 'Any time, no restriction', hi: 'किसी भी समय, कोई रोक नहीं' },
      { en: 'Only between sunrise and sunset', hi: 'केवल सूर्योदय से सूर्यास्त के बीच' },
      { en: 'Only at night', hi: 'केवल रात में' },
      { en: 'Only on working days', hi: 'केवल कार्य दिवसों में' },
    ],
    answer: 1,
    why: {
      en: 'As a rule, a woman is arrested only between sunrise and sunset, by a woman officer. A night arrest needs a written reason and a magistrate’s prior permission.',
      hi: 'नियम यह है कि महिला की गिरफ़्तारी केवल सूर्योदय से सूर्यास्त के बीच, महिला अधिकारी द्वारा हो। रात में गिरफ़्तारी के लिए लिखित कारण और मजिस्ट्रेट की पूर्व अनुमति चाहिए।',
    },
  },
  {
    q: {
      en: 'A public information officer must normally reply to an RTI application within:',
      hi: 'लोक सूचना अधिकारी को सामान्यतः RTI आवेदन का उत्तर कितने दिनों में देना होता है?',
    },
    options: [
      { en: '7 days', hi: '7 दिन' },
      { en: '15 days', hi: '15 दिन' },
      { en: '30 days', hi: '30 दिन' },
      { en: '90 days', hi: '90 दिन' },
    ],
    answer: 2,
    why: {
      en: '30 days as a rule — but only 48 hours where the life or liberty of a person is involved.',
      hi: 'सामान्यतः 30 दिन — पर जहाँ किसी के जीवन या स्वतंत्रता का प्रश्न हो, वहाँ केवल 48 घंटे।',
    },
  },
  {
    q: {
      en: 'How many fundamental duties does Article 51A list today?',
      hi: 'अनुच्छेद 51A में आज कितने मौलिक कर्तव्य गिनाए गए हैं?',
    },
    options: [
      { en: '7', hi: '7' },
      { en: '10', hi: '10' },
      { en: '11', hi: '11' },
      { en: '15', hi: '15' },
    ],
    answer: 2,
    why: {
      en: 'Ten were added by the 42nd Amendment in 1976 and an eleventh by the 86th Amendment in 2002.',
      hi: '1976 में 42वें संशोधन से दस जोड़े गए और 2002 में 86वें संशोधन से ग्यारहवाँ।',
    },
  },
];
