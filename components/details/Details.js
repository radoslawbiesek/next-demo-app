import { useState, useEffect } from "react";

import styles from "./Details.module.css";

const Details = ({ id }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (id) {
      fetch("/api/series/" + id)
        .then((res) => res.json())
        .then(setData)
        .catch(console.error)
    }
  }, [id]);

  return data ? (
    <div className={styles.details}>
      <img src={"https://image.tmdb.org/t/p/w300" + data.poster_path} />
      <div className={styles.info}>
        <h1 className={styles.title}>
          {data.name}
          <span> ({data.first_air_date?.slice(0, 4)})</span>
        </h1>
        <div className={styles.votes}>
          <img src="/star-solid.svg" />
          <span className={styles.avg}>{(+data.vote_average).toFixed(1)}</span>
          <span className={styles.count}>{data.vote_count} votes</span>
        </div>
        <p>{data.overview}</p>
      </div>
    </div>
  ) : (
    <p>Not found</p>
  );
};

export default Details;