import UserScoreDetails from './UserScoreDetails';
import './UserDetails.css';

const UserDetails = (props) => {
  return (
    <div className='user-details-box'>
      <div className='user-details-name'>{props.name}</div>
      <div className='user-details-questions-info'>
        <UserScoreDetails
          label='Answered questions'
          count={props.answeredQuestions}
        />
        <div className='user-details-divider' />
        <UserScoreDetails
          label='Created questions'
          count={props.createdQuestions}
        />
      </div>
    </div>
  );
};

export default UserDetails;
