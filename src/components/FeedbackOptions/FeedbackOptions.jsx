import PropTypes from 'prop-types';

export const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <div>
      {buttons.map((button, id) => {
        return (
          <button
            key={id}
            type="button"
            name={button}
            onClick={() => {
              onLeaveFeedback(button);
            }}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.node.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
