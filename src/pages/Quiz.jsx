import { useState } from "react";
import { useNavigate } from "react-router-dom";
import questions from "../data/questions";
import QuestionCard from "../components/QuestionCard";
import ProgressBar from "../components/ProgressBar";

function Quiz() {
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const question = questions[currentQuestion];

  const handleSelectAnswer = (answer) => {
    if (!answered) {
      setSelectedAnswer(answer);
    }
  };

  const handleSubmit = () => {
    if (!selectedAnswer) {
      alert("Please select an answer first.");
      return;
    }

    const isCorrect =
      selectedAnswer === question.correctAnswer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setUserAnswers((prev) => [
      ...prev,
      {
        question: question.question,
        selectedAnswer,
        correctAnswer: question.correctAnswer,
        isCorrect,
      },
    ]);

    setAnswered(true);
  };

  const handleNext = () => {
    const isLastQuestion =
      currentQuestion === questions.length - 1;

    if (isLastQuestion) {
      navigate("/result", {
        state: {
          score,
          totalQuestions: questions.length,
          answers: userAnswers,
        },
      });

      return;
    }

    setCurrentQuestion((prev) => prev + 1);
    setSelectedAnswer("");
    setAnswered(false);
  };

  return (
    <div className="page-container">
      <div className="quiz-container">
        <div className="quiz-header">
          <h1>Frontend Quiz</h1>
          <p>Choose the correct answer.</p>
        </div>

        <ProgressBar
          currentQuestion={currentQuestion}
          totalQuestions={questions.length}
        />

        <QuestionCard
          question={question}
          selectedAnswer={selectedAnswer}
          answered={answered}
          onSelectAnswer={handleSelectAnswer}
        />

        <div className="quiz-actions">
          {!answered ? (
            <button
              className="primary-btn"
              onClick={handleSubmit}
            >
              Submit Answer
            </button>
          ) : (
            <button
              className="primary-btn"
              onClick={handleNext}
            >
              {currentQuestion === questions.length - 1
                ? "View Results"
                : "Next Question"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;