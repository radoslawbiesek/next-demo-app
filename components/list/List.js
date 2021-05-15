import { useState, useEffect } from "react";

import styles from "./List.module.scss";

import mockedData from "../../data/mockedData.json";

const List = () => {
  console.log(data);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setData(mockedData);
  }, []);

  return (
    <ul className={styles.list}>
      {data.map((item) => (
        <li className={styles.item} key={item.id}>
          <img src={"https://image.tmdb.org/t/p/w200" + item.poster_path} />
          <span>{item.original_name}</span>
        </li>
      ))}
    </ul>
  );
};

export default List;
