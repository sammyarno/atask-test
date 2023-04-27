import { MouseEvent, useContext, useEffect, useState } from 'react';
import { AiFillCaretDown, AiFillCaretUp, AiFillStar } from 'react-icons/ai';
import { GithubContext } from '../context/Github';

type Props = {
  title: string;
};

const Accordion = (props: Props): JSX.Element => {
  const { title } = props;
  const context = useContext(GithubContext);
  const [isActive, setStatus] = useState(false);

  const handleHeadingClicked = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setStatus(prev => !prev);
    context.updateRepositories(title);
  };

  useEffect(() => {
    if (context.selectedUser === title) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [context.selectedUser, title]);

  return (
    <div className={`accordion ${isActive ? 'active' : 'inactive'}`}>
      <div className="heading" onClick={handleHeadingClicked}>
        <p>{title}</p>
        { isActive ? <AiFillCaretUp /> : <AiFillCaretDown /> }
      </div>
      <div className="content">
        {
          context.isRepoLoading && (
            <>
              Getting repo data
            </>
          )
        }
        {
          !context.isRepoLoading && context.repositories.map((repo, index) => (
            <div className="repository" key={index}>
              <p className="title">{repo.title}</p>
              <p className="description">{repo.description}</p>
              <p className="star">{repo.star} <AiFillStar /></p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Accordion;
