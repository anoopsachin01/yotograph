import Image from "next/image";
import styles from "@/components/imageCard/ImageCard.module.css";

interface ImageCardProps {
  src: string;
  alt: string;
  title: string;
  description: string;
  size: string;
}

export default function ImageCard({
  src,
  alt,
  title,
  description,
  size
}: ImageCardProps) {
  const appliedSize = size || "default";
  console.log(appliedSize)

  return (
    <article className={styles.imageCard}>
      <figure>
        <div className={`${styles.imageWrapper} ${styles[appliedSize]}`}>
          <Image 
            src={src} 
            alt={alt} 
            fill
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 30vw"
            className={styles.image} 
            priority
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

