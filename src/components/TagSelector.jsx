import { motion } from 'framer-motion';

const tags = [
    { id: 'food', label: 'Food', icon: '🍽️', color: 'bg-coral/20 text-coral border-coral/30' },
    { id: 'show', label: 'Show', icon: '🎭', color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { id: 'excursion', label: 'Excursion', icon: '🏝️', color: 'bg-ocean-100 text-ocean-700 border-ocean-300' },
    { id: 'seaday', label: 'Sea Day', icon: '🌊', color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { id: 'people', label: 'People', icon: '👥', color: 'bg-seafoam/30 text-green-700 border-green-300' }
];

export default function TagSelector({ selectedTags = [], onChange, multiple = true }) {
    const handleTagClick = (tagId) => {
        if (multiple) {
            const newTags = selectedTags.includes(tagId)
                ? selectedTags.filter(t => t !== tagId)
                : [...selectedTags, tagId];
            onChange(newTags);
        } else {
            onChange(selectedTags.includes(tagId) ? [] : [tagId]);
        }
    };

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag.id);

                return (
                    <motion.button
                        key={tag.id}
                        onClick={() => handleTagClick(tag.id)}
                        className={`tag-pill transition-all duration-200 ${isSelected
                                ? tag.color + ' ring-2 ring-offset-2 ring-current'
                                : 'bg-gray-100 text-gray-600 border-gray-300'
                            }`}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-lg">{tag.icon}</span>
                        <span>{tag.label}</span>
                    </motion.button>
                );
            })}
        </div>
    );
}
