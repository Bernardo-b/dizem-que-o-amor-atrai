import { useState, useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { motion, AnimatePresence } from 'framer-motion'
import './MusicPlayer.css'

function MusicPlayer({ isPlaying }) {
  const [isPaused, setIsPaused] = useState(false)
  const soundRef = useRef(null)

  useEffect(() => {
    // INSTRUÇÕES: Adicione seu arquivo de música em /public/assets/music/
    // e atualize o src abaixo (ex: '/assets/music/sua-musica.mp3')

    if (isPlaying && !soundRef.current) {
      soundRef.current = new Howl({
        src: ['/assets/music/background.mp3'],
        loop: true,
        volume: 0.5,
        onloaderror: function(id, error) {
          console.log('Erro ao carregar música:', error)
          console.log('Adicione sua música em /public/assets/music/background.mp3')
        },
        onplayerror: function(id, error) {
          console.log('Erro ao tocar música:', error)
        }
      })

      soundRef.current.play()
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
        soundRef.current = null
      }
    }
  }, [isPlaying])

  const togglePlay = () => {
    if (soundRef.current) {
      if (isPaused) {
        soundRef.current.play()
        setIsPaused(false)
      } else {
        soundRef.current.pause()
        setIsPaused(true)
      }
    }
  }

  return (
    <AnimatePresence>
      {isPlaying && (
        <motion.button
          className="music-button"
          onClick={togglePlay}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={isPaused ? 'Reproduzir' : 'Pausar'}
        >
          {isPaused ? '▶' : '⏸'}
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default MusicPlayer
