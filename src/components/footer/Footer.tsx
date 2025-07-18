import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        © 2024 Yotograph, All rights reserved | Design by {""}
        <a href="https://www.linkedin.com/in/thirumal-viswa" target="_blank">Viswa</a> and <a href="https://www.linkedin.com/in/anoop-sachin-k" target="_blank">Anoop</a>
      </p>
    </footer>
  );
}
