import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ConnectedPollResult from './PollResult';
import ConnectedPoll from './Poll';
import { hasAnsweredQuestion } from '../../utils/dataUtils';

class PollRenderer extends Component {
  render() {
    const { id, questions, user } = this.props;

    const questionId = id;

    const question = questions.find((q) => q.id === questionId);

    return question ? (
      hasAnsweredQuestion(user.id, question) ? (
        <ConnectedPollResult {...this.props} />
      ) : (
        <ConnectedPoll {...this.props} />
      )
    ) : (
      <Redirect to='/404' />
    );
  }
}

function mapStateToProps({ questions, user }, props) {
  const { id } = props.match.params;

  return {
    id,
    questions,
    user,
  };
}

export default connect(mapStateToProps)(PollRenderer);
