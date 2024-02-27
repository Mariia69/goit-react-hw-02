import PropTypes from "prop-types"

const Feedback = ({feedbackTypes, totalFeedback, positivePercentage}) => {
  return (
		<div>
			<ul>
				{Object.keys(feedbackTypes).map(type => (
					<li key={type}>
						{type}: {feedbackTypes[type]}
					</li>
				))}
			</ul>
			<p>Total: {totalFeedback}</p>
			{positivePercentage !== undefined && (
				<p>Positive: {positivePercentage}%</p>
			)}
		</div>
	)
}

Feedback.propTypes = {
  feedbackTypes: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
}

export default Feedback