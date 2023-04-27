import { useContext } from "react";
import { GithubContext } from "../context/Github";
import Accordion from "./Accordion";

const Content = (): JSX.Element => {
  const context = useContext(GithubContext);

  if (context.users.length === 0) {
    return <></>;
  };

  if (context.isUserLoading) {
    return (
      <>
        Getting users data
      </>
    )
  }

  return (
    <>
      {
        context.users.map(user => (
          <Accordion title={user.name} key={user.name} />
        ))
      }
    </>
  )
};

export default Content;
