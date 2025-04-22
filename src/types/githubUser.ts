export interface GitHubUser {
    login: string;
    id: number;
    avatar_url: string;
    name: string;
    bio: string | null;
    public_repos: number;
    followers: number;
    html_url: string;
  }