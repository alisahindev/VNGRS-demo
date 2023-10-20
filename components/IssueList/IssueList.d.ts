interface IssueListProps {
  searchParams: SearchParams;
}

interface IssueListItemProps {
  issue: Issue;
  searchParams: SearchParams;
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
  reactions?:
    | "none"
    | "+1"
    | "-1"
    | "laugh"
    | "thinking_face"
    | "heart"
    | "hooray"
    | "rocket"
    | "eyes";
  project?: string;
}

interface IssueListHeaderProps {
  searchParams: SearchParams;
  openCount: number;
  closedCount: number;
}
