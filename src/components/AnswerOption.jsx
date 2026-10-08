function AnswerOption({
  choice,
  selectedAnswer,
  correctAnswer,
  answered,
  onSelect,
}) {
  let className = "answer-option";

  if (selectedAnswer === choice) {
    className += " selected";
  }

  if (answered) {
    if (choice === correctAnswer) {
      className += " correct";
    } else if (
      choice === selectedAnswer &&
      selectedAnswer !== correctAnswer
    ) {
      className += " incorrect";
    }
  }

  return (
    <button
      className={className}
      onClick={() => onSelect(choice)}
      disabled={answered}
    >
      {choice}
    </button>
  );
}

export default AnswerOption;