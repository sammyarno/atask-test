import type { RepositoryItem } from "../interfaces/Repository";
import type { UserItem } from "../interfaces/User";

export const formatRepositoryItems = (data: any[] = []): RepositoryItem[] => {
  return data.map(item => ({
    title: item.name,
    description: item.description,
    star: item.stargazers_count,
  }))
};

export const formatUserItems = (data: any[] = []): UserItem[] => {
  return data.map(item => ({
    name: item.login,
  }))
};