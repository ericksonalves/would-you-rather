import { Component } from 'react';
import { connect } from 'react-redux';
import {
  findMatchingQuestionId,
  findMatchingUserId,
} from '../../utils/dataUtils';
import './PollResult.css';

class PollResult extends Component {
  render() {
    return (
      <div>
        <div>Question ID: {this.props.question.id}</div>
        <div>Asked by: {this.props.author.name}</div>
        <div>Votes for #1: {this.props.votesForFirst}</div>
        <div>Votes for #2: {this.props.votesForSecond}</div>
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

  return {
    id,
    author,
    question,
    user,
    votesForFirst,
    votesForSecond,
    votes,
  };
}

export default connect(mapStateToProps)(PollResult);
