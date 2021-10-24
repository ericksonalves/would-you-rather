import { Component } from 'react';
import { connect } from 'react-redux';
import UserScore from './UserScore';
import UserAvatar from './UserAvatar';
import UserDetails from './UserDetails';
import './Leaderboard.css';

class Leaderboard extends Component {
  render() {
    return (
      <div className='leaderboard-ranking'>
        {this.props.users.map((user) => (
          <div className='leaderboard-box'>
            <UserAvatar avatar={user.avatarURL} />
            <div className='leaderboard-divider' />
            <UserDetails
              answeredQuestions={7}
              createdQuestions={3}
              name={user.name}
            />
            <div className='leaderboard-divider' />
            <UserScore score={10} />
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(Leaderboard);
