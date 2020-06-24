import React from "react";

// This component is an implementation of pagination component from Glad Chinda's tutorial
// https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react#the-pagination-component

const LEFT_PAGE = "LEFT";
const RIGHT_PAGE = "RIGHT";

// Helper function to create range of number
function range(from, to, step = 1) {
  const temp = [];
  for (let i = from; i <= to; i += step) {
    temp.push(i);
  }

  return temp;
}

function Pagination({ totalPages, current, setCurrent, neighbours = 2 }) {
  const fetchPageNumbers = () => {
    const totalNumbers = neighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, current - neighbours);
      const endPage = Math.min(totalPages - 1, current + neighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalNumbers - (totalPages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case hasLeftSpill && !hasRightSpill: {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case !hasLeftSpill && hasRightSpill: {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case hasLeftSpill && hasRightSpill:
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();
  return (
    <>
      <nav className="flex flex-row justify-center">
        {pages.map((page) => {
          if (page === LEFT_PAGE)
            return (
              <button
                className="page-item"
                type="button"
                onClick={() => setCurrent(current - neighbours * 2 - 1)}
              >
                {"<"}
              </button>
            );

          if (page === RIGHT_PAGE)
            return (
              <button
                className="page-item"
                type="button"
                onClick={() => setCurrent(current + neighbours * 2 + 1)}
              >
                {">"}
              </button>
            );

          if (page === current)
            return (
              <button
                className="page-item bg-cteal text-clight"
                type="button"
                onClick={() => setCurrent(page)}
              >
                {page}
              </button>
            );

          return (
            <button
              className="page-item"
              type="button"
              onClick={() => setCurrent(page)}
            >
              {page}
            </button>
          );
        })}
      </nav>
    </>
  );
}

export default Pagination;
