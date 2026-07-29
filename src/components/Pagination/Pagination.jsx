import { getPagesArray } from "../../utils/pages";

import "./Pagination.css";
export const Pagination = ({ totalPages, page, onPageChange }) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArray.map((p) => (
        <span
          onClick={() => onPageChange(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};
