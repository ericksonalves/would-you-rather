import { Component } from 'react';
import { connect } from 'react-redux';
import {
  findMatchingQuestionId,
  findMatchingUserId,
} from '../../utils/dataUtils';
import './Poll.css';

class Poll extends Component {
  render() {
    return (
      <div>
        <div>Poll: {this.props.id}</div>
        <div>Asked by: {this.props.author.name}</div>
        <div>Would you rather</div>
        <div>#1: {this.props.firstOption}</div>
        <div>#2: {this.props.secondOption}</div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, props) {
  const { id } = props.match.params;

  const question = findMatchingQuestionId(id, questions);

  const author = findMatchingUserId(question.author, users);

  const firstOption = question.optionOne.text;

  const secondOption = question.optionTwo.text;

  return {
    id,
    question,
    author,
    firstOption,
    secondOption,
  };
}

export default connect(mapStateToProps)(Poll);
