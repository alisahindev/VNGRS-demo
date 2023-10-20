import Check from "@/components/Icons/Check";
import Typography from "@/components/Typography";
import Link from "next/link";

export const getMilestoneListItem = (
  milestones: any[],
  searchParams: SearchParams
) => {
  return milestones.map((item) => {
    const newParams = {
      ...searchParams,
      milestone: searchParams.milestone === item.title ? null : item.title,
    };

    return {
      key: item.title,
      label: (
        <Link
          href={{
            query: newParams,
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {searchParams.milestone === item.title && <Check />}
          </span>
          <Typography
            variant="h3"
            className="text-issue-list-text font-bold text-xs"
          >
            {item.title}
          </Typography>
        </Link>
      ),
      searchValue: item.title,
    };
  });
};
