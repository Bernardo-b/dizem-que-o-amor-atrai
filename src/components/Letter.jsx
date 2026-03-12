import { motion } from 'framer-motion'
import { letter } from '../data/letter'
import './Letter.css'

function Letter({ onNext }) {
  return (
    <div className="letter-container">
      <div className="letter-paper">
        <motion.div
          className="letter-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Decoração superior */}
          <motion.div
            className="letter-decoration top"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            ✽
          </motion.div>

          {/* Seções da carta */}
          {letter.sections.map((section, index) => (
            <motion.div
              key={section.id}
              className="letter-section"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.3,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <p>{section.content}</p>
            </motion.div>
          ))}

          {/* Decoração inferior */}
          <motion.div
            className="letter-decoration bottom"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.5 + letter.sections.length * 0.3,
              duration: 0.8,
            }}
          >
            ✽
          </motion.div>

          {/* Botão continuar */}
          <motion.div
            className="letter-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5 + letter.sections.length * 0.3 + 0.5,
              duration: 0.8,
            }}
          >
            <motion.button
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ♥
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Letter
