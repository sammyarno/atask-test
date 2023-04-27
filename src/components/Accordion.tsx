import { MouseEvent, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp, AiFillStar } from 'react-icons/ai';

type Props = {
  title: string;
  repositories: any[];
};

const Accordion = (props: Props): JSX.Element => {
  const { title, repositories } = props;
  const [isActive, setStatus] = useState(false);

  const handleHeadingClicked = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStatus(prev => !prev);
  };

  return (
    <div className={`accordion ${isActive ? 'active' : 'inactive'}`}>
      <div className="heading" onClick={handleHeadingClicked}>
        <p>{title}</p>
        { isActive ? <AiFillCaretUp /> : <AiFillCaretDown /> }
      </div>
      <div className="content">
        {
          repositories.map((val, index) => (
            <div className="repository" key={index}>
              <p className="title">title</p>
              <p className="description">description</p>
              <p className="star">12 <AiFillStar /></p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Accordion;
