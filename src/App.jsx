import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Opening from './components/Opening'
import CheeksQuestion from './components/CheeksQuestion'
import Gallery from './components/Gallery'
import Stats from './components/Stats'
import Sudoku from './components/Sudoku'
import Letter from './components/Letter'
import Ending from './components/Ending'
import MusicPlayer from './components/MusicPlayer'
import BackButton from './components/BackButton'
import './styles/App.css'

// Páginas do site
const PAGES = {
  INTRO: 0, // Opening + CheeksQuestion (scroll)
  CONTENT: 1, // Gallery + Stats + Sudoku (scroll)
  LETTER: 2,
  ENDING: 3,
}

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.INTRO)
  const [musicStarted, setMusicStarted] = useState(false)
  const [sudokuSolved, setSudokuSolved] = useState(false)

  const handleCheeksAnswer = () => {
    setMusicStarted(true)
    setCurrentPage(PAGES.CONTENT)
  }

  const handleSudokuSolved = () => {
    setSudokuSolved(true)
    setCurrentPage(PAGES.LETTER)
  }

  const goBack = () => {
    if (currentPage === PAGES.CONTENT) {
      setCurrentPage(PAGES.INTRO)
    } else if (currentPage > PAGES.INTRO) {
      setCurrentPage(currentPage - 1)
    }
  }

  const restartExperience = () => {
    setCurrentPage(PAGES.INTRO)
    setMusicStarted(false)
    setSudokuSolved(false)
  }

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

  return (
    <div className="app-container">
      {/* Botão de voltar - aparece em todas as páginas exceto INTRO */}
      {currentPage > PAGES.INTRO && <BackButton onClick={goBack} />}

      <AnimatePresence mode="wait">
        {currentPage === PAGES.INTRO && (
          <motion.div
            key="intro"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="scroll-container"
          >
            <section className="scroll-section">
              <Opening onNext={() => {}} />
            </section>
            <section className="scroll-section">
              <CheeksQuestion onNext={handleCheeksAnswer} />
            </section>
          </motion.div>
        )}

        {currentPage === PAGES.CONTENT && (
          <motion.div
            key="content"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="scroll-container"
            data-page="content"
          >
            <section className="scroll-section">
              <Gallery onNext={() => {}} />
            </section>
            <section className="scroll-section">
              <Stats onNext={() => {}} />
            </section>
            <section className="scroll-section">
              <Sudoku onNext={handleSudokuSolved} />
            </section>
          </motion.div>
        )}

        {currentPage === PAGES.LETTER && sudokuSolved && (
          <motion.div
            key="letter"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Letter onNext={() => setCurrentPage(PAGES.ENDING)} />
          </motion.div>
        )}

        {currentPage === PAGES.ENDING && (
          <motion.div
            key="ending"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <Ending onRestart={restartExperience} />
          </motion.div>
        )}
      </AnimatePresence>

      <MusicPlayer isPlaying={musicStarted} />
    </div>
  )
}

export default App
