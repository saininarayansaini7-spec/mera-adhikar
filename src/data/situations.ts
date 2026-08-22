import type { Situation } from '../types';

/**
 * Everyday trouble, answered in the order a worried person actually needs it:
 * what you can insist on, what they are not allowed to do, and then the steps.
 *
 * Section numbers are given under the laws that replaced the old codes on
 * 1 July 2024 — BNS for IPC, BNSS for CrPC — with the familiar older number
 * in brackets, because that is what most people (and many notices) still use.
 */
export const SITUATIONS: Situation[] = [
  {
    id: 'arrest',
    icon: '🚔',
    title: { en: 'If the police stop, detain or arrest you', hi: 'पुलिस रोके, हिरासत में ले या गिरफ़्तार करे' },
    summary: {
      en: 'The most important thirty minutes of any criminal case. These rights apply from the moment a hand is on your arm.',
      hi: 'किसी भी आपराधिक मामले के सबसे अहम तीस मिनट। ये अधिकार उसी क्षण से लागू होते हैं जब कोई हाथ आपकी बाँह पर आता है।',
    },
    tags: [
      { en: 'Police', hi: 'पुलिस' },
      { en: 'Arrest', hi: 'गिरफ़्तारी' },
      { en: 'Article 22', hi: 'अनुच्छेद 22' },
    ],
    youCan: [
      {
        en: 'Be told why you are being arrested, and to have the grounds of arrest given to you in writing.',
        hi: 'यह जानने का अधिकार कि आपको क्यों गिरफ़्तार किया जा रहा है, और गिरफ़्तारी का आधार लिखित में पाने का।',
      },
      {
        en: 'Ask to see the officer’s identity card and note their name and number — every officer making an arrest must wear a clear, visible name tag.',
        hi: 'अधिकारी का पहचान पत्र देखने और उनका नाम व नंबर नोट करने का — गिरफ़्तारी करने वाले हर अधिकारी को स्पष्ट, दिखने वाली नामपट्टिका पहननी होती है।',
      },
      {
        en: 'Inform a relative or friend of your choice, and have their name entered in the police station register.',
        hi: 'अपनी पसंद के किसी रिश्तेदार या मित्र को सूचित करने का, और उनका नाम थाने के रजिस्टर में दर्ज कराने का।',
      },
      {
        en: 'Meet and consult a lawyer — during interrogation too — and to a free lawyer if you cannot pay for one.',
        hi: 'वकील से मिलने और सलाह लेने का — पूछताछ के दौरान भी — और खर्च न उठा सकें तो मुफ़्त वकील पाने का।',
      },
      {
        en: 'Be produced before a magistrate within 24 hours, not counting travel time.',
        hi: '24 घंटे के भीतर मजिस्ट्रेट के सामने पेश किए जाने का, यात्रा का समय छोड़कर।',
      },
      {
        en: 'Be medically examined, and to have any injury recorded in the inspection memo.',
        hi: 'चिकित्सीय जाँच कराने का, और किसी भी चोट को निरीक्षण मेमो में दर्ज कराने का।',
      },
      {
        en: 'Stay silent. No one can force you to confess or to be a witness against yourself (Article 20(3)).',
        hi: 'चुप रहने का। कोई आपको इकबालिया बयान देने या अपने विरुद्ध गवाही देने पर मजबूर नहीं कर सकता (अनुच्छेद 20(3))।',
      },
    ],
    theyCannot: [
      {
        en: 'Beat, threaten or torture you. Custodial violence is a crime, whatever the accusation against you.',
        hi: 'आपको मारना, धमकाना या यातना देना। हिरासत में हिंसा अपराध है, आरोप चाहे जो भी हो।',
      },
      {
        en: 'Arrest a woman before sunrise or after sunset, except with a magistrate’s prior written permission — and only a woman officer may arrest her.',
        hi: 'किसी महिला को सूर्योदय से पहले या सूर्यास्त के बाद गिरफ़्तार करना, सिवाय मजिस्ट्रेट की पूर्व लिखित अनुमति के — और गिरफ़्तारी केवल महिला अधिकारी ही कर सकती है।',
      },
      {
        en: 'Call a woman or a child under 15 to the police station for questioning — they must be questioned at their own home, with a woman officer present.',
        hi: 'किसी महिला या 15 वर्ष से कम आयु के बच्चे को पूछताछ के लिए थाने बुलाना — उनसे पूछताछ उनके अपने घर पर, महिला अधिकारी की मौजूदगी में होनी चाहिए।',
      },
      {
        en: 'Keep you beyond 24 hours without an order of the magistrate.',
        hi: 'मजिस्ट्रेट के आदेश के बिना आपको 24 घंटे से अधिक रोकना।',
      },
      {
        en: 'Refuse you bail for a bailable offence — there, bail is your right, not a favour.',
        hi: 'ज़मानती अपराध में आपको ज़मानत देने से मना करना — वहाँ ज़मानत आपका अधिकार है, कोई एहसान नहीं।',
      },
      {
        en: 'Arrest you in most cases where the offence carries less than seven years, without first issuing a notice to appear.',
        hi: 'सात वर्ष से कम सज़ा वाले अधिकांश अपराधों में बिना पहले उपस्थिति का नोटिस दिए गिरफ़्तार करना।',
      },
    ],
    steps: [
      {
        en: 'Stay calm and do not resist physically. Resisting turns a small matter into a fresh offence.',
        hi: 'शांत रहें और शारीरिक विरोध न करें। विरोध छोटी बात को नया अपराध बना देता है।',
      },
      {
        en: 'Ask, politely and clearly: “What is the offence? Am I under arrest? Please give me the grounds in writing.”',
        hi: 'शांति और स्पष्टता से पूछें: “अपराध क्या है? क्या मैं गिरफ़्तार हूँ? कृपया आधार लिखित में दें।”',
      },
      {
        en: 'Read the arrest memo before signing it. It must carry the date, time, and the signature of a family member or a respectable local witness.',
        hi: 'गिरफ़्तारी मेमो पर हस्ताक्षर से पहले उसे पढ़ें। उसमें तारीख, समय और किसी परिजन या स्थानीय प्रतिष्ठित गवाह के हस्ताक्षर होने चाहिए।',
      },
      {
        en: 'Make your call. Tell one person exactly which police station you are at.',
        hi: 'अपनी कॉल करें। किसी एक व्यक्ति को ठीक-ठीक बताएँ कि आप किस थाने में हैं।',
      },
      {
        en: 'Say nothing about the facts until your lawyer arrives. Do not sign blank papers or a statement you have not read.',
        hi: 'वकील के आने तक तथ्यों पर कुछ न कहें। खाली कागज़ या बिना पढ़ा बयान न लिखें, न हस्ताक्षर करें।',
      },
      {
        en: 'In court, tell the magistrate directly if you were beaten or held longer than 24 hours. That is your safest moment to speak.',
        hi: 'अदालत में मजिस्ट्रेट को सीधे बताएँ कि आपको मारा गया या 24 घंटे से अधिक रोका गया। बोलने के लिए यही सबसे सुरक्षित क्षण है।',
      },
      {
        en: 'For a family member missing after being taken by the police, file a habeas corpus petition in the High Court at once — do not wait.',
        hi: 'पुलिस के ले जाने के बाद कोई परिजन लापता हो तो तुरंत हाईकोर्ट में बंदी प्रत्यक्षीकरण याचिका दायर करें — प्रतीक्षा न करें।',
      },
    ],
    laws: [
      { en: 'Constitution, Articles 20, 21 and 22', hi: 'संविधान, अनुच्छेद 20, 21 और 22' },
      { en: 'BNSS 2023, Sections 35, 47, 48 and 58 (earlier CrPC Sections 41, 50, 50A and 57)', hi: 'BNSS 2023, धारा 35, 47, 48 और 58 (पहले CrPC की धारा 41, 50, 50A और 57)' },
      { en: 'D.K. Basu v. State of West Bengal (1997) — binding arrest guidelines', hi: 'डी.के. बसु बनाम पश्चिम बंगाल राज्य (1997) — गिरफ़्तारी के बाध्यकारी दिशानिर्देश' },
      { en: 'Arnesh Kumar v. State of Bihar (2014) — no automatic arrest under seven years', hi: 'अर्नेश कुमार बनाम बिहार राज्य (2014) — सात साल से कम में स्वत: गिरफ़्तारी नहीं' },
    ],
    helplines: ['112', '15100'],
    actions: ['legal-aid', 'police-complaint', 'writ'],
    acts: ['bnss', 'bns', 'legal-services'],
  },

  {
    id: 'fir-refused',
    icon: '📝',
    title: { en: 'If the police refuse to write your FIR', hi: 'पुलिस आपकी FIR लिखने से मना करे' },
    summary: {
      en: 'A station house officer has no discretion to refuse an FIR for a cognizable offence. There are three escalating steps, and all are free.',
      hi: 'संज्ञेय अपराध में FIR लिखने से मना करने का अधिकार थानाध्यक्ष को नहीं है। तीन चरण हैं, और सभी नि:शुल्क।',
    },
    tags: [
      { en: 'FIR', hi: 'FIR' },
      { en: 'Police', hi: 'पुलिस' },
    ],
    youCan: [
      {
        en: 'Have an FIR registered at any police station, whatever the place where the offence happened — this is called a Zero FIR, and it is then transferred to the right station.',
        hi: 'किसी भी थाने में FIR दर्ज कराने का, चाहे अपराध कहीं भी हुआ हो — इसे ज़ीरो FIR कहते हैं, जो बाद में सही थाने भेज दी जाती है।',
      },
      {
        en: 'Get a free copy of the FIR at once. Registration costs nothing.',
        hi: 'FIR की मुफ़्त प्रति तुरंत पाने का। दर्ज कराने में कोई शुल्क नहीं लगता।',
      },
      {
        en: 'Have the FIR of a woman victim of a sexual offence recorded by a woman officer, at her home or a place of her choosing if she wishes.',
        hi: 'यौन अपराध की पीड़िता की FIR महिला अधिकारी द्वारा लिखी जाए, और वह चाहे तो उसके घर या उसकी पसंद की जगह पर।',
      },
      {
        en: 'File the complaint by e-mail or the State police portal in many States — an electronic complaint must be signed within three days.',
        hi: 'कई राज्यों में ईमेल या राज्य पुलिस पोर्टल से शिकायत देने का — इलेक्ट्रॉनिक शिकायत पर तीन दिन में हस्ताक्षर करना होता है।',
      },
    ],
    theyCannot: [
      {
        en: 'Turn you away saying “this is not our area”. Jurisdiction is their problem to sort out, not yours.',
        hi: '“यह हमारा इलाका नहीं है” कहकर लौटाना। अधिकार क्षेत्र सुलझाना उनका काम है, आपका नहीं।',
      },
      {
        en: 'Ask for money, a “settlement”, or tell you to bring the other party first.',
        hi: 'पैसे, “समझौते” की माँग करना, या पहले दूसरे पक्ष को लाने के लिए कहना।',
      },
      {
        en: 'Refuse to register an FIR for a cognizable offence — a refusal is itself punishable, and for sexual offences it is a specific offence.',
        hi: 'संज्ञेय अपराध की FIR दर्ज करने से मना करना — मना करना स्वयं दंडनीय है, और यौन अपराधों में यह अलग से अपराध है।',
      },
      {
        en: 'Write down something different from what you said. Read it before you sign.',
        hi: 'आपके कहे से अलग कुछ लिख देना। हस्ताक्षर से पहले पढ़ें।',
      },
    ],
    steps: [
      {
        en: 'Write your complaint on plain paper: what happened, when, where, who did it, and what you want done. Keep a copy for yourself.',
        hi: 'सादे कागज़ पर शिकायत लिखें: क्या हुआ, कब, कहाँ, किसने किया, और आप क्या चाहते हैं। एक प्रति अपने पास रखें।',
      },
      {
        en: 'Hand it in at the station and ask for a receipt or the diary number. If they refuse to receive it, note the time and the officer’s name.',
        hi: 'थाने में जमा करें और रसीद या डायरी नंबर माँगें। लेने से मना करें तो समय और अधिकारी का नाम नोट करें।',
      },
      {
        en: 'Step 2 — send the same complaint by registered post to the Superintendent of Police (Commissioner in a city). Keep the postal receipt. The SP must have it investigated.',
        hi: 'चरण 2 — वही शिकायत रजिस्टर्ड डाक से पुलिस अधीक्षक (शहर में आयुक्त) को भेजें। डाक रसीद रखें। SP को जाँच करानी होगी।',
      },
      {
        en: 'Step 3 — if there is still no FIR, apply to the Judicial Magistrate under Section 175(3) BNSS (earlier 156(3) CrPC). The magistrate can order the police to register and investigate.',
        hi: 'चरण 3 — फिर भी FIR न हो तो न्यायिक मजिस्ट्रेट के समक्ष BNSS की धारा 175(3) (पहले CrPC 156(3)) में आवेदन करें। मजिस्ट्रेट पुलिस को दर्ज कर जाँच का आदेश दे सकते हैं।',
      },
      {
        en: 'Attach copies of your earlier complaint and the postal receipts. That paper trail is what convinces the magistrate.',
        hi: 'पहले की शिकायत और डाक रसीदों की प्रतियाँ लगाएँ। यही कागज़ी सिलसिला मजिस्ट्रेट को आश्वस्त करता है।',
      },
      {
        en: 'A free lawyer for all of this is available from the District Legal Services Authority — call 15100.',
        hi: 'इस सबके लिए मुफ़्त वकील ज़िला विधिक सेवा प्राधिकरण से मिलता है — 15100 पर कॉल करें।',
      },
    ],
    laws: [
      { en: 'BNSS 2023, Sections 173, 173(4) and 175(3) (earlier CrPC 154, 154(3) and 156(3))', hi: 'BNSS 2023, धारा 173, 173(4) और 175(3) (पहले CrPC 154, 154(3) और 156(3))' },
      { en: 'Lalita Kumari v. Govt. of U.P. (2014) — FIR is compulsory for a cognizable offence', hi: 'ललिता कुमारी बनाम उ.प्र. सरकार (2014) — संज्ञेय अपराध में FIR अनिवार्य है' },
    ],
    helplines: ['112', '15100'],
    actions: ['fir', 'police-complaint', 'legal-aid'],
    acts: ['bnss', 'legal-services'],
  },

  {
    id: 'women',
    icon: '👩',
    title: { en: 'Rights every woman should know', hi: 'हर महिला को पता होने चाहिए ये अधिकार' },
    summary: {
      en: 'Special protections in the police station, at work, in the hospital and in court — most of them free, and most of them unknown.',
      hi: 'थाने, कार्यस्थल, अस्पताल और अदालत में विशेष सुरक्षा — अधिकांश नि:शुल्क, और अधिकांश अनजानी।',
    },
    tags: [
      { en: 'Women', hi: 'महिला' },
      { en: 'Safety', hi: 'सुरक्षा' },
    ],
    youCan: [
      {
        en: 'Be arrested only between sunrise and sunset, and only by a woman police officer, except with a magistrate’s prior permission.',
        hi: 'केवल सूर्योदय से सूर्यास्त के बीच और केवल महिला पुलिस अधिकारी द्वारा गिरफ़्तार की जा सकती हैं, सिवाय मजिस्ट्रेट की पूर्व अनुमति के।',
      },
      {
        en: 'Be questioned at your own residence, in the presence of a woman officer or a family member — you cannot be summoned to the police station.',
        hi: 'आपसे पूछताछ आपके घर पर, महिला अधिकारी या परिजन की मौजूदगी में हो — आपको थाने नहीं बुलाया जा सकता।',
      },
      {
        en: 'Have a Zero FIR registered at any police station, and to have your statement recorded by a woman officer.',
        hi: 'किसी भी थाने में ज़ीरो FIR दर्ज कराने का, और अपना बयान महिला अधिकारी से लिखवाने का।',
      },
      {
        en: 'Get free medical treatment at any hospital, government or private, after a sexual assault. Refusal is an offence.',
        hi: 'यौन हिंसा के बाद किसी भी अस्पताल — सरकारी या निजी — में मुफ़्त इलाज पाने का। मना करना अपराध है।',
      },
      {
        en: 'Keep your identity secret. Publishing the name or photo of a victim of a sexual offence is a crime.',
        hi: 'अपनी पहचान गुप्त रखने का। यौन अपराध की पीड़िता का नाम या फ़ोटो छापना अपराध है।',
      },
      {
        en: 'Have your case tried by a woman magistrate wherever possible, with the trial held in camera.',
        hi: 'जहाँ संभव हो, आपके मामले की सुनवाई महिला मजिस्ट्रेट द्वारा और बंद कमरे में हो।',
      },
      {
        en: 'Get free legal aid — every woman is entitled to it regardless of her income.',
        hi: 'नि:शुल्क विधिक सहायता पाने का — हर महिला इसकी हकदार है, आय चाहे कुछ भी हो।',
      },
    ],
    theyCannot: [
      {
        en: 'Demand or accept dowry — giving, taking and demanding are all punishable.',
        hi: 'दहेज माँगना या लेना — देना, लेना और माँगना, तीनों दंडनीय हैं।',
      },
      {
        en: 'Throw you out of the shared household. A woman has the right to reside in the shared home even if it is not in her name.',
        hi: 'आपको साझा घर से निकालना। महिला को साझा घर में रहने का अधिकार है, चाहे वह उसके नाम पर न हो।',
      },
      {
        en: 'Deny you maternity leave — 26 weeks paid leave for the first two children in establishments with 10 or more employees.',
        hi: 'मातृत्व अवकाश से वंचित करना — 10 या अधिक कर्मचारियों वाले प्रतिष्ठानों में पहले दो बच्चों के लिए 26 सप्ताह का सवेतन अवकाश।',
      },
      {
        en: 'Pay you less than a man for the same work.',
        hi: 'समान काम के लिए पुरुष से कम वेतन देना।',
      },
    ],
    steps: [
      {
        en: 'In immediate danger call 112. For any other trouble call 181 — the One Stop Centre gives shelter, counselling, medical and legal help together.',
        hi: 'तुरंत खतरे में 112 पर कॉल करें। किसी और परेशानी में 181 पर — वन स्टॉप सेंटर आश्रय, परामर्श, चिकित्सा और कानूनी मदद एक साथ देता है।',
      },
      {
        en: 'Save evidence: messages, call records, photographs of injuries, medical papers, and the names of anyone who saw or heard.',
        hi: 'सबूत सहेजें: संदेश, कॉल रिकॉर्ड, चोट की तस्वीरें, चिकित्सा कागज़, और देखने-सुनने वालों के नाम।',
      },
      {
        en: 'File the FIR. For harassment, stalking, assault or cruelty by a husband or his relatives, all of these are cognizable offences.',
        hi: 'FIR दर्ज कराएँ। उत्पीड़न, पीछा करना, हमला, या पति व उसके परिजनों की क्रूरता — ये सब संज्ञेय अपराध हैं।',
      },
      {
        en: 'For violence at home, also file an application under the Protection of Women from Domestic Violence Act, 2005 — it gets you protection, residence and maintenance orders, often within weeks.',
        hi: 'घरेलू हिंसा में घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005 के तहत भी आवेदन दें — इससे संरक्षण, निवास और भरण-पोषण के आदेश अक्सर कुछ ही हफ़्तों में मिल जाते हैं।',
      },
      {
        en: 'Contact the Protection Officer of your district — the law makes it their job to help you file and follow up, free of charge.',
        hi: 'अपने ज़िले के संरक्षण अधिकारी से संपर्क करें — कानून के अनुसार आवेदन दायर करने और उसकी पैरवी में मदद करना उनका काम है, नि:शुल्क।',
      },
      {
        en: 'If a police station is unhelpful, complain online to the National Commission for Women at ncwapps.nic.in.',
        hi: 'थाना मदद न करे तो राष्ट्रीय महिला आयोग को ncwapps.nic.in पर ऑनलाइन शिकायत करें।',
      },
    ],
    laws: [
      { en: 'BNS 2023, Sections 74–79, 85 and 63–64 (earlier IPC 354, 498A and 375–376)', hi: 'BNS 2023, धारा 74–79, 85 और 63–64 (पहले IPC 354, 498A और 375–376)' },
      { en: 'Protection of Women from Domestic Violence Act, 2005', hi: 'घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005' },
      { en: 'Dowry Prohibition Act, 1961', hi: 'दहेज प्रतिषेध अधिनियम, 1961' },
      { en: 'Maternity Benefit Act, 1961 (as amended in 2017)', hi: 'मातृत्व लाभ अधिनियम, 1961 (2017 में संशोधित)' },
    ],
    helplines: ['112', '181', '1091', '15100'],
    actions: ['fir', 'posh', 'legal-aid'],
    acts: ['pwdva', 'dowry', 'bns', 'legal-services'],
  },

  {
    id: 'posh',
    icon: '🏢',
    title: { en: 'Sexual harassment at the workplace', hi: 'कार्यस्थल पर यौन उत्पीड़न' },
    summary: {
      en: 'Every workplace with ten or more employees must have an Internal Committee. If yours does not, that itself is a violation.',
      hi: 'दस या अधिक कर्मचारियों वाले हर कार्यस्थल में आंतरिक समिति होनी अनिवार्य है। न हो तो यही अपने आप में उल्लंघन है।',
    },
    tags: [
      { en: 'Work', hi: 'काम' },
      { en: 'Women', hi: 'महिला' },
      { en: 'POSH Act', hi: 'पॉश अधिनियम' },
    ],
    youCan: [
      {
        en: 'Complain to the Internal Committee in writing within three months of the incident — extendable by another three months for good reason.',
        hi: 'घटना के तीन महीने के भीतर आंतरिक समिति को लिखित शिकायत देने का — उचित कारण पर तीन महीने और बढ़ाया जा सकता है।',
      },
      {
        en: 'Ask for interim relief while the inquiry is on: a transfer, leave of up to three months, or that the respondent be kept away from you.',
        hi: 'जाँच के दौरान अंतरिम राहत माँगने का: स्थानांतरण, तीन महीने तक का अवकाश, या यह कि प्रतिवादी आपसे दूर रखा जाए।',
      },
      {
        en: 'Have the inquiry completed within 90 days and the employer act on it within 60 days of the report.',
        hi: 'जाँच 90 दिन में पूरी हो और नियोक्ता रिपोर्ट के 60 दिन के भीतर कार्रवाई करे।',
      },
      {
        en: 'Complain even if you are an intern, a trainee, a domestic worker, a daily-wage worker or a visitor — the law covers you all.',
        hi: 'शिकायत करने का, चाहे आप प्रशिक्षु हों, ट्रेनी, घरेलू कामगार, दिहाड़ी मज़दूर या आगंतुक — कानून सब पर लागू है।',
      },
      {
        en: 'Go to the Local Committee at the District Officer’s office if your workplace has no Internal Committee, or if the complaint is against the employer.',
        hi: 'कार्यस्थल पर आंतरिक समिति न हो, या शिकायत नियोक्ता के विरुद्ध हो, तो ज़िला अधिकारी के कार्यालय की स्थानीय समिति में जाने का।',
      },
      {
        en: 'File a criminal complaint as well. The POSH inquiry and an FIR can run side by side.',
        hi: 'आपराधिक शिकायत भी दर्ज कराने का। POSH जाँच और FIR साथ-साथ चल सकती हैं।',
      },
    ],
    theyCannot: [
      {
        en: 'Punish you, transfer you or hold back your promotion for complaining. Retaliation is separately punishable.',
        hi: 'शिकायत करने पर सज़ा देना, तबादला करना या पदोन्नति रोकना। प्रतिशोध अलग से दंडनीय है।',
      },
      {
        en: 'Publish your name or any detail that identifies you. The proceedings are confidential.',
        hi: 'आपका नाम या पहचान बताने वाला कोई विवरण प्रकाशित करना। कार्यवाही गोपनीय होती है।',
      },
      {
        en: 'Force you into a “compromise” involving money. Conciliation is allowed only if you ask for it, and never for a monetary settlement.',
        hi: 'पैसे वाले “समझौते” के लिए मजबूर करना। सुलह केवल आपकी माँग पर हो सकती है, और कभी भी धन-आधारित नहीं।',
      },
    ],
    steps: [
      {
        en: 'Write down every incident with date, time, place and words used, as soon as you can. Contemporary notes carry weight.',
        hi: 'हर घटना को तारीख, समय, जगह और कहे गए शब्दों के साथ जल्द से जल्द लिख लें। उसी समय के नोट्स का वज़न होता है।',
      },
      {
        en: 'Preserve messages, e-mails, CCTV requests and the names of colleagues who witnessed anything.',
        hi: 'संदेश, ईमेल, सीसीटीवी की माँग और गवाह सहकर्मियों के नाम सुरक्षित रखें।',
      },
      {
        en: 'Submit six copies of your written complaint to the Internal Committee with your evidence and the list of witnesses.',
        hi: 'अपनी लिखित शिकायत की छह प्रतियाँ, सबूत और गवाहों की सूची के साथ आंतरिक समिति को दें।',
      },
      {
        en: 'If nothing moves, file on SHe-Box at shebox.wcd.gov.in — it routes the complaint to the right authority and tracks it.',
        hi: 'कुछ न हो तो shebox.wcd.gov.in (शी-बॉक्स) पर शिकायत दें — यह शिकायत को सही प्राधिकरण तक भेजता है और निगरानी करता है।',
      },
      {
        en: 'Appeal to the court or tribunal within 90 days if you are not satisfied with the outcome.',
        hi: 'परिणाम से संतुष्ट न हों तो 90 दिन के भीतर न्यायालय या अधिकरण में अपील करें।',
      },
    ],
    laws: [
      {
        en: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
        hi: 'कार्यस्थल पर महिलाओं का यौन उत्पीड़न (निवारण, प्रतिषेध और प्रतितोष) अधिनियम, 2013',
      },
      { en: 'Vishaka v. State of Rajasthan (1997) — the guidelines that became this Act', hi: 'विशाखा बनाम राजस्थान राज्य (1997) — वे दिशानिर्देश जो यह अधिनियम बने' },
      { en: 'BNS 2023, Sections 75 and 79 (earlier IPC 354A and 509)', hi: 'BNS 2023, धारा 75 और 79 (पहले IPC 354A और 509)' },
    ],
    helplines: ['181', '15100'],
    actions: ['posh', 'fir', 'legal-aid'],
    acts: ['posh'],
  },

  {
    id: 'work',
    icon: '🔧',
    title: { en: 'Your rights as a worker', hi: 'कामगार के रूप में आपके अधिकार' },
    summary: {
      en: 'Wages, hours, safety and dues do not depend on whether you signed a contract. They apply to daily-wage and contract workers too.',
      hi: 'मज़दूरी, काम के घंटे, सुरक्षा और बकाया इस बात पर निर्भर नहीं करते कि आपने अनुबंध पर हस्ताक्षर किए या नहीं। ये दिहाड़ी और ठेका कामगारों पर भी लागू हैं।',
    },
    tags: [
      { en: 'Work', hi: 'काम' },
      { en: 'Wages', hi: 'मज़दूरी' },
    ],
    youCan: [
      {
        en: 'Be paid at least the minimum wage notified by your State for your kind of work and skill level.',
        hi: 'अपने काम और कौशल स्तर के लिए राज्य द्वारा अधिसूचित न्यूनतम मज़दूरी कम से कम पाने का।',
      },
      {
        en: 'Be paid on time — by the 7th of the next month in a small establishment, and by the 10th in a larger one.',
        hi: 'समय पर भुगतान पाने का — छोटे प्रतिष्ठान में अगले महीने की 7 तारीख तक, बड़े में 10 तारीख तक।',
      },
      {
        en: 'Work eight hours a day and about 48 a week, with overtime paid at twice the ordinary rate.',
        hi: 'दिन में आठ घंटे और सप्ताह में लगभग 48 घंटे काम करने का, और अतिरिक्त समय पर दोगुनी दर से भुगतान।',
      },
      {
        en: 'Get a weekly day off and a rest interval during the working day.',
        hi: 'साप्ताहिक अवकाश और काम के दौरान विश्राम का अंतराल पाने का।',
      },
      {
        en: 'Get equal pay for equal work, irrespective of sex.',
        hi: 'समान काम का समान वेतन पाने का, लिंग चाहे कोई भी हो।',
      },
      {
        en: 'Get gratuity after five years of continuous service, and provident fund in a covered establishment.',
        hi: 'पाँच वर्ष की निरंतर सेवा के बाद ग्रेच्युटी, और कवर किए गए प्रतिष्ठान में भविष्य निधि पाने का।',
      },
      {
        en: 'Get compensation for an injury caused at work, and safety gear where the work is hazardous.',
        hi: 'काम के दौरान लगी चोट का मुआवज़ा, और खतरनाक काम में सुरक्षा उपकरण पाने का।',
      },
      { en: 'Form or join a trade union.', hi: 'मज़दूर संघ बनाने या उसमें शामिल होने का।' },
    ],
    theyCannot: [
      {
        en: 'Withhold your wages as a punishment, or make deductions beyond what the law allows.',
        hi: 'सज़ा के तौर पर मज़दूरी रोकना, या कानून से अधिक कटौती करना।',
      },
      {
        en: 'Keep your original documents — Aadhaar, certificates or passport — to stop you from leaving the job.',
        hi: 'नौकरी छोड़ने से रोकने के लिए आपके मूल दस्तावेज़ — आधार, प्रमाणपत्र या पासपोर्ट — रख लेना।',
      },
      {
        en: 'Dismiss a workman who has served a year without notice, wages in lieu of notice, and retrenchment compensation.',
        hi: 'एक वर्ष सेवा कर चुके कामगार को बिना नोटिस, नोटिस के बदले वेतन और छंटनी मुआवज़े के हटाना।',
      },
      {
        en: 'Employ a child below 14 at all, or a young person below 18 in hazardous work.',
        hi: '14 वर्ष से कम आयु के बच्चे को कहीं भी, या 18 से कम आयु के किशोर को खतरनाक काम में लगाना।',
      },
    ],
    steps: [
      {
        en: 'Collect proof of employment: an ID card, salary slips, bank credits, attendance records, a WhatsApp message from the supervisor — anything.',
        hi: 'नौकरी का सबूत जुटाएँ: पहचान पत्र, वेतन पर्ची, बैंक में आया पैसा, हाज़िरी रिकॉर्ड, सुपरवाइज़र का व्हाट्सएप संदेश — कुछ भी।',
      },
      {
        en: 'Send a written demand to the employer asking for the exact amount due, and keep proof of delivery.',
        hi: 'नियोक्ता को लिखित माँग भेजें जिसमें बकाया राशि साफ़ लिखी हो, और भेजने का प्रमाण रखें।',
      },
      {
        en: 'Complain to the Labour Commissioner or the Labour Inspector of your district. Conciliation there is free and often quick.',
        hi: 'अपने ज़िले के श्रम आयुक्त या श्रम निरीक्षक को शिकायत करें। वहाँ सुलह नि:शुल्क है और अक्सर तेज़ी से होती है।',
      },
      {
        en: 'For unpaid wages, an application under the Payment of Wages Act can get you the dues plus compensation.',
        hi: 'बकाया मज़दूरी के लिए मज़दूरी संदाय अधिनियम के तहत आवेदन से बकाया और मुआवज़ा दोनों मिल सकते हैं।',
      },
      {
        en: 'For dismissal, raise an industrial dispute — the Labour Court can order reinstatement with back wages.',
        hi: 'नौकरी से निकाले जाने पर औद्योगिक विवाद उठाएँ — श्रम न्यायालय पिछले वेतन सहित बहाली का आदेश दे सकता है।',
      },
      {
        en: 'For PF that was deducted but never deposited, complain to the EPFO office or on the EPFiGMS portal.',
        hi: 'PF काटा गया पर जमा नहीं हुआ, तो EPFO कार्यालय या EPFiGMS पोर्टल पर शिकायत करें।',
      },
    ],
    laws: [
      { en: 'Code on Wages, 2019 and the Minimum Wages Act, 1948', hi: 'वेतन संहिता, 2019 और न्यूनतम मज़दूरी अधिनियम, 1948' },
      { en: 'Industrial Disputes Act, 1947 / Industrial Relations Code, 2020', hi: 'औद्योगिक विवाद अधिनियम, 1947 / औद्योगिक संबंध संहिता, 2020' },
      { en: 'Payment of Gratuity Act, 1972 and the EPF Act, 1952', hi: 'उपदान संदाय अधिनियम, 1972 और EPF अधिनियम, 1952' },
      { en: 'Constitution, Articles 23, 39 and 43', hi: 'संविधान, अनुच्छेद 23, 39 और 43' },
    ],
    helplines: ['1800111565', '15100'],
    actions: ['grievance', 'legal-aid'],
    acts: ['wages-code', 'gratuity', 'bonded-labour'],
  },

  {
    id: 'consumer',
    icon: '🛒',
    title: { en: 'When a shop, seller or service cheats you', hi: 'दुकान, विक्रेता या सेवा आपको ठगे' },
    summary: {
      en: 'A defective product, a false advertisement or a service that never came — the consumer court is cheap, quick and you can argue it yourself.',
      hi: 'खराब सामान, झूठा विज्ञापन या न मिली सेवा — उपभोक्ता अदालत सस्ती है, तेज़ है, और आप खुद पैरवी कर सकते हैं।',
    },
    tags: [
      { en: 'Consumer', hi: 'उपभोक्ता' },
      { en: 'Shopping', hi: 'खरीदारी' },
    ],
    youCan: [
      { en: 'Be told the true price, quantity, quality and expiry of what you buy.', hi: 'जो खरीदें उसका सही दाम, मात्रा, गुणवत्ता और अवधि जानने का।' },
      { en: 'Refuse to pay more than the printed maximum retail price.', hi: 'छपे हुए अधिकतम खुदरा मूल्य से अधिक देने से इनकार करने का।' },
      { en: 'Get a bill for anything you buy — ask for it every time.', hi: 'हर खरीद पर बिल पाने का — हर बार माँगें।' },
      { en: 'Be heard, and get redress: repair, replacement, refund, or compensation for loss and mental agony.', hi: 'सुने जाने का, और समाधान पाने का: मरम्मत, बदली, पैसा वापस, या नुकसान और मानसिक कष्ट का मुआवज़ा।' },
      { en: 'File the case where you live — you no longer have to travel to the seller’s city.', hi: 'जहाँ आप रहते हैं वहीं मामला दायर करने का — अब विक्रेता के शहर जाना ज़रूरी नहीं।' },
      { en: 'Appear without a lawyer. The consumer commission is designed for ordinary people.', hi: 'बिना वकील पेश होने का। उपभोक्ता आयोग आम लोगों के लिए ही बना है।' },
    ],
    theyCannot: [
      { en: 'Say “goods once sold will not be taken back” to escape liability for a defect.', hi: '“बिका माल वापस नहीं होगा” कहकर खराबी की ज़िम्मेदारी से बचना।' },
      { en: 'Advertise something false or misleading, or use an endorsement they know to be untrue.', hi: 'झूठा या भ्रामक विज्ञापन देना, या ऐसा प्रचार करना जिसे वे झूठ जानते हों।' },
      { en: 'Charge you for a service you did not agree to, or add hidden fees after the sale.', hi: 'ऐसी सेवा का शुल्क लेना जिस पर आप सहमत नहीं थे, या बिक्री के बाद छिपे शुल्क जोड़ना।' },
    ],
    steps: [
      {
        en: 'First, complain to the seller in writing — an e-mail is enough. Give them a deadline of 15 days.',
        hi: 'पहले विक्रेता को लिखित शिकायत करें — ईमेल भी काफ़ी है। 15 दिन की समय सीमा दें।',
      },
      {
        en: 'If nothing happens, call the National Consumer Helpline on 1915 or complain at consumerhelpline.gov.in. Many disputes end here.',
        hi: 'कुछ न हो तो राष्ट्रीय उपभोक्ता हेल्पलाइन 1915 पर कॉल करें या consumerhelpline.gov.in पर शिकायत करें। कई विवाद यहीं निपट जाते हैं।',
      },
      {
        en: 'Still unresolved — file at edaakhil.nic.in. District Commission for claims up to ₹50 lakh, State up to ₹2 crore, National above that.',
        hi: 'फिर भी हल न हो — edaakhil.nic.in पर दायर करें। ₹50 लाख तक ज़िला आयोग, ₹2 करोड़ तक राज्य, उससे ऊपर राष्ट्रीय।',
      },
      {
        en: 'Attach the bill, warranty card, photos of the defect, and copies of your earlier complaints.',
        hi: 'बिल, वारंटी कार्ड, खराबी की तस्वीरें और पहले की शिकायतों की प्रतियाँ लगाएँ।',
      },
      {
        en: 'File within two years of the problem arising. Late filing needs the commission to condone the delay.',
        hi: 'समस्या होने के दो वर्ष के भीतर दायर करें। देरी होने पर आयोग से माफ़ी लेनी होती है।',
      },
    ],
    laws: [
      { en: 'Consumer Protection Act, 2019', hi: 'उपभोक्ता संरक्षण अधिनियम, 2019' },
      { en: 'Legal Metrology Act, 2009 — for weight, measure and MRP', hi: 'विधिक माप विज्ञान अधिनियम, 2009 — वज़न, माप और MRP के लिए' },
    ],
    helplines: [],
    actions: ['consumer', 'grievance'],
    acts: ['consumer'],
  },

  {
    id: 'education',
    icon: '🎒',
    title: { en: 'Your child’s right to education', hi: 'आपके बच्चे का शिक्षा का अधिकार' },
    summary: {
      en: 'Between 6 and 14, school is a fundamental right — free, near home, and no child can be turned away or held back.',
      hi: '6 से 14 वर्ष के बीच स्कूल एक मौलिक अधिकार है — नि:शुल्क, घर के पास, और किसी बच्चे को लौटाया या रोका नहीं जा सकता।',
    },
    tags: [
      { en: 'Education', hi: 'शिक्षा' },
      { en: 'Children', hi: 'बच्चे' },
      { en: 'RTE', hi: 'आरटीई' },
    ],
    youCan: [
      { en: 'Get free education for your child from 6 to 14 in a neighbourhood school.', hi: '6 से 14 वर्ष के बच्चे के लिए पड़ोस के स्कूल में नि:शुल्क शिक्षा पाने का।' },
      { en: 'Get admission any time in the year, even after the session has started.', hi: 'साल में कभी भी प्रवेश पाने का, सत्र शुरू होने के बाद भी।' },
      {
        en: 'Claim a seat in the 25% quota that private unaided schools must keep for children from weaker and disadvantaged groups.',
        hi: 'निजी गैर-सहायता प्राप्त स्कूलों को कमज़ोर और वंचित वर्ग के बच्चों के लिए रखनी होने वाली 25% सीटों में से एक माँगने का।',
      },
      { en: 'Get free textbooks, uniform and the mid-day meal in a government school.', hi: 'सरकारी स्कूल में नि:शुल्क पाठ्यपुस्तकें, वर्दी और मध्याह्न भोजन पाने का।' },
      {
        en: 'Get admission without a birth certificate or a transfer certificate — no child may be refused for want of papers.',
        hi: 'जन्म प्रमाणपत्र या स्थानांतरण प्रमाणपत्र के बिना प्रवेश पाने का — कागज़ न होने पर किसी बच्चे को मना नहीं किया जा सकता।',
      },
    ],
    theyCannot: [
      { en: 'Hold a screening test or interview the parents for admission.', hi: 'प्रवेश के लिए छँटनी परीक्षा लेना या अभिभावकों का साक्षात्कार करना।' },
      { en: 'Charge a capitation fee or donation.', hi: 'कैपिटेशन शुल्क या दान लेना।' },
      { en: 'Expel a child, or hold a child back in a class, before the completion of elementary education.', hi: 'प्रारंभिक शिक्षा पूरी होने से पहले किसी बच्चे को निकालना या उसी कक्षा में रोकना।' },
      { en: 'Give physical punishment or mental harassment to any child.', hi: 'किसी बच्चे को शारीरिक दंड या मानसिक प्रताड़ना देना।' },
      { en: 'Deny a child admission because of caste, religion, language or disability.', hi: 'जाति, धर्म, भाषा या दिव्यांगता के कारण प्रवेश से मना करना।' },
    ],
    steps: [
      { en: 'Ask the school for the refusal in writing. Most schools back down at this point.', hi: 'स्कूल से इनकार लिखित में माँगें। ज़्यादातर स्कूल यहीं पीछे हट जाते हैं।' },
      {
        en: 'Complain to the Block or District Education Officer, in writing, with a copy to the school.',
        hi: 'खंड या ज़िला शिक्षा अधिकारी को लिखित शिकायत करें, एक प्रति स्कूल को भी दें।',
      },
      {
        en: 'Take it to the State Commission for Protection of Child Rights, or to the NCPCR at ncpcr.gov.in — they can summon the school.',
        hi: 'राज्य बाल अधिकार संरक्षण आयोग, या NCPCR (ncpcr.gov.in) तक ले जाएँ — वे स्कूल को तलब कर सकते हैं।',
      },
      {
        en: 'For ragging or corporal punishment in a college or school, call 1800-180-5522 or 1098.',
        hi: 'कॉलेज या स्कूल में रैगिंग या शारीरिक दंड पर 1800-180-5522 या 1098 पर कॉल करें।',
      },
      {
        en: 'A writ petition under Article 226 works quickly for a plain denial of admission.',
        hi: 'प्रवेश से साफ़ इनकार पर अनुच्छेद 226 की रिट याचिका जल्दी काम करती है।',
      },
    ],
    laws: [
      { en: 'Constitution, Article 21A', hi: 'संविधान, अनुच्छेद 21A' },
      { en: 'Right of Children to Free and Compulsory Education Act, 2009', hi: 'बच्चों को नि:शुल्क और अनिवार्य शिक्षा का अधिकार अधिनियम, 2009' },
    ],
    helplines: ['1098', 'ragging'],
    actions: ['grievance', 'writ'],
    acts: ['rte'],
  },

  {
    id: 'child',
    icon: '🧒',
    title: { en: 'When a child is in danger', hi: 'जब कोई बच्चा खतरे में हो' },
    summary: {
      en: 'Child labour, child marriage, abuse or a lost child — one free call sets the whole machinery moving.',
      hi: 'बाल श्रम, बाल विवाह, दुर्व्यवहार या खोया बच्चा — एक मुफ़्त कॉल पूरी व्यवस्था को हरकत में ला देती है।',
    },
    tags: [
      { en: 'Children', hi: 'बच्चे' },
      { en: 'POCSO', hi: 'पॉक्सो' },
    ],
    youCan: [
      { en: 'Report anonymously. You do not have to give your name to call 1098.', hi: 'गुमनाम रहकर सूचना देने का। 1098 पर कॉल करने के लिए नाम बताना ज़रूरी नहीं।' },
      {
        en: 'Have a child victim’s statement recorded at their home or a place they feel safe, by a woman officer not in uniform.',
        hi: 'पीड़ित बच्चे का बयान उसके घर या सुरक्षित लगने वाली जगह पर, बिना वर्दी वाली महिला अधिकारी द्वारा दर्ज कराने का।',
      },
      {
        en: 'Have the child’s identity kept completely confidential, and the trial held in a special child-friendly court.',
        hi: 'बच्चे की पहचान पूरी तरह गोपनीय रखने का, और सुनवाई विशेष बाल-अनुकूल अदालत में कराने का।',
      },
      {
        en: 'Get free legal aid and interim compensation for the child from the Legal Services Authority.',
        hi: 'विधिक सेवा प्राधिकरण से बच्चे के लिए नि:शुल्क विधिक सहायता और अंतरिम मुआवज़ा पाने का।',
      },
    ],
    theyCannot: [
      { en: 'Employ any child below 14, in a shop, home, dhaba or factory.', hi: '14 वर्ष से कम आयु के किसी बच्चे को दुकान, घर, ढाबा या कारखाने में काम पर रखना।' },
      { en: 'Marry off a girl below 18 or a boy below 21 — such a marriage is voidable and punishable.', hi: '18 से कम आयु की लड़की या 21 से कम आयु के लड़के का विवाह करना — ऐसा विवाह शून्यकरणीय और दंडनीय है।' },
      {
        en: 'Stay silent about sexual abuse of a child. Failing to report it is itself an offence under the POCSO Act.',
        hi: 'बच्चे के यौन शोषण पर चुप रहना। सूचना न देना POCSO अधिनियम के तहत स्वयं अपराध है।',
      },
      { en: 'Question a child in a police station or keep a child in a police lock-up.', hi: 'बच्चे से थाने में पूछताछ करना या बच्चे को पुलिस हवालात में रखना।' },
    ],
    steps: [
      { en: 'Call 1098 (Childline) or 112. Give the location as exactly as you can.', hi: '1098 (चाइल्डलाइन) या 112 पर कॉल करें। जगह जितनी सटीक बता सकें, बताएँ।' },
      {
        en: 'For child labour, also report on pencil.gov.in — the complaint reaches the District Nodal Officer with a tracking number.',
        hi: 'बाल श्रम की सूचना pencil.gov.in पर भी दें — शिकायत ट्रैकिंग नंबर के साथ ज़िला नोडल अधिकारी तक पहुँचती है।',
      },
      {
        en: 'For a child marriage being planned, inform the Child Marriage Prohibition Officer or the District Magistrate — they can stop it with an injunction.',
        hi: 'बाल विवाह की तैयारी हो तो बाल विवाह प्रतिषेध अधिकारी या ज़िलाधिकारी को सूचित करें — वे निषेधाज्ञा से उसे रोक सकते हैं।',
      },
      {
        en: 'For sexual abuse, an FIR under the POCSO Act, 2012 must be registered immediately — and the child must be produced before the Child Welfare Committee.',
        hi: 'यौन शोषण पर POCSO अधिनियम, 2012 के तहत FIR तुरंत दर्ज होनी चाहिए — और बच्चे को बाल कल्याण समिति के समक्ष पेश करना होगा।',
      },
      {
        en: 'Complain to the NCPCR at ncpcr.gov.in if the local authorities do nothing.',
        hi: 'स्थानीय अधिकारी कुछ न करें तो NCPCR को ncpcr.gov.in पर शिकायत करें।',
      },
    ],
    laws: [
      { en: 'Constitution, Articles 21A, 23 and 24', hi: 'संविधान, अनुच्छेद 21A, 23 और 24' },
      { en: 'Protection of Children from Sexual Offences (POCSO) Act, 2012', hi: 'लैंगिक अपराधों से बालकों का संरक्षण (पॉक्सो) अधिनियम, 2012' },
      { en: 'Juvenile Justice (Care and Protection of Children) Act, 2015', hi: 'किशोर न्याय (बालकों की देखरेख और संरक्षण) अधिनियम, 2015' },
      { en: 'Prohibition of Child Marriage Act, 2006', hi: 'बाल विवाह प्रतिषेध अधिनियम, 2006' },
    ],
    helplines: ['1098', '112'],
    actions: ['fir', 'legal-aid'],
    acts: ['pocso', 'child-labour', 'rte'],
  },

  {
    id: 'caste',
    icon: '✊',
    title: { en: 'Facing caste discrimination or atrocity', hi: 'जातिगत भेदभाव या अत्याचार का सामना' },
    summary: {
      en: 'The Atrocities Act is one of the strongest laws in the country — non-bailable, time-bound, and it carries compensation as of right.',
      hi: 'अत्याचार अधिनियम देश के सबसे सख़्त कानूनों में है — गैर-ज़मानती, समयबद्ध, और इसमें मुआवज़ा अधिकार के रूप में मिलता है।',
    },
    tags: [
      { en: 'Caste', hi: 'जाति' },
      { en: 'SC/ST Act', hi: 'SC/ST अधिनियम' },
    ],
    youCan: [
      {
        en: 'Have an FIR registered immediately — offences under the Act are cognizable and non-bailable, and anticipatory bail is generally barred.',
        hi: 'FIR तुरंत दर्ज कराने का — इस अधिनियम के अपराध संज्ञेय और गैर-ज़मानती हैं, और अग्रिम ज़मानत सामान्यतः वर्जित है।',
      },
      {
        en: 'Have the investigation done by an officer of at least Deputy Superintendent rank, and the charge sheet filed within 60 days.',
        hi: 'जाँच कम से कम उप अधीक्षक स्तर के अधिकारी से कराने का, और 60 दिन में आरोप पत्र दाखिल कराने का।',
      },
      {
        en: 'Get relief and compensation from the district administration, part of it within seven days of the FIR.',
        hi: 'ज़िला प्रशासन से राहत और मुआवज़ा पाने का, जिसका एक हिस्सा FIR के सात दिन के भीतर।',
      },
      {
        en: 'Get travel allowance, maintenance and a free lawyer for attending court, and protection for you and your witnesses.',
        hi: 'अदालत आने के लिए यात्रा भत्ता, भरण-पोषण और मुफ़्त वकील पाने का, तथा आपको और आपके गवाहों को सुरक्षा।',
      },
      { en: 'Have the case tried by a Special Court set up for these offences.', hi: 'इन अपराधों के लिए बनी विशेष अदालत में सुनवाई कराने का।' },
    ],
    theyCannot: [
      { en: 'Deny you entry to a temple, shop, well, road, cremation ground or any public place.', hi: 'मंदिर, दुकान, कुएँ, सड़क, श्मशान या किसी सार्वजनिक स्थान में प्रवेश से रोकना।' },
      { en: 'Force you to do manual scavenging or to carry a carcass.', hi: 'हाथ से मैला ढोने या मृत पशु उठाने पर मजबूर करना।' },
      { en: 'Abuse you by caste name in a public place, or humiliate you in public view.', hi: 'सार्वजनिक स्थान पर जाति सूचक गाली देना, या सबके सामने अपमानित करना।' },
      { en: 'Occupy your land, obstruct your water source, or force you to leave your village.', hi: 'आपकी ज़मीन पर कब्ज़ा करना, जलस्रोत रोकना, या गाँव छोड़ने पर मजबूर करना।' },
    ],
    steps: [
      {
        en: 'Note the exact words used, the date, place and the names of everyone present. Caste-based abuse in public view is the core of the offence.',
        hi: 'कहे गए ठीक शब्द, तारीख, जगह और मौजूद सब लोगों के नाम नोट करें। सार्वजनिक रूप से जातिसूचक अपमान ही अपराध की जड़ है।',
      },
      {
        en: 'File the FIR mentioning the SC/ST (Prevention of Atrocities) Act, 1989 by name, and your caste certificate details.',
        hi: 'FIR में SC/ST (अत्याचार निवारण) अधिनियम, 1989 का नाम और अपने जाति प्रमाणपत्र का विवरण दर्ज कराएँ।',
      },
      {
        en: 'Apply to the District Social Welfare Officer for the relief amount — it is a right, not a favour, and does not wait for the trial.',
        hi: 'राहत राशि के लिए ज़िला समाज कल्याण अधिकारी को आवेदन दें — यह अधिकार है, एहसान नहीं, और मुकदमे का इंतज़ार नहीं करता।',
      },
      {
        en: 'If the police stall, go to the SP in writing, then to the Magistrate under Section 175(3) BNSS.',
        hi: 'पुलिस टालमटोल करे तो लिखित में SP के पास जाएँ, फिर BNSS की धारा 175(3) में मजिस्ट्रेट के पास।',
      },
      {
        en: 'Complain in parallel to the National Commission for Scheduled Castes (ncsc.nic.in) or Scheduled Tribes (ncst.gov.in).',
        hi: 'साथ ही राष्ट्रीय अनुसूचित जाति आयोग (ncsc.nic.in) या अनुसूचित जनजाति आयोग (ncst.gov.in) को शिकायत करें।',
      },
    ],
    laws: [
      { en: 'Constitution, Articles 15, 17 and 46', hi: 'संविधान, अनुच्छेद 15, 17 और 46' },
      { en: 'SC and ST (Prevention of Atrocities) Act, 1989', hi: 'अनुसूचित जाति और जनजाति (अत्याचार निवारण) अधिनियम, 1989' },
      { en: 'Protection of Civil Rights Act, 1955', hi: 'नागरिक अधिकार संरक्षण अधिनियम, 1955' },
      {
        en: 'Prohibition of Employment as Manual Scavengers Act, 2013',
        hi: 'हाथ से मैला उठाने वाले कर्मियों के नियोजन का प्रतिषेध अधिनियम, 2013',
      },
    ],
    helplines: ['112', '15100'],
    actions: ['fir', 'legal-aid', 'police-complaint'],
    acts: ['sc-st-act'],
  },

  {
    id: 'cyber',
    icon: '💳',
    title: { en: 'Online fraud, harassment or a fake profile', hi: 'ऑनलाइन धोखाधड़ी, उत्पीड़न या फ़र्ज़ी प्रोफ़ाइल' },
    summary: {
      en: 'For money lost online, the first hour matters more than anything else you will do afterwards.',
      hi: 'ऑनलाइन गया पैसा वापस पाने में पहला घंटा बाकी सब कुछ से ज़्यादा मायने रखता है।',
    },
    tags: [
      { en: 'Cyber', hi: 'साइबर' },
      { en: 'Fraud', hi: 'धोखाधड़ी' },
    ],
    youCan: [
      {
        en: 'Report on 1930 and get the fraudster’s account frozen before the money is withdrawn further.',
        hi: '1930 पर सूचना देकर ठग का खाता, पैसा आगे निकलने से पहले, रुकवाने का।',
      },
      {
        en: 'Get zero liability from your bank for an unauthorised electronic transaction if you report it within three working days.',
        hi: 'तीन कार्य दिवसों में सूचना देने पर अनधिकृत इलेक्ट्रॉनिक लेन-देन के लिए बैंक से शून्य देयता पाने का।',
      },
      {
        en: 'Complain anonymously about obscene content involving a woman or a child at cybercrime.gov.in.',
        hi: 'महिला या बच्चे से जुड़ी अश्लील सामग्री की गुमनाम शिकायत cybercrime.gov.in पर करने का।',
      },
      {
        en: 'Demand the removal of an intimate image shared without your consent — the platform must take it down quickly.',
        hi: 'बिना सहमति साझा की गई निजी तस्वीर हटवाने का — मंच को उसे शीघ्र हटाना होता है।',
      },
    ],
    theyCannot: [
      {
        en: 'Ask you for an OTP, PIN, CVV or a screen-sharing app. No bank, no police officer and no government office ever does.',
        hi: 'आपसे OTP, PIN, CVV या स्क्रीन शेयर करने वाला ऐप माँगना। कोई बैंक, पुलिस अधिकारी या सरकारी दफ़्तर ऐसा कभी नहीं करता।',
      },
      {
        en: 'Threaten you with a “digital arrest” over a video call. There is no such thing in Indian law.',
        hi: 'वीडियो कॉल पर “डिजिटल गिरफ़्तारी” की धमकी देना। भारतीय कानून में ऐसी कोई चीज़ है ही नहीं।',
      },
      {
        en: 'Publish your photo, morphed image or personal data without your consent.',
        hi: 'आपकी तस्वीर, छेड़छाड़ की गई छवि या निजी डेटा आपकी सहमति के बिना प्रकाशित करना।',
      },
    ],
    steps: [
      {
        en: 'Call 1930 immediately — before you call anyone else. Then file the same complaint at cybercrime.gov.in.',
        hi: 'तुरंत 1930 पर कॉल करें — किसी और को फ़ोन करने से पहले। फिर वही शिकायत cybercrime.gov.in पर दर्ज करें।',
      },
      {
        en: 'Inform your bank in writing and ask them to block the card or account and raise a chargeback.',
        hi: 'बैंक को लिखित सूचना दें और कार्ड या खाता ब्लॉक करने तथा चार्जबैक उठाने को कहें।',
      },
      {
        en: 'Take screenshots of everything — the message, the number, the UPI ID, the transaction reference — before you delete anything.',
        hi: 'कुछ भी हटाने से पहले हर चीज़ का स्क्रीनशॉट लें — संदेश, नंबर, UPI आईडी, लेन-देन संदर्भ।',
      },
      {
        en: 'Do not talk to the fraudster again, and do not pay a “release fee” to get your money back. That is the second half of the same scam.',
        hi: 'ठग से दोबारा बात न करें, और पैसा वापस पाने के लिए कोई “रिलीज़ शुल्क” न दें। यह उसी ठगी का दूसरा हिस्सा है।',
      },
      {
        en: 'Get the acknowledgement number and follow up. An FIR follows from the online complaint.',
        hi: 'पावती संख्या लें और पैरवी करते रहें। ऑनलाइन शिकायत से ही FIR बनती है।',
      },
    ],
    laws: [
      { en: 'Information Technology Act, 2000 — Sections 43, 66, 66C, 66D, 66E and 67', hi: 'सूचना प्रौद्योगिकी अधिनियम, 2000 — धारा 43, 66, 66C, 66D, 66E और 67' },
      { en: 'BNS 2023, Sections 318 and 319 (earlier IPC 420 and 416)', hi: 'BNS 2023, धारा 318 और 319 (पहले IPC 420 और 416)' },
      { en: 'RBI circular on limited liability of customers in unauthorised transactions', hi: 'अनधिकृत लेन-देन में ग्राहक की सीमित देयता पर आरबीआई परिपत्र' },
    ],
    helplines: ['1930', '112'],
    actions: ['fir', 'grievance'],
    acts: ['it-act'],
  },

  {
    id: 'traffic',
    icon: '🛵',
    title: { en: 'Stopped by the traffic police', hi: 'यातायात पुलिस रोके' },
    summary: {
      en: 'Know what an officer may check, what they may seize, and why you should never hand over cash at the roadside.',
      hi: 'जानें कि अधिकारी क्या जाँच सकता है, क्या ज़ब्त कर सकता है, और सड़क किनारे नकद क्यों कभी न दें।',
    },
    tags: [
      { en: 'Traffic', hi: 'यातायात' },
      { en: 'Vehicle', hi: 'वाहन' },
    ],
    youCan: [
      { en: 'Ask to see the officer’s identity card if they are not in uniform with a name plate.', hi: 'अधिकारी वर्दी और नामपट्टिका में न हो तो उनका पहचान पत्र देखने का।' },
      {
        en: 'Show your licence, registration, insurance and pollution certificate on your phone through DigiLocker or mParivahan — digital copies are legally valid.',
        hi: 'लाइसेंस, पंजीकरण, बीमा और प्रदूषण प्रमाणपत्र डिजिलॉकर या एमपरिवहन के ज़रिए फ़ोन पर दिखाने का — डिजिटल प्रतियाँ कानूनन मान्य हैं।',
      },
      { en: 'Insist on a proper challan receipt or an e-challan for any fine.', hi: 'किसी भी जुर्माने पर सही चालान रसीद या ई-चालान की माँग करने का।' },
      { en: 'Refuse to pay cash on the spot and choose to pay the challan online or in court instead.', hi: 'मौके पर नकद देने से इनकार करने और चालान ऑनलाइन या अदालत में भरने का।' },
      { en: 'Record the interaction on your phone. Filming a public official doing public duty is not an offence.', hi: 'बातचीत को फ़ोन में रिकॉर्ड करने का। सार्वजनिक कर्तव्य निभाते लोक सेवक की रिकॉर्डिंग अपराध नहीं है।' },
    ],
    theyCannot: [
      { en: 'Take the keys out of your vehicle, deflate your tyres, or damage the vehicle.', hi: 'आपके वाहन की चाबी निकालना, टायर की हवा निकालना, या वाहन को नुकसान पहुँचाना।' },
      { en: 'Seize your vehicle except in the specific cases the law permits.', hi: 'कानून में तय विशेष मामलों के अलावा आपका वाहन ज़ब्त करना।' },
      {
        en: 'Demand a fine in cash without a receipt. Only an officer of Assistant Sub-Inspector rank or above may collect a fine on the spot.',
        hi: 'बिना रसीद नकद जुर्माना माँगना। मौके पर जुर्माना केवल सहायक उप निरीक्षक या उससे ऊपर का अधिकारी ही ले सकता है।',
      },
      { en: 'Arrest you for an ordinary traffic offence that is compoundable.', hi: 'सामान्य समझौता योग्य यातायात अपराध पर आपको गिरफ़्तार करना।' },
      {
        en: 'Let an illegal modification pass — a loud exhaust, bull bars, extra lamps or dark window film can be fined and stripped off on the spot, so do not fit them in the first place.',
        hi: 'अवैध मॉडिफ़िकेशन को छोड़ देना — तेज़ आवाज़ वाला एग्ज़ॉस्ट, बुल बार, अतिरिक्त लाइटें या गहरी फ़िल्म पर जुर्माना लगता है और मौके पर ही हटा दी जाती है, इसलिए इन्हें लगवाएँ ही नहीं।',
      },
    ],
    steps: [
      { en: 'Pull over safely, stay in the vehicle if asked, and be courteous. Arguing costs more time than the challan.', hi: 'सुरक्षित जगह रोकें, कहा जाए तो वाहन में ही रहें, और शिष्ट रहें। बहस चालान से ज़्यादा समय ले लेती है।' },
      { en: 'Show the documents, digital or physical. Only the driving licence must be produced in original if demanded by law.', hi: 'दस्तावेज़ दिखाएँ, डिजिटल या भौतिक। कानूनन माँगे जाने पर केवल ड्राइविंग लाइसेंस मूल रूप में देना होता है।' },
      { en: 'If a fine is due, ask for the e-challan on your phone number and pay it online later.', hi: 'जुर्माना बनता हो तो अपने मोबाइल नंबर पर ई-चालान माँगें और बाद में ऑनलाइन भरें।' },
      {
        en: 'If a bribe is demanded, note the officer’s name and number, and complain to the Anti-Corruption Bureau on 1064 or to the Traffic Police control room.',
        hi: 'रिश्वत माँगी जाए तो अधिकारी का नाम और नंबर नोट करें, और 1064 पर भ्रष्टाचार निरोधक ब्यूरो या यातायात पुलिस नियंत्रण कक्ष को शिकायत करें।',
      },
      { en: 'Disputed challans can be contested before the court mentioned on the challan itself.', hi: 'विवादित चालान को उसी चालान पर लिखी अदालत के सामने चुनौती दी जा सकती है।' },
    ],
    laws: [
      { en: 'Motor Vehicles Act, 1988 (as amended in 2019) — Sections 130, 158 and 206', hi: 'मोटर यान अधिनियम, 1988 (2019 में संशोधित) — धारा 130, 158 और 206' },
      { en: 'Information Technology Act, 2000 — digital documents are valid', hi: 'सूचना प्रौद्योगिकी अधिनियम, 2000 — डिजिटल दस्तावेज़ मान्य हैं' },
    ],
    helplines: ['112', '1064'],
    actions: ['police-complaint', 'grievance'],
    acts: ['motor-vehicles'],
  },

  {
    id: 'bribe',
    icon: '💰',
    title: { en: 'When an official demands a bribe', hi: 'जब कोई अधिकारी रिश्वत माँगे' },
    summary: {
      en: 'A demand for a bribe is an offence the moment it is made — you do not have to pay first to complain.',
      hi: 'रिश्वत की माँग होते ही अपराध बन जाती है — शिकायत के लिए पहले पैसा देना ज़रूरी नहीं।',
    },
    tags: [
      { en: 'Corruption', hi: 'भ्रष्टाचार' },
      { en: 'Government', hi: 'सरकार' },
    ],
    youCan: [
      { en: 'Insist on a receipt for any fee, and on being told the official rate.', hi: 'किसी भी शुल्क की रसीद माँगने का, और सरकारी दर बताए जाने का।' },
      {
        en: 'File an RTI asking why your file is pending, who is handling it, and what the timeline is. This alone often clears the file.',
        hi: 'RTI दायर करने का कि आपकी फ़ाइल क्यों लंबित है, कौन देख रहा है, और समयसीमा क्या है। अक्सर इतने भर से फ़ाइल आगे बढ़ जाती है।',
      },
      {
        en: 'Use your State’s Right to Public Services Act — most States fix a deadline for common services and a penalty on the officer for delay.',
        hi: 'अपने राज्य के लोक सेवा गारंटी अधिनियम का उपयोग करने का — अधिकांश राज्यों में आम सेवाओं की समयसीमा और देरी पर अधिकारी पर जुर्माना तय है।',
      },
      { en: 'Record the demand. A recording made by a person who is part of the conversation is generally admissible.', hi: 'माँग को रिकॉर्ड करने का। बातचीत में शामिल व्यक्ति द्वारा की गई रिकॉर्डिंग आमतौर पर स्वीकार्य होती है।' },
    ],
    theyCannot: [
      { en: 'Charge you anything beyond the notified official fee.', hi: 'अधिसूचित सरकारी शुल्क से अधिक कुछ भी वसूलना।' },
      { en: 'Sit on your application indefinitely without giving reasons in writing.', hi: 'लिखित कारण दिए बिना आपके आवेदन को अनिश्चितकाल तक दबाए रखना।' },
      { en: 'Punish you for refusing to pay, or for having complained.', hi: 'देने से इनकार करने या शिकायत करने पर आपको परेशान करना।' },
    ],
    steps: [
      {
        en: 'Do not pay. Instead call the Anti-Corruption Bureau on 1064 or the Central Vigilance Commission and tell them the demand has been made.',
        hi: 'पैसे न दें। इसके बजाय 1064 पर भ्रष्टाचार निरोधक ब्यूरो या केंद्रीय सतर्कता आयोग को कॉल कर बताएँ कि माँग की गई है।',
      },
      {
        en: 'They will usually arrange a trap — go along with it, and do not touch the treated notes they give you until instructed.',
        hi: 'वे आमतौर पर ट्रैप की व्यवस्था करते हैं — उसका साथ दें, और दिए गए रासायनिक लगे नोटों को निर्देश मिलने तक न छुएँ।',
      },
      {
        en: 'File a written complaint to the head of the department, and on CPGRAMS at pgportal.gov.in, so a record exists.',
        hi: 'विभाग प्रमुख को लिखित शिकायत करें, और pgportal.gov.in (CPGRAMS) पर भी, ताकि रिकॉर्ड बन जाए।',
      },
      {
        en: 'For a bribe demanded by the police, complain to the SP, the Police Complaints Authority of your State, and the State Human Rights Commission.',
        hi: 'पुलिस द्वारा रिश्वत माँगने पर SP, अपने राज्य के पुलिस शिकायत प्राधिकरण, और राज्य मानवाधिकार आयोग को शिकायत करें।',
      },
    ],
    laws: [
      { en: 'Prevention of Corruption Act, 1988 (as amended in 2018)', hi: 'भ्रष्टाचार निवारण अधिनियम, 1988 (2018 में संशोधित)' },
      { en: 'Right to Information Act, 2005', hi: 'सूचना का अधिकार अधिनियम, 2005' },
      { en: 'State Right to Public Services Acts', hi: 'राज्यों के लोक सेवा गारंटी अधिनियम' },
    ],
    helplines: ['1064'],
    actions: ['rti', 'grievance', 'police-complaint'],
    acts: ['pc-act', 'rti'],
  },

  {
    id: 'disability',
    icon: '♿',
    title: { en: 'Rights of persons with disabilities', hi: 'दिव्यांगजन के अधिकार' },
    summary: {
      en: 'Twenty-one recognised disabilities, reservation in jobs and education, and a legal right to accessible public spaces.',
      hi: 'इक्कीस मान्यता प्राप्त दिव्यांगताएँ, नौकरी और शिक्षा में आरक्षण, और सुलभ सार्वजनिक स्थानों का कानूनी अधिकार।',
    },
    tags: [
      { en: 'Disability', hi: 'दिव्यांगता' },
      { en: 'RPwD Act', hi: 'RPwD अधिनियम' },
    ],
    youCan: [
      {
        en: 'Get a Unique Disability ID certificate free of cost through swavlambancard.gov.in — it works across the country.',
        hi: 'swavlambancard.gov.in से नि:शुल्क UDID दिव्यांगता प्रमाणपत्र पाने का — यह पूरे देश में मान्य है।',
      },
      { en: 'Claim 4% reservation in government jobs and 5% in higher education institutions.', hi: 'सरकारी नौकरियों में 4% और उच्च शिक्षा संस्थानों में 5% आरक्षण का दावा करने का।' },
      { en: 'Get free education from 6 to 18 years in a neighbourhood school for a child with benchmark disability.', hi: 'बेंचमार्क दिव्यांगता वाले बच्चे के लिए 6 से 18 वर्ष तक पड़ोस के स्कूल में नि:शुल्क शिक्षा पाने का।' },
      {
        en: 'Ask for reasonable accommodation at work — a change of duties, assistive devices, flexible hours — and for a scribe and extra time in exams.',
        hi: 'काम में उचित सुविधा माँगने का — कार्यों में बदलाव, सहायक उपकरण, लचीले घंटे — और परीक्षा में लेखक तथा अतिरिक्त समय।',
      },
      { en: 'Use accessible transport, buildings, websites and toilets — accessibility is a legal obligation, not a courtesy.', hi: 'सुलभ परिवहन, भवन, वेबसाइट और शौचालय का उपयोग करने का — सुलभता कानूनी दायित्व है, शिष्टाचार नहीं।' },
    ],
    theyCannot: [
      { en: 'Refuse a job, promotion or admission because of your disability.', hi: 'दिव्यांगता के कारण नौकरी, पदोन्नति या प्रवेश देने से मना करना।' },
      { en: 'Reduce your rank or salary if you acquire a disability during service.', hi: 'सेवा के दौरान दिव्यांगता होने पर आपका पद या वेतन घटाना।' },
      { en: 'Refuse to carry you or your assistive device on public transport.', hi: 'सार्वजनिक परिवहन में आपको या आपके सहायक उपकरण को ले जाने से मना करना।' },
      { en: 'Insult, humiliate or exploit a person with a disability — that is a punishable offence.', hi: 'दिव्यांग व्यक्ति का अपमान, तिरस्कार या शोषण करना — यह दंडनीय अपराध है।' },
    ],
    steps: [
      { en: 'Get the UDID card first. Almost every other right runs through it.', hi: 'पहले UDID कार्ड बनवाएँ। लगभग हर दूसरा अधिकार इसी से चलता है।' },
      {
        en: 'Complain in writing to the head of the office or institution, quoting the RPwD Act, 2016 and the exact section.',
        hi: 'कार्यालय या संस्था प्रमुख को RPwD अधिनियम, 2016 और सटीक धारा का हवाला देकर लिखित शिकायत करें।',
      },
      {
        en: 'Take it to the State Commissioner for Persons with Disabilities, or to the Chief Commissioner at ccdisabilities.nic.in — they have the powers of a civil court.',
        hi: 'राज्य दिव्यांगजन आयुक्त, या ccdisabilities.nic.in पर मुख्य आयुक्त तक ले जाएँ — उनके पास सिविल कोर्ट की शक्तियाँ हैं।',
      },
      { en: 'For a denied job or seat, a writ petition under Article 226 is effective and legal aid is free.', hi: 'नौकरी या सीट से इनकार पर अनुच्छेद 226 की रिट याचिका कारगर है और कानूनी सहायता नि:शुल्क।' },
    ],
    laws: [
      { en: 'Rights of Persons with Disabilities Act, 2016', hi: 'दिव्यांगजन अधिकार अधिनियम, 2016' },
      { en: 'Constitution, Articles 14, 15, 21 and 41', hi: 'संविधान, अनुच्छेद 14, 15, 21 और 41' },
    ],
    helplines: ['15100'],
    actions: ['grievance', 'writ', 'legal-aid'],
    acts: ['rpwd'],
  },

  {
    id: 'senior',
    icon: '👴',
    title: { en: 'Rights of senior citizens and parents', hi: 'वरिष्ठ नागरिकों और माता-पिता के अधिकार' },
    summary: {
      en: 'Parents can claim maintenance from their children through a simple tribunal — no lawyer, no court fee, decided in ninety days.',
      hi: 'माता-पिता एक सरल अधिकरण के ज़रिए बच्चों से भरण-पोषण माँग सकते हैं — न वकील, न न्यायालय शुल्क, नब्बे दिन में फ़ैसला।',
    },
    tags: [
      { en: 'Senior citizens', hi: 'वरिष्ठ नागरिक' },
      { en: 'Maintenance', hi: 'भरण-पोषण' },
    ],
    youCan: [
      {
        en: 'Claim monthly maintenance from your children or, if childless, from the relatives who will inherit your property.',
        hi: 'अपने बच्चों से, और संतान न हो तो संपत्ति के उत्तराधिकारी रिश्तेदारों से, मासिक भरण-पोषण माँगने का।',
      },
      {
        en: 'Apply to the Maintenance Tribunal in your sub-division without a lawyer. The application must be decided within 90 days.',
        hi: 'अपने उपखंड के भरण-पोषण अधिकरण में बिना वकील आवेदन करने का। आवेदन 90 दिन में तय होना चाहिए।',
      },
      {
        en: 'Get a gift or transfer of your property cancelled if it was made on the promise of care and that promise was broken.',
        hi: 'देखभाल के वादे पर की गई संपत्ति की गिफ़्ट या हस्तांतरण रद्द कराने का, अगर वह वादा तोड़ दिया गया।',
      },
      {
        en: 'Get your children evicted from your own house if they harass you — tribunals and High Courts have ordered this.',
        hi: 'बच्चे परेशान करें तो उन्हें अपने घर से बेदखल कराने का — अधिकरणों और उच्च न्यायालयों ने ऐसे आदेश दिए हैं।',
      },
      { en: 'Get priority in hospitals, reserved seats in transport, and separate queues at counters.', hi: 'अस्पतालों में प्राथमिकता, परिवहन में आरक्षित सीटें, और काउंटरों पर अलग कतार पाने का।' },
    ],
    theyCannot: [
      { en: 'Abandon a senior citizen. Abandonment is a punishable offence.', hi: 'किसी वरिष्ठ नागरिक को छोड़ देना। परित्याग दंडनीय अपराध है।' },
      { en: 'Take your pension, property papers or bank card away from you.', hi: 'आपकी पेंशन, संपत्ति के कागज़ या बैंक कार्ड आपसे ले लेना।' },
      { en: 'Force you out of a house you own or have a right to live in.', hi: 'जिस घर के आप मालिक हैं या जहाँ रहने का अधिकार है, वहाँ से आपको निकालना।' },
    ],
    steps: [
      { en: 'Call 14567 (Elderline) — they help with the application and follow it up for you, free.', hi: '14567 (एल्डरलाइन) पर कॉल करें — वे आवेदन में मदद करते हैं और आपके लिए पैरवी भी, नि:शुल्क।' },
      {
        en: 'Write a plain application to the Maintenance Tribunal (usually the SDM) stating your income, needs and your children’s means.',
        hi: 'भरण-पोषण अधिकरण (आमतौर पर SDM) को सादा आवेदन लिखें जिसमें अपनी आय, ज़रूरतें और बच्चों की हैसियत बताएँ।',
      },
      { en: 'Attach proof: Aadhaar, medical bills, property papers and any evidence of neglect.', hi: 'सबूत लगाएँ: आधार, चिकित्सा बिल, संपत्ति के कागज़ और उपेक्षा का कोई भी प्रमाण।' },
      { en: 'If the order is not obeyed, the tribunal can recover the amount as arrears of land revenue and order imprisonment.', hi: 'आदेश न माना जाए तो अधिकरण राशि को भू-राजस्व बकाया की तरह वसूल सकता है और कारावास का आदेश दे सकता है।' },
    ],
    laws: [
      {
        en: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
        hi: 'माता-पिता और वरिष्ठ नागरिकों का भरण-पोषण तथा कल्याण अधिनियम, 2007',
      },
      { en: 'BNSS 2023, Section 144 (earlier CrPC 125) — maintenance', hi: 'BNSS 2023, धारा 144 (पहले CrPC 125) — भरण-पोषण' },
      { en: 'Constitution, Article 41', hi: 'संविधान, अनुच्छेद 41' },
    ],
    helplines: ['14567', '15100'],
    actions: ['legal-aid', 'grievance'],
    acts: ['senior-citizens'],
  },

  {
    id: 'health',
    icon: '🏥',
    title: { en: 'At the hospital', hi: 'अस्पताल में' },
    summary: {
      en: 'Emergency treatment cannot be refused, and the person who brings an accident victim in cannot be harassed.',
      hi: 'आपातकालीन इलाज से मना नहीं किया जा सकता, और दुर्घटना के घायल को लाने वाले को परेशान नहीं किया जा सकता।',
    },
    tags: [
      { en: 'Health', hi: 'स्वास्थ्य' },
      { en: 'Article 21', hi: 'अनुच्छेद 21' },
    ],
    youCan: [
      {
        en: 'Get emergency treatment at any hospital, government or private, before any question of money or paperwork.',
        hi: 'किसी भी अस्पताल — सरकारी या निजी — में पैसे या कागज़ के किसी सवाल से पहले आपातकालीन इलाज पाने का।',
      },
      { en: 'Be told your diagnosis and the cost, and to give or refuse informed consent before any procedure.', hi: 'अपनी बीमारी और खर्च जानने का, और किसी भी प्रक्रिया से पहले सूचित सहमति देने या मना करने का।' },
      { en: 'Get a copy of your case papers and discharge summary — within 24 hours of asking in most States.', hi: 'अपने केस पेपर और डिस्चार्ज सारांश की प्रति पाने का — अधिकांश राज्यों में माँगने के 24 घंटे में।' },
      { en: 'Get a second opinion, and to have a woman present during an examination of a woman patient.', hi: 'दूसरी राय लेने का, और महिला रोगी की जाँच के दौरान किसी महिला की मौजूदगी का।' },
      {
        en: 'Bring an accident victim to hospital as a Good Samaritan without being detained, questioned repeatedly or made to pay.',
        hi: 'नेक व्यक्ति (गुड सेमेरिटन) के रूप में दुर्घटना के घायल को अस्पताल लाने का, बिना रोके जाने, बार-बार पूछताछ या भुगतान के।',
      },
    ],
    theyCannot: [
      { en: 'Refuse or delay emergency care for want of money, an ID or a police clearance.', hi: 'पैसे, पहचान पत्र या पुलिस की अनुमति न होने के कारण आपातकालीन इलाज से मना करना या टालना।' },
      { en: 'Detain a patient or a body for non-payment of the bill.', hi: 'बिल न चुकाने पर रोगी या शव को रोक रखना।' },
      { en: 'Refuse you your own medical records.', hi: 'आपको आपके अपने चिकित्सा अभिलेख देने से मना करना।' },
      { en: 'Conduct a test or procedure on you without your consent.', hi: 'आपकी सहमति के बिना कोई जाँच या प्रक्रिया करना।' },
    ],
    steps: [
      { en: 'Ask for the refusal in writing, or note the name of the doctor and the time.', hi: 'इनकार लिखित में माँगें, या डॉक्टर का नाम और समय नोट करें।' },
      { en: 'Call 112 or the State health helpline 104 and report the refusal while you are still there.', hi: '112 या राज्य स्वास्थ्य हेल्पलाइन 104 पर कॉल करें और वहीं रहते हुए इनकार की सूचना दें।' },
      {
        en: 'Complain to the Chief Medical Officer of the district and to the State Medical Council against the doctor.',
        hi: 'ज़िले के मुख्य चिकित्सा अधिकारी को और डॉक्टर के विरुद्ध राज्य चिकित्सा परिषद को शिकायत करें।',
      },
      {
        en: 'For overcharging, wrong treatment or negligence, a consumer complaint is usually faster than a civil suit.',
        hi: 'अधिक शुल्क, गलत इलाज या लापरवाही पर उपभोक्ता शिकायत आमतौर पर दीवानी वाद से तेज़ होती है।',
      },
    ],
    laws: [
      { en: 'Constitution, Article 21 — the right to health', hi: 'संविधान, अनुच्छेद 21 — स्वास्थ्य का अधिकार' },
      {
        en: 'Parmanand Katara v. Union of India (1989) — no hospital may refuse emergency care',
        hi: 'परमानंद कटारा बनाम भारत संघ (1989) — कोई अस्पताल आपातकालीन इलाज से मना नहीं कर सकता',
      },
      { en: 'Good Samaritan guidelines under the Motor Vehicles Act, 1988', hi: 'मोटर यान अधिनियम, 1988 के तहत गुड सेमेरिटन दिशानिर्देश' },
      { en: 'Consumer Protection Act, 2019 — medical negligence', hi: 'उपभोक्ता संरक्षण अधिनियम, 2019 — चिकित्सा लापरवाही' },
    ],
    helplines: ['112', '108'],
    actions: ['consumer', 'grievance'],
    acts: ['consumer', 'motor-vehicles'],
  },
];

export const SITUATION_BY_ID: Record<string, Situation> = Object.fromEntries(SITUATIONS.map((s) => [s.id, s]));
