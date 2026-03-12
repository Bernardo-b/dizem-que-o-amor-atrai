import { motion } from 'framer-motion'
import { photos } from '../data/photos'
import './Gallery.css'

function Gallery({ onNext }) {
  return (
    <div className="gallery-container">
      <motion.div
        className="gallery-header"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2>momentos</h2>
      </motion.div>

      <div className="gallery-grid">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="polaroid"
            style={{ '--rotation': `${photo.rotation}deg` }}
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              duration: 0.6,
              type: 'spring',
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.05,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            <div className="polaroid-image">
              <img
                src={photo.src}
                alt=""
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400"%3E%3Crect fill="%23efe9df" width="400" height="400"/%3E%3Ctext fill="%234a4a4a" font-family="Arial" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EAdicione sua foto%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
