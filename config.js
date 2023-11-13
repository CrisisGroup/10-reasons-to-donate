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
    '<a href="https://www.crisisgroup.org" target="_blank"><img id="icg" src="images/icg-oj.png" /></a><br /><video id="background-video" autoplay loop muted poster="images/poster.jpg"><source src="images/aerial.mp4" type="video/mp4"></video><h1>Ten Reasons to Donate to Crisis Group</h1><p class="hedp">In January, we set out our 10 Conflicts to Watch in 2023 to sound the alarm and urge the world to act. See the steps we have taken to mitigate the devastating effects of these conflicts over the past twelve months.</p>' +
    '<a id="freeExplore" href="#INTRO"> BEGIN &nbsp;&nbsp; &#8595; </a>',
  subtitle: "",
  byline: "",
  footer:
    '<h4>Credits</h4><strong>Lead Contributors</strong>: Comfort Ero and Richard Atwood<br /><strong>Visualizations & Design</strong>: Paul Franz, Claire Boccon-Gibod and Jorge Gutierrez Lucena <br /><strong>Support</strong>: Karim Lebhour<br /><br /><a href="https://www.crisisgroup.org/legal" target="_blank">Privacy Policy & Legal</a></div>',
  chapters: [
    {
      id: "INTRO",
      alignment: "left",
      hidden: false,
      title: "Global Conflicts",
      image: "",
      description:
        "We focused high-level advocacy efforts on addressing the broader ramifications of the Ukraine war and bridging divides between European policymakers and their Global South counterparts. We called for more robust European policies that help vulnerable countries deal with the war’s economic fallout." +
        "<br /><br />" +
        "Scroll down to continue. &#8595;</strong>",
      location: {
        center: [-26.170512, 23.867211],
        zoom: 2,
        pitch: 10.5,
        bearing: 7.2,
      },
      mapAnimation: "flyTo",
      rotateAnimation: true,
      callback: "enableFreetime",
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
        "<ul><li>Crisis Group President and CEO Comfort Ero meeting in Kyiv with Dmytro Kuleba, Minister of Foreign Affairs</li><li>Extensive field research in conflict-affected parts of Ukraine in order to understand the realities on the ground and shape policy recommendations</li><li>Commentary: Commentary: Why the War in Ukraine May Be a Long One</li><li>Op-ed: What will Ukraine do with Russian collaborators? Revenge would be a mistake</li><li>Q&A: The Russians Fighting for Ukraine</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#ukraine" target="_blank">&#8594; [Read more]</a>',
      location: {
        center: [32.06359, 49.68181],
        zoom: 5,
        pitch: 0,
        bearing: 0,
        speed: 0.6,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "disableFreetime",
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
        "<ul><li>Providing recommendations to all sides of the conflict on the ground: Armenian officials (meeting with Armenia’s former president and current PM), Azerbaijani officials involved in the peace talks and former de-facto Nagorno-Karabakh officials</li><li>Advocacy calls with U.S. officials and Congressmen on the ongoing crisis</li><li>Regular advocacy calls with the EU Special Representative for the South Caucasus</li><li>Testimony before the standing Committee of Foreign Affairs and International Development at Canadian House of Commons</li><li>Online event: Prospects for De-escalation </li><li>Statement: Responding to the Humanitarian Catastrophe in Nagorno-Karabakh</li><li>Report: Averting a New War between Armenia and Azerbaijan</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#armenia" target="_blank">&#8594; [Read more]</a>',
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
        "<ul><li>Meeting with UAE Head of Security - Israel-Iran tensions</li><li>The Iran-U.S./Israel Trigger List</li><li>Report: Iran’s Khuzestan: Thirst and Turmoil</li><li>Commentary: Striking the Right Balance with Iran</li><li>Commentary: The Impact of the Saudi-Iranian Rapprochement on Middle East Conflicts</li><li>Commentary: A Welcome Humanitarian Deal between the U.S. and Iran</li></ul>" +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#iran" target="_blank">&#8594; [Read more]</a>',
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
        "<ul><li>Speaking to the UN Counter Terrorism Executive Directorate on Pakistan’s relations with the Taliban</li><li>Commentary: Pakistan: At the Tipping Point?</li></ul>" +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#yemen" target="_blank">&#8594; [Read more]</a>',
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
        "Since President Jovenel Moïse was murdered in July 2021, Haiti has been paralysed by political gridlock and rampant gang violence. Services have collapsed. Cholera is spreading. Despite the dismal legacy of previous interventions, foreign troops may be the best hope for Haiti." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#haiti" target="_blank">&#8594; [Read more]</a>',
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
        "The biggest flashpoint between the U.S. and China – Taiwan – looks increasingly unstable, as Washington seeks to maintain primacy in the Asia Pacific and Beijing mounts a growing challenge. War is unlikely any time soon. But the global effects of a Taiwan conflict would dwarf the Ukraine war’s fallout, so any change in risk, however slight, is worth watching." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#taiwan" target="_blank">&#8594; [Read more]</a>',
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
      callback: "disableFreetime",
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
        "Governments in Burkina Faso, Mali and Niger are struggling to contain Islamist insurgencies. Discontent in the army has fuelled coups in Burkina and Mali. Outside interventions, led by France, are winding down amid widespread anti-Western sentiment. Russia’s increasing involvement is sowing further tension between Western and Sahelian governments." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#sahel" target="_blank">&#8594; [Read more]</a>',
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
        "The M23 rebels have re-emerged to wreak havoc in the eastern DRC. Kinshasa blames neighbouring Rwanda, adding a dangerous dimension. An East African mission, led by Kenya, is trying to restore calm, but if it fails, the eastern DRC could again become the centre of a regional proxy war." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#drc" target="_blank">&#8594; [Read more]</a>',
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
        "Pakistan enters an election year with a deeply divided body politic, with former premier Imran Khan whipping up opposition to the government and the powerful military. In addition, Pakistan is facing the aftermath of devastating floods, a struggling economy and resurgent Islamist militancy. The generals  vow to stay out of politics, but may feel compelled to get involved if conditions worsen." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#pakistan" target="_blank">&#8594; [Read more]</a>',
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
        "Two recent agreements have brought an end, for now, to a war in Ethiopia’s northern Tigray region that has taken hundreds of thousands of lives. But with key questions unresolved, plenty could go wrong. Much will depend on whether Tigray's forces disarm and Eritrean troops withdraw – and in what sequence." +
        '<div class="spacer"></div>' +
        '<a href="https://www.crisisgroup.org/global/10-conflicts-watch-2023#ethiopia" target="_blank">&#8594; [Read more]</a>',
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
        "These are Crisis Group's ten conflicts to watch in 2023. Read the full report here.",
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
