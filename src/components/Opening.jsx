import { motion } from 'framer-motion'
import '../styles/animations.css'
import './Opening.css'

function Opening({ onNext }) {
  return (
    <div className="opening-container">
      <motion.div
        className="opening-content"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Decoração de lírio */}
        <motion.div
          className="lily-decoration top"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          🌸
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          feliz aniversário, meu amor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          eu fiz uma surpresa para você.
        </motion.p>

        {/* Decoração de lírio inferior */}
        <motion.div
          className="lily-decoration bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
        >
          🌸
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Opening
