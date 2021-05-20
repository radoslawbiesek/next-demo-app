import styles from "./Pagination.module.css";

const Pagination = ({ page, setPage, total, perPage }) => (
  <ul className={styles.pagination}>
    {Array(Math.ceil(total / perPage))
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
);

export default Pagination;
