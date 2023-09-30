/**
 * Fetches GitHub data.
 * If only the user is provided, it returns the user's data.
 * If both the user and repo are provided, it returns the repository's data.
 *
 * @param user GitHub username.
 * @param repo Optional repository name associated with the user.
 * If not provided, fetches the user's data.
 *
 * @returns Either the user data or repository data based on the parameters provided.
 */
export async function getGitHub(
  user: string,
  repo: string
): Promise<GitHubRepo>;
export async function getGitHub(
  user: string,
  repo?: string
): Promise<GitHubUser | GitHubRepo> {
  const url = repo
    ? `https://api.github.com/repos/${user}/${repo}`
    : `https://api.github.com/users/${user}`;
  const response = await fetch(url, getAuth());
  const data = await response.json();
  return data;
}

/**
 * Fetches the README.md file from a GitHub repository.
 *
 * @param user GitHub username
 * @param repo GitHub repository name
 * @returns Repository README.md file content
 */
export async function getGitHubRepoReadMe(
  user: string,
  repo: string
): Promise<string> {
  const url = `https://api.github.com/repos/${user}/${repo}/contents/README.md?ref=main`;
  const response = await fetch(url, getAuth());
  const data = await response.json();

  const decodedContent = base64Decode(data.content);
  return decodedContent;
}

function getAuth() {
  if (import.meta.env.VITE_GITHUB_TOKEN) {
    return {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    };
  }
  return {};
}

function base64Decode(value: string) {
  const decodedData = Uint8Array.from(atob(value), (c) => c.charCodeAt(0));
  const decoder = new TextDecoder();
  return decoder.decode(decodedData);
}
