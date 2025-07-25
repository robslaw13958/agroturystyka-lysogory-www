import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h2>Witamy w naszej agroturystyce!</h2>
      <p>Szukasz miejsca, gdzie czas płynie wolniej, a śpiew ptaków budzi Cię rano? Nasz dom położony tuż przy lesie (dosłownie 10 metrów!) to idealna przystań dla rodzin z dziećmi, grup przyjaciół i wszystkich spragnionych odpoczynku z dala od miejskiego zgiełku. Oferujemy komfortowe apartamenty, mnóstwo atrakcji i domową atmosferę, w której poczujesz się naprawdę swobodnie.</p>
      <h2>Co nas wyróżnia?</h2>
      <ul>
        <li><a href="/outside/IMG-20250625-WA0059.jpg">🌳 Spokój i bliskość natury</a></li>
        <li>👨‍👩‍👧‍👦 Idealne miejsce dla rodzin</li>
        <li>🔥 Miejsce na ognisko</li>
        <li>🏡 Przeszklona weranda na każdą pogodę</li>
        <li>🛌 Komfortowe apartamenty</li>
        <li>🐶 Przyjaźń dla zwierząt</li>
        <li>🌟 Recepcja czynna całą dobę</li>
        <li>🅿️ Bezpłatny parking</li>
      </ul>

    </main>
  );
}
