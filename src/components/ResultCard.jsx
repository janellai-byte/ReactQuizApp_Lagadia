function ResultCard({ score, totalQuestions }) {
  const percentage = Math.round(
    (score / totalQuestions) * 100
  );

  const incorrectAnswers = totalQuestions - score;

  let message = "";

  if (percentage >= 80) {
    message = "Excellent work! 🎉";
  } else if (percentage >= 60) {
    message = "Good job! 👍";
  } else {
    message = "Keep practicing! 💪";
  }

  return (
    <div className="result-card">
      <p className="completed-text">Quiz Completed!</p>

      <h1>Your Score</h1>

      <div className="score-circle">
        <span>{score}</span>
        <small>/{totalQuestions}</small>
      </div>

      <h2>{percentage}%</h2>

      <p className="result-message">{message}</p>

      <div className="result-statistics">
        <div className="stat-box">
          <span>Total Questions</span>
          <strong>{totalQuestions}</strong>
        </div>

        <div className="stat-box correct-stat">
          <span>Correct</span>
          <strong>{score}</strong>
        </div>

        <div className="stat-box incorrect-stat">
          <span>Incorrect</span>
          <strong>{incorrectAnswers}</strong>
        </div>

        <div className="stat-box">
          <span>Percentage</span>
          <strong>{percentage}%</strong>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;