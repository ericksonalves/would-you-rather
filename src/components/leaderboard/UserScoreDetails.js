import './UserScoreDetails.css';

export function UserScoreDetails(props) {
  return (
    <div className='user-details-question-info'>
      <div className='user-details-question-label'>{props.label}</div>
      <div className='user-details-question-count'>{props.count}</div>
    </div>
  );
}
