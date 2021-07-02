
import React, { Component } from "react";
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';



class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const name = e.target.name;
    this.setState(state => ({
      ...state,
      [name]: this.state[name] + 1
    }));
  };
    
   
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    const positivePercentage = Math.round((good / total) * 100);
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={options} onLeaveFeedback={this.handleClick} />
        </Section>
        <Section title={'Statistics'}>
          {total > 0
            ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={positivePercentage} />
            : < Notification message={'No feedback given'}/>}
        </Section>
        </>
    )
}
}

export default App;