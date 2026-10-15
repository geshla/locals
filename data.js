/*
  Levi's Archive — data file
  --------------------------------------------------------------
  Everything on the site is generated from this file. To add a model,
  copy an entry and edit it. To add your own photos, drop the image in
  images/<entry-id>/ and list it in that entry's `photos` array, e.g.

    photos: [
      { src: "images/lvc-1947-501/front.jpg", caption: "Front, raw", credit: "My own photo" }
    ]

  Fields
    id        unique slug, also the folder name for photos
    line      one of the keys in LINES below
    lot       lot / model number as shown on the card ("501", "1947 501")
    name      short name
    year      sort year (number)
    approx    true when the year is approximate or not confirmed by a source
    fit       a preset from FITS (drives the drawn silhouette)
    fly       "button" | "zip"
    summary   one or two sentences
    details   bullet facts
    sources   links that back up the facts (also where to see real photos)
    photos    your own images (empty to start)
*/

window.LINES = {
  redtab:   { label: "Red Tab",                color: "#b3261e", blurb: "The core line, from the 1873 waist overall to today's numbered fits." },
  orange:   { label: "Orange Tab",             color: "#d9822b", blurb: "Fashion fits of the 1960s and 70s: super slims, flares and bells." },
  lvc:      { label: "Levi's Vintage Clothing", color: "#7a5a2f", blurb: "Stitch-for-stitch reissues of archive pieces, since 1996." },
  premium:  { label: "Premium lines",          color: "#2f5d8a", blurb: "Silver Tab, Engineered Jeans, Levi's RED, Made & Crafted and Blue Tab." },
  collab:   { label: "Collaborations",         color: "#4b4b4b", blurb: "Designer, streetwear and brand partnerships." }
};

/* Silhouette presets: widths are relative units for the drawing.
   rise 0–1 (low–high), thigh/knee/hem in px of a 200-wide canvas leg. */
window.FITS = {
  workwear:  { label: "Full workwear cut",  rise: 0.95, thigh: 66, knee: 56, hem: 54 },
  vintage:   { label: "Full straight",      rise: 0.85, thigh: 62, knee: 52, hem: 50 },
  original:  { label: "Straight",           rise: 0.75, thigh: 58, knee: 48, hem: 46 },
  regular:   { label: "Regular straight",   rise: 0.7,  thigh: 58, knee: 49, hem: 48 },
  taper:     { label: "Tapered",            rise: 0.65, thigh: 58, knee: 44, hem: 36 },
  slim:      { label: "Slim",               rise: 0.5,  thigh: 50, knee: 40, hem: 36 },
  slimtaper: { label: "Slim taper",         rise: 0.5,  thigh: 50, knee: 38, hem: 31 },
  skinny:    { label: "Skinny",             rise: 0.45, thigh: 46, knee: 34, hem: 29 },
  athletic:  { label: "Athletic taper",     rise: 0.65, thigh: 62, knee: 44, hem: 35 },
  relaxed:   { label: "Relaxed",            rise: 0.72, thigh: 64, knee: 53, hem: 47 },
  loose:     { label: "Loose straight",     rise: 0.75, thigh: 68, knee: 60, hem: 58 },
  baggy:     { label: "Baggy",              rise: 0.8,  thigh: 74, knee: 66, hem: 64 },
  boot:      { label: "Bootcut",            rise: 0.65, thigh: 56, knee: 44, hem: 54 },
  bell:      { label: "Bell bottom",        rise: 0.6,  thigh: 54, knee: 42, hem: 72 },
  twisted:   { label: "Twisted 3D",         rise: 0.6,  thigh: 60, knee: 50, hem: 46, twist: true }
};

/* Milestones that are not a single model: shown on the timeline only. */
window.MILESTONES = [
  { year: 1873, line: "redtab", text: "Levi Strauss and Jacob Davis receive the patent for riveted waist overalls (May 1873).", source: "https://www.houyhnhnm.jp/en/news/701899/" },
  { year: 1890, line: "redtab", text: "Lot numbers are introduced; the riveted overall becomes the 501. The rivet patent also enters the public domain.", source: "https://www.apparelsearch.com/names/L/Levi/levis_big_e.html" },
  { year: 1901, line: "redtab", text: "A back pocket is added, giving the 501 the five-pocket layout jeans still use.", source: "https://www.forbespt.com/levis-lanca-colecao-comemorativa-dos-150-anos-dos-jeans-501" },
  { year: 1922, line: "redtab", text: "Belt loops appear on the 501. Suspender buttons stay until 1937 and the back cinch until 1942.", source: "https://www.forbespt.com/levis-lanca-colecao-comemorativa-dos-150-anos-dos-jeans-501" },
  { year: 1936, line: "redtab", text: "The Red Tab is first sewn onto the 501 (1 September 1936), lettered on one side only.", source: "https://www.levistrauss.com/2021/09/01/85-years-of-the-levis-red-tab/" },
  { year: 1953, line: "redtab", approx: true, text: "LEVI'S starts appearing on both sides of the Red Tab (early 1950s).", source: "https://www.thecollectorscompanion.co.uk/features/vintage-clothing/dating-levis/" },
  { year: 1966, line: "redtab", text: "Bar tacks replace the back-pocket rivets on the 501.", source: "https://www.apparelsearch.com/names/L/Levi/levis_big_e.html" },
  { year: 1971, line: "redtab", text: "The tab switches from capital 'Big E' to lower-case 'e'; Big E pairs become the collector's marker for pre-1971 jeans.", source: "https://tenuedenimes.com/blogs/news/a-throwback-to-the-golden-days-with-levi-s-vintage-clothing" },
  { year: 1983, line: "redtab", approx: true, text: "Collectors date the last selvedge Cone denim 501s to around 1983.", source: "https://supertalk.superfuture.com/topic/131739-levis-vintage-clothing/page/599" },
  { year: 2018, line: "redtab", text: "The Big E Red Tab returns to mark Levi's premium products.", source: "https://www.levistrauss.com/2021/09/01/85-years-of-the-levis-red-tab/" },
  { year: 2023, line: "lvc", text: "501 150th anniversary: LVC releases a hand-numbered countdown of 1922, 1901, 1890 and 1873 reissues.", source: "https://www.forbespt.com/levis-lanca-colecao-comemorativa-dos-150-anos-dos-jeans-501" }
];

window.ENTRIES = [
  /* ---------------- RED TAB ---------------- */
  { id: "xx-waist-overall-1873", line: "redtab", lot: "XX", name: "Riveted waist overall", year: 1873, fit: "workwear", fly: "button", cinch: true, suspenders: true,
    summary: "The patented riveted work pant that became the 501. No originals are held in the Levi's archive.",
    details: ["Copper rivets at pocket stress points", "Patent no. 139,121", "Cinch back and suspender buttons", "One back pocket"],
    sources: [{ t: "Houyhnhnm: LVC 1873 XX reissue", u: "https://www.houyhnhnm.jp/en/news/701899/" }, { t: "Forbes Portugal: 150 years of the 501", u: "https://www.forbespt.com/levis-lanca-colecao-comemorativa-dos-150-anos-dos-jeans-501" }],
    photos: [] },

  { id: "501", line: "redtab", lot: "501", name: "501 Original", year: 1890, fit: "original", fly: "button",
    summary: "Given lot number 501 in 1890 and in continuous production since. Every other number on this page is measured against it.",
    details: ["Button fly", "Straight leg", "Lot number assigned 1890", "Shrink-to-Fit raw versions alongside pre-washed"],
    sources: [{ t: "LVC fit guide (archive copy)", u: "https://www.slideshare.net/slideshow/fw13-lvc-fit-guide/24034526" }, { t: "Levi's: 501 vs the 500 series", u: "https://www.levi.com/US/en_US/blog/article/501-vs-500-mens" }],
    photos: [] },

  { id: "502", line: "redtab", lot: "502", name: "502 Taper", year: 1967, fit: "taper", fly: "zip",
    summary: "Grew out of the zip-fly 501Z of 1954, which took the number 502 in 1967. Today's 502 is a regular-taper fit.",
    details: ["Zip fly", "Originally a pre-shrunk zip version of the 501", "Modern version: regular thigh, taper below the knee"],
    sources: [{ t: "Levi's: guide to the 500 series", u: "https://www.levi.com/US/en_US/blog/article/501-vs-500-mens" }, { t: "Openers: LVC 501 fit guide", u: "https://openers.jp/en/fashion/fashion_features/22084" }],
    photos: [] },

  { id: "505", line: "redtab", lot: "505", name: "505 Regular", year: 1967, fit: "regular", fly: "zip",
    summary: "Levi's first jean designed with a zip fly, cut as a regular straight.",
    details: ["Zip fly", "Regular through seat and thigh", "Worn shredded as a uniform by the Ramones"],
    sources: [{ t: "Levi's: men's best-fit jeans", u: "https://www.levi.com/US/en_US/blog/article/top-6-favorite-jeans-fits-for-him" }],
    photos: [] },

  { id: "517", line: "redtab", lot: "517", name: "517 Bootcut", year: 1969, fit: "boot", fly: "zip",
    summary: "Launched as the 'Saddleman' jean, cut to sit over Western boots.",
    details: ["Zip fly", "Slight flare from the knee", "Also sold under Orange Tab in the 1970s"],
    sources: [{ t: "Levi's Secondhand: 517 history", u: "https://secondhand.levi.com/products/levis-517-boot-cut-jeans_405170259_black" }],
    photos: [] },

  { id: "550", line: "redtab", lot: "550", name: "550 Relaxed", year: 1985, fit: "relaxed", fly: "zip",
    summary: "A roomier take on the 501 that defined the relaxed look of the late 80s and 90s.",
    details: ["Zip fly", "Extra room through seat and thigh", "Slight taper"],
    sources: [{ t: "Levi's: guide to the 500 series", u: "https://www.levi.com/US/en_US/blog/article/501-vs-500-mens" }],
    photos: [] },

  { id: "514", line: "redtab", lot: "514", name: "514 Straight", year: 1985, approx: true, fit: "regular", fly: "zip",
    summary: "Sits below the waist with a regular thigh and straight leg. Launch year varies between sources.",
    details: ["Zip fly", "Below-waist rise", "Regular thigh, straight leg"],
    sources: [{ t: "Gear Patrol: every Levi's fit explained", u: "https://www.gearpatrol.com/style/a548567/levis-jeans-complete-buying-guide/" }],
    photos: [] },

  { id: "560", line: "redtab", lot: "560", name: "560 Comfort Fit", year: 1992, approx: true, fit: "relaxed", fly: "zip",
    summary: "A loose, tapered 90s fit now sought after in vintage. Exact launch year not confirmed.",
    details: ["Zip fly", "Loose seat and thigh, tapered leg"],
    sources: [{ t: "Grailed: Levi's collaborations and fits", u: "https://www.grailed.com/collaborations/junya-watanabe-levi-s" }],
    photos: [] },

  { id: "569", line: "redtab", lot: "569", name: "569 Loose Straight", year: 1995, approx: true, fit: "loose", fly: "zip",
    summary: "One of the roomiest fits in the range, rooted in 90s streetwear. Launch year not confirmed.",
    details: ["Zip fly", "Loose through seat and thigh", "Straight leg"],
    sources: [{ t: "InsideHook: style numbers explained", u: "https://www.insidehook.com/style/levis-jeans-style-numbers-explained" }],
    photos: [] },

  { id: "511", line: "redtab", lot: "511", name: "511 Slim", year: 2000, approx: true, fit: "slim", fly: "zip",
    summary: "Levi's standard slim fit, slimmer than the 501 but not skinny. Sources differ on the launch year.",
    details: ["Zip fly", "Below-waist rise", "Slim through seat and thigh"],
    sources: [{ t: "Gear Patrol: every Levi's fit explained", u: "https://www.gearpatrol.com/style/a548567/levis-jeans-complete-buying-guide/" }, { t: "Levi's: 511 vs the 500 series", u: "https://www.levi.com/US/en_US/blog/article/511-vs-500-mens" }],
    photos: [] },

  { id: "510", line: "redtab", lot: "510", name: "510 Skinny", year: 2006, approx: true, fit: "skinny", fly: "zip",
    summary: "A true skinny jean, tight from thigh to ankle. Launch year not confirmed.",
    details: ["Zip fly", "Skinny throughout"],
    sources: [{ t: "Levi's: 511 vs the 500 series", u: "https://www.levi.com/US/en_US/blog/article/511-vs-500-mens" }],
    photos: [] },

  { id: "513", line: "redtab", lot: "513", name: "513 Slim Straight", year: 2010, approx: true, fit: "slim", fly: "zip",
    summary: "Narrow at the top, easing into a straight leg. Launch year not confirmed.",
    details: ["Zip fly", "Low rise", "Slim seat, straight leg"],
    sources: [{ t: "Levi's: guide to the 500 series", u: "https://www.levi.com/US/en_US/blog/article/501-vs-500-mens" }],
    photos: [] },

  { id: "512", line: "redtab", lot: "512", name: "512 Slim Taper", year: 2012, approx: true, fit: "slimtaper", fly: "zip",
    summary: "Same waist, seat and thigh as the 511 with a narrower leg below the knee. Launch year not confirmed.",
    details: ["Zip fly", "Stretch denim common", "Taper from the knee"],
    sources: [{ t: "Levi's: 512 Slim Taper", u: "https://www.levi.com/US/en_US/jeans-by-fit-number/men/jeans/512TM/c/levi_jeans_by_fit_number_men_jeans_512" }],
    photos: [] },

  { id: "541", line: "redtab", lot: "541", name: "541 Athletic Taper", year: 2015, approx: true, fit: "athletic", fly: "zip",
    summary: "Developed alongside Levi's work with the San Francisco 49ers to fit muscular legs. Launch year not confirmed.",
    details: ["Zip fly", "Extra room in seat and thigh", "Taper from the knee"],
    sources: [{ t: "Levi's: how to wear tapered jeans", u: "https://levi.com/US/en_US/blog/article/how-to-wear-taper-jeans" }],
    photos: [] },

  { id: "531", line: "redtab", lot: "531", name: "531 Athletic Slim", year: 2016, approx: true, fit: "athletic", fly: "zip",
    summary: "A lower-rise athletic cut with a slimmer leg than the 541. Launch year not confirmed.",
    details: ["Zip fly", "Low rise", "Extra seat and thigh room"],
    sources: [{ t: "The Modest Man: Levi's fits explained", u: "https://www.themodestman.com/levis-fits-explained" }],
    photos: [] },

  { id: "527", line: "redtab", lot: "527", name: "527 Slim Bootcut", year: 2005, approx: true, fit: "boot", fly: "zip",
    summary: "A lower-rise, slimmer bootcut than the 517. Launch year not confirmed.",
    details: ["Zip fly", "Low rise", "Slim thigh, boot opening"],
    sources: [{ t: "Levi's: 512 page (related fits)", u: "https://www.levi.com/FR/en/clothing/men/512-slim-taper/p/288331138" }],
    photos: [] },

  { id: "568", line: "redtab", lot: "568", name: "568 Stay Loose", year: 2021, approx: true, fit: "loose", fly: "zip",
    summary: "A 90s-inspired loose straight that stacks at the ankle. Launch year not confirmed.",
    details: ["Zip fly", "Sits at the waist", "17\" leg opening (size 32)"],
    sources: [{ t: "Levi's: 568 Loose Straight", u: "https://www.levi.com/CA/en_CA/p/290370052" }],
    photos: [] },

  { id: "555", line: "redtab", lot: "555", name: "555 Relaxed Straight", year: 2023, approx: true, fit: "relaxed", fly: "zip",
    summary: "Relaxed straight drawing on 70s and 80s cuts, with a 17\" opening versus the 501's 15\". Launch year approximate.",
    details: ["Zip fly", "100% cotton", "Wider opening than 501 and 505"],
    sources: [{ t: "StyleRave: 555 and 568", u: "https://stylerave.com/levi-fall-vintage-jeans-for-men/" }],
    photos: [] },

  { id: "565", line: "redtab", lot: "565", name: "565 Loose Straight", year: 2023, approx: true, fit: "loose", fly: "zip",
    summary: "Sits below the waist with room from hip to thigh and a classic straight leg. Launch year not confirmed.",
    details: ["Zip fly", "Below-waist rise", "Loose, not baggy"],
    sources: [{ t: "McArthurGlen: Levi's fit guide", u: "https://www.mcarthurglen.com/es/centres/fr/Designer-outlet-Provence/whats-on/levis-denim/" }],
    photos: [] },

  { id: "578", line: "redtab", lot: "578", name: "578 Baggy", year: 2024, approx: true, fit: "baggy", fly: "zip",
    summary: "The baggiest numbered fit, modelled on 90s silhouettes.",
    details: ["Zip fly", "Non-stretch denim", "19\" leg opening (size 32)"],
    sources: [{ t: "Levi's: 578 Baggy", u: "https://www.levi.com/US/en_US/Men/Jeans/Loose/578-Baggy-Mens-Jeans/p/A47500045" }, { t: "Gear Patrol: every Levi's fit explained", u: "https://www.gearpatrol.com/style/a548567/levis-jeans-complete-buying-guide/" }],
    photos: [] },

  /* ---------------- ORANGE TAB ---------------- */
  { id: "606", line: "orange", lot: "606", name: "606 Super Slim", year: 1965, approx: true, fit: "skinny", fly: "zip", tab: "orange",
    summary: "Widely seen as the original skinny jean; a mod and rock staple of the 60s.",
    details: ["Zip fly", "Slim tapered leg", "Orange Tab"],
    sources: [{ t: "Modculture: LVC 606 reissue", u: "https://www.modculture.co.uk/?p=7974" }, { t: "Collector's Companion: dating Levi's", u: "https://www.thecollectorscompanion.co.uk/features/vintage-clothing/dating-levis/" }],
    photos: [] },

  { id: "646", line: "orange", lot: "646", name: "646 Bell Bottom", year: 1969, approx: true, fit: "bell", fly: "zip", tab: "orange",
    summary: "The classic Levi's flare of the 1970s, usually with an Orange Tab and Talon 42 zip.",
    details: ["Zip fly (Talon 42 common)", "Fitted thigh, flared hem", "Made in denim and corduroy"],
    sources: [{ t: "Superfuture: Orange Tab ID thread", u: "https://supertalk.superfuture.com/topic/36572-levis-orange-tab-id/" }],
    photos: [] },

  { id: "684", line: "orange", lot: "684", name: "684 Big Bell", year: 1970, approx: true, fit: "bell", fly: "zip", tab: "orange", flare: 1.3,
    summary: "A wider bell than the 646, sold through the 1970s. Launch year not confirmed.",
    details: ["Zip fly", "Very wide bell hem", "Orange Tab"],
    sources: [{ t: "eBay: 684 listings", u: "https://www.ebay.co.uk/shop/levis-684" }],
    photos: [] },

  /* ---------------- LEVI'S VINTAGE CLOTHING ---------------- */
  { id: "lvc-1873-xx", line: "lvc", lot: "1873 XX", name: "1873 XX Waist Overall", year: 1873, released: 2023, fit: "workwear", fly: "button", cinch: true, suspenders: true,
    summary: "A researched recreation of the first riveted overall, released in 2023 as the last of the hand-numbered 150th countdown.",
    details: ["Reissue released May 2023", "Built from research, as no original is in the archive"],
    sources: [{ t: "Houyhnhnm", u: "https://www.houyhnhnm.jp/en/news/701899/" }, { t: "Forbes Portugal", u: "https://www.forbespt.com/levis-lanca-colecao-comemorativa-dos-150-anos-dos-jeans-501" }],
    photos: [] },

  { id: "lvc-1890-501", line: "lvc", lot: "1890 501", name: "1890 501", year: 1890, fit: "workwear", fly: "button", cinch: true, suspenders: true,
    summary: "The first jean to carry the 501 number, made the year the rivet patent expired.",
    details: ["One back pocket", "Cinch and suspender buttons", "Amoskeag denim on the original"],
    sources: [{ t: "Heddels: 501 history 1890–1944", u: "https://www.heddels.com/?p=6871" }, { t: "LVC fit guide", u: "https://www.slideshare.net/slideshow/fw13-lvc-fit-guide/24034526" }],
    photos: [] },

  { id: "lvc-1901-501", line: "lvc", lot: "1901 501", name: "1901 501", year: 1901, fit: "vintage", fly: "button", cinch: true, suspenders: true,
    summary: "The year a second back pocket arrived, creating the five-pocket jean.",
    details: ["Two back pockets", "Cinch and suspender buttons", "Narrower than the 1920s–30s cuts"],
    sources: [{ t: "Forbes Portugal", u: "https://www.forbespt.com/levis-lanca-colecao-comemorativa-dos-150-anos-dos-jeans-501" }, { t: "Superfuture: 501 visual guide", u: "https://supertalk.superfuture.com/topic/33596-levis-501-a-visual-guide/page/5/" }],
    photos: [] },

  { id: "lvc-1922-501", line: "lvc", lot: "1922 501", name: "1922 501", year: 1922, fit: "workwear", fly: "button", cinch: true, suspenders: true,
    summary: "Belt loops added while keeping suspender buttons and cinch: 'the best of both worlds'.",
    details: ["First belt loops", "Suspender buttons and cinch retained", "Cone denim on the original"],
    sources: [{ t: "Heddels", u: "https://www.heddels.com/?p=6871" }, { t: "LVC fit guide", u: "https://www.slideshare.net/slideshow/fw13-lvc-fit-guide/24034526" }],
    photos: [] },

  { id: "lvc-1920s-201", line: "lvc", lot: "201", name: "1920s 201", year: 1922, approx: true, fit: "workwear", fly: "button", cinch: true, suspenders: true,
    summary: "The cheaper sister to the 501. Early Valencia Street reissues are highly regarded by collectors.",
    details: ["Lower-grade denim than the 501 originally", "Very full thigh in LVC cut"],
    sources: [{ t: "Superfuture: 501 visual guide", u: "https://supertalk.superfuture.com/topic/33596-levis-501-a-visual-guide/page/5/" }],
    photos: [] },

  { id: "lvc-1933-501", line: "lvc", lot: "1933 501", name: "1933 501", year: 1933, fit: "workwear", fly: "button", cinch: true, suspenders: true,
    summary: "Belt loops and cinch, slightly slimmer and lower than the 1922, with a redesigned guarantee ticket.",
    details: ["One of the widest-legged LVC cuts", "Depression-era NRA details"],
    sources: [{ t: "Heddels", u: "https://www.heddels.com/?p=6871" }, { t: "LVC fit guide", u: "https://www.slideshare.net/slideshow/fw13-lvc-fit-guide/24034526" }],
    photos: [] },

  { id: "lvc-1937-501", line: "lvc", lot: "1937 501", name: "1937 501", year: 1937, fit: "vintage", fly: "button", cinch: true,
    summary: "The first 501 reissue with a Red Tab; suspender buttons gone, cinch still on.",
    details: ["Big E Red Tab", "Crotch rivet", "Concealed back-pocket rivets", "Japan-made 150th edition in 2023"],
    sources: [{ t: "Openers: LVC 501 fit guide", u: "https://openers.jp/en/fashion/fashion_features/22084" }, { t: "Inside Denim: 1937 Japan exclusive", u: "https://insidedenim.com/News/164214" }],
    photos: [] },

  { id: "lvc-1944-501", line: "lvc", lot: "1944 501", name: "1944 501 (WWII)", year: 1944, fit: "vintage", fly: "button",
    summary: "Wartime rationing stripped metal and thread: painted arcuates, fewer rivets and buttons.",
    details: ["Painted arcuate", "No watch-pocket or crotch rivet", "Fewer fly buttons"],
    sources: [{ t: "Heddels", u: "https://www.heddels.com/?p=6871" }, { t: "LVC fit guide", u: "https://www.slideshare.net/slideshow/fw13-lvc-fit-guide/24034526" }],
    photos: [] },

  { id: "lvc-1947-501", line: "lvc", lot: "1947 501", name: "1947 501", year: 1947, fit: "original", fly: "button",
    summary: "Post-war, slimmer 501 without cinch, suspender buttons or crotch rivet. Its label reads 47501.",
    details: ["Twin-needle stitched arcuate returns", "Leather patch", "Hidden back-pocket rivets"],
    sources: [{ t: "Levi's PH: LVC collection", u: "https://levi.com.ph/collections/levis-vintage-clothing" }, { t: "Superfuture: 501 visual guide", u: "https://supertalk.superfuture.com/topic/33596-levis-501-a-visual-guide/page/5/" }],
    photos: [] },

  { id: "lvc-1954-501", line: "lvc", lot: "1954 501Z", name: "1954 501Z", year: 1954, fit: "original", fly: "zip",
    summary: "A zip-fly 501 made for the East Coast market; it became the 502 in 1967.",
    details: ["Zip fly", "Tapered below the knee", "Slimmer than the 1947"],
    sources: [{ t: "Openers: LVC 501 fit guide", u: "https://openers.jp/en/fashion/fashion_features/22084" }, { t: "Levi's PH: LVC collection", u: "https://levi.com.ph/collections/levis-vintage-clothing" }],
    photos: [] },

  { id: "lvc-1955-501", line: "lvc", lot: "1955 501", name: "1955 501", year: 1955, fit: "vintage", fly: "button",
    summary: "Fuller, boxier 'anti-fit' with the biker silhouette of the mid-50s.",
    details: ["Paper patch", "Tab printed on both sides", "Full leg"],
    sources: [{ t: "Levi's PH: LVC collection", u: "https://levi.com.ph/collections/levis-vintage-clothing" }, { t: "Openers", u: "https://openers.jp/en/fashion/fashion_features/22084" }],
    photos: [] },

  { id: "lvc-1966-501", line: "lvc", lot: "1966 501", name: "1966 501", year: 1966, fit: "original", fly: "button",
    summary: "The last Big E 501, with bar tacks in place of back-pocket rivets.",
    details: ["Bar-tacked back pockets", "Big E tab", "Straight with taper below the knee"],
    sources: [{ t: "Openers", u: "https://openers.jp/en/fashion/fashion_features/22084" }, { t: "Apparel Search: Big E", u: "https://www.apparelsearch.com/names/L/Levi/levis_big_e.html" }],
    photos: [] },

  { id: "lvc-1967-505", line: "lvc", lot: "1967 505", name: "1967 505", year: 1967, approx: true, fit: "regular", fly: "zip",
    summary: "Reissue of the first 505, a slim zip-fly straight with a 60s taper.",
    details: ["Zip fly", "Reissue date not confirmed"],
    sources: [{ t: "Superfuture LVC thread", u: "https://supertalk.superfuture.com/topic/131739-levis-vintage-clothing/page/599" }],
    photos: [] },

  { id: "lvc-1960s-606", line: "lvc", lot: "1969 606", name: "1960s 606 (Orange Tab)", year: 1969, released: 2013, fit: "skinny", fly: "zip", tab: "orange",
    summary: "LVC reissue of the 606 super slim in raw Cone denim, around 2013.",
    details: ["Raw Cone denim", "Two-horse leather patch", "Orange Tab"],
    sources: [{ t: "Modculture", u: "https://www.modculture.co.uk/?p=7974" }],
    photos: [] },

  { id: "lvc-1971-golden-ticket", line: "lvc", lot: "1971 501", name: "1971 'Golden Ticket' 501", year: 1971, fit: "original", fly: "button",
    summary: "501 pairs made with gold-foil-wrapped tabs; five hid a Big E. Marks the switch to the small e.",
    details: ["Deadstock 12oz Cone White Oak selvedge", "First Big E made since 1971"],
    sources: [{ t: "Tenue de Nîmes", u: "https://tenuedenimes.com/blogs/news/a-throwback-to-the-golden-days-with-levi-s-vintage-clothing" }],
    photos: [] },

  /* ---------------- PREMIUM LINES ---------------- */
  { id: "silvertab-1988", line: "premium", lot: "Silver Tab", name: "Silver Tab", year: 1988, fit: "baggy", fly: "zip", tab: "silver",
    summary: "Baggy, washed-out jeans that rode the hip hop and grunge wave of the late 80s and 90s.",
    details: ["Silver tab", "1999 campaign illustrated by Graham Rounthwaite", "Relaunched 2022 (Kohl's in the US)"],
    sources: [{ t: "Levi Strauss & Co.: a tale of tabs", u: "https://stg.levistrauss.levis.com/2017/03/01/levis-tabs" }, { t: "Snobette: Silver Tab relaunch", u: "https://snobette.com/2022/08/levis-relaunches-silvertab-as-a-khols-exclusive/" }, { t: "Kohl's press release", u: "https://corporate.kohls.com/content/dam/kohlscorp/news/2022/july/levis/Levis%20SilverTab%20Press%20Release_FINAL.pdf" }],
    photos: [] },

  { id: "silvertab-2022", line: "premium", lot: "Silver Tab", name: "Silver Tab revival", year: 2022, fit: "baggy", fly: "zip", tab: "silver",
    summary: "Relaxed and baggy fits brought back for men, women and kids, sold through Kohl's and Levi.com in the US.",
    details: ["Launched July 2022", "Also revived by Levi's Japan"],
    sources: [{ t: "License Global", u: "https://www.licenseglobal.com/apparel/kohl-s-and-levi-s-partner-on-revived-silvertab-capsule" }, { t: "Heddels: Japan revival", u: "https://www.heddels.com/?p=88214" }],
    photos: [] },

  { id: "lej-1999", line: "premium", lot: "LEJ", name: "Engineered Jeans", year: 1999, fit: "twisted", fly: "button",
    summary: "The jean redesigned around movement: twisted side seams, a darted yoke and a curved hem.",
    details: ["Twisted outseam following the leg", "Longer, slimmer belt loops", "Ghost stitch where the back label would sit", "Ads by Bartle Bogle Hegarty"],
    sources: [{ t: "Levi Strauss & Co.: Engineered Jeans", u: "https://levistrauss.com/unzipped-blog/tag/levis-engineered-jeans/" }, { t: "K00L LEJ research archive", u: "https://sites.google.com/view/koolandthejab/k00l/levis-engineered-jeans" }, { t: "Westminster Menswear Archive item", u: "https://uwestminster.test.accesstomemory.net/2020-54" }],
    photos: [] },

  { id: "lej-2019", line: "premium", lot: "LEJ", name: "Engineered Jeans 20th anniversary", year: 2019, fit: "twisted", fly: "zip",
    summary: "Reissued with four-way stretch, a red two-horse patch and LEJ-printed pocket bags.",
    details: ["Released May 2019", "Four-way stretch"],
    sources: [{ t: "Levi's: LEJ 20th anniversary", u: "https://www.levi.com/US/en_US/blog/article/levis-engineered-jeans" }],
    photos: [] },

  { id: "levis-red-1999", line: "premium", lot: "RED", name: "Levi's RED", year: 1999, fit: "twisted", fly: "button",
    summary: "A minimalist, design-led line that reworked archive details, launched the same year as LEJ.",
    details: ["Experimental cuts", "Ran into the 2000s"],
    sources: [{ t: "Westminster Menswear Archive", u: "https://uwestminster.test.accesstomemory.net/2019-6-3" }],
    photos: [] },

  { id: "made-crafted", line: "premium", lot: "M&C", name: "Made & Crafted", year: 2010, fit: "taper", fly: "button", tab: "blue",
    summary: "Premium line with a blue tab, set up under the Levi's XX division in 2009 and launched at Bread & Butter in 2010.",
    details: ["Blue tab", "Amsterdam-based design team", "Tailored and deconstructed cuts"],
    sources: [{ t: "FashionNetwork (French)", u: "https://fr.fashionnetwork.com/news/Levi-s-lance-une-marque-premium,97211.html" }, { t: "SSENSE: Made & Crafted", u: "https://www.ssense.com/en-au/men/designers/levis-made-and-crafted" }],
    photos: [] },

  { id: "blue-tab-2025", line: "premium", lot: "Blue Tab", name: "Blue Tab", year: 2025, fit: "loose", fly: "button", tab: "blue",
    summary: "Made in Japan with Kaihara selvedge, seen as a successor to Made & Crafted. Launched January 2025.",
    details: ["Kaihara Mill selvedge", "Marker Loose jean", "Branding from 1925 archive typography"],
    sources: [{ t: "Inside Denim", u: "https://insidedenim.com/News/170764" }, { t: "The Bandana", u: "https://www.thebandana.jp/p/issue-28" }],
    photos: [] },

  /* ---------------- COLLABORATIONS ---------------- */
  { id: "collab-junya", line: "collab", lot: "×", name: "Junya Watanabe × Levi's", year: 2001, fit: "original", fly: "button",
    summary: "Levi's longest-running designer partnership, from poem-print jeans to patchwork reworks.",
    details: ["Began 2001–02", "2002: 5-pocket jean and trucker in grey herringbone suiting"],
    sources: [{ t: "Grailed: Junya × Levi's", u: "https://www.grailed.com/collaborations/junya-watanabe-levi-s" }, { t: "Levi Strauss & Co.: Levi's X Files", u: "https://www.levistrauss.com/2018/08/27/levis-x-files-look-back-cool-collaborations/" }],
    photos: [] },

  { id: "collab-jordan", line: "collab", lot: "23/501", name: "Jordan Brand 23/501", year: 2008, fit: "original", fly: "button",
    summary: "Selvedge 501s lined with Jordan's elephant print.",
    details: ["Limited edition", "Paired with Air Jordan footwear"],
    sources: [{ t: "Levi Strauss & Co.: Levi's X Files", u: "https://www.levistrauss.com/2018/08/27/levis-x-files-look-back-cool-collaborations/" }],
    photos: [] },

  { id: "collab-supreme", line: "collab", lot: "×", name: "Supreme × Levi's", year: 2012, fit: "original", fly: "button",
    summary: "A long-running streetwear partnership. Levi's dates the first capsule to 2012; Hypebeast covered a 2011 drop.",
    details: ["Recurring seasonal capsules", "Fall 2016 denim classics"],
    sources: [{ t: "Levi Strauss & Co.: Levi's X Files", u: "https://www.levistrauss.com/2018/08/27/levis-x-files-look-back-cool-collaborations/" }, { t: "Complex: Levi's collaborations", u: "https://www.complex.com/style/a/steve-dool/levis-collaborations-jonathan-cheung" }],
    photos: [] },

  { id: "collab-vetements", line: "collab", lot: "×", name: "Vetements × Levi's", year: 2016, fit: "original", fly: "button",
    summary: "Demna's reworked, spliced vintage Levi's that helped define late-2010s denim.",
    details: ["Reconstructed from existing Levi's stock"],
    sources: [{ t: "Complex: Levi's collaborations", u: "https://www.complex.com/style/a/steve-dool/levis-collaborations-jonathan-cheung" }],
    photos: [] },

  { id: "collab-offwhite", line: "collab", lot: "×", name: "Off-White × Levi's", year: 2016, fit: "original", fly: "button",
    summary: "Part of a run of high-profile collaborations Levi's released in late 2016.",
    details: [],
    sources: [{ t: "Complex: Levi's collaborations", u: "https://www.complex.com/style/a/steve-dool/levis-collaborations-jonathan-cheung" }],
    photos: [] },

  { id: "collab-gosha", line: "collab", lot: "×", name: "Gosha Rubchinskiy × Levi's", year: 2017, fit: "relaxed", fly: "button",
    summary: "Spring 2017 collaboration with the Russian designer.",
    details: [],
    sources: [{ t: "Complex: Levi's collaborations", u: "https://www.complex.com/style/a/steve-dool/levis-collaborations-jonathan-cheung" }],
    photos: [] },

  { id: "collab-denim-tears", line: "collab", lot: "501", name: "Denim Tears Cotton Wreath 501", year: 2020, fit: "original", fly: "button",
    summary: "Tremaine Emory's cotton-wreath print on Authorized Vintage 501s, a statement on cotton and slavery in America.",
    details: ["January 2020 first release", "2021: two-year partnership, 1954-cut 501s", "2022: rhinestone version", "Shown at the Met in 2021"],
    sources: [{ t: "Denim Tears: collaboration story", u: "https://bfcm.denimtears.com/blogs/storytelling/denim-tears-x-levis-collaboration" }, { t: "Complex", u: "https://www.complex.com/style/denim-tears-cotton-wreath-levis-jeans/" }, { t: "Highsnobiety", u: "https://highsnobiety.com/p/denim-tears-levis-rhinestone-cotton-wreath" }],
    photos: [] },

  { id: "collab-kiko", line: "collab", lot: "×", name: "Kiko Kostadinov × Levi's", year: 2022, approx: true, fit: "baggy", fly: "zip",
    summary: "Experimental baggy denim and textured fabrics from the Bulgarian designer. Date approximate.",
    details: [],
    sources: [{ t: "SNKRDUNK: Levi's partnerships", u: "https://snkrdunk.com/en/magazine/2024/09/24/denim-reimagined-levis-iconic-partnerships/" }],
    photos: [] },

  { id: "collab-others", line: "collab", lot: "×", name: "More partners", year: 2024, approx: true, fit: "original", fly: "button",
    summary: "Other partners include Stüssy, Neighborhood (2010), Heron Preston, Beams, Ambush, ERL, Nike, New Balance, Lego and Google. Dates still to add.",
    details: ["Add each as its own entry as you confirm dates"],
    sources: [{ t: "Westminster Menswear Archive", u: "https://uwestminster.test.accesstomemory.net/2020-54" }, { t: "SNKRDUNK", u: "https://snkrdunk.com/en/magazine/2024/09/24/denim-reimagined-levis-iconic-partnerships/" }],
    photos: [] }
];
