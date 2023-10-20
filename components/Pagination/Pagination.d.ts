interface PaginationProps {
  currentPage: number;
  totalPages: number;
  pageNumbers: number[];
  searchParams: SearchParams;
}

interface PaginationButtonProps {
  searchParams: SearchParams;
  children: React.ReactNode;
  page: number;
  disabled?: boolean;
  isActive: boolean;
  className?: string;
}
