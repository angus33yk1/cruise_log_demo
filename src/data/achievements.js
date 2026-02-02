// Achievement System Definitions
export const achievementCategories = {
    explorer: {
        name: 'Explorer',
        color: 'ocean',
        icon: '🌍',
        description: 'Discover new destinations'
    },
    collector: {
        name: 'Collector',
        color: 'coral',
        icon: '🚢',
        description: 'Experience different ships and lines'
    },
    diary: {
        name: 'Memory Keeper',
        color: 'seafoam',
        icon: '📖',
        description: 'Document your journey'
    }
};

export const achievements = [
    // Explorer Category
    {
        id: 'first-cruise',
        category: 'explorer',
        name: 'First Voyage',
        description: 'Complete your first cruise',
        icon: '⚓',
        requirement: { type: 'cruises', count: 1 },
        unlocked: true,
        unlockedDate: '2024-01-20'
    },
    {
        id: 'port-explorer-10',
        category: 'explorer',
        name: 'Port Explorer',
        description: 'Visit 10 different ports',
        icon: '🏝️',
        requirement: { type: 'ports', count: 10 },
        progress: 47,
        unlocked: true,
        unlockedDate: '2024-06-15'
    },
    {
        id: 'port-master-25',
        category: 'explorer',
        name: 'Port Master',
        description: 'Visit 25 different ports',
        icon: '🗺️',
        requirement: { type: 'ports', count: 25 },
        progress: 47,
        unlocked: true,
        unlockedDate: '2025-03-10'
    },
    {
        id: 'three-oceans',
        category: 'explorer',
        name: 'Ocean Voyager',
        description: 'Sail on 3 different oceans',
        icon: '🌊',
        requirement: { type: 'oceans', count: 3 },
        progress: 2,
        unlocked: false
    },
    {
        id: 'ten-countries',
        category: 'explorer',
        name: 'World Traveler',
        description: 'Visit 10 different countries',
        icon: '🌏',
        requirement: { type: 'countries', count: 10 },
        progress: 9,
        unlocked: false
    },

    // Collector Category
    {
        id: 'five-ships',
        category: 'collector',
        name: 'Ship Collector',
        description: 'Sail on 5 different ships',
        icon: '⛴️',
        requirement: { type: 'ships', count: 5 },
        progress: 8,
        unlocked: true,
        unlockedDate: '2024-11-17'
    },
    {
        id: 'three-lines',
        category: 'collector',
        name: 'Line Explorer',
        description: 'Experience 3 cruise lines',
        icon: '🎫',
        requirement: { type: 'lines', count: 3 },
        progress: 4,
        unlocked: true,
        unlockedDate: '2024-08-22'
    },
    {
        id: 'back-to-back',
        category: 'collector',
        name: 'Back-to-Back Sailor',
        description: 'Complete consecutive cruises',
        icon: '🔄',
        requirement: { type: 'consecutive', count: 2 },
        progress: 0,
        unlocked: false
    },

    // Diary Category
    {
        id: 'first-memory',
        category: 'diary',
        name: 'First Memory',
        description: 'Add your first diary entry',
        icon: '✍️',
        requirement: { type: 'diary_entries', count: 1 },
        unlocked: true,
        unlockedDate: '2024-01-21'
    },
    {
        id: 'seven-day-streak',
        category: 'diary',
        name: 'Daily Chronicler',
        description: 'Add entries for 7 consecutive days',
        icon: '📅',
        requirement: { type: 'diary_streak', count: 7 },
        progress: 3,
        unlocked: false
    },
    {
        id: 'photo-storyteller',
        category: 'diary',
        name: 'Photo Storyteller',
        description: 'Add 50 photos to your diary',
        icon: '📸',
        requirement: { type: 'photos', count: 50 },
        progress: 23,
        unlocked: false
    },
    {
        id: 'memory-master',
        category: 'diary',
        name: 'Memory Master',
        description: 'Complete diary for entire cruise',
        icon: '🏆',
        requirement: { type: 'complete_diary', count: 1 },
        unlocked: false
    }
];

// Helper function to calculate achievement progress
export function calculateAchievementProgress(achievement, userStats) {
    const { requirement } = achievement;

    switch (requirement.type) {
        case 'cruises':
            return Math.min(userStats.totalCruises, requirement.count);
        case 'ports':
            return Math.min(userStats.totalPorts, requirement.count);
        case 'ships':
            return Math.min(userStats.totalShips, requirement.count);
        case 'lines':
            return Math.min(userStats.totalLines, requirement.count);
        case 'countries':
            return Math.min(userStats.countries?.length || 0, requirement.count);
        case 'diary_entries':
            return Math.min(userStats.totalDiaryEntries || 0, requirement.count);
        case 'photos':
            return Math.min(userStats.totalPhotos || 0, requirement.count);
        default:
            return achievement.progress || 0;
    }
}

// Helper function to check if achievement should be unlocked
export function checkAchievementUnlock(achievement, userStats) {
    const progress = calculateAchievementProgress(achievement, userStats);
    return progress >= achievement.requirement.count;
}
