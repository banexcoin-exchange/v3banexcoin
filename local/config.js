window.APEXWebConfig = {
  global: {
    template: 'MILAN',
    siteName: 'Banexcoin',
    gateway: 'wss://api.banexcoin.com/WSGateway/',
    theme: 'dark',
    locale: 'en-US',
    dateFormat: 'D/M/YYYY',
    timeFormat: 'HH:mm:ss',
    dateTimeFormat: 'D-M-YYYY h:mma',
    phoneDefaultCountry: 'PE',
    siteLogo: 'logo-banexcoin-white-middleorange.svg',
    authTimeout: 0,
    allowTransfer: true,
  },
  ApiKeys: {
    documentationLink: 'https://alphapoint.github.io/slate/',
  },
  BalancesLayout: {
    usePagination: true,
    maxLines: 100,
  },
  TickerData: {
    show24HrVolume: false,
    show24HrPxChange: false,
  },
  Deposit: {
    hideDepositBankInfo: true,
    generateNewKey: true,
    bankName: 'My Bank',
    bankWireNumber: '1234567890',
    bankAccountNumber: '123456',
    MinimumVerificationLevel: 1,
    showDepositIdModal: false,
    PEN: {
      instructions: {
        text: ['We accept deposits from the following banks:'],
        link: {
          url: '/deposit_pen.html',
          text: 'How to deposit Peruvian Sol to my account via bank transfer',
        },
      },
      bankName: 'Banco General',
      bankWireNumber: '1234567890',
      bankAccountNumber: '123456',
    },
  },
  InstrumentSelector: {
    instruments: [],
  },
  Withdraw: {
    MinimumVerificationLevel: 1,
    WithdrawDetails: [
      {
        text:
          'Note - The withdrawal and transfer of these funds might take up to 7 business days, and it’s subject to operator review.',
        useLink: false,
        linkAddress: '',
      },
    ],
  },
  KYC: {
    UpfrontKYC: false,
    MinimumVerificationLevel: 1,
    type: 'IM3.2',
    // type: 'Manual',
    requestIdentifier: '',
    levels: [
      {
        level: 0,
        label: 'Registred on Banexcoin',
        description: {
          benefits: [],
          requirements: 'You\'re already registered on Banexcoin'
        },
        verifiedMessage: 'Verified as New User',
        underReviewMessage: 'Application under review. Check back later.',
        steps: [
          {
            nextPageLabel: 'Continue to ID verification',
            sections: [
              {
                label: 'Personal Information',
                form: [
                  {
                    label: 'First Name',
                    name: 'firstName',
                    validators: ['required']
                  },
                  {
                    label: 'Middle Name',
                    name: 'middleName',
                    validators: []
                  },
                  {
                    label: 'Last Name',
                    name: 'lastName',
                    validators: ['required']
                  },
                  {
                    label: 'Last Name 2',
                    name: 'lastName2',
                    type: 'text',
                    validators: ['required']
                  },
                  {
                    label: 'Date of Birth',
                    name: 'dob',
                    validators: ['required', 'isEighteenYearsAgo']
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    validators: ['required', 'email']
                  },
                  {
                    label: 'Nationality',
                    name: 'nationality',
                    type: 'country',
                    validators: ['required']
                  },
                  {
                    label: 'Phone',
                    name: 'phone',
                    validators: ['required']
                  },
                  {
                    label: 'Are you a Politically Exposed Person (PEP)?',
                    name: 'ispep',
                    type: 'select',
                    options: {
                      '': '-',
                      YES: 'Yes',
                      NO: 'NO'
                    }
                  },
                  {
                    label: 'Specify the name of the institution, public body or organization (If you\'are "PEP")',
                    name: 'organization_name',
                    type: 'text',
                    validators: []
                  },
                  {
                    label: 'His position at that institution (If you\'are "PEP")',
                    name: 'organization_position',
                    type: 'text',
                    validators: []
                  },
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Last step',
            sections: [
              {
                label: 'Document Proof',
                form: [
                  {
                    label: 'Type of ID you want to upload',
                    name: 'DocumentType',
                    validators: []
                  },
                  {
                    label: 'Document Country',
                    name: 'DocumentCountry',
                    validators: []
                  },
                  {
                    label: 'Document Number',
                    type: 'text',
                    name: 'DocumentNumber',
                    validators: ['required']
                  },
                ]
              },
              {
                label: 'ID Verification',
                form: [
                  {
                    label: 'Front of the document',
                    name: 'scandata',
                    type: 'image',
                    validators: ['required']
                  },
                  {
                    label: 'Back of the document',
                    name: 'backsideimagedata',
                    type: 'image',
                    validators: ['required']
                  },
                  {
                    placeholder: 'Upload selfie',
                    name: 'faceimages'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        level: 1,
        label: 'Initial',
        description: {
          benefits: ['For beginners starting at the universe of the Crypto'],
          requirements: '- Fullname\n - Date of Birth\n - Main Address (no PO Box)\n - Email\n  - Phone number\n - An ID issued by a Government\n - Specify if you are PEP'
        },
        verifiedMessage: 'Verified for Initial Level',
        underReviewMessage: 'Application under review. Check back later.',
        steps: [
          {
            nextPageLabel: 'Continue to ID verification',
            sections: [
              {
                label: 'Personal Information',
                form: [
                  {
                    label: 'First Name',
                    name: 'firstName',
                    validators: ['required']
                  },
                  {
                    label: 'Middle Name',
                    name: 'middleName',
                    validators: []
                  },
                  {
                    label: 'Last Name',
                    name: 'lastName',
                    validators: ['required']
                  },
                  {
                    label: 'Date of Birth',
                    name: 'dob',
                    validators: ['required', 'isEighteenYearsAgo']
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    validators: ['required', 'validEmail']
                  },
                  {
                    label: 'Phone',
                    name: 'phone',
                    validators: ['required']
                  },
                  {
                    label: 'Are you a Politically Exposed Person (PEP)?',
                    name: 'isspp',
                    type: 'select',
                    options: {
                      YES: 'Yes',
                      NO: 'NO'
                    }
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Last step',
            sections: [
              {
                label: 'Document Proof',
                form: [
                  {
                    label: 'Type of ID you want to upload',
                    name: 'DocumentType',
                    validators: []
                  },
                  {
                    label: 'Document Country',
                    name: 'DocumentCountry',
                    validators: []
                  },
                  {
                    label: 'Document Number',
                    name: 'DocumentNumber',
                    validators: []
                  },
                  {
                    label: 'Document State',
                    name: 'DocumentState',
                    type: 'select',
                    options: {
                      CURRENT: 'CURRENT',
                      EXPIRED: 'EXPIRED'
                    }
                  }
                ]
              },
              {
                label: 'ID Verification',
                form: [
                  {
                    label: '',
                    name: 'scandata',
                    validators: []
                  },
                  {
                    label: 'Image of the back of your Drivers License',
                    name: 'backsideimagedata',
                    type: 'country',
                    validators: []
                  },
                  {
                    placeholder: 'Upload selfie',
                    name: 'faceimages'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        level: 2,
        label: 'Intermediate',
        description: {
          benefits: ['For those who have a certain level of knowledge and handling Crypto'],
          requirements: '- Fullname\n - Date of Birth\n - Main Address (no PO Box)\n - Email\n - Phone number\n - An ID issued by a Government\n - Specify if you are PEP\n - Billing Address\n - Proof of Residence (no older than 3 months)\n - Identity Confirmation Photo\n - Occupation'
        },
        verifiedMessage: 'Verified for Level 0',
        underReviewMessage: 'Application under review. Check back later.',
        steps: [
          {
            nextPageLabel: 'Continue to ID verification',
            sections: [
              {
                label: 'Personal Information',
                form: [
                  {
                    label: 'First Name',
                    name: 'firstName',
                    validators: ['required']
                  },
                  {
                    label: 'Middle Name',
                    name: 'middleName',
                    validators: []
                  },
                  {
                    label: 'Last Name',
                    name: 'lastName',
                    validators: ['required']
                  },
                  {
                    label: 'Date of Birth',
                    name: 'dob',
                    validators: ['required', 'isEighteenYearsAgo']
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    validators: ['required', 'validEmail']
                  },
                  {
                    label: 'Phone',
                    name: 'phone',
                    validators: ['required']
                  },
                  {
                    label: 'Are you a Politically Exposed Person (PEP)?',
                    name: 'isspp',
                    type: 'select',
                    options: {
                      YES: 'Yes',
                      NO: 'NO'
                    }
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Last step',
            sections: [
              {
                label: 'Document Proof',
                form: [
                  {
                    label: 'Type of ID you want to upload',
                    name: 'DocumentType',
                    validators: []
                  },
                  {
                    label: 'Document Country',
                    name: 'DocumentCountry',
                    validators: []
                  },
                  {
                    label: 'Document Number',
                    name: 'DocumentNumber',
                    validators: []
                  },
                  {
                    label: 'Document State',
                    name: 'DocumentState',
                    validators: []
                  }
                ]
              },
              {
                label: 'ID Verification',
                form: [
                  {
                    label: '',
                    name: 'scandata',
                    validators: []
                  },
                  {
                    label: 'Image of the back of your Drivers License',
                    name: 'backsideimagedata',
                    type: 'country',
                    validators: []
                  },
                  {
                    placeholder: 'Upload selfie',
                    name: 'faceimages'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        level: 3,
        label: 'Master',
        description: {
          benefits: ['For Experts who have extensive knowledge in Crypto'],
          requirements:
            '- Fullname\n - Date of Birth\n - Main Address (no PO Box)\n - Email\n - Phone number\n - An ID issued by a Government\n - Specify if you are PEP\n - Billing Address\n - Proof of Residence (no older than 3 months)\n - Identity Confirmation Photo\n - Occupation\n - AML Verification\n - Financial Statements\n\n *Fill the form provided and attach the required documentation*'
        },
        verifiedMessage: 'Verified for Level 2',
        underReviewMessage: 'Application under review. Check back later.',
        steps: [
          {
            nextPageLabel: 'Continue to ID verification',
            sections: [
              {
                label: 'Personal Information',
                form: [
                  {
                    label: 'First Name',
                    name: 'firstName',
                    validators: ['required']
                  },
                  {
                    label: 'Middle Name',
                    name: 'middleName',
                    validators: []
                  },
                  {
                    label: 'Last Name',
                    name: 'lastName',
                    validators: ['required']
                  },
                  {
                    label: 'Date of Birth',
                    name: 'dob',
                    validators: ['required', 'isEighteenYearsAgo']
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    validators: ['required', 'validEmail']
                  },
                  {
                    label: 'Phone',
                    name: 'phone',
                    validators: ['required']
                  },
                  {
                    label: 'Are you a Politically Exposed Person (PEP)?',
                    name: 'isspp',
                    type: 'select',
                    options: {
                      YES: 'Yes',
                      NO: 'NO'
                    }
                  },
                  {
                    label: 'Ocupation',
                    name: 'ocupation',
                    validators: []
                  }
                ]
              },
              {
                label: 'Billing Information',
                form: [
                  {
                    label: 'Billing Country',
                    name: 'billingCountry',
                    validators: []
                  },
                  {
                    label: 'Billing Street Address',
                    name: 'billingStreetAddress',
                    info: '(100 Washington Way)',
                    validators: []
                  },
                  {
                    label: 'Billing State',
                    name: 'state',
                    info: 'Abbreviation only',
                    validators: []
                  },
                  {
                    label: 'Billing City',
                    name: 'billingCity',
                    validators: []
                  },
                  {
                    label: 'Billing Zip',
                    name: 'billingZip',
                    type: 'text',
                    validators: []
                  },
                  {
                    label: 'Financial Statements',
                    name: 'financialstatements',
                    type: 'document',
                    validators: []
                  }
                ]
              },
              {
                label: 'Billing Information',
                form: [
                  {
                    label: 'Proof of residence',
                    name: 'proofResidence',
                    name: 'image',
                    validators: []
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Last step',
            sections: [
              {
                label: 'Document Proof',
                form: [
                  {
                    label: 'Type of ID you want to upload',
                    name: 'DocumentType',
                    validators: []
                  },
                  {
                    label: 'Document Country',
                    name: 'DocumentCountry',
                    validators: []
                  },
                  {
                    label: 'Document State',
                    name: 'DocumentState',
                    validators: []
                  }
                ]
              },
              {
                label: 'ID Verification',
                form: [
                  {
                    label: '',
                    name: 'scandata',
                    validators: []
                  },
                  {
                    label: 'Image of the back of your Drivers License',
                    name: 'backsideimagedata',
                    type: 'country',
                    validators: []
                  },
                  {
                    placeholder: 'Upload selfie',
                    name: 'faceimages'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        level: 4,
        label: 'Level 4',
        description: {
          benefits: ['Beneficio 2.1', 'Beneficio 2.2', 'Beneficio 2.3'],
          requirements:
            'Nombre Completo.\n Fecha de Nacimiento.\n Dirección Principal (no PO Box).\n Dirección de correo electrónico.\n Teléfono.\n Identificación emitida por un Gobierno.\n Especificar si es PEP.'
        },
        verifiedMessage: 'Verified for Level 1',
        underReviewMessage: 'Application under review. Check back later.',
        steps: [
          {
            nextPageLabel: 'Continue to ID verification',
            sections: [
              {
                label: 'Personal Information',
                form: [
                  {
                    label: 'First Name',
                    name: 'firstName',
                    validators: ['required']
                  },
                  {
                    label: 'Middle Name',
                    name: 'middleName',
                    validators: []
                  },
                  {
                    label: 'Last Name',
                    name: 'lastName',
                    validators: ['required']
                  },
                  {
                    label: 'Date of Birth',
                    name: 'dob',
                    validators: ['required', 'isEighteenYearsAgo']
                  },
                  {
                    label: 'Email',
                    name: 'email',
                    type: 'email',
                    validators: ['required', 'validEmail']
                  },
                  {
                    label: 'Phone',
                    name: 'phone',
                    validators: ['required']
                  },
                  {
                    label: 'Is a PEP? (People Exposed Politically)',
                    name: 'isspp',
                    type: 'select',
                    options: {
                      YES: 'Yes',
                      NO: 'NO'
                    }
                  },
                  {
                    label: 'Ocupation',
                    name: 'ocupation',
                    validators: []
                  }
                ]
              },
              {
                label: 'Billing Information',
                form: [
                  {
                    label: 'Billing Country',
                    name: 'billingCountry',
                    validators: []
                  },
                  {
                    label: 'Billing Street Address',
                    name: 'billingStreetAddress',
                    info: '(100 Washington Way)',
                    validators: []
                  },
                  {
                    label: 'Billing State',
                    name: 'state',
                    info: 'Abbreviation only',
                    validators: []
                  },
                  {
                    label: 'Billing City',
                    name: 'billingCity',
                    validators: []
                  },
                  {
                    label: 'Billing Zip',
                    name: 'billingZip',
                    type: 'text',
                    validators: []
                  }
                ]
              },
              {
                label: 'Billing Information',
                form: [
                  {
                    label: 'Proof of residence',
                    name: 'proofResidence',
                    name: 'image',
                    validators: []
                  }
                ]
              }
            ]
          },
          {
            prevPageLabel: 'Go Back',
            nextPageLabel: 'Last step',
            sections: [
              {
                label: 'Document Proof',
                form: [
                  {
                    label: 'Type of ID you want to upload',
                    name: 'DocumentType',
                    validators: []
                  },
                  {
                    label: 'Document Country',
                    name: 'DocumentCountry',
                    validators: []
                  },
                  {
                    label: 'Document State',
                    name: 'DocumentState',
                    validators: []
                  }
                ]
              },
              {
                label: 'ID Verification',
                form: [
                  {
                    label: '',
                    name: 'scandata',
                    validators: []
                  },
                  {
                    label: 'Image of the back of your Drivers License',
                    name: 'backsideimagedata',
                    type: 'country',
                    validators: []
                  },
                  {
                    placeholder: 'Upload selfie',
                    name: 'faceimages'
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
    highlightStyle: 'star'
  },
  LandingPage: {
    forceLogIn: false,
  },
  Pagination: {
    maxPages: 5,
  },
  ProblemLoggingIn: {
    showOptions: true,
  },
  RecentActivity: {
    showTransfers: true,
  },
  RetailBuySell: {
    roundBuyLimitPrices: false,
    dealPrices: {
      BTCPEN: [300, 800, 1500, 3000, 15000],
      LTCPEN: [300, 800, 1500, 3000, 15000],
      // ** DASHPEN: [300, 800, 1500, 3000, 15000],
      ETHPEN: [300, 800, 1500, 3000, 15000],
      // USDPEN: [30, 150, 350, 1000, 3000],
      BTCUSD: [100, 250, 500, 1000, 5000],
      ETHUSD: [100, 250, 500, 1000, 5000],
      LTCUSD: [100, 250, 500, 1000, 5000],
      // BCHUSD: [100, 250, 500, 1000, 5000],
      LTCBTC: [0.1, 0.5, 1, 2, 5],
    },
  },
  OrderCalcBuffer: {
    priceBuffer: 0,
    quantityBuffer: 0,
  },
  Settings: {
    profile: true,
    apiKeys: false,
    tradeReports: false,
    userContacts: true,
    affiliate: false,
    loyaltyToken: false,
    kyc: true,
    demoMode: false,
  },
  SignupForm: {
    useEmailAsUsername: false,
    additionalFields: 
    [{
      "label": "Set Language",
      "name": "language",
      "type": "select",
      "options": {
        "ES": "Español",
        "EN": "English"
      },
      "validators": ["required"]
    }],
    privacyPolicyLink: '/politica-privacidad.html',
    termsAndServicesLink: '/terminos-condiciones.html',
    active: true,
  },
  TradingLayout: {
    chart: 'TradingView',
    usePagination: true,
    maxLines: 6,
    showDepthChart: true,
  },
  TradingView: {
    custom_css_url: 'public/vendor/tradingview/charting_library-dark-theme.css',
    locale: "es",
  },
  OrderHistoryData: {
    usePagination: true,
  },
  DepthChart: {
    depthchartzoom: 5,
    depthChartHeight: 150,
    depthChartTextColor: 'rgb(200,200,200)',
    depthChartTextFont: '12px',
    depthChartTextBgColor: 'rgb(26, 32, 41)',
    depthChartXAxisTextPadding: 60,
    depthChartYAxisTextPadding: 20,
    depthChartBottomPadding: 20,
    depthChartXAxisStepCnt: 9,
  },
  TradingView: {
    timezone: 'America/New_York',
    locale: 'en',
    disabled_features: [
      'header_screenshot',
      'header_settings',
      'header_undo_redo',
      'header_chart_type',
      'control_bar',
      'context_menus',
      'left_toolbar',
      'header_symbol_search',
      'header_compare',
      'use_localstorage_for_settings',
      'save_chart_properties_to_local_storage',
      'show_chart_property_page',
      'header_resolutions',
      'go_to_date',
    ],
  },
  Language: {
    languageNames: {
      af: 'Afrikaans',
      sq: 'Albanian',
      ar: 'Arabic',
      hy: 'Armenian',
      az: 'Azeerbaijani',
      eu: 'Basque',
      be: 'Belarusian',
      bn: 'Bengali',
      bs: 'Bosnian',
      bg: 'Bulgarian',
      ca: 'Catalan',
      zh: 'Chinese',
      co: 'Corsican',
      hr: 'Croatian',
      cs: 'Czech',
      da: 'Danish',
      nl: 'Dutch',
      en: 'English',
      et: 'Estonian',
      fi: 'Finnish',
      fr: 'French',
      fy: 'Frisian',
      ka: 'Georgian',
      de: 'German',
      el: 'Greek',
      hi: 'Hindi',
      hu: 'Hungarian',
      is: 'Icelandic',
      id: 'Indonesian',
      it: 'Italian',
      ja: 'Japanese',
      jw: 'Javanese',
      ko: 'Korean',
      ku: 'Kurdish',
      ky: 'Kyrgyz',
      lo: 'Lao',
      lv: 'Latvian',
      lt: 'Lithuanian',
      lb: 'Luxembourgish',
      mk: 'Macedonian',
      mg: 'Malagasy',
      ms: 'Malay',
      ml: 'Malayalam',
      mt: 'Maltese',
      mi: 'Maori',
      mn: 'Mongolian',
      my: 'Myanmar',
      ne: 'Nepali',
      no: 'Norwegian',
      ps: 'Pashto',
      fa: 'Persian',
      pl: 'Polish',
      pt: 'Portuguese',
      pa: 'Punjabi',
      ro: 'Romanian',
      ru: 'Russian',
      sm: 'Samoan',
      sr: 'Serbian',
      sk: 'Slovak',
      sl: 'Slovenian',
      so: 'Somali',
      es: 'Spanish',
      su: 'Sundanese',
      sw: 'Swahili',
      sv: 'Swedish',
      tl: 'Tagalog',
      th: 'Thai',
      tr: 'Turkish',
      uk: 'Ukrainian',
      uz: 'Uzbek',
      vi: 'Vietnamese',
    },
  },
  Footer: {
    openInNewWindowGlobal: true,
    links: [
      [
        {
          text: 'About Us',
          link: '',
        },
        /*{
          text: 'Features',
          link: '',
        },*/
        /*{
          text: 'Blog',
          link: '',
        },*/
        {
          text: 'Fees',
          link: '/tarifas.html',
        },
        {
          text: 'info@banexcoin.com',
          link: 'mailto:info@banexcoin.com',
          openInNewWindow: true,
        },
      ],
      [
        {
          text: 'Support',
          link: '#',
        },
        {
          text: 'API',
          link: '#',
        },
        {
          text: 'Security',
          link: '/seguridad.html',
        },
        {
          text: 'Support Center',
          link: 'https://soporte.banexcoin.com',
        },
      ],
      [
        {
          text: 'Policies',
          link: '#',
        },
        {
          text: 'KYC Policies',
          link: '/politicas-kyc.html',
        },
        {
          text: 'AML Policies',
          link: '',
        },
        {
          text: 'Cookies Policies',
          link: '/politica-cookies.html',
        },
        {
          text: 'Terms & Conditions',
          link: '/terminos-condiciones.html',
        },
        {
          text: 'Privacy Policy',
          link: '',
        },
      ],
    ],
  },
  Countries: {
    AF: 'Afghanistan',
    AX: 'Åland Islands',
    AL: 'Albania',
    DZ: 'Algeria',
    AS: 'American Samoa',
    AD: 'Andorra',
    AO: 'Angola',
    AI: 'Anguilla',
    AQ: 'Antarctica',
    AG: 'Antigua and Barbuda',
    AR: 'Argentina',
    AM: 'Armenia',
    AW: 'Aruba',
    AU: 'Australia',
    AT: 'Austria',
    AZ: 'Azerbaijan',
    BS: 'Bahamas',
    BH: 'Bahrain',
    BD: 'Bangladesh',
    BB: 'Barbados',
    BY: 'Belarus',
    BE: 'Belgium',
    BZ: 'Belize',
    BJ: 'Benin',
    BM: 'Bermuda',
    BT: 'Bhutan',
    BO: 'Bolivia',
    BA: 'Bosnia and Herzegovina',
    BW: 'Botswana',
    BV: 'Bouvet Island',
    BR: 'Brazil',
    IO: 'British Indian Ocean Territory',
    BN: 'Brunei Darussalam',
    BG: 'Bulgaria',
    BF: 'Burkina Faso',
    BI: 'Burundi',
    KH: 'Cambodia',
    CM: 'Cameroon',
    CA: 'Canada',
    CV: 'Cape Verde',
    KY: 'Cayman Islands',
    CF: 'Central African Republic',
    TD: 'Chad',
    CL: 'Chile',
    CN: 'China',
    CX: 'Christmas Island',
    CC: 'Cocos (Keeling) Islands',
    CO: 'Colombia',
    KM: 'Comoros',
    CG: 'Congo',
    CD: 'Congo, The Democratic Republic of the',
    CK: 'Cook Islands',
    CR: 'Costa Rica',
    CI: "Cote D'Ivoire",
    HR: 'Croatia',
    CU: 'Cuba',
    CY: 'Cyprus',
    CZ: 'Czech Republic',
    DK: 'Denmark',
    DJ: 'Djibouti',
    DM: 'Dominica',
    DO: 'Dominican Republic',
    EC: 'Ecuador',
    EG: 'Egypt',
    SV: 'El Salvador',
    GQ: 'Equatorial Guinea',
    ER: 'Eritrea',
    EE: 'Estonia',
    ET: 'Ethiopia',
    FK: 'Falkland Islands (Malvinas)',
    FO: 'Faroe Islands',
    FJ: 'Fiji',
    FI: 'Finland',
    FR: 'France',
    GF: 'French Guiana',
    PF: 'French Polynesia',
    TF: 'French Southern Territories',
    GA: 'Gabon',
    GM: 'Gambia',
    GE: 'Georgia',
    DE: 'Germany',
    GH: 'Ghana',
    GI: 'Gibraltar',
    GR: 'Greece',
    GL: 'Greenland',
    GD: 'Grenada',
    GP: 'Guadeloupe',
    GU: 'Guam',
    GT: 'Guatemala',
    GG: 'Guernsey',
    GN: 'Guinea',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HT: 'Haiti',
    HM: 'Heard Island and Mcdonald Islands',
    VA: 'Holy See (Vatican City State)',
    HN: 'Honduras',
    HK: 'Hong Kong',
    HU: 'Hungary',
    IS: 'Iceland',
    IN: 'India',
    ID: 'Indonesia',
    IR: 'Iran, Islamic Republic Of',
    IQ: 'Iraq',
    IE: 'Ireland',
    IM: 'Isle of Man',
    IL: 'Israel',
    IT: 'Italy',
    JM: 'Jamaica',
    JP: 'Japan',
    JE: 'Jersey',
    JO: 'Jordan',
    KZ: 'Kazakhstan',
    KE: 'Kenya',
    KI: 'Kiribati',
    KP: "Korea, Democratic People'S Republic of",
    KR: 'Korea, Republic of',
    KW: 'Kuwait',
    KG: 'Kyrgyzstan',
    LA: "Lao People'S Democratic Republic",
    LV: 'Latvia',
    LB: 'Lebanon',
    LS: 'Lesotho',
    LR: 'Liberia',
    LY: 'Libyan Arab Jamahiriya',
    LI: 'Liechtenstein',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    MO: 'Macao',
    MK: 'Macedonia, The Former Yugoslav Republic of',
    MG: 'Madagascar',
    MW: 'Malawi',
    MY: 'Malaysia',
    MV: 'Maldives',
    ML: 'Mali',
    MT: 'Malta',
    MH: 'Marshall Islands',
    MQ: 'Martinique',
    MR: 'Mauritania',
    MU: 'Mauritius',
    YT: 'Mayotte',
    MX: 'Mexico',
    FM: 'Micronesia, Federated States of',
    MD: 'Moldova, Republic of',
    MC: 'Monaco',
    MN: 'Mongolia',
    MS: 'Montserrat',
    MA: 'Morocco',
    MZ: 'Mozambique',
    MM: 'Myanmar',
    NA: 'Namibia',
    NR: 'Nauru',
    NP: 'Nepal',
    NL: 'Netherlands',
    AN: 'Netherlands Antilles',
    NC: 'New Caledonia',
    NZ: 'New Zealand',
    NI: 'Nicaragua',
    NE: 'Niger',
    NG: 'Nigeria',
    NU: 'Niue',
    NF: 'Norfolk Island',
    MP: 'Northern Mariana Islands',
    NO: 'Norway',
    OM: 'Oman',
    PK: 'Pakistan',
    PW: 'Palau',
    PS: 'Palestinian Territory, Occupied',
    PA: 'Panama',
    PG: 'Papua New Guinea',
    PY: 'Paraguay',
    PE: 'Peru',
    PH: 'Philippines',
    PN: 'Pitcairn',
    PL: 'Poland',
    PT: 'Portugal',
    PR: 'Puerto Rico',
    QA: 'Qatar',
    RE: 'Reunion',
    RO: 'Romania',
    RU: 'Russian Federation',
    RW: 'Rwanda',
    SH: 'Saint Helena',
    KN: 'Saint Kitts and Nevis',
    LC: 'Saint Lucia',
    PM: 'Saint Pierre and Miquelon',
    VC: 'Saint Vincent and the Grenadines',
    WS: 'Samoa',
    SM: 'San Marino',
    ST: 'Sao Tome and Principe',
    SA: 'Saudi Arabia',
    SN: 'Senegal',
    RS: 'Serbia',
    ME: 'Montenegro',
    SC: 'Seychelles',
    SL: 'Sierra Leone',
    SG: 'Singapore',
    SK: 'Slovakia',
    SI: 'Slovenia',
    SB: 'Solomon Islands',
    SO: 'Somalia',
    ZA: 'South Africa',
    GS: 'South Georgia and the South Sandwich Islands',
    ES: 'Spain',
    LK: 'Sri Lanka',
    SD: 'Sudan',
    SR: 'Surname',
    SJ: 'Svalbard and Jan Mayen',
    SZ: 'Swaziland',
    SE: 'Sweden',
    CH: 'Switzerland',
    SY: 'Syrian Arab Republic',
    TW: 'Taiwan, Province of China',
    TJ: 'Tajikistan',
    TZ: 'Tanzania, United Republic of',
    TH: 'Thailand',
    TL: 'Timor-Leste',
    TG: 'Togo',
    TK: 'Tokelau',
    TO: 'Tonga',
    TT: 'Trinidad and Tobago',
    TN: 'Tunisia',
    TR: 'Turkey',
    TM: 'Turkmenistan',
    TC: 'Turks and Caicos Islands',
    TV: 'Tuvalu',
    UG: 'Uganda',
    UA: 'Ukraine',
    AE: 'United Arab Emirates',
    GB: 'United Kingdom',
    US: 'United States',
    UM: 'United States Minor Outlying Islands',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VU: 'Vanuatu',
    VE: 'Venezuela',
    VN: 'Vietnam',
    VG: 'Virgin Islands, British',
    VI: 'Virgin Islands, U.S.',
    WF: 'Wallis and Futuna',
    EH: 'Western Sahara',
    YE: 'Yemen',
    ZM: 'Zambia',
    'ZW ': 'Zimbabwe',
  },
  BaseCurrencies: [
    'BTC',
    'ETH',
    'LTC',
    'USD',
    'XRP',
    'XMR',
    'DASH',
    'EUR',
    'EOS',
    'ETC',
    'DASC',
  ],
};
