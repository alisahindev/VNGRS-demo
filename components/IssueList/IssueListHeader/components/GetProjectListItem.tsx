import Check from "@/components/Icons/Check";
import Typography from "@/components/Typography";
import Link from "next/link";

export const getProjectListItem = (
  projects: any[],
  searchParams: SearchParams
) => {
  return projects.map((item) => {
    const newParams = {
      ...searchParams,
      project: searchParams.project === item.name ? null : item.name,
    };

    return {
      key: item.name,
      label: (
        <Link
          href={{
            query: newParams,
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {searchParams.project === item.name && <Check />}
          </span>
          <Typography
            variant="h3"
            className="text-issue-list-text font-bold text-xs"
          >
            {item.name}
          </Typography>
        </Link>
      ),
      searchValue: item.name,
    };
  });
};
