import Image from "next/image";
import styles from "./page.module.css";

export default function Accommodation() {
    return (
        <main className={styles.page}>
            <p>Do dyspozycji gości przeznaczyliśmy 5 apartamentów:</p>
            <ul>
                <li>2 apartamenty 3 osobowe</li>
                <li>2 apartamenty 5 osobowe</li>
                <li>1 apartament 8 osobowy</li>
            </ul>


            <p>W pokojach:</p>
            <ul>
                <li>Lodówka</li>
                <li>Czajnik</li>
                <li>Mikrofala</li>
                <li>Telewizor</li>
            </ul>


            <p>Dodatkowo:</p>
            <ul>
                <li>darmowe wifi</li>
                <li>klimatyzacja</li>
                <li>udogodnienia dla osób niepełnosprawnych♿️</li>
            </ul>


        </main>
    );
}
