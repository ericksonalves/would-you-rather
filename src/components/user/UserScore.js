import './UserScore.css';

const UserScore = (props) => {
  return (
    <div className='user-score-box'>
      <div className='user-score-header'>Score</div>
      <div className='user-score-points'>{props.score}</div>
    </div>
  );
};

export default UserScore;
