import './UserAvatar.css';

export default function UserAvatar(props) {
  return (
    <div className='user-avatar-box'>
      <img
        alt='avatar'
        className='user-avatar-image'
        src={`${props.avatar}`}
      ></img>
    </div>
  );
}
