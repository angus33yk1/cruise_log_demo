import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useCountdown } from '../hooks/useCountdown';
import { formatDate, formatTime } from '../utils/dateUtils';
import { getWeatherForPort } from '../data/weatherData';

// SVG Icons
const SunIcon = () => (
    <svg className="w-6 h-6 text-cruise-gold" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
    </svg>
);

const CheckboxIcon = ({ checked }) => (
    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${checked
            ? 'bg-cruise-accent border-cruise-accent'
            : 'border-cruise-border'
        }`}>
        {checked && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <polyline points="20,6 9,17 4,12" />
            </svg>
        )}
    </div>
);

const SparkleIcon = () => (
    <svg className="w-5 h-5 text-cruise-gold" viewBox="0 0 24 24" fill="currentColor">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);

export default function FutureHub({ cruises }) {
    const upcomingCruise = cruises.find(c => c.status === 'upcoming');

    if (!upcomingCruise) {
        return (
            <div className="min-h-screen bg-cruise-dark pb-24">
                <Header title="Future Cruises" subtitle="Plan your next adventure" />
                <div className="p-6 text-center">
                    <p className="text-white/60">No upcoming cruises yet</p>
                </div>
            </div>
        );
    }

    const countdown = useCountdown(upcomingCruise.dates.embark);

    return (
        <div className="min-h-screen bg-cruise-dark pb-24">
            <Header
                title="Next Adventure"
                subtitle={upcomingCruise.ship}
            />

            <div className="p-6 space-y-6">
                {/* Countdown Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gradient-to-br from-cruise-accent to-cruise-highlight rounded-2xl p-8 text-white text-center"
                >
                    <h2 className="text-2xl font-display font-semibold mb-6">
                        Sailing in...
                    </h2>

                    <div className="grid grid-cols-4 gap-4">
                        <div>
                            <div className="text-4xl font-bold">{countdown.days}</div>
                            <div className="text-sm opacity-90 mt-1">Days</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">{countdown.hours}</div>
                            <div className="text-sm opacity-90 mt-1">Hours</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">{countdown.minutes}</div>
                            <div className="text-sm opacity-90 mt-1">Minutes</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold">{countdown.seconds}</div>
                            <div className="text-sm opacity-90 mt-1">Seconds</div>
                        </div>
                    </div>

                    <div className="mt-6 text-lg opacity-90">
                        {formatDate(upcomingCruise.dates.embark, 'long')}
                    </div>
                </motion.div>

                {/* Itinerary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="cruise-panel rounded-2xl p-6"
                >
                    <h3 className="text-xl font-display font-semibold text-white mb-4">
                        Itinerary
                    </h3>

                    <div className="space-y-4">
                        {upcomingCruise.ports.map((port, index) => {
                            const weather = getWeatherForPort(port.name);

                            return (
                                <div key={index} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full bg-cruise-accent flex items-center justify-center text-white font-semibold">
                                            {index + 1}
                                        </div>
                                        {index < upcomingCruise.ports.length - 1 && (
                                            <div className="w-0.5 h-full bg-cruise-border my-2" />
                                        )}
                                    </div>

                                    <div className="flex-1 pb-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-white">
                                                    {port.name}
                                                </h4>
                                                <p className="text-base text-white/60">{port.country}</p>
                                                <p className="text-sm text-white/40 mt-1">
                                                    {formatTime(port.arrival)}
                                                    {port.departure && ` - ${formatTime(port.departure)}`}
                                                </p>
                                            </div>

                                            {/* Weather Info */}
                                            <div className="flex items-center gap-2 bg-cruise-panel rounded-xl px-3 py-2 border border-cruise-border">
                                                <SunIcon />
                                                <div>
                                                    <div className="text-xl font-bold text-cruise-accent">
                                                        {weather.temp}°C
                                                    </div>
                                                    <div className="text-xs text-white/60">
                                                        {weather.condition}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Reminders */}
                {upcomingCruise.reminders && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="cruise-panel rounded-2xl p-6"
                    >
                        <h3 className="text-xl font-display font-semibold text-white mb-4">
                            Reminders
                        </h3>

                        <div className="space-y-3">
                            {upcomingCruise.reminders.map((reminder) => (
                                <div
                                    key={reminder.id}
                                    className="flex items-center gap-3 p-3 bg-cruise-navy rounded-xl border border-cruise-border"
                                >
                                    <CheckboxIcon checked={reminder.completed} />
                                    <div className="flex-1">
                                        <p className="text-base text-white">{reminder.text}</p>
                                        <p className="text-sm text-white/50">{formatDate(reminder.date, 'short')}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Wishlist */}
                {upcomingCruise.wishlist && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="cruise-panel rounded-2xl p-6"
                    >
                        <h3 className="text-xl font-display font-semibold text-white mb-4">
                            My Wishlist
                        </h3>

                        <div className="space-y-2">
                            {upcomingCruise.wishlist.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-cruise-gold/10 rounded-xl border border-cruise-gold/30"
                                >
                                    <SparkleIcon />
                                    <p className="text-base text-white">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
