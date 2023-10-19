import { Octokit } from "@octokit/core";

export const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

octokit.hook.error("request", async (error, options) => {
  console.error(`Request error: ${error.message}`);
  console.error(`Request options: ${JSON.stringify(options)}`);
  throw error;
});

octokit.request.defaults({
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
