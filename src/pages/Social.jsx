import { motion } from 'framer-motion';
import Header from '../components/Header';
import { mockSameSailing, mockRouteTwins, mockMomentsFeed } from '../data/mockData';

export default function Social({ user }) {
    return (
        <div className="min-h-screen">
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
                    <h2 className="text-2xl font-display font-semibold text-navy-900 mb-4">
                        Sailing With You
                    </h2>
                    <p className="text-base text-navy-600 mb-4">
                        {mockSameSailing.length} travelers on your upcoming cruise
                    </p>

                    <div className="space-y-3">
                        {mockSameSailing.map((person) => (
                            <div
                                key={person.id}
                                className="glass-card rounded-2xl p-4 flex items-center gap-4"
                            >
                                <div className="w-14 h-14 rounded-full bg-ocean-200 flex items-center justify-center text-2xl">
                                    {person.avatar ? (
                                        <img src={person.avatar} alt={person.name} className="w-full h-full rounded-full object-cover" />
                                    ) : (
                                        '👤'
                                    )}
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-navy-900">
                                        {person.name}
                                    </h3>
                                    <p className="text-sm text-navy-600">
                                        {person.isAnonymous ? 'Anonymous' : person.cabin}
                                    </p>
                                </div>

                                <button className="btn-secondary text-sm py-2 px-4">
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
                    <h2 className="text-2xl font-display font-semibold text-navy-900 mb-4">
                        Route Twins
                    </h2>
                    <p className="text-base text-navy-600 mb-4">
                        Travelers who sailed your routes
                    </p>

                    <div className="space-y-3">
                        {mockRouteTwins.map((person) => (
                            <div
                                key={person.id}
                                className="glass-card rounded-2xl p-4"
                            >
                                <div className="flex items-center gap-4 mb-3">
                                    <img
                                        src={person.avatar}
                                        alt={person.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />

                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-navy-900">
                                            {person.name}
                                        </h3>
                                        <p className="text-sm text-navy-600">
                                            {person.ship} • {person.sailedDate}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-base text-navy-700 italic">
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
                    <h2 className="text-2xl font-display font-semibold text-navy-900 mb-4">
                        Friends' Moments
                    </h2>

                    <div className="space-y-4">
                        {mockMomentsFeed.map((moment) => (
                            <div
                                key={moment.id}
                                className="glass-card rounded-2xl overflow-hidden"
                            >
                                <div className="p-4 flex items-center gap-3">
                                    <img
                                        src={moment.user.avatar}
                                        alt={moment.user.name}
                                        className="w-10 h-10 rounded-full object-cover"
                                    />
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-navy-900">
                                            {moment.user.name}
                                        </h3>
                                        <p className="text-sm text-navy-600">{moment.cruise}</p>
                                    </div>
                                </div>

                                <img
                                    src={moment.photo}
                                    alt="Moment"
                                    className="w-full aspect-square object-cover"
                                />

                                <div className="p-4">
                                    <p className="text-base text-navy-900 mb-3">
                                        {moment.caption}
                                    </p>

                                    <div className="flex items-center gap-4 text-sm text-navy-600">
                                        <button className="flex items-center gap-1 hover:text-coral transition-colors">
                                            <span>❤️</span>
                                            <span>{moment.likes}</span>
                                        </button>
                                        <button className="flex items-center gap-1 hover:text-ocean-600 transition-colors">
                                            <span>💬</span>
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
