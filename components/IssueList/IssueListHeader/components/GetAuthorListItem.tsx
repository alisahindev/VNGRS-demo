import Avatar from "@/components/Avatar";
import Check from "@/components/Icons/Check";
import Typography from "@/components/Typography";
import Link from "next/link";

export const getAuthorListItem = (
  author: any[],
  searchParams: SearchParams
) => {
  const authors = author.map((item) => {
    const selected = searchParams.creator === item.login;

    return {
      key: item.login,
      label: (
        <Link
          href={{
            query: {
              ...searchParams,
              creator: selected ? null : item.login,
            },
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span
            className={` "w-4 h-4 flex items-center justify-center text-issue-list-text `}
          >
            {selected && <Check />}
          </span>
          <Avatar src={item.avatar_url} alt={item.login} />
          <Typography
            variant="h3"
            className="text-issue-list-text font-bold text-xs"
          >
            {item.login}
          </Typography>
        </Link>
      ),
      searchValue: item.login,
    };
  });

  return authors;
};
