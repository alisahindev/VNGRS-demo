import React from "react";
import Open from "@/components/Icons/Open";
import Check from "@/components/Icons/Check";
import { octokit } from "@/api/client";
import Link from "next/link";
import SearchableDropdown from "@/components/SearchableDropdown";
import Avatar from "@/components/Avatar";

const getAuthorListItem = (author: any[], searchParams: any) => {
  return author.map((item) => {
    return {
      key: item.login,
      label: (
        <Link
          href={{
            query: {
              ...searchParams,
              creator: item.login,
            },
          }}
          className="text-issue-list-text flex items-center gap-2"
        >
          <Avatar src={item.avatar_url} alt={item.login} />
          {item.login}
        </Link>
      ),
      searchValue: item.login,
    };
  });
};

const IssueListHeader = async ({ searchParams }: { searchParams: any }) => {
  // const { data: openState } = await octokit.request("GET /search/issues", {
  //   q: `repo:facebook/react+type:issue+state:open`,
  // });
  // const { data: closedState } = await octokit.request("GET /search/issues", {
  //   q: `repo:facebook/react+type:issue+state:closed`,
  // });

  // get Authors
  // const { data: authors } = await octokit.request(
  //   "GET /repos/{owner}/{repo}/contributors",
  //   {
  //     owner: "facebook",
  //     repo: "react",
  //   }
  // );

  const author = [
    {
      login: "hoxyq",
      id: 28902667,
      node_id: "MDQ6VXNlcjI4OTAyNjY3",
      avatar_url: "https://avatars.githubusercontent.com/u/28902667?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/hoxyq",
      html_url: "https://github.com/hoxyq",
      followers_url: "https://api.github.com/users/hoxyq/followers",
      following_url:
        "https://api.github.com/users/hoxyq/following{/other_user}",
      gists_url: "https://api.github.com/users/hoxyq/gists{/gist_id}",
      starred_url: "https://api.github.com/users/hoxyq/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/hoxyq/subscriptions",
      organizations_url: "https://api.github.com/users/hoxyq/orgs",
      repos_url: "https://api.github.com/users/hoxyq/repos",
      events_url: "https://api.github.com/users/hoxyq/events{/privacy}",
      received_events_url: "https://api.github.com/users/hoxyq/received_events",
      type: "User",
      site_admin: false,
      contributions: 46,
    },
  ];
  console.log(author);

  const linkClass =
    "flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer";

  const selected = searchParams?.state ?? "open";

  let openState = { total_count: 0 };
  let closedState = { total_count: 0 };

  return (
    <div className="text-gh-primary p-4 border border-issue-list-border rounded-t-md -mb-[1px] bg-muted-hover">
      <div className="flex flex-auto items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-2.5">
          <Link
            href={{
              query: {
                ...searchParams,
                state: "open",
              },
            }}
            className={`${linkClass} 
            ${
              selected === "open"
                ? "text-issue-list-text font-bold"
                : "font-normal"
            }
            `}
          >
            <Open />
            {openState.total_count} Open
          </Link>
          <Link
            href={{
              query: {
                ...searchParams,
                state: "closed",
              },
            }}
            className={`${linkClass} 
            ${
              selected === "closed"
                ? "text-issue-list-text font-bold"
                : "font-normal"
            }
            `}
          >
            <Check />
            {closedState.total_count} Closed
          </Link>
        </div>
        <div>
          <SearchableDropdown
            filterBy="author"
            items={getAuthorListItem(author, searchParams)}
          >
            <button>Author</button>
          </SearchableDropdown>
        </div>
      </div>
    </div>
  );
};

export default IssueListHeader;
