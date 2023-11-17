var config = {
  style: "mapbox://styles/daltonwb/clox6awjn00ou01qjgirm2et5",
  accessToken:
    "pk.eyJ1IjoiZGFsdG9ud2IiLCJhIjoiOWdSSXFQSSJ9.HZyjh4g3TAAOAncwelv9Vw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  inset: false,
  theme: "light",
  projection: "globe",
  use3dTerrain: false,
  title:
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Reasons to Give to Crisis Group</h1><p class="hedp">In January, we set out our 10 Conflicts to Watch in 2023 to sound the alarm and urge the world to act. See the steps we have taken to mitigate the devastating effects of these conflicts over the past twelve months.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "left",
      hidden: false,
      title: "Global Conflicts",
      image: "",
      description:
        "We are at a difficult moment. Our world is facing a perfect storm of threats to both international and human security and conflict trends appear to be moving in the wrong direction. Behind the headlines, Crisis Group is working to provide pragmatic and actionable recommendations to governments, multilateral institutions and civil society organisations at all levels to prevent senseless death and suffering due to war. But we need your help to do more." +
        "<br /><br />" +
        "<strong>Scroll down to continue. &#8595;</strong>",
      location: {
        center: [-26.170512, 23.867211],
        zoom: 2,
        pitch: 10.5,
        bearing: 7.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "10CTW_LABELS",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "10CTW_LABELS",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "UKR",
      alignment: "left",
      hidden: false,
      title: "Ukraine",
      image: "",
      description:
        "We focused high-level advocacy efforts on addressing the broader ramifications of the Ukraine war and bridging divides between European policymakers and their Global South counterparts. We called for more robust European policies that help vulnerable countries deal with the war’s economic fallout." + "<div class='spacer'></div>" + "<ul><li>Crisis Group President and CEO Comfort Ero meeting in Kyiv with Dmytro Kuleba, Minister of Foreign Affairs</li><li>Extensive field research in conflict-affected parts of Ukraine in order to understand the realities on the ground and shape policy recommendations</li><li>Commentary: <a href='https://www.crisisgroup.org/europe-central-asia/eastern-europe/ukraine/why-war-ukraine-may-be-long-one' target='_blank'>Why the War in Ukraine May Be a Long One</a></li><li>Op-ed: <a href='https://www.theguardian.com/commentisfree/2023/jun/26/ukraine-russia-collaborators-revenge' target='_blank'>What will Ukraine do with Russian collaborators? Revenge would be a mistake</a></li><li>Q&A: <a href='https://www.crisisgroup.org/europe-central-asia/eastern-europe/ukraine/russians-fighting-ukraine' target='_blank'>The Russians Fighting for Ukraine</a></li></ul>",
      location: {
        center: [32.06359, 49.68181],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "NK",
      alignment: "left",
      hidden: false,
      title: "Armenia and Azerbaijan",
      image: "",
      description:
        "Crisis Group remains the go-to organisation for policymakers grappling with how to mitigate the humanitarian crisis provoked by the mass exodus of ethnic Armenians from Nagorno-Karabakh after Azerbaijan retook it by force in September and how to prevent a wider war by keeping peace talks between Yerevan and Baku on track." +
        '<div class="spacer"></div>' +
        "<ul><li>Providing recommendations to all sides of the conflict on the ground: Armenian officials (meeting with Armenia’s former president and current PM), Azerbaijani officials involved in the peace talks and former de-facto Nagorno-Karabakh officials</li><li>Advocacy calls with U.S. officials and Congressmen on the ongoing crisis</li><li>Regular advocacy calls with the EU Special Representative for the South Caucasus</li><li>Testimony before the standing Committee of Foreign Affairs and International Development at Canadian House of Commons</li><li>Online event: <a href='https://www.youtube.com/watch?v=6xSkNliW8yc' target='_blank'>Prospects for De-escalation</a></li><li>Statement: <a href='https://www.crisisgroup.org/europe-central-asia/caucasus/nagorno-karabakh-conflict/responding-humanitarian-catastrophe-nagorno' target='_blank'>Responding to the Humanitarian Catastrophe in Nagorno-Karabakh</a></li><li>Report: <a href='https://www.crisisgroup.org/europe-central-asia/caucasus/nagorno-karabakh-conflict/266-averting-new-war-between-armenia-and-azerbaijan' target='_blank'>Averting a New War between Armenia and Azerbaijan</a></li></ul>",
      location: {
        center: [46.038033, 39.985454],
        zoom: 8.04,
        pitch: 0,
        bearing: 0.0,
        speed: 0.4,
        bbox: [
          [43.1334, 38.568],
          [48.7189, 41.4763],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "nk_lines",
          duration: 2000,
          opacity: 0.8,
        },
        {
          layer: "nk_front",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "aze-label",
          duration: 3000,
          opacity: 1,
        },
        {
          layer: "arm-label",
          duration: 3000,
          opacity: 1,
        },
        {
          layer: "nk_1",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nk_2",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nk_3",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nk_front",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nk_1",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "nk_2",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "azer",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "armenia",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nk_lines",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "nk_front",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "nk_1",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "nk_2",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "nk_3",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "azer",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "armenia",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "aze-label",
          duration: 3000,
          opacity: 0,
        },
        {
          layer: "arm-label",
          duration: 3000,
          opacity: 0,
        },
      ],
    },
    {
      id: "IRAN",
      alignment: "right",
      hidden: false,
      title: "Iran",
      image: "",
      description:
        "We continue to promote ways to preserve space for nuclear diplomacy amid growing risks of the 2015 nuclear deal’s collapse and support continued dialogue between Iran and its Gulf Arab neighbours." +
        '<div class="spacer"></div>' +
        "<ul><li>Meeting with UAE Head of Security - Israel-Iran tensions</li><li><a href='https://www.crisisgroup.org/trigger-list/iran-us-trigger-list' target='_blank'>The Iran-U.S./Israel Trigger List</a></li><li>Report: <a href='https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/iran/241-irans-khuzestan-thirst-and-turmoil' target='_blank'>Iran’s Khuzestan: Thirst and Turmoil</a></li><li>Commentary: <a href='https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/iran/striking-right-balance-iran' target='_blank'>Striking the Right Balance with Iran</a></li><li>Commentary: <a href='https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/iran-saudi-arabia/impact-saudi-iranian' target='_blank'>The Impact of the Saudi-Iranian Rapprochement on Middle East Conflicts</a></li><li>Commentary: <a href='https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/iran/welcome-humanitarian-deal-between-us-and' target='_blank'>A Welcome Humanitarian Deal between the U.S. and Iran</a></li><li>Q&A: <a href='https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/iran-united-states/understanding-risks-us-iran' target='_blank'>Understanding the Risks of U.S.-Iran Escalation amid the Gaza Conflict</a></li></ul>",
      location: {
        center: [51.38546, 35.79524],
        zoom: 17.09,
        pitch: 12,
        bearing: -8,
        speed: 0.7,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "prison",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "prison-label",
          duration: 4000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "prison",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "prison-label",
          duration: 4000,
          opacity: 0,
        },
      ],
    },
    {
      id: "PAK",
      alignment: "right",
      hidden: false,
      title: "Pakistan",
      image: "",
      description:
        "The danger of violence looms over the October polls. Economic woes weigh heavily on the 230 million Pakistanis: foreign exchange reserves are dangerously low, while inflation is spiralling, along with unemployment. We continue to promote dialogue within Pakistan and globally as regards political contestation and the factors behind the surge in militancy." +
        '<div class="spacer"></div>' +
        "<ul><li>Speaking to the UN Counter Terrorism Executive Directorate on Pakistan’s relations with the Taliban</li><li>Commentary: <a href='https://www.crisisgroup.org/asia/south-asia/pakistan/pakistan-tipping-point' target='_blank'>Pakistan: At the Tipping Point?</a></li><li>Q&A: <a href='https://www.crisisgroup.org/asia/south-asia/pakistan-afghanistan/pakistans-mass-deportation-afghans-poses-risks-regional-stability' target='_blank'>Pakistan’s Mass Deportation of Afghans Poses Risks to Regional Stability</a></li></ul>",
      location: {
        center: [73.09458, 33.73062],
        zoom: 14.41,
        pitch: 59.0,
        bearing: 57.59,
        speed: 0.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "pak-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "pak-label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "HT",
      alignment: "right",
      hidden: false,
      title: "Haiti",
      image: "",
      description:
        "We advocated for an inclusive political agreement in Haiti, a necessary prerequisite for the deployment of an international mission to fight the gangs that have captured most of Port-au-Prince and its surroundings." +
        "<div class='spacer'></div>" + "<ul><li>Meeting with the UNHCR on gangs and politics</li><li>Meeting with the UN on sanctions</li><li>Meeting with the U.S. mission to the UN on Haiti</li><li>Video: <a href='https://www.crisisgroup.org/latin-america-caribbean/haiti/frank-giustra-devastating-situation-haiti' target='_blank'>Frank Giustra on the devastating situation in Haiti</a></li><li>Q&A: <a href='https://www.crisisgroup.org/latin-america-caribbean/haiti/haitians-turn-mob-justice-gang-threat-festers' target='_blank'>Haitians Turn to Mob Justice as the Gang Threat Festers</a></li></ul>",
      location: {
        center: [-72.3396386, 18.5776524],
        zoom: 15,
        pitch: 45,
        bearing: 0,
        speed: 0.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [
        {
          layer: "satellite",
          duration: 5000,
          opacity: 1,
        },
        {
          layer: "haiti-label",
          duration: 3000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "haiti-label",
          duration: 3000,
          opacity: 0,
        },
      ],
    },
    {
      id: "TW",
      alignment: "left",
      hidden: false,
      title: "Taiwan",
      image: "",
      description:
        "We aim to promote regional stability, including by recommending steps to reduce escalating tensions in the Taiwan Strait, and raise awareness in both Beijing and other Asian capitals of how actions they take can shift threat perceptions." + '<div class="spacer"></div>' + "<ul><li>Video: <a href='https://www.crisisgroup.org/asia/north-east-asia/taiwan-strait/de-escalating-tensions-taiwan-strait' target='_blank'>De-escalating Tensions in the Taiwan Strait</a></li><li>Report: <a href='https://www.crisisgroup.org/asia/north-east-asia/taiwan-strait-china/333-preventing-war-taiwan-strait' target='_blank'>Preventing War in the Taiwan Strait</a></li></ul>",
      location: {
        center: [120.93981, 23.80906],
        zoom: 6.25,
        pitch: 0,
        bearing: 0,
        bbox: [
          [115.8939, 19.8558],
          [126.1021, 26.9186],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "taiwan",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tw-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "prc-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "taiwan",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "tw-label",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "prc-label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "SAH",
      alignment: "right",
      hidden: false,
      title: "The Sahel",
      image: "",
      description:
        "Our analysis remains highly sought-after at a time of great uncertainty in the Sahel. Jihadist militants are extending their reach from the Sahel to West African coastal countries. We continue to promote ways to prevent fresh conflict which could have devastating consequences for the region’s stability." + '<div class="spacer"></div>' +
        '<ul><li>World Bank briefing on Jihadist governance in the Sahel</li><li>Meeting European diplomats on the past, present and future of the Sahel region</li><li>Meeting with African Union (AU) representative(s)</li><li>Video: <a href="https://www.crisisgroup.org/africa/sahel-niger/worrying-new-phase-sahel-crisis" target="_blank">A Worrying New Phase in the Sahel Crisis</a></li><li>Report: <a href="https://www.crisisgroup.org/africa/sahel/burkina-faso-niger-benin/310-containing-militancy-west-africas-park-w" target="_blank">Containing Militancy in West Africa’s Park W</a></li><li>Q&A: <a href="https://www.crisisgroup.org/africa/sahel/niger/tentative-de-coup-detat-au-niger-eviter-la-confrontation-armee" target="_blank">The Attempted Coup in Niger: Avoiding Armed Conflict</a></li><li>Q&A: <a href="https://www.crisisgroup.org/africa/sahel/niger/niger-containing-fallout-coup" target="_blank">Niger: Containing the Fallout from the Coup</a></li><li>Video: <a href="https://www.crisisgroup.org/impact-stories-conflict-prevention" target="_blank">IMPACT: Stories of Conflict Prevention - The Sahel</a></li></ul>',
      location: {
        center: [0.707375, 14.97101],
        zoom: 14,
        pitch: 0,
        bearing: 0.0,
        speed: 0.9,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "rotateData",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "mali_base",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "mali-label",
          duration: 7000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "mali_base",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "mali-label",
          duration: 1000,
          opacity: 0,
        },
      ],
    },
    {
      id: "DRC",
      alignment: "right",
      hidden: false,
      title: "Democratic Republic of the Congo and the Great Lakes",
      image: "",
      description:
        "We continue to highlight ways to reduce violence in the east, including by calming tensions among the DRC’s neighbours. We will promote peaceful elections." + '<div class="spacer"></div>' +
        '<ul><li>Meeting with the UAE delegation to the UN on electoral preparations and violence in the east</li><li>Briefing to the Africa Working Group of the European Parliament staff</li><li>Meeting with French delegates from Armies and Foreign Affairs ministries on the situation in eastern DRC and M23</li><li>Q&A: <a href="https://www.crisisgroup.org/africa/great-lakes/democratic-republic-congo-rwanda/dangerous-escalation-great-lakes" target="_blank">A Dangerous Escalation in the Great Lakes</a></li><li>Q&A: <a href="https://www.crisisgroup.org/africa/great-lakes/democratic-republic-congo/massacre-goma-clouds-dr-congos-elections-and-un" target="_blank">Massacre in Goma Clouds DR Congo’s Elections and UN Mission’s Future</a></li><li>Report: <a href="https://www.crisisgroup.org/africa/great-lakes/democratic-republic-congo/312-elections-en-rd-congo-limiter-les-risques-de-violence" target="_blank">Elections in DR Congo: Reducing the Risk of Violence</a></li><li><a href="https://icg-prod.s3.amazonaws.com/s3fs-public/2023-10/on-the-horizon-october-2023%205.pdf" target="_blank">On the Horizon: Democratic Republic of the Congo</a></li></ul>',
      location: {
        center: [29.22326, -1.66392],
        zoom: 13.9,
        pitch: 61.5,
        bearing: -147.1,
        speed: 0.8,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "goma-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "goma-label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "YEM",
      alignment: "right",
      hidden: false,
      title: "Yemen",
      image: "",
      description:
        "We continue to advocate for humanitarian measures." + '<div class="spacer"></div>' + '<ul><li>Meeting with UN Envoy office on political road map</li><li>EEAS call - EU Special Envoy to Yemen</li><li>UNSC presentation on situation of women in Yemen</li><li>Op-ed: <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/conflict-yemen-more-proxy-war" target="_blank">The Conflict in Yemen Is More Than a Proxy War</a></li><li>Q&A: <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/catching-back-channel-peace-talks-yemen" target="_blank">Catching Up on the Back-channel Peace Talks in Yemen</a></li><li>Commentary: <a href="https://www.crisisgroup.org/middle-east-north-africa/gulf-and-arabian-peninsula/yemen/yemens-troubled-presidential-leadership-council" target="_blank">Yemen’s Troubled Presidential Leadership Council</a></li></ul>',
      location: {
        center: [44.17527, 15.36405],
        zoom: 11.85,
        pitch: 58.74,
        bearing: 72.0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "yemen-city-label",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "satellite",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "satellite",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "yemen-city-label",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "ETH",
      alignment: "right",
      hidden: false,
      title: "Ethiopia",
      image: "",
      description:
        "We advocate for steps toward a truce between the government and OLA, as well as inclusive talks about Oromia’s political future." + '<div class="spacer"></div>' + '<ul><li>Briefing at the biannual meeting on the implementation of the UN regional prevention strategy for the Horn of Africa</li><li>Briefing to the UNHCR Horn and East Africa Team on the peace process in Tigray</li><li>Commentary: <a href="https://www.crisisgroup.org/africa/horn-africa/ethiopia/what-facebook-does-and-doesnt-have-do-ethiopias-ethnic-violence" target="_blank">What Facebook Does (and Doesn’t) Have to Do with Ethiopia’s Ethnic Violence</a></li><li>Statement: <a href="https://www.crisisgroup.org/africa/horn-africa/ethiopia/turning-pretoria-deal-lasting-peace-ethiopia" target="_blank">Turning the Pretoria Deal into Lasting Peace in Ethiopia</a></li><li>Video: <a href="https://www.crisisgroup.org/africa/horn-africa/ethiopia/what-now-ethiopia-tigray-peace-deal" target="_blank">What now for the Ethiopia-Tigray peace deal?</a></li><li><a href="https://icg-prod.s3.amazonaws.com/s3fs-public/2023-10/on-the-horizon-october-2023%203.pdf" target="_blank">On The Horizon early warning entry</a></li><li>Briefing: <a href="https://www.crisisgroup.org/africa/horn-africa/ethiopia/b194-ethiopias-ominous-new-war-amhara" target="_blank">Ethiopia’s Ominous New War in Amhara</a></li><li>UK parliamentary briefing about peace process in Tigray</li></ul>',
      location: {
        center: [38.72552, 14.45301],
        zoom: 7.22,
        pitch: 0,
        bearing: 0,
        bbox: [
          [34.7296, 11.8328],
          [42.5623, 17.3987],
        ],
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "ethiopia",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "eritrea-label",
          duration: 3000,
          opacity: 1,
        },
        {
          layer: "ethiopia-label",
          duration: 3000,
          opacity: 1,
        },
        {
          layer: "tigray",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "tigray-label",
          duration: 3000,
          opacity: 1,
        },
        {
          layer: "satellite",
          duration: 5000,
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "ethiopia",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "eritrea-label",
          duration: 3000,
          opacity: 0,
        },
        {
          layer: "ethiopia-label",
          duration: 3000,
          opacity: 0,
        },
        {
          layer: "tigray-label",
          duration: 3000,
          opacity: 0,
        },
        {
          layer: "tigray",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
    {
      id: "END-1",
      alignment: "right",
      hidden: false,
      title: "Dive Deeper With Our Analysis",
      image: "",
      description:
        "Our decades of experience, trusted networks and high-level access mean that our independent analysis and recommendations for action are heard and respected by those with the power to curb the violence. Our work is powered by your support." + "<div class='spacer'></div>" + "We invite you to join us in our pursuit of peace and to continue to help us save lives."  + "<div class='spacer'></div>" + "<button class='donate-button'><a href='https://www.crisisgroup.org/donate' target='_blank'>Donate to Crisis Group</a></button>",
      location: {
        center: [-26.170512, 23.867211],
        zoom: 2,
        pitch: 10.5,
        bearing: 7.2,
        speed: 0.5,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
      onChapterEnter: [
        {
          layer: "dots",
          duration: 2000,
          opacity: 0.8,
        },
        {
          layer: "outlines",
          duration: 2000,
          opacity: 0.6,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 1,
        },
        {
          layer: "10CTW_LABELS",
          duration: 2000,
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "dots",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "outlines",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "layer-with-pulsing-dot",
          duration: 2000,
          opacity: 0,
        },
        {
          layer: "10CTW_LABELS",
          duration: 2000,
          opacity: 0,
        },
      ],
    },
  ],
};
