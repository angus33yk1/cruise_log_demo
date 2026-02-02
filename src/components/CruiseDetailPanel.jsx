import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';

// SVG Icons
const CloseIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const ChevronLeftIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="15,18 9,12 15,6" />
    </svg>
);

const ChevronRightIcon = () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9,6 15,12 9,18" />
    </svg>
);

const AnchorIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="5" r="3" />
        <line x1="12" y1="8" x2="12" y2="21" />
        <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
    </svg>
);

const CalendarIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
);

const MapPinIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const FlagIcon = () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
);

const ShipIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6-.5 1.2-1 2.5-1 2.5 0 2.5 2 5 2 1.3 0 1.9-.5 2.5-1" />
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76" />
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
        <path d="M12 10V4.5" />
        <path d="M12 4.5L8 8" />
    </svg>
);

export default function CruiseDetailPanel({ cruise, onClose }) {
    if (!cruise) return null;

    const daysDiff = Math.ceil(
        (new Date(cruise.dates.disembark) - new Date(cruise.dates.embark)) / (1000 * 60 * 60 * 24)
    );

    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-80 h-full bg-white shadow-2xl flex flex-col"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <div className="flex items-center gap-2 text-gray-500">
                    <span className="text-sm">Close</span>
                </div>
                <button
                    onClick={onClose}
                    className="p-1 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                >
                    <CloseIcon />
                </button>
            </div>

            {/* Cruise Navigation */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                <button className="p-2 hover:bg-gray-100 rounded transition-colors cursor-pointer">
                    <ChevronLeftIcon />
                </button>
                <h2 className="font-semibold text-gray-900 text-center">{cruise.ship.toUpperCase()}</h2>
                <button className="p-2 hover:bg-gray-100 rounded transition-colors cursor-pointer">
                    <ChevronRightIcon />
                </button>
            </div>

            {/* Cruise Info */}
            <div className="flex-1 overflow-y-auto p-4">
                {/* Route Info */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 text-gray-600 mb-1">
                        <MapPinIcon />
                        <span className="text-sm">
                            {cruise.ports[0]?.name} - {cruise.ports[cruise.ports.length - 1]?.name} (round trip)
                        </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <CalendarIcon />
                        <span className="text-sm font-medium">
                            {formatDate(cruise.dates.embark, 'long')} to {formatDate(cruise.dates.disembark, 'long')}
                        </span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-1">
                            <AnchorIcon />
                            <span>Nautical Miles</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{cruise.stats.totalMiles.toLocaleString()}</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-1">
                            <CalendarIcon />
                            <span>Days cruising</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{daysDiff}</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-1">
                            <MapPinIcon />
                            <span>Ports</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">{cruise.ports.length}</div>
                    </div>
                    <div className="text-center">
                        <div className="flex items-center justify-center gap-1 text-gray-500 text-xs mb-1">
                            <FlagIcon />
                            <span>Countries</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">
                            {new Set(cruise.ports.map(p => p.country)).size}
                        </div>
                    </div>
                </div>

                {/* Ship Card */}
                <div className="border border-gray-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-cruise-accent to-cruise-highlight rounded-lg flex items-center justify-center text-white">
                            <ShipIcon />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900">{cruise.ship}</h3>
                            <p className="text-sm text-gray-600">{cruise.line}</p>
                            <div className="mt-2 text-xs text-gray-500 space-y-0.5">
                                <div>Capacity: <span className="font-medium">5,500 passengers</span></div>
                                <div>Length: <span className="font-medium">362m</span></div>
                                <div>Launched: <span className="font-medium">2018</span></div>
                            </div>
                        </div>
                        {/* Cruise Line Logo Placeholder */}
                        <div className="w-10 h-10 bg-cruise-accent rounded-full flex items-center justify-center text-white text-xs font-bold">
                            {cruise.line.split(' ')[0][0]}
                        </div>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mb-4">
                    <Link
                        to={`/diary/${cruise.id}`}
                        className="flex-1 bg-cruise-accent hover:bg-cruise-highlight text-white font-semibold py-3 px-4 rounded-lg text-center transition-colors text-sm cursor-pointer"
                    >
                        View Diary
                    </Link>
                    <button className="flex-1 bg-cruise-dark hover:bg-cruise-navy text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm cursor-pointer">
                        Find deals on future cruises
                    </button>
                </div>

                {/* Cruise Replay Button */}
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="5,3 19,12 5,21" fill="currentColor" />
                    </svg>
                    Cruise Replay
                </button>
            </div>
        </motion.div>
    );
}
