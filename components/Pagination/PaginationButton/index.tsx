import Link from "next/link";

const PaginationButton = async ({
  searchParams,
  children,
  page,
  disabled,
  isActive,
  className,
}: PaginationButtonProps) => {
  const activeClasses = isActive ? "bg-[#1f6feb]" : "";

  const isPrevOrNextClass =
    disabled === undefined ? "" : "text-issue-list-text-hover";

  return (
    <Link
      aria-disabled={disabled}
      href={{
        query: {
          ...searchParams,
          page,
        },
      }}
      className={`min-w-[32px] flex items-center justify-center gap-1 text-sm text-issue-list-text leading-5 font-normal border border-transparent hover:border-issue-list-border px-2.5 py-[5px] rounded-md ${isPrevOrNextClass} ${activeClasses} ${
        className ?? ""
      }`}
    >
      {children}
    </Link>
  );
};

export default PaginationButton;
