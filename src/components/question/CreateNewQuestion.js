import { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import './CreateNewQuestion.css';

class CreateNewQuestion extends Component {
  render() {
    return (
      <div className='new-question-box'>
        <div className='new-question-header'>Create New Question</div>
        <div className='new-question-divider' />
        <div className='new-question-label'>Complete the question:</div>
        <div className='new-question-would-you-rather'>Would you rather...</div>
        <Form>
          <Form.Group className='mb-3' controlId='createNewQuestionForm'>
            <Form.Control
              className='new-question-form-control'
              type='text'
              placeholder='Enter Option One Text Here'
            />
            <Form.Text className='text-muted'>Or</Form.Text>
            <Form.Control
              className='new-question-form-control'
              type='text'
              placeholder='Enter Option Two Text Here'
            />
            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user,
  };
}

export default connect(mapStateToProps)(CreateNewQuestion);
