import Avatar from "@/components/Avatar";
import Check from "@/components/Icons/Check";
import Typography from "@/components/Typography";
import { reactions } from "@/contants/reactions";
import { deleteEmpty } from "@/utils/deleteEmpty";
import Link from "next/link";

export const getAuthorListItem = (author: any[], searchParams: any) => {
  return author.map((item) => {
    const newParams = {
      ...searchParams,
      creator: searchParams.creator === item.login ? null : item.login,
    };

    return {
      key: item.login,
      label: (
        <Link
          href={{
            query: deleteEmpty(newParams),
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {searchParams.creator === item.login && <Check />}
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
};

export const getLabelListItem = (labels: any[], searchParams: any) => {
  return labels.map((item) => {
    const newParams = {
      ...searchParams,
      labels: searchParams.labels === item.name ? null : item.name,
    };

    return {
      key: item.name,
      label: (
        <Link
          href={{
            query: deleteEmpty(newParams),
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {searchParams.labels === item.name && <Check />}
          </span>
          <span
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: `#${item.color}` }}
          />
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

export const getProjectListItem = (projects: any[], searchParams: any) => {
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
            query: deleteEmpty(newParams),
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

export const getMilestoneListItem = (milestones: any[], searchParams: any) => {
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
            query: deleteEmpty(newParams),
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

export const getSortListItem = (sort: any[], searchParams: any) => {
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
            query: deleteEmpty(newParams),
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

export const getAssigneeListItem = (assignees: any[], searchParams: any) => {
  return assignees.map((item) => {
    const newParams = {
      ...searchParams,
      assignee: searchParams.assignee === item.login ? null : item.login,
    };

    return {
      key: item.login,
      label: (
        <Link
          href={{
            query: deleteEmpty(newParams),
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <span className="w-4 h-4 flex items-center justify-center text-issue-list-text">
            {searchParams.assignee === item.login && <Check />}
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
};
