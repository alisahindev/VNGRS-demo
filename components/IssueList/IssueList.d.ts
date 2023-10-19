interface IssueListProps {
  searchParams: SearchParams;
}

interface IssueListItemProps {
  issue: Issue;
}

interface SearchParams {
  milestone?: string;
  state?: "open" | "closed" | "all";
  assignee?: string;
  creator?: string;
  mentioned?: string;
  labels?: string;
  sort?: "created" | "updated" | "comments";
  direction?: "asc" | "desc";
  per_page?: number;
  page?: number;
}
