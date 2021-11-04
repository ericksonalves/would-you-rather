import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Button, Form } from 'react-bootstrap';
import './CreateNewQuestion.css';
import { handleAddQuestion } from '../../actions/question';

class CreateNewQuestion extends Component {
  state = {
    firstOption: '',
    secondOption: '',
    toHome: false,
  };

  handleFirstOptionChange = (event) => {
    const text = event.target.value;

    this.setState(() => ({
      firstOption: text,
    }));
  };

  handleSecondOptionChange = (event) => {
    const text = event.target.value;

    this.setState(() => ({
      secondOption: text,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { firstOption, secondOption } = this.state;

    const { dispatch } = this.props;

    dispatch(handleAddQuestion(firstOption, secondOption));

    this.setState(() => ({
      firstOption: '',
      secondOption: '',
      toHome: true,
    }));
  };

  render() {
    const { firstOption, secondOption, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to='/home' />;
    }

    return (
      <div className='new-question-box'>
        <div className='new-question-header'>Create New Question</div>
        <div className='new-question-divider' />
        <div className='new-question-label'>Complete the question:</div>
        <div className='new-question-would-you-rather'>Would you rather...</div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className='mb-3' controlId='createNewQuestionForm'>
            <Form.Control
              className='new-question-form-control'
              type='text'
              placeholder='Enter Option One Text Here'
              value={firstOption}
              onChange={this.handleFirstOptionChange}
            />
            <Form.Text className='text-muted'>Or</Form.Text>
            <Form.Control
              className='new-question-form-control'
              type='text'
              placeholder='Enter Option Two Text Here'
              value={secondOption}
              onChange={this.handleSecondOptionChange}
            />
            <Button
              variant='primary'
              type='submit'
              disabled={firstOption.trim() === '' || secondOption.trim() === ''}
            >
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
