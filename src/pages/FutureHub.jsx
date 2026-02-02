import { motion } from 'framer-motion';
import Header from '../components/Header';
import { useCountdown } from '../hooks/useCountdown';
import { formatDate, formatTime } from '../utils/dateUtils';
import { getWeatherForPort } from '../data/weatherData';

export default function FutureHub({ cruises }) {
    const upcomingCruise = cruises.find(c => c.status === 'upcoming');

    if (!upcomingCruise) {
        return (
            <div className="min-h-screen">
                <Header title="Future Cruises" subtitle="Plan your next adventure" />
                <div className="p-6 text-center">
                    <p className="text-navy-600">No upcoming cruises yet</p>
                </div>
            </div>
        );
    }

    const countdown = useCountdown(upcomingCruise.dates.embark);

    return (
        <div className="min-h-screen">
            <Header
                title="Next Adventure"
                subtitle={upcomingCruise.ship}
            />

            <div className="p-6 space-y-6">
                {/* Countdown Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="ocean-gradient rounded-3xl p-8 text-white text-center"
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
                    className="glass-card rounded-3xl p-6"
                >
                    <h3 className="text-xl font-display font-semibold text-navy-900 mb-4">
                        Itinerary
                    </h3>

                    <div className="space-y-4">
                        {upcomingCruise.ports.map((port, index) => {
                            const weather = getWeatherForPort(port.name);

                            return (
                                <div key={index} className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-10 h-10 rounded-full ocean-gradient flex items-center justify-center text-white font-semibold">
                                            {index + 1}
                                        </div>
                                        {index < upcomingCruise.ports.length - 1 && (
                                            <div className="w-0.5 h-full bg-ocean-200 my-2" />
                                        )}
                                    </div>

                                    <div className="flex-1 pb-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <h4 className="text-lg font-semibold text-navy-900">
                                                    {port.name}
                                                </h4>
                                                <p className="text-base text-navy-600">{port.country}</p>
                                                <p className="text-sm text-navy-500 mt-1">
                                                    {formatTime(port.arrival)}
                                                    {port.departure && ` - ${formatTime(port.departure)}`}
                                                </p>
                                            </div>

                                            {/* Weather Info */}
                                            <div className="flex items-center gap-2 bg-ocean-50 rounded-xl px-3 py-2">
                                                <span className="text-2xl">{weather.icon}</span>
                                                <div>
                                                    <div className="text-xl font-bold text-ocean-700">
                                                        {weather.temp}°C
                                                    </div>
                                                    <div className="text-xs text-navy-600">
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
                        className="glass-card rounded-3xl p-6"
                    >
                        <h3 className="text-xl font-display font-semibold text-navy-900 mb-4">
                            Reminders
                        </h3>

                        <div className="space-y-3">
                            {upcomingCruise.reminders.map((reminder) => (
                                <div
                                    key={reminder.id}
                                    className="flex items-center gap-3 p-3 bg-ocean-50 rounded-xl"
                                >
                                    <input
                                        type="checkbox"
                                        checked={reminder.completed}
                                        className="w-5 h-5 rounded accent-ocean-600"
                                        readOnly
                                    />
                                    <div className="flex-1">
                                        <p className="text-base text-navy-900">{reminder.text}</p>
                                        <p className="text-sm text-navy-600">{formatDate(reminder.date, 'short')}</p>
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
                        className="glass-card rounded-3xl p-6"
                    >
                        <h3 className="text-xl font-display font-semibold text-navy-900 mb-4">
                            My Wishlist
                        </h3>

                        <div className="space-y-2">
                            {upcomingCruise.wishlist.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-3 p-3 bg-seafoam/10 rounded-xl"
                                >
                                    <span className="text-lg">✨</span>
                                    <p className="text-base text-navy-900">{item}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
