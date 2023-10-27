import { IProduct } from "../interface/IProduct";

export const Product: IProduct[] = [
  {
    id: 1,
    title: "PlayStation 5 Digital Edition (2022)",
    description:
      "PlayStation 5 Digital Edition gir deg tilgang til en nestegenerasjons gamingopplevelse med fotorealistisk strålesporende grafikk, nærmest umiddelbar innlastningstid og fengende 3D-lyd. Dette er den nye normen.",
    price: 5895,
    category: "Gaming",
    quantity: 1,
    imgLink:
      "https://www.elkjop.no/image/dv_web_D1800010021173276/533977/playstation-5-digital-edition-2022--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: 2,
    title: "Samsung 65 S95B 4K OLED TV",
    description:
      "Samsung 65” S95B 4K QD OLED Smart-TV kombinerer et ekstremt velltenkt design med avansert 4K UHD Smart-TV-teknologi, en kraftig prosessor, Quantum Dot-teknologi og AI-funksjoner for en perfekt seeropplevelse.",
    price: 29987,
    category: "TV",
    quantity: 1,
    imgLink:
      "https://www.elkjop.no/image/dv_web_D1800010021210092/431120/samsung-65-s95b-4k-oled-tv-2022--pdp_zoom-3000--pdp_main-960.jpg",
  },
  {
    id: 3,
    title: "Siemens Vaskemaskin WM14N26EDN (Hvit)",
    description: "WM14N26EDN, Vaskemaskin, frontmatet",
    price: 4995,
    category: "Hvitevarer",
    quantity: 1,
    imgLink:
      "https://www.elkjop.no/image/dv_web_D1800010021571654/609590/siemens-vaskemaskin-wm14n26edn-hvit--pdp_zoom-3000.jpg",
  },
  {
    id: 4,
    title: "Xbox Series X 1 TB (sort)",
    description:
      "Få ekte 4K-gaming med den nye Xbox Series X takket være 12 TFLOPS grafisk prosesseringsstyrke og 16 GB grafisk minne. Opplev alle typer innhold med den innebygde Blu-Ray-spilleren og kompatibilitet med spill fra fire tidligere Xbox-generasjoner.",
    price: 6795,
    category: "Gaming",
    quantity: 1,
    imgLink:
      "https://www.elkjop.no/image/dv_web_D180001002520756/218667/xbox-series-x-1-tb-sort--pdp_zoom-3000.jpg",
  },
  {
    id: 5,
    title: "TCL 75 QLED870 4K Smart TV (2023)",
    description:
      "TCL 75 QLED870 4K Smart TV egner seg godt til gaming, og leverer flotte bilder og god lydkvalitet takket være Quantum Dot Technology, AiPQ 3.0 Processor og Dolby Vision,. Google TV og Google Assistant gjør bruk av TV-en til en lek.",
    price: 14990,
    category: "TV",
    quantity: 1,
    imgLink:
      "https://www.elkjop.no/image/dv_web_D1800010021443125/600158/tcl-75-qled870-4k-smart-tv-2023--pdp_zoom-3000.jpg",
  },
  {
    id: 6,
    title: "Bosch Series 2 oppvaskmaskin SMU2HVW70S",
    description: "SMU2HVW70S, Oppvaskmaskin til underbygging",
    price: 4995,
    category: "Hvitevarer",
    quantity: 1,
    imgLink:
      "https://www.elkjop.no/image/dv_web_D1800010021580546/206069/bosch-series-2-oppvaskmaskin-smu2hvw70s--pdp_zoom-3000.jpg",
  },
];

// Kunne hatt slik filstruktur for å legge inn dette, men foreløpig setter jeg alt i ett.

//Category/index.ts
// Schema

// Category/add.ts
export function addProduct(newProduct: IProduct) {
  Product.push(newProduct);
}

// Category/findOne.ts
export function findProductById(id: number): IProduct | null {
  return Product.find((product) => product.id === id) || null;
}
