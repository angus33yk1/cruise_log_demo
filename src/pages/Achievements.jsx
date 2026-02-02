import { motion } from 'framer-motion';
import Header from '../components/Header';
import { achievements, achievementCategories } from '../data/achievements';

export default function Achievements({ user }) {
    const groupedAchievements = achievements.reduce((acc, achievement) => {
        const category = achievement.category;
        if (!acc[category]) acc[category] = [];
        acc[category].push(achievement);
        return acc;
    }, {});

    return (
        <div className="min-h-screen">
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
                                <span className="text-3xl">{category.icon}</span>
                                <div>
                                    <h2 className="text-2xl font-display font-semibold text-navy-900">
                                        {category.name}
                                    </h2>
                                    <p className="text-base text-navy-600">{category.description}</p>
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
                                            className={`glass-card rounded-2xl p-4 ${achievement.unlocked ? 'ring-2 ring-ocean-400' : ''
                                                }`}
                                        >
                                            <div className="flex flex-col items-center text-center space-y-3">
                                                {/* Icon */}
                                                <div className={`text-4xl ${achievement.unlocked ? '' : 'grayscale opacity-50'}`}>
                                                    {achievement.icon}
                                                </div>

                                                {/* Name */}
                                                <div>
                                                    <h3 className="text-base font-semibold text-navy-900">
                                                        {achievement.name}
                                                    </h3>
                                                    <p className="text-sm text-navy-600 mt-1">
                                                        {achievement.description}
                                                    </p>
                                                </div>

                                                {/* Progress */}
                                                {!achievement.unlocked && (
                                                    <div className="w-full">
                                                        <div className="flex justify-between text-xs text-navy-600 mb-1">
                                                            <span>{progress}</span>
                                                            <span>{target}</span>
                                                        </div>
                                                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                                                            <motion.div
                                                                initial={{ width: 0 }}
                                                                animate={{ width: `${percentage}%` }}
                                                                transition={{ duration: 0.5, delay: catIndex * 0.1 + index * 0.05 + 0.2 }}
                                                                className="h-full ocean-gradient"
                                                            />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Unlocked Badge */}
                                                {achievement.unlocked && (
                                                    <div className="text-xs font-medium text-ocean-700 bg-ocean-100 px-3 py-1 rounded-full">
                                                        Unlocked ✓
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
