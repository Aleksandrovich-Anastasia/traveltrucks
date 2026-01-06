"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {}
      <Link href="/" className={styles.logo}>
        <svg className={styles.logoImg}>
          <use href="/sprite.svg#icon-Logo" />
        </svg>
      </Link>

      {}
      <nav className={styles.nav}>
        <Link
          href="/"
          className={`${styles.navLink} ${pathname === "/" ? styles.active : ""}`}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={`${styles.navLink} ${pathname.startsWith("/catalog") ? styles.active : ""}`}
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
};

export default Header;
