import { Octokit } from "@octokit/core";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

export const octokit = new Octokit({
  auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
});

octokit.request.defaults({
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});

octokit.hook.error("request", async (error, options) => {
  console.error(`Request error: ${error.message}`);
  console.error(`Request options: ${JSON.stringify(options)}`);
  return notFound();
});

octokit.hook.before("request", async (options) => {
  revalidatePath("/");
});
