import { motion } from 'framer-motion'
import './BackButton.css'

function BackButton({ onClick }) {
  return (
    <motion.button
      className="back-button"
      onClick={onClick}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, x: -5 }}
      whileTap={{ scale: 0.9 }}
    >
      ←
    </motion.button>
  )
}

export default BackButton
