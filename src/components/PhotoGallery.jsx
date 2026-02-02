import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PhotoGallery({ photos, onPhotoClick }) {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (photo, index) => {
        setSelectedPhoto({ photo, index });
        if (onPhotoClick) onPhotoClick(photo, index);
    };

    return (
        <>
            <div className="grid grid-cols-2 gap-3">
                {photos.map((photo, index) => (
                    <motion.div
                        key={index}
                        className="photo-container cursor-pointer card-interactive"
                        onClick={() => handlePhotoClick(photo, index)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <img
                            src={photo}
                            alt={`Memory ${index + 1}`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedPhoto && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                        onClick={() => setSelectedPhoto(null)}
                    >
                        <motion.img
                            initial={{ scale: 0.8 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.8 }}
                            src={selectedPhoto.photo}
                            alt={`Memory ${selectedPhoto.index + 1}`}
                            className="max-w-full max-h-full object-contain rounded-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />

                        <button
                            onClick={() => setSelectedPhoto(null)}
                            className="absolute top-6 right-6 text-white text-4xl hover:text-ocean-300 transition-colors"
                        >
                            ×
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
