export const BUTTON_VARIANTS = {
  LINK: "link",
  OUTLINE: "outline",
}
export const ROUTS = {
  HOME: "/",
  ABOUT: "/about",
  CONTACT: "/contact",
  CHARGERS: "/chargers",
}
export const LINK_NAMES = {
  HOME: "home",
  ABOUT: "about",
  CONTACT: "contact",
  CHARGERS: "chargers",
}

export const HomeContent = {
  hero: {
    title:
      "Ditch The Diesel, fuel at home, or work place with cleaner, and cheaper electricity!",
    subTitle:
      "are OLEV approved and certified to install EV home, and business chargers. Based in the local area.",
    smallText:
      "There's a OLEV GRANT for homeowners of up to £350 for installation if you qualify.",
  },
  info: {
    card: {
      title: "OLEV Grant",
      body: `Because <span style='color:#27AE60;'>ECO</span><span style='color:#205FCE;'>EV</span><small>UK</small style='color:#27AE60;'> are OLEV approved and certified we will handle all the paper work for you to get your grant. Giving us a call is the fastest and easiest way. For more information you can check the government website`,
    },
    green: {
      title: "Do You Qualify For The OLEV Grant?",
      body:
        "The OLEV grant offers drivers of electric vehicles £350 off the total cost and home car charger installation. The electric car grant is available for the majority of plug in vehicles. You can claim one electric vehicle charging station per eligible vehicle and up to two per household.",
      listTitle: "To qualify you'll need...",
      ul: {
        one: "Off-street parking",
        two:
          "Your charger must be installed by an OLEV approved and registered installer",
        three: "Your charge point must be a smart charger",
        four: "Your Electric vehicle was purchased after 1st October 2016",
      },
    },
  },
  Installation: {
    p1:
      "Our basic installation cost is £349 + VAT. All installations will require a double pole isolator which is charged at £39.80 + VAT. There are then variable costs that relate to your specific installation or choice of charging unit.",
    p2:
      "Variables include: Does your charger require an earth rod? Does your installation require a garage consumer unit? What distance from your electrical supply is your charger located?",
    p3: "Any of these costs can be discussed at, or prior to our survey.",
    p4:
      " like to be open and honest about the cost of your charger. We will provide a written quotation detailing all costs. There are no hidden charges, as no one likes that sort of surprise!",
  },
  finance: {
    p1:
      " have partnered with Kandoo to finance your charger over a period of time suited to your needs.",
    p2:
      "Check eligibility with multiple lenders in minutes - without affecting your credit score",
  },
}
export const loevImg = require("../assets/images/loev.png").default

// export const ContactContent = {
//   body:
//     "To get a quote or even just to answer any questions you may have, please feel free to  get in touch. We will be happy to answer any questions you may have.",
//   subtitle: "call us on:",
// }

// export const ChargersContent = [
//   {
//     image: [
//       require("../../../assets/chargers/eo/black.png").default,
//       require("../../../assets/chargers/eo/blue.png").default,
//       require("../../../assets/chargers/eo/silver.png").default,
//       require("../../../assets/chargers/eo/white.png").default,
//     ],
//     title: "EO Mini Pro",
//     cardBody:
//       "Control and monitor your charger via your smartphone through the JuiceNet app, powered by EnelX.  Plan charging around your off-peak electricity using the built-in  scheduling feature.",
//     body: [
//       "Control and monitor your  charger via your smartphone through the JuiceNet app, powered by EnelX.  Plan charging around your off-peak electricity using the built-in  scheduling feature. Monitor and adjust power consumption. See live  updates of your vehicle's charge status. ",
//     ],
//     price: "£699",
//     list: [
//       "Compatible with all plug-in vehicle brands",
//       "Power Ratings: 3.6kW & 7kW",
//       "Universal socket or Tethered (Type 1 or 2)",
//       "Smartphone app controlled",
//       "3-year product warranty",
//       "18th Edition IET Wiring Compliant",
//       "OLEV approved: Home Charge Grant (£500)",
//     ],
//   },
//   {
//     image: [
//       require("../../../assets/chargers/andersen/charcoal.png").default,
//       require("../../../assets/chargers/andersen/cotswoldoak.png").default,
//       require("../../../assets/chargers/andersen/frenchwalnut.png").default,
//       require("../../../assets/chargers/andersen/malmoblue.png").default,
//       require("../../../assets/chargers/andersen/nearlyblack.png").default,
//       require("../../../assets/chargers/andersen/puttystone.png").default,
//       require("../../../assets/chargers/andersen/ruby.png").default,
//       require("../../../assets/chargers/andersen/sorongteak.png").default,
//       require("../../../assets/chargers/andersen/steel.png").default,
//     ],
//     title: "Andersen A2",
//     cardBody:
//       "The more stylish choice with a wide selection of colors, and finishes. The tethered cable packs away neatly with the type 2 plug tucked easily accessible under the lid on the top of the unit.",
//     body: [
//       "Andersen A2 is a thing of beauty. Make a feature of your chargepoint with this unit.",
//       "Customize your A2 with a choice of colours for surround and front panel.",
//       "The tethered cable packs away neatly with the type 2 plug tucked easily accessible under the lid on the top of the unit. The brushes on the charger also clean the cable each time it is packed away or taken out for use.",
//     ],

//     price: "£995",
//     list: [
//       "Compatible with all type 2 electric and hybrid cars",
//       "Certified for all European countries",
//       "3 years of Andersen care cover",
//       "No need for earth rods",
//       "18th edition compliant",
//     ],
//   },
//   {
//     image: [
//       require("../../../assets/chargers/project/noapp.jpg").default,
//       require("../../../assets/chargers/project/projectapp.jpg").default,
//     ],
//     title: "Project EV Pro Earth",
//     cardBody:
//       "This unit is ideal for locations with little or no wifi signal, as it can be provided with integrated 4g and sim card to connect to the internet.",
//     body: [
//       "The Project EV Pro Earth features as standard the option to lock your EV cable to the unit via the smart app, essentially making your charger tethered.  The benefit of this is that should your cable become damaged replacement is a DIY job with no need for an electrical engineer.",
//       "This unit is ideal for locations with little or no WiFi signal, as it can be provided with integrated 4g and sim card to connect to the internet.",
//     ],
//     price: "£599",
//     list: [
//       "Smart charging (see smart features)",
//       "Built in earthing - no earthing required",
//       "7.3kW single phase",
//       "Works with all plug-in vehicle brands",
//       "Full electrical protection, including over/under temperature",
//       "Smart app controlled",
//       "Solar compatible - with existing installations",
//       "IP65 fully weather resistant",
//       "Fully OLEV accredited and 18th edition compliant",
//       "Intelligent power adjustment, emergency stop, Wifi/APP/ethernet monitoring",
//       "5 year manufacturer's warranty (T&Cs apply)",
//     ],
//   },
//   {
//     image: [
//       require("../../../assets/chargers/podpoint/tethered.png").default,
//       require("../../../assets/chargers/podpoint/universal.jpg").default,
//     ],
//     title: "Podpoint solo",
//     cardBody:
//       "The Podpoint solo is one of the few chargers with inbuilt safety technology to detect any faults within your electrical network which may result in danger to the user.",
//     body: [
//       "The Podpoint solo is one of the few chargers with inbuilt safety technology to detect any faults within your electrical network which may result in danger to the user. This eliminates the need for the installation of an earth rod which is required for many other chargers on the market",
//     ],

//     price: "£650",
//     list: [
//       "Wi-Fi enabled smart charger which pairs with the Pod Point App (iOS  & Android devices) via Wi-Fi, so you can view all your charging  activity and associated costs on your smartphone",
//       "The Wi-Fi connection also enables remote support and over-the-air  software updates that can enhance the performance of your charge point",
//       "Includes automatic power balancing (load balancing) so you can charge your car in harmony with your home",
//       "Available with charging speeds of 3.6kW or 7.2kW",
//       "Provides an electric vehicle with up to 30 miles of range per hour (RPH)",
//       "Compatible with all plug-in vehicles",
//       "Available with a universal socket or tethered type 1 / type 2 connector",
//       "Tethered lead 4.8m in length",
//     ],
//   },
// ]

// export const ChargersInfo = [
//   {
//     title: "charge over night off peak...",
//     body:
//       "Ditch the diesel, save the environment all while saving money. Imagine never needing to go to the petrol station again. Freedom!!!",
//   },
//   {
//     title: "smart chargers can select the greenest tariffs...",
//     body:
//       "We supply and fit a range of charging units starting from just £299, with a OLEV GRANT for homeowners of up to £350 for the cost of installation if you qualify. ",
//   },
// ]

// export const AboutContent = {
//   main: {
//     p1:
//       "<span style='color:#27AE60;'>ECO</span><span style='color:#205FCE;'>EV</span> is one of the leading installers of electric vehicle charging units for East Yorkshire and North Lincolnshire. We supply and install units for both home owners and commercial business. Our friendly professional service is second to none.",
//     p2:
//       "Our goal is to help with the transition to a greener more renewable future, some of these chargers combined with the right electricity providers you can select to charge at the greenest, or most cost effective times.",
//     p3:
//       "All charge points are installed by a fully qualified installation expert and all work is guaranteed, and insured. Peace of mind comes fully installed along with any of <span style='color:#27AE60;'>ECO</span><span style='color:#205FCE;'>EV</span>'s electric vehicle chargers.",
//     p4:
//       "<span style='color:#27AE60;'>ECO</span><span style='color:#205FCE;'>EV</span> use Stroma approved engineers, so quality and expertise is guaranteed.",
//   },
//   green: {
//     title: "Electric cars and the future...",
//     body:
//       "Electric cars used to demand personal sacrifice. Today they offer faster acceleration, better handling, less maintenance, and in most cases lower ownership costs than the petrol equivalent. Without a second thought, you plug in your car where you park overnight, like your phone. Newer models offer 200 – 500 miles of range. If that isn’t enough, your touchscreen will unlock thousands of high-speed public charging boxes, an inconspicuous network that already exists and is growing.",
//   },
//   avatar: {
//     paul: {
//       image: require("../../../assets/images/paul.png").default,
//       body:
//         "The founder of <span style='color:#27AE60;'>ECO</span><span style='color:#205FCE;'>EV</span> Paul has been a builder, and a electrician for over 40years in the local area.",
//     },
//     dad: {
//       image: "",
//       body: "Paul's dad, i can't remember his name",
//     },
//   },
// }
