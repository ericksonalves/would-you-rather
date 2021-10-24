import { Component } from 'react';
import { connect } from 'react-redux';
import { Tab, Tabs } from 'react-bootstrap';
import Poll from '../question/Poll';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className='home-box'>
        <Tabs defaultActiveKey='unanswered' className='mb-3'>
          <Tab eventKey='unanswered' title='Unanswered Questions'>
            <Poll
              author='Tyler McGinnis'
              avatar='https://i.pravatar.cc/150?img=13'
              questionPreview='...be a front-end developer...'
            />
          </Tab>
          <Tab eventKey='answered' title='Answered Questions'>
            <Poll
              author='John Doe'
              avatar='https://i.pravatar.cc/150?img=33'
              questionPreview='...write JavaScript...'
            />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ user, users }) {
  return { user, users };
}

export default connect(mapStateToProps)(Home);
