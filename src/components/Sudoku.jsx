import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  initialPuzzle,
  copyBoard,
  isValidMove,
  isPuzzleComplete,
  isFixedCell,
  solution,
} from '../utils/sudokuGenerator'
import './Sudoku.css'

function Sudoku({ onNext }) {
  const [board, setBoard] = useState(copyBoard(initialPuzzle))
  const [selectedCell, setSelectedCell] = useState(null)
  const [isComplete, setIsComplete] = useState(false)
  const [errors, setErrors] = useState(new Set())
  const [cheatInput, setCheatInput] = useState('')

  useEffect(() => {
    if (isPuzzleComplete(board)) {
      setIsComplete(true)
    }
  }, [board])

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key >= '0' && e.key <= '9') {
        setCheatInput(prev => prev + e.key)
        if (prev.length >= 4) {
          setCheatInput('')
        }
      } else if (e.key === 'Backspace') {
        setCheatInput(prev => prev.slice(0, -1))
      }

      // Cheat code: 1234 + limpar (BackSpace)
      if (cheatInput === '123' && e.key === '4') {
        setCheatInput('1234')
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [cheatInput])

  const handleCheat = () => {
    if (cheatInput === '1234') {
      setBoard(solution.map(row => [...row]))
      setIsComplete(true)
      setCheatInput('')
    }
  }

  const handleCellClick = (row, col) => {
    if (!isFixedCell(row, col)) {
      setSelectedCell({ row, col })
    }
  }

  const handleNumberInput = (num) => {
    if (selectedCell) {
      const { row, col } = selectedCell
      if (!isFixedCell(row, col)) {
        const newBoard = copyBoard(board)
        newBoard[row][col] = num

        // Verifica se o movimento é válido
        if (num !== 0 && !isValidMove(newBoard, row, col, num)) {
          setErrors(new Set(errors).add(`${row}-${col}`))
        } else {
          const newErrors = new Set(errors)
          newErrors.delete(`${row}-${col}`)
          setErrors(newErrors)
        }

        setBoard(newBoard)
      }
    }
  }

  const handleClear = () => {
    // Cheat code: ao clicar em limpar com 1234 digitado
    if (cheatInput === '1234') {
      handleCheat()
      return
    }

    if (selectedCell) {
      const { row, col } = selectedCell
      if (!isFixedCell(row, col)) {
        const newBoard = copyBoard(board)
        newBoard[row][col] = 0
        setBoard(newBoard)

        const newErrors = new Set(errors)
        newErrors.delete(`${row}-${col}`)
        setErrors(newErrors)
      }
    }
  }

  const hasError = (row, col) => {
    return errors.has(`${row}-${col}`)
  }

  return (
    <div className="sudoku-container">
      <motion.div
        className="sudoku-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="sudoku-header"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2>resolva esse desafio</h2>
          <p>para uma surpresa especial</p>
        </motion.div>

        <motion.div
          className="sudoku-board"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {board.map((row, rowIndex) => (
            <div key={rowIndex} className="sudoku-row">
              {row.map((cell, colIndex) => {
                const isSelected =
                  selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                const isFixed = isFixedCell(rowIndex, colIndex)
                const cellHasError = hasError(rowIndex, colIndex)

                return (
                  <motion.div
                    key={`${rowIndex}-${colIndex}`}
                    className={`sudoku-cell ${isFixed ? 'fixed' : ''} ${
                      isSelected ? 'selected' : ''
                    } ${cellHasError ? 'error' : ''}`}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
                    whileHover={!isFixed ? { scale: 1.05 } : {}}
                    whileTap={!isFixed ? { scale: 0.95 } : {}}
                  >
                    {cell !== 0 ? cell : ''}
                  </motion.div>
                )
              })}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="sudoku-controls"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="number-pad">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <motion.button
                key={num}
                onClick={() => handleNumberInput(num)}
                disabled={!selectedCell}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {num}
              </motion.button>
            ))}
          </div>
          <div className="sudoku-actions">
            <motion.button
              className="clear-btn"
              onClick={handleClear}
              disabled={!selectedCell}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              limpar
            </motion.button>
            <motion.button
              className="skip-btn"
              onClick={onNext}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              pular
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isComplete && (
            <motion.div
              className="completion-message"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, type: 'spring' }}
            >
              <div className="completion-content">
                <div className="completion-icon">✨</div>
                <h3>parabéns!</h3>
                <p>você conseguiu resolver o desafio</p>
                <motion.button
                  onClick={onNext}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  abrir a surpresa
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default Sudoku
