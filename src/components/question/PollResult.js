import { Component } from 'react';
import { connect } from 'react-redux';
import UserAvatar from '../user/UserAvatar';
import Vote from './Vote';
import {
  findMatchingQuestionId,
  findMatchingUserId,
} from '../../utils/dataUtils';
import './PollResult.css';

class PollResult extends Component {
  render() {
    return (
      <div className='poll-result-box'>
        <div className='poll-result-author'>
          Asked by {this.props.author.name}
        </div>
        <div className='poll-result-details'>
          <div className='poll-result-author-avatar'>
            <UserAvatar avatar={this.props.author.avatarURL} />
          </div>
          <div className='poll-result-divider' />
          <div className='poll-results'>
            <div className='poll-results-header'>Results:</div>
            <div className='poll-voting-box'>
              <Vote
                highlighted={this.props.answer === 'optionOne'}
                option={`Would you rather ${this.props.question.optionOne.text}?`}
                total={this.props.votes}
                votes={this.props.votesForFirst}
              />
              <Vote
                highlighted={this.props.answer === 'optionTwo'}
                option={`Would you rather ${this.props.question.optionTwo.text}?`}
                total={this.props.votes}
                votes={this.props.votesForSecond}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user, users, questions }, props) {
  const { id } = props.match.params;

  const question = findMatchingQuestionId(id, questions);

  const author = findMatchingUserId(question.author, users);

  const votesForFirst = question.optionOne.votes.length;

  const votesForSecond = question.optionTwo.votes.length;

  const votes = votesForFirst + votesForSecond;

  const firstOptionVoters = new Set(question.optionOne.votes);

  const answer = firstOptionVoters.has(user.id) ? 'optionOne' : 'optionTwo';

  return {
    id,
    author,
    question,
    user,
    votesForFirst,
    votesForSecond,
    votes,
    answer,
  };
}

export default connect(mapStateToProps)(PollResult);
