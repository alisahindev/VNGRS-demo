import Link from "next/link";
import React from "react";
import Arrow from "../Icons/Arrow";
import PaginationButton from "./PaginationButton";

const Pagination: React.FC<PaginationProps> = async ({
  currentPage,
  pageNumbers,
  searchParams,
}) => {
  return (
    <div
      className="flex items-center justify-center my-4 gap-1"
      role="navigation"
      aria-label="Pagination"
    >
      <PaginationButton
        page={currentPage - 1}
        searchParams={searchParams}
        disabled={currentPage === 1}
        isActive={false}
      >
        <Arrow /> Previous
      </PaginationButton>

      {pageNumbers.splice(0, 5).map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          page={pageNumber}
          searchParams={searchParams}
          isActive={pageNumber === currentPage}
        >
          {pageNumber}
        </PaginationButton>
      ))}

      {pageNumbers.splice(-2).map((pageNumber) => (
        <PaginationButton
          key={pageNumber}
          page={pageNumber}
          searchParams={searchParams}
          isActive={pageNumber === currentPage}
        >
          {pageNumber}
        </PaginationButton>
      ))}
      <PaginationButton
        page={currentPage + 1}
        searchParams={searchParams}
        disabled={currentPage === pageNumbers.length}
        isActive={false}
      >
        Next
        <Arrow className="transform rotate-180" />
      </PaginationButton>
    </div>
  );
};

export default Pagination;
