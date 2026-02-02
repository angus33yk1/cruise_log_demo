import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';

// SVG Icons
const ShipIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6-.5 1.2-1 2.5-1 2.5 0 2.5 2 5 2 1.3 0 1.9-.5 2.5-1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
        <path d="M12 10V4.5" />
        <path d="M12 4.5L8 8" />
    </svg>
);

const AnchorIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="21" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
);

const CompassIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" fill="currentColor" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const GlobeIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const ChevronIcon = ({ isOpen }) => (
    <svg
        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
    >
        <polyline points="6,9 12,15 18,9" />
    </svg>
);

const PlusIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="12" y1="5" x2="12" y2="19" />
        <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
);

export default function UserStatsPanel({ user, cruises, selectedCruise, onSelectCruise }) {
    const completedCruises = cruises.filter(c => c.status === 'completed');
    const upcomingCruises = cruises.filter(c => c.status === 'upcoming');

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-72 h-full bg-cruise-navy border-r border-cruise-border flex flex-col"
        >
            {/* Membership Badge */}
            <div className="px-4 py-3">
                <div className="bg-cruise-accent text-white text-sm font-semibold px-4 py-2 rounded-lg text-center">
                    BLUE MEMBER • upgrade now
                </div>
            </div>

            {/* User Info */}
            <div className="px-4 pb-4 border-b border-cruise-border">
                <div className="flex items-center gap-3 mb-4">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-10 h-10 rounded-full border-2 border-cruise-accent"
                    />
                    <div>
                        <div className="text-white font-semibold text-sm">{user.name.split(' ')[0]}</div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                        <AnchorIcon />
                        <div>
                            <div className="text-cruise-accent font-bold text-lg">{user.totalMiles.toLocaleString()}</div>
                            <div className="text-white/60 text-xs">Nautical Miles sailed</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarIcon />
                        <div>
                            <div className="text-cruise-accent font-bold text-lg">305</div>
                            <div className="text-white/60 text-xs">Days cruising</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <ShipIcon />
                        <div>
                            <div className="text-cruise-accent font-bold text-lg">{user.totalCruises}</div>
                            <div className="text-white/60 text-xs">Cruises</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <CompassIcon />
                        <div>
                            <div className="text-cruise-accent font-bold text-lg">{user.totalShips}</div>
                            <div className="text-white/60 text-xs">Ships</div>
                        </div>
                    </div>
                </div>

                {/* View Globe Passport */}
                <button className="mt-4 flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors cursor-pointer">
                    <GlobeIcon />
                    <span>View my Globe Passport</span>
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9,18 15,12 9,6" />
                    </svg>
                </button>
            </div>

            {/* Add Cruise Button */}
            <div className="px-4 py-4">
                <button className="w-full flex items-center justify-center gap-2 bg-cruise-accent hover:bg-cruise-highlight text-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer">
                    <PlusIcon />
                    Add a cruise
                </button>
            </div>

            {/* Past Cruises List */}
            <div className="flex-1 overflow-y-auto px-4">
                <h3 className="text-white font-semibold text-sm mb-3 flex items-center justify-between">
                    Past Cruises
                    <ChevronIcon isOpen={true} />
                </h3>

                <div className="space-y-2">
                    {completedCruises.map((cruise) => (
                        <button
                            key={cruise.id}
                            onClick={() => onSelectCruise(cruise)}
                            className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer ${selectedCruise?.id === cruise.id
                                    ? 'bg-cruise-panel border border-cruise-accent'
                                    : 'hover:bg-cruise-panel/50'
                                }`}
                        >
                            <div className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-cruise-accent/20 flex items-center justify-center flex-shrink-0">
                                    <ShipIcon />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <div className="text-white font-medium text-sm truncate">{cruise.ship}</div>
                                    <div className="text-white/60 text-xs">
                                        {formatDate(cruise.dates.embark, 'short')} - {formatDate(cruise.dates.disembark, 'short')}
                                    </div>
                                </div>
                                <ChevronIcon isOpen={selectedCruise?.id === cruise.id} />
                            </div>
                        </button>
                    ))}
                </div>

                {/* Upcoming Cruises */}
                {upcomingCruises.length > 0 && (
                    <>
                        <h3 className="text-white font-semibold text-sm mt-6 mb-3 flex items-center justify-between">
                            Upcoming Cruises
                            <ChevronIcon isOpen={true} />
                        </h3>
                        <div className="space-y-2 pb-4">
                            {upcomingCruises.map((cruise) => (
                                <button
                                    key={cruise.id}
                                    onClick={() => onSelectCruise(cruise)}
                                    className={`w-full text-left p-3 rounded-lg transition-all cursor-pointer border border-cruise-gold/30 bg-cruise-gold/10 ${selectedCruise?.id === cruise.id
                                            ? 'border-cruise-gold'
                                            : 'hover:border-cruise-gold/50'
                                        }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-cruise-gold/20 flex items-center justify-center flex-shrink-0 text-cruise-gold">
                                            <ShipIcon />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="text-white font-medium text-sm truncate">{cruise.ship}</div>
                                            <div className="text-cruise-gold text-xs">
                                                {formatDate(cruise.dates.embark, 'short')} - {formatDate(cruise.dates.disembark, 'short')}
                                            </div>
                                        </div>
                                        <ChevronIcon isOpen={selectedCruise?.id === cruise.id} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </motion.div>
    );
}
