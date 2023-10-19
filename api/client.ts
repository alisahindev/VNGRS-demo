import { Octokit } from "@octokit/core";

export const octokit = new Octokit();

octokit.hook.error("request", async (error, options) => {
  console.error(`Request error: ${error.message}`);
  console.error(`Request options: ${JSON.stringify(options)}`);
  throw error;
});
