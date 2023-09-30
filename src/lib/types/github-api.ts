type GitHubUser = {
  avatar_url: string;
  bio: string | null;
  blog: string;
  company: string | null;
  created_at: string; // You can further refine this with `Date` if you plan to convert it
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string | null;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string; // Similar to `created_at`, can be further refined
  url: string;
};

type GitHubRepo = {
  allow_forking: boolean;
  archive_url: string;
  archived: boolean;
  assignees_url: string;
  blobs_url: string;
  branches_url: string;
  clone_url: string;
  collaborators_url: string;
  comments_url: string;
  commits_url: string;
  compare_url: string;
  contents_url: string;
  contributors_url: string;
  created_at: string; // Can be refined to Date
  default_branch: string;
  deployments_url: string;
  description: string;
  disabled: boolean;
  downloads_url: string;
  events_url: string;
  fork: boolean;
  forks: number;
  forks_count: number;
  forks_url: string;
  full_name: string;
  git_commits_url: string;
  git_refs_url: string;
  git_tags_url: string;
  git_url: string;
  has_discussions: boolean;
  has_downloads: boolean;
  has_issues: boolean;
  has_pages: boolean;
  has_projects: boolean;
  has_wiki: boolean;
  homepage: string;
  hooks_url: string;
  html_url: string;
  id: number;
  is_template: boolean;
  issue_comment_url: string;
  issue_events_url: string;
  issues_url: string;
  keys_url: string;
  labels_url: string;
  language: string; // Consider refining further if there are limited options
  languages_url: string;
  license: any; // Can be refined based on possible licenses
  merges_url: string;
  milestones_url: string;
  mirror_url: any; // Can be refined if more detail is available
  name: string;
  network_count: number;
  node_id: string;
  notifications_url: string;
  open_issues: number;
  open_issues_count: number;
  owner: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    // ... other properties, you can expand based on needs
  };
  parent: any; // Can be refined further if the structure is known
  private: boolean;
  pulls_url: string;
  pushed_at: string; // Can be refined to Date
  releases_url: string;
  size: number;
  source: any; // Can be refined further if the structure is known
  ssh_url: string;
  stargazers_count: number;
  stargazers_url: string;
  statuses_url: string;
  subscribers_count: number;
  subscribers_url: string;
  subscription_url: string;
  svn_url: string;
  tags_url: string;
  teams_url: string;
  temp_clone_token: any; // Can be refined if more detail is available
  topics: string[];
  trees_url: string;
  updated_at: string; // Can be refined to Date
  url: string;
  visibility: string;
  watchers: number;
  watchers_count: number;
  web_commit_signoff_required: boolean;
};
