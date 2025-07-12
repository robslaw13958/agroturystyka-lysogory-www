import Image from "next/image";
import styles from "./page.module.css";

export default function Attractions() {
    return (
        <main className={styles.page}>
            <p>UDOGODNIENIA DLA GOŚCI:</p>
            <ul>
                <li>przeszklona weranda</li>
                <li>sala z kominkiem</li>
                <li>grill</li>
                <li>miejsce na ognisko</li>
            </ul>


            <p>UDOGODNIENIA DLA DZIECI:</p>
            <ul>
                <li>Plac zabaw</li>
                <li>Trampolina</li>
                <li>Gokarty</li>
                <li>Łóżeczko dla dziecka</li>
            </ul>

            <p>ORGANIZACJA IMPREZ:</p>
            <ul>
                <li>szkolenia</li>
                <li>konferencje</li>
                <li>komunie</li>
                <li>chrzciny</li>
                <li>Imprezy panieńskie/kawalerskie</li>
            </ul>

        </main>
    );
}
