export interface ScholarLeader {
  id: string;
  name: string;
  honorific?: string;
  arabicHonorific?: string;
  role: string;
  type: 'leadership' | 'founder' | 'patron';
  period?: string;
  birthYear?: string;
  deathYear?: string;
  education?: string;
  summary: string;
  fullBio: string;
  keyContributions: string[];
  majorWorks?: string[];
  designationHighlight?: string;
}

export interface ConferenceArchiveItem {
  id?: string;
  number: number;
  year: number;
  hijriYear?: string;
  dateStr?: string;
  venue: string;
  city: string;
  significance: string;
  imageUrl?: string;
  galleryImages?: string[];
  theme?: string;
  attendeesCount?: string;
  speakersCount?: string;
  keySpeakers?: string[];
  resolutions?: string[];
  papersCount?: string;
  groundingSources?: { title: string; url: string }[];
  isUserAdded?: boolean;
}

export interface PublishedWork {
  id: string;
  titleUrdu: string;
  titleEnglish: string;
  author: string;
  translatorOrEditor?: string;
  year: number;
  category: 'Economics & Society' | 'Quranic Studies' | 'Modern Sciences & Astronomy' | 'Jurisprudence & Fatawa' | 'Biography & History' | 'Poetry & Hadaiq';
  description: string;
  language: string;
  pages?: number;
}

export interface DoctoralScholar {
  id: string;
  scholarName: string;
  degree: 'Ph.D.' | 'M.Phil';
  topic: string;
  university: string;
  country: string;
  year: number;
  supervisor?: string;
  award?: 'Gold Medal' | 'Silver Medal';
}

export const LEADERSHIP_MEMBERS: ScholarLeader[] = [
  {
    id: 'majeedullah-qadri',
    name: 'Prof. Dr. Majeedullah Qadri',
    arabicHonorific: 'حفظه الله',
    role: 'Founder Member & President',
    type: 'leadership',
    birthYear: '1955',
    education: 'M.Sc. Geology, M.A. Islamic Studies, Ph.D. Islamic Studies (University of Karachi)',
    summary: 'Former Dean of Science at University of Karachi, recipient of Pakistan’s first Ph.D. on Imam Ahmad Raza, and author of 35 academic books.',
    fullBio: `Prof. Dr. Majeedullah Qadri is the President of Idara-e-Tahqeeqat-e-Imam Ahmed Raza and one of its principal founders. Born in Karachi in 1955, he earned his M.Sc. in Geology from the University of Karachi in 1976 and served as Professor in the Department of Geology and Petroleum Technology from 1978 until his retirement as Dean of the Faculty of Science in April 2015. 

Simultaneously pursuing rigorous Islamic scholarship, he completed his M.A. in Islamic Studies in 1986 and in 1993 was awarded a Ph.D. from the University of Karachi under the supervision of Prof. Dr. Muhammad Masud Ahmed for his doctoral dissertation evaluating "Kanzul Iman and Comparative Urdu Quranic Translations" — the first Ph.D. completed on the scholarly contributions of Imam Ahmad Raza within Pakistan.

Dr. Qadri served as General Secretary of the Idara for 32 consecutive years (1986–2018) before assuming the Presidency in 2018. Over four decades, he has organized 40+ annual conferences and authored 150+ research treatises.`,
    keyContributions: [
      'First scholar in Pakistan awarded a Ph.D. on Imam Ahmad Raza (University of Karachi, 1993)',
      'Served 32 consecutive years as General Secretary and assumed Presidency in 2018',
      'Chief Editor of Salnama Ma\'arif-e-Raza (since 1986) and Monthly Ma\'arif-e-Raza (since 2000)',
      'Authored 35 major research monographs and over 150 peer-reviewed articles',
      'Instrumental in introducing Imam Ahmad Raza\'s scientific treatises into university syllabi globally'
    ],
    majorWorks: [
      'Kanzul Iman aur Maroof Urdu Quraani Tarajim (Ph.D. Thesis, 1999)',
      'The Holy Quran, Science and Imam Ahmad Raza (1998)',
      'Imam Ahmad Raza aur Ilm-e-Sautiyat (Phonetics & Sound Theory)',
      '40 Sala Khidmat ka Jaiza (1401–1440 AH)',
      'Tazkira Khulafa-e-Aala Hazrat (1995)'
    ],
    designationHighlight: 'Former Dean, Faculty of Science, University of Karachi'
  },
  {
    id: 'zahid-siraj',
    name: 'Mufti Syed Zahid Siraj Qadri',
    arabicHonorific: 'حفظه الله',
    role: 'Secretary General',
    type: 'leadership',
    birthYear: '1971',
    education: 'Dars-e-Nizami (Al-Jamiat-ul-Alimia Al-Islamia), M.A. Islamic Studies, M.A. Economics',
    summary: 'Senior Islamic jurist, Shariah auditor, and specialist in Islamic economics and cooperative insurance (Takaful) directing ITIAR secretariat.',
    fullBio: `Mufti Syed Zahid Siraj Qadri was born in Karachi in 1971. He completed the classical Dars-e-Nizami curriculum with honors at Al-Jamiat-ul-Alimia Al-Islamia (securing second position across Pakistan in 1994) alongside M.A. degrees in Islamic Studies and Economics.

With over 30 years of research and administrative leadership at ITIAR, he has served as Joint Secretary, Associate Editor of Monthly Ma'arif-e-Raza, and Secretary General.

Professionally, he is an authority on Islamic finance, serving as Shariah Advisor and Head of Shariah Audit for Islamic financial institutions and lecturing on Islamic banking across universities.`,
    keyContributions: [
      'Secretary General directing the administrative and scholarly programs of ITIAR',
      'Prominent Shariah advisor and auditor in Pakistan\'s Islamic banking and Takaful sectors',
      'Associate Editor of Monthly Ma\'arif-e-Raza, contributing extensive juristic research',
      'Senior lecturer in Dars-e-Nizami institutes and universities',
      'Author of scholarly guides on Islamic jurisprudence, Takaful, and Imam Ahmad Raza\'s economic thought'
    ],
    majorWorks: [
      'Takaful: An Introduction (Islamic Insurance Framework)',
      'Nisab-e-Islam (Foundational Curriculum)',
      'Imam Ahmad Raza aur Pir Meher Ali Shah Golravi: Itiqadi wa Fikri Ham-Ahangi (1994)',
      'Adhkar-e-Haramain'
    ],
    designationHighlight: 'Shariah Advisor & Senior Islamic Finance Specialist'
  }
];

export const FOUNDER_MEMBERS: ScholarLeader[] = [
  {
    id: 'syed-riyasat-ali-qadri',
    name: 'Syed Riyasat Ali Qadri Rizvi',
    arabicHonorific: 'رحمه الله',
    role: 'Founder',
    type: 'founder',
    birthYear: '1932',
    deathYear: '1992',
    education: 'Islamia High School Bareilly; Technical & Linguistic Training in Germany',
    summary: 'Pioneer scholar and linguist who founded ITIAR in 1980 to institutionalize international university research on Imam Ahmad Raza.',
    fullBio: `Syed Riyasat Ali Qadri Rizvi (رحمه الله) was born in Bareilly Sharif into a family closely linked with Imam Ahmed Raza Khan. A polyglot fluent in Urdu, Arabic, Persian, English, and German, he migrated to Pakistan in 1948.

In 1980 (1400 AH), he established Idara-e-Tahqeeqat-e-Imam Ahmed Raza in Karachi, instituting the Annual Conference, the Salnama journal, and academic doctoral research. He brought over 40 rare manuscripts from Bareilly Sharif, making them accessible to scholars for the first time.`,
    keyContributions: [
      'Founder and first President of Idara-e-Tahqeeqat-e-Imam Ahmed Raza (1980)',
      'Launched the first Annual Imam Ahmed Raza Conference in 1981 in Karachi',
      'Founded the annual research journal Salnama Ma\'arif-e-Raza in 1981',
      'Recovered and published rare manuscripts including Hashiya Logarithm in 1980',
      'Initiated newspaper research supplements across national dailies'
    ],
    majorWorks: [
      'Hashiya Logarithm (First publication of ITIAR, 1980)',
      'Imam Ahmad Raza: Ek Azeem Musalman Science-dan (1981)',
      'Imam Ahmad Raza ke Nasri Sheh-pare (1984)',
      'Lam\'aat-e-Shams Barelvi (1986)'
    ]
  },
  {
    id: 'mufti-taqaddus-ali-khan',
    name: 'Mufti Taqaddus Ali Khan',
    arabicHonorific: 'رحمه الله',
    role: 'Founder Member & Patron',
    type: 'founder',
    birthYear: '1907',
    deathYear: '1988',
    education: 'Dars-e-Nizami, Darul Uloom Manzar-e-Islam, Bareilly Sharif',
    summary: 'Venerated jurist, Vice-Administrator of Darul Uloom Manzar-e-Islam Bareilly for 25 years, and Sheikh-al-Jamia at Jamia Rashidiya for 37 years.',
    fullBio: `Mufti Taqaddus Ali Khan (رحمه الله) directed academic administration at Darul Uloom Manzar-e-Islam in Bareilly for 25 years before migrating to Pakistan in 1951. He co-founded Jamia Rashidiya in Pirr Jo Goth, Sindh, serving as its Sheikh-al-Jamia for 37 years and mentoring thousands of Islamic jurists. He was a foundational patron of ITIAR in 1980.`,
    keyContributions: [
      'Founding patron of Idara-e-Tahqeeqat-e-Imam Ahmed Raza in 1980',
      'Served 25 years as Vice-Administrator of Darul Uloom Manzar-e-Islam Bareilly',
      'Sheikh-al-Jamia of Jamia Rashidiya Pirr Jo Goth for 37 years (1952–1988)',
      'Chief Islamic jurist and spiritual mentor for Silsilah Qadiriyah Rashidiya in Sindh'
    ]
  },
  {
    id: 'prof-dr-masood-ahmed',
    name: 'Prof. Dr. Muhammad Masud Ahmed',
    arabicHonorific: 'رحمه الله',
    role: 'Founder Member & Senior Academic Guide',
    type: 'founder',
    birthYear: '1930',
    deathYear: '2008',
    education: 'M.A., Ph.D. (University of Sindh), Oriental Studies',
    summary: 'World-renowned scholar and author of 100+ books who introduced Imam Ahmad Raza\'s thought into contemporary university syllabi.',
    fullBio: `Prof. Dr. Muhammad Masud Ahmed was the intellectual pioneer who introduced Imam Ahmad Raza Khan to the modern university ecosystem in 1971. A founder member of ITIAR, he formulated the 30-volume Dairah-e-Ma'arif-e-Raza master plan and supervised Pakistan's first Ph.D. on Imam Ahmad Raza in 1993.`,
    keyContributions: [
      'Pioneered university-level research on Imam Ahmad Raza beginning in 1971',
      'Formulated the 30-volume Dairah-e-Ma\'arif-e-Raza master plan for ITIAR',
      'Supervised the first Pakistani Ph.D. dissertation on Imam Ahmad Raza in 1993',
      'Authored more than 100 books and hundreds of research articles in Urdu and English'
    ],
    majorWorks: [
      'Fazil Barelvi aur Tark-e-Mawalat (1971)',
      'Fazil Barelvi Ulama-e-Hijaz ki Nazar Mein (1971)',
      'Neglected Genius of the East: Imam Ahmad Raza (1991)',
      'The Reformer of the Muslims (1995)',
      'Jahan-e-Imam Rabbani (15 volumes)'
    ]
  },
  {
    id: 'allama-shamsul-hasan-shams',
    name: 'Allama Shamsul-Hasan Shams Barelvi',
    arabicHonorific: 'رحمه الله',
    role: 'Founder Member',
    type: 'founder',
    birthYear: '1917',
    deathYear: '1997',
    education: 'Fazil Persian & Arabic, Darul Uloom Manzar-e-Islam Bareilly',
    summary: 'Presidential Award-winning Arabic & Persian scholar and master translator of classical Sufi texts into Urdu.',
    fullBio: `Allama Shamsul-Hasan Shams Barelvi completed his classical education under the direct disciples of Imam Ahmad Raza. His magnum opus on the eloquence of the Holy Prophet was awarded the Presidential Award by the Government of Pakistan in 1986. He authored definitive introductions to Hadaiq-e-Bakhshish and served as senior literary adviser to ITIAR.`,
    keyContributions: [
      'Founder member and senior literary adviser to ITIAR from 1980',
      'Recipient of the Presidential Award (Government of Pakistan, 1986)',
      'Translated classical texts including Awaarif-ul-Ma\'arif and Al-Ghunya into Urdu',
      'Authored the two-volume critical work Imam Ahmad Raza ki Hashiya Nigari'
    ],
    majorWorks: [
      'Sarwar-e-Kaunain ki Fasahat (Presidential Award Winner, 1986)',
      'Urdu Translation of Awaarif-ul-Ma\'arif by Sheikh Shahabuddin Suhrawardi',
      'Urdu Translation of Al-Ghunya by Sheikh Abdul Qadir Jilani'
    ]
  },
  {
    id: 'syed-wajahat-rasool-qadri',
    name: 'Syed Wajahat Rasool Qadri',
    arabicHonorific: 'رحمه الله',
    role: 'Founder Member & Second President',
    type: 'founder',
    birthYear: '1939',
    deathYear: '2018',
    education: 'M.A. Economics (Rajshahi University); Senior Vice President Habib Bank',
    summary: 'Senior banker and author of 25 books who served as ITIAR President for 26 continuous years (1992–2018), expanding its international reach.',
    fullBio: `Syed Wajahat Rasool Qadri led ITIAR for 26 years following the founder's demise. He spearheaded international academic delegations to Al-Azhar University Cairo and Bangladesh, facilitating multilingual translations and authoring 25 books and 100+ research papers.`,
    keyContributions: [
      'President of ITIAR for 26 years (1992–2018), leading international expansion',
      'Led academic delegation to Al-Azhar University Cairo in 1999',
      'Authored 25 research books and over 100 articles in Ma\'arif-e-Raza',
      'Produced historic television documentaries on Imam Ahmad Raza'
    ],
    majorWorks: [
      'A Guide Line to Zakat and Ushr Ordinance',
      'Safar-nama Jamia Al-Azhar Cairo (2017)',
      'Imam Ahmad Raza: Ek Hama-Jehat Shakhsiyat (2018)'
    ]
  },
  {
    id: 'manzoor-hussain-gillani',
    name: 'Manzoor Hussain Gillani',
    arabicHonorific: 'حفظه الله',
    role: 'Founder Member & Senior Advisor',
    type: 'founder',
    birthYear: '1940',
    education: 'B.Com, Banking Diploma; Senior Vice President Habib Bank',
    summary: 'Institutional architect who drafted ITIAR\'s constitution in 1986, established the permanent membership endowment, and edited English journal editions.',
    fullBio: `Manzoor Hussain Gillani drafted ITIAR's foundational constitution and statutory objectives for registration under the Societies Act in 1986. He pioneered the sustainable membership endowment and launched the English section of Ma'arif-e-Raza, serving as editor for 24 years.`,
    keyContributions: [
      'Drafted statutory constitution and objectives for ITIAR registration in 1986',
      'Architect of the permanent membership program ensuring sustainable funding',
      'Launched and edited the English Section of Ma\'arif-e-Raza (1986–2010)',
      'Executive organizer of annual international conferences'
    ]
  }
];

export const STRATEGIC_PILLARS = [
  {
    number: '01',
    title: 'University Research & Doctoral Registry',
    subtitle: '70+ Ph.D. & M.Phil Facilitated Theses',
    description: 'Promoting university-level research on Imam Ahmad Raza\'s multi-disciplinary treatises across 30+ universities globally with annual Gold Medal incentives.',
    deliverables: [
      'Imam Ahmad Raza Gold & Silver Medals for doctoral researchers',
      'Curriculum integration in university Islamic Studies departments',
      'Archival research access for post-graduate scholars',
      'Academic linkages with Al-Azhar University, IIUI, and University of Karachi'
    ]
  },
  {
    number: '02',
    title: 'Archival Publishing & Multilingual Journals',
    subtitle: '250+ Journal Editions & 164+ Monographs',
    description: 'Systematic editing, commentary, and translation of classical manuscripts into modern Arabic, English, and Urdu across two continuous periodicals.',
    deliverables: [
      'Monthly Ma\'arif-e-Raza: Uninterrupted publication for 25+ years',
      'Salnama Ma\'arif-e-Raza: Annual tri-lingual peer-reviewed compendium',
      'Central Raza Library: Preserving 40+ autographed rare manuscripts',
      '164+ Cataloged Treatises on economics, astronomy, and law'
    ]
  },
  {
    number: '03',
    title: 'International Symposia & Public Outreach',
    subtitle: '45 Annual Assemblies Concluded (1981–2025)',
    description: 'Convening annual conferences uniting university deans, jurists, and economists to examine contemporary ideological and financial questions.',
    deliverables: [
      '45 Annual Conferences concluded uninterrupted between 1981 and 2025',
      'Commemorative research supplements in leading national dailies',
      'Specialist symposia on Islamic economics, acoustics, and astronomy',
      'Statutory book endowments for Supreme Court and national libraries'
    ]
  }
];

export const KEY_OBJECTIVES = [
  {
    title: 'Advanced Research & Archival Preservation',
    description: 'Conduct and facilitate rigorous research into the life, 55+ disciplines, and 1,000+ authored treatises of Imam Ahmad Raza Khan Barelvi.'
  },
  {
    title: 'Multilingual Translation & Global Dissemination',
    description: 'Translate seminal writings from classical Arabic and Persian into modern English, Urdu, Bengali, Sindhi, and international languages.'
  },
  {
    title: 'Institutional Infrastructure',
    description: 'Develop the permanent Raza Council, Raza Central Research Library, Raza Press, and work toward the proposed Imam Ahmad Raza International University.'
  },
  {
    title: 'Curricular Integration in Higher Education',
    description: 'Incorporate Imam Ahmad Raza\'s juristic, economic, and scientific insights into undergraduate and post-graduate university syllabi globally.'
  },
  {
    title: 'Promotion of Intellectual Harmony',
    description: 'Demonstrate the profound synthesis between classical religious sciences, Quranic exegesis, and modern empirical and cosmological sciences.'
  },
  {
    title: 'Annual Symposia & Peer-Reviewed Journals',
    description: 'Regularly convene national and international conferences and maintain uninterrupted publication of the monthly and annual Ma\'arif-e-Raza journals.'
  }
];

export const TESTIMONIALS_DATA = [
  {
    quote: 'In his writings, Imam Ahmad Raza appears not merely as a master jurist, but as a penetrating researcher and clinical scientist. His rigorous methodologies illustrate the precise interplay between religion and medicine.',
    author: 'Hakim Mohammed Said',
    title: 'Former Governor of Sindh & Founder, Hamdard University',
    source: 'Ma\'arif-e-Raza, Vol. 9, p. 100'
  },
  {
    quote: 'Imam Ahmad Raza was a towering polymath, jurist, philosopher, and mystic poet of immense stature. His writings carry an intellectual permanence and sobriety that serve as a guiding beacon for future generations of scholars.',
    author: 'Prof. Pareshan Khattak',
    title: 'Former Chairman, Pakistan Academy of Letters',
    source: 'Majalla Imam Ahmad Raza Conference, 1988'
  },
  {
    quote: 'Whenever the history of resolute intellect and faith in the subcontinent is written, the name of Maulana Ahmad Raza Khan will be recorded in golden letters. History records individuals, but some rare figures shape history itself.',
    author: 'Justice Mian Mehboob Ahmed',
    title: 'Former Chief Justice, Lahore High Court',
    source: 'Majalla Imam Ahmad Raza Conference, 1992'
  },
  {
    quote: 'Hadaiq-e-Bakhshish is a work of such spiritual intoxication and rhetorical elevation that reading its devotional stanzas convinces the soul that language has reached its consummate zenith in the love of the Prophet.',
    author: 'Dr. Jameel Jalibi',
    title: 'Former Vice-Chancellor, University of Karachi & Eminent Literary Historian',
    source: 'Majalla Imam Ahmad Raza Conference, 1992'
  }
];

export const FEATURED_BOOKS: PublishedWork[] = [
  {
    id: 'b-01',
    titleUrdu: 'معین مبین بہر دور شمس وسکون زمین',
    titleEnglish: 'Revolving Sun and the Static Earth',
    author: 'Imam Ahmad Raza Khan Barelvi',
    translatorOrEditor: 'English Translation by Nigar Irfani',
    year: 1989,
    category: 'Modern Sciences & Astronomy',
    description: 'Presents 105 mathematical and observational arguments addressing planetary motions, optics, and astrophysics.',
    language: 'English & Urdu'
  },
  {
    id: 'b-02',
    titleUrdu: 'تدبیر فلاح ونجات واصلاح (معیشت)',
    titleEnglish: 'Economic Guidelines for Muslims',
    author: 'Imam Ahmad Raza Khan Barelvi',
    translatorOrEditor: 'English Translation by Prof. Muhammad Abdul Qadir',
    year: 1988,
    category: 'Economics & Society',
    description: 'Foundational 1920 treatise proposing interest-free Islamic banking, local wealth retention, and financial sovereignty.',
    language: 'English & Urdu'
  },
  {
    id: 'b-03',
    titleUrdu: 'کنز الایمان فی ترجمۃ القرآن (تحقیقی تقابلی جائزہ)',
    titleEnglish: 'Kanzul Iman and Comparative Urdu Translations of the Holy Quran',
    author: 'Prof. Dr. Majeedullah Qadri',
    year: 1999,
    category: 'Quranic Studies',
    description: 'Groundbreaking University of Karachi Ph.D. study analyzing semantic precision and exegesis in Urdu translations.',
    language: 'Urdu & Arabic',
    pages: 728
  },
  {
    id: 'b-04',
    titleUrdu: 'البیان شافیا لغونوغرافیا (صوتیات)',
    titleEnglish: 'Sound Theory & Phonetics in Islamic Jurisprudence',
    author: 'Imam Ahmad Raza Khan Barelvi',
    year: 1985,
    category: 'Modern Sciences & Astronomy',
    description: 'Seminal study on the physical nature of acoustic sound waves, vocal mechanics, and recording technologies.',
    language: 'Urdu & Arabic'
  },
  {
    id: 'b-05',
    titleUrdu: 'جد الممتار علی رد المحتار (7 مجلدات)',
    titleEnglish: 'Jadd al-Mumtar ala Radd al-Muhtar (7 Volumes)',
    author: 'Imam Ahmad Raza Khan Barelvi',
    year: 1985,
    category: 'Jurisprudence & Fatawa',
    description: 'Monumental 7-volume Arabic marginalia on Ibn Abidin\'s classic, widely referenced across Middle Eastern universities.',
    language: 'Arabic',
    pages: 3500
  },
  {
    id: 'b-06',
    titleUrdu: 'الدولۃ المکیۃ بالمادۃ الغیبیۃ',
    titleEnglish: 'Al-Dawlat al-Makkiya (The Sovereign Revelation of Knowledge)',
    author: 'Imam Ahmad Raza Khan Barelvi',
    year: 1905,
    category: 'Jurisprudence & Fatawa',
    description: 'Celebrated Arabic treatise composed in Makkah in 1323 AH outlining epistemology and prophetic knowledge.',
    language: 'Arabic & Urdu'
  },
  {
    id: 'b-07',
    titleUrdu: 'حدائق بخشش (مکمل شرح و تحقیق)',
    titleEnglish: 'Hadaiq-e-Bakhshish (Critical Edition)',
    author: 'Imam Ahmad Raza Khan Barelvi',
    translatorOrEditor: 'Introduction & Commentary by Allama Shamsul-Hasan Shams Barelvi',
    year: 1999,
    category: 'Poetry & Hadaiq',
    description: 'Masterwork of devotional Arabic, Persian, and Urdu poetry with critical annotations and meter analysis.',
    language: 'Urdu, Persian & Arabic'
  },
  {
    id: 'b-08',
    titleUrdu: 'سرور کونین کی فصاحت',
    titleEnglish: 'The Eloquence of the Master of the Two Universes',
    author: 'Allama Shamsul-Hasan Shams Barelvi',
    year: 1986,
    category: 'Biography & History',
    description: 'Presidential Award-winning study on Arabic rhetoric, classical semantics, and Seerah literature.',
    language: 'Urdu',
    pages: 480
  },
  {
    id: 'b-09',
    titleUrdu: 'ادارہ تحقیقات امام احمد رضا کی 40 سالہ خدمات کا جائزہ',
    titleEnglish: '40-Year Review of Scholarly Services of ITIAR (1401-1440 AH)',
    author: 'Prof. Dr. Majeedullah Qadri',
    year: 2019,
    category: 'Biography & History',
    description: 'Empirical archive covering four decades of annual conferences, journal catalogs, and doctoral research awards.',
    language: 'Urdu',
    pages: 134
  }
];

export const CONFERENCE_CHRONICLE: ConferenceArchiveItem[] = [
  {
    id: 'conf-45',
    number: 45,
    year: 2025,
    hijriYear: '1447 AH',
    dateStr: '3 December 2025',
    venue: 'Pearl Continental Hotel',
    city: 'Karachi, Pakistan',
    theme: 'Modern Applications of the Economy: Visionary Insights of Imam Ahmad Raza & Halal Financial Architecture',
    significance: '45th Annual International Assembly examining currency stability, interest-free banking, cooperative insurance (Takaful), and socio-economic welfare models outlined in Kifayat-ul-Muqtasid and Tadbir-e-Falah.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,200+ Delegates',
    speakersCount: '34 Keynote Speakers',
    papersCount: '28 Research Papers',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri (President, ITIAR)',
      'Mufti Syed Zahid Siraj Qadri (Secretary General, ITIAR)',
      'Dr. Muhammad Shahid (Shariah Scholar, IIUI)',
      'Dr. Noor Ahmed Shahtaz (Former Director, Sheikh Zayed Islamic Centre)'
    ],
    resolutions: [
      'Establishment of the Imam Ahmad Raza Chair of Islamic Economics across universities',
      'Harmonization of subcontinental juristic edicts with international Islamic finance bodies (AAOIFI)',
      'Creation of digital manuscript repository for rare economic treatises'
    ]
  },
  {
    id: 'conf-45-pre',
    number: 45,
    year: 2025,
    hijriYear: '1447 AH',
    dateStr: '23 August 2025',
    venue: 'Al-Safaa Town Hall, Gulistan-e-Jauhar',
    city: 'Karachi, Pakistan',
    theme: 'Pre-Conference Scholarly Seminar: Safeguarding the Finality of Prophethood (Khatm-e-Nubuwwat)',
    significance: 'Preparatory academic symposium for the 45th conference examining theological treatises on prophetic finality and doctrinal defense against contemporary heterodox movements.',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '650 Attendees',
    speakersCount: '14 Keynote Speakers',
    papersCount: '12 Treatises Analyzed',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Allama Syed Muzaffar Hussain Shah',
      'Mufti Abid Mubarak Al-Madani',
      'Allama Ghulam Dastagir'
    ],
    resolutions: [
      'Urgent dissemination of Arabic monographs on Khatm-e-Nubuwwat to international seminaries',
      'Special youth educational workshops on classical theological foundations'
    ]
  },
  {
    id: 'conf-44',
    number: 44,
    year: 2024,
    hijriYear: '1446 AH',
    dateStr: '10 December 2024',
    venue: 'Pearl Continental Hotel, Crystal Ballroom',
    city: 'Karachi, Pakistan',
    theme: 'Transformation of the Halal Economy & Contemporary Financial Jurisprudence',
    significance: 'High-profile national assembly exploring Halal supply-chain audit, Hanafi jurisprudence applied to algorithmic trade, commodity murabaha, and ethical trade standards in Fatawa Razawiyya.',
    imageUrl: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '980 Delegates',
    speakersCount: '28 Speakers',
    papersCount: '24 Academic Papers',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Mufti Syed Zahid Siraj Qadri (Shariah Audit Head)',
      'Dr. Mufti Imran Bashir (Islamic Finance Specialist)',
      'Justice (R) Dr. Munir Ahmed Mughal'
    ],
    resolutions: [
      'Standardization of Halal certification protocols based on classical fiqh sources',
      'Curriculum integration of early 20th-century economic treatises in MBA programs'
    ]
  },
  {
    id: 'conf-43',
    number: 43,
    year: 2023,
    hijriYear: '1445 AH',
    dateStr: '18 November 2023',
    venue: 'Arts Council of Pakistan Auditorium',
    city: 'Karachi, Pakistan',
    theme: 'Contemporary Juridical Methodology, Artificial Intelligence & Digital Ethics',
    significance: 'Investigating legal rulings on digital assets, intellectual property rights, acoustic reproduction, and emerging biomedical questions from a Hanafi jurisprudence framework.',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '850 Delegates',
    speakersCount: '25 Lecturers',
    papersCount: '19 Papers',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Mufti Muhammad Akram Rizvi',
      'Prof. Dr. Zahid Ali Khan (Karachi University)'
    ],
    resolutions: [
      'Formation of an interdisciplinary Jurist-Technologist Advisory Council',
      'Publication of special monograph on Artificial Intelligence & Islamic Bioethics'
    ]
  },
  {
    id: 'conf-42',
    number: 42,
    year: 2022,
    hijriYear: '1444 AH',
    dateStr: '29 October 2022',
    venue: 'Beach Luxury Hotel, Jasmine Hall',
    city: 'Karachi, Pakistan',
    theme: 'Cosmological Sciences, Mathematics & Observational Astronomy in Fatawa Razawiyya',
    significance: 'Multidisciplinary symposium evaluating mathematical proofs in astronomical timing, Qibla azimuth calculation, lunar sighting criteria, and celestial mechanics.',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '750 Scholars & Astronomers',
    speakersCount: '20 Research Fellows',
    papersCount: '16 Technical Papers',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri (Geologist & Dean of Science)',
      'Prof. Dr. Shahid Qureshi (Institute of Space & Planetary Astrophysics)',
      'Allama Syed Ahmad Raza Bijnori'
    ],
    resolutions: [
      'Re-publication of Fawz-e-Mubeen with modern mathematical annotations and astronomical diagrams'
    ]
  },
  {
    id: 'conf-41',
    number: 41,
    year: 2021,
    hijriYear: '1443 AH',
    dateStr: '13 November 2021',
    venue: 'Pearl Continental Grand Hall',
    city: 'Karachi, Pakistan',
    theme: 'Centenary of Historical Demise (1340–1440 AH): Subcontinental Educational Renaissance',
    significance: 'Official centenary commemoration of the passing of Imam Ahmad Raza Khan, celebrating 100 lunar years of scholarship and university research globally.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,400 Delegates',
    speakersCount: '36 International Scholars',
    papersCount: '32 Academic Theses',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Pir Muhammad Amin-ul-Hasnat Shah (Bhera Sharif)',
      'Mufti Muneeb-ur-Rehman (Chairman, Ruet-e-Hilal Committee)'
    ],
    resolutions: [
      'Launch of global digital archive of doctoral dissertations on Imam Ahmad Raza'
    ]
  },
  {
    id: 'conf-40',
    number: 40,
    year: 2020,
    hijriYear: '1442 AH',
    dateStr: '7 November 2020',
    venue: 'Virtual & Hybrid International Secretariat Assembly',
    city: 'Karachi, Pakistan (Global Broadcast)',
    theme: 'Crisis Management, Pandemic Jurisprudence & Public Health Ethics in Classical Treatises',
    significance: 'Milestone 40th Annual Conference held in hybrid format during the global pandemic, reviewing 40 continuous years of ITIAR service and classical contagion protocols in Fatawa.',
    imageUrl: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '3,500+ Online Delegates',
    speakersCount: '22 International Delegates',
    papersCount: '18 Research Papers',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Dr. Fazlur Rahman (London, UK)',
      'Mufti Muhammad Aslam Qadri (Durban, South Africa)'
    ],
    resolutions: [
      'Presentation of the landmark publication "40 Sala Khidmat Ka Jaiza" (1401–1440 AH)'
    ]
  },
  {
    id: 'conf-39',
    number: 39,
    year: 2019,
    hijriYear: '1441 AH',
    dateStr: '19 October 2019',
    venue: 'Pearl Continental Grand Ballroom',
    city: 'Karachi, Pakistan',
    theme: 'Centenary Commemoration of Imam Ahmad Raza Khan (1340–1440 AH) & 40-Year Retrospective',
    significance: 'Global centenary assembly marking 100 years of the Mujaddid’s legacy with the 40-year empirical review and presentation of international Ph.D. registry.',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,800 Delegates',
    speakersCount: '45 International Scholars',
    papersCount: '38 Papers',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Dr. Muhammad Masud Ahmed (Late Scholar Commemoration)',
      'Justice (R) Mian Mehboob Ahmed',
      'Prof. Dr. Jameel Jalibi'
    ],
    resolutions: [
      'Institutionalization of the Annual Imam Ahmad Raza Research Gold Medal for Doctoral Scholars'
    ]
  },
  {
    id: 'conf-37',
    number: 37,
    year: 2017,
    hijriYear: '1439 AH',
    dateStr: '22 November 2017',
    venue: 'Faculty of Arts & Social Sciences Auditorium, University of Karachi',
    city: 'Karachi, Pakistan',
    theme: 'Expert of Social Sciences Imam Ahmad Raza Khan: Political and Economic Views, Effects and Implementation',
    significance: 'Joint conference organized in formal collaboration with the University of Karachi exploring socio-political theories, currency stabilization, and statecraft in British India.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,200 Faculty & Students',
    speakersCount: '26 University Deans & Scholars',
    papersCount: '22 Scholarly Treatises',
    keySpeakers: [
      'Prof. Dr. Muhammad Qaiser (Vice-Chancellor, University of Karachi)',
      'Prof. Dr. Majeedullah Qadri (President, ITIAR)',
      'Prof. Dr. Moonis Ahmar (Dean, Faculty of Social Sciences)',
      'Prof. Dr. Noor Ahmed Shahtaz'
    ],
    resolutions: [
      'Inclusion of Imam Ahmad Raza’s political essays in university postgraduate curricula',
      'Joint research grant allocation for PhD candidates researching colonial Indian economic history'
    ]
  },
  {
    id: 'conf-35',
    number: 35,
    year: 2015,
    hijriYear: '1437 AH',
    dateStr: '24 October 2015',
    venue: 'Sheikh Zayed Islamic Centre, University of Karachi',
    city: 'Karachi, Pakistan',
    theme: 'Acoustics, Earth Sciences and Phonetics: Scientific Dimensions of Subcontinental Fiqh',
    significance: 'Commemorating Prof. Dr. Majeedullah Qadri’s completion of service as Dean of Science and highlighting the physical acoustics research in Al-Bayan al-Shafi.',
    imageUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '900 Delegates',
    speakersCount: '24 Keynote Presenters',
    papersCount: '20 Treatises',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Prof. Dr. Abid Azhar (Director General, KIBGE)',
      'Dr. Hafiz Muhammad Sajjad (AIOU Islamabad)'
    ],
    resolutions: [
      'Establishment of the Science & Religion Empirical Dialogue Series'
    ]
  },
  {
    id: 'conf-30',
    number: 30,
    year: 2010,
    hijriYear: '1431 AH',
    dateStr: '17 April 2010',
    venue: 'Sheikh Zayed Islamic Centre, University of Karachi',
    city: 'Karachi, Pakistan',
    theme: 'Islamic Higher Education and Curricular Modernization in the 21st Century',
    significance: '30th Pearl Jubilee convention uniting faculty deans and vice-chancellors to address research standards in modern Islamic Studies departments.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '800 Scholars & Students',
    speakersCount: '22 Papers Presented',
    papersCount: '22 Academic Papers',
    keySpeakers: [
      'Prof. Dr. Pirzada Qasim Raza Siddiqui (Vice-Chancellor, University of Karachi)',
      'Prof. Dr. Majeedullah Qadri',
      'Dr. Muhammad Masud Ahmed'
    ],
    resolutions: [
      'Standardization of citation and cataloging across Urdu academic journals'
    ]
  },
  {
    id: 'conf-29',
    number: 29,
    year: 2009,
    hijriYear: '1430 AH',
    dateStr: '28 March 2009',
    venue: 'Federal Urdu University of Arts, Science & Technology',
    city: 'Karachi, Pakistan',
    theme: 'Centenary of Kanzul Iman Translation (1330–1430 AH): Hermeneutics & Rhetorical Precision',
    significance: 'Academic symposium celebrating 100 lunar years of the celebrated Urdu Quranic translation Kanzul Iman, analyzing its theological syntax and literary elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,100 Delegates',
    speakersCount: '30 Papers',
    papersCount: '28 Exegetical Studies',
    keySpeakers: [
      'Prof. Dr. Muhammad Masud Ahmed',
      'Prof. Dr. Majeedullah Qadri',
      'Prof. Dr. Hanif Hanfi (FUUAST)'
    ],
    resolutions: [
      'Publication of Kanzul Iman comparative translations compendium'
    ]
  },
  {
    id: 'conf-25',
    number: 25,
    year: 2005,
    hijriYear: '1426 AH',
    dateStr: '15 September 2005',
    venue: 'Beach Luxury Hotel & NIPA Auditorium',
    city: 'Karachi, Pakistan',
    theme: 'Silver Jubilee International Conference (1980–2005): A Quarter-Century of Research Rigor',
    significance: 'Historic Silver Jubilee celebrating 25 continuous years of institutional research, publication of 100+ monographs, and completion of 30+ doctoral dissertations.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,500 Attendees',
    speakersCount: '38 Speakers',
    papersCount: '35 Research Papers',
    keySpeakers: [
      'Prof. Dr. Muhammad Masud Ahmed',
      'Prof. Dr. Majeedullah Qadri',
      'Hakim Mohammed Said (Commemorative Tribute)',
      'Justice (R) Mian Mehboob Ahmed'
    ],
    resolutions: [
      'Launch of the English peer-reviewed section in Ma\'arif-e-Raza',
      'Expansion of international research chapters across the UK and North America'
    ]
  },
  {
    id: 'conf-20',
    number: 20,
    year: 2000,
    hijriYear: '1421 AH',
    dateStr: '14 October 2000',
    venue: 'Arts Council Auditorium',
    city: 'Karachi, Pakistan',
    theme: 'Entering the New Millennium: Launch of Monthly Ma\'arif-e-Raza & Inter-University Fellowships',
    significance: '20th Annual Conference marking the transformation of Ma\'arif-e-Raza from an annual compendium into a monthly peer-reviewed journal.',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '950 Delegates',
    speakersCount: '26 Lecturers',
    papersCount: '24 Articles',
    keySpeakers: [
      'Prof. Dr. Majeedullah Qadri',
      'Allama Syed Riyasat Ali Qadri (Commemoration)',
      'Dr. Muhammad Masud Ahmed'
    ],
    resolutions: [
      'Monthly publication schedule inaugurated starting November 2000'
    ]
  },
  {
    id: 'conf-15',
    number: 15,
    year: 1995,
    hijriYear: '1416 AH',
    dateStr: '11 November 1995',
    venue: 'Pearl Continental Hotel',
    city: 'Lahore & Karachi, Pakistan',
    theme: 'Imam Ahmad Raza and Subcontinental Independence Ideology',
    significance: 'Exploring two-nation theory antecedents, legal edicts against partition of Islamic sovereignty, and economic boycott of colonial goods.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,300 Delegates',
    speakersCount: '30 Speakers',
    papersCount: '25 Historical Treatises',
    keySpeakers: [
      'Justice Mian Mehboob Ahmed (Chief Justice Lahore High Court)',
      'Prof. Pareshan Khattak',
      'Prof. Dr. Muhammad Masud Ahmed'
    ],
    resolutions: [
      'Presentation of Tazkira Khulafa-e-Aala Hazrat by Dr. Majeedullah Qadri'
    ]
  },
  {
    id: 'conf-11',
    number: 11,
    year: 1991,
    hijriYear: '1412 AH',
    dateStr: '9 November 1991',
    venue: 'Hotel Sheraton (Karachi) & Pearl Continental (Lahore)',
    city: 'Karachi & Lahore, Pakistan',
    theme: 'Tripartite National Academic Symposia & Regional Chapters Expansion',
    significance: 'Historic multi-city conference expanding Idara proceedings across Sindh and Punjab provinces, inaugurating branch archives in Lahore and Rawalpindi.',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '2,000 Delegates',
    speakersCount: '40 Scholars',
    papersCount: '30 Papers',
    keySpeakers: [
      'Syed Riyasat Ali Qadri (Founder President)',
      'Prof. Dr. Muhammad Masud Ahmed',
      'Prof. Dr. Majeedullah Qadri'
    ],
    resolutions: [
      'Creation of the ITIAR Regional Advisory Board across provincial capitals'
    ]
  },
  {
    id: 'conf-6',
    number: 6,
    year: 1986,
    hijriYear: '1407 AH',
    dateStr: '25 October 1986',
    venue: 'Hotel Sheraton Grand Ballroom',
    city: 'Karachi, Pakistan',
    theme: 'Charter Ratification under Societies Act XXI of 1860 & Gold Medal Inauguration',
    significance: 'Formal ratification of Idara constitution under Societies Registration Act XXI of 1860, and institution of the Ph.D. Gold Medal Scheme for doctoral researchers.',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '1,000 Delegates',
    speakersCount: '26 Lecturers',
    papersCount: '18 Papers',
    keySpeakers: [
      'Syed Riyasat Ali Qadri (Founder President)',
      'Justice (R) Qadeeruddin Ahmed (Former Governor of Sindh)',
      'Allama Shamsul-Hasan Shams Barelvi'
    ],
    resolutions: [
      'Formal adoption of the ITIAR Charter 1986',
      'Inauguration of the Gold & Silver Medal incentive scheme for doctoral dissertations'
    ]
  },
  {
    id: 'conf-1',
    number: 1,
    year: 1981,
    hijriYear: '1401 AH',
    dateStr: '12 June 1981',
    venue: 'Theosophical Hall, M.A. Jinnah Road',
    city: 'Karachi, Pakistan',
    theme: 'Inaugural National Convention & Launch of Salnama Ma\'arif-e-Raza',
    significance: 'Foundational assembly inaugurating annual international gatherings, the publication of Hashiya Logarithm, and the annual research compendium Salnama Ma\'arif-e-Raza.',
    imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    attendeesCount: '700 Delegates',
    speakersCount: '18 Lecturers',
    papersCount: '15 Treatises',
    keySpeakers: [
      'Syed Riyasat Ali Qadri (Founder & President)',
      'Allama Mufti Taqaddus Ali Khan',
      'Allama Shamsul-Hasan Shams Barelvi',
      'Prof. Dr. Muhammad Masud Ahmed'
    ],
    resolutions: [
      'Establishment of the annual conference tradition',
      'Resolution to publish an annual trilingual research journal (Salnama Ma\'arif-e-Raza)'
    ]
  }
];

export interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
  year?: number;
  conferenceNumber?: number;
  location?: string;
}

export const CONFERENCE_GALLERY_IMAGES: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: '45th Plenary Assembly & Main Stage',
    category: 'Plenary Assembly',
    conferenceNumber: 45,
    year: 2025,
    location: 'Pearl Continental Hotel, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    caption: 'Scholarly congregation at the 45th Annual Imam Ahmed Raza International Conference at Pearl Continental, examining modern financial applications.'
  },
  {
    id: 'gal-2',
    title: '44th Conference Shariah Audit Panel',
    category: 'Expert Panel',
    conferenceNumber: 44,
    year: 2024,
    location: 'Pearl Continental Crystal Ballroom, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Senior jurists, muftis, and Islamic finance professors deliberating on Halal economy standards and algorithmic trading.'
  },
  {
    id: 'gal-3',
    title: 'Centenary Commemoration Audience (1340–1440 AH)',
    category: 'Audience & Delegates',
    conferenceNumber: 39,
    year: 2019,
    location: 'Pearl Continental Grand Ballroom, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Over 1,800 delegates, research scholars, university faculty, and international guests attending the Centenary Plenary.'
  },
  {
    id: 'gal-4',
    title: 'Doctoral Gold Medal Convocation Ceremony',
    category: 'Awards Ceremony',
    conferenceNumber: 39,
    year: 2019,
    location: 'Karachi, Pakistan',
    imageUrl: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=80',
    caption: 'Conferment of the prestigious Imam Ahmad Raza Gold Medal to meritorious PhD scholars completing dissertations on Raza studies.'
  },
  {
    id: 'gal-5',
    title: 'Joint University Conference with Karachi University',
    category: 'Academic Symposia',
    conferenceNumber: 37,
    year: 2017,
    location: 'Faculty of Social Sciences Auditorium, University of Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80',
    caption: 'Vice-Chancellor Prof. Dr. Muhammad Qaiser, faculty deans, and ITIAR leadership convening on Imam Ahmad Raza’s socio-political views.'
  },
  {
    id: 'gal-6',
    title: 'Silver Jubilee 25th International Conference',
    category: 'Historic Archive',
    conferenceNumber: 25,
    year: 2005,
    location: 'Beach Luxury Hotel & NIPA Auditorium, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80',
    caption: 'Celebrating 25 continuous years of institutional research (1980–2005) with 1,500 participants and international delegates.'
  },
  {
    id: 'gal-7',
    title: 'Keynote Lecture at Arts Council Auditorium',
    category: 'Keynote Lecture',
    conferenceNumber: 43,
    year: 2023,
    location: 'Arts Council of Pakistan, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Keynote lecture on contemporary juridical methodology, acoustic rulings, and bioethics in subcontinental jurisprudence.'
  },
  {
    id: 'gal-8',
    title: 'Rare Treatises Exhibition & Manuscripts Gallery',
    category: 'Exhibition',
    conferenceNumber: 42,
    year: 2022,
    location: 'Beach Luxury Hotel, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1000&q=80',
    caption: 'Special exhibition displaying original Arabic and Persian manuscripts, celestial astrolabe diagrams, and Fawz-e-Mubeen mathematical proofs.'
  },
  {
    id: 'gal-9',
    title: 'Centenary of Kanzul Iman Translation (1330–1430 AH)',
    category: 'Academic Symposia',
    conferenceNumber: 29,
    year: 2009,
    location: 'Federal Urdu University (FUUAST), Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80',
    caption: 'Academic symposium evaluating rhetorical precision, comparative Urdu Quranic translations, and hermeneutics.'
  },
  {
    id: 'gal-10',
    title: 'Pre-Conference Khatm-e-Nubuwwat Seminar',
    category: 'Plenary Assembly',
    conferenceNumber: 45,
    year: 2025,
    location: 'Al-Safaa Town Hall, Gulistan-e-Jauhar, Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?auto=format&fit=crop&w=1000&q=80',
    caption: 'Preparatory scholarly seminar safeguarding prophetic finality attended by leading ulama and university faculty.'
  },
  {
    id: 'gal-11',
    title: 'Historic Tripartite Assembly in Lahore & Karachi',
    category: 'Historic Archive',
    conferenceNumber: 11,
    year: 1991,
    location: 'Hotel Sheraton Karachi & PC Lahore',
    imageUrl: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=80',
    caption: '11th Annual Conference expanding ITIAR proceedings across provincial universities and launching provincial advisory councils.'
  },
  {
    id: 'gal-12',
    title: 'Ma\'arif-e-Raza Journal Catalog & Institutional Archive',
    category: 'Exhibition',
    conferenceNumber: 30,
    year: 2010,
    location: 'Sheikh Zayed Islamic Centre, University of Karachi',
    imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&w=1000&q=80',
    caption: 'Archival display of four decades of Salnama and monthly Ma\'arif-e-Raza research periodicals available for doctoral scholars.'
  }
];

export const DOCTORAL_SCHOLARS_REGISTRY: DoctoralScholar[] = [
  {
    id: 'doc-01',
    scholarName: 'Prof. Dr. Majeedullah Qadri',
    degree: 'Ph.D.',
    topic: 'Kanzul Iman aur Maroof Urdu Quraani Tarajim ka Taqabuli Jaiza',
    university: 'University of Karachi',
    country: 'Pakistan',
    year: 1993,
    supervisor: 'Prof. Dr. Muhammad Masud Ahmed',
    award: 'Gold Medal'
  },
  {
    id: 'doc-02',
    scholarName: 'Dr. Hasan Raza Khan Azami',
    degree: 'Ph.D.',
    topic: 'Faqeeh-e-Islam: A Study of Jurisprudential Methodology',
    university: 'Patna University',
    country: 'India',
    year: 1979,
    award: 'Gold Medal'
  },
  {
    id: 'doc-03',
    scholarName: 'Dr. Usha Sanyal',
    degree: 'Ph.D.',
    topic: 'In the Path of the Prophet: Ahmad Raza Khan Barelwi and the Ahl-e Sunnat wa Jama\'at Movement',
    university: 'Columbia University',
    country: 'United States',
    year: 1990,
    award: 'Gold Medal'
  },
  {
    id: 'doc-04',
    scholarName: 'Dr. Hafiz Abdul Bari Siddiqui',
    degree: 'Ph.D.',
    topic: 'Raza Barelvi ke Afkar o Karname (Sindhi Language Treatise)',
    university: 'University of Sindh',
    country: 'Pakistan',
    year: 1993,
    award: 'Gold Medal'
  },
  {
    id: 'doc-05',
    scholarName: 'Dr. Hazem Muhammad Ahmad Al-Mahfouz',
    degree: 'Ph.D.',
    topic: 'Al-Imam Ahmad Raza wa Athruhu fi al-Fiqh al-Hanafi',
    university: 'Al-Azhar University, Cairo',
    country: 'Egypt',
    year: 1997,
    award: 'Gold Medal'
  },
  {
    id: 'doc-06',
    scholarName: 'Dr. Muhammad Mehrban Barvi',
    degree: 'Ph.D.',
    topic: 'Tahqeeq wa Ta\'reeb Juz\' min al-Fatawa al-Ridwiyya',
    university: 'Omdurman Islamic University',
    country: 'Sudan',
    year: 2012,
    award: 'Gold Medal'
  },
  {
    id: 'doc-07',
    scholarName: 'Dr. Muhammad Hasan Imam',
    degree: 'Ph.D.',
    topic: 'Tehreek-e-Pakistan mein Khulafa-e-Imam Ahmad Raza ka Kirdar (1920–1947)',
    university: 'Federal Urdu University of Arts, Science & Technology',
    country: 'Pakistan',
    year: 2006,
    supervisor: 'Prof. Dr. Jalaluddin Ahmad Noori',
    award: 'Gold Medal'
  },
  {
    id: 'doc-08',
    scholarName: 'Dr. Tayyab Ali Raza Ansari',
    degree: 'Ph.D.',
    topic: 'Imam Ahmad Raza: Hayat o Karname',
    university: 'Banaras Hindu University',
    country: 'India',
    year: 1993,
    award: 'Gold Medal'
  }
];

export const OFFICE_LOCATIONS = [
  {
    city: 'Karachi (Central Secretariat & Head Office)',
    address: '25 Japan Mansion, Regal (Raza) Chowk, Preedy Street, Saddar, Karachi-74400, Sindh, Pakistan',
    phone: '+92-21-32725150',
    fax: '+92-21-32732369',
    email: 'imamahmadraza@gmail.com',
    hours: 'Monday to Saturday: 9:00 AM – 6:00 PM (PST)',
    notes: 'Houses the Raza Central Library, Archive of Original Manuscripts, and Secretariat.'
  },
  {
    city: 'Islamabad (Federal Liaison Bureau)',
    address: 'Sector F-8 / Liaison Directorate for Higher Education & IIUI, Islamabad, Pakistan',
    phone: '+92-51-2281450',
    email: 'islamabad@itiar.com',
    hours: 'Monday to Friday: 10:00 AM – 5:00 PM (PST)',
    notes: 'Coordinates federal academic programs, university curricula, and national symposium delegations.'
  }
];
