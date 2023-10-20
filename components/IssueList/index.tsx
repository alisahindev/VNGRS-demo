import IssueListItem from "./IssueListItem";
import IssueListHeader from "./IssueListHeader";
import { octokit } from "@/api/client";
import { deleteEmpty } from "@/utils/deleteEmpty";
import Pagination from "../Pagination";
import BlankState from "../BlankState";
import Link from "next/link";
import {
  getClosedState,
  getIssues,
  getOpenState,
} from "@/api/issues/getIssues";

const IssueList = async ({ searchParams }: IssueListProps) => {
  const openState = await getOpenState();
  const closedState = await getClosedState();

  const { data } = await getIssues(searchParams);

  const total_count = {
    open: openState,
    closed: closedState,
  };

  const total =
    searchParams.state === "closed" ? total_count.closed : total_count.open;

  const perPage = searchParams.per_page || 25;

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;
  const currentPage = searchParams.page || 1;

  return (
    <>
      <Link
        href="/"
        className="text-sm font-bold my-4 block text-gray-500 hover:text-issue-list-text-hover"
      >
        Clear current search query, filters, and sorts
      </Link>
      <IssueListHeader
        searchParams={searchParams}
        openCount={total_count.open}
        closedCount={total_count.closed}
      />
      <ul
        role="list"
        aria-label="Issue List"
        className="divide-y divide-issue-list-border sm:border border-issue-list-border w-full h-full rounded-b-md"
      >
        {data.map((issue) => (
          <IssueListItem
            issue={issue as Issue}
            key={issue.id}
            searchParams={searchParams}
          />
        ))}
        {data.length === 0 && <BlankState />}
      </ul>
      <Pagination
        currentPage={Number(currentPage)}
        totalPages={Number(totalPages)}
        pageNumbers={pageNumbers}
        searchParams={searchParams}
      />
    </>
  );
};

export default IssueList;
