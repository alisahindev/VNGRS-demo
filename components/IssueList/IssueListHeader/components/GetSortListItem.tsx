import Check from "@/components/Icons/Check";
import Typography from "@/components/Typography";
import { reactions } from "@/contants/reactions";
import Link from "next/link";

export const getSortListItem = (sort: any[], searchParams: SearchParams) => {
  let listItems = sort.map((item) => {
    const newParams = {
      ...searchParams,
      sort: searchParams.sort === item.value ? null : item.value,
    };

    return {
      key: item.value,
      label: (
        <Link
          href={{
            query: newParams,
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {searchParams.sort === item.value && <Check />}
          </span>
          <Typography
            variant="h3"
            className="text-issue-list-text font-normal text-xs"
          >
            {item.label}
          </Typography>
        </Link>
      ),
    };
  });

  listItems.push({
    key: "most-reactions",
    label: (
      <Typography variant="h3" className="text-[#7d8590] font-normal text-xs">
        Most reactions
      </Typography>
    ),
  });

  listItems.push({
    key: "fewest-reactions",
    label: (
      <div className="flex items-center flex-wrap">
        {reactions.map((reaction) => {
          return (
            <Link
              key={reaction.value}
              href={{
                query: {
                  ...searchParams,
                  reactions: `${reaction.value}-desc`,
                },
              }}
              className={`py-2 px-4 hover:bg-[#6e76811a] rounded-md transition-colors text-base duration-200 ease-in-out border border-transparent hover:border-blue-500
                  ${
                    searchParams.reaction === reaction.value
                      ? "bg-[#6e76811a] ring-blue-500"
                      : ""
                  }
                `}
            >
              {reaction.label}
            </Link>
          );
        })}
      </div>
    ),
  });
  return listItems;
};
