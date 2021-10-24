import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAvatar from '../user/UserAvatar';
import './Poll.css';

function Poll(props) {
  return (
    <div className='poll-box'>
      <div className='poll-author'>{props.author} asks:</div>
      <div className='poll-details'>
        <div className='poll-author-avatar'>
          <UserAvatar avatar={props.avatar} />
        </div>
        <div className='poll-divider' />
        <div className='poll-preview'>
          <div className='poll-would-you-rather'>Would you rather</div>
          <div className='poll-question-preview'>{props.questionPreview}</div>
          <Link
            className='poll-preview-link'
            to={
              props.answered === true
                ? `/results/${props.pollId}`
                : `/poll/${props.pollId}`
            }
          >
            <Button variant='primary'>View Poll</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Poll;
