import Link from "next/link";

import styles from "./Header.module.css";

const ITEMS = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/series",
    label: "Browse",
  },
  {
    href: "/news",
    label: "News",
  },
  {
    href: "/help",
    label: "Help",
  },
];

const Header = () => (
  <header className={styles.header}>
    <a href="/">
      <h1>
        <img src="/tv-solid.svg" />
        <span>TV Series</span>
      </h1>
    </a>
    <nav>
      <ul className={styles.list}>
        {ITEMS.map((item) => (
          <li className={styles.item} key={item.href}>
            <Link href={item.href}>
              <a>{item.label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
