import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.page}>
          <p>Udogodnienia dla gości</p>
        <ol>
            <li>przeszklona weranda</li>
            <li>sala z kominkiem</li>
            <li>klimatyzacja</li>
            <li>akceptujemy zwierzęta domowe 🐶</li>
            <li>bezpłatny parking 🅿️</li>
            <li>darmowe wifi</li>
            <li>udogodnienia dla osób niepełnosprawnych♿️</li>
        </ol>
      </main>
  );
}
