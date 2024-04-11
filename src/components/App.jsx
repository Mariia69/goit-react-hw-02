import './App.css';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Description from './Description/Description';
import Notification from './Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
	const initialState = JSON.parse(localStorage.getItem('feedbackTypes')) || {
		good: 0,
		neutral: 0,
		bad: 0,
	}

	const [feedbackTypes, setFeedbackTypes] = useState(initialState)

	useEffect(() => {
		localStorage.setItem('feedbackTypes', JSON.stringify(feedbackTypes))
	}, [feedbackTypes])

	const handleReset = () => {
		localStorage.removeItem('feedbackTypes')
		window.location.reload()
	}

	const updateFeedback = feedbackType => {
		setFeedbackTypes(prevFeedback => ({
			...prevFeedback,
			[feedbackType]: prevFeedback[feedbackType] + 1,
		}))
	}

	const totalFeedback =
		feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad

	const positivePercentage =
		totalFeedback > 0
			? Math.round(
					((feedbackTypes.good + feedbackTypes.neutral) / totalFeedback) * 100 )
			: 0

	return (
		<>
			<Description
				title='Sip Happens Café'
				content='Please leave your feedback about our service by selecting one of the
				options below.'
			/>
			<Options
				onLeaveFeedback={updateFeedback}
				totalFeedback={totalFeedback}
				handleReset={handleReset}
			/>
			<Notification message='No feedback yet' />
			{totalFeedback > 0 ? (
				<Feedback
					feedbackTypes={feedbackTypes}
					totalFeedback={totalFeedback}
					positivePercentage={positivePercentage}
				/>
			) : null}
		</>
	)
}

export default App