import localFont from 'next/font/local';
import { Albert_Sans, Montserrat } from 'next/font/google';

export const pragmatica = localFont({
    src: './_fonts/Pragmatica_Extended_Bold.otf',
    weight: '400'
});

export const albert_sans = Albert_Sans({
    weight: "400",
    subsets: ['latin'],
    display: 'swap'
});

export const montserrat = Montserrat({
    weight: ["400",'500', "700"],
    subsets: ['latin'],
    display: 'swap'
});