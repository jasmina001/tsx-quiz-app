import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './App.css'

type Question = {
  id: string
  text: string
}

export default function App() {
  const [questions, setQuestions] = useState<Question[]>([
    { id: crypto.randomUUID(), text: 'Frontend nima?' },
    { id: crypto.randomUUID(), text: 'JavaScript nima?' },
  ])
  const [answers, setAnswers] = useState<{ [id: string]: string }>({})
  const [submitted, setSubmitted] = useState<{ [id: string]: string }>({})
  const [newQuestion, setNewQuestion] = useState('')

  const handleAnswerChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }))
  }

  const handleSend = (id: string) => {
    const answer = answers[id]?.trim()
    if (answer) {
      setSubmitted(prev => ({ ...prev, [id]: answer }))
      setAnswers(prev => ({ ...prev, [id]: '' }))
    }
  }

  const handleAddQuestion = () => {
    if (newQuestion.trim()) {
      const newQ = {
        id: crypto.randomUUID(),
        text: newQuestion.trim()
      }
      setQuestions(prev => [...prev, newQ])
      setNewQuestion('')
    }
  }

  return (
    <div className="container">
      {questions.map((q) => (
        <div className="question-block" key={q.id}>
          <div className="question-title">{q.text}</div>

          <input
            type="text"
            className="answer-input"
            placeholder="Javob yozing..."
            value={answers[q.id] || ''}
            onChange={(e) => handleAnswerChange(q.id, e.target.value)}
          />
          <button
            className="send-btn"
            onClick={() => handleSend(q.id)}
            disabled={!answers[q.id]?.trim()}
          >
            Send
          </button>

          <AnimatePresence>
            {submitted[q.id] && (
              <motion.div
                className="submitted-answer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
              >
                <strong>Javob:</strong> {submitted[q.id]}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className="question-block">
        <input
          type="text"
          className="answer-input"
          placeholder="Yangi savol yozing..."
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button className="send-btn" onClick={handleAddQuestion}>Add</button>
      </div>
    </div>
  )
}
