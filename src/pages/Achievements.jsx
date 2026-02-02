import { motion } from 'framer-motion';
import Header from '../components/Header';
import { achievements, achievementCategories } from '../data/achievements';

// SVG Icons for achievements
const StarIcon = () => (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);

const CheckIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20,6 9,17 4,12" />
    </svg>
);

export default function Achievements({ user }) {
    const groupedAchievements = achievements.reduce((acc, achievement) => {
        const category = achievement.category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(achievement);
        return acc;
    }, {});

    return (
        <div className="min-h-screen bg-cruise-dark pb-24">
            <Header
                title="Achievements"
                subtitle="Your sailing milestones"
            />

            <div className="p-6 space-y-8">
                {Object.entries(groupedAchievements).map(([categoryKey, categoryAchievements], catIndex) => {
                    const category = achievementCategories[categoryKey];

                    return (
                        <motion.div
                            key={categoryKey}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="text-3xl text-cruise-gold">
                                    <StarIcon />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-display font-semibold text-white">
                                        {category.name}
                                    </h2>
                                    <p className="text-base text-white/60">{category.description}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {categoryAchievements.map((achievement, index) => {
                                    const progress = achievement.progress || 0;
                                    const target = achievement.requirement.count;
                                    const percentage = achievement.unlocked ? 100 : Math.min((progress / target) * 100, 100);

                                    return (
                                        <motion.div
                                            key={achievement.id}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                                            className={`cruise-panel rounded-2xl p-4 ${achievement.unlocked ? 'ring-2 ring-cruise-gold' : ''
                                                }`}
                                        >
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                {/* Icon */}
                                                <div className={`text-4xl ${achievement.unlocked
                                                        ? 'text-cruise-gold'
                                                        : 'text-white/30'
                                                    }`}>
                                                    <StarIcon />
                                                </div>

                                                {/* Name */}
                                                <div>
                                                    <h3 className="text-base font-semibold text-white">
                                                        {achievement.name}
                                                    </h3>
                                                    <p className="text-sm text-white/60 mt-1">
                                                        {achievement.description}
                                                    </p>
                                                </div>

                                                {/* Progress */}
                                                {!achievement.unlocked && (
                                                    <div className="w-full">
                                                        <div className="flex justify-between text-xs text-white/60 mb-1">
                                                            <span>{progress}</span>
                                                            <span>{target}</span>
                                                        </div>
                                                        <div className="w-full h-2 bg-cruise-border rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${percentage}%` }}
                                                                transition={{ duration: 0.5, delay: catIndex * 0.1 + index * 0.05 + 0.2 }}
                                                                className="h-full bg-cruise-accent"
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Unlocked Badge */}
                                                {achievement.unlocked && (
                                                    <div className="flex items-center gap-1 text-xs font-medium text-cruise-dark bg-cruise-gold px-3 py-1 rounded-full">
                                                        <CheckIcon />
                                                        Unlocked
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
