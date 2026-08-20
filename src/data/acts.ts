import type { Act } from '../types';

/**
 * The Acts of Parliament that turn a constitutional right into something you can
 * actually enforce. Article 21 is a promise; the BNSS is how you cash it.
 *
 * Each entry answers the four things people ask: what does it do, who does it
 * protect, what does it actually say, and how do I use it.
 */
export const ACTS: Act[] = [
  /* ---------------- criminal ---------------- */
  {
    id: 'bns',
    icon: '⚖️',
    short: { en: 'BNS', hi: 'बीएनएस' },
    name: { en: 'Bharatiya Nyaya Sanhita', hi: 'भारतीय न्याय संहिता' },
    year: '2023',
    category: 'criminal',
    what: {
      en: 'India’s main criminal code — it defines what counts as a crime and what the punishment is.',
      hi: 'भारत की मुख्य दंड संहिता — यह तय करती है कि अपराध क्या है और उसकी सज़ा क्या है।',
    },
    replaces: {
      en: 'Replaced the Indian Penal Code, 1860 on 1 July 2024. Offences before that date are still tried under the IPC.',
      hi: '1 जुलाई 2024 को भारतीय दंड संहिता, 1860 की जगह ली। उस तारीख से पहले के अपराधों पर अब भी IPC लागू होती है।',
    },
    whoItProtects: { en: 'Everyone in India', hi: 'भारत में हर व्यक्ति' },
    keyPoints: [
      {
        en: 'Section 63–64 — rape and its punishment. Section 65 makes rape of a girl under 16 punishable with at least 20 years.',
        hi: 'धारा 63–64 — बलात्कार और उसकी सज़ा। धारा 65 में 16 वर्ष से कम आयु की बालिका से बलात्कार पर कम से कम 20 वर्ष की सज़ा।',
      },
      {
        en: 'Section 85 — cruelty by a husband or his relatives, the provision most people still call 498A.',
        hi: 'धारा 85 — पति या उसके परिजनों द्वारा क्रूरता, वही प्रावधान जिसे लोग अब भी 498A कहते हैं।',
      },
      {
        en: 'Section 103(2) — mob lynching is now a named offence, punishable by death or life imprisonment.',
        hi: 'धारा 103(2) — भीड़ द्वारा हत्या अब एक अलग नामित अपराध है, जिसकी सज़ा मृत्युदंड या आजीवन कारावास है।',
      },
      {
        en: 'Section 111 and 113 — organised crime and terrorism are defined in the general criminal law for the first time.',
        hi: 'धारा 111 और 113 — संगठित अपराध और आतंकवाद को पहली बार सामान्य दंड कानून में परिभाषित किया गया।',
      },
      {
        en: 'Section 69 — sexual intercourse obtained by a false promise of marriage or a concealed identity is a distinct offence.',
        hi: 'धारा 69 — विवाह का झूठा वादा करके या पहचान छिपाकर बनाया गया शारीरिक संबंध अब अलग अपराध है।',
      },
      {
        en: 'Community service appears as a punishment for the first time, for small offences like petty theft and public drunkenness.',
        hi: 'छोटे अपराधों — जैसे मामूली चोरी और सार्वजनिक नशा — के लिए पहली बार सामुदायिक सेवा को सज़ा के रूप में रखा गया।',
      },
    ],
    useIt: [
      {
        en: 'You do not cite the BNS yourself — the police apply it. But knowing the section on your FIR tells you how serious the case is.',
        hi: 'BNS का हवाला आप स्वयं नहीं देते — पुलिस लगाती है। पर अपनी FIR की धारा जानने से पता चलता है कि मामला कितना गंभीर है।',
      },
      {
        en: 'Ask for the sections applied when you collect your free copy of the FIR, and check them against the guides here.',
        hi: 'FIR की नि:शुल्क प्रति लेते समय लगाई गई धाराएँ पूछें, और उन्हें यहाँ दी गई गाइड से मिलाएँ।',
      },
    ],
    situations: ['arrest', 'women', 'caste'],
    actions: ['fir'],
  },
  {
    id: 'bnss',
    icon: '📋',
    short: { en: 'BNSS', hi: 'बीएनएसएस' },
    name: { en: 'Bharatiya Nagarik Suraksha Sanhita', hi: 'भारतीय नागरिक सुरक्षा संहिता' },
    year: '2023',
    category: 'criminal',
    what: {
      en: 'The procedure code — how an FIR is registered, how you are arrested, how bail works and how a trial runs.',
      hi: 'प्रक्रिया संहिता — FIR कैसे दर्ज होती है, गिरफ़्तारी कैसे होती है, ज़मानत कैसे मिलती है और मुकदमा कैसे चलता है।',
    },
    replaces: {
      en: 'Replaced the Code of Criminal Procedure, 1973 on 1 July 2024.',
      hi: '1 जुलाई 2024 को दंड प्रक्रिया संहिता, 1973 की जगह ली।',
    },
    whoItProtects: {
      en: 'Anyone reporting a crime, and anyone accused of one',
      hi: 'अपराध की सूचना देने वाला हर व्यक्ति, और आरोपी भी',
    },
    keyPoints: [
      {
        en: 'Section 173 — a Zero FIR can be registered at any police station regardless of where the offence happened. This is now written into the law, not merely a court direction.',
        hi: 'धारा 173 — अपराध कहीं भी हुआ हो, ज़ीरो FIR किसी भी थाने में दर्ज हो सकती है। यह अब कानून में लिखा है, केवल अदालती निर्देश नहीं।',
      },
      {
        en: 'Section 173(4) — if the station refuses, send the complaint to the Superintendent of Police. Section 175(3) then lets you go to the Magistrate.',
        hi: 'धारा 173(4) — थाना मना करे तो शिकायत पुलिस अधीक्षक को भेजें। फिर धारा 175(3) से मजिस्ट्रेट के पास जा सकते हैं।',
      },
      {
        en: 'Section 58 — you must be produced before a magistrate within 24 hours of arrest, travel time excluded.',
        hi: 'धारा 58 — गिरफ़्तारी के 24 घंटे के भीतर मजिस्ट्रेट के सामने पेशी अनिवार्य, यात्रा का समय छोड़कर।',
      },
      {
        en: 'The police must inform the complainant of the progress of the investigation within 90 days.',
        hi: 'पुलिस को 90 दिन के भीतर शिकायतकर्ता को जाँच की प्रगति बतानी होगी।',
      },
      {
        en: 'Forensic examination of the scene is compulsory for offences carrying seven years or more.',
        hi: 'सात वर्ष या उससे अधिक सज़ा वाले अपराधों में घटनास्थल की फ़ोरेंसिक जाँच अनिवार्य है।',
      },
      {
        en: 'Judgment must be delivered within 45 days of the trial ending, and charges framed within 60 days of the first hearing.',
        hi: 'सुनवाई समाप्त होने के 45 दिन में फ़ैसला, और पहली सुनवाई के 60 दिन में आरोप तय होने चाहिए।',
      },
    ],
    useIt: [
      {
        en: 'Quote Section 173 by name if a station tells you the offence is "not our area". Jurisdiction is their problem, not yours.',
        hi: 'थाना कहे कि “यह हमारा इलाका नहीं”, तो धारा 173 का नाम लेकर कहें। अधिकार क्षेत्र उनकी समस्या है, आपकी नहीं।',
      },
      {
        en: 'If 24 hours pass without a magistrate, that detention is illegal — tell the magistrate, and consider a habeas corpus petition.',
        hi: '24 घंटे बीत जाएँ और मजिस्ट्रेट के सामने पेशी न हो तो वह हिरासत अवैध है — मजिस्ट्रेट को बताएँ, और बंदी प्रत्यक्षीकरण याचिका पर विचार करें।',
      },
    ],
    situations: ['arrest', 'fir-refused'],
    actions: ['fir', 'police-complaint', 'writ'],
  },

  /* ---------------- transparency ---------------- */
  {
    id: 'rti',
    icon: '🔍',
    short: { en: 'RTI Act', hi: 'आरटीआई अधिनियम' },
    name: { en: 'Right to Information Act', hi: 'सूचना का अधिकार अधिनियम' },
    year: '2005',
    category: 'transparency',
    what: {
      en: 'Lets any citizen demand records, files and reasons from any government body — and forces an answer in thirty days.',
      hi: 'किसी भी नागरिक को किसी भी सरकारी निकाय से रिकॉर्ड, फ़ाइल और कारण माँगने का हक़ देता है — और तीस दिन में जवाब दिलाता है।',
    },
    whoItProtects: { en: 'Every citizen of India', hi: 'भारत का हर नागरिक' },
    keyPoints: [
      {
        en: 'Section 6 — you need not give any reason for wanting the information. Asking is enough.',
        hi: 'धारा 6 — सूचना क्यों चाहिए, इसका कोई कारण बताना ज़रूरी नहीं। माँगना ही काफ़ी है।',
      },
      {
        en: 'Section 7 — reply within 30 days, or within 48 hours where a person’s life or liberty is involved.',
        hi: 'धारा 7 — 30 दिन में उत्तर, और जहाँ किसी के जीवन या स्वतंत्रता का प्रश्न हो वहाँ 48 घंटे में।',
      },
      {
        en: 'The fee is ₹10, and nothing at all for a person below the poverty line. Both appeals are free.',
        hi: 'शुल्क ₹10 है, और गरीबी रेखा से नीचे के व्यक्ति के लिए कुछ भी नहीं। दोनों अपीलें नि:शुल्क हैं।',
      },
      {
        en: 'Section 8 lists the only grounds for refusal — and even those must give way where the public interest is greater.',
        hi: 'धारा 8 में इनकार के केवल तय आधार हैं — और वे भी तब हट जाते हैं जब जनहित बड़ा हो।',
      },
      {
        en: 'Section 20 — an officer who refuses without cause or delays can be fined ₹250 a day, up to ₹25,000, from their own pocket.',
        hi: 'धारा 20 — बिना कारण इनकार या देरी करने वाले अधिकारी पर ₹250 प्रतिदिन, अधिकतम ₹25,000 तक का जुर्माना, उनकी अपनी जेब से।',
      },
      {
        en: 'Silence for 30 days counts as a refusal, so you can appeal straight away.',
        hi: '30 दिन की चुप्पी इनकार मानी जाती है, इसलिए आप सीधे अपील कर सकते हैं।',
      },
    ],
    useIt: [
      {
        en: 'Ask for documents, dates and file notings — never for opinions. "Why was my file delayed?" gets refused; "give me the daily movement of file no. X" gets answered.',
        hi: 'दस्तावेज़, तारीखें और फ़ाइल नोटिंग माँगें — राय कभी नहीं। “मेरी फ़ाइल क्यों रुकी?” अस्वीकार होता है; “फ़ाइल संख्या X की दैनिक गतिविधि दें” का जवाब मिलता है।',
      },
      {
        en: 'An RTI asking what action was taken on a complaint moves files faster than the complaint itself.',
        hi: 'शिकायत पर क्या कार्रवाई हुई — यह पूछने वाली RTI, शिकायत से भी तेज़ी से फ़ाइल आगे बढ़ाती है।',
      },
    ],
    situations: ['bribe'],
    actions: ['rti', 'grievance'],
  },
  {
    id: 'legal-services',
    icon: '🤝',
    short: { en: 'Legal Services Act', hi: 'विधिक सेवा अधिनियम' },
    name: { en: 'Legal Services Authorities Act', hi: 'विधिक सेवा प्राधिकरण अधिनियम' },
    year: '1987',
    category: 'transparency',
    what: {
      en: 'Gives a free lawyer, free court fees and free paperwork to anyone who qualifies — and creates the Lok Adalat.',
      hi: 'पात्र व्यक्ति को मुफ़्त वकील, मुफ़्त न्यायालय शुल्क और मुफ़्त कागज़ी कार्रवाई देता है — और लोक अदालत की व्यवस्था करता है।',
    },
    whoItProtects: {
      en: 'Every woman and child, every SC/ST person, persons with disabilities, industrial workmen, victims of trafficking or disaster, anyone in custody, and anyone with a low income',
      hi: 'हर महिला और बच्चा, हर SC/ST व्यक्ति, दिव्यांगजन, औद्योगिक कामगार, तस्करी या आपदा के पीड़ित, हिरासत में कोई भी, और कम आय वाला हर व्यक्ति',
    },
    keyPoints: [
      {
        en: 'Section 12 — a woman or a child qualifies whatever her income. This is the most under-used provision in Indian law.',
        hi: 'धारा 12 — महिला या बच्चा अपनी आय चाहे जो हो, पात्र है। यह भारतीय कानून का सबसे कम इस्तेमाल होने वाला प्रावधान है।',
      },
      {
        en: 'It carries out Article 39A, which says justice must not be denied to anyone because of poverty.',
        hi: 'यह अनुच्छेद 39A को लागू करता है, जो कहता है कि गरीबी के कारण किसी को न्याय से वंचित नहीं किया जाएगा।',
      },
      {
        en: 'A Lok Adalat settles a compromise-able case in a single day. Its award is final, binding, and cannot be appealed.',
        hi: 'लोक अदालत समझौते योग्य मामला एक ही दिन में निपटा देती है। उसका फ़ैसला अंतिम, बाध्यकारी होता है और उस पर अपील नहीं होती।',
      },
      {
        en: 'Court fee already paid is refunded in full when a matter is settled at a Lok Adalat.',
        hi: 'लोक अदालत में मामला निपटने पर पहले भरा गया न्यायालय शुल्क पूरा वापस मिल जाता है।',
      },
      {
        en: 'Every district has a District Legal Services Authority with a front office inside the court complex.',
        hi: 'हर ज़िले में ज़िला विधिक सेवा प्राधिकरण है, जिसका फ्रंट ऑफ़िस न्यायालय परिसर में ही होता है।',
      },
    ],
    useIt: [
      {
        en: 'Call 15100, or walk into the front office of any court complex. An oral request is accepted — the staff will write it for you.',
        hi: '15100 पर कॉल करें, या किसी भी न्यायालय परिसर के फ्रंट ऑफ़िस में जाएँ। मौखिक निवेदन भी स्वीकार है — कर्मचारी आपके लिए लिख देंगे।',
      },
      {
        en: 'If the assigned lawyer is not doing the work, ask the Authority in writing to change them. That is your right.',
        hi: 'नियुक्त वकील काम न कर रहा हो तो प्राधिकरण से लिखित में बदलने को कहें। यह आपका अधिकार है।',
      },
    ],
    situations: ['arrest', 'fir-refused', 'women', 'senior'],
    actions: ['legal-aid'],
  },
  {
    id: 'pc-act',
    icon: '💰',
    short: { en: 'PC Act', hi: 'भ्रष्टाचार निवारण अधिनियम' },
    name: { en: 'Prevention of Corruption Act', hi: 'भ्रष्टाचार निवारण अधिनियम' },
    year: '1988',
    category: 'transparency',
    what: {
      en: 'Makes it a crime for a public servant to demand or take a bribe — and the demand alone is enough.',
      hi: 'लोक सेवक द्वारा रिश्वत माँगना या लेना अपराध बनाता है — और केवल माँग करना ही काफ़ी है।',
    },
    replaces: {
      en: 'Substantially amended in 2018, which brought bribe-giving into the offence as well.',
      hi: '2018 में बड़ा संशोधन हुआ, जिसने रिश्वत देने को भी अपराध के दायरे में लाया।',
    },
    whoItProtects: { en: 'Any citizen dealing with a government office', hi: 'सरकारी दफ़्तर से काम पड़ने वाला हर नागरिक' },
    keyPoints: [
      {
        en: 'Section 7 — a public servant who obtains, accepts or even attempts to obtain an undue advantage commits the offence.',
        hi: 'धारा 7 — जो लोक सेवक अनुचित लाभ लेता है, स्वीकार करता है या लेने का प्रयास भी करता है, वह अपराध करता है।',
      },
      {
        en: 'Punishment is three to seven years with a fine.',
        hi: 'सज़ा तीन से सात वर्ष तक, जुर्माने के साथ।',
      },
      {
        en: 'Since 2018 giving a bribe is also an offence — but a person forced into it is protected if they report it within seven days.',
        hi: '2018 से रिश्वत देना भी अपराध है — पर मजबूरी में देने वाला व्यक्ति सात दिन के भीतर सूचना दे दे तो संरक्षित है।',
      },
      {
        en: 'Trials are meant to finish within two years.',
        hi: 'मुकदमे दो वर्ष के भीतर पूरे होने चाहिए।',
      },
    ],
    punishment: {
      en: 'Three to seven years imprisonment and a fine, for the officer and, in most cases, for the bribe-giver too.',
      hi: 'तीन से सात वर्ष का कारावास और जुर्माना — अधिकारी के लिए, और अधिकतर मामलों में रिश्वत देने वाले के लिए भी।',
    },
    useIt: [
      {
        en: 'Do not pay first. Call the Anti-Corruption Bureau on 1064 and let them set a trap — that is how these cases are actually proved.',
        hi: 'पहले पैसे न दें। 1064 पर भ्रष्टाचार निरोधक ब्यूरो को कॉल करें और उन्हें ट्रैप लगाने दें — ऐसे मामले वास्तव में इसी तरह साबित होते हैं।',
      },
      {
        en: 'File an RTI in parallel asking why your file is pending and who is holding it. Often the file moves before the trap is needed.',
        hi: 'साथ ही RTI दायर कर पूछें कि फ़ाइल क्यों लंबित है और कौन रोके है। अक्सर ट्रैप की नौबत आने से पहले ही फ़ाइल चल पड़ती है।',
      },
    ],
    situations: ['bribe'],
    actions: ['rti', 'grievance', 'police-complaint'],
  },

  /* ---------------- women ---------------- */
  {
    id: 'pwdva',
    icon: '🏠',
    short: { en: 'Domestic Violence Act', hi: 'घरेलू हिंसा अधिनियम' },
    name: {
      en: 'Protection of Women from Domestic Violence Act',
      hi: 'घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम',
    },
    year: '2005',
    category: 'women',
    what: {
      en: 'A civil law that gets a woman protection, a roof and money — fast, and without anyone going to jail.',
      hi: 'एक दीवानी कानून जो महिला को संरक्षण, छत और पैसा दिलाता है — जल्दी, और बिना किसी को जेल भेजे।',
    },
    whoItProtects: {
      en: 'Any woman in a domestic relationship — wife, mother, sister, daughter, live-in partner',
      hi: 'घरेलू संबंध में रहने वाली कोई भी महिला — पत्नी, माँ, बहन, बेटी, लिव-इन साथी',
    },
    keyPoints: [
      {
        en: 'Violence here is not only physical. Verbal, emotional, sexual and economic abuse — including withholding money — all count.',
        hi: 'यहाँ हिंसा केवल शारीरिक नहीं है। मौखिक, भावनात्मक, यौन और आर्थिक शोषण — पैसा रोकना भी — सब शामिल हैं।',
      },
      {
        en: 'Section 17 — a woman has the right to live in the shared household even if it is not in her name and she owns nothing.',
        hi: 'धारा 17 — महिला को साझा घर में रहने का अधिकार है, चाहे वह उसके नाम पर न हो और उसके पास कुछ भी न हो।',
      },
      {
        en: 'The court can order protection, residence, monetary relief, custody of children and compensation — all in one application.',
        hi: 'अदालत एक ही आवेदन पर संरक्षण, निवास, आर्थिक राहत, बच्चों की अभिरक्षा और मुआवज़ा, सब आदेश दे सकती है।',
      },
      {
        en: 'The first hearing should be within three days and the case decided within sixty.',
        hi: 'पहली सुनवाई तीन दिन में और मामला साठ दिन में तय होना चाहिए।',
      },
      {
        en: 'Every district has a Protection Officer whose job is to help you file and follow up, free of charge.',
        hi: 'हर ज़िले में एक संरक्षण अधिकारी है, जिसका काम आवेदन दायर कराने और पैरवी में नि:शुल्क मदद करना है।',
      },
      {
        en: 'Breaking a protection order is a criminal offence — up to a year in jail.',
        hi: 'संरक्षण आदेश तोड़ना आपराधिक अपराध है — एक वर्ष तक की जेल।',
      },
    ],
    useIt: [
      {
        en: 'Call 181. The One Stop Centre gives shelter, counselling, medical help and the legal application together.',
        hi: '181 पर कॉल करें। वन स्टॉप सेंटर आश्रय, परामर्श, चिकित्सा और कानूनी आवेदन एक साथ देता है।',
      },
      {
        en: 'This runs alongside a criminal case, it does not replace it. You can file both.',
        hi: 'यह आपराधिक मामले के साथ-साथ चलता है, उसकी जगह नहीं लेता। आप दोनों दायर कर सकती हैं।',
      },
    ],
    situations: ['women'],
    actions: ['legal-aid', 'fir'],
  },
  {
    id: 'dowry',
    icon: '🚫',
    short: { en: 'Dowry Prohibition Act', hi: 'दहेज प्रतिषेध अधिनियम' },
    name: { en: 'Dowry Prohibition Act', hi: 'दहेज प्रतिषेध अधिनियम' },
    year: '1961',
    category: 'women',
    what: {
      en: 'Makes giving, taking and even demanding dowry a crime.',
      hi: 'दहेज देना, लेना और माँगना तक अपराध बनाता है।',
    },
    whoItProtects: { en: 'A bride and her family', hi: 'वधू और उसका परिवार' },
    keyPoints: [
      {
        en: 'Section 3 — giving or taking dowry: at least five years in prison and a fine of ₹15,000 or the value of the dowry, whichever is more.',
        hi: 'धारा 3 — दहेज देना या लेना: कम से कम पाँच वर्ष कारावास और ₹15,000 या दहेज के मूल्य, जो अधिक हो, का जुर्माना।',
      },
      {
        en: 'Section 4 — merely demanding dowry is itself punishable with six months to two years, even if nothing is given.',
        hi: 'धारा 4 — केवल दहेज माँगना भी छह महीने से दो वर्ष तक दंडनीय है, चाहे कुछ दिया न गया हो।',
      },
      {
        en: 'Gifts given voluntarily at a wedding are not dowry, but a list of them must be kept.',
        hi: 'विवाह में स्वेच्छा से दिए गए उपहार दहेज नहीं हैं, पर उनकी सूची रखनी होती है।',
      },
      {
        en: 'Whatever is given belongs to the woman. Her in-laws holding her stridhan is a separate offence.',
        hi: 'जो कुछ दिया गया वह महिला का है। ससुराल वालों का उसका स्त्रीधन रोक रखना अलग अपराध है।',
      },
      {
        en: 'If a woman dies unnaturally within seven years of marriage after dowry harassment, the law presumes dowry death — seven years to life.',
        hi: 'दहेज उत्पीड़न के बाद विवाह के सात वर्ष के भीतर महिला की अस्वाभाविक मृत्यु हो तो कानून दहेज हत्या मानता है — सात वर्ष से आजीवन कारावास।',
      },
    ],
    useIt: [
      {
        en: 'Keep every message and recording where the demand was made. A demand on paper is the whole case.',
        hi: 'जिस भी संदेश या रिकॉर्डिंग में माँग की गई हो, सब रखें। लिखित माँग ही पूरा मामला है।',
      },
      {
        en: 'File the FIR under this Act and under Section 85 BNS together — they cover different things.',
        hi: 'FIR इस अधिनियम और BNS की धारा 85 दोनों के तहत दर्ज कराएँ — दोनों अलग-अलग बातें कवर करती हैं।',
      },
    ],
    situations: ['women'],
    actions: ['fir', 'legal-aid'],
  },
  {
    id: 'posh',
    icon: '🏢',
    short: { en: 'POSH Act', hi: 'पॉश अधिनियम' },
    name: {
      en: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act',
      hi: 'कार्यस्थल पर महिलाओं का यौन उत्पीड़न (निवारण, प्रतिषेध और प्रतितोष) अधिनियम',
    },
    year: '2013',
    category: 'women',
    what: {
      en: 'Requires every workplace to have a committee that must investigate a harassment complaint within ninety days.',
      hi: 'हर कार्यस्थल में एक समिति अनिवार्य करता है, जिसे उत्पीड़न की शिकायत की जाँच नब्बे दिन में पूरी करनी होती है।',
    },
    whoItProtects: {
      en: 'Every woman at every workplace — employee, intern, trainee, contract worker, domestic worker or visitor',
      hi: 'हर कार्यस्थल पर हर महिला — कर्मचारी, प्रशिक्षु, ट्रेनी, ठेका कर्मी, घरेलू कामगार या आगंतुक',
    },
    keyPoints: [
      {
        en: 'Any workplace with ten or more employees must have an Internal Committee. Not having one is itself a violation.',
        hi: 'दस या अधिक कर्मचारियों वाले हर कार्यस्थल में आंतरिक समिति होनी चाहिए। न होना स्वयं उल्लंघन है।',
      },
      {
        en: 'Where there is no committee, or the complaint is against the employer, the Local Committee at the District Officer’s office takes it.',
        hi: 'जहाँ समिति न हो, या शिकायत नियोक्ता के विरुद्ध हो, वहाँ ज़िला अधिकारी के कार्यालय की स्थानीय समिति सुनती है।',
      },
      {
        en: 'Complain within three months, extendable by three more for good reason.',
        hi: 'तीन महीने के भीतर शिकायत करें, उचित कारण पर तीन महीने और।',
      },
      {
        en: 'Interim relief while the inquiry runs: a transfer, up to three months of extra paid leave, or an order keeping the respondent away.',
        hi: 'जाँच के दौरान अंतरिम राहत: स्थानांतरण, तीन महीने तक का अतिरिक्त सवेतन अवकाश, या प्रतिवादी को दूर रखने का आदेश।',
      },
      {
        en: 'Conciliation is allowed only if the woman asks for it, and never for a settlement in money.',
        hi: 'सुलह केवल तभी हो सकती है जब महिला स्वयं चाहे, और कभी भी धन-आधारित समझौते के लिए नहीं।',
      },
      {
        en: 'Punishing or transferring a woman for complaining is a separate offence.',
        hi: 'शिकायत करने पर महिला को दंडित करना या तबादला करना अलग अपराध है।',
      },
    ],
    punishment: {
      en: 'An employer who fails to set up a committee or act on a report can be fined ₹50,000, and repeat failures can cost the business licence.',
      hi: 'समिति न बनाने या रिपोर्ट पर कार्रवाई न करने वाले नियोक्ता पर ₹50,000 जुर्माना, और बार-बार चूक पर व्यापार लाइसेंस तक जा सकता है।',
    },
    useIt: [
      {
        en: 'Write down each incident with date, time and words used, as it happens. Contemporary notes carry real weight in the inquiry.',
        hi: 'हर घटना को उसी समय तारीख, समय और कहे गए शब्दों के साथ लिख लें। उसी समय के नोट्स जाँच में असली वज़न रखते हैं।',
      },
      {
        en: 'If nothing moves internally, file on SHe-Box at shebox.wcd.gov.in. A criminal complaint can run in parallel.',
        hi: 'भीतर कुछ न हो तो shebox.wcd.gov.in पर शिकायत दें। आपराधिक शिकायत साथ-साथ चल सकती है।',
      },
    ],
    situations: ['posh', 'women'],
    actions: ['posh', 'fir'],
  },

  /* ---------------- children ---------------- */
  {
    id: 'pocso',
    icon: '🧒',
    short: { en: 'POCSO Act', hi: 'पॉक्सो अधिनियम' },
    name: {
      en: 'Protection of Children from Sexual Offences Act',
      hi: 'लैंगिक अपराधों से बालकों का संरक्षण अधिनियम',
    },
    year: '2012',
    category: 'children',
    what: {
      en: 'Covers every sexual offence against anyone under 18, and builds the whole process around not frightening the child further.',
      hi: '18 वर्ष से कम आयु के किसी भी बच्चे के विरुद्ध हर यौन अपराध को कवर करता है, और पूरी प्रक्रिया इस तरह बनाता है कि बच्चा और न डरे।',
    },
    whoItProtects: { en: 'Every child under 18, of any gender', hi: '18 वर्ष से कम आयु का हर बच्चा, किसी भी लिंग का' },
    keyPoints: [
      {
        en: 'Section 19 — anyone who knows of the offence must report it. Staying silent is itself a crime.',
        hi: 'धारा 19 — जिसे भी अपराध की जानकारी हो, उसे सूचना देनी होगी। चुप रहना स्वयं अपराध है।',
      },
      {
        en: 'The child’s statement is recorded at their home or a place they feel safe, by a woman officer not in uniform.',
        hi: 'बच्चे का बयान उसके घर या सुरक्षित लगने वाली जगह पर, बिना वर्दी वाली महिला अधिकारी द्वारा दर्ज होता है।',
      },
      {
        en: 'A child is never called to the police station and never kept there at night.',
        hi: 'बच्चे को कभी थाने नहीं बुलाया जाता और न रात में वहाँ रखा जाता है।',
      },
      {
        en: 'The accused cannot question the child directly — questions go through the special court.',
        hi: 'आरोपी बच्चे से सीधे सवाल नहीं कर सकता — प्रश्न विशेष अदालत के माध्यम से जाते हैं।',
      },
      {
        en: 'The burden is reversed: once the basic facts are shown, the accused must prove innocence.',
        hi: 'सबूत का भार उलटा है: बुनियादी तथ्य सामने आने पर आरोपी को निर्दोष सिद्ध करना होता है।',
      },
      {
        en: 'The child’s identity may never be published, and the trial should finish within one year.',
        hi: 'बच्चे की पहचान कभी प्रकाशित नहीं की जा सकती, और सुनवाई एक वर्ष में पूरी होनी चाहिए।',
      },
    ],
    useIt: [
      {
        en: 'Call 1098 or 112. Reporting can be anonymous, and you do not need proof — only a reasonable belief.',
        hi: '1098 या 112 पर कॉल करें। सूचना गुमनाम हो सकती है, और सबूत ज़रूरी नहीं — केवल उचित विश्वास काफ़ी है।',
      },
      {
        en: 'Ask the Legal Services Authority for interim compensation for the child. It does not wait for the trial to end.',
        hi: 'बच्चे के लिए अंतरिम मुआवज़ा विधिक सेवा प्राधिकरण से माँगें। यह मुकदमा खत्म होने का इंतज़ार नहीं करता।',
      },
    ],
    situations: ['child'],
    actions: ['fir', 'legal-aid'],
  },
  {
    id: 'rte',
    icon: '🎒',
    short: { en: 'RTE Act', hi: 'शिक्षा का अधिकार अधिनियम' },
    name: {
      en: 'Right of Children to Free and Compulsory Education Act',
      hi: 'बालकों को नि:शुल्क और अनिवार्य शिक्षा का अधिकार अधिनियम',
    },
    year: '2009',
    category: 'children',
    what: {
      en: 'Turns Article 21A into a working right: free school for every child from six to fourteen, near home.',
      hi: 'अनुच्छेद 21A को काम करने वाला अधिकार बनाता है: छह से चौदह वर्ष के हर बच्चे के लिए घर के पास मुफ़्त स्कूल।',
    },
    whoItProtects: { en: 'Every child between 6 and 14', hi: '6 से 14 वर्ष के बीच का हर बच्चा' },
    keyPoints: [
      {
        en: 'Section 12(1)(c) — private unaided schools must keep 25% of entry-class seats for children from weaker and disadvantaged groups, and the State pays.',
        hi: 'धारा 12(1)(c) — निजी गैर-सहायता प्राप्त स्कूलों को प्रवेश कक्षा की 25% सीटें कमज़ोर और वंचित वर्ग के बच्चों के लिए रखनी होंगी, और खर्च राज्य देता है।',
      },
      {
        en: 'No screening test and no interview of the parents. No capitation fee or donation.',
        hi: 'न छँटनी परीक्षा, न अभिभावकों का साक्षात्कार। न कैपिटेशन शुल्क, न दान।',
      },
      {
        en: 'Admission cannot be refused for want of a birth certificate or a transfer certificate, and can be sought at any time of year.',
        hi: 'जन्म प्रमाणपत्र या स्थानांतरण प्रमाणपत्र न होने पर प्रवेश से मना नहीं किया जा सकता, और प्रवेश साल में कभी भी माँगा जा सकता है।',
      },
      {
        en: 'No child may be held back in a class or expelled before finishing elementary education.',
        hi: 'प्रारंभिक शिक्षा पूरी होने से पहले किसी बच्चे को कक्षा में रोका या स्कूल से निकाला नहीं जा सकता।',
      },
      {
        en: 'Physical punishment and mental harassment are prohibited outright.',
        hi: 'शारीरिक दंड और मानसिक प्रताड़ना पूरी तरह प्रतिबंधित हैं।',
      },
    ],
    useIt: [
      {
        en: 'Ask the school for its refusal in writing. Most schools back down at that point.',
        hi: 'स्कूल से इनकार लिखित में माँगें। ज़्यादातर स्कूल वहीं पीछे हट जाते हैं।',
      },
      {
        en: 'Then the Block or District Education Officer, then the State Commission for Protection of Child Rights.',
        hi: 'फिर खंड या ज़िला शिक्षा अधिकारी, फिर राज्य बाल अधिकार संरक्षण आयोग।',
      },
    ],
    situations: ['education'],
    actions: ['grievance', 'writ'],
  },
  {
    id: 'child-labour',
    icon: '⛓️',
    short: { en: 'Child Labour Act', hi: 'बाल श्रम अधिनियम' },
    name: {
      en: 'Child Labour (Prohibition and Regulation) Act',
      hi: 'बाल श्रम (प्रतिषेध और विनियमन) अधिनियम',
    },
    year: '1986',
    category: 'children',
    what: {
      en: 'Bans all work by children under 14, and hazardous work by anyone under 18.',
      hi: '14 वर्ष से कम आयु के बच्चों का हर काम, और 18 से कम आयु के किसी का भी खतरनाक काम प्रतिबंधित करता है।',
    },
    replaces: {
      en: 'The 2016 amendment turned a partial ban into a complete one for children under 14.',
      hi: '2016 के संशोधन ने 14 वर्ष से कम आयु के बच्चों के लिए आंशिक रोक को पूर्ण प्रतिबंध बना दिया।',
    },
    whoItProtects: { en: 'Every child under 14 and every adolescent under 18', hi: '14 से कम आयु का हर बच्चा और 18 से कम आयु का हर किशोर' },
    keyPoints: [
      {
        en: 'No child under 14 may be employed anywhere — shop, home, dhaba or factory.',
        hi: '14 वर्ष से कम आयु का कोई बच्चा कहीं भी काम पर नहीं रखा जा सकता — दुकान, घर, ढाबा या कारखाना।',
      },
      {
        en: 'The only exception is helping in the family’s own business outside school hours, and never in a hazardous one.',
        hi: 'एकमात्र अपवाद है स्कूल के बाद अपने ही पारिवारिक काम में हाथ बँटाना, और वह भी कभी खतरनाक काम में नहीं।',
      },
      {
        en: 'Adolescents aged 14 to 18 are barred from mines, explosives and other hazardous work.',
        hi: '14 से 18 वर्ष के किशोर खदान, विस्फोटक और अन्य खतरनाक कामों में नहीं लगाए जा सकते।',
      },
      {
        en: 'The offence is cognizable — the police can act without waiting for a court order.',
        hi: 'यह अपराध संज्ञेय है — पुलिस अदालत के आदेश की प्रतीक्षा किए बिना कार्रवाई कर सकती है।',
      },
    ],
    punishment: {
      en: 'Six months to two years in prison, or a fine of ₹20,000 to ₹50,000, or both. Parents are dealt with more leniently.',
      hi: 'छह महीने से दो वर्ष का कारावास, या ₹20,000 से ₹50,000 जुर्माना, या दोनों। माता-पिता के साथ नरमी बरती जाती है।',
    },
    useIt: [
      {
        en: 'Call 1098, or report on pencil.gov.in — the complaint reaches the District Nodal Officer with a tracking number.',
        hi: '1098 पर कॉल करें, या pencil.gov.in पर सूचना दें — शिकायत ट्रैकिंग नंबर के साथ ज़िला नोडल अधिकारी तक पहुँचती है।',
      },
    ],
    situations: ['child'],
    actions: ['fir'],
  },

  /* ---------------- equality ---------------- */
  {
    id: 'sc-st-act',
    icon: '✊',
    short: { en: 'SC/ST Atrocities Act', hi: 'SC/ST अत्याचार अधिनियम' },
    name: {
      en: 'Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act',
      hi: 'अनुसूचित जाति और अनुसूचित जनजाति (अत्याचार निवारण) अधिनियम',
    },
    year: '1989',
    category: 'equality',
    what: {
      en: 'One of the strongest laws in the country — it names 47 specific atrocities and attaches compensation as a right.',
      hi: 'देश के सबसे सख़्त कानूनों में एक — यह 47 विशिष्ट अत्याचार गिनाता है और मुआवज़े को अधिकार बनाता है।',
    },
    whoItProtects: {
      en: 'Members of Scheduled Castes and Scheduled Tribes',
      hi: 'अनुसूचित जाति और अनुसूचित जनजाति के सदस्य',
    },
    keyPoints: [
      {
        en: 'Offences are cognizable and non-bailable, and anticipatory bail is generally barred.',
        hi: 'अपराध संज्ञेय और गैर-ज़मानती हैं, और अग्रिम ज़मानत सामान्यतः वर्जित है।',
      },
      {
        en: 'Caste abuse within public view, denying access to a well, road, temple or cremation ground, and forcing someone to leave their village are all named offences.',
        hi: 'सार्वजनिक रूप से जातिसूचक अपमान, कुएँ, सड़क, मंदिर या श्मशान तक पहुँच रोकना, और गाँव छोड़ने पर मजबूर करना — सब नामित अपराध हैं।',
      },
      {
        en: 'Investigation must be by an officer of at least Deputy Superintendent rank, with the charge sheet in 60 days.',
        hi: 'जाँच कम से कम उप अधीक्षक स्तर के अधिकारी द्वारा, और आरोप पत्र 60 दिन में।',
      },
      {
        en: 'Relief and compensation come from the district administration, part of it within seven days of the FIR — it does not wait for a conviction.',
        hi: 'राहत और मुआवज़ा ज़िला प्रशासन से मिलता है, जिसका एक हिस्सा FIR के सात दिन में — यह दोषसिद्धि की प्रतीक्षा नहीं करता।',
      },
      {
        en: 'You get travel allowance, maintenance for court days, a free lawyer and protection for your witnesses.',
        hi: 'आपको यात्रा भत्ता, अदालत के दिनों का भरण-पोषण, मुफ़्त वकील और अपने गवाहों के लिए सुरक्षा मिलती है।',
      },
      {
        en: 'Special Courts try these cases so they are not lost in the ordinary queue.',
        hi: 'ये मामले विशेष अदालतों में चलते हैं ताकि सामान्य कतार में खो न जाएँ।',
      },
    ],
    useIt: [
      {
        en: 'Name the Act in the FIR and give your caste certificate details. Note the exact words used and who was present.',
        hi: 'FIR में इस अधिनियम का नाम लें और जाति प्रमाणपत्र का विवरण दें। कहे गए ठीक शब्द और मौजूद लोग नोट करें।',
      },
      {
        en: 'Apply separately to the District Social Welfare Officer for the relief amount — it is a right, not a favour.',
        hi: 'राहत राशि के लिए अलग से ज़िला समाज कल्याण अधिकारी को आवेदन दें — यह अधिकार है, एहसान नहीं।',
      },
    ],
    situations: ['caste'],
    actions: ['fir', 'legal-aid', 'police-complaint'],
  },
  {
    id: 'rpwd',
    icon: '♿',
    short: { en: 'RPwD Act', hi: 'दिव्यांगजन अधिकार अधिनियम' },
    name: { en: 'Rights of Persons with Disabilities Act', hi: 'दिव्यांगजन अधिकार अधिनियम' },
    year: '2016',
    category: 'equality',
    what: {
      en: 'Recognises 21 disabilities and makes accessibility, reservation and reasonable accommodation legal obligations rather than favours.',
      hi: '21 दिव्यांगताओं को मान्यता देता है और सुलभता, आरक्षण तथा उचित सुविधा को एहसान नहीं, कानूनी दायित्व बनाता है।',
    },
    replaces: {
      en: 'Replaced the Persons with Disabilities Act, 1995, which recognised only seven disabilities.',
      hi: 'नि:शक्त व्यक्ति अधिनियम, 1995 की जगह ली, जो केवल सात दिव्यांगताओं को मान्यता देता था।',
    },
    whoItProtects: { en: 'Persons with any of the 21 recognised disabilities', hi: '21 मान्यता प्राप्त दिव्यांगताओं में से किसी के साथ जी रहे व्यक्ति' },
    keyPoints: [
      {
        en: '4% reservation in government jobs and 5% in higher education institutions.',
        hi: 'सरकारी नौकरियों में 4% और उच्च शिक्षा संस्थानों में 5% आरक्षण।',
      },
      {
        en: 'The UDID card is free and works across the country — most other entitlements run through it.',
        hi: 'UDID कार्ड नि:शुल्क है और पूरे देश में मान्य — अधिकांश अन्य हक़ इसी से मिलते हैं।',
      },
      {
        en: 'Free education from 6 to 18 for a child with benchmark disability, in a neighbourhood school.',
        hi: 'बेंचमार्क दिव्यांगता वाले बच्चे के लिए 6 से 18 वर्ष तक पड़ोस के स्कूल में नि:शुल्क शिक्षा।',
      },
      {
        en: 'Reasonable accommodation at work, and a scribe with extra time in examinations.',
        hi: 'काम में उचित सुविधा, और परीक्षा में लेखक तथा अतिरिक्त समय।',
      },
      {
        en: 'An employee who acquires a disability during service cannot be demoted or have their salary cut.',
        hi: 'सेवा के दौरान दिव्यांग हुए कर्मचारी का पद घटाया या वेतन काटा नहीं जा सकता।',
      },
      {
        en: 'The Chief Commissioner and the State Commissioners have the powers of a civil court.',
        hi: 'मुख्य आयुक्त और राज्य आयुक्तों के पास सिविल कोर्ट की शक्तियाँ हैं।',
      },
    ],
    punishment: {
      en: 'Insulting or humiliating a person with a disability in public is punishable with six months to five years.',
      hi: 'सार्वजनिक रूप से दिव्यांग व्यक्ति का अपमान या तिरस्कार छह महीने से पाँच वर्ष तक दंडनीय है।',
    },
    useIt: [
      {
        en: 'Get the UDID card first at swavlambancard.gov.in. Then complain in writing citing the exact section.',
        hi: 'पहले swavlambancard.gov.in से UDID कार्ड बनवाएँ। फिर सटीक धारा का हवाला देकर लिखित शिकायत करें।',
      },
      {
        en: 'Escalate to the State Commissioner for Persons with Disabilities, or ccdisabilities.nic.in.',
        hi: 'राज्य दिव्यांगजन आयुक्त, या ccdisabilities.nic.in तक ले जाएँ।',
      },
    ],
    situations: ['disability'],
    actions: ['grievance', 'writ', 'legal-aid'],
  },
  {
    id: 'senior-citizens',
    icon: '👴',
    short: { en: 'Senior Citizens Act', hi: 'वरिष्ठ नागरिक अधिनियम' },
    name: {
      en: 'Maintenance and Welfare of Parents and Senior Citizens Act',
      hi: 'माता-पिता और वरिष्ठ नागरिकों का भरण-पोषण तथा कल्याण अधिनियम',
    },
    year: '2007',
    category: 'equality',
    what: {
      en: 'Lets a parent claim maintenance from their children through a simple tribunal — no lawyer, no court fee, decided in ninety days.',
      hi: 'माता-पिता को एक सरल अधिकरण के ज़रिए बच्चों से भरण-पोषण माँगने देता है — न वकील, न न्यायालय शुल्क, नब्बे दिन में फ़ैसला।',
    },
    whoItProtects: {
      en: 'Parents of any age, and any citizen aged 60 or above',
      hi: 'किसी भी आयु के माता-पिता, और 60 वर्ष या उससे अधिक का कोई भी नागरिक',
    },
    keyPoints: [
      {
        en: 'The claim lies against children and grandchildren — and, if there are none, against the relatives who stand to inherit.',
        hi: 'दावा बच्चों और नाती-पोतों पर है — और वे न हों तो उन रिश्तेदारों पर जो संपत्ति के उत्तराधिकारी बनेंगे।',
      },
      {
        en: 'The Maintenance Tribunal is usually the Sub-Divisional Magistrate. A lawyer is not allowed to appear, which keeps it simple and cheap.',
        hi: 'भरण-पोषण अधिकरण आमतौर पर उपखंड मजिस्ट्रेट होते हैं। वहाँ वकील पेश नहीं हो सकता, जिससे यह सरल और सस्ता रहता है।',
      },
      {
        en: 'Section 23 — property gifted or transferred on a promise of care can be declared void if the promise is broken.',
        hi: 'धारा 23 — देखभाल के वादे पर दी गई या हस्तांतरित संपत्ति, वादा टूटने पर शून्य घोषित की जा सकती है।',
      },
      {
        en: 'Tribunals and High Courts have used this to order children out of a parent’s house.',
        hi: 'अधिकरणों और उच्च न्यायालयों ने इसी के आधार पर बच्चों को माता-पिता के घर से निकलने के आदेश दिए हैं।',
      },
      {
        en: 'An unpaid order is recovered like arrears of land revenue, and can end in imprisonment.',
        hi: 'न चुकाए गए आदेश की वसूली भू-राजस्व बकाया की तरह होती है, और अंत कारावास तक जा सकता है।',
      },
    ],
    punishment: {
      en: 'Abandoning a senior citizen is punishable with up to three months in prison, a fine of ₹5,000, or both.',
      hi: 'वरिष्ठ नागरिक को छोड़ देना तीन महीने तक का कारावास, ₹5,000 जुर्माना, या दोनों से दंडनीय है।',
    },
    useIt: [
      {
        en: 'Call 14567 (Elderline). They help write the application and follow it up for you, free.',
        hi: '14567 (एल्डरलाइन) पर कॉल करें। वे आवेदन लिखने और पैरवी में नि:शुल्क मदद करते हैं।',
      },
      {
        en: 'A plain application to the SDM stating your income, needs and your children’s means is enough to start.',
        hi: 'शुरू करने के लिए SDM को सादा आवेदन — जिसमें आपकी आय, ज़रूरतें और बच्चों की हैसियत लिखी हो — काफ़ी है।',
      },
    ],
    situations: ['senior'],
    actions: ['legal-aid', 'grievance'],
  },
  {
    id: 'bonded-labour',
    icon: '🔗',
    short: { en: 'Bonded Labour Act', hi: 'बंधुआ मज़दूरी अधिनियम' },
    name: {
      en: 'Bonded Labour System (Abolition) Act',
      hi: 'बंधुआ मज़दूरी प्रथा (उत्सादन) अधिनियम',
    },
    year: '1976',
    category: 'equality',
    what: {
      en: 'Abolishes bonded labour outright and wipes out the debt that created it.',
      hi: 'बंधुआ मज़दूरी को पूरी तरह समाप्त करता है और उसे जन्म देने वाला कर्ज़ मिटा देता है।',
    },
    whoItProtects: {
      en: 'Anyone working off a debt, and their family',
      hi: 'कर्ज़ चुकाने के लिए काम कर रहा कोई भी व्यक्ति, और उसका परिवार',
    },
    keyPoints: [
      {
        en: 'Every bonded debt stands cancelled by law. No court will enforce it, and no property can be taken for it.',
        hi: 'हर बंधुआ कर्ज़ कानून से रद्द है। कोई अदालत उसे लागू नहीं कराएगी, न उसके लिए कोई संपत्ति ली जा सकती है.',
      },
      {
        en: 'A freed worker cannot be evicted from the homestead they were living in.',
        hi: 'मुक्त हुए मज़दूर को उस घर से नहीं निकाला जा सकता जिसमें वह रह रहा था।',
      },
      {
        en: 'The District Magistrate heads a Vigilance Committee that must identify, release and rehabilitate.',
        hi: 'ज़िलाधिकारी उस सतर्कता समिति के प्रमुख हैं जिसे पहचान, रिहाई और पुनर्वास करना होता है।',
      },
      {
        en: 'The Supreme Court has held that paying below the minimum wage is itself forced labour under Article 23.',
        hi: 'सुप्रीम कोर्ट ने माना है कि न्यूनतम मज़दूरी से कम भुगतान स्वयं अनुच्छेद 23 के तहत बलात् श्रम है।',
      },
    ],
    punishment: {
      en: 'Up to three years imprisonment and a fine for anyone who enforces bonded labour or advances such a debt.',
      hi: 'बंधुआ मज़दूरी कराने या ऐसा कर्ज़ देने वाले को तीन वर्ष तक कारावास और जुर्माना।',
    },
    useIt: [
      {
        en: 'Report to the District Magistrate or the Sub-Divisional Magistrate — they can order release and a rehabilitation payment.',
        hi: 'ज़िलाधिकारी या उपखंड मजिस्ट्रेट को सूचित करें — वे रिहाई और पुनर्वास राशि का आदेश दे सकते हैं।',
      },
      {
        en: 'For a whole group of workers, a public interest litigation works — courts have accepted even a postcard.',
        hi: 'पूरे मज़दूर समूह के लिए जनहित याचिका कारगर है — अदालतों ने पोस्टकार्ड तक स्वीकार किया है।',
      },
    ],
    situations: ['work'],
    actions: ['legal-aid', 'writ'],
  },

  /* ---------------- work ---------------- */
  {
    id: 'wages-code',
    icon: '💵',
    short: { en: 'Code on Wages', hi: 'वेतन संहिता' },
    name: { en: 'Code on Wages', hi: 'वेतन संहिता' },
    year: '2019',
    category: 'work',
    what: {
      en: 'Guarantees a minimum wage, on time, to every worker in the country — organised or not.',
      hi: 'देश के हर कामगार को — संगठित हो या नहीं — न्यूनतम मज़दूरी, समय पर, सुनिश्चित करती है।',
    },
    replaces: {
      en: 'Merges four old laws: Minimum Wages 1948, Payment of Wages 1936, Payment of Bonus 1965 and Equal Remuneration 1976.',
      hi: 'चार पुराने कानूनों को मिलाती है: न्यूनतम मज़दूरी 1948, मज़दूरी संदाय 1936, बोनस संदाय 1965 और समान पारिश्रमिक 1976।',
    },
    whoItProtects: {
      en: 'Every employee, including daily-wage, contract and domestic workers',
      hi: 'हर कर्मचारी, जिसमें दिहाड़ी, ठेका और घरेलू कामगार भी शामिल',
    },
    keyPoints: [
      {
        en: 'A minimum wage applies to all work, not just to the industries on an old schedule.',
        hi: 'न्यूनतम मज़दूरी हर काम पर लागू है, केवल किसी पुरानी अनुसूची के उद्योगों पर नहीं।',
      },
      {
        en: 'Wages must be paid by the 7th of the next month in a small establishment, and by the 10th in a larger one.',
        hi: 'मज़दूरी छोटे प्रतिष्ठान में अगले महीने की 7 तारीख तक, बड़े में 10 तारीख तक देनी होगी।',
      },
      {
        en: 'No discrimination by sex in wages or in recruitment for the same work.',
        hi: 'समान काम के लिए मज़दूरी या भर्ती में लिंग के आधार पर कोई भेदभाव नहीं।',
      },
      {
        en: 'Deductions are capped at half the wage, and cannot be used as punishment.',
        hi: 'कटौती अधिकतम आधी मज़दूरी तक, और उसे सज़ा के तौर पर इस्तेमाल नहीं किया जा सकता।',
      },
      {
        en: 'A claim can be filed for wages up to three years old.',
        hi: 'तीन वर्ष तक पुरानी मज़दूरी का दावा किया जा सकता है।',
      },
    ],
    useIt: [
      {
        en: 'Collect anything showing you worked there — an ID card, a salary slip, a bank credit, even a supervisor’s message.',
        hi: 'वहाँ काम करने का कोई भी सबूत जुटाएँ — पहचान पत्र, वेतन पर्ची, बैंक में आया पैसा, सुपरवाइज़र का संदेश तक।',
      },
      {
        en: 'Then complain to the Labour Commissioner of your district. Conciliation there is free and usually quick.',
        hi: 'फिर अपने ज़िले के श्रम आयुक्त को शिकायत करें। वहाँ सुलह नि:शुल्क और आमतौर पर तेज़ होती है।',
      },
    ],
    situations: ['work'],
    actions: ['grievance', 'legal-aid'],
  },
  {
    id: 'gratuity',
    icon: '🎁',
    short: { en: 'Gratuity Act', hi: 'उपदान अधिनियम' },
    name: { en: 'Payment of Gratuity Act', hi: 'उपदान संदाय अधिनियम' },
    year: '1972',
    category: 'work',
    what: {
      en: 'A lump sum an employer owes you for long service — it is a legal debt, not a bonus at their discretion.',
      hi: 'लंबी सेवा के बदले नियोक्ता पर बनने वाली एकमुश्त राशि — यह कानूनी देनदारी है, उनकी मर्ज़ी का बोनस नहीं।',
    },
    whoItProtects: {
      en: 'Employees of any establishment with 10 or more workers',
      hi: '10 या अधिक कामगारों वाले किसी भी प्रतिष्ठान के कर्मचारी',
    },
    keyPoints: [
      {
        en: 'Payable after five years of continuous service — on resignation, retirement or dismissal alike.',
        hi: 'पाँच वर्ष की निरंतर सेवा के बाद देय — इस्तीफ़ा, सेवानिवृत्ति या बर्खास्तगी, सब पर समान रूप से।',
      },
      {
        en: 'The five-year rule does not apply if service ends because of death or disability.',
        hi: 'मृत्यु या दिव्यांगता से सेवा समाप्त हो तो पाँच वर्ष की शर्त लागू नहीं होती।',
      },
      {
        en: 'The amount is 15 days of wages for every completed year, up to a ceiling of ₹20 lakh.',
        hi: 'राशि हर पूर्ण वर्ष के लिए 15 दिन की मज़दूरी, अधिकतम ₹20 लाख तक।',
      },
      {
        en: 'It must be paid within 30 days. After that the employer owes interest on it.',
        hi: 'भुगतान 30 दिन के भीतर होना चाहिए। उसके बाद नियोक्ता पर ब्याज बनता है।',
      },
    ],
    useIt: [
      {
        en: 'Apply in Form I to the employer. If they refuse or stay silent, apply to the Controlling Authority — the Labour Commissioner.',
        hi: 'नियोक्ता को फ़ॉर्म I में आवेदन दें। वे मना करें या चुप रहें तो नियंत्रक प्राधिकारी — श्रम आयुक्त — को आवेदन करें।',
      },
    ],
    situations: ['work'],
    actions: ['grievance'],
  },

  /* ---------------- money ---------------- */
  {
    id: 'consumer',
    icon: '🛒',
    short: { en: 'Consumer Protection Act', hi: 'उपभोक्ता संरक्षण अधिनियम' },
    name: { en: 'Consumer Protection Act', hi: 'उपभोक्ता संरक्षण अधिनियम' },
    year: '2019',
    category: 'money',
    what: {
      en: 'A cheap, fast court for ordinary buyers, where you can argue your own case without a lawyer.',
      hi: 'आम खरीदारों के लिए सस्ती, तेज़ अदालत, जहाँ आप बिना वकील खुद पैरवी कर सकते हैं।',
    },
    replaces: {
      en: 'Replaced the 1986 Act, adding e-commerce, online filing, product liability and a regulator with teeth.',
      hi: '1986 के अधिनियम की जगह ली, और ई-कॉमर्स, ऑनलाइन फाइलिंग, उत्पाद दायित्व तथा एक सक्षम नियामक जोड़ा।',
    },
    whoItProtects: {
      en: 'Anyone who buys goods or hires a service for their own use, online or offline',
      hi: 'अपने उपयोग के लिए सामान खरीदने या सेवा लेने वाला कोई भी व्यक्ति, ऑनलाइन हो या ऑफ़लाइन',
    },
    keyPoints: [
      {
        en: 'You can file where you live or work. You no longer have to travel to the seller’s city.',
        hi: 'आप जहाँ रहते या काम करते हैं, वहीं दायर कर सकते हैं। अब विक्रेता के शहर जाना ज़रूरी नहीं।',
      },
      {
        en: 'No fee at all for claims up to ₹5 lakh, and the whole thing can be filed online at e-Daakhil.',
        hi: '₹5 लाख तक के दावे पर कोई शुल्क नहीं, और पूरा मामला ई-दाखिल पर ऑनलाइन दायर हो सकता है।',
      },
      {
        en: 'District Commission up to ₹50 lakh, State up to ₹2 crore, National above that.',
        hi: '₹50 लाख तक ज़िला आयोग, ₹2 करोड़ तक राज्य, उससे ऊपर राष्ट्रीय।',
      },
      {
        en: 'Product liability — the maker, seller and service provider can all be held responsible for a defective product.',
        hi: 'उत्पाद दायित्व — दोषपूर्ण उत्पाद के लिए निर्माता, विक्रेता और सेवा प्रदाता, तीनों ज़िम्मेदार ठहराए जा सकते हैं।',
      },
      {
        en: 'The CCPA can act against misleading advertisements, and a celebrity endorsing one can be penalised.',
        hi: 'CCPA भ्रामक विज्ञापनों पर कार्रवाई कर सकता है, और उनका प्रचार करने वाली हस्ती पर भी जुर्माना लग सकता है।',
      },
      {
        en: 'You can claim compensation for mental agony and inconvenience, not just your money back.',
        hi: 'आप केवल पैसा वापसी नहीं, मानसिक कष्ट और असुविधा का मुआवज़ा भी माँग सकते हैं।',
      },
    ],
    useIt: [
      {
        en: 'Send a written notice giving 15 days first. Then call 1915, and only then file at edaakhil.nic.in.',
        hi: 'पहले 15 दिन का लिखित नोटिस भेजें। फिर 1915 पर कॉल करें, और उसके बाद ही edaakhil.nic.in पर दायर करें।',
      },
      {
        en: 'File within two years of the problem arising, and keep the bill.',
        hi: 'समस्या होने के दो वर्ष के भीतर दायर करें, और बिल संभालकर रखें।',
      },
    ],
    situations: ['consumer', 'health'],
    actions: ['consumer', 'grievance'],
  },
  {
    id: 'it-act',
    icon: '💻',
    short: { en: 'IT Act', hi: 'आईटी अधिनियम' },
    name: { en: 'Information Technology Act', hi: 'सूचना प्रौद्योगिकी अधिनियम' },
    year: '2000',
    category: 'money',
    what: {
      en: 'Covers online fraud, hacking, identity theft and the misuse of someone’s private pictures.',
      hi: 'ऑनलाइन धोखाधड़ी, हैकिंग, पहचान की चोरी और किसी की निजी तस्वीरों के दुरुपयोग को कवर करता है।',
    },
    whoItProtects: { en: 'Anyone who uses a phone, a bank account or the internet', hi: 'फ़ोन, बैंक खाता या इंटरनेट इस्तेमाल करने वाला कोई भी' },
    keyPoints: [
      {
        en: 'Section 66C — identity theft, including using someone else’s password or OTP.',
        hi: 'धारा 66C — पहचान की चोरी, जिसमें किसी और का पासवर्ड या OTP इस्तेमाल करना भी शामिल है।',
      },
      {
        en: 'Section 66D — cheating by pretending to be someone else, which covers most phone and UPI scams.',
        hi: 'धारा 66D — किसी और का रूप धरकर ठगी, जो अधिकांश फ़ोन और UPI ठगी को कवर करती है।',
      },
      {
        en: 'Section 66E — capturing or publishing a private image without consent.',
        hi: 'धारा 66E — बिना सहमति निजी तस्वीर लेना या प्रकाशित करना।',
      },
      {
        en: 'Section 67 and 67A — publishing obscene or sexually explicit material electronically.',
        hi: 'धारा 67 और 67A — इलेक्ट्रॉनिक रूप से अश्लील या यौन सामग्री प्रकाशित करना।',
      },
      {
        en: 'Section 66A, once used to arrest people over social media posts, was struck down in Shreya Singhal (2015). No FIR can be filed under it.',
        hi: 'धारा 66A, जिसका उपयोग सोशल मीडिया पोस्ट पर गिरफ़्तारी के लिए होता था, श्रेया सिंघल (2015) में रद्द कर दी गई। इसके तहत कोई FIR दर्ज नहीं हो सकती।',
      },
    ],
    useIt: [
      {
        en: 'For money lost online, call 1930 in the first hour — before you call anyone else. That is what freezes the fraudster’s account.',
        hi: 'ऑनलाइन पैसा जाए तो पहले घंटे में 1930 पर कॉल करें — किसी और को फ़ोन करने से पहले। इसी से ठग का खाता रुकता है।',
      },
      {
        en: 'Then file at cybercrime.gov.in. Reporting an unauthorised bank transaction within three days gives you zero liability.',
        hi: 'फिर cybercrime.gov.in पर दर्ज करें। अनधिकृत बैंक लेन-देन की सूचना तीन दिन में देने पर आपकी कोई देयता नहीं बनती।',
      },
    ],
    situations: ['cyber'],
    actions: ['fir', 'grievance'],
  },
  {
    id: 'motor-vehicles',
    icon: '🛵',
    short: { en: 'Motor Vehicles Act', hi: 'मोटर यान अधिनियम' },
    name: { en: 'Motor Vehicles Act', hi: 'मोटर यान अधिनियम' },
    year: '1988',
    category: 'money',
    what: {
      en: 'Governs licences, insurance and traffic fines — and pays compensation to accident victims.',
      hi: 'लाइसेंस, बीमा और यातायात जुर्माने को नियंत्रित करता है — और दुर्घटना पीड़ितों को मुआवज़ा दिलाता है।',
    },
    replaces: {
      en: 'The 2019 amendment raised penalties sharply and added protection for Good Samaritans.',
      hi: '2019 के संशोधन ने जुर्माने काफ़ी बढ़ाए और नेक व्यक्तियों को संरक्षण दिया।',
    },
    whoItProtects: { en: 'Drivers, passengers, pedestrians and accident victims', hi: 'चालक, यात्री, पैदल चलने वाले और दुर्घटना पीड़ित' },
    keyPoints: [
      {
        en: 'Section 134A — a Good Samaritan who takes an injured person to hospital cannot be detained, questioned repeatedly or made to pay.',
        hi: 'धारा 134A — घायल को अस्पताल पहुँचाने वाले नेक व्यक्ति को रोका, बार-बार पूछताछ या भुगतान के लिए मजबूर नहीं किया जा सकता।',
      },
      {
        en: 'Only an officer of Assistant Sub-Inspector rank or above may collect a fine on the spot, and only against a receipt.',
        hi: 'मौके पर जुर्माना केवल सहायक उप निरीक्षक या उससे ऊपर का अधिकारी ले सकता है, और वह भी केवल रसीद के साथ।',
      },
      {
        en: 'Digital documents shown through DigiLocker or mParivahan are legally valid — you need not carry paper.',
        hi: 'डिजिलॉकर या एमपरिवहन से दिखाए गए डिजिटल दस्तावेज़ कानूनन मान्य हैं — कागज़ रखना ज़रूरी नहीं।',
      },
      {
        en: 'Third-party insurance is compulsory, and a claim before the Motor Accident Claims Tribunal has no time limit.',
        hi: 'थर्ड पार्टी बीमा अनिवार्य है, और मोटर दुर्घटना दावा अधिकरण में दावे की कोई समय सीमा नहीं।',
      },
      {
        en: 'Hit-and-run compensation is payable by the government even when the vehicle is never traced.',
        hi: 'हिट-एंड-रन का मुआवज़ा सरकार देती है, चाहे वाहन कभी पकड़ा ही न जाए।',
      },
    ],
    useIt: [
      {
        en: 'Never pay cash without a receipt. Ask for the e-challan on your phone number and pay it online.',
        hi: 'बिना रसीद नकद कभी न दें। अपने मोबाइल नंबर पर ई-चालान माँगें और ऑनलाइन भरें।',
      },
      {
        en: 'After an accident, get the FIR and the medical records — a MACT claim is built on those two papers.',
        hi: 'दुर्घटना के बाद FIR और चिकित्सा रिकॉर्ड लें — MACT का दावा इन्हीं दो कागज़ों पर खड़ा होता है।',
      },
    ],
    situations: ['traffic', 'health'],
    actions: ['police-complaint', 'legal-aid'],
  },

  /* ---------------- family ---------------- */
  {
    id: 'hindu-succession',
    icon: '🏡',
    short: { en: 'Hindu Succession Act', hi: 'हिंदू उत्तराधिकार अधिनियम' },
    name: { en: 'Hindu Succession Act', hi: 'हिंदू उत्तराधिकार अधिनियम' },
    year: '1956',
    category: 'family',
    what: {
      en: 'Decides who inherits property. Since 2005 a daughter inherits exactly as a son does.',
      hi: 'तय करता है कि संपत्ति किसे मिलेगी। 2005 से बेटी को बेटे के बराबर हिस्सा मिलता है।',
    },
    replaces: {
      en: 'The 2005 amendment made daughters coparceners by birth. Vineeta Sharma (2020) confirmed this applies whether or not the father was alive in 2005.',
      hi: '2005 के संशोधन ने बेटियों को जन्म से सहदायिक बनाया। विनीता शर्मा (2020) ने पुष्टि की कि यह लागू है, चाहे 2005 में पिता जीवित रहे हों या नहीं।',
    },
    whoItProtects: {
      en: 'Hindus, Buddhists, Jains and Sikhs — especially daughters',
      hi: 'हिंदू, बौद्ध, जैन और सिख — विशेषकर बेटियाँ',
    },
    keyPoints: [
      {
        en: 'A daughter is a coparcener in the joint family property by birth, with the same rights and the same liabilities as a son.',
        hi: 'बेटी जन्म से संयुक्त परिवार की संपत्ति में सहदायिक है, बेटे के समान अधिकार और समान दायित्वों के साथ।',
      },
      {
        en: 'Marriage makes no difference. A married daughter’s share is untouched.',
        hi: 'विवाह से कोई फ़र्क़ नहीं पड़ता। विवाहित बेटी का हिस्सा वैसा ही रहता है।',
      },
      {
        en: 'Agricultural land is included — a point many families still get wrong.',
        hi: 'कृषि भूमि भी शामिल है — यह बात कई परिवार अब भी गलत समझते हैं।',
      },
      {
        en: 'If a man dies without a will, the widow, children and mother inherit equally as Class I heirs.',
        hi: 'यदि पुरुष बिना वसीयत मरे तो विधवा, संतान और माता वर्ग I उत्तराधिकारी के रूप में बराबर हिस्सा पाते हैं।',
      },
      {
        en: 'A woman’s property is absolutely her own. She may sell it or will it to anyone.',
        hi: 'महिला की संपत्ति पूर्णतः उसकी अपनी है। वह उसे बेच सकती है या किसी को भी वसीयत कर सकती है।',
      },
    ],
    useIt: [
      {
        en: 'Ask for a partition of the property in writing first. If refused, file a partition suit in the civil court.',
        hi: 'पहले लिखित में संपत्ति के बँटवारे की माँग करें। मना करने पर दीवानी न्यायालय में बँटवारे का वाद दायर करें।',
      },
      {
        en: 'A woman qualifies for a free lawyer for this whatever her income — call 15100.',
        hi: 'महिला को इसके लिए मुफ़्त वकील मिलता है, आय चाहे कुछ भी हो — 15100 पर कॉल करें।',
      },
    ],
    actions: ['legal-aid'],
  },
  {
    id: 'special-marriage',
    icon: '💍',
    short: { en: 'Special Marriage Act', hi: 'विशेष विवाह अधिनियम' },
    name: { en: 'Special Marriage Act', hi: 'विशेष विवाह अधिनियम' },
    year: '1954',
    category: 'family',
    what: {
      en: 'Lets two adults of any religion or caste marry without either of them converting.',
      hi: 'किसी भी धर्म या जाति के दो वयस्कों को बिना धर्म बदले विवाह करने देता है।',
    },
    whoItProtects: {
      en: 'Any two consenting adults — a man of 21 and a woman of 18 or above',
      hi: 'सहमति देने वाले कोई भी दो वयस्क — 21 वर्ष का पुरुष और 18 वर्ष या उससे अधिक की महिला',
    },
    keyPoints: [
      {
        en: 'Neither party has to change religion, and no religious ceremony is required.',
        hi: 'किसी को धर्म बदलने की ज़रूरत नहीं, और कोई धार्मिक रस्म भी आवश्यक नहीं।',
      },
      {
        en: 'A 30-day public notice is filed with the Marriage Officer of the district.',
        hi: 'ज़िले के विवाह अधिकारी के पास 30 दिन की सार्वजनिक सूचना दी जाती है।',
      },
      {
        en: 'Only a person with a legal ground can object, and the officer must decide the objection within 30 days.',
        hi: 'केवल विधिक आधार वाला व्यक्ति आपत्ति कर सकता है, और अधिकारी को 30 दिन में उस पर निर्णय देना होता है।',
      },
      {
        en: 'The Supreme Court has held repeatedly that two consenting adults need no one’s permission — not their family’s, not a khap’s.',
        hi: 'सुप्रीम कोर्ट बार-बार कह चुका है कि सहमति देने वाले दो वयस्कों को किसी की अनुमति नहीं चाहिए — न परिवार की, न किसी खाप की।',
      },
      {
        en: 'A couple facing threats can ask the High Court for police protection, and such orders are given routinely.',
        hi: 'धमकी झेल रहा जोड़ा हाईकोर्ट से पुलिस सुरक्षा माँग सकता है, और ऐसे आदेश नियमित रूप से दिए जाते हैं।',
      },
    ],
    useIt: [
      {
        en: 'If your family threatens you, file a police protection petition in the High Court. It is usually heard within days.',
        hi: 'परिवार धमकाए तो हाईकोर्ट में पुलिस सुरक्षा याचिका दायर करें। यह आमतौर पर कुछ ही दिनों में सुनी जाती है।',
      },
    ],
    actions: ['writ', 'legal-aid'],
  },

  /* ---------------- welfare ---------------- */
  {
    id: 'nfsa',
    icon: '🌾',
    short: { en: 'Food Security Act', hi: 'खाद्य सुरक्षा अधिनियम' },
    name: { en: 'National Food Security Act', hi: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम' },
    year: '2013',
    category: 'welfare',
    what: {
      en: 'Makes subsidised food grain a legal entitlement rather than a scheme that can be withdrawn.',
      hi: 'रियायती अनाज को एक कानूनी हक़ बनाता है, न कि ऐसी योजना जो कभी भी वापस ली जा सके।',
    },
    whoItProtects: {
      en: 'Up to 75% of rural and 50% of urban households',
      hi: 'ग्रामीण क्षेत्रों के 75% तक और शहरी क्षेत्रों के 50% तक परिवार',
    },
    keyPoints: [
      {
        en: '5 kg of grain per person per month at a subsidised price, and 35 kg per household for Antyodaya families.',
        hi: 'प्रति व्यक्ति प्रति माह 5 किलो अनाज रियायती दर पर, और अंत्योदय परिवारों को प्रति परिवार 35 किलो।',
      },
      {
        en: 'The ration card is issued in the name of the eldest woman of the household, aged 18 or above.',
        hi: 'राशन कार्ड परिवार की सबसे बड़ी महिला के नाम पर जारी होता है, जिसकी आयु 18 वर्ष या अधिक हो।',
      },
      {
        en: 'Every pregnant woman gets a maternity benefit of at least ₹6,000 and free meals at the anganwadi.',
        hi: 'हर गर्भवती महिला को कम से कम ₹6,000 मातृत्व लाभ और आंगनवाड़ी में नि:शुल्क भोजन मिलता है।',
      },
      {
        en: 'A free mid-day meal for every child up to Class VIII.',
        hi: 'कक्षा आठ तक के हर बच्चे के लिए नि:शुल्क मध्याह्न भोजन।',
      },
      {
        en: 'If the grain is not given, you are entitled to a food security allowance in cash.',
        hi: 'अनाज न मिले तो आप नकद खाद्य सुरक्षा भत्ते के हकदार हैं।',
      },
    ],
    useIt: [
      {
        en: 'A dealer refusing or short-weighing your ration is a complaint to the District Grievance Redressal Officer.',
        hi: 'डीलर राशन देने से मना करे या कम तोले तो ज़िला शिकायत निवारण अधिकारी को शिकायत करें।',
      },
      {
        en: 'One Nation One Ration Card means you can draw your ration from any fair price shop in India.',
        hi: 'वन नेशन वन राशन कार्ड का अर्थ है कि आप भारत की किसी भी उचित मूल्य की दुकान से राशन ले सकते हैं।',
      },
    ],
    actions: ['grievance', 'rti'],
  },
  {
    id: 'mgnrega',
    icon: '⛏️',
    short: { en: 'MGNREGA', hi: 'मनरेगा' },
    name: {
      en: 'Mahatma Gandhi National Rural Employment Guarantee Act',
      hi: 'महात्मा गांधी राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम',
    },
    year: '2005',
    category: 'welfare',
    what: {
      en: 'Guarantees a hundred days of paid work a year to every rural household that asks for it.',
      hi: 'हर ग्रामीण परिवार को, जो माँगे, साल में सौ दिन का सवेतन काम सुनिश्चित करता है।',
    },
    whoItProtects: { en: 'Every rural household willing to do unskilled manual work', hi: 'अकुशल शारीरिक काम करने को तैयार हर ग्रामीण परिवार' },
    keyPoints: [
      {
        en: 'A job card is free and must be issued within 15 days of applying.',
        hi: 'जॉब कार्ड नि:शुल्क है और आवेदन के 15 दिन के भीतर जारी होना चाहिए।',
      },
      {
        en: 'Work must be given within 15 days of demanding it, and within 5 km of the village.',
        hi: 'काम माँगने के 15 दिन के भीतर, और गाँव से 5 किलोमीटर के भीतर मिलना चाहिए।',
      },
      {
        en: 'If no work is given, an unemployment allowance is payable by the State.',
        hi: 'काम न मिले तो राज्य को बेरोज़गारी भत्ता देना होता है।',
      },
      {
        en: 'Wages must reach your account within 15 days, with compensation for delay.',
        hi: 'मज़दूरी 15 दिन के भीतर आपके खाते में आनी चाहिए, देरी पर मुआवज़े के साथ।',
      },
      {
        en: 'At least one third of the workers must be women, and equal wages are paid to men and women.',
        hi: 'कम से कम एक तिहाई कामगार महिलाएँ होनी चाहिए, और स्त्री-पुरुष को समान मज़दूरी मिलती है।',
      },
      {
        en: 'Every project is subject to a public social audit by the gram sabha.',
        hi: 'हर काम की ग्राम सभा द्वारा सार्वजनिक सामाजिक ऑडिट होती है।',
      },
    ],
    useIt: [
      {
        en: 'Always apply for work in writing and take a dated receipt. Without that receipt the 15-day clock never starts.',
        hi: 'काम के लिए हमेशा लिखित आवेदन दें और तारीख वाली रसीद लें। उस रसीद के बिना 15 दिन की घड़ी शुरू ही नहीं होती।',
      },
      {
        en: 'An RTI asking for the muster roll and payment dates is the fastest way to expose a missing wage.',
        hi: 'मस्टर रोल और भुगतान की तारीखें माँगने वाली RTI, गायब मज़दूरी उजागर करने का सबसे तेज़ रास्ता है।',
      },
    ],
    actions: ['rti', 'grievance'],
  },
];

export const ACT_BY_ID: Record<string, Act> = Object.fromEntries(ACTS.map((a) => [a.id, a]));
