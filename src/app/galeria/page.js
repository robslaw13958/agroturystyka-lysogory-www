"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [categories, setCategories] = useState([]);
    const [images, setImages] = useState([]);
    
    // const images = [
    //     { src: "/animals/IMG-20250620-WA0006.jpg", category: "animals" },
    //     { src: "/outside/IMG-20250620-WA0001.jpg", category: "outside" },
    // ];

    const filteredImages = images.filter(img =>
        activeCategory === "all" || img.category === activeCategory
    );

    useEffect(() => {
        fetch('/api/images')
            .then(response => response.json())
            .then(data => {
                setCategories(data.categories);
                setImages(data.images);
            });
        }, []);

    return (
        <main className={styles.page}>
            <div className={styles.buttonsContainer}>
                <div className={[styles.button,activeCategory === "all" ? styles.active : null].filter(Boolean).join(' ')} onClick={() => setActiveCategory("all")}>Wszystkie</div>
                <div className={[styles.button,activeCategory === "outside" ? styles.active : null].filter(Boolean).join(' ')} onClick={() => setActiveCategory("outside")}>Na zewnątrz</div>
                <div className={[styles.button,activeCategory === "drone" ? styles.active : null].filter(Boolean).join(' ')} onClick={() => setActiveCategory("drone")}>Z drona</div>
                <div className={[styles.button,activeCategory === "animals" ? styles.active : null].filter(Boolean).join(' ')} onClick={() => setActiveCategory("animals")}>Zwierzęta</div>
                <div className={[styles.button,activeCategory === "rooms" ? styles.active : null].filter(Boolean).join(' ')} onClick={() => setActiveCategory("rooms")}>Pokoje</div>
                <div className={[styles.button,activeCategory === "hall" ? styles.active : null].filter(Boolean).join(' ')} onClick={() => setActiveCategory("hall")}>Sala</div>
            </div>
            <div className={styles.galleryContainer}>
                {filteredImages.map((image, index) => (
                    <div key={index} className={styles.galleryItem}>
                        <Image
                            src={image.src}
                            alt={`Zdjęcie nr ${index + 1} z kategorii ${image.category}`}
                            fill={true}
                            objectFit="cover"
                            className={styles.galleryImage}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}
