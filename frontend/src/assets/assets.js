import Logo from "./Logo.jpg";
import carLogo from "./TruenoCarLogo.png";
import tyre from "./tyre.png";
import collection from "./collection.png";
import takumi from "./takumi.jpg";
import creator from "./creator.jpg";
import contact from "./contact.jpg";

// icon
import star from "./star.png";
import stripe from "./logo_stripe.png";
import razorpay from "./logo_razorpay.png";

// HeroData
import porsche911 from "./Porsche-911.jpg";
import toyota86 from "./Toyota-AE86.jpg";
import nissanGtr from "./Nissan-GTR.jpg";

// products
import porsche1 from "./Porsche1.png";
import porsche2 from "./Porsche2.png";
import porsche3 from "./Porsche3.png";
import turbo1 from "./911Turbo1.png";
import turbo2 from "./911Turbo2.png";
import turbo3 from "./911Turbo3.png";
import turbo4 from "./911Turbo4.png";
import supra1 from "./Supra1.png";
import supra2 from "./Supra2.png";
import supra3 from "./Supra3.png";
import supra4 from "./Supra4.png";
import stingray1 from "./Stingray1.png";
import stingray2 from "./Stingray2.png";
import stingray3 from "./Stingray3.png";
import huracan1 from "./Huracan1.png";
import huracan2 from "./Huracan2.png";
import huracan3 from "./Huracan3.png";
import huracan4 from "./Huracan4.png";
import aston1 from "./Aston1.png";
import aston2 from "./Aston2.png";
import aston3 from "./Aston3.png";
import mazda1 from "./Mazda1.png";
import mazda2 from "./Mazda2.png";
import mazda3 from "./Mazda3.png";
import mazda4 from "./Mazda4.png";
import skyline1 from "./Skyline1.png";
import skyline2 from "./Skyline2.png";
import treuno1 from "./Treuno1.png";
import treuno2 from "./Treuno2.png";
import treuno3 from "./Treuno3.png";
import treuno4 from "./Treuno4.png";
import lan1 from "./LanEvo1.png";
import lan2 from "./LanEvo2.png";
import lan3 from "./LanEvo3.png";
import hondas1 from "./HondaS1.png";
import hondas2 from "./HondaS2.png";
import hondas3 from "./HondaS3.png";
import nismo1 from "./Nismo1.png";
import nismo2 from "./Nismo2.png";
import nismo3 from "./Nismo3.png";
import benz1 from "./Benz1.png";
import benz2 from "./Benz2.png";
import benz3 from "./Benz3.png";
import mustang1 from "./Mustang1.png";
import mustang2 from "./Mustang2.png";
import mustang3 from "./Mustang3.png";
import mustang4 from "./Mustang4.png";
import hellcat1 from "./HellCat1.png";
import hellcat2 from "./HellCat2.png";
import hellcat3 from "./HellCat3.png";
import hellcat4 from "./HellCat4.png";
import aventador1 from "./Aventador1.png";
import aventador2 from "./Aventador2.png";
import aventador3 from "./Aventador3.png";
import aventador4 from "./Aventador4.png";
import fordgt1 from "./FordGT1.png";
import fordgt2 from "./FordGT2.png";

export const assets = {
  carLogo,
  Logo,
  tyre,
  collection,
  takumi,
  creator,
  contact,
};

export const icons = {
  star,
  stripe,
  razorpay,
};

export const HeroData = [
  {
    _id: "aaaaa",
    brand: "Porsche",
    name: " 911 turbo",
    src: turbo1,
    year: "1975",
    type: "Sports Car",
    scale: "1:64",
  },
  {
    _id: "aaaah",
    src: treuno2,
    brand: "Toyota",
    name: "Sprinter Trueno AE86",
    year: "1986",
    type: "Sports Car",
    scale: "1:64",
  },
  {
    _id: "aaaak",
    src: nismo3,
    brand: "Nissan",
    type: " Supercar",
    name: "GT-R Nismo GT3",
    year: "2019",
    scale: "1:64",
  },
];

export const products = [
  {
    _id: "aaaaa",
    model: "Porsche 911 Turbo", //done
    images: [turbo1, turbo2, turbo3, turbo4], //done
    year: "1975", //done
    type: "Sports Car", //done
    price: "99.95",
    scale: "1:64", //done
    dimension: "3.6 x 1.5", //done
    color: "yellow", //done

    collectors: true, //done
    limited: true, //done
    bestseller: false, //done

    release: "Dec-01", //done
    availability: "out", //done
    rating: "4.7",

    desc1:
      "The sixth generation of the range-topping Porsche 911 Turbo provides towering performance in a practical, stylish and functional package suitable for everyday use. Power comes from a revolutionary, 480-horsepower, twinturbocharged, 3.6-liter boxer engine featuring Porsche’s first application of variable turbine geometry (VTG). The Porsche 911 Turbo also offers a redesigned, electronically controlled all-wheel-drive system, and evolutionary styling.",
    desc2:
      "For the first time, the power unit of the Porsche 911 Turbo features an exhaust gas turbocharger with variable turbine geometry (VTG). The result is yet another increase in engine output, despite engine capacity remaining unchanged at 3.6 liters, up from 420 horsepower to 480 horsepower. Maximum torque, in turn, is up from 415 lb-ft to 460 lb-ft, and meaningful twist is on tap beginning at a low 1,950 rpm.",
    desc3:
      "Benefiting from a newly developed all-wheel-drive management system, the Porsche 911 Turbo is able to convert the enormous power of the engine into practical performance on the road with optimum traction in all conditions. The standard Porsche Traction Management (PTM) system features an electromagnetically controlled multiple-plate clutch for distribution of power front-to-rear. Responding within 100-milliseconds to both driver input and road conditions, PTM is able to immediately transmit more power to the wheels that can use it best whenever required.",
  },
  {
    _id: "aaaab",
    model: "Toyota GR Supra",
    images: [supra1, supra2, supra3, supra4],
    year: "1997",
    type: "Sports Car",
    price: "35.52",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "Red",
    collectors: false,
    limited: true,
    release: "Feb-20",
    availability: "in",
    bestseller: true,
    rating: "4.8",
    desc1:
      "Supra is powered by a high-performance, twin-cam, in-line six-cylinder, 24-valve, electronically fuel-injected engine. In normally aspirated trim, it produces 220 horsepower at 5,800 rpm and a maximum of 210 lb-ft of torque at 4,800 rpm. In addition to a specially tuned intake system, it incorporates split-exhaust manifolds for reduced engine back pressure, enhanced power output and greater fuel economy. The normally-aspirated Supra is available with either a five-speed manual and four-speed automatic transmission.",
    desc2:
      "Supra’s turbocharged engine produces 320 horsepower at 5,600 rpm and 315 lb-ft of torque at 4,000 rpm. Supra’s twin-sequential intercooled turbos provide quick response at low engine speeds and high-volume output at increased engine speeds. During low-speed operation, only one turbocharger operates, using less exhaust energy to improve response and torque from a standing start. In the middle-speed range, the second turbo comes to idle at a pre-set exhaust pressure for a smooth transition from the primary to the secondary turbocharger. Both turbos operate at full boost in the high-speed range.",
    desc3: "",
  },
  {
    _id: "aaaac",
    model: "Chevrolet Corvette Stingray",
    images: [stingray1, stingray2, stingray3],
    year: "2020",
    type: "Sports Car",
    price: "9.52",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "red",
    collectors: false,
    limited: false,
    release: "Aug-20",
    availability: "in",
    rating: "4.7",
    bestseller: false,
    desc1:
      "After years of speculation Chevrolet have made a mid-engined Corvette, featuring a 495 horsepower V8 and a 0-60 mph time of under 3 seconds. This is the 8th generation C8 Corvette which keeps the stingray badge that was brought back for the C7 model in 2014. The styling has been thoroughly updated, yet stays with the more angular features as seen with the C7. The biggest difference comes with the absence of the long hood traditionally seen on Corvettes. Instead the proportions of the C8 are more inline with other mid-engined cars such as the Ferrari 488, Honda NSX and Audi R8.",
    desc2:
      "Corvettes has often been dominated by their engine, and the C8 should not disappoint. The new LT2 naturally aspirated 6.2L V8 is tuned to produce 502 PS (369 kW) of power, and 470 lb-ft (637 Nm) of torque. This makes the C8 Corvette the most powerful base model of any generation. Chevrolet claims the LT2 has been designed to deliver excellent low-end torque and high-end power that should give excellent response at any rpm. A new eight-speed dual-clutch automatic transmission that was developed by TREMEC will come as standard, which means that unfortunately no manual gearbox will be available. This marks the first time a Corvette has been automatic only since the original Corvette in 1953. Still this new DCT box promises quicker launches, and a close-ratio gear spread from second through sixth gear and two cruising gears for seventh and eighth gears",
    desc3: "",
  },
  {
    _id: "aaaad",
    model: "Lamborghini Huracán",
    images: [huracan1, huracan2, huracan3, huracan4],
    year: "2015",
    type: "Supercar",
    price: "15.99",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "pink/blue",
    collectors: true,
    limited: true,
    release: "Oct-21",
    availability: "out",
    bestseller: false,
    bestseller: false,
    rating: "4.8",
    desc1:
      "The new baby Lamborghini has arrived, it’s a mid-engined V10, 2-door coupe with all-wheel drive, and it’s called the Huracan. After a long and successful run with the first baby Lambo, the Gallardo, Lamborghini have knocked it out the park yet again. The styling is perhaps the most important feature of any new Lamborghini, and the Huracan delivers in spades. It continues along the same forms as the Aventador, with striking shapes carved out of the bodywork, and creases in all in the right spots. The proportions make the Huracan seem aggressive, with a low stance that looks like it’s hungry to attack the road.The new baby Lamborghini has arrived, it’s a mid-engined V10, 2-door coupe with all-wheel drive, and it’s called the Huracan. After a long and successful run with the first baby Lambo, the Gallardo, Lamborghini have knocked it out the park yet again. The styling is perhaps the most important feature of any new Lamborghini, and the Huracan delivers in spades. It continues along the same forms as the Aventador, with striking shapes carved out of the bodywork, and creases in all in the right spots. The proportions make the Huracan seem aggressive, with a low stance that looks like it’s hungry to attack the road.",
    desc2:
      "Powering the whole show is the 5.2L V10, which delivers 610 PS (448 kW) of power and 413 lb-ft (560 Nm) of torque. This is fed through a new 7-speed dual-clutch transmission called “Lamborghini Doppia Frizione” (LDF), which sports three different dynamic systems; STRADA, SPORT and CORSA. These modes change the characteristics of the cars behaviour on the road and track to the drivers desired effect. Much like how Ferrari have done for several years now, the Huracan has this driver mode selector integrated on the steering wheel for quick and easy changes.",
    desc3:
      "Perhaps one of the most impressive stats for the new Huracan is the 0-62 mph sprint time of 2.5 seconds. That’s some blistering acceleration right there that even outperforms the bigger, more powerful Aventador by some margin. Lastly the claimed top speed has managed to sneak over the 200 mph mark, cementing the Huracan as a true entry into the supercar club.",
  },
  {
    _id: "aaaae",
    model: "Aston Martin DB5",
    images: [aston1, aston2, aston3],
    year: "1963",
    type: "Classic",
    price: "33.52",
    scale: "1:64",
    dimension: "3.6 x 1.5",
    color: "silver",
    collectors: true,
    limited: true,
    release: "Mar-21",
    availability: "in",
    bestseller: true,
    rating: "4.6",
    desc1:
      "The evolution of the DB4, the luxury grand tourer Aston Martin DB5 was designed by the Italian coach builder Carrozzeria Touring Superleggera. This is the most famous of the DB cars mainly for its role in the James Bond films first appearing in the 1964 installment called Goldfinger.",
    desc2:
      "The aluminium engine was enlarged from 3.7L to 4.0L taken from the performance Vantage model of the DB4. This was fitted with either a four-speed manual or 5-speed automatic transmission. All models of the DB5 were fitted with 2+2 seating configuration in a 2-door coupe body style.",
    desc3: "",
  },
  {
    _id: "aaaaf",
    model: "Mazda RX-7",
    images: [mazda1, mazda2, mazda3, mazda4],
    year: "2002",
    type: "Sports Car",
    price: "7.50",
    scale: "1:64",
    dimension: "3.6 x 1.5",
    color: "white",
    collectors: false,
    limited: false,
    release: "Jan-22",
    bestseller: false,
    availability: "in",
    rating: "4.5",
    desc1:
      "For the final production year Mazda have released a limited edition of the RX7, the Spirit R. The third-generation RX-7, first launched in 1991, has a particularly distinctive exterior design. Its lightweight, compact and high-output rotary engine enables the driver to feel superb driving pleasure. Epitomizing Mazda’s spirit of sports car, RX-7 has won popularity among the customers since its 1978 launch. Mazda envisions the production of the current RX-7 model (FD-3S) to come to an end in August 2002.",
    desc2:
      "The Type A, a two-seater with a five-speed manual transmission; the Type-B, a four-seater with a five-speed manual transmission; and the Type-C, a four-seater with a four-speed automatic transmission. All three models are equipped with common interior and exterior features, such as BBS-manufactured 17-inch wheels, red brake calipers, and interior panels with a special soft coating, while each model shows off its own equipment to make a difference from the other.",
    desc3:
      "The Type-A Spirit R is a two-seater model fitted with the Recaro-made exclusive red full bucket seats. These lightweight seats reduce the overall chassis weight of the vehicle by approximately 10 kg. Braking performance is enhanced through the use of large drilled type ventilated disk brakes for all four wheels and high rigid stainless mesh brake hoses. The Type-A Spirit R model is the ultimate RX-7, boasting the most outstanding driving performance in its history.",
  },
  {
    _id: "aaaag",
    model: "Nissan Skyline GT-R",
    images: [skyline1, skyline2],
    year: "1998",
    type: "Sports Car",
    price: "11.50",
    scale: "1:64",
    dimension: "3.6 x 1.5",
    color: "Silver",
    collectors: true,
    limited: true,
    release: "May-21",
    availability: "out",
    bestseller: true,
    rating: "4.8",
    desc1:
      "After cancelling the Skyline GT-R in 1973, Nissan revived the GT-R again in 1989. At the time Nissan was competing in Group A Racing with the Skyline GTS-R. Nissan wanted to retire the GTS-R in favor of a more competitive vehicle. The new generation GT-R, E-BNR32 chassis (commonly shortened to R32), was designed to dominate Group A racing.",
    desc2:
      "The R32 developed 206 kW / 276 hp and 266 lb-ft (361 Nm) of torque, it had a curb weight of 1,430 kg / 3,146 lbs. Nissan officially started its production run August 1989, and began its Group A campaign in 1990. Due to strict Group A homologation rules, Nissan was required to also sell a series of the Skyline GT-R which more accurately reflected the car they use in Group A racing. This series was called the Skyline GT-R ‘Nismo’ edition.",
    desc3:
      "The Skyline GT-R ‘Nismo’, introduced on February 22, 1990, has a total production of 560 units as required for the “Evolution” models regulation (over 500). Only 500 of the cars were sold to the public, with 60 being held by Nissan to turn into race cars. Its purpose is to homologate a number of aerodynamic changes used in Group A racing. Changes include additional ducts in the front bumper to improve airflow to the intercooler, a bonnet lip spoiler to direct more air into the engine bay, and an additional boot lip spoiler to provide more downforce. The ‘Nismo’ GT-R was only available in Gunmetal Grey.",
  },
  {
    _id: "aaaah",
    model: "Toyota AE86 Sprinter Treuno",
    images: [treuno1, treuno2, treuno3, treuno4],
    year: "1983",
    type: "Sports Car",
    price: "15.50",
    scale: "1:64",
    dimension: "3.6 x 1.5",
    color: "White",
    collectors: true,
    limited: false,
    release: "Nov-21",
    availability: "out",
    bestseller: false,
    rating: "4.8",
    desc1:
      "Toyota have revealed two hydrogen and battery electric concept cars using the iconic Corolla AE86. The BEV Concept features a 48 hp, 184 lb-ft electric motor borrowed from the Tundra hybrid pickup and a 13.6 kWh battery pack from the PHEV Prius. Key to this setup is the inclusion of a six-speed manual transmission, allowing manual shifting of gears with a clutch with the electric powertrain.",
    desc2:
      "For the H2 Concept, Toyota went with the Trueno body AE86 and converted the original 1.6L inline 4 engine to run on liquid hydrogen instead of petrol. This involved changing the injection system, fuel lines and engine timing and keeping everything else the same.",
    desc3: "",
  },
  {
    _id: "aaaai",
    model: "Mitsubishi Lancer Evolutin IV ",
    images: [lan1, lan2, lan3],
    year: "2008",
    type: "Sports Car",
    price: "9.00",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "white",
    collectors: false,
    limited: false,
    release: "Feb-22",
    availability: "in",
    bestseller: false,
    rating: "4.4",
    desc1:
      "Lancer Evolution X is loaded with the very latest in automotive engineering technology, including the S-AWC (Super All Wheel Control) vehicle dynamics control system and the newly developed, power-efficient Twin Clutch SST (Sport Shift Transmission). Lancer Evolution X is a new-generation high-performance 4WD sedan that allows a new category of driver access to Mitsubishi’s dynamic driving experience by underpinning speed with control, security and safety.",
    desc2:
      "Lancer Evolution X is powered by a new turbocharged engine that adds a high-performance turbocharger to the 4B11-type 2.0-liter 4-cylinder 16-valve DOHC MIVEC unit used in the Galant Fortis. Developing more power over the full rev range, this engine generates more torque at 422 Nm / 43.0 kg-m)/3500 rpm and has better response than its 4G63 predecessor. The new engine is also lighter and returns better environmental performance.",
    desc3:
      "The GSR is available with the new Twin Clutch SST 6-speed automated manual transmission that eliminates the need for a clutch pedal and provides slick, smooth shifting. Twin Clutch SST puts odd (1st, 3rd, 5th) and even (2nd, 4th and 6th) gears on separate input shafts each with its own clutch and, through tight cooperative control with the engine, switches between these clutches to realize seamless and lightning-fast shifting for feel-good acceleration. Because it uses clutches rather than a torque converter to transmit power, Twin Clutch SST allows superior power transmission efficiency with little loss of motive power and returns excellent fuel economy.",
  },
  {
    _id: "aaaaj",
    model: "Honda S2000",
    images: [hondas3, hondas1, hondas2],
    year: "1999",
    type: "Sports Car",
    price: "8.00",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "yellow",
    collectors: false,
    limited: false,
    release: "Jan-21",
    availability: "in",
    bestseller: false,
    rating: "4.4",
    desc1:
      "The Honda S2000 is a roadster manufactured by Honda Motor Company since April 1999. The car was created to celebrate the company’s 50th anniversary, and continues in the tradition of lightweight roadster “S” cars such as the S600 and S800. Like previous S cars, the name of the S2000 comes from its engine displacement of approximately 2000 cc (although Honda would later introduce a 2200 cc model, retaining the S2000 name). From its inception in 1999 to 2003, S2000s were manufactured at Honda’s Tochigi plant. S2000s since then have been manufactured at the Suzuka plant.",
    desc2:
      "Continuing in the tradition of its predecessors, the S2000 is rear wheel driven, with power being delivered via a Torsen limited slip differential mated to a six-speed manual transmission. The car is constructed using an X-bone monocoque frame which is extremely rigid, thus improving handling, road noise, and steering feel and feedback. Other features include double wishbone suspension, electronically-assisted steering, integrated roll hoops and an electrically powered canvas top that takes 6 seconds to operate, touted as the fastest opening top among all convertibles.",
    desc3: "",
  },
  {
    _id: "aaaak",
    model: "Nissan GT-R Nismo GT3",
    images: [nismo1, nismo2, nismo3],
    year: "2015",
    type: "SuperCar",
    price: "13.00",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "white",
    collectors: false,
    limited: true,
    release: "Dec-20",
    availability: "out",
    bestseller: true,
    rating: "4.9",
    desc1:
      "Records fall and dreams come true with the debut of the Nissan GT-R Nismo. This race-oriented model delivers “factory tuned” supercar dynamics with revolutionary enhanced aerodynamics and ultra-precise handling. The Nissan GT-R is already established as one of the best performing supercars in the automotive sphere, and now Nissan has drawn on decades of racing experience gathered by Nismo, the brand’s motorsport specialists, to develop the ultimate Nissan GT-R.",
    desc2:
      "The Nissan GT-R Nismo features exclusive styling that embraces the longstanding racing philosophy of form following function. It has numerous motorsports-inspired technologies to enhance the car’s performance through optimised aerodynamics, suspension and powertrain, creating a well-balanced machine that is at home on both the road and track.",
    desc3:
      "Under the hood, the 3.8-litre V6 VR38DETT engine benefits from the know-how that Nismo has gained from participating in such events as the world-renowned Nürburgring 24 hour race. Engine power has risen and is now rated at 591hp (441kW) and 481 lb ft (652 Nm) of torque.",
  },
  {
    _id: "aaaal",
    model: "Mercedes Benz AMG E 36",
    images: [benz1, benz2, benz3],
    year: "2017",
    type: "sedan Car",
    price: "9.50",
    scale: "1:64",
    dimension: "3.8 x 1.5",
    color: "black",
    collectors: false,
    limited: false,
    release: "Jan-22",
    bestseller: false,
    availability: "in",
    rating: "4.9",
    desc1:
      "Mercedes-Benz presented a superlative dream car in the guise of the S63 Cabriolet. For the first time in its 48-year history, Mercedes‑Benz’s sports car and high-performance brand is offering a four-seater Cabriolet in the S-Class segment, adding to its product portfolio an attractive alternative for automobile enthusiasts with a penchant for performance and luxury. The new model also offers its driver and up to three passengers space to travel in style. Its high-calibre statistics: 5.5-litre V8 biturbo engine with an output of 430 kW / 585 hp and peak torque of 900 Nm, AMG Performance 4MATIC all-wheel drive with rear-biased torque split as standard, acceleration from 0 to 100 km/h in 3.9 seconds and a high-performance composite brake system for optimum deceleration.",
    desc2:
      "The basis for the vehicle’s superior and dynamic character is provided by the particularly rigid bodyshell structure featuring innovative solutions such as the luggage compartment bulkhead made of magnesium. The increase in weight which is inherent to the design of a convertible has been limited by the use of a lightweight lithium-ion battery, AMG light-alloy wheels produced by means of a sophisticated forging process and the weight-optimised AMG high-performance composite brake system. In addition, large parts of the shell and the front section are made of aluminium, as is the vehicle’s rear end.",
    desc3: "",
  },
  {
    _id: "aaaam",
    model: "Ford Mustang Boss 302 - FALKEN Edition",
    images: [mustang1, mustang2, mustang3, mustang4],
    year: "1969",
    type: "Muscle Car",
    price: "13.50",
    scale: "1:64",
    dimension: "3.9 x 1.5",
    color: "green",
    collectors: true,
    bestseller: true,
    limited: false,
    release: "Sep-21",
    availability: "out",
    rating: "4.6",
    desc1:
      "For 1966, the GT 350 lost its Mustang tag and was marketed simply as the Shelby GT 350. The new model year also saw the introduction of non-white colors, including blue, red, green, and black. Other changes included special rear quarter-panel windows replacing the factory extractor vents, functional brake scoops on each side, and optional SelectShift 3-speed automatic, as well as an optional Paxton supercharger. The battery was no longer relocated to the trunk for 1966, and the over-rider traction bars were discontinued. The normal factory fold-down rear seat was optional. While early 1965 cars had black engine blocks, 1966 and later cars had their engines painted the regular factory Ford dark blue. The 1966 models came with a dual-exhaust exiting in the rear.",
    desc2:
      "The first 252 GT 350s for 1966 began as 1965 Mustang K-Code Fastbacks. These cars were specifically ordered by Shelby American for conversion into 1966 GT 350s. Upon delivery to Shelby-American, the cars were randomly picked for conversion. The Shelby VINs do not correspond in numerical order with Ford VINs. The Ford VINs were shipped in ‘blocks,’ but many differ significantly because the order they were taken for conversions.",
    desc3: "",
  },
  {
    _id: "aaaan",
    model: "Dodge Challenger SRT Hellcat",
    images: [hellcat1, hellcat2, hellcat3, hellcat4],
    year: "2015",
    type: "Muscle Car",
    price: "9.50",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "black",
    collectors: false,
    limited: false,
    release: "Aug-21",
    bestseller: false,
    availability: "in",
    rating: "4.5",
    desc1:
      "The Dodge Challenger Hellcat has taken the world by storm. Powered by stonking 707 horsepower supercharged 6.2L HEMI V8, the new Hellcat has no trouble turning rear tyres into smoke. At the time of release, the Hellcat Challenger and Charger stand as the most powerful production muscle cars ever. Owners of the Hellcat will receive two keys for their car, a black one that restricts power to 500 hp, and a red one that unlocks the full 707 hp.",
    desc2:
      "The big power bump is courtesy of a forged-steel crankshaft with induction-hardened bearing surfaces, High-strength forged-alloy pistons coupled to powder-forged connecting rods and heat-treated aluminum-alloy cylinder heads. The gearbox tasked with handling over 700 horses is the TorqueFlite eight-speed automatic transmission that is essentially an upgraded version of the unit found in regular Challengers. The Hellcat has gone on to earn praise the world over with an infectious fun factor that makes the car addictive to drive in all circumstances.",
    desc3:
      "The new 2015 Dodge Challenger SRT Hellcat is the ultimate performance muscle car,” said Tim Kuniskis, President and CEO – Dodge Brand, Chrysler Group LLC. “Dodge is the Mainstream Performance brand, and now combined with SRT, we are able to unleash a true GT car with an all-new driver-focused interior and the TorqueFlite eight-speed transmission combined with the most powerful V-8 Chrysler has ever produced. The Challenger Hellcat has been released!",
  },
  {
    _id: "aaaao",
    model: "Lamborghini Aventador S Roadster",
    images: [aventador1, aventador2, aventador3, aventador4],
    year: "2018",
    type: "SuperCar",
    price: "9.50",
    scale: "1:64",
    dimension: "3.6 x 1.5",
    color: "black",
    collectors: false,
    bestseller: true,
    limited: true,
    release: "Nov-21",
    availability: "out",
    rating: "4.7",
    desc1:
      "Open air driving has now come to the Lamborghini Aventador S, with the Roadster model debuting at the 2017 IAA Frankfurt Motor Show. Weighing only 25kgs more than the coupe model, the roadster still boasts impressive performance figures of 3.0 seconds flat for the 0-100 kph sprint, and a top speed of 350 kph. With their competitors opting for V8’s, turbos and hybrids, Lamborghini continues to retain the glorious naturally aspirated V12 that was developed as an all new engine when the Aventador was first released. This makes the Aventador S Roadster the only super sports car with an open top configuration to feature a mid-mounted V12 that sits behind the driver.",
    desc2:
      "The roadster looks very similar to its coupe sibling, with only the rear engine cover marking it as different. This engine cover uses a blade design the stretches from the back window to the rear providing an interesting look. The roof sections are obviously removable, though in traditional Lamborghini style, the process in entirely manual with no folding roof mechanism to be seen. These panels weight only 6 kg each and are finished in matte black carbon fiber.",
    desc3:
      "The new Aventador S Roadster sets new benchmarks in technology and performance on both road and track, with the roadster version adding a new dimension in driving enjoyment,” says Chairman and Chief Executive Officer, Stefano Domenicali. “The Aventador S Roadster offers the thrill of open air driving without compromising on driving dynamics or the occupants’ comfort, and adds a further luxurious dimension through the personalization options available.",
  },
  {
    _id: "aaaap",
    model: "Ford GT",
    images: [fordgt1, fordgt2],
    year: "2014",
    type: "SuperCar",
    price: "10.11",
    scale: "1:64",
    dimension: "3.7 x 1.5",
    color: "red/blue/white",
    collectors: false,
    bestseller: false,
    limited: true,
    release: "Feb-20",
    availability: "in",
    rating: "4.7",
    desc1:
      "The all-new 2005 Ford GT supercar comes to life in the form of three production road cars that honor the classic race cars in design and engineering ingenuity. Ford’s “Centennial Supercar” builds on the company’s product-led transformation and will be the flagship of Ford Division’s 2004 “Year of the Car” that will include the launches of the Ford Five Hundred sedan, Freestyle crossover and legendary Mustang – and then the Ford Futura mid-size sedan in 2005",
    desc2:
      "The Ford GT is our Centennial Supercar because it reaches into great moments from our past, while casting a light into the future,” said Chris Theodore, vice president, Ford Advance Product Creation. “As we celebrate our centennial, the Ford GT represents many of the technologies, processes and people that will help drive our next 100 years.",
    desc3: "",
  },
];
