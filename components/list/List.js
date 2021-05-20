import Link from "next/link";
import { useState } from "react";

import Pagination from "../pagination/Pagination";

import styles from "./List.module.css";

const ITEMS_PER_PAGE = 10;

const List = ({ data }) => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const byName = (item) =>
    item.name.toLowerCase().includes(search.toLowerCase());

  return (
    <div className={styles.wrapper}>
      {data.length ? (
        <input
          className={styles.search}
          onChange={(e) => {
            setPage(1);
            setSearch(e.target.value);
          }}
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
                  <Link href={"/series/" + item.id}>
                    <a>
                      <img
                        src={
                          "https://image.tmdb.org/t/p/w200" + item.poster_path
                        }
                      />
                      <span>
                        {item.name} ({item.first_air_date.slice(0, 4)})
                      </span>
                    </a>
                  </Link>
                </li>
              ))}
          </ul>
          <Pagination
            page={page}
            setPage={setPage}
            total={data.filter(byName).length}
            perPage={ITEMS_PER_PAGE}
          />
        </>
      ) : (
        <p className={styles.empty}>{search ? 'No results found' : 'Loading...'}</p>
      )}
    </div>
  );
};

export default List;
