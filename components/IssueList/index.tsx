import IssueListItem from "./IssueListItem";
import IssueListHeader from "./IssueListHeader";
import { octokit } from "@/api/client";
import { deleteEmpty } from "@/utils/deleteEmpty";
import Pagination from "../Pagination";
import BlankState from "../BlankState";
import Link from "next/link";

export const dynamic = "force-dynamic";

const IssueList = async ({ searchParams }: IssueListProps) => {
  const { data } = await octokit.request(
    "GET /repos/{owner}/{repo}/issues",
    deleteEmpty({
      owner: "facebook",
      repo: "react",
      page: Number(searchParams.page) || 1,
      per_page: Number(searchParams.per_page) || 25,
      sort: searchParams.sort || "created",
      state: searchParams.state || "open",
      assignee: searchParams.assignee || "",
      creator: searchParams.creator || "",
      mentioned: searchParams.mentioned || "",
      labels: searchParams.labels || "",
      direction: searchParams.direction || "desc",
    })
  );

  const { data: openState } = await octokit.request("GET /search/issues", {
    q: `repo:facebook/react+type:issue+state:open`,
  });

  const { data: closedState } = await octokit.request("GET /search/issues", {
    q: `repo:facebook/react+type:issue+state:closed`,
  });

  const total =
    searchParams.state === "closed"
      ? closedState.total_count
      : openState.total_count;

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
        openCount={openState.total_count}
        closedCount={closedState.total_count}
      />
      <ul
        role="list"
        aria-label="Issue List"
        className="divide-y divide-issue-list-border sm:border border-issue-list-border w-full h-full rounded-b-md"
      >
        {data.map((issue) => (
          <IssueListItem issue={issue as Issue} key={issue.id} />
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
