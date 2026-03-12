import { motion } from 'framer-motion'
import './Ending.css'

function Ending({ onRestart }) {
  return (
    <div className="ending-container">
      <motion.div
        className="ending-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="hearts-decoration"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        >
          ♥
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          feliz aniversário
        </motion.h1>

        <motion.p
          className="main-message"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          obrigado por dividir a vida comigo
        </motion.p>

        <motion.div
          className="flower-decoration"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          🌸 🌸 🌸
        </motion.div>

        <motion.div
          className="ending-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <motion.button
            onClick={onRestart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            voltar ao início
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Ending
