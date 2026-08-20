import type { Right } from '../types';

/**
 * Part III of the Constitution, Articles 12-35.
 * These are enforceable: if the State breaks one, you can go straight to a
 * High Court (Art 226) or the Supreme Court (Art 32).
 */
export const RIGHTS: Right[] = [
  {
    id: 'equality',
    icon: '⚖️',
    articles: { en: 'Articles 14 – 18', hi: 'अनुच्छेद 14 – 18' },
    title: { en: 'Right to Equality', hi: 'समानता का अधिकार' },
    summary: {
      en: 'The law treats you the same as everyone else — whatever your caste, religion, sex, birthplace or wealth.',
      hi: 'कानून आपके साथ सबके बराबर व्यवहार करता है — चाहे आपकी जाति, धर्म, लिंग, जन्मस्थान या हैसियत कुछ भी हो।',
    },
    meaning: [
      {
        en: 'No person is above the law and no person is below its protection. A minister and a daily-wage worker face the same courts.',
        hi: 'कोई भी कानून से ऊपर नहीं है और कोई भी उसकी सुरक्षा से बाहर नहीं। मंत्री और दिहाड़ी मज़दूर, दोनों के लिए अदालत एक ही है।',
      },
      {
        en: 'The State cannot refuse you a service, a job or a seat because of your religion, race, caste, sex or place of birth.',
        hi: 'सरकार आपको आपके धर्म, नस्ल, जाति, लिंग या जन्मस्थान के कारण कोई सेवा, नौकरी या सीट देने से मना नहीं कर सकती।',
      },
      {
        en: 'Shops, hotels, wells, roads, bathing ghats and places of public entertainment must be open to you on the same terms as anyone else.',
        hi: 'दुकान, होटल, कुआँ, सड़क, घाट और सार्वजनिक मनोरंजन की जगहें आपके लिए भी उन्हीं शर्तों पर खुली होनी चाहिए जैसे किसी और के लिए।',
      },
      {
        en: 'Untouchability is not just wrong — it is a crime, and practising it in any form is punishable.',
        hi: 'छुआछूत सिर्फ़ गलत नहीं है — यह अपराध है, और किसी भी रूप में इसे मानना दंडनीय है।',
      },
      {
        en: 'Treating unequals differently is allowed. Reservation, schemes for the poor and special provisions for women and children are part of equality, not exceptions to it.',
        hi: 'असमान के साथ अलग व्यवहार करना जायज़ है। आरक्षण, गरीबों के लिए योजनाएँ और महिलाओं-बच्चों के लिए विशेष प्रावधान समानता का हिस्सा हैं, उसका अपवाद नहीं।',
      },
    ],
    detail: [
      {
        number: { en: 'Article 14', hi: 'अनुच्छेद 14' },
        title: { en: 'Equality before law', hi: 'विधि के समक्ष समता' },
        plain: {
          en: 'The State shall not deny to any person equality before the law or the equal protection of the laws. It covers every person in India — citizens, foreigners and companies alike.',
          hi: 'राज्य किसी व्यक्ति को विधि के समक्ष समता या विधियों के समान संरक्षण से वंचित नहीं करेगा। यह भारत में मौजूद हर व्यक्ति पर लागू है — नागरिक, विदेशी और कंपनियाँ भी।',
        },
      },
      {
        number: { en: 'Article 15', hi: 'अनुच्छेद 15' },
        title: { en: 'No discrimination', hi: 'भेदभाव का प्रतिषेध' },
        plain: {
          en: 'No discrimination on grounds only of religion, race, caste, sex or place of birth — including access to shops, hotels, wells, roads and public places. The State may still make special provisions for women, children, socially and educationally backward classes, SC/ST and economically weaker sections.',
          hi: 'केवल धर्म, नस्ल, जाति, लिंग या जन्मस्थान के आधार पर भेदभाव नहीं — दुकान, होटल, कुएँ, सड़क और सार्वजनिक स्थानों तक पहुँच में भी। फिर भी राज्य महिलाओं, बच्चों, सामाजिक-शैक्षिक रूप से पिछड़े वर्गों, SC/ST और आर्थिक रूप से कमज़ोर वर्गों के लिए विशेष प्रावधान कर सकता है।',
        },
      },
      {
        number: { en: 'Article 16', hi: 'अनुच्छेद 16' },
        title: { en: 'Equal opportunity in government jobs', hi: 'सरकारी नौकरी में अवसर की समानता' },
        plain: {
          en: 'Every citizen gets an equal chance at public employment. Reservation for backward classes, SC/ST and economically weaker sections is expressly permitted.',
          hi: 'हर नागरिक को सरकारी नौकरी में समान अवसर मिलेगा। पिछड़े वर्गों, SC/ST और आर्थिक रूप से कमज़ोर वर्गों के लिए आरक्षण की स्पष्ट अनुमति है।',
        },
      },
      {
        number: { en: 'Article 17', hi: 'अनुच्छेद 17' },
        title: { en: 'Abolition of untouchability', hi: 'अस्पृश्यता का अंत' },
        plain: {
          en: 'Untouchability is abolished and its practice in any form is forbidden. Enforcing any disability arising out of it is an offence under the Protection of Civil Rights Act, 1955.',
          hi: 'अस्पृश्यता समाप्त की जाती है और किसी भी रूप में इसका आचरण निषिद्ध है। इससे उपजी किसी भी अयोग्यता को लागू करना नागरिक अधिकार संरक्षण अधिनियम, 1955 के तहत अपराध है।',
        },
      },
      {
        number: { en: 'Article 18', hi: 'अनुच्छेद 18' },
        title: { en: 'Abolition of titles', hi: 'उपाधियों का अंत' },
        plain: {
          en: 'The State grants no titles of nobility. Military and academic distinctions are allowed, and national awards such as the Bharat Ratna are not to be used as a prefix to your name.',
          hi: 'राज्य कोई कुलीनता की उपाधि नहीं देगा। सैन्य और शैक्षणिक सम्मान की अनुमति है, और भारत रत्न जैसे राष्ट्रीय सम्मान को नाम के आगे उपाधि की तरह नहीं लगाया जा सकता।',
        },
      },
    ],
    examples: [
      {
        en: 'A landlord or hostel refuses you a room after learning your caste or religion.',
        hi: 'मकान मालिक या हॉस्टल आपकी जाति या धर्म जानने के बाद कमरा देने से मना कर देता है।',
      },
      {
        en: 'A temple, well, barber shop or crematorium is kept off-limits for people of a particular caste.',
        hi: 'किसी जाति के लोगों के लिए मंदिर, कुआँ, नाई की दुकान या श्मशान बंद रखा जाता है।',
      },
      {
        en: 'A government job advertisement quietly prefers men for a role women can do equally well.',
        hi: 'सरकारी नौकरी का विज्ञापन ऐसे पद के लिए चुपचाप पुरुषों को तरजीह देता है जिसे महिलाएँ भी उतनी ही अच्छी तरह कर सकती हैं।',
      },
      {
        en: 'A school makes children of one community sit separately or eat separately at the mid-day meal.',
        hi: 'स्कूल एक समुदाय के बच्चों को अलग बैठाता है या मध्याह्न भोजन अलग खिलाता है।',
      },
    ],
    ifViolated: [
      {
        en: 'Write down what happened, when, where and who was present. Keep the advertisement, message, rent notice or rejection letter.',
        hi: 'लिखें कि क्या हुआ, कब, कहाँ और कौन मौजूद था। विज्ञापन, संदेश, किराया-नोटिस या अस्वीकृति पत्र संभाल कर रखें।',
      },
      {
        en: 'If it is caste-based, an FIR can be filed under the SC/ST (Prevention of Atrocities) Act, 1989 — it is a cognizable, non-bailable offence and the police must register it.',
        hi: 'अगर मामला जाति आधारित है तो SC/ST (अत्याचार निवारण) अधिनियम, 1989 के तहत FIR दर्ज हो सकती है — यह संज्ञेय, गैर-ज़मानती अपराध है और पुलिस को दर्ज करना ही होगा।',
      },
      {
        en: 'Complain to the National or State Commission for SC, ST, Women, Minorities or Backward Classes, depending on the ground of discrimination.',
        hi: 'भेदभाव के आधार के अनुसार SC, ST, महिला, अल्पसंख्यक या पिछड़ा वर्ग आयोग (राष्ट्रीय या राज्य) में शिकायत करें।',
      },
      {
        en: 'If a government office, school or public authority did it, file a writ petition in the High Court under Article 226. Legal aid is free if you cannot afford a lawyer.',
        hi: 'अगर यह किसी सरकारी दफ़्तर, स्कूल या प्राधिकरण ने किया है, तो अनुच्छेद 226 के तहत हाईकोर्ट में रिट याचिका दायर करें। वकील का खर्च न उठा सकें तो कानूनी सहायता मुफ़्त है।',
      },
    ],
    limits: [
      {
        en: 'Equality means treating equals equally. A rule that separates people on a real, sensible basis — say, age limits for a job — is valid.',
        hi: 'समानता का मतलब है बराबर लोगों के साथ बराबर व्यवहार। किसी वास्तविक, समझदार आधार पर बना नियम — जैसे नौकरी की आयु सीमा — वैध है।',
      },
      {
        en: 'Articles 15 and 16 protect citizens; Article 14 protects every person including foreigners.',
        hi: 'अनुच्छेद 15 और 16 नागरिकों की रक्षा करते हैं; अनुच्छेद 14 विदेशियों समेत हर व्यक्ति की।',
      },
      {
        en: 'The President, Governors and foreign diplomats have limited immunity from certain proceedings while in office.',
        hi: 'राष्ट्रपति, राज्यपाल और विदेशी राजनयिकों को पद पर रहते कुछ कार्यवाहियों से सीमित छूट प्राप्त है।',
      },
    ],
    landmark: [
      {
        case: { en: 'State of West Bengal v. Anwar Ali Sarkar (1952)', hi: 'पश्चिम बंगाल राज्य बनाम अनवर अली सरकार (1952)' },
        held: {
          en: 'Any classification made by a law must rest on a real difference and must connect to the purpose of the law.',
          hi: 'किसी भी कानून का वर्गीकरण वास्तविक अंतर पर आधारित होना चाहिए और कानून के उद्देश्य से जुड़ा होना चाहिए।',
        },
      },
      {
        case: { en: 'Indra Sawhney v. Union of India (1992)', hi: 'इंद्रा साहनी बनाम भारत संघ (1992)' },
        held: {
          en: 'Reservation is constitutional, but as a general rule it should not exceed 50% of the seats.',
          hi: 'आरक्षण संवैधानिक है, पर सामान्य नियम के रूप में यह सीटों के 50% से अधिक नहीं होना चाहिए।',
        },
      },
      {
        case: { en: 'Navtej Singh Johar v. Union of India (2018)', hi: 'नवतेज सिंह जौहर बनाम भारत संघ (2018)' },
        held: {
          en: 'Criminalising consensual same-sex relations between adults violated equality and dignity.',
          hi: 'वयस्कों के बीच सहमति से बने समलैंगिक संबंधों को अपराध बनाना समानता और गरिमा का उल्लंघन था।',
        },
      },
    ],
    actions: ['fir', 'writ', 'legal-aid'],
  },

  {
    id: 'freedom',
    icon: '🕊️',
    articles: { en: 'Articles 19 – 22', hi: 'अनुच्छेद 19 – 22' },
    title: { en: 'Right to Freedom', hi: 'स्वतंत्रता का अधिकार' },
    summary: {
      en: 'Speak, gather, move, live and work where you choose — and if you are ever arrested, a strict set of protections switches on.',
      hi: 'बोलें, इकट्ठा हों, घूमें, रहें और जहाँ चाहें काम करें — और अगर कभी गिरफ़्तार हों तो सुरक्षा के सख़्त नियम तुरंत लागू हो जाते हैं।',
    },
    meaning: [
      {
        en: 'You may criticise the government, a policy or a leader. Disagreeing with those in power is not a crime.',
        hi: 'आप सरकार, नीति या नेता की आलोचना कर सकते हैं। सत्ता से असहमत होना अपराध नहीं है।',
      },
      {
        en: 'You may protest peacefully and without weapons, and form a union, a party, an NGO or a society.',
        hi: 'आप शांतिपूर्वक और बिना हथियार प्रदर्शन कर सकते हैं, और संघ, पार्टी, एनजीओ या समिति बना सकते हैं।',
      },
      {
        en: 'You may travel, settle and take up any lawful trade anywhere in India. No inner passport, no permission needed.',
        hi: 'आप भारत में कहीं भी यात्रा कर सकते हैं, बस सकते हैं और कोई भी वैध व्यवसाय कर सकते हैं। किसी परमिट या अनुमति की ज़रूरत नहीं।',
      },
      {
        en: 'Article 21 is the widest right in the Constitution. Courts have read into it the right to privacy, dignity, livelihood, health, clean air and water, shelter, a speedy trial and a life free from cruelty.',
        hi: 'अनुच्छेद 21 संविधान का सबसे व्यापक अधिकार है। अदालतों ने इसमें निजता, गरिमा, आजीविका, स्वास्थ्य, स्वच्छ हवा-पानी, आश्रय, शीघ्र सुनवाई और क्रूरता से मुक्त जीवन का अधिकार शामिल माना है।',
      },
      {
        en: 'You cannot be punished under a law made after the act, tried twice for the same offence, or forced to be a witness against yourself.',
        hi: 'आपको उस कानून के तहत सज़ा नहीं दी जा सकती जो कृत्य के बाद बना हो, एक ही अपराध के लिए दो बार मुकदमा नहीं चल सकता, और आपको अपने विरुद्ध गवाही देने पर मजबूर नहीं किया जा सकता।',
      },
    ],
    detail: [
      {
        number: { en: 'Article 19(1)', hi: 'अनुच्छेद 19(1)' },
        title: { en: 'Six freedoms', hi: 'छह स्वतंत्रताएँ' },
        plain: {
          en: 'Freedom of speech and expression; to assemble peaceably and without arms; to form associations or unions; to move freely throughout India; to reside and settle anywhere; and to practise any profession or carry on any occupation, trade or business.',
          hi: 'वाक् और अभिव्यक्ति की स्वतंत्रता; बिना हथियार शांतिपूर्वक एकत्र होने की; संघ या यूनियन बनाने की; पूरे भारत में स्वतंत्र आवागमन की; कहीं भी निवास और बसने की; और कोई भी वृत्ति, उपजीविका, व्यापार या कारोबार करने की स्वतंत्रता।',
        },
      },
      {
        number: { en: 'Article 19(2)–(6)', hi: 'अनुच्छेद 19(2)–(6)' },
        title: { en: 'Reasonable restrictions', hi: 'उचित प्रतिबंध' },
        plain: {
          en: 'These freedoms can be limited by law only on stated grounds — sovereignty and integrity of India, security of the State, friendly relations with foreign States, public order, decency or morality, contempt of court, defamation, or incitement to an offence. The restriction must be reasonable, not arbitrary.',
          hi: 'इन स्वतंत्रताओं को केवल तय आधारों पर कानून द्वारा सीमित किया जा सकता है — भारत की संप्रभुता व अखंडता, राज्य की सुरक्षा, विदेशी राज्यों से मैत्री, लोक व्यवस्था, शिष्टाचार या नैतिकता, न्यायालय की अवमानना, मानहानि, या अपराध के लिए उकसावा। प्रतिबंध उचित होना चाहिए, मनमाना नहीं।',
        },
      },
      {
        number: { en: 'Article 20', hi: 'अनुच्छेद 20' },
        title: { en: 'Protection in respect of conviction', hi: 'दोषसिद्धि के संबंध में संरक्षण' },
        plain: {
          en: 'No punishment under a law that did not exist when the act was done; no punishment greater than the law then allowed; no prosecution and punishment twice for the same offence; and no person accused of an offence can be compelled to be a witness against himself.',
          hi: 'ऐसे कानून के तहत सज़ा नहीं जो कृत्य के समय मौजूद ही न था; उस समय के कानून से अधिक सज़ा नहीं; एक ही अपराध के लिए दो बार अभियोजन और दंड नहीं; और किसी अभियुक्त को अपने विरुद्ध गवाह बनने के लिए मजबूर नहीं किया जा सकता।',
        },
      },
      {
        number: { en: 'Article 21', hi: 'अनुच्छेद 21' },
        title: { en: 'Right to life and personal liberty', hi: 'प्राण और दैहिक स्वतंत्रता का अधिकार' },
        plain: {
          en: 'No person shall be deprived of life or personal liberty except according to a procedure established by law — and that procedure must itself be fair, just and reasonable. Life here means a life with dignity, not mere animal existence.',
          hi: 'किसी व्यक्ति को उसके प्राण या दैहिक स्वतंत्रता से विधि द्वारा स्थापित प्रक्रिया के अलावा वंचित नहीं किया जाएगा — और वह प्रक्रिया स्वयं न्यायसंगत, उचित और तर्कसंगत होनी चाहिए। यहाँ जीवन का अर्थ गरिमापूर्ण जीवन है, केवल जीवित रहना नहीं।',
        },
      },
      {
        number: { en: 'Article 21A', hi: 'अनुच्छेद 21A' },
        title: { en: 'Right to education', hi: 'शिक्षा का अधिकार' },
        plain: {
          en: 'Free and compulsory education for every child between 6 and 14 years. Put into practice by the Right of Children to Free and Compulsory Education Act, 2009.',
          hi: '6 से 14 वर्ष के हर बच्चे के लिए नि:शुल्क और अनिवार्य शिक्षा। इसे बच्चों को नि:शुल्क और अनिवार्य शिक्षा का अधिकार अधिनियम, 2009 के ज़रिए लागू किया गया।',
        },
      },
      {
        number: { en: 'Article 22', hi: 'अनुच्छेद 22' },
        title: { en: 'Protection against arrest', hi: 'गिरफ़्तारी के विरुद्ध संरक्षण' },
        plain: {
          en: 'An arrested person must be told the grounds of arrest, may consult and be defended by a lawyer of their choice, and must be produced before a magistrate within 24 hours (excluding travel time). Detention beyond 24 hours needs the magistrate’s authority. Separate, weaker rules apply to preventive detention.',
          hi: 'गिरफ़्तार व्यक्ति को गिरफ़्तारी का आधार बताया जाना चाहिए, वह अपनी पसंद के वकील से मिल और पैरवी करा सकता है, और उसे 24 घंटे के भीतर मजिस्ट्रेट के सामने पेश करना होगा (यात्रा का समय छोड़कर)। 24 घंटे से अधिक हिरासत के लिए मजिस्ट्रेट की अनुमति चाहिए। निवारक निरोध पर अलग, कमज़ोर नियम लागू होते हैं।',
        },
      },
    ],
    examples: [
      {
        en: 'Police pick you up for a social media post criticising a local official.',
        hi: 'किसी स्थानीय अधिकारी की आलोचना वाली सोशल मीडिया पोस्ट पर पुलिस आपको उठा ले जाती है।',
      },
      {
        en: 'A peaceful sit-in by farmers or students is broken up without any order of law.',
        hi: 'किसानों या छात्रों का शांतिपूर्ण धरना बिना किसी कानूनी आदेश के हटा दिया जाता है।',
      },
      {
        en: 'You are held at a police station overnight and never produced before a magistrate.',
        hi: 'आपको रातभर थाने में बिठाया जाता है और कभी मजिस्ट्रेट के सामने पेश नहीं किया जाता।',
      },
      {
        en: 'A hospital refuses emergency treatment to an accident victim for want of paperwork or money.',
        hi: 'अस्पताल दुर्घटना के घायल को कागज़ या पैसे न होने के कारण आपातकालीन इलाज देने से मना करता है।',
      },
      {
        en: 'An employer or app collects and sells your personal data without your consent.',
        hi: 'नियोक्ता या ऐप आपकी सहमति के बिना आपका निजी डेटा इकट्ठा कर बेच देता है।',
      },
    ],
    ifViolated: [
      {
        en: 'If someone is in illegal custody, file a habeas corpus petition in the High Court. Any person — a friend or relative — can file it, and even a letter or email to the court has been accepted.',
        hi: 'अगर कोई अवैध हिरासत में है तो हाईकोर्ट में बंदी प्रत्यक्षीकरण (habeas corpus) याचिका दायर करें। कोई भी व्यक्ति — दोस्त या रिश्तेदार — दायर कर सकता है, और अदालत ने पत्र या ईमेल तक स्वीकार किया है।',
      },
      {
        en: 'Insist on your Article 22 rights at the moment of arrest: the grounds in writing, a phone call, a lawyer, and production before a magistrate within 24 hours.',
        hi: 'गिरफ़्तारी के वक़्त अनुच्छेद 22 के अधिकार माँगें: लिखित आधार, एक फ़ोन कॉल, वकील, और 24 घंटे में मजिस्ट्रेट के सामने पेशी।',
      },
      {
        en: 'Complain in writing to the Superintendent of Police, the State Human Rights Commission, or the National Human Rights Commission at hrcnet.nhrc.gov.in.',
        hi: 'लिखित शिकायत पुलिस अधीक्षक, राज्य मानवाधिकार आयोग, या राष्ट्रीय मानवाधिकार आयोग (hrcnet.nhrc.gov.in) को भेजें।',
      },
      {
        en: 'For custodial violence, ask the magistrate for a medical examination — you have a right to be examined by a doctor, and to a fresh examination every 48 hours in custody.',
        hi: 'हिरासत में हिंसा हो तो मजिस्ट्रेट से चिकित्सीय जाँच माँगें — डॉक्टर से जाँच कराने का अधिकार आपको है, और हिरासत में हर 48 घंटे में दोबारा जाँच का भी।',
      },
    ],
    limits: [
      {
        en: 'These freedoms belong to citizens only. Article 21, however, protects every person in India.',
        hi: 'ये स्वतंत्रताएँ केवल नागरिकों को हैं। पर अनुच्छेद 21 भारत में मौजूद हर व्यक्ति की रक्षा करता है।',
      },
      {
        en: 'Speech that incites violence, defames a person, or is obscene can be restricted by law. The restriction must come from a law, not from an officer’s whim.',
        hi: 'हिंसा भड़काने वाली, किसी की मानहानि करने वाली या अश्लील अभिव्यक्ति कानून द्वारा सीमित की जा सकती है। प्रतिबंध कानून से आना चाहिए, किसी अफ़सर की मर्ज़ी से नहीं।',
      },
      {
        en: 'A protest must be peaceful and unarmed. Blocking a highway indefinitely has been held to go beyond the right.',
        hi: 'प्रदर्शन शांतिपूर्ण और निहत्था होना चाहिए। राजमार्ग को अनिश्चितकाल तक रोकना अधिकार से परे माना गया है।',
      },
      {
        en: 'The protections of Article 22(1) and (2) do not apply to enemy aliens or to persons held under a preventive detention law.',
        hi: 'अनुच्छेद 22(1) और (2) के संरक्षण शत्रु विदेशियों या निवारक निरोध कानून के तहत बंद व्यक्तियों पर लागू नहीं होते।',
      },
      {
        en: 'The right to property was removed from this list by the 44th Amendment in 1978. It survives as a constitutional legal right under Article 300A.',
        hi: 'संपत्ति का अधिकार 44वें संशोधन (1978) से इस सूची से हटा दिया गया। यह अनुच्छेद 300A के तहत संवैधानिक विधिक अधिकार के रूप में बना हुआ है।',
      },
    ],
    landmark: [
      {
        case: { en: 'Maneka Gandhi v. Union of India (1978)', hi: 'मेनका गांधी बनाम भारत संघ (1978)' },
        held: {
          en: 'A procedure that takes away liberty must be fair, just and reasonable — not merely written down somewhere.',
          hi: 'स्वतंत्रता छीनने वाली प्रक्रिया न्यायसंगत, उचित और तर्कसंगत होनी चाहिए — केवल कहीं लिखी होना काफ़ी नहीं।',
        },
      },
      {
        case: { en: 'D.K. Basu v. State of West Bengal (1997)', hi: 'डी.के. बसु बनाम पश्चिम बंगाल राज्य (1997)' },
        held: {
          en: 'Laid down binding arrest rules: clear name tags, an arrest memo signed by a witness, informing a relative, and a medical examination.',
          hi: 'गिरफ़्तारी के बाध्यकारी नियम तय किए: स्पष्ट नामपट्टिका, गवाह से हस्ताक्षरित गिरफ़्तारी मेमो, परिजन को सूचना, और चिकित्सीय जाँच।',
        },
      },
      {
        case: { en: 'K.S. Puttaswamy v. Union of India (2017)', hi: 'के.एस. पुट्टास्वामी बनाम भारत संघ (2017)' },
        held: {
          en: 'Privacy is a fundamental right, part of the right to life and liberty under Article 21.',
          hi: 'निजता एक मौलिक अधिकार है, जो अनुच्छेद 21 के जीवन और स्वतंत्रता के अधिकार का हिस्सा है।',
        },
      },
      {
        case: { en: 'Shreya Singhal v. Union of India (2015)', hi: 'श्रेया सिंघल बनाम भारत संघ (2015)' },
        held: {
          en: 'Section 66A of the IT Act, used to arrest people for online posts, was struck down as vague and a violation of free speech.',
          hi: 'ऑनलाइन पोस्ट पर गिरफ़्तारी के लिए इस्तेमाल IT एक्ट की धारा 66A अस्पष्ट और अभिव्यक्ति की स्वतंत्रता का उल्लंघन मानकर रद्द कर दी गई।',
        },
      },
    ],
    actions: ['fir', 'writ', 'police-complaint', 'legal-aid'],
  },

  {
    id: 'exploitation',
    icon: '⛓️',
    articles: { en: 'Articles 23 – 24', hi: 'अनुच्छेद 23 – 24' },
    title: { en: 'Right against Exploitation', hi: 'शोषण के विरुद्ध अधिकार' },
    summary: {
      en: 'No one may be trafficked, forced to work for free, kept in bonded labour, or made to work as a child in a hazardous job.',
      hi: 'किसी की तस्करी नहीं हो सकती, न किसी से बेगार कराई जा सकती है, न बंधुआ मज़दूरी, और न ही किसी बच्चे से खतरनाक काम कराया जा सकता है।',
    },
    meaning: [
      {
        en: 'Buying, selling or transporting a human being for labour, marriage, begging or sex work is a serious crime.',
        hi: 'किसी इंसान को मज़दूरी, विवाह, भीख या देह व्यापार के लिए खरीदना, बेचना या ले जाना गंभीर अपराध है।',
      },
      {
        en: 'Begar — being made to work without pay — and bonded labour against an old debt are both banned. Such a debt is legally wiped out.',
        hi: 'बेगार — बिना मज़दूरी काम कराना — और पुराने कर्ज़ के बदले बंधुआ मज़दूरी, दोनों प्रतिबंधित हैं। ऐसा कर्ज़ कानूनन समाप्त माना जाता है।',
      },
      {
        en: 'Paying below the notified minimum wage is treated as a form of forced labour by the Supreme Court.',
        hi: 'अधिसूचित न्यूनतम मज़दूरी से कम भुगतान को सुप्रीम कोर्ट ने बलात् श्रम का ही एक रूप माना है।',
      },
      {
        en: 'No child under 14 may be employed in any occupation, and no one under 18 in a hazardous one such as mines, firecrackers or chemicals.',
        hi: '14 वर्ष से कम उम्र का बच्चा किसी भी काम में नहीं लगाया जा सकता, और 18 से कम उम्र का खतरनाक काम में — जैसे खदान, पटाखे या रसायन।',
      },
      {
        en: 'Manual scavenging — cleaning sewers or septic tanks by hand — is prohibited outright.',
        hi: 'हाथ से मैला ढोना — सीवर या सेप्टिक टैंक की हाथ से सफ़ाई — पूरी तरह प्रतिबंधित है।',
      },
    ],
    detail: [
      {
        number: { en: 'Article 23', hi: 'अनुच्छेद 23' },
        title: { en: 'No trafficking or forced labour', hi: 'मानव तस्करी और बलात् श्रम का प्रतिषेध' },
        plain: {
          en: 'Traffic in human beings, begar and other similar forms of forced labour are prohibited, and any breach is an offence punishable by law. The State may still impose compulsory service for public purposes, such as military service.',
          hi: 'मानव का दुर्व्यापार, बेगार और इसी तरह के अन्य बलात् श्रम प्रतिषिद्ध हैं, और उल्लंघन कानून द्वारा दंडनीय अपराध है। राज्य सार्वजनिक प्रयोजनों के लिए अनिवार्य सेवा, जैसे सैन्य सेवा, फिर भी लगा सकता है।',
        },
      },
      {
        number: { en: 'Article 24', hi: 'अनुच्छेद 24' },
        title: { en: 'No child labour in hazardous work', hi: 'खतरनाक काम में बाल श्रम का प्रतिषेध' },
        plain: {
          en: 'No child below 14 years shall be employed in any factory, mine or other hazardous employment. The Child Labour (Prohibition and Regulation) Amendment Act, 2016 goes further and bans all employment of children below 14 except helping in a family business outside school hours.',
          hi: '14 वर्ष से कम आयु का कोई बालक किसी कारखाने, खान या अन्य खतरनाक नियोजन में नहीं लगाया जाएगा। बाल श्रम (प्रतिषेध और विनियमन) संशोधन अधिनियम, 2016 इससे आगे जाकर 14 से कम आयु के बच्चों के हर नियोजन पर रोक लगाता है, सिवाय स्कूल के बाद पारिवारिक काम में हाथ बँटाने के।',
        },
      },
    ],
    examples: [
      {
        en: 'A brick kiln or farm keeps a family working for years against an old loan they can never repay.',
        hi: 'ईंट भट्ठा या खेत किसी परिवार से बरसों तक ऐसे पुराने कर्ज़ के बदले काम कराता है जो कभी चुकता ही नहीं होता।',
      },
      {
        en: 'A domestic worker’s wages are withheld and she is not allowed to leave the house.',
        hi: 'घरेलू कामगार की मज़दूरी रोक ली जाती है और उसे घर से निकलने नहीं दिया जाता।',
      },
      {
        en: 'A dhaba, workshop or firecracker unit employs children instead of adults.',
        hi: 'ढाबा, वर्कशॉप या पटाखा इकाई वयस्कों की जगह बच्चों से काम कराती है।',
      },
      {
        en: 'A worker is sent into a septic tank without safety gear.',
        hi: 'किसी कामगार को बिना सुरक्षा उपकरण सेप्टिक टैंक में उतारा जाता है।',
      },
    ],
    ifViolated: [
      {
        en: 'Call 1098 (Childline) for a child at work, or 112 for immediate danger. Both are free and work day and night.',
        hi: 'काम करते बच्चे के लिए 1098 (चाइल्डलाइन) पर कॉल करें, या तुरंत खतरे में 112 पर। दोनों मुफ़्त हैं और दिन-रात चलती हैं।',
      },
      {
        en: 'Report bonded labour to the District Magistrate or Sub-Divisional Magistrate — they head the Vigilance Committee and can order release and a rehabilitation payment.',
        hi: 'बंधुआ मज़दूरी की सूचना ज़िलाधिकारी या उपखंड मजिस्ट्रेट को दें — वे सतर्कता समिति के प्रमुख हैं और रिहाई तथा पुनर्वास राशि का आदेश दे सकते हैं।',
      },
      {
        en: 'File a complaint with the Labour Commissioner of your district; child labour can also be reported on the PENCIL portal at pencil.gov.in.',
        hi: 'अपने ज़िले के श्रम आयुक्त के पास शिकायत दर्ज करें; बाल श्रम की शिकायत pencil.gov.in (पेंसिल पोर्टल) पर भी की जा सकती है।',
      },
      {
        en: 'A public interest litigation under Article 32 or 226 can be filed for a group of workers — courts have accepted even postcards in such cases.',
        hi: 'मज़दूरों के समूह के लिए अनुच्छेद 32 या 226 के तहत जनहित याचिका दायर की जा सकती है — ऐसे मामलों में अदालतों ने पोस्टकार्ड तक स्वीकार किए हैं।',
      },
    ],
    limits: [
      {
        en: 'The State can require compulsory service for public purposes — but it must not discriminate on grounds of religion, race, caste or class.',
        hi: 'राज्य सार्वजनिक प्रयोजन के लिए अनिवार्य सेवा माँग सकता है — पर वह धर्म, नस्ल, जाति या वर्ग के आधार पर भेदभाव नहीं कर सकता।',
      },
      {
        en: 'A young person above 14 may work in non-hazardous jobs, subject to rules on hours and safety.',
        hi: '14 वर्ष से ऊपर का किशोर गैर-खतरनाक काम कर सकता है, पर काम के घंटों और सुरक्षा नियमों के अधीन।',
      },
    ],
    landmark: [
      {
        case: {
          en: 'People’s Union for Democratic Rights v. Union of India (1982)',
          hi: 'पीपुल्स यूनियन फॉर डेमोक्रेटिक राइट्स बनाम भारत संघ (1982)',
        },
        held: {
          en: 'Paying less than the minimum wage amounts to forced labour under Article 23.',
          hi: 'न्यूनतम मज़दूरी से कम भुगतान अनुच्छेद 23 के तहत बलात् श्रम के बराबर है।',
        },
      },
      {
        case: { en: 'Bandhua Mukti Morcha v. Union of India (1984)', hi: 'बंधुआ मुक्ति मोर्चा बनाम भारत संघ (1984)' },
        held: {
          en: 'Once labour is shown to be forced, it is presumed to be bonded labour and the State must free and rehabilitate the workers.',
          hi: 'जब श्रम बलात् साबित हो जाए तो उसे बंधुआ मज़दूरी माना जाएगा और राज्य को मज़दूरों को मुक्त कर पुनर्वास करना होगा।',
        },
      },
    ],
    actions: ['fir', 'legal-aid', 'writ'],
  },

  {
    id: 'religion',
    icon: '🕌',
    articles: { en: 'Articles 25 – 28', hi: 'अनुच्छेद 25 – 28' },
    title: { en: 'Right to Freedom of Religion', hi: 'धर्म की स्वतंत्रता का अधिकार' },
    summary: {
      en: 'Believe, practise and spread your faith — or none at all. India has no State religion and taxes no one for another’s faith.',
      hi: 'अपने धर्म को मानें, उसका आचरण करें और उसका प्रचार करें — या किसी को न मानें। भारत का कोई राजकीय धर्म नहीं है और किसी से दूसरे के धर्म के लिए कर नहीं लिया जाता।',
    },
    meaning: [
      {
        en: 'You are free to follow any religion, change it, or follow none. Conscience is your own.',
        hi: 'आप कोई भी धर्म मानने, बदलने या न मानने के लिए स्वतंत्र हैं। अंतरात्मा आपकी अपनी है।',
      },
      {
        en: 'Religious groups may run their own institutions, own property and manage their own affairs in matters of religion.',
        hi: 'धार्मिक समूह अपने संस्थान चला सकते हैं, संपत्ति रख सकते हैं और धर्म के मामलों में अपने काम स्वयं देख सकते हैं।',
      },
      {
        en: 'Your tax money cannot be spent on promoting any particular religion.',
        hi: 'आपके कर का पैसा किसी विशेष धर्म के प्रचार पर खर्च नहीं किया जा सकता।',
      },
      {
        en: 'A fully State-funded school cannot give religious instruction. In a State-recognised or partly aided school, no child can be made to attend it without consent.',
        hi: 'पूरी तरह सरकारी धन से चलने वाला स्कूल धार्मिक शिक्षा नहीं दे सकता। सरकार से मान्यता प्राप्त या आंशिक सहायता वाले स्कूल में भी किसी बच्चे को सहमति के बिना उसमें बैठने को मजबूर नहीं किया जा सकता।',
      },
    ],
    detail: [
      {
        number: { en: 'Article 25', hi: 'अनुच्छेद 25' },
        title: { en: 'Freedom of conscience and practice', hi: 'अंतःकरण और धर्माचरण की स्वतंत्रता' },
        plain: {
          en: 'All persons are equally entitled to freedom of conscience and the right freely to profess, practise and propagate religion — subject to public order, morality, health and the other fundamental rights. The State may still regulate secular activity linked to religion and open Hindu religious institutions to all classes.',
          hi: 'सभी व्यक्तियों को अंतःकरण की स्वतंत्रता और धर्म को अबाध रूप से मानने, आचरण करने और प्रचार करने का समान अधिकार है — लोक व्यवस्था, नैतिकता, स्वास्थ्य और अन्य मौलिक अधिकारों के अधीन। राज्य धर्म से जुड़ी लौकिक गतिविधि का नियमन कर सकता है और हिंदू धार्मिक संस्थाओं को सभी वर्गों के लिए खोल सकता है।',
        },
      },
      {
        number: { en: 'Article 26', hi: 'अनुच्छेद 26' },
        title: { en: 'Freedom to manage religious affairs', hi: 'धार्मिक कार्यों के प्रबंध की स्वतंत्रता' },
        plain: {
          en: 'Every religious denomination may establish and maintain institutions for religious and charitable purposes, manage its own affairs in matters of religion, own and acquire property, and administer that property in accordance with law.',
          hi: 'हर धार्मिक संप्रदाय धार्मिक और परोपकारी प्रयोजनों के लिए संस्थाएँ स्थापित और चला सकता है, धर्म के मामलों में अपने कार्यों का प्रबंध कर सकता है, संपत्ति रख और अर्जित कर सकता है, और विधि के अनुसार उसका प्रशासन कर सकता है।',
        },
      },
      {
        number: { en: 'Article 27', hi: 'अनुच्छेद 27' },
        title: { en: 'No tax for any religion', hi: 'किसी धर्म के लिए कर नहीं' },
        plain: {
          en: 'No person can be compelled to pay any tax whose proceeds are used for the promotion or maintenance of any particular religion or religious denomination.',
          hi: 'किसी व्यक्ति को ऐसा कोई कर देने के लिए मजबूर नहीं किया जा सकता जिसकी आय किसी विशेष धर्म या धार्मिक संप्रदाय के प्रचार या पोषण पर खर्च होती हो।',
        },
      },
      {
        number: { en: 'Article 28', hi: 'अनुच्छेद 28' },
        title: { en: 'Religion in educational institutions', hi: 'शिक्षा संस्थाओं में धर्म' },
        plain: {
          en: 'No religious instruction in an institution wholly maintained out of State funds. In a State-aided or State-recognised institution, no student may be required to take part in religious instruction or worship without their consent — or, if a minor, their guardian’s.',
          hi: 'पूर्णतः राज्य निधि से चलने वाली संस्था में धार्मिक शिक्षा नहीं दी जाएगी। राज्य से सहायता या मान्यता प्राप्त संस्था में किसी छात्र को उसकी — या अवयस्क होने पर उसके संरक्षक की — सहमति के बिना धार्मिक शिक्षा या उपासना में भाग लेने को नहीं कहा जा सकता।',
        },
      },
    ],
    examples: [
      {
        en: 'A crowd tries to stop a lawful religious procession or prayer meeting.',
        hi: 'भीड़ किसी वैध धार्मिक जुलूस या प्रार्थना सभा को रोकने की कोशिश करती है।',
      },
      {
        en: 'A government school makes every child join one community’s prayer.',
        hi: 'सरकारी स्कूल हर बच्चे को एक समुदाय की प्रार्थना में शामिल होने को कहता है।',
      },
      {
        en: 'An employer refuses a job because of the applicant’s faith or the name on the form.',
        hi: 'नियोक्ता आवेदक के धर्म या फ़ॉर्म पर लिखे नाम के कारण नौकरी देने से मना करता है।',
      },
    ],
    ifViolated: [
      {
        en: 'For violence, threats or the disturbance of worship, file an FIR at once — offences relating to religion are cognizable.',
        hi: 'हिंसा, धमकी या उपासना में बाधा हो तो तुरंत FIR दर्ज कराएँ — धर्म से संबंधित अपराध संज्ञेय हैं।',
      },
      {
        en: 'Complain to the National Commission for Minorities (ncm.nic.in) or your State Minorities Commission.',
        hi: 'राष्ट्रीय अल्पसंख्यक आयोग (ncm.nic.in) या अपने राज्य अल्पसंख्यक आयोग में शिकायत करें।',
      },
      {
        en: 'If a government institution is the offender, a writ petition under Article 226 is the direct remedy.',
        hi: 'अगर उल्लंघन किसी सरकारी संस्था ने किया है तो अनुच्छेद 226 के तहत रिट याचिका सीधा उपाय है।',
      },
    ],
    limits: [
      {
        en: 'Religious freedom yields to public order, morality, health and the other fundamental rights. A practice that harms someone is not protected.',
        hi: 'धार्मिक स्वतंत्रता लोक व्यवस्था, नैतिकता, स्वास्थ्य और अन्य मौलिक अधिकारों के अधीन है। किसी को नुकसान पहुँचाने वाली प्रथा संरक्षित नहीं है।',
      },
      {
        en: 'Only practices that are essential to a religion get protection. Courts decide what is essential.',
        hi: 'केवल वही प्रथाएँ संरक्षित हैं जो धर्म के लिए अनिवार्य हों। क्या अनिवार्य है, यह अदालतें तय करती हैं।',
      },
      {
        en: 'The right to propagate does not include a right to convert someone by force, fraud or inducement.',
        hi: 'प्रचार के अधिकार में बल, छल या प्रलोभन से किसी का धर्म बदलवाने का अधिकार शामिल नहीं है।',
      },
    ],
    landmark: [
      {
        case: { en: 'S.R. Bommai v. Union of India (1994)', hi: 'एस.आर. बोम्मई बनाम भारत संघ (1994)' },
        held: {
          en: 'Secularism is part of the basic structure of the Constitution — the State has no religion of its own.',
          hi: 'धर्मनिरपेक्षता संविधान के मूल ढाँचे का हिस्सा है — राज्य का अपना कोई धर्म नहीं है।',
        },
      },
      {
        case: { en: 'Bijoe Emmanuel v. State of Kerala (1986)', hi: 'बिजो इमैनुएल बनाम केरल राज्य (1986)' },
        held: {
          en: 'Children who stood respectfully but did not sing the national anthem for religious reasons could not be expelled.',
          hi: 'जो बच्चे धार्मिक कारणों से राष्ट्रगान में आदरपूर्वक खड़े रहे पर गाया नहीं, उन्हें स्कूल से नहीं निकाला जा सकता।',
        },
      },
    ],
    actions: ['fir', 'writ'],
  },

  {
    id: 'culture',
    icon: '📚',
    articles: { en: 'Articles 29 – 30', hi: 'अनुच्छेद 29 – 30' },
    title: { en: 'Cultural and Educational Rights', hi: 'संस्कृति और शिक्षा संबंधी अधिकार' },
    summary: {
      en: 'Every group may keep its own language, script and culture — and minorities may run their own schools and colleges.',
      hi: 'हर समूह अपनी भाषा, लिपि और संस्कृति बचाए रख सकता है — और अल्पसंख्यक अपने स्कूल-कॉलेज खुद चला सकते हैं।',
    },
    meaning: [
      {
        en: 'A small community is not expected to give up its language or traditions to fit in with the majority.',
        hi: 'किसी छोटे समुदाय से यह अपेक्षा नहीं की जाती कि वह बहुसंख्यक में घुलने के लिए अपनी भाषा या परंपराएँ छोड़ दे।',
      },
      {
        en: 'A State-run or State-aided school cannot refuse admission to a child on grounds of religion, race, caste or language.',
        hi: 'सरकारी या सरकारी सहायता प्राप्त स्कूल किसी बच्चे को धर्म, नस्ल, जाति या भाषा के आधार पर प्रवेश देने से मना नहीं कर सकता।',
      },
      {
        en: 'Religious and linguistic minorities may set up and administer educational institutions of their choice, and the State cannot discriminate against them when giving aid.',
        hi: 'धार्मिक और भाषाई अल्पसंख्यक अपनी पसंद की शिक्षा संस्थाएँ स्थापित और संचालित कर सकते हैं, और सहायता देते समय राज्य उनके साथ भेदभाव नहीं कर सकता।',
      },
    ],
    detail: [
      {
        number: { en: 'Article 29', hi: 'अनुच्छेद 29' },
        title: { en: 'Protection of language, script and culture', hi: 'भाषा, लिपि और संस्कृति का संरक्षण' },
        plain: {
          en: 'Any section of citizens with a distinct language, script or culture has the right to conserve it. No citizen may be denied admission to a State-maintained or State-aided educational institution on grounds only of religion, race, caste or language.',
          hi: 'नागरिकों के किसी भी ऐसे वर्ग को, जिसकी अपनी विशिष्ट भाषा, लिपि या संस्कृति है, उसे बनाए रखने का अधिकार है। किसी नागरिक को केवल धर्म, नस्ल, जाति या भाषा के आधार पर राज्य द्वारा संचालित या सहायता प्राप्त शिक्षा संस्था में प्रवेश से वंचित नहीं किया जाएगा।',
        },
      },
      {
        number: { en: 'Article 30', hi: 'अनुच्छेद 30' },
        title: { en: 'Minority educational institutions', hi: 'अल्पसंख्यकों की शिक्षा संस्थाएँ' },
        plain: {
          en: 'All minorities, whether based on religion or language, have the right to establish and administer educational institutions of their choice. The State must not discriminate against such institutions when granting aid, and compensation for compulsory acquisition of their property must not defeat this right.',
          hi: 'धर्म या भाषा पर आधारित सभी अल्पसंख्यकों को अपनी पसंद की शिक्षा संस्थाएँ स्थापित और प्रशासित करने का अधिकार है। सहायता देते समय राज्य ऐसी संस्थाओं से भेदभाव नहीं करेगा, और उनकी संपत्ति के अनिवार्य अर्जन पर प्रतिकर ऐसा हो कि यह अधिकार निष्फल न हो।',
        },
      },
    ],
    examples: [
      {
        en: 'A school denies admission to a child because the family speaks a different language at home.',
        hi: 'स्कूल किसी बच्चे को प्रवेश नहीं देता क्योंकि उसका परिवार घर पर दूसरी भाषा बोलता है।',
      },
      {
        en: 'A State order tries to take over the appointment of teachers in a minority-run college.',
        hi: 'राज्य का कोई आदेश अल्पसंख्यक संचालित कॉलेज में शिक्षकों की नियुक्ति अपने हाथ में लेने की कोशिश करता है।',
      },
    ],
    ifViolated: [
      {
        en: 'Ask the school or college for the refusal in writing and keep the reply. A written refusal is strong evidence.',
        hi: 'स्कूल या कॉलेज से इनकार लिखित में माँगें और उत्तर संभालकर रखें। लिखित इनकार मज़बूत सबूत होता है।',
      },
      {
        en: 'Complain to the District Education Officer, and to the National Commission for Minority Educational Institutions (ncmei.gov.in).',
        hi: 'ज़िला शिक्षा अधिकारी को शिकायत करें, और राष्ट्रीय अल्पसंख्यक शैक्षिक संस्थान आयोग (ncmei.gov.in) को भी।',
      },
      {
        en: 'A writ petition in the High Court under Article 226 can get an admission ordered within weeks in a clear case.',
        hi: 'स्पष्ट मामले में अनुच्छेद 226 के तहत हाईकोर्ट में रिट याचिका से कुछ ही हफ़्तों में प्रवेश का आदेश मिल सकता है।',
      },
    ],
    limits: [
      {
        en: 'Minority institutions must still meet reasonable standards of teaching, safety and qualification set by the State.',
        hi: 'अल्पसंख्यक संस्थाओं को भी राज्य द्वारा तय शिक्षण, सुरक्षा और योग्यता के उचित मानक पूरे करने होंगे।',
      },
      {
        en: 'The right to administer is not a right to maladminister.',
        hi: 'प्रशासन का अधिकार कुप्रशासन का अधिकार नहीं है।',
      },
    ],
    landmark: [
      {
        case: { en: 'T.M.A. Pai Foundation v. State of Karnataka (2002)', hi: 'टी.एम.ए. पई फाउंडेशन बनाम कर्नाटक राज्य (2002)' },
        held: {
          en: 'Minority status is decided State-wise, and such institutions have wide autonomy in admissions and appointments, subject to fair regulation.',
          hi: 'अल्पसंख्यक का दर्जा राज्य के आधार पर तय होगा, और ऐसी संस्थाओं को प्रवेश और नियुक्ति में व्यापक स्वायत्तता है, उचित नियमन के अधीन।',
        },
      },
    ],
    actions: ['writ', 'legal-aid'],
  },

  {
    id: 'remedies',
    icon: '🏛️',
    articles: { en: 'Article 32 (and Article 226)', hi: 'अनुच्छेद 32 (और अनुच्छेद 226)' },
    title: { en: 'Right to Constitutional Remedies', hi: 'संवैधानिक उपचारों का अधिकार' },
    summary: {
      en: 'The right that makes every other right real — you can walk into the Supreme Court or a High Court and have your rights enforced.',
      hi: 'वह अधिकार जो बाकी सब अधिकारों को सच बनाता है — आप सीधे सुप्रीम कोर्ट या हाईकोर्ट जाकर अपने अधिकार लागू करा सकते हैं।',
    },
    meaning: [
      {
        en: 'Dr. B.R. Ambedkar called Article 32 the heart and soul of the Constitution. A right without a remedy is only a promise.',
        hi: 'डॉ. भीमराव आंबेडकर ने अनुच्छेद 32 को संविधान की आत्मा कहा था। जिस अधिकार का उपाय न हो, वह केवल वादा है।',
      },
      {
        en: 'You go directly to the Supreme Court — you do not have to climb up from the lowest court first.',
        hi: 'आप सीधे सुप्रीम कोर्ट जाते हैं — नीचे की अदालत से शुरू करके ऊपर चढ़ना ज़रूरी नहीं।',
      },
      {
        en: 'A High Court under Article 226 can do even more: it enforces fundamental rights and any other legal right too.',
        hi: 'अनुच्छेद 226 के तहत हाईकोर्ट और भी ज़्यादा कर सकता है: वह मौलिक अधिकारों के साथ-साथ किसी भी अन्य विधिक अधिकार को भी लागू कराता है।',
      },
      {
        en: 'Through public interest litigation, one person can move the court for many who cannot come themselves.',
        hi: 'जनहित याचिका के ज़रिए एक व्यक्ति उन कई लोगों के लिए अदालत जा सकता है जो खुद नहीं आ सकते।',
      },
    ],
    detail: [
      {
        number: { en: 'Habeas Corpus', hi: 'बंदी प्रत्यक्षीकरण' },
        title: { en: '“Produce the body”', hi: '“शरीर को प्रस्तुत करो”' },
        plain: {
          en: 'Orders anyone holding a person — the police, a private party, even a family — to produce them in court and justify the detention. If the detention is illegal, the court frees them at once.',
          hi: 'किसी व्यक्ति को बंद रखने वाले — पुलिस, कोई निजी पक्ष, यहाँ तक कि परिवार — को आदेश देता है कि उसे अदालत में पेश कर हिरासत का कारण बताए। हिरासत अवैध हुई तो अदालत उसे तुरंत मुक्त कर देती है।',
        },
      },
      {
        number: { en: 'Mandamus', hi: 'परमादेश' },
        title: { en: '“We command”', hi: '“हम आदेश देते हैं”' },
        plain: {
          en: 'Orders a public official or authority to do the duty the law places on them — issue the certificate, pay the pension, act on the complaint.',
          hi: 'किसी लोक अधिकारी या प्राधिकरण को वह कर्तव्य निभाने का आदेश देता है जो कानून ने उस पर डाला है — प्रमाणपत्र जारी करना, पेंशन देना, शिकायत पर कार्रवाई करना।',
        },
      },
      {
        number: { en: 'Prohibition', hi: 'प्रतिषेध' },
        title: { en: '“Stop there”', hi: '“वहीं रुको”' },
        plain: {
          en: 'Issued by a higher court to a lower court or tribunal to stop proceedings that are beyond its power, while they are still going on.',
          hi: 'उच्च न्यायालय द्वारा किसी अधीनस्थ न्यायालय या अधिकरण को जारी, ताकि वह अपनी शक्ति से बाहर की चल रही कार्यवाही रोक दे।',
        },
      },
      {
        number: { en: 'Certiorari', hi: 'उत्प्रेषण' },
        title: { en: '“Send the record up”', hi: '“रिकॉर्ड ऊपर भेजो”' },
        plain: {
          en: 'A higher court calls up and quashes an order already passed by a lower court or tribunal without jurisdiction or against the law.',
          hi: 'उच्च न्यायालय अधीनस्थ न्यायालय या अधिकरण द्वारा बिना अधिकारिता या कानून के विरुद्ध पहले से पारित आदेश को मँगाकर रद्द कर देता है।',
        },
      },
      {
        number: { en: 'Quo Warranto', hi: 'अधिकार पृच्छा' },
        title: { en: '“By what authority?”', hi: '“किस अधिकार से?”' },
        plain: {
          en: 'Asks a person holding a public office to show what legal right they have to hold it. If they cannot, they are removed.',
          hi: 'किसी लोक पद पर बैठे व्यक्ति से पूछता है कि उस पद पर रहने का उसे क्या विधिक अधिकार है। न बता सके तो उसे हटा दिया जाता है।',
        },
      },
    ],
    examples: [
      {
        en: 'A relative has been missing since the police took him away and no arrest has been shown on record.',
        hi: 'पुलिस के ले जाने के बाद से कोई रिश्तेदार लापता है और रिकॉर्ड में कोई गिरफ़्तारी दर्ज नहीं है।',
      },
      {
        en: 'A pension or scholarship sanctioned years ago is still not being paid despite reminders.',
        hi: 'वर्षों पहले स्वीकृत पेंशन या छात्रवृत्ति याद दिलाने पर भी अब तक नहीं मिली।',
      },
      {
        en: 'A municipal body ignores repeated complaints about sewage flowing into a village’s drinking water.',
        hi: 'नगर निकाय गाँव के पीने के पानी में सीवेज मिलने की बार-बार की शिकायतों को अनसुना कर देता है।',
      },
    ],
    ifViolated: [
      {
        en: 'Start with a written representation to the authority. Courts like to see that you asked first and were ignored.',
        hi: 'पहले प्राधिकरण को लिखित प्रतिवेदन दें। अदालतें देखना चाहती हैं कि आपने पहले माँगा और अनसुना किया गया।',
      },
      {
        en: 'Choose the court: the High Court under Article 226 for most matters, the Supreme Court under Article 32 when a fundamental right is directly at stake.',
        hi: 'अदालत चुनें: ज़्यादातर मामलों में अनुच्छेद 226 के तहत हाईकोर्ट, और जब सीधे मौलिक अधिकार का सवाल हो तो अनुच्छेद 32 के तहत सुप्रीम कोर्ट।',
      },
      {
        en: 'If you cannot afford a lawyer, the court itself will provide one free through the Legal Services Authority. Call 15100.',
        hi: 'वकील का खर्च न उठा सकें तो अदालत स्वयं विधिक सेवा प्राधिकरण के ज़रिए मुफ़्त वकील देगी। 15100 पर कॉल करें।',
      },
    ],
    limits: [
      {
        en: 'Article 32 is only for fundamental rights. For an ordinary legal grievance, go to the High Court under Article 226 or the appropriate court or tribunal.',
        hi: 'अनुच्छेद 32 केवल मौलिक अधिकारों के लिए है। सामान्य विधिक शिकायत के लिए अनुच्छेद 226 के तहत हाईकोर्ट या उपयुक्त न्यायालय/अधिकरण जाएँ।',
      },
      {
        en: 'This right can be suspended during a National Emergency, except for Articles 20 and 21, which can never be suspended (44th Amendment).',
        hi: 'राष्ट्रीय आपातकाल में यह अधिकार निलंबित हो सकता है, सिवाय अनुच्छेद 20 और 21 के, जिन्हें कभी निलंबित नहीं किया जा सकता (44वाँ संशोधन)।',
      },
      {
        en: 'Courts discourage petitions filed for publicity or private gain dressed up as public interest.',
        hi: 'प्रचार या निजी लाभ के लिए जनहित का चोला पहनाकर दायर याचिकाओं को अदालतें हतोत्साहित करती हैं।',
      },
    ],
    landmark: [
      {
        case: { en: 'Kesavananda Bharati v. State of Kerala (1973)', hi: 'केशवानंद भारती बनाम केरल राज्य (1973)' },
        held: {
          en: 'Parliament can amend the Constitution but cannot destroy its basic structure — including fundamental rights and judicial review.',
          hi: 'संसद संविधान में संशोधन कर सकती है पर उसके मूल ढाँचे को नष्ट नहीं कर सकती — जिसमें मौलिक अधिकार और न्यायिक पुनरावलोकन शामिल हैं।',
        },
      },
      {
        case: { en: 'Hussainara Khatoon v. State of Bihar (1979)', hi: 'हुसैनारा खातून बनाम बिहार राज्य (1979)' },
        held: {
          en: 'A speedy trial is part of Article 21; thousands of undertrials held longer than their maximum sentence were released.',
          hi: 'शीघ्र सुनवाई अनुच्छेद 21 का हिस्सा है; अपनी अधिकतम सज़ा से ज़्यादा समय बंद रहे हज़ारों विचाराधीन कैदी रिहा किए गए।',
        },
      },
    ],
    actions: ['writ', 'legal-aid', 'grievance'],
  },
];

export const RIGHT_BY_ID: Record<string, Right> = Object.fromEntries(RIGHTS.map((r) => [r.id, r]));
