import { useState, useEffect } from 'react';

import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

import React from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [positiveFeedback, setPositiveFeedback] = useState(0);

  const buttons = ['good', 'neutral', 'bad'];

  useEffect(() => {
    setTotal(good + neutral + bad);
    if (total !== 0) {
      setPositiveFeedback(Math.round((good / total) * 100));
    }
  }, [bad, good, neutral, total]);

  const fidbackIncrement = review => {
    switch (review) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        throw Error(`Value ${review} is invalid`);
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions buttons={buttons} onLeaveFeedback={fidbackIncrement} />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positiveFeedback={positiveFeedback}
            s
          />
        )}
      </Section>
    </>
  );
};

// export class Appx extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   fidbackIncrement = review => {
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         [review]: prevState[review] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = total => {
//     if (this.state.good === 0) {
//       return 0;
//     }
//     return ((this.state.good / total) * 100);
//   };

//   render() {
//     const buttons = Object.keys(this.state);
//     const total = this.countTotalFeedback();
//     const positiveFeedback = this.countPositiveFeedbackPercentage(total);

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             buttons={buttons}
//             onLeaveFeedback={this.fidbackIncrement}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total === 0 ? (
//             <Notification message="There is no feedback" />
//           ) : (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={total}
//               positiveFeedback={positiveFeedback}
//               s
//             />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }
