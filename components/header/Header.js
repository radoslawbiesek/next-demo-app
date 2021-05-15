import Link from "next/link";

import styles from "./Header.module.scss";

const ITEMS = [
  {
    href: "/",
    label: "Browse",
  },
  {
    href: "/news",
    label: "News",
  },
  {
    href: "/help-center",
    label: "Help Center",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <h1>
          <img src="/tv-solid.svg" />
          <span>TV Series</span>
        </h1>
      </Link>
      <nav>
        <ul>
          {ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;