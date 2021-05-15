import styles from "./Header.module.css";

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
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
