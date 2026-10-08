import AnswerOption from "./AnswerOption";

function QuestionCard({
  question,
  selectedAnswer,
  answered,
  onSelectAnswer,
}) {
  return (
    <div className="question-card">
      <p className="question-number">
        Question {question.id}
      </p>

      <h2>{question.question}</h2>

      <div className="answers-container">
        {question.choices.map((choice, index) => (
          <AnswerOption
            key={index}
            choice={choice}
            selectedAnswer={selectedAnswer}
            correctAnswer={question.correctAnswer}
            answered={answered}
            onSelect={onSelectAnswer}
          />
        ))}
      </div>

      {answered && (
        <div className="feedback">
          {selectedAnswer === question.correctAnswer ? (
            <p className="correct-message">
              ✓ Correct answer!
            </p>
          ) : (
            <p className="incorrect-message">
              ✗ Incorrect. The correct answer is{" "}
              <strong>{question.correctAnswer}</strong>.
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionCard;