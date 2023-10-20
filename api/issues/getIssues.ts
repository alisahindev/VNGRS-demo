import { deleteEmpty } from "@/utils/deleteEmpty";
import { octokit } from "../client";

export const getIssues = async (searchParams: SearchParams) => {
  const response = await octokit
    .request(
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
    )
    .catch((err) => {
      return {
        data: [],
        error: err,
      };
    });
  return {
    data: response.data,
  };
};

export const getOpenState = async () => {
  const { data } = await octokit.request("GET /search/issues", {
    q: `repo:facebook/react+type:issue+state:open`,
  });
  return data.total_count;
};

export const getClosedState = async () => {
  const { data } = await octokit.request("GET /search/issues", {
    q: `repo:facebook/react+type:issue+state:closed`,
  });
  return data.total_count;
};
