import { useLocation, useNavigate } from "react-router-dom";
import ResultCard from "../components/ResultCard";

function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const result = location.state;

  if (!result) {
    return (
      <div className="page-container">
        <div className="result-container">
          <h2>No quiz result found.</h2>

          <button
            className="primary-btn"
            onClick={() => navigate("/")}
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  const {
    score,
    totalQuestions,
    answers,
  } = result;

  const retakeQuiz = () => {
    navigate("/quiz");
  };

  const returnHome = () => {
    navigate("/");
  };

  return (
    <div className="page-container">
      <div className="result-container">
        <ResultCard
          score={score}
          totalQuestions={totalQuestions}
        />

        <h2 className="review-title">Answer Review</h2>

        <div className="answer-review">
          {answers.map((answer, index) => (
            <div
              key={index}
              className={`review-item ${
                answer.isCorrect
                  ? "review-correct"
                  : "review-incorrect"
              }`}
            >
              <h3>
                {index + 1}. {answer.question}
              </h3>

              <p>
                Your answer:{" "}
                <strong>{answer.selectedAnswer}</strong>
              </p>

              {!answer.isCorrect && (
                <p>
                  Correct answer:{" "}
                  <strong>{answer.correctAnswer}</strong>
                </p>
              )}

              <p>
                {answer.isCorrect
                  ? "✓ Correct"
                  : "✗ Incorrect"}
              </p>
            </div>
          ))}
        </div>

        <div className="result-buttons">
          <button
            className="primary-btn"
            onClick={retakeQuiz}
          >
            Retake Quiz
          </button>

          <button
            className="secondary-btn"
            onClick={returnHome}
          >
            Return Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Result;