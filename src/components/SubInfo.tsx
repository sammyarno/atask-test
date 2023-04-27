import { useContext } from "react";
import { GithubContext } from "../context/Github";

const SubInfo = (): JSX.Element => {
  const context = useContext(GithubContext);

  const extraInfo = ` similar to "${context.username}"`;

  return (
    <div className="info">
      <p>Showing {context.users.length} users {context.username && extraInfo}</p>
    </div>
  );
};

export default SubInfo;
