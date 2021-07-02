import PropTypes from 'prop-types';
import style from './FeedbackOptions'


const FeedbackOptions = ({options, onLeaveFeedback})=>(
    <>
        {options.map(option=>(
            <button 
                key={option} 
                type="button" 
                name={option}
                onClick={onLeaveFeedback}
            >
                {option}
            </button>
        ))}
    </>
);

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
};

export default FeedbackOptions;

