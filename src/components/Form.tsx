import { ChangeEvent, KeyboardEvent, MouseEvent, useContext, useState } from "react";
import { GithubContext } from "../context/Github";

const Form = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const context = useContext(GithubContext);

  const handleUsernameChanged = (e: ChangeEvent<HTMLInputElement>) => {
    context.updateUsername(e.target.value);
    setUsername(username);
  };

  const handleSearchClicked = async (e: MouseEvent<HTMLButtonElement>) => {
    context.updateUsers();
  };

  const handleUsernameKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      context.updateUsers();
    }
  };

  return (
    <div className="form">
      <input type="text" placeholder="Enter Username" onChange={handleUsernameChanged} onKeyDown={handleUsernameKeyDown} />
      <button type="button" onClick={handleSearchClicked}>
        search
      </button>
    </div>
  );
};

export default Form;
