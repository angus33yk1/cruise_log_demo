import { motion } from 'framer-motion';
import Header from '../components/Header';
import { mockSameSailing, mockRouteTwins, mockMomentsFeed } from '../data/mockData';

// SVG Icons
const UserIcon = () => (
    <svg className="w-6 h-6 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const HeartIcon = ({ filled }) => (
    <svg className={`w-5 h-5 ${filled ? 'text-cruise-coral fill-current' : 'text-white/60'}`} viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
);

const MessageIcon = () => (
    <svg className="w-5 h-5 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

export default function Social({ user }) {
    return (
        <div className="min-h-screen bg-cruise-dark pb-24">
            <Header
                title="Community"
                subtitle="Connect with fellow cruisers"
            />

            <div className="p-6 space-y-8">
                {/* Same Sailing Network */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h2 className="text-2xl font-display font-semibold text-white mb-4">
                        Sailing With You
                    </h2>
                    <p className="text-base text-white/60 mb-4">
                        {mockSameSailing.length} travelers on your upcoming cruise
                    </p>

                    <div className="space-y-3">
                        {mockSameSailing.map((person) => (
                            <div
                                key={person.id}
                                className="cruise-panel rounded-2xl p-4 flex items-center gap-4"
                            >
                                <div className="w-14 h-14 rounded-full bg-cruise-panel flex items-center justify-center overflow-hidden border border-cruise-border">
                                    {person.avatar ? (
                                        <img src={person.avatar} alt={person.name} className="w-full h-full object-cover" />
                                    ) : (
                                        <UserIcon />
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-white">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm text-white/60">
                                        {person.isAnonymous ? 'Anonymous' : person.cabin}
                                    </p>
                                </div>

                                <button className="btn-outline text-sm py-2 px-4">
                                    Say Hi
                                </button>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Route Twins */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <h2 className="text-2xl font-display font-semibold text-white mb-4">
                        Route Twins
                    </h2>
                    <p className="text-base text-white/60 mb-4">
                        Travelers who sailed your routes
                    </p>

                    <div className="space-y-3">
                        {mockRouteTwins.map((person) => (
                            <div
                                key={person.id}
                                className="cruise-panel rounded-2xl p-4"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <img
                                        src={person.avatar}
                                        alt={person.name}
                                        className="w-12 h-12 rounded-full object-cover border border-cruise-border"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-white">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm text-white/60">
                                            {person.ship} • {person.sailedDate}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-base text-cruise-accent italic">
                                    "{person.highlight}"
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Moments Feed */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-2xl font-display font-semibold text-white mb-4">
                        Friends' Moments
                    </h2>

                    <div className="space-y-4">
                        {mockMomentsFeed.map((moment) => (
                            <div
                                key={moment.id}
                                className="cruise-panel rounded-2xl overflow-hidden"
                            >
                                <div className="p-4 flex items-center gap-3">
                                    <img
                                        src={moment.user.avatar}
                                        alt={moment.user.name}
                                        className="w-10 h-10 rounded-full object-cover border border-cruise-border"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-white">
                                            {moment.user.name}
                                        </h3>
                                        <p className="text-sm text-white/60">{moment.cruise}</p>
                                    </div>
                                </div>

                                <img
                                    src={moment.photo}
                                    alt="Moment"
                                    className="w-full aspect-square object-cover"
                                />

                                <div className="p-4">
                                    <p className="text-base text-white mb-3">
                                        {moment.caption}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-white/60">
                                        <button className="flex items-center gap-1 hover:text-cruise-coral transition-colors cursor-pointer">
                                            <HeartIcon filled={false} />
                                            <span>{moment.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-cruise-accent transition-colors cursor-pointer">
                                            <MessageIcon />
                                            <span>{moment.comments}</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
