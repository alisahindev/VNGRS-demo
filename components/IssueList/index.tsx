import IssueListItem from "./IssueListItem";
import IssueListHeader from "./IssueListHeader";
import { octokit } from "@/api/client";
import { data } from "@/api/mock";

const IssueList = async ({ searchParams }: IssueListProps) => {
  const deleteEmpty = (obj: any) => {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === "") delete obj[key];
    });
    return obj;
  };

  // const { data } = await octokit.request(
  //   "GET /repos/{owner}/{repo}/issues",
  //   deleteEmpty({
  //     owner: "facebook",
  //     repo: "react",
  //     page: Number(searchParams.page) || 1,
  //     per_page: Number(searchParams.per_page) || 25,
  //     sort: searchParams.sort || "created",
  //     state: searchParams.state || "open",
  //     assignee: searchParams.assignee || "",
  //     creator: searchParams.creator || "",
  //     mentioned: searchParams.mentioned || "",
  //     labels: searchParams.labels || "",
  //     direction: searchParams.direction || "desc",
  //   })
  // );

  return (
    <>
      <IssueListHeader searchParams={searchParams} />
      <ul
        role="list"
        aria-label="Issue List"
        className="divide-y divide-issue-list-border sm:border border-issue-list-border w-full h-full rounded-b-md"
      >
        {data.map((issue) => (
          <IssueListItem issue={issue as Issue} key={issue.id} />
        ))}
      </ul>
    </>
  );
};

export default IssueList;
