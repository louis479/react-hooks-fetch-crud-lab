import React from "react";

function QuestionList({ questions, onDeleteQuestion, onUpdateQuestion }) {
  const handleDelete = (id) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteQuestion(id));
  };

  const handleAnswerChange = (id, correctIndex) => {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex }),
    })
      .then((res) => res.json())
      .then((updatedQuestion) => onUpdateQuestion(updatedQuestion));
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h3>{question.prompt}</h3>
            <div>
              <label>Answers:</label>
              <ul>
                {question.answers.map((answer, index) => (
                  <li key={index}>
                    {index + 1}. {answer}
                    {index === question.correctIndex ? " (Correct)" : ""}
                  </li>
                ))}
              </ul>
            </div>
            <label>
              Correct Answer:
              <select
                value={question.correctIndex}
                onChange={(e) =>
                  handleAnswerChange(question.id, parseInt(e.target.value))
                }
              >
                {question.answers.map((_, index) => (
                  <option key={index} value={index}>
                    {index + 1}
                  </option>
                ))}
              </select>
            </label>
            <button onClick={() => handleDelete(question.id)}>
              Delete Question
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
