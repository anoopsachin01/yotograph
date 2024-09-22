"use client";

import { useState, useRef, useEffect } from "react";
import styles from "@/components/navbar/Navbar.module.css";
import TransitionLink from "../utils/TransitionLink";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const menuItems = ["Work", "About", "Contact", "Blog"].map((menu) => {
    const isActive = `/${menu}` === path;

    return (
      <li key={menu} onClick={() => setMenuOpen(false)}>
        <TransitionLink
          className={isActive ? styles.active : ""}
          href={`/${menu}`}
        >
          {menu}
        </TransitionLink>
      </li>
    );
  });

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.hero}>
          <h1>Yotograph</h1>
        </div>

        <button
          ref={buttonRef}
          className={styles.menuButton}
          onClick={toggleMenu}
        >
          <img src="/icons/menu.svg" alt="menu" />
        </button>

        <ul
          ref={menuRef}
          className={`${styles.menu} ${menuOpen ? styles.showMenu : ""}`}
        >
          {menuItems}

          <div className={styles.socialMobile}>
            <a href="https://www.instagram.com/yotograph_/" target="_blank">
              <img src="/icons/instagram.svg" alt="instagram" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <img src="/icons/facebook.svg" alt="facebook" />
            </a>
          </div>
        </ul>

        <div className={styles.social}>
          <a href="https://www.instagram.com/yotograph_/" target="_blank">
            <img src="/icons/instagram.svg" alt="instagram" />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <img src="/icons/facebook.svg" alt="facebook" />
          </a>
        </div>
      </nav>
      <hr />
    </header>
  );
}
