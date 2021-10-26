import { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import PollPreview from '../question/PollPreview';
import {
  getQuestionPreview,
  findMatchingUserId,
  hasAnsweredQuestion,
  questionComparator,
} from '../../utils/dataUtils';
import './Home.css';

class Home extends Component {
  renderQuestions = (answered, questions) => {
    return questions.sort(questionComparator).map((question) => {
      const author = findMatchingUserId(question.author, this.props.users);

      return (
        <div className='home-poll' key={question.id}>
          <PollPreview
            answered={answered}
            author={author.name}
            avatar={author.avatarURL}
            pollId={question.id}
            questionPreview={getQuestionPreview(question)}
          />
        </div>
      );
    });
  };

  render() {
    console.log(this.props.questions);

    return (
      <div className='home-box'>
        <Tabs defaultActiveKey='unanswered' className='mb-3'>
          <Tab eventKey='unanswered' title='Unanswered Questions'>
            {this.renderQuestions(false, this.props.unansweredQuestions)}
          </Tab>
          <Tab eventKey='answered' title='Answered Questions'>
            {this.renderQuestions(true, this.props.answeredQuestions)}
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, user, users }) {
  const answeredQuestions = questions.filter((question) =>
    hasAnsweredQuestion(user.id, question)
  );

  const unansweredQuestions = questions.filter(
    (question) => !hasAnsweredQuestion(user.id, question)
  );

  return { questions, user, users, answeredQuestions, unansweredQuestions };
}

export default connect(mapStateToProps)(Home);
