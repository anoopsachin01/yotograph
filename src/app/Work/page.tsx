import ImageCard from "@/components/imageCard/ImageCard";
import { imageCardData } from "@/lib/imageCardData";

import styles from "@/app/Work/work.module.css";

export default function Work() {
  const imageCards = imageCardData.map((img, index) => (
    <ImageCard
      key={index}
      src={img.src}
      alt={img.alt}
      title={img.title}
      description={img.description}
    />
  ));
  return (
    <section className={styles.work}>
      <header className={styles.intro}>
        <p>
          Lorem ipsum dolor sit <span>amet consectetur</span>, adipisicing elit.
          Molestiae obcaecati labore modi saepe minima nemo omnis maxime
          dignissimos, odit quos alias, vero vitae amet ducimus quia! Architecto
          asperiores nemo quasi?
        </p>
      </header>
      <hr />
      <section className={styles.works}>
        {imageCards}
      </section>
    </section>
  );
}
