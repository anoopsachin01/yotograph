import Image from "next/image";
import styles from "@/components/imageCard/ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

export default function ImageCard({
  src,
  alt,
  title,
  description,
}: ImageCardProps) {
  return (
    <article className={styles.imageCard}>
      <figure>
        <div className={styles.imageWrapper}>
          <Image 
            src={src} 
            alt={alt} 
            fill // This fills the parent div, covering it
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
            className={styles.image} 
            priority // Optionally prioritize loading for above-the-fold content
          />
        </div>
        <figcaption>
          <p className={styles.title}>{title}</p>
          <p className={styles.description}>{description}</p>
        </figcaption>
      </figure>
    </article>
  );
}
