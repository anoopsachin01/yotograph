import Image from "next/image";
import styles from "@/components/blogPost/BlogPost.module.css";
import Link from "next/link";

export interface BlogPostProps {
  title: string;
  description: string;
  img: string;
  date: string;
  pinned?: boolean;
}

export default function BlogPost({
  title,
  description,
  img,
  date,
  pinned
}: BlogPostProps) {
  return (
    <article className={`${styles.blogPost} ${pinned ? styles.pinned : ""}`}>
      <header className={styles.header}>
        <div className={styles.imageWrapper}>
          <Image src={img} alt={title} width={300} height={300} />
        </div>
      </header>
      <section className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
        <Link href="#" className={styles.readMore}>
          Read more
        </Link>
      </section>
      <time className={styles.date} dateTime={date}>
        {date}
      </time>
    </article>
  );
}
