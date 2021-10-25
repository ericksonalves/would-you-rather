import { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import UserAvatar from '../user/UserAvatar';
import {
  findMatchingQuestionId,
  findMatchingUserId,
} from '../../utils/dataUtils';
import './Poll.css';

class Poll extends Component {
  render() {
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
              <Form>
                <Form.Group className='mb-3' controlId='pollVotingForm'>
                  <Form.Check
                    type='radio'
                    label={this.props.question.optionOne.text}
                    name='vote'
                    id='optionOne'
                  />
                  <Form.Check
                    type='radio'
                    name='vote'
                    label={this.props.question.optionTwo.text}
                    id='optionTwo'
                  />
                  <Button variant='primary' type='submit'>
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
