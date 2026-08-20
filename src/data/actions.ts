import type { ActionGuide } from '../types';

/** The paperwork half: what to file, where, by when, and a draft to start from. */
export const ACTIONS: ActionGuide[] = [
  {
    id: 'fir',
    icon: '📋',
    title: { en: 'File an FIR', hi: 'FIR दर्ज कराएँ' },
    summary: {
      en: 'The First Information Report is what sets a criminal investigation in motion. It is free, and no police station may turn you away.',
      hi: 'प्रथम सूचना रिपोर्ट ही आपराधिक जाँच शुरू कराती है। यह नि:शुल्क है, और कोई थाना आपको लौटा नहीं सकता।',
    },
    whoCanUse: {
      en: 'Anyone who knows about a cognizable offence — you do not have to be the victim, and you do not need a lawyer.',
      hi: 'कोई भी जिसे किसी संज्ञेय अपराध की जानकारी हो — पीड़ित होना ज़रूरी नहीं, और वकील की भी ज़रूरत नहीं।',
    },
    cost: { en: 'Free. Registration and the copy of the FIR cost nothing.', hi: 'नि:शुल्क। दर्ज कराने और FIR की प्रति, दोनों का कोई शुल्क नहीं।' },
    timeLimit: {
      en: 'As soon as possible. Delay is not fatal, but the FIR should explain why it happened.',
      hi: 'जितनी जल्दी हो सके। देरी घातक नहीं है, पर FIR में उसका कारण बताना चाहिए।',
    },
    steps: [
      {
        title: { en: 'Write the complaint first', hi: 'पहले शिकायत लिखें' },
        detail: {
          en: 'On a plain sheet, in your own language: what happened, the date and time, the exact place, who did it (or a description), what you lost or suffered, and the names of witnesses. Keep it factual — no opinions.',
          hi: 'सादे कागज़ पर, अपनी भाषा में: क्या हुआ, तारीख और समय, ठीक-ठीक जगह, किसने किया (या हुलिया), आपका क्या नुकसान हुआ, और गवाहों के नाम। केवल तथ्य लिखें — राय नहीं।',
        },
      },
      {
        title: { en: 'Go to any police station', hi: 'किसी भी थाने जाएँ' },
        detail: {
          en: 'Preferably the one where the offence happened, but any station must register a Zero FIR and transfer it. Take a copy of your complaint and someone with you if you can.',
          hi: 'अधिमानतः उसी थाने जहाँ अपराध हुआ, पर कोई भी थाना ज़ीरो FIR दर्ज कर आगे भेजने को बाध्य है। शिकायत की प्रति और हो सके तो किसी को साथ ले जाएँ।',
        },
      },
      {
        title: { en: 'Read before you sign', hi: 'हस्ताक्षर से पहले पढ़ें' },
        detail: {
          en: 'The officer writes the FIR in the prescribed form and reads it back to you. Check that nothing has been left out or softened. Then sign it.',
          hi: 'अधिकारी निर्धारित प्रपत्र में FIR लिखकर आपको पढ़कर सुनाता है। देखें कि कुछ छूटा या हल्का तो नहीं किया गया। फिर हस्ताक्षर करें।',
        },
      },
      {
        title: { en: 'Take your free copy', hi: 'अपनी मुफ़्त प्रति लें' },
        detail: {
          en: 'Note the FIR number, the date and the sections applied. Without this number you cannot follow the case.',
          hi: 'FIR नंबर, तारीख और लगाई गई धाराएँ नोट करें। इस नंबर के बिना आप मामले की पैरवी नहीं कर सकते।',
        },
      },
      {
        title: { en: 'Follow it up', hi: 'पैरवी करते रहें' },
        detail: {
          en: 'Ask the investigating officer for progress. If a charge sheet or a closure report is filed, you are entitled to notice and can object to a closure.',
          hi: 'जाँच अधिकारी से प्रगति पूछते रहें। आरोप पत्र या अंतिम रिपोर्ट दाखिल हो तो आपको सूचना पाने और अंतिम रिपोर्ट पर आपत्ति करने का अधिकार है।',
        },
      },
    ],
    documents: [
      { en: 'Your written complaint, with one spare copy', hi: 'आपकी लिखित शिकायत, एक अतिरिक्त प्रति के साथ' },
      { en: 'Any identity proof', hi: 'कोई भी पहचान प्रमाण' },
      { en: 'Medical papers, photographs, bills or screenshots, if any', hi: 'चिकित्सा कागज़, तस्वीरें, बिल या स्क्रीनशॉट, अगर हों' },
      { en: 'Names, addresses and phone numbers of witnesses', hi: 'गवाहों के नाम, पते और फ़ोन नंबर' },
    ],
    online: [
      { label: { en: 'Your State police portal (e-FIR for theft and lost articles)', hi: 'आपके राज्य का पुलिस पोर्टल (चोरी और गुम वस्तु के लिए ई-FIR)' }, url: 'https://digitalpolice.gov.in' },
      { label: { en: 'Cyber crime — file online', hi: 'साइबर अपराध — ऑनलाइन दर्ज करें' }, url: 'https://cybercrime.gov.in' },
    ],
    ifRefused: [
      {
        en: 'Send the same complaint by registered post to the Superintendent of Police, under Section 173(4) BNSS (earlier 154(3) CrPC). Keep the receipt.',
        hi: 'वही शिकायत रजिस्टर्ड डाक से पुलिस अधीक्षक को BNSS की धारा 173(4) (पहले CrPC 154(3)) में भेजें। रसीद रखें।',
      },
      {
        en: 'If still nothing, apply to the Judicial Magistrate under Section 175(3) BNSS (earlier 156(3) CrPC) to order registration and investigation.',
        hi: 'फिर भी कुछ न हो तो BNSS की धारा 175(3) (पहले CrPC 156(3)) में न्यायिक मजिस्ट्रेट से दर्ज करने और जाँच का आदेश माँगें।',
      },
      {
        en: 'A free lawyer for the magistrate application is available from the District Legal Services Authority — call 15100.',
        hi: 'मजिस्ट्रेट के आवेदन के लिए मुफ़्त वकील ज़िला विधिक सेवा प्राधिकरण से मिलता है — 15100 पर कॉल करें।',
      },
    ],
    template: {
      title: { en: 'Complaint to the Station House Officer', hi: 'थानाध्यक्ष को शिकायत' },
      body: {
        en: `To,
The Station House Officer,
[Name] Police Station, [City / District]

Subject: Complaint for registration of an FIR

Respected Sir/Madam,

I, [your full name], son/daughter/wife of [name], aged [age] years, resident of [full address], phone [number], state as follows:

1. On [date] at about [time], at [exact place], the following happened: [describe clearly and briefly what took place].

2. The act was done by [name of the accused, or a description if the name is not known], and the following persons saw it: [names and addresses of witnesses].

3. As a result I have suffered [injury / loss of property worth ₹___ / threat to life / other harm].

4. I am attaching [medical report / photographs / bills / screenshots] in support.

I request that an FIR be registered on this complaint and the matter be investigated according to law. I also request a free copy of the FIR.

Yours faithfully,
[Signature]
[Name]
[Date] [Place]`,
        hi: `सेवा में,
थानाध्यक्ष महोदय,
[नाम] पुलिस थाना, [शहर / ज़िला]

विषय: FIR दर्ज करने हेतु शिकायत

महोदय/महोदया,

मैं, [आपका पूरा नाम], पुत्र/पुत्री/पत्नी श्री [नाम], आयु [आयु] वर्ष, निवासी [पूरा पता], मोबाइल [नंबर], निम्नलिखित निवेदन करता/करती हूँ:

1. दिनांक [तारीख] को लगभग [समय] बजे, [ठीक जगह] पर निम्न घटना हुई: [जो हुआ उसे स्पष्ट और संक्षेप में लिखें]।

2. यह कृत्य [आरोपी का नाम, या नाम ज्ञात न हो तो हुलिया] द्वारा किया गया, और इसे निम्न व्यक्तियों ने देखा: [गवाहों के नाम और पते]।

3. इसके परिणामस्वरूप मुझे [चोट / ₹___ मूल्य की संपत्ति की हानि / जान का खतरा / अन्य क्षति] हुई है।

4. समर्थन में [चिकित्सा रिपोर्ट / तस्वीरें / बिल / स्क्रीनशॉट] संलग्न है।

निवेदन है कि इस शिकायत पर FIR दर्ज कर विधि अनुसार जाँच की जाए। FIR की नि:शुल्क प्रति भी प्रदान करने की कृपा करें।

भवदीय,
[हस्ताक्षर]
[नाम]
[दिनांक] [स्थान]`,
      },
    },
  },

  {
    id: 'rti',
    icon: '🔍',
    title: { en: 'File an RTI application', hi: 'RTI आवेदन दाखिल करें' },
    summary: {
      en: 'Ten rupees, one page, and any government office must answer you in thirty days. The single most useful tool an ordinary citizen has.',
      hi: 'दस रुपये, एक पन्ना, और किसी भी सरकारी दफ़्तर को तीस दिन में जवाब देना होगा। आम नागरिक का सबसे कारगर औज़ार।',
    },
    whoCanUse: { en: 'Any citizen of India. No reason needs to be given for asking.', hi: 'भारत का कोई भी नागरिक। पूछने का कारण बताना ज़रूरी नहीं।' },
    cost: {
      en: '₹10 by cash, postal order, court fee stamp or online. Free for a person below the poverty line. First and second appeals are free.',
      hi: 'नकद, पोस्टल ऑर्डर, कोर्ट फ़ीस स्टाम्प या ऑनलाइन ₹10। गरीबी रेखा से नीचे के व्यक्ति के लिए नि:शुल्क। पहली और दूसरी अपील भी नि:शुल्क।',
    },
    timeLimit: {
      en: 'Reply within 30 days — or 48 hours where a life or liberty is at stake. First appeal within 30 days of the reply, second appeal within 90 days.',
      hi: 'उत्तर 30 दिन में — जीवन या स्वतंत्रता का प्रश्न हो तो 48 घंटे में। पहली अपील उत्तर के 30 दिन में, दूसरी अपील 90 दिन में।',
    },
    steps: [
      {
        title: { en: 'Find the right office', hi: 'सही दफ़्तर पहचानें' },
        detail: {
          en: 'Every public authority has a Public Information Officer (PIO). Address the application to “The Public Information Officer” of that specific office — you do not need their name.',
          hi: 'हर लोक प्राधिकरण में एक लोक सूचना अधिकारी (PIO) होता है। आवेदन उसी दफ़्तर के “लोक सूचना अधिकारी” को संबोधित करें — नाम जानना ज़रूरी नहीं।',
        },
      },
      {
        title: { en: 'Ask sharp questions', hi: 'सटीक सवाल पूछें' },
        detail: {
          en: 'Ask for documents, file notings, dates and figures — not opinions. “Why was my file delayed?” gets refused; “Give me the daily movement of file no. X from 1 Jan to 30 Jun, with the name of each officer who held it” gets answered.',
          hi: 'दस्तावेज़, फ़ाइल नोटिंग, तारीखें और आँकड़े माँगें — राय नहीं। “मेरी फ़ाइल क्यों रुकी?” अस्वीकार हो जाता है; “फ़ाइल संख्या X की 1 जनवरी से 30 जून तक की दैनिक गतिविधि, हर अधिकारी के नाम सहित दें” का जवाब मिलता है।',
        },
      },
      {
        title: { en: 'Pay the fee and send it', hi: 'शुल्क दें और भेजें' },
        detail: {
          en: 'Send by registered post or deliver by hand and get a receipt. For central government bodies, rtionline.gov.in is faster and gives you a tracking number.',
          hi: 'रजिस्टर्ड डाक से भेजें या स्वयं देकर रसीद लें। केंद्रीय निकायों के लिए rtionline.gov.in तेज़ है और ट्रैकिंग नंबर देता है।',
        },
      },
      {
        title: { en: 'If no reply in 30 days', hi: '30 दिन में उत्तर न मिले तो' },
        detail: {
          en: 'File a first appeal to the First Appellate Officer of the same department. No fee, no format — just attach a copy of your application.',
          hi: 'उसी विभाग के प्रथम अपीलीय अधिकारी को पहली अपील करें। न शुल्क, न कोई प्रारूप — बस आवेदन की प्रति संलग्न करें।',
        },
      },
      {
        title: { en: 'Second appeal', hi: 'दूसरी अपील' },
        detail: {
          en: 'To the Central or State Information Commission. The Commission can fine the PIO ₹250 a day, up to ₹25,000, for wrongly refusing or delaying information.',
          hi: 'केंद्रीय या राज्य सूचना आयोग को। आयोग गलत तरीके से सूचना रोकने या देरी करने पर PIO पर ₹250 प्रतिदिन, अधिकतम ₹25,000 तक जुर्माना लगा सकता है।',
        },
      },
    ],
    documents: [
      { en: 'Your application on a plain sheet', hi: 'सादे कागज़ पर आपका आवेदन' },
      { en: '₹10 postal order, court fee stamp or cash receipt', hi: '₹10 का पोस्टल ऑर्डर, कोर्ट फ़ीस स्टाम्प या नकद रसीद' },
      { en: 'BPL card copy if you are claiming exemption from the fee', hi: 'शुल्क छूट के लिए BPL कार्ड की प्रति' },
    ],
    online: [{ label: { en: 'RTI Online (central government)', hi: 'आरटीआई ऑनलाइन (केंद्र सरकार)' }, url: 'https://rtionline.gov.in' }],
    ifRefused: [
      {
        en: 'A refusal must state the exact exemption under Section 8 or 9. A vague “cannot be provided” is not a valid answer — say so in your appeal.',
        hi: 'अस्वीकृति में धारा 8 या 9 की सटीक छूट बतानी होगी। अस्पष्ट “नहीं दिया जा सकता” वैध उत्तर नहीं है — अपील में यही लिखें।',
      },
      {
        en: 'Even exempt information must be given if the public interest in disclosure outweighs the harm.',
        hi: 'छूट वाली सूचना भी देनी होगी यदि उसे देने का जनहित उससे होने वाले नुकसान से बड़ा हो।',
      },
      {
        en: 'If the 30 days pass with no reply at all, the law treats it as a refusal and you can appeal straight away.',
        hi: '30 दिन बीत जाएँ और कोई उत्तर न आए, तो कानून उसे अस्वीकृति मानता है और आप सीधे अपील कर सकते हैं।',
      },
    ],
    template: {
      title: { en: 'RTI application', hi: 'आरटीआई आवेदन' },
      body: {
        en: `To,
The Public Information Officer,
[Name and full address of the office]

Subject: Application under Section 6(1) of the Right to Information Act, 2005

Sir/Madam,

Kindly provide the following information:

1. [Ask for a specific document, with its number and date if known]
2. [Ask for figures or dates — e.g. "the date on which application no. ___ was received and the date of each action taken on it"]
3. [Ask for the name and designation of the officer responsible for the delay in ___]
4. [Ask for a certified copy of ___]

I am enclosing an application fee of ₹10 by [postal order / court fee stamp / cash]. [If applicable: I belong to a family below the poverty line and a copy of my BPL card is enclosed; I am therefore exempt from the fee.]

Please send the information to the address below. If any part of this application relates to another public authority, kindly transfer it under Section 6(3) within five days.

Yours faithfully,
[Signature]
[Name]
[Full postal address, phone and e-mail]
[Date] [Place]`,
        hi: `सेवा में,
लोक सूचना अधिकारी,
[कार्यालय का नाम और पूरा पता]

विषय: सूचना का अधिकार अधिनियम, 2005 की धारा 6(1) के अंतर्गत आवेदन

महोदय/महोदया,

कृपया निम्नलिखित सूचना उपलब्ध कराएँ:

1. [कोई विशिष्ट दस्तावेज़ माँगें, ज्ञात हो तो उसका क्रमांक और दिनांक सहित]
2. [आँकड़े या तारीखें माँगें — जैसे “आवेदन संख्या ___ किस तिथि को प्राप्त हुआ और उस पर की गई प्रत्येक कार्रवाई की तिथि”]
3. [___ में हुई देरी के लिए उत्तरदायी अधिकारी का नाम और पदनाम माँगें]
4. [___ की प्रमाणित प्रति माँगें]

आवेदन शुल्क ₹10 [पोस्टल ऑर्डर / कोर्ट फ़ीस स्टाम्प / नकद] द्वारा संलग्न है। [लागू हो तो: मैं गरीबी रेखा से नीचे के परिवार से हूँ और BPL कार्ड की प्रति संलग्न है, अतः शुल्क से मुक्त हूँ।]

कृपया सूचना नीचे लिखे पते पर भेजें। यदि इस आवेदन का कोई भाग किसी अन्य लोक प्राधिकरण से संबंधित हो, तो कृपया धारा 6(3) के अंतर्गत पाँच दिन के भीतर अंतरित करें।

भवदीय,
[हस्ताक्षर]
[नाम]
[पूरा डाक पता, फ़ोन और ईमेल]
[दिनांक] [स्थान]`,
      },
    },
  },

  {
    id: 'consumer',
    icon: '⚖️',
    title: { en: 'File a consumer complaint', hi: 'उपभोक्ता शिकायत दर्ज करें' },
    summary: {
      en: 'A cheap, fast court designed for ordinary buyers. You can file online, from home, and argue it yourself.',
      hi: 'आम खरीदारों के लिए बनी सस्ती, तेज़ अदालत। आप घर से ऑनलाइन दायर कर सकते हैं और खुद पैरवी कर सकते हैं।',
    },
    whoCanUse: {
      en: 'Anyone who bought goods or hired a service for their own use — including online purchases and services like banking, insurance, hospitals, builders and transport.',
      hi: 'कोई भी जिसने अपने उपयोग के लिए सामान खरीदा या सेवा ली — ऑनलाइन खरीद और बैंकिंग, बीमा, अस्पताल, बिल्डर तथा परिवहन जैसी सेवाएँ भी शामिल।',
    },
    cost: {
      en: 'No fee up to a claim of ₹5 lakh. Above that, a small graded fee. No lawyer is required.',
      hi: '₹5 लाख तक के दावे पर कोई शुल्क नहीं। उससे ऊपर छोटा श्रेणीबद्ध शुल्क। वकील ज़रूरी नहीं।',
    },
    timeLimit: {
      en: 'Within two years of the cause of the complaint. The case should be decided in three to five months.',
      hi: 'शिकायत के कारण से दो वर्ष के भीतर। मामला तीन से पाँच महीने में तय होना चाहिए।',
    },
    steps: [
      {
        title: { en: 'Send a legal notice first', hi: 'पहले कानूनी नोटिस भेजें' },
        detail: {
          en: 'A written notice to the seller giving 15 days to fix the problem. Send it by registered post or e-mail and keep the proof. Many sellers settle at this stage.',
          hi: 'विक्रेता को लिखित नोटिस देकर 15 दिन का समय दें। रजिस्टर्ड डाक या ईमेल से भेजें और प्रमाण रखें। कई विक्रेता इसी चरण पर मान जाते हैं।',
        },
      },
      {
        title: { en: 'Try the helpline', hi: 'हेल्पलाइन आज़माएँ' },
        detail: {
          en: 'Call 1915 or file at consumerhelpline.gov.in. It is free mediation and often resolves the matter without a case.',
          hi: '1915 पर कॉल करें या consumerhelpline.gov.in पर दर्ज करें। यह मुफ़्त मध्यस्थता है और अक्सर बिना मुकदमे के मामला सुलझा देती है।',
        },
      },
      {
        title: { en: 'Pick the right commission', hi: 'सही आयोग चुनें' },
        detail: {
          en: 'District Commission up to ₹50 lakh, State Commission up to ₹2 crore, National Commission above ₹2 crore. File where you live, work, or where the seller is.',
          hi: '₹50 लाख तक ज़िला आयोग, ₹2 करोड़ तक राज्य आयोग, ₹2 करोड़ से ऊपर राष्ट्रीय आयोग। जहाँ आप रहते हैं, काम करते हैं, या जहाँ विक्रेता है — वहीं दायर करें।',
        },
      },
      {
        title: { en: 'File on e-Daakhil', hi: 'ई-दाखिल पर दायर करें' },
        detail: {
          en: 'Register at edaakhil.nic.in, upload the complaint, an affidavit and your documents, and pay any fee online. You get a case number the same day.',
          hi: 'edaakhil.nic.in पर पंजीकरण करें, शिकायत, शपथ पत्र और दस्तावेज़ अपलोड करें, और शुल्क ऑनलाइन भरें। उसी दिन केस नंबर मिल जाता है।',
        },
      },
      {
        title: { en: 'Attend the hearings', hi: 'सुनवाई में उपस्थित हों' },
        detail: {
          en: 'Hearings are often by video. Ask for repair, replacement, refund, and compensation for the loss and mental agony you suffered, plus costs.',
          hi: 'सुनवाई अक्सर वीडियो से होती है। मरम्मत, बदली, पैसा वापसी, और हुए नुकसान तथा मानसिक कष्ट का मुआवज़ा, साथ ही खर्च भी माँगें।',
        },
      },
    ],
    documents: [
      { en: 'Bill, invoice or order confirmation', hi: 'बिल, चालान या ऑर्डर पुष्टि' },
      { en: 'Warranty or guarantee card', hi: 'वारंटी या गारंटी कार्ड' },
      { en: 'Photographs or video of the defect', hi: 'खराबी की तस्वीरें या वीडियो' },
      { en: 'Copy of the legal notice and proof of posting', hi: 'कानूनी नोटिस की प्रति और भेजने का प्रमाण' },
      { en: 'An affidavit that the contents of the complaint are true', hi: 'शपथ पत्र कि शिकायत की बातें सत्य हैं' },
    ],
    online: [
      { label: { en: 'e-Daakhil', hi: 'ई-दाखिल' }, url: 'https://edaakhil.nic.in' },
      { label: { en: 'National Consumer Helpline', hi: 'राष्ट्रीय उपभोक्ता हेल्पलाइन' }, url: 'https://consumerhelpline.gov.in' },
    ],
    template: {
      title: { en: 'Notice to the seller before filing', hi: 'दायर करने से पहले विक्रेता को नोटिस' },
      body: {
        en: `To,
[Name of the seller / service provider]
[Full address]

Subject: Notice regarding [defective goods / deficiency in service] — demand for redress

Sir/Madam,

1. On [date] I purchased [describe the goods or service] from you for ₹[amount], vide bill/invoice no. [number]. A copy is enclosed.

2. The following defect or deficiency was found: [describe it plainly — what does not work, what was promised and not given].

3. I informed you on [dates] by [phone / e-mail / in person] but the problem has not been resolved.

4. Because of this I have suffered a loss of ₹[amount] and considerable inconvenience and mental agony.

I therefore call upon you to [repair / replace / refund ₹___] and pay compensation of ₹[amount] within 15 days of receiving this notice.

If you fail to do so, I shall file a complaint before the Consumer Disputes Redressal Commission under the Consumer Protection Act, 2019, at your risk as to cost and consequences.

Yours faithfully,
[Signature]
[Name, address, phone]
[Date]`,
        hi: `सेवा में,
[विक्रेता / सेवा प्रदाता का नाम]
[पूरा पता]

विषय: [दोषपूर्ण वस्तु / सेवा में कमी] के संबंध में नोटिस — समाधान की माँग

महोदय/महोदया,

1. दिनांक [तारीख] को मैंने आपसे ₹[राशि] में [वस्तु या सेवा का विवरण] खरीदा, बिल/चालान संख्या [नंबर]। प्रति संलग्न है।

2. उसमें निम्न दोष या कमी पाई गई: [स्पष्ट रूप से लिखें — क्या काम नहीं करता, क्या वादा था और नहीं मिला]।

3. मैंने आपको दिनांक [तारीखें] को [फ़ोन / ईमेल / स्वयं जाकर] सूचित किया, पर समस्या का समाधान नहीं हुआ।

4. इस कारण मुझे ₹[राशि] की हानि तथा अत्यधिक असुविधा और मानसिक कष्ट हुआ है।

अतः आपसे अनुरोध है कि इस नोटिस के प्राप्त होने के 15 दिन के भीतर [मरम्मत करें / बदलें / ₹___ वापस करें] तथा ₹[राशि] मुआवज़ा दें।

ऐसा न करने पर मैं उपभोक्ता संरक्षण अधिनियम, 2019 के अंतर्गत उपभोक्ता विवाद प्रतितोष आयोग में शिकायत दायर करूँगा/करूँगी, जिसका व्यय और परिणाम आपकी ज़िम्मेदारी होगी।

भवदीय,
[हस्ताक्षर]
[नाम, पता, फ़ोन]
[दिनांक]`,
      },
    },
  },

  {
    id: 'legal-aid',
    icon: '🤝',
    title: { en: 'Get a free lawyer', hi: 'मुफ़्त वकील पाएँ' },
    summary: {
      en: 'Article 39A makes free legal aid a right, not charity. Crores of people qualify and almost nobody claims it.',
      hi: 'अनुच्छेद 39A मुफ़्त कानूनी सहायता को अधिकार बनाता है, दान नहीं। करोड़ों लोग पात्र हैं और लगभग कोई दावा नहीं करता।',
    },
    whoCanUse: {
      en: 'Every woman and child; every member of an SC or ST; a victim of trafficking or a disaster; a person with a disability; an industrial workman; anyone in custody; and anyone whose annual income is below the limit set by the State (₹5 lakh for the Supreme Court Legal Services Committee).',
      hi: 'हर महिला और बच्चा; हर SC या ST सदस्य; तस्करी या आपदा का पीड़ित; दिव्यांग व्यक्ति; औद्योगिक कामगार; हिरासत में कोई भी व्यक्ति; और वह हर व्यक्ति जिसकी वार्षिक आय राज्य द्वारा तय सीमा से कम हो (सुप्रीम कोर्ट विधिक सेवा समिति के लिए ₹5 लाख)।',
    },
    cost: {
      en: 'Completely free — the lawyer, the court fee, the paperwork and the copies of documents.',
      hi: 'पूरी तरह नि:शुल्क — वकील, न्यायालय शुल्क, कागज़ी कार्रवाई और दस्तावेज़ों की प्रतियाँ।',
    },
    timeLimit: { en: 'Any time — before, during or after a case.', hi: 'कभी भी — मुकदमे से पहले, दौरान या बाद में।' },
    steps: [
      {
        title: { en: 'Call 15100', hi: '15100 पर कॉल करें' },
        detail: {
          en: 'The national legal aid helpline connects you to the Legal Services Authority of your district. You can also walk into the front office of any court complex.',
          hi: 'राष्ट्रीय विधिक सहायता हेल्पलाइन आपको अपने ज़िले के विधिक सेवा प्राधिकरण से जोड़ती है। आप किसी भी न्यायालय परिसर के फ्रंट ऑफ़िस में भी जा सकते हैं।',
        },
      },
      {
        title: { en: 'Fill a one-page form', hi: 'एक पन्ने का फ़ॉर्म भरें' },
        detail: {
          en: 'State your name, the problem, and the ground on which you qualify. An oral application is also accepted, and staff will write it for you.',
          hi: 'अपना नाम, समस्या, और पात्रता का आधार लिखें। मौखिक आवेदन भी स्वीकार होता है, और कर्मचारी आपके लिए लिख देंगे।',
        },
      },
      {
        title: { en: 'A panel lawyer is assigned', hi: 'पैनल वकील नियुक्त होता है' },
        detail: {
          en: 'You get their name and number. If the lawyer is not doing the work, you can ask the Authority in writing to change them.',
          hi: 'आपको उनका नाम और नंबर मिलता है। वकील काम न कर रहा हो तो आप प्राधिकरण से लिखित में बदलने को कह सकते हैं।',
        },
      },
      {
        title: { en: 'Consider Lok Adalat', hi: 'लोक अदालत पर विचार करें' },
        detail: {
          en: 'For a compromise-able matter — cheque bounce, motor accident claim, a money dispute, a matrimonial matter — Lok Adalat settles it in a day, the award is final, and the court fee already paid is refunded.',
          hi: 'समझौते योग्य मामले — चेक बाउंस, मोटर दुर्घटना दावा, धन विवाद, वैवाहिक मामला — लोक अदालत एक ही दिन में निपटा देती है, फ़ैसला अंतिम होता है, और भरा हुआ न्यायालय शुल्क वापस मिल जाता है।',
        },
      },
    ],
    documents: [
      { en: 'Identity proof', hi: 'पहचान प्रमाण' },
      { en: 'Income certificate, or an affidavit of income', hi: 'आय प्रमाणपत्र, या आय का शपथ पत्र' },
      { en: 'Caste or disability certificate, if you are claiming on that ground', hi: 'जाति या दिव्यांगता प्रमाणपत्र, यदि उसी आधार पर दावा है' },
      { en: 'Any papers of the case, if one is already going on', hi: 'मुकदमा चल रहा हो तो उसके कागज़' },
    ],
    online: [
      { label: { en: 'NALSA — apply online', hi: 'नालसा — ऑनलाइन आवेदन' }, url: 'https://nalsa.gov.in' },
      { label: { en: 'Tele-Law — free advice by video', hi: 'टेली-लॉ — वीडियो से मुफ़्त सलाह' }, url: 'https://tele-law.in' },
    ],
  },

  {
    id: 'police-complaint',
    icon: '🛡️',
    title: { en: 'Complain against a police officer', hi: 'पुलिसकर्मी के विरुद्ध शिकायत' },
    summary: {
      en: 'There are four separate doors, and you can knock on all of them at the same time.',
      hi: 'चार अलग दरवाज़े हैं, और आप एक साथ चारों खटखटा सकते हैं।',
    },
    whoCanUse: {
      en: 'Anyone facing refusal to register an FIR, illegal detention, a demand for a bribe, custodial violence, or a false case.',
      hi: 'कोई भी जिसे FIR दर्ज करने से इनकार, अवैध हिरासत, रिश्वत की माँग, हिरासत में हिंसा, या झूठे मुकदमे का सामना हो।',
    },
    cost: { en: 'Free at every level.', hi: 'हर स्तर पर नि:शुल्क।' },
    timeLimit: { en: 'As soon as possible, while the record and witnesses are fresh.', hi: 'जितनी जल्दी हो सके, जब तक रिकॉर्ड और गवाह ताज़ा हैं।' },
    steps: [
      {
        title: { en: 'Superintendent of Police', hi: 'पुलिस अधीक्षक' },
        detail: {
          en: 'A written complaint to the SP or Commissioner, sent by registered post. Name the officer, the station, the date and what was done. Keep the postal receipt — it proves the department knew.',
          hi: 'SP या पुलिस आयुक्त को रजिस्टर्ड डाक से लिखित शिकायत। अधिकारी का नाम, थाना, तारीख और क्या हुआ, लिखें। डाक रसीद रखें — यह साबित करती है कि विभाग को पता था।',
        },
      },
      {
        title: { en: 'Police Complaints Authority', hi: 'पुलिस शिकायत प्राधिकरण' },
        detail: {
          en: 'Every State was directed to set one up in Prakash Singh v. Union of India (2006). It is independent of the police and handles serious misconduct.',
          hi: 'प्रकाश सिंह बनाम भारत संघ (2006) में हर राज्य को इसे गठित करने का निर्देश दिया गया था। यह पुलिस से स्वतंत्र है और गंभीर कदाचार देखता है।',
        },
      },
      {
        title: { en: 'Human Rights Commission', hi: 'मानवाधिकार आयोग' },
        detail: {
          en: 'For custodial violence, illegal detention or a death in custody, complain at hrcnet.nhrc.gov.in or to your State Commission. It costs nothing and can be done online.',
          hi: 'हिरासत में हिंसा, अवैध निरोध या हिरासत में मृत्यु पर hrcnet.nhrc.gov.in या राज्य आयोग को शिकायत करें। यह नि:शुल्क है और ऑनलाइन हो सकती है।',
        },
      },
      {
        title: { en: 'The Magistrate', hi: 'मजिस्ट्रेट' },
        detail: {
          en: 'Tell the magistrate directly at your next court appearance, and file an application. A magistrate can order a medical examination and an inquiry.',
          hi: 'अगली पेशी पर मजिस्ट्रेट को सीधे बताएँ और आवेदन दें। मजिस्ट्रेट चिकित्सीय जाँच और जाँच का आदेश दे सकते हैं।',
        },
      },
    ],
    documents: [
      { en: 'Names, ranks and badge numbers of the officers, if you noted them', hi: 'अधिकारियों के नाम, पद और बैज नंबर, अगर नोट किए हों' },
      { en: 'Date, time and place of the incident', hi: 'घटना की तारीख, समय और स्थान' },
      { en: 'Medical report of any injury', hi: 'किसी चोट की चिकित्सा रिपोर्ट' },
      { en: 'Copies of earlier complaints and their postal receipts', hi: 'पहले की शिकायतों की प्रतियाँ और उनकी डाक रसीदें' },
    ],
    online: [
      { label: { en: 'NHRC complaints', hi: 'NHRC शिकायत' }, url: 'https://hrcnet.nhrc.gov.in' },
      { label: { en: 'CPGRAMS', hi: 'CPGRAMS' }, url: 'https://pgportal.gov.in' },
    ],
    ifRefused: [
      {
        en: 'Ask for the action taken report through an RTI application. Silence on record is itself useful evidence.',
        hi: 'RTI आवेदन से की गई कार्रवाई की रिपोर्ट माँगें। रिकॉर्ड पर चुप्पी स्वयं में उपयोगी सबूत है।',
      },
      {
        en: 'A writ petition in the High Court can seek an independent inquiry and compensation for a violation of Article 21.',
        hi: 'हाईकोर्ट में रिट याचिका से स्वतंत्र जाँच और अनुच्छेद 21 के उल्लंघन का मुआवज़ा माँगा जा सकता है।',
      },
    ],
  },

  {
    id: 'posh',
    icon: '🏛️',
    title: { en: 'Complain of sexual harassment at work', hi: 'कार्यस्थल पर यौन उत्पीड़न की शिकायत' },
    summary: {
      en: 'A written complaint to the Internal Committee starts a time-bound inquiry your employer cannot ignore.',
      hi: 'आंतरिक समिति को लिखित शिकायत एक समयबद्ध जाँच शुरू करती है जिसे नियोक्ता अनदेखा नहीं कर सकता।',
    },
    whoCanUse: {
      en: 'Any woman at any workplace — employee, intern, trainee, contract worker, domestic worker or visitor.',
      hi: 'किसी भी कार्यस्थल पर कोई भी महिला — कर्मचारी, प्रशिक्षु, ट्रेनी, ठेका कर्मी, घरेलू कामगार या आगंतुक।',
    },
    cost: { en: 'Free.', hi: 'नि:शुल्क।' },
    timeLimit: {
      en: 'Within 3 months of the incident, or of the last incident in a series. Extendable by 3 more months for good reason.',
      hi: 'घटना के, या शृंखला की अंतिम घटना के, 3 महीने के भीतर। उचित कारण पर 3 महीने और।',
    },
    steps: [
      {
        title: { en: 'Find the Internal Committee', hi: 'आंतरिक समिति खोजें' },
        detail: {
          en: 'Its members must be displayed at the workplace. If there is none, or the complaint is against the employer, go to the Local Committee at the office of the District Officer.',
          hi: 'उसके सदस्यों के नाम कार्यस्थल पर प्रदर्शित होने चाहिए। समिति न हो, या शिकायत नियोक्ता के विरुद्ध हो, तो ज़िला अधिकारी के कार्यालय की स्थानीय समिति में जाएँ।',
        },
      },
      {
        title: { en: 'Submit the complaint', hi: 'शिकायत दें' },
        detail: {
          en: 'Six copies, with your evidence and a list of witnesses. Get an acknowledgement with the date on it.',
          hi: 'छह प्रतियाँ, सबूत और गवाहों की सूची के साथ। तारीख सहित पावती लें।',
        },
      },
      {
        title: { en: 'Ask for interim relief', hi: 'अंतरिम राहत माँगें' },
        detail: {
          en: 'Transfer of either party, leave of up to three months over and above your normal leave, or an order restraining the respondent from supervising your work.',
          hi: 'किसी भी पक्ष का स्थानांतरण, सामान्य अवकाश के अतिरिक्त तीन महीने तक का अवकाश, या यह आदेश कि प्रतिवादी आपके काम का पर्यवेक्षण न करे।',
        },
      },
      {
        title: { en: 'The inquiry', hi: 'जाँच' },
        detail: {
          en: 'You may be present, ask questions through the committee and see the evidence against you. It must finish within 90 days, and the employer must act within 60 days of the report.',
          hi: 'आप उपस्थित रह सकती हैं, समिति के माध्यम से प्रश्न पूछ सकती हैं और अपने विरुद्ध सबूत देख सकती हैं। जाँच 90 दिन में पूरी हो, और नियोक्ता रिपोर्ट के 60 दिन में कार्रवाई करे।',
        },
      },
      {
        title: { en: 'If you are not satisfied', hi: 'संतुष्ट न हों तो' },
        detail: {
          en: 'Appeal within 90 days to the court or tribunal named in your service rules. You may also file an FIR at any point — the two proceed independently.',
          hi: '90 दिन के भीतर अपनी सेवा नियमावली में बताए न्यायालय या अधिकरण में अपील करें। आप कभी भी FIR भी दर्ज करा सकती हैं — दोनों स्वतंत्र रूप से चलती हैं।',
        },
      },
    ],
    documents: [
      { en: 'Written complaint, six copies', hi: 'लिखित शिकायत, छह प्रतियाँ' },
      { en: 'Messages, e-mails, call logs, screenshots', hi: 'संदेश, ईमेल, कॉल लॉग, स्क्रीनशॉट' },
      { en: 'Names and contact details of witnesses', hi: 'गवाहों के नाम और संपर्क विवरण' },
      { en: 'A dated diary of the incidents', hi: 'घटनाओं की तिथिवार डायरी' },
    ],
    online: [{ label: { en: 'SHe-Box', hi: 'शी-बॉक्स' }, url: 'https://shebox.wcd.gov.in' }],
  },

  {
    id: 'writ',
    icon: '📜',
    title: { en: 'File a writ petition or PIL', hi: 'रिट याचिका या जनहित याचिका दायर करें' },
    summary: {
      en: 'When a government body breaks the law or ignores your rights, this is the direct route — no lower court, no long wait.',
      hi: 'जब कोई सरकारी निकाय कानून तोड़े या आपके अधिकार अनदेखा करे, यही सीधा रास्ता है — न निचली अदालत, न लंबा इंतज़ार।',
    },
    whoCanUse: {
      en: 'Any person whose fundamental or legal right is affected. For a public interest litigation, any public-spirited person can file for a group that cannot come to court itself.',
      hi: 'कोई भी व्यक्ति जिसका मौलिक या विधिक अधिकार प्रभावित हो। जनहित याचिका में कोई भी जनहितैषी व्यक्ति उस समूह के लिए दायर कर सकता है जो स्वयं अदालत नहीं आ सकता।',
    },
    cost: {
      en: 'A small court fee, and free through legal aid if you qualify. A PIL in most High Courts costs very little.',
      hi: 'छोटा न्यायालय शुल्क, और पात्र हों तो विधिक सहायता से नि:शुल्क। अधिकांश हाईकोर्ट में जनहित याचिका बहुत कम खर्च में होती है।',
    },
    timeLimit: {
      en: 'No fixed limitation, but delay must be explained. Go quickly — courts help the vigilant.',
      hi: 'कोई निश्चित परिसीमा नहीं, पर देरी का कारण बताना होगा। जल्दी जाएँ — अदालतें सजग लोगों की मदद करती हैं।',
    },
    steps: [
      {
        title: { en: 'Exhaust the ordinary route first', hi: 'पहले सामान्य रास्ता आज़माएँ' },
        detail: {
          en: 'Send a written representation to the authority and wait a reasonable time. Courts almost always ask “did you approach them first?”',
          hi: 'प्राधिकरण को लिखित प्रतिवेदन भेजें और उचित समय प्रतीक्षा करें। अदालतें लगभग हमेशा पूछती हैं, “पहले उनके पास गए थे?”',
        },
      },
      {
        title: { en: 'Choose the court and the writ', hi: 'अदालत और रिट चुनें' },
        detail: {
          en: 'High Court under Article 226 for most matters; Supreme Court under Article 32 when a fundamental right is directly at stake. Then pick the writ: habeas corpus for illegal custody, mandamus to make an official act, certiorari to quash a bad order.',
          hi: 'अधिकांश मामलों में अनुच्छेद 226 के तहत हाईकोर्ट; सीधे मौलिक अधिकार का प्रश्न हो तो अनुच्छेद 32 के तहत सुप्रीम कोर्ट। फिर रिट चुनें: अवैध हिरासत के लिए बंदी प्रत्यक्षीकरण, अधिकारी से काम कराने के लिए परमादेश, गलत आदेश रद्द कराने के लिए उत्प्रेषण।',
        },
      },
      {
        title: { en: 'Draft the petition', hi: 'याचिका का प्रारूप बनाएँ' },
        detail: {
          en: 'Facts in numbered paragraphs, the right that was violated, the grounds, and the exact relief you want. Attach the representation and the reply, or proof that none came.',
          hi: 'क्रमांकित अनुच्छेदों में तथ्य, उल्लंघित अधिकार, आधार, और आप ठीक-ठीक क्या राहत चाहते हैं। प्रतिवेदन और उत्तर संलग्न करें, या प्रमाण कि कोई उत्तर नहीं आया।',
        },
      },
      {
        title: { en: 'File and get a date', hi: 'दायर करें और तारीख लें' },
        detail: {
          en: 'The registry checks the papers and lists the matter. Urgent matters — an illegal detention, a demolition tomorrow — can be mentioned before the bench the same day.',
          hi: 'रजिस्ट्री कागज़ जाँचकर मामला सूचीबद्ध करती है। अत्यावश्यक मामले — अवैध हिरासत, कल होने वाली तोड़फोड़ — उसी दिन पीठ के समक्ष उल्लिखित किए जा सकते हैं।',
        },
      },
      {
        title: { en: 'Use legal aid', hi: 'विधिक सहायता लें' },
        detail: {
          en: 'The Legal Services Authority in the court complex drafts and files a writ petition free for anyone who qualifies. Do not let the cost of a lawyer stop you.',
          hi: 'न्यायालय परिसर का विधिक सेवा प्राधिकरण पात्र व्यक्ति के लिए रिट याचिका मुफ़्त तैयार कर दायर करता है। वकील का खर्च आपको रोकने न पाए।',
        },
      },
    ],
    documents: [
      { en: 'Copy of the order or action you are challenging', hi: 'जिस आदेश या कार्रवाई को चुनौती दे रहे हैं उसकी प्रति' },
      { en: 'Your representation to the authority and their reply', hi: 'प्राधिकरण को दिया आपका प्रतिवेदन और उनका उत्तर' },
      { en: 'An affidavit verifying the facts', hi: 'तथ्यों का सत्यापन करता शपथ पत्र' },
      { en: 'Identity and address proof', hi: 'पहचान और पते का प्रमाण' },
    ],
    online: [
      { label: { en: 'eCourts — case status and e-filing', hi: 'ई-कोर्ट्स — केस स्थिति और ई-फाइलिंग' }, url: 'https://ecourts.gov.in' },
      { label: { en: 'Supreme Court of India', hi: 'भारत का उच्चतम न्यायालय' }, url: 'https://main.sci.gov.in' },
    ],
  },

  {
    id: 'grievance',
    icon: '📮',
    title: { en: 'Complain against a government department', hi: 'सरकारी विभाग के विरुद्ध शिकायत' },
    summary: {
      en: 'A pension not paid, a certificate not issued, a road not repaired — CPGRAMS puts it on record and gives you a tracking number.',
      hi: 'पेंशन नहीं मिली, प्रमाणपत्र नहीं बना, सड़क नहीं बनी — CPGRAMS इसे रिकॉर्ड पर लाता है और ट्रैकिंग नंबर देता है।',
    },
    whoCanUse: { en: 'Any citizen, against any central or State government office.', hi: 'कोई भी नागरिक, किसी भी केंद्रीय या राज्य सरकारी कार्यालय के विरुद्ध।' },
    cost: { en: 'Free.', hi: 'नि:शुल्क।' },
    timeLimit: {
      en: 'Departments are expected to reply within 21 to 30 days. Most States also have a Right to Public Services Act with its own deadlines.',
      hi: 'विभागों से 21 से 30 दिन में उत्तर अपेक्षित है। अधिकांश राज्यों में लोक सेवा गारंटी अधिनियम भी है, अपनी समयसीमा के साथ।',
    },
    steps: [
      {
        title: { en: 'Complain to the office itself first', hi: 'पहले उसी कार्यालय में शिकायत करें' },
        detail: {
          en: 'In writing, with a receipt or an acknowledgement number. Almost every escalation later asks for this.',
          hi: 'लिखित में, रसीद या पावती संख्या के साथ। आगे लगभग हर चरण में यही माँगा जाता है।',
        },
      },
      {
        title: { en: 'File on CPGRAMS', hi: 'CPGRAMS पर दर्ज करें' },
        detail: {
          en: 'Register at pgportal.gov.in, choose the department, describe the problem in a few hundred words and upload your papers. You get a registration number to track.',
          hi: 'pgportal.gov.in पर पंजीकरण करें, विभाग चुनें, समस्या कुछ सौ शब्दों में लिखें और कागज़ अपलोड करें। ट्रैक करने के लिए पंजीकरण संख्या मिलती है।',
        },
      },
      {
        title: { en: 'Add an RTI', hi: 'साथ में RTI लगाएँ' },
        detail: {
          en: 'Ask what action was taken on your complaint, on which date, and by which officer. This moves files faster than the complaint itself.',
          hi: 'पूछें कि आपकी शिकायत पर क्या कार्रवाई हुई, किस तारीख को, और किस अधिकारी ने की। यह शिकायत से भी तेज़ी से फ़ाइल आगे बढ़ाता है।',
        },
      },
      {
        title: { en: 'Escalate', hi: 'आगे बढ़ाएँ' },
        detail: {
          en: 'If the reply is unsatisfactory, use the appeal option on the portal. Beyond that, a writ of mandamus in the High Court compels the authority to do its duty.',
          hi: 'उत्तर संतोषजनक न हो तो पोर्टल पर अपील विकल्प का उपयोग करें। उससे आगे, हाईकोर्ट में परमादेश रिट प्राधिकरण को कर्तव्य निभाने के लिए बाध्य करती है।',
        },
      },
    ],
    documents: [
      { en: 'Your earlier application and its receipt number', hi: 'आपका पहले का आवेदन और उसकी रसीद संख्या' },
      { en: 'Any order, sanction letter or scheme document you are relying on', hi: 'कोई आदेश, स्वीकृति पत्र या योजना का दस्तावेज़ जिस पर आप भरोसा कर रहे हैं' },
      { en: 'Identity proof and contact details', hi: 'पहचान प्रमाण और संपर्क विवरण' },
    ],
    online: [
      { label: { en: 'CPGRAMS', hi: 'CPGRAMS' }, url: 'https://pgportal.gov.in' },
      { label: { en: 'RTI Online', hi: 'आरटीआई ऑनलाइन' }, url: 'https://rtionline.gov.in' },
    ],
  },
];

export const ACTION_BY_ID: Record<string, ActionGuide> = Object.fromEntries(ACTIONS.map((a) => [a.id, a]));
