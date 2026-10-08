import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="page-container">
      <div className="home-card">
        <p className="welcome-text">Welcome to the</p>

        <h1>
          Frontend <span>Quiz!</span>
        </h1>

        <p className="description">
          Test your knowledge of HTML, CSS, JavaScript, and React.
        </p>

        <button className="primary-btn" onClick={startQuiz}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Home;