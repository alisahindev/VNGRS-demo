import React from "react";
import Open from "@/components/Icons/Open";
import Check from "@/components/Icons/Check";
import { octokit } from "@/api/client";
import Link from "next/link";
import SearchableDropdown from "@/components/SearchableDropdown";
import { getAuthorListItem } from "./components/GetAuthorListItem";
import { getProjectListItem } from "./components/GetProjectListItem";
import { getMilestoneListItem } from "./components/GetMilestoneListItem";
import { getAssigneeListItem } from "./components/GetAssigneeListItem";
import { getSortListItem } from "./components/GetSortListItem";
import { getLabelListItem } from "./components/GetLabelListItem";

const IssueListHeader = async ({
  searchParams,
  closedCount,
  openCount,
}: IssueListHeaderProps) => {
  // get Authors
  const { data: authors } = await octokit.request(
    "GET /repos/{owner}/{repo}/contributors",
    {
      owner: "facebook",
      repo: "react",
    }
  );

  // get Labels
  const { data: labels } = await octokit.request(
    "GET /repos/{owner}/{repo}/labels",
    {
      owner: "facebook",
      repo: "react",
    }
  );

  // get projects
  const { data: projects } = await octokit.request(
    "GET /repos/{owner}/{repo}/projects",
    {
      owner: "facebook",
      repo: "react",
    }
  );

  // get milestones
  const { data: milestones } = await octokit.request(
    "GET /repos/{owner}/{repo}/milestones",
    {
      owner: "facebook",
      repo: "react",
    }
  );

  // get assignees
  const { data: assignees } = await octokit.request(
    "GET /repos/{owner}/{repo}/assignees",
    {
      owner: "facebook",
      repo: "react",
    }
  );

  const sorts = [
    {
      label: "Newest",
      value: "created-desc",
    },
    {
      label: "Oldest",
      value: "created-asc",
    },
    {
      label: "Most commented",
      value: "comments-desc",
    },
    {
      label: "Least commented",
      value: "comments-asc",
    },
    {
      label: "Recently updated",
      value: "updated-desc",
    },
    {
      label: "Least recently updated",
      value: "updated-asc",
    },
    {
      label: "Best match",
      value: "relevance-desc",
    },
  ];

  const linkClass =
    "flex items-center gap-2 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer";

  const selected = searchParams?.state ?? "open";

  return (
    <div className="text-gh-primary p-4 border border-issue-list-border rounded-t-md -mb-[1px] bg-muted-hover">
      <div className="flex flex-auto items-center justify-between whitespace-nowrap">
        <div className="flex items-center gap-[12px] max-sm:hidden">
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
                ? "text-issue-list-text font-semibold"
                : "font-normal"
            }
            `}
          >
            <Open />
            {openCount.toLocaleString()} Open
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
                ? "text-issue-list-text font-semibold"
                : "font-normal"
            }
            `}
          >
            <Check />
            {closedCount.toLocaleString()} Closed
          </Link>
        </div>
        <div className="flex items-center gap-x-8">
          <SearchableDropdown
            filterBy="author"
            items={getAuthorListItem(authors, searchParams)}
          >
            <button className="flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer">
              Author <span className="dropdown-caret" />
            </button>
          </SearchableDropdown>
          <SearchableDropdown
            filterBy="label"
            items={getLabelListItem(labels, searchParams)}
          >
            <button className="flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer">
              Label <span className="dropdown-caret" />
            </button>
          </SearchableDropdown>
          <div className="flex items-center gap-x-8 max-md:hidden">
            <SearchableDropdown
              filterBy="project"
              items={getProjectListItem(projects, searchParams)}
            >
              <button className="flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer">
                Projects <span className="dropdown-caret" />
              </button>
            </SearchableDropdown>
            <SearchableDropdown
              filterBy="milestone"
              items={getMilestoneListItem(milestones, searchParams)}
            >
              <button className="flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer">
                Milestones <span className="dropdown-caret" />
              </button>
            </SearchableDropdown>
          </div>
          <SearchableDropdown
            filterBy="assignee"
            items={getAssigneeListItem(assignees, searchParams)}
          >
            <button className="flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer">
              Assignee <span className="dropdown-caret" />
            </button>
          </SearchableDropdown>
          <SearchableDropdown
            filterBy="sort"
            items={getSortListItem(sorts, searchParams)}
            filtering={false}
          >
            <button className="flex items-center gap-1 text-sm leading-[21px] text-[#7d8590] hover:text-issue-list-text transition-colors duration-200 ease-in-out cursor-pointer">
              Sort <span className="dropdown-caret" />
            </button>
          </SearchableDropdown>
        </div>
      </div>
    </div>
  );
};

export default IssueListHeader;
