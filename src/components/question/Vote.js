import ProgressBar from 'react-bootstrap/ProgressBar';
import './Vote.css';

function Vote(props) {
  const progress = (100 * props.votes) / props.total;

  return (
    <div
      className={
        props.highlighted === true ? 'vote-box-highlighted' : 'vote-box'
      }
    >
      <div
        className={
          props.highlighted === true ? 'vote-option-highlighted' : 'vote-option'
        }
      >
        {props.option}
      </div>
      <ProgressBar now={progress} />
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