import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import UserAvatar from '../user/UserAvatar';
import {
  findMatchingQuestionId,
  findMatchingUserId,
} from '../../utils/dataUtils';
import './Poll.css';
import { handleAddAnswer } from '../../actions/question';

class Poll extends Component {
  state = {
    answer: 'optionOne',
    toHome: false,
  };

  handleOnAnswerChanged = (event) => {
    const answer = event.target.value;

    this.setState(() => ({
      answer: answer,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { answer } = this.state;

    const { dispatch, user } = this.props;

    console.log(user.id);

    dispatch(
      handleAddAnswer({
        questionId: this.props.question.id,
        userId: user.id,
        answer: answer,
      })
    );

    this.setState(() => ({
      answer: '',
      toHome: true,
    }));
  };

  render() {
    const { toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/' />;
    }

    return (
      <div className='poll-box'>
        <div className='poll-author'>{this.props.author.name} asks:</div>
        <div className='poll-details'>
          <div className='poll-author-avatar'>
            <UserAvatar avatar={this.props.author.avatarURL} />
          </div>
          <div className='poll-divider' />
          <div className='poll-voting-details'>
            <div className='poll-would-you-rather'>Would you rather</div>
            <div className='poll-voting-box'>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className='mb-3' controlId='pollVotingForm'>
                  <Form.Check
                    type='radio'
                    label={this.props.question.optionOne.text}
                    checked={this.state.answer === 'optionOne'}
                    name='vote'
                    id='option-one'
                    value='optionOne'
                    onChange={this.handleOnAnswerChanged}
                  />
                  <Form.Check
                    type='radio'
                    name='vote'
                    checked={this.state.answer === 'optionTwo'}
                    label={this.props.question.optionTwo.text}
                    id='option-two'
                    value='optionTwo'
                    onChange={this.handleOnAnswerChanged}
                  />
                  <Button
                    variant='primary'
                    type='submit'
                    disabled={this.state.answer === ''}
                  >
                    Submit
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, user }, props) {
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
    user,
  };
}

export default connect(mapStateToProps)(Poll);
