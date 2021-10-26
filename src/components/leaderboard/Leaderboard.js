import { Component } from 'react';
import { connect } from 'react-redux';
import { BsFillTrophyFill } from 'react-icons/bs';
import UserScore from '../user/UserScore';
import UserAvatar from '../user/UserAvatar';
import UserDetails from '../user/UserDetails';
import { userScoreComparator } from '../../utils/dataUtils';
import './Leaderboard.css';

class Leaderboard extends Component {
  render() {
    return (
      <div className='leaderboard-ranking'>
        {this.props.users.sort(userScoreComparator).map((user, idx) => {
          const answeredQuestions = Object.keys(user.answers).length;
          const createdQuestions = user.questions.length;
          const score = answeredQuestions + createdQuestions;

          return (
            <div className='leaderboard-box' key={user.id}>
              {idx <= 2 && (
                <BsFillTrophyFill
                  className={
                    idx === 0
                      ? 'leaderboard-trophy-first'
                      : idx === 1
                      ? 'leaderboard-trophy-second'
                      : 'leaderboard-trophy-third'
                  }
                />
              )}
              <UserAvatar avatar={user.avatarURL} />
              <div className='leaderboard-divider' />
              <UserDetails
                answeredQuestions={answeredQuestions}
                createdQuestions={createdQuestions}
                name={user.name}
              />
              <div className='leaderboard-divider' />
              <UserScore score={score} />
            </div>
          );
        })}
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
