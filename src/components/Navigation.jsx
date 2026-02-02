import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navigation() {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: '🏠', label: 'Home' },
        { path: '/diary/cruise-1', icon: '📖', label: 'Diary' },
        { path: '/achievements', icon: '🏆', label: 'Achievements' },
        { path: '/future', icon: '🗓️', label: 'Future' },
        { path: '/social', icon: '👥', label: 'Social' }
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 safe-area-bottom">
            <div className="glass-card border-t-2 border-ocean-200/30 rounded-t-3xl">
                <div className="flex justify-around items-center px-4 py-3">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path ||
                            (item.path.includes('/diary') && location.pathname.includes('/diary'));

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="relative flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all duration-200"
                            >
                                <div className={`text-2xl transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'
                                    }`}>
                                    {item.icon}
                                </div>
                                <span className={`text-xs font-medium transition-colors duration-200 ${isActive ? 'text-ocean-700' : 'text-navy-500'
                                    }`}>
                                    {item.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-ocean-100/50 rounded-xl -z-10"
                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
