import { MouseEvent } from "react";
import Accordion from "../components/Accordion";

const App = (): JSX.Element => {

  const handleSearchClicked = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(e.target);
  };

  return (
    <>
      <div className="form">
        <input type="text" placeholder="Enter Username" />
        <button type="button" onClick={handleSearchClicked}>search</button>
      </div>
      <div className="info">
        <p>Showing 0 users</p>
      </div>
      <hr />
      {
        ['', '', ''].map((item, index) => (
          <Accordion title={`example${index}`} repositories={[]} />
        ))
      }
    </>
  );
};

export default App;
