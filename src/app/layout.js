import { Cormorant_Garamond, Alegreya } from "next/font/google";
import "./globals.css";
import styles from "@/app/page.module.css";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const alegreya = Alegreya({
  variable: "--font-alegreya",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Agroturystyka Łysogóry",
  description: "Odpoczynek w sercu gór Świętokrzyskich",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${alegreya.variable}`}>
        <header>
          <h1>Agroturystyka Łysogóry</h1>
          <nav>
            <ul>
              <li><Link href="/">Strona główna</Link></li>
              <li><Link href="/o_nas">O nas</Link></li>
              <li><Link href="/noclegi">Noclegi</Link></li>
              <li><Link href="/atrakcje">Atrakcje</Link></li>
              <li><Link href="/galeria">Galeria</Link></li>
            </ul>
          </nav>
        </header>
        {children}
        <footer>
          <div className={styles.footerContent}>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d302.8422210753319!2d20.80063107662038!3d50.91761022662226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471823de103a0a07%3A0x6862aea440e4360c!2sCiekoty%205E%2C%2026-001%20Ciekoty!5e1!3m2!1spl!2spl!4v1750889255012!5m2!1spl!2spl"
                width="100%" height="200" allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
              <h3>Kontakt</h3>
              <p>Tel. 889 446 126</p>
              <p>Tel. 888 435 423</p>
            </div>
            <div>
              <h3>Dane do płatności</h3>
              <p>ING Bank Śląski</p>
              <p>21 1050 1416 1000 0090 7237 3732</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
