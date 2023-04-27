import { createContext, useCallback, useMemo, useState } from "react";
import type { RepositoryItem } from "../interfaces/Repository";
import octokit from "../plugins/Octokit";
import { formatUserItems, formatRepositoryItems } from "../utils";
import type { UserItem } from "../interfaces/User";

type GithubProps = {
  users: UserItem[];
  repositories: RepositoryItem[];
  username: string;
  updateUsername: (name: string) => void,
  updateUsers: () => void,
  updateRepositories: (name: string) => void,
  isUserLoading: boolean;
  isRepoLoading: boolean;
};

const initialValue: GithubProps = {
  users: [],
  repositories: [],
  username: '',
  updateUsername: (name = '') => {},
  updateUsers: () => {},
  updateRepositories: (name = '') => {},
  isUserLoading: false,
  isRepoLoading: false,
};

const GithubContext = createContext<GithubProps>(initialValue);

const GithubProvider = ({ children }: any) => {
  const [users, setUsers] = useState<UserItem[]>([]);
  const [isUserLoading, setUserLoading] = useState(false);
  const [isRepoLoading, setRepoLoading] = useState(false);
  const [repositories, setRepositories] = useState<RepositoryItem[]>([]);
  const [username, setUsername] = useState('');

  const handleUsernameUpdated = useCallback(
    (name = '') => {
      setUsername(name);
      setUsers([]);
    }, []
  );

  const handeUsersUpdated = useCallback(
    async () => {
      setUserLoading(true);
      const res = await octokit.request(`GET /users`, {
        per_page: 5
      });

      if (res.status === 200) {
        setUserLoading(false);
        setUsers(formatUserItems(res.data));
      }
    }, []
  );
    
  const handleRepositoriesUpdated = useCallback(
    async (name = '') => {
      setRepoLoading(true);
      const res = await octokit.request(`GET /users/${name}/repos`, {
        username: name,
      });

      if (res.status === 200) {
        setRepoLoading(false);
        setRepositories(formatRepositoryItems(res.data));
      }
    }, []
  );
 
  const finalContextValue: GithubProps = useMemo(() => ({
    users, repositories, username, isRepoLoading, isUserLoading,
    updateUsername: handleUsernameUpdated,
    updateUsers: handeUsersUpdated,
    updateRepositories: handleRepositoriesUpdated,
  }), [users, repositories, username, isRepoLoading, isUserLoading, handleUsernameUpdated, handeUsersUpdated, handleRepositoriesUpdated]);

  return (
    <GithubContext.Provider value={finalContextValue}>
      {children}
    </GithubContext.Provider>
  )
};

export {
  GithubContext,
  GithubProvider
};
