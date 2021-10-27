import ProgressBar from 'react-bootstrap/ProgressBar';
import { BsCheckLg } from 'react-icons/bs';
import './Vote.css';

function Vote(props) {
  const progress = ((100 * props.votes) / props.total).toFixed(2);

  return (
    <div
      className={
        props.highlighted === true ? 'vote-box-highlighted' : 'vote-box'
      }
    >
      {props.highlighted === true && <BsCheckLg className='vote-icon' />}
      <div
        className={
          props.highlighted === true ? 'vote-option-highlighted' : 'vote-option'
        }
      >
        {props.option}
      </div>
      <ProgressBar label={`${progress}%`} now={progress} />
      <div
        className={
          props.highlighted === true
            ? 'vote-summary-highlighted'
            : 'vote-summary'
        }
      >
        {props.votes} out of {props.total}
      </div>
    </div>
  );
}

export default Vote;
