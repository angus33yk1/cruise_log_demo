import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

// SVG Icons - No emojis!
const HomeIcon = ({ active }) => (
    <svg className={`w-6 h-6 ${active ? 'text-cruise-accent' : 'text-white/60'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
);

const DiaryIcon = ({ active }) => (
    <svg className={`w-6 h-6 ${active ? 'text-cruise-accent' : 'text-white/60'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="8" y1="6" x2="16" y2="6" />
        <line x1="8" y1="10" x2="14" y2="10" />
    </svg>
);

const TrophyIcon = ({ active }) => (
    <svg className={`w-6 h-6 ${active ? 'text-cruise-accent' : 'text-white/60'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 22V8h4v14" />
        <path d="M8 22v-5" />
        <path d="M16 22v-5" />
        <rect x="6" y="4" width="12" height="5" rx="1" />
    </svg>
);

const CalendarIcon = ({ active }) => (
    <svg className={`w-6 h-6 ${active ? 'text-cruise-accent' : 'text-white/60'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const UsersIcon = ({ active }) => (
    <svg className={`w-6 h-6 ${active ? 'text-cruise-accent' : 'text-white/60'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

export default function Navigation() {
    const location = useLocation();

    const navItems = [
        { path: '/', icon: HomeIcon, label: 'Home' },
        { path: '/diary/cruise-1', icon: DiaryIcon, label: 'Diary' },
        { path: '/achievements', icon: TrophyIcon, label: 'Achievements' },
        { path: '/future', icon: CalendarIcon, label: 'Future' },
        { path: '/social', icon: UsersIcon, label: 'Social' }
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-40 safe-area-bottom">
            <div className="bg-cruise-navy border-t border-cruise-border">
                <div className="flex justify-around items-center px-4 py-2">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.path ||
                            (item.path.includes('/diary') && location.pathname.includes('/diary'));
                        const IconComponent = item.icon;

                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 cursor-pointer"
                            >
                                <div className={`transition-transform duration-200 ${isActive ? 'scale-110' : 'scale-100'}`}>
                                    <IconComponent active={isActive} />
                                </div>
                                <span className={`text-xs font-medium transition-colors duration-200 ${isActive ? 'text-cruise-accent' : 'text-white/60'
                                    }`}>
                                    {item.label}
                                </span>

                                {isActive && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-cruise-accent/10 rounded-xl -z-10"
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
