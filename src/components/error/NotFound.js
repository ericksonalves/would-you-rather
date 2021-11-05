import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = (props) => {
  const { isAuthorized } = props;

  const pageName = isAuthorized ? 'home' : 'login';
  const to = isAuthorized ? '/home' : '/';

  return (
    <div className='not-found-box'>
      <div className='not-found-message'>Page not found! :(</div>
      <Link to={to}>Go to {pageName}</Link>
    </div>
  );
};

export default NotFound;
