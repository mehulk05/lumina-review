import { StaticReview } from '../types';

/**
 * Every review here is written and checked by a human before publishing.
 * Rules for adding one:
 *  - Only products we have actually researched against primary listings or hands-on use.
 *  - `sources` must be real, working links a reader can verify. Never ship an empty array.
 *  - Prices are a snapshot. Always state the date they were checked in the body.
 */
export const REVIEWS: StaticReview[] = [
  {
    slug: 'tcl-65-inch-mini-led-q6cs-vs-t8d-vs-q6c',
    productName: 'TCL 65Q6C',
    category: 'Televisions',
    title: 'TCL 65-inch Mini-LED, three ways: Q6CS vs T8D vs Q6C',
    metaDescription:
      'We compared the TCL 65Q6CS, 65T8D and 65Q6C on panel type, dimming zones, refresh rate and ports. One of the three is a trap at its price.',
    publishedAt: '2026-10-08',
    updatedAt: '2026-10-08',
    author: 'LuminaReviews editorial',
    priceAtReview: '₹63,000 (Q6C, after festive discounts, 8 Oct 2026)',
    imageUrl:
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=1200',
    imageCredit: 'Unsplash',
    amazonUrl: 'https://www.amazon.in/TCL-inches-QD-Mini-Google-65Q6C/dp/B0F3HWJXZ5',
    bottomLine:
      'Buy the 65Q6C. It costs about ₹6,500 more than the Q6CS and roughly ₹2,000 more than the T8D, and it is the only one of the three with a 144Hz panel, 512+ dimming zones, HDMI 2.1 and Dolby Vision together. The T8D is the one to avoid: it costs nearly as much as the Q6C but steps down to a QLED panel and drops Dolby Vision entirely.',
    sections: [
      {
        heading: 'Why these three get confused',
        paragraphs: [
          'TCL sells three 65-inch sets in India that land within about ₹7,000 of each other, and the model codes do almost nothing to tell them apart. Q6CS, T8D and Q6C read like trim levels of one television. They are not. The gap between the cheapest and the most expensive covers a change of panel technology, a change of refresh rate, and a change of HDR format support.',
          'We pulled the specifications from the live retail listings on 8 October 2026 rather than from TCL marketing material, because the marketing copy blurs exactly the distinctions that matter here. The single most useful thing we found is that one of the three is labelled QLED in the retailer\'s own specification field while its product title still says "QD-Mini LED Dimming".'
        ]
      },
      {
        heading: 'The Q6CS at roughly ₹56,500',
        paragraphs: [
          'This is a genuine QD-Mini LED panel with 312+ dimming zones, Dolby Vision, Dolby Atmos and a 40W Onkyo 2.1 system. For streaming on a sofa in a normally lit living room, it will look much like its more expensive siblings.',
          'Its limits are not really about picture quality. The panel runs at 60Hz, so there is no VRR and no benefit from a PS5 or a gaming PC beyond 60fps. It ships with 2GB of RAM and 16GB of storage, and it has three HDMI ports rather than four. The RAM and storage are the part we would think hardest about: Google TV gets noticeably slower as apps update over a few years, and 16GB fills up. Neither is upgradeable later.'
        ]
      },
      {
        heading: 'The T8D at roughly ₹61,000 — the one to skip',
        paragraphs: [
          'On paper the T8D looks like a straight upgrade: 144Hz with a DLG 288Hz mode, AiPQ Pro processor, 3GB/32GB, four HDMI ports, 42W Onkyo audio. The product title says "QD-Mini LED Dimming".',
          'But the retailer\'s own Display Technology field says QLED, not QD-Mini LED, and the feature list specifies HDR10+ with no mention of Dolby Vision. So at ₹61,000 you gain the fast panel and the extra RAM, and you lose both the mini-LED backlight and the HDR format that most Indian streaming catalogues actually use. For around ₹2,000 more, the Q6C gives you the fast panel, the extra RAM, the mini-LED backlight and Dolby Vision. We could not find a published dimming-zone count for the Indian T8D from any source, which is itself a reason for caution.',
          'If you find the T8D at a genuinely large discount — say ₹8,000 or more below the Q6C — the calculation changes and it becomes a reasonable fast-panel TV. At a ₹2,000 gap it does not make sense.'
        ]
      },
      {
        heading: 'The Q6C at roughly ₹63,000',
        paragraphs: [
          'The Q6C is the only one of the three with everything in one box: QD-Mini LED with 512+ dimming zones, a 144Hz panel, HDMI 2.1, Dolby Vision IQ, AMD FreeSync Premium, Game Master, AirPlay 2, 3GB/32GB and a 46W Onkyo 2.1 system.',
          'Spread over a typical seven-year ownership, the ₹6,500 premium over the Q6CS works out to roughly ₹900 a year. For that you get a panel you can actually feed a console into, 2.4 times the RAM, and an extra HDMI port. Of all the upgrades available in this price band, it is the one we would take first.'
        ]
      },
      {
        heading: 'A caution about the prices',
        paragraphs: [
          'The figures above are festive-season street prices including card and coupon offers, checked on 8 October 2026. The list prices are considerably higher: the Q6C showed ₹76,990 with a ₹2,000 coupon and up to ₹5,000 off on SBI cards, which lands near ₹70,000 without an exchange.',
          'That matters to the recommendation. At ₹63,000 vs ₹56,500 the Q6C is clearly worth it. If the real gap on the day you buy turns out to be ₹70,000 vs ₹56,500, the Q6CS becomes a much more defensible choice — and putting the difference towards a soundbar would do more for your actual viewing experience than 200 extra dimming zones will.'
        ]
      },
      {
        heading: 'What none of these three will do',
        paragraphs: [
          'All three sit in TCL\'s value tier. Expect visible blooming around bright objects on dark backgrounds, and expect colour and contrast to fall away when you sit off to the side. None of them is a picture-quality purchase in the sense that an OLED is.',
          'What they are is a lot of screen for the money. If your priority is 65 inches in a living room at under ₹65,000, that is a perfectly sensible thing to optimise for — just buy with the compromises in view rather than expecting them not to be there.'
        ]
      }
    ],
    specs: [
      { label: 'Panel (Q6C)', value: 'QD-Mini LED, 512+ dimming zones' },
      { label: 'Panel (Q6CS)', value: 'QD-Mini LED, 312+ dimming zones' },
      { label: 'Panel (T8D)', value: 'QLED (listed), zone count not published' },
      { label: 'Refresh rate', value: 'Q6C 144Hz · T8D 144Hz (DLG 288Hz) · Q6CS 60Hz' },
      { label: 'HDR', value: 'Q6C Dolby Vision IQ · Q6CS Dolby Vision · T8D HDR10+ only' },
      { label: 'Memory', value: 'Q6C & T8D 3GB/32GB · Q6CS 2GB/16GB' },
      { label: 'HDMI', value: 'Q6C 4 (2.1) · T8D 4 · Q6CS 3' },
      { label: 'Audio', value: 'Q6C 46W · T8D 42W · Q6CS 40W, all Onkyo 2.1' },
      { label: 'Warranty', value: '2 years, all three' }
    ],
    pros: [
      '512+ dimming zones and real QD-Mini LED backlight on the Q6C',
      '144Hz panel with HDMI 2.1 and FreeSync Premium — usable with a PS5 or gaming PC',
      'Dolby Vision IQ, which most Indian streaming catalogues use',
      '3GB/32GB keeps Google TV usable for longer than the Q6CS will manage',
      'Largest screen-per-rupee in this price band'
    ],
    cons: [
      'Value-tier panel: visible blooming on dark scenes and weak off-angle viewing',
      'Built-in audio is adequate at best — budget for a soundbar',
      'Festive pricing is volatile; the ₹63,000 figure may not hold',
      'The near-identical model names make it very easy to buy the wrong one'
    ],
    whoIsItFor:
      'Someone who wants 65 inches under ₹65,000, watches Dolby Vision content, and may connect a console. The Q6C is the right pick.',
    whoIsItNotFor:
      'Anyone who cares most about black levels and off-angle viewing, or who only streams at 60Hz and would rather spend the difference on sound. Buy an OLED in the first case, the Q6CS plus a soundbar in the second.',
    sources: [
      {
        title: 'Amazon.in — TCL 65Q6C listing',
        uri: 'https://www.amazon.in/TCL-inches-QD-Mini-Google-65Q6C/dp/B0F3HWJXZ5'
      },
      {
        title: 'Amazon.in — TCL 65T8D listing',
        uri: 'https://www.amazon.in/gp/product/B0GVP3LKV9'
      },
      {
        title: 'Flipkart — TCL 65Q6CS listing',
        uri: 'https://www.flipkart.com/tcl-65q6cs-164-cm-65-inch-ultra-hd-4k-mini-led-smart-google-tv-high-hdr-brightness-312-dimming-zones-aipq-processor-dolby-vision-atmos-40-w-onkyo-2-1-hi-fi-system-imax-enhanced/p/itm120ce0eaa01b6'
      },
      {
        title: '91mobiles — TCL 65Q6CS specifications',
        uri: 'https://www.91mobiles.com/tcl-65q6cs-65-inches-inch-4k-qd-mini-led-tv-price-in-india-169473'
      },
      {
        title: 'FoneArena — TCL Q6C India launch',
        uri: 'https://www.fonearena.com/blog/455041/tcl-q6c-price-india-features.html'
      }
    ]
  },

  {
    slug: 'sony-wh-1000xm5',
    productName: 'Sony WH-1000XM5',
    category: 'Headphones',
    title: 'Sony WH-1000XM5 in 2026: still the sensible buy, now that the XM6 exists',
    metaDescription:
      'The WH-1000XM6 is out and the XM5 has fallen to around ₹27,000. We look at what the newer model actually adds and whether the older one is the better deal.',
    publishedAt: '2026-10-08',
    updatedAt: '2026-10-08',
    author: 'LuminaReviews editorial',
    priceAtReview: '≈ ₹27,000 street price (October 2026)',
    imageUrl:
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1200',
    imageCredit: 'Unsplash',
    amazonUrl:
      'https://www.amazon.in/Sony-WH-1000XM5-Wireless-Cancelling-Headphones/dp/B09XS7JWHH',
    bottomLine:
      'The XM5 is the better buy for most people right now. The XM6 is a real upgrade — faster noise-cancelling processor, 12 microphones, and the folding hinge Sony should never have removed — but it sits at ₹39,990 while the XM5 has settled near ₹27,000. That is roughly a 48% premium for improvements most listeners will notice only in direct comparison.',
    sections: [
      {
        heading: 'What changed with the XM6',
        paragraphs: [
          'Sony launched the WH-1000XM6 in India at ₹39,990 in late September 2025. It uses a new HD Noise Cancelling Processor QN3, which Sony says is seven times faster than the chip in the XM5, and it raises the microphone count to twelve — about 1.5 times the XM5\'s array. Battery life is quoted at up to 30 hours with ANC on and 40 hours with it off, and the XM6 can be used while charging.',
          'The most practically useful change is the return of folding hinges. Sony dropped them on the XM5 and the case got noticeably bulkier as a result. If you travel with headphones in a backpack rather than a dedicated bag, that single change may matter more to you than the processor does.'
        ]
      },
      {
        heading: 'Why the XM5 is still the value pick',
        paragraphs: [
          'The XM5 launched at an introductory ₹26,990 against a ₹34,990 MRP. By early 2026 discounting had brought the street price back down to roughly ₹27,000, with occasional bank offers reported as low as ₹23,990.',
          'At that price the XM5 is doing most of what the XM6 does. Its noise cancellation is still among the best available, call quality is strong, and the sound signature is the same well-liked Sony tuning. The XM6 will sound better in a side-by-side test. Whether it sounds ₹13,000 better in a metro coach or an open-plan office is a much harder case to make.'
        ]
      },
      {
        heading: 'The durability caveat worth knowing',
        paragraphs: [
          'Owners in Indian forums have reported XM5 hinges breaking under rough handling. These are user anecdotes rather than a measured failure rate, so we would not call it a defect — but the XM5\'s non-folding design puts stress in a place the older XM4 did not have, and it is the one failure mode that comes up repeatedly.',
          'If you are hard on your gear, this is a genuine argument for the XM6, whose folding design revisits that area. If your headphones mostly travel between a desk and a bag, it is unlikely to affect you.'
        ]
      },
      {
        heading: 'Who should spend the extra',
        paragraphs: [
          'Buy the XM6 if you fly often and want the smaller folded case, if you take a lot of calls in noisy places and will benefit from the larger mic array, or if you can find it meaningfully below ₹39,990.',
          'Buy the XM5 if you want flagship noise cancelling at the lowest sensible price. It is a two-generation-old product only in model numbering — in daily use it remains a top-tier pair of headphones.'
        ]
      }
    ],
    specs: [
      { label: 'Driver', value: '30mm carbon fibre composite' },
      { label: 'Battery', value: 'Up to 30 h with ANC' },
      { label: 'Processor', value: 'QN1 + V1 (XM6 uses the newer QN3)' },
      { label: 'Microphones', value: '8 (XM6 has 12)' },
      { label: 'Folding', value: 'No — swivels flat only' },
      { label: 'Codecs', value: 'SBC, AAC, LDAC' },
      { label: 'Launch MRP', value: '₹34,990' }
    ],
    pros: [
      'Noise cancellation still competitive with anything on sale',
      'Excellent call quality',
      'Comfortable for long sessions — light clamp, soft pads',
      'Around ₹13,000 cheaper than the XM6 for most of the capability',
      'LDAC support for higher-bitrate streaming'
    ],
    cons: [
      'Does not fold — bulkier case than the XM4 or XM6',
      'Repeated owner reports of hinge failures under rough handling',
      'The XM6 genuinely does sound and cancel better',
      'No wired-while-off operation without the cable'
    ],
    whoIsItFor:
      'Commuters and office workers who want flagship-level noise cancelling without paying flagship-current prices.',
    whoIsItNotFor:
      'Frequent flyers who need the smallest possible case, and anyone rough enough with their gear that the hinge reports are a real concern — both should look at the XM6.',
    sources: [
      {
        title: 'Digit — Sony WH-1000XM6 India launch and pricing',
        uri: 'https://www.digit.in/news/audio-video/sony-wh-1000xm6-launched-india.html'
      },
      {
        title: "Tom's Guide — WH-1000XM6 vs WH-1000XM5",
        uri: 'https://www.tomsguide.com/audio/over-ear-headphones/sony-wh-1000xm6-vs-wh-1000xm5-whats-the-difference'
      },
      {
        title: 'Digit — WH-1000XM5 India launch price',
        uri: 'https://www.digit.in/news/general/sonys-premium-wh-1000xm5-headphone-lands-in-india-at-29990-know-launch-offers-and-other-details-65325.html'
      },
      {
        title: 'TechEnclave — owner discussion on XM5 vs XM6 and hinge reports',
        uri: 'https://techenclave.com/t/sony-wh-1000xm5-free-or-wh-1000xm6-for-8k/398972'
      }
    ]
  },

  {
    slug: 'lava-agni-3',
    productName: 'Lava Agni 3 5G',
    category: 'Smartphones',
    title: 'Lava Agni 3: good hardware, and an update record that is still unproven',
    metaDescription:
      'The Agni 3 pairs a Dimensity 7300X with a second AMOLED on the back. The hardware reviews well. The open question is whether Lava keeps its software promises.',
    publishedAt: '2026-10-08',
    updatedAt: '2026-10-08',
    author: 'LuminaReviews editorial',
    priceAtReview: '₹20,999 (launch pricing; check current listings)',
    imageUrl:
      'https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&q=80&w=1200',
    imageCredit: 'Unsplash',
    amazonUrl:
      'https://www.amazon.in/Midnight-Segments-MediaTek-Dimensity-Charging/dp/B0G2BBWKCP',
    bottomLine:
      'The Agni 3 is a well-built phone with a capable chip and genuinely clean software, and reviewers liked it. The reason to hesitate is not the hardware — it is that Lava promises three Android versions and four years of security patches, and owners of earlier Agni phones report that patches slowed down after the first year. Buy it for what it is today, not for the update promise.',
    sections: [
      {
        heading: 'The hardware reviews well',
        paragraphs: [
          'The Agni 3 runs a MediaTek Dimensity 7300X, and reviewers consistently rated its performance well for the price — one noted it outscored the Motorola Razr 50 in AnTuTu. The headline feature is a second AMOLED panel on the rear, used for notifications, a viewfinder for the main camera, and a few widgets.',
          'Software was praised more than we expected. Digit called it clean, and one reviewer reported no issues over a week of daily use. Another was less positive, describing the UI optimisation as a letdown and saying it needed polish. Taken together: a clean Android build with some rough edges, not a heavily skinned mess.'
        ]
      },
      {
        heading: 'The two consistent complaints',
        paragraphs: [
          'Heat comes up repeatedly. One reviewer found the phone warming after roughly fifteen minutes of gaming, and also noted it throttling while charging. If you game for long stretches, this is the thing to expect.',
          'The second-screen gimmick question is unresolved. Reviewers split on whether the rear AMOLED is genuinely useful or a novelty that stops getting used after a fortnight. Nothing we read settles it, and we have not used the phone long enough to settle it either. Treat it as a bonus rather than a reason to buy.'
        ]
      },
      {
        heading: 'The part we would weigh most heavily',
        paragraphs: [
          'Lava commits to three major Android updates and four years of security patches, shipping on Android 14. That is a competitive promise at this price.',
          'The evidence that Lava keeps such promises is thin. Owners on Lava\'s own Agni 2 threads report that updates were good for the first year and that security patches became slow afterwards, and a separate comparison thread described Lava as pushing updates slowly. These are anecdotes about an earlier phone, not measurements of this one — but they are the only long-term signal available, because almost every Agni 3 review is based on about a week of use.',
          'Our honest position: there is no published long-term reliability or update-cadence data for this phone yet. Anyone telling you confidently how it will age in year three is guessing. If guaranteed updates matter to you, this is a reason to pay more elsewhere.'
        ]
      },
      {
        heading: 'Note on the newer model',
        paragraphs: [
          'Lava has since launched the Agni 4. If you are shopping now, check its price before committing to the Agni 3 — the usual pattern is that the outgoing model becomes good value, but that only holds if the discount is real.'
        ]
      }
    ],
    specs: [
      { label: 'Chipset', value: 'MediaTek Dimensity 7300X' },
      { label: 'Displays', value: 'Main AMOLED + secondary rear AMOLED' },
      { label: 'Charging', value: '66W wired' },
      { label: 'Ships with', value: 'Android 14' },
      { label: 'Update promise', value: '3 Android versions, 4 years of security patches' },
      { label: 'Launch price', value: '₹20,999' }
    ],
    pros: [
      'Dimensity 7300X performs well for the price',
      'Clean, near-stock Android with little bloat',
      'Rear AMOLED is a genuinely unusual feature at this price',
      '66W charging',
      'Strong on-paper update commitment'
    ],
    cons: [
      'Warms up within about 15 minutes of gaming',
      'Charging speed throttles under load',
      'Lava\'s track record on delivering promised updates is weak on earlier models',
      'Second screen may prove to be a novelty — reviewers disagree',
      'Superseded by the Agni 4, so check relative pricing'
    ],
    whoIsItFor:
      'Someone buying around ₹20,000 who wants clean Android and solid everyday performance, and who treats the rear display as a bonus rather than the reason to buy.',
    whoIsItNotFor:
      'Heavy mobile gamers, and anyone who needs a dependable multi-year security-patch record — Lava has not yet demonstrated one.',
    sources: [
      {
        title: 'MySmartPrice — Lava Agni 3 review',
        uri: 'https://www.mysmartprice.com/gear/mobiles/mobiles-reviews/lava-agni-3-review/'
      },
      {
        title: 'Beebom — Lava Agni 3 review',
        uri: 'https://beebom.com/lava-agni-3-review/'
      },
      {
        title: 'Digit — Lava Agni 3 review',
        uri: 'https://www.digit.in/reviews/mobile-phones/lava-agni-3-review-gimmick-or-good.html'
      },
      {
        title: 'TechEnclave — owner thread on Lava update cadence',
        uri: 'https://techenclave.com/t/lava-agni-3-5g-indias-1st-dual-display-amoled/270980'
      }
    ]
  }
];

export const getReviewBySlug = (slug: string): StaticReview | undefined =>
  REVIEWS.find((r) => r.slug === slug);
