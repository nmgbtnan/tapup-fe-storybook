import { 
  Inter, 
  Roboto_Condensed, 
  Racing_Sans_One,
  League_Spartan,
  Roboto_Mono,
  Montserrat,
  Open_Sans,
  Raleway,
  Bebas_Neue,
  Lato,
  Kaushan_Script,
  Comic_Neue,
} from 'next/font/google'
 

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-roboto-condensed",
});

export const racing_sans_one = Racing_Sans_One({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-racing-sans-one",
  weight:['400'],
})

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-league-spartan",
})

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-roboto-mono",
})

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-montserrat",
})

export const open_sans = Open_Sans({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-open-sans",
})

export const raleway = Raleway({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-raleway",
}) 

export const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-bebas-neue",
  weight:['400'],
})

export const lato = Lato({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-lato",
  weight:['100','300','400','700','900'],
})

export const kaushan_script = Kaushan_Script({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-kaushan-script",
  weight:['400'],
})

export const comic_neue = Comic_Neue({
  subsets: ["latin"],
  display: "swap", 
  variable: "--font-comic-neue",
  weight:['400', '300', '700'],
})