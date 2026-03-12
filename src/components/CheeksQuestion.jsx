import { motion } from 'framer-motion'
import './CheeksQuestion.css'

function CheeksQuestion({ onNext }) {
  const answers = ['sim', 'óbvio', 'muito']

  return (
    <div className="cheeks-container">
      <motion.div
        className="cheeks-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="question-box"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <motion.p
            className="question-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            você ainda gosta das minhas bochechinhas?
          </motion.p>

          <motion.div
            className="buttons-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {answers.map((answer, index) => (
              <motion.button
                key={answer}
                onClick={onNext}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, backgroundColor: 'var(--color-pink)' }}
                whileTap={{ scale: 0.95 }}
              >
                {answer}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default CheeksQuestion
