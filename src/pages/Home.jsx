import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Globe3D from '../components/Globe3D';
import { formatDate } from '../utils/dateUtils';

export default function Home({ user, cruises }) {
    const completedCruises = cruises.filter(c => c.status === 'completed');
    const upcomingCruise = cruises.find(c => c.status === 'upcoming');

    return (
        <div className="min-h-screen bg-gradient-to-br from-navy-950 via-navy-900 to-ocean-950">
            {/* Globe Section */}
            <div className="relative min-h-screen flex items-center justify-center p-6">
                {/* Left Sidebar - Stats */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="absolute left-4 top-24 w-48 space-y-4 z-10"
                >
                    <div className="glass-card rounded-2xl p-4 bg-white/10 backdrop-blur-lg border border-white/20">
                        <h2 className="text-base font-display font-semibold text-white mb-3">
                            Your Journey
                        </h2>

                        <div className="space-y-3">
                            <div>
                                <div className="text-2xl font-bold text-ocean-300">{user.totalCruises}</div>
                                <div className="text-xs text-white/70">Cruises</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-ocean-300">{user.totalPorts}</div>
                                <div className="text-xs text-white/70">Ports</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-ocean-300">{user.totalMiles.toLocaleString()}</div>
                                <div className="text-xs text-white/70">Nautical Miles</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-ocean-300">{user.totalShips}</div>
                                <div className="text-xs text-white/70">Ships</div>
                            </div>
                        </div>
                    </div>

                    {/* Past Cruises List */}
                    <div className="glass-card rounded-2xl p-4 bg-white/10 backdrop-blur-lg border border-white/20">
                        <h3 className="text-sm font-display font-semibold text-white mb-3">
                            Past Cruises
                        </h3>

                        <div className="space-y-2 max-h-64 overflow-y-auto hide-scrollbar">
                            {completedCruises.map((cruise) => (
                                <Link
                                    key={cruise.id}
                                    to={`/diary/${cruise.id}`}
                                    className="block p-2 rounded-lg hover:bg-white/10 transition-colors"
                                >
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-full bg-ocean-500 flex items-center justify-center text-white text-xs">
                                            🚢
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="text-xs font-semibold text-white truncate">
                                                {cruise.ship}
                                            </div>
                                            <div className="text-xs text-white/60">
                                                {formatDate(cruise.dates.embark, 'short')}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Globe */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative"
                >
                    <Globe3D cruises={cruises} />

                    {/* Legend */}
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-4 text-xs text-white/80">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gold"></div>
                            <span>Cruise Routes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-gold border-2 border-white"></div>
                            <span>Photo Memories</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Upcoming Cruise Section */}
            {upcomingCruise && (
                <div className="p-6 pb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        <Link to="/future" className="block">
                            <div className="ocean-gradient rounded-3xl p-6 text-white card-interactive">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-2xl">🗓️</span>
                                    <h3 className="text-xl font-display font-semibold">Next Adventure</h3>
                                </div>

                                <div className="space-y-2">
                                    <div className="text-2xl font-bold">{upcomingCruise.ship}</div>
                                    <div className="text-lg opacity-90">{upcomingCruise.line}</div>
                                    <div className="text-base opacity-80">
                                        {formatDate(upcomingCruise.dates.embark, 'long')}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-sm opacity-90">
                                    <span>Tap to view details</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
