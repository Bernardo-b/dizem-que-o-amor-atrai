import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { relationshipStartDate } from '../data/stats'
import { calculateDetailedTime } from '../utils/dateCalculator'
import './Stats.css'

function Stats({ onNext }) {
  const [time, setTime] = useState(calculateDetailedTime(relationshipStartDate))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateDetailedTime(relationshipStartDate))
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatMainDuration = () => {
    const parts = []
    if (time.years > 0) parts.push(`${time.years} ${time.years === 1 ? 'ano' : 'anos'}`)
    if (time.months > 0) parts.push(`${time.months} ${time.months === 1 ? 'mês' : 'meses'}`)
    if (time.days > 0) parts.push(`${time.days} ${time.days === 1 ? 'dia' : 'dias'}`)

    if (parts.length === 0) return '0 dias'
    if (parts.length === 1) return parts[0]
    if (parts.length === 2) return parts.join(' e ')
    return `${parts[0]}, ${parts[1]} e ${parts[2]}`
  }

  return (
    <div className="stats-container">
      <motion.div
        className="stats-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>tempo juntos</h2>
      </motion.div>

      <motion.div
        className="time-together-card"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.div
          className="main-duration"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <div className="time-icon">💕</div>
          <h3>{formatMainDuration()}</h3>
        </motion.div>

        <div className="time-totals">
          <motion.div
            className="time-total-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="total-number">{time.totalDays.toLocaleString('pt-BR')}</span>
            <span className="total-label">dias</span>
          </motion.div>

          <motion.div
            className="time-total-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span className="total-number">{time.totalHours.toLocaleString('pt-BR')}</span>
            <span className="total-label">horas</span>
          </motion.div>

          <motion.div
            className="time-total-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <span className="total-number">{time.totalMinutes.toLocaleString('pt-BR')}</span>
            <span className="total-label">minutos</span>
          </motion.div>

          <motion.div
            className="time-total-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <span className="total-number">{time.totalSeconds.toLocaleString('pt-BR')}</span>
            <span className="total-label">segundos</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}

export default Stats
