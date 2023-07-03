import PropTypes from "prop-types";

const range = (start, end) => {
  return [...Array(end).keys()].map((el) => el + start);
};

export default function Pager({ currentPage, totalItems, limit, handlePageChange }) {
  const pagesCount = Math.ceil(totalItems / limit);
  const pages = range(1, pagesCount);
  console.log(pagesCount);

  console.log("pages data:", pagesCount, pages);

  /*   const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  }; */

  const generatePageNumbers = (pages) => {
    const pageNumbers = pages.map((page) => {
      return (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`${currentPage === page ? "font-semibold" : ""}`}
        >
          {page}
        </button>
      );
    });

    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center gap-4 pagination">
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage - 1);
        }}
        className={`${currentPage === 1 ? "hidden" : ""}`}
      >
        Prev
      </button>
      {generatePageNumbers(pages)}
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePageChange(currentPage + 1);
        }}
        className={`${currentPage === pagesCount ? "hidden" : ""}`}
      >
        Next
      </button>
    </div>
  );
}

Pager.propTypes = {
  currentPage: PropTypes.number,
  totalItems: PropTypes.number,
  limit: PropTypes.number,
  handlePageChange: PropTypes.func,
};
