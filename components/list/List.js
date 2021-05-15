import { useState, useEffect } from "react";

import styles from "./List.module.css";

const ITEMS_PER_PAGE = 10;

const List = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/series")
      .then((res) => res.json())
      .then(setData);
  }, []);

  const byName = (item) =>
    item.name.toLowerCase().includes(search.toLowerCase());

  return (
    <div className={styles.wrapper}>
      {data.length ? (
        <input
          className={styles.search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Type to search"
        />
      ) : null}
      {data.filter(byName).length ? (
        <>
          <ul className={styles.list}>
            {data
              .filter(byName)
              .slice(ITEMS_PER_PAGE * (page - 1), ITEMS_PER_PAGE * page)
              .map((item) => (
                <li className={styles.item} key={item.id}>
                  <a href={"/series/" + item.id}>
                    <img
                      src={"https://image.tmdb.org/t/p/w200" + item.poster_path}
                    />
                    <span>
                      {item.name} ({item.first_air_date.slice(0, 4)})
                    </span>
                  </a>
                </li>
              ))}
          </ul>
          <ul className={styles.pagination}>
            {Array(Math.ceil(data.filter(byName).length / ITEMS_PER_PAGE))
              .fill(null)
              .map((_, index) => (
                <li
                  key={index}
                  onClick={() => setPage(index + 1)}
                  className={index + 1 === page ? styles.active : ""}
                >
                  {index + 1}
                </li>
              ))}
          </ul>
        </>
      ) : (
        <p className={styles.empty}>No results found</p>
      )}
    </div>
  );
};

export default List;
