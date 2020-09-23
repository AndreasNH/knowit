import React from "react";
import styles from "./pagination.module.css";

const PaginationNumber = ({ setPage, page, index }) => (
  <button className={page === index && styles.currentPage} onClick={() => setPage(index)}>{index + 1}</button>
);

const paginationValidation = (input, maxPage, minPage = 0) =>
  input > maxPage - 1 ? maxPage - 1 : input < minPage ? minPage : input;

const Pagination = ({ size, pageSize, setPage, page }) => {
  const maxPages = Math.ceil(size / pageSize);
  return (
    <div className={styles.container}>
      <button
        className={styles.prevBtn}
        onClick={() => setPage(paginationValidation(page - 1, maxPages))}
      >
        «
      </button>
      {Array.from({ length: maxPages }, (_, index) => (
        <PaginationNumber key={index} {...{ setPage, page, index }} />
      ))}
      <button
        className={styles.nextBtn}
        onClick={() => setPage(paginationValidation(page + 1, maxPages))}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
