import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <h2>Witamy w naszej agroturystyce!</h2>
      <p>
        Agroturystyka Łysogóry to obiekt właśnie dla Ciebie. W naszej ofercie
        znajduje się 4 mini apartamenty 3 i 5 osobowe. Każdy składa się z
        łazienki, małego saloniku na dole. Na górze znajdują się sypialnie, 1
        pokojowa z 2 łóżkami lub 2 pokojową z 4 łóżkami. W każdym apartamencie
        znajduje się czajnik, lodówka, telewizor oraz mikrofala. W obiekcie jest
        dostępny aneks kuchenny z płytą elektryczną i wyposażeniem. Dysponujemy
        również 1 studiem z 8 miejscami na górze i salonem z 2 łazienkami oraz
        jadalnią z kuchenką na dole. Największym atutem naszego gospodarstwa
        jest duża 90m przeszklona weranda z kominkiem, bilardem i widokiem na
        ogród. W ogródku znajduje się altana i palenisko.
      </p>
      <h2>Co nas wyróżnia?</h2>
      <div className={styles.featuresList}>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🐶</div>
          <p>Przyjaźń dla zwierząt</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🛎</div>
          <p>Recepcja czynna całą dobę</p>
        </div>
        <div className={styles.featureCard}>
          <div className={styles.featureIcon}>🅿️</div>
          <p>Bezpłatny parking</p>
        </div>
      </div>
      <div>
        <section className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/outside/IMG-20250625-WA0035.jpg"
              alt="Piaskownica i huśtawka"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.photoContent}>
            <h3>Idealne miejsce dla rodzin</h3>
            <p>
              Nasza agroturystyka to raj dla dzieci! Oferujemy plac zabaw,
              trampolinę i gokarty, które zapewnią Twoim pociechom mnóstwo
              radości. A dla najmłodszych mamy łóżeczko dziecięce.
            </p>
          </div>
        </section>

        <section className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/outside/IMG-20250625-WA0059.jpg"
              alt="Natura"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.photoContent}>
            <h3>Spokój i bliskość natury</h3>
            <p>
              Nasza agroturystyka znajduje się w spokojnej okolicy, gdzie możesz
              cieszyć się ciszą. Idealne miejsce na spacery i relaks.
            </p>
          </div>
        </section>

        <section className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/hall/IMG-20250625-WA0028.jpg"
              alt="Stół do gry w bilarda"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.photoContent}>
            <h3>Rozrywka na miejscu</h3>
            <p>
              Nasz salon wyposażony jest w profesjonalny stół bilardowy. To
              świetne miejsce na spędzenie wieczoru w gronie przyjaciół czy
              rodziny.
            </p>
          </div>
        </section>

        <section className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/hall/IMG-20250625-WA0046.jpg"
              alt="Przeszklona weranda"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.photoContent}>
            <h3>Przeszklona weranda</h3>
            <p>
              Przestronna weranda to serce naszego obiektu. Tu możesz zacząć
              dzień od śniadania w promieniach wschodzącego słońca.
            </p>
          </div>
        </section>

        <section className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/rooms/IMG-20250625-WA0036.jpg"
              alt="Apartament"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.photoContent}>
            <h3>Komfortowe apartamenty</h3>
            <p>
              Nasze pokoje to gwarancja komfortu i relaksu. Każdy z nich
              urządzony jest z dbałością o szczegóły.
            </p>
          </div>
        </section>

        <section className={styles.photoSection}>
          <div className={styles.imageContainer}>
            <Image
              src="/outside/IMG-20250620-WA0014.jpg"
              alt="Miejsce na ognisko"
              fill={true}
              className={styles.image}
            />
          </div>
          <div className={styles.photoContent}>
            <h3>Miejsce na ognisko</h3>
            <p>
              {" "}
              Wieczory przy ognisku to nasza specjalność. Oferujemy wygodne
              miejsce, gdzie możesz spędzić czas z bliskimi, delektując się
              smakiem pieczonych kiełbasek.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
