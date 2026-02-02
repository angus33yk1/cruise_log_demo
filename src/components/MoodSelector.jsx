import { motion } from 'framer-motion';

const moods = [
    { id: 'happy', emoji: '😊', label: 'Happy' },
    { id: 'love', emoji: '😍', label: 'Loved it' },
    { id: 'amazing', emoji: '🤩', label: 'Amazing' },
    { id: 'peaceful', emoji: '😌', label: 'Peaceful' },
    { id: 'ocean', emoji: '🌊', label: 'Ocean vibes' }
];

export default function MoodSelector({ selectedMood, onChange }) {
    return (
        <div className="flex gap-3 justify-center">
            {moods.map((mood) => {
                const isSelected = selectedMood === mood.emoji;

                return (
                    <motion.button
                        key={mood.id}
                        onClick={() => onChange(mood.emoji)}
                        className={`flex flex-col items-center gap-1 p-3 rounded-2xl transition-all duration-200 ${isSelected
                                ? 'bg-ocean-100 ring-2 ring-ocean-400 scale-110'
                                : 'bg-gray-100 hover:bg-gray-200'
                            }`}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className="text-3xl">{mood.emoji}</span>
                        <span className={`text-xs font-medium ${isSelected ? 'text-ocean-700' : 'text-gray-600'
                            }`}>
                            {mood.label}
                        </span>
                    </motion.button>
                );
            })}
        </div>
    );
}
