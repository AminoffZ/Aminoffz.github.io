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
export async function getGithub(user: string): Promise<GitHubUser>;
export async function getGithub(user: string, repo: string): Promise<GitHubRepo>;
export async function getGithub(user: string, repo?: string): Promise<GitHubUser | GitHubRepo> {
	const url = repo
		? `https://api.github.com/repos/${user}/${repo}`
		: `https://api.github.com/users/${user}`;
	const response = await fetch(url);
	const data = await response.json();
	console.log(data);
	return data;
}
