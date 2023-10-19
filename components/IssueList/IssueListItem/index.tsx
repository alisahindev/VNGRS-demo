import Avatar from "@/components/Avatar";
import Chip from "@/components/Chip";
import Comment from "@/components/Icons/Comment";
import Open from "@/components/Icons/Open";
import PullRequest from "@/components/Icons/PullRequest";
import RelativeTime from "@/components/RelativeTime";
import Typography from "@/components/Typography";
import Link from "next/link";
import React from "react";

const IssueListItem = ({ issue }: IssueListItemProps) => {
  return (
    <li
      role="listitem"
      className="flex items-stretch p-2 sm:hover:bg-muted-hover last:rounded-b-md text-gh-primary max-sm:cursor-pointer"
      aria-label="Issue"
    >
      <span
        className={`pl-2 leading-[21px] ${
          issue.state === "open" ? "text-green-500" : "text-purple-600"
        }`}
      >
        <Open />
      </span>
      <div className="flex flex-col px-2 w-[880px] max-w-4xl">
        <Link
          className="text-base text-issue-list-text sm:hover:text-issue-list-text-hover font-semibold whitespace-normal"
          href={issue.html_url}
        >
          {issue.title}{" "}
          <span>
            {issue.labels.map((label) => (
              <Chip
                key={label.id}
                label={label.name}
                color={label.color}
                variant="default"
              />
            ))}
          </span>
        </Link>
        <span className="mt-1">
          <Typography
            variant="p"
            className="text-xs leading-normal "
            textColor="text-[#7d8590]"
          >
            #{issue.number} opened{" "}
            <RelativeTime date={new Date(issue.created_at)} /> by{" "}
            <Link
              href={issue.user.html_url}
              className="sm:hover:text-issue-list-text-hover"
            >
              {issue.user.login}
            </Link>
          </Typography>
        </span>
      </div>
      <div className="pr-2 flex-1 max-sm:hidden grid grid-cols-[minmax(48px,_1fr)_minmax(48px,_1fr)_minmax(48px,_1fr)]">
        <span className="flex items-start justify-end">
          {issue.pull_request && (
            <Typography variant="p" className="text-xs leading-normal ">
              <Link
                href={`${issue.pull_request?.html_url}`}
                className="flex gap-1 text-[#7d8590]"
              >
                <PullRequest /> 1
              </Link>
            </Typography>
          )}
        </span>
        <span className="flex items-start justify-end">
          {issue.assignees?.map((assignee, index) => (
            <Link href={assignee.html_url} key={assignee.id ?? index}>
              <Avatar
                src={assignee.avatar_url}
                alt={assignee.login}
                size="small"
              />
            </Link>
          ))}
        </span>
        <span className="flex items-start justify-end">
          <Typography variant="p" className="text-xs leading-normal ">
            <Link
              href={issue.comments_url}
              className="flex gap-1 text-[#7d8590]"
            >
              <Comment /> {issue.comments}
            </Link>
          </Typography>
        </span>
      </div>
    </li>
  );
};

export default IssueListItem;
