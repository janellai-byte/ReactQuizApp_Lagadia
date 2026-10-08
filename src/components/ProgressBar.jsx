function ProgressBar({ currentQuestion, totalQuestions }) {
  const progress =
    ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="progress-section">
      <div className="progress-info">
        <span>
          Question {currentQuestion + 1} of {totalQuestions}
        </span>

        <span>{Math.round(progress)}%</span>
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;