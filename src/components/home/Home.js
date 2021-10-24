import { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import Poll from '../question/Poll';
import {
  getQuestionPreview,
  findMatchingUserId,
  hasAnsweredQuestion,
} from '../../utils/dataUtils';
import './Home.css';

class Home extends Component {
  getAnsweredQuestions = () => {
    return this.props.questions.filter((question) =>
      hasAnsweredQuestion(this.props.user.id, question)
    );
  };

  getUnansweredQuestions = () => {
    return this.props.questions.filter(
      (question) => !hasAnsweredQuestion(this.props.user.id, question)
    );
  };

  renderQuestions = (questions) => {
    return questions.map((question) => {
      const author = findMatchingUserId(question.author, this.props.users);

      return (
        <div className='home-poll'>
          <Poll
            author={author.name}
            avatar={author.avatarURL}
            questionPreview={getQuestionPreview(question)}
          />
        </div>
      );
    });
  };

  render() {
    return (
      <div className='home-box'>
        <Tabs defaultActiveKey='unanswered' className='mb-3'>
          <Tab eventKey='unanswered' title='Unanswered Questions'>
            {this.renderQuestions(this.getUnansweredQuestions())}
          </Tab>
          <Tab eventKey='answered' title='Answered Questions'>
            {this.renderQuestions(this.getAnsweredQuestions())}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, user, users }) {
  return { questions, user, users };
}

export default connect(mapStateToProps)(Home);
