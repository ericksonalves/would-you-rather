import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAvatar from '../user/UserAvatar';
import './PollPreview.css';

function PollPreview(props) {
  return (
    <div className='poll-preview-box'>
      <div className='poll-preview-author'>{props.author} asks:</div>
      <div className='poll-preview-details'>
        <div className='poll-preview-author-avatar'>
          <UserAvatar avatar={props.avatar} />
        </div>
        <div className='poll-preview-divider' />
        <div className='poll-preview-snapshot'>
          <div className='poll-preview-would-you-rather'>Would you rather</div>
          <div className='poll-preview-question-preview'>
            {props.questionPreview}
          </div>
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

export default PollPreview;
