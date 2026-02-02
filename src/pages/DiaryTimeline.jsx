import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import PhotoGallery from '../components/PhotoGallery';
import { formatDate, getCruiseDuration } from '../utils/dateUtils';

export default function DiaryTimeline({ cruises }) {
    const { cruiseId } = useParams();
    const cruise = cruises.find(c => c.id === cruiseId);
    const [selectedDay, setSelectedDay] = useState(null);

    if (!cruise) {
        return <div className="p-6">Cruise not found</div>;
    }

    const duration = getCruiseDuration(cruise.dates.embark, cruise.dates.disembark);
    const days = Array.from({ length: duration }, (_, i) => i + 1);

    return (
        <div className="min-h-screen">
            <Header
                title={cruise.ship}
                subtitle={`${formatDate(cruise.dates.embark, 'short')} - ${formatDate(cruise.dates.disembark, 'short')}`}
                showBack
            />

            {/* Hero Image */}
            <div className="relative h-64">
                <img
                    src={cruise.heroImage}
                    alt={cruise.ship}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-3xl font-display font-bold mb-2">{cruise.ship}</h2>
                    <p className="text-lg opacity-90">{cruise.line}</p>
                </div>
            </div>

            <div className="p-6 space-y-6">
                {/* Day Cards */}
                <div className="space-y-4">
                    {days.map((dayNum) => {
                        const diaryEntry = cruise.diary.find(d => d.day === dayNum);
                        const port = cruise.ports[Math.min(dayNum - 1, cruise.ports.length - 1)];

                        return (
                            <motion.div
                                key={dayNum}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: dayNum * 0.05 }}
                                className="glass-card rounded-3xl overflow-hidden"
                            >
                                <div className="p-5">
                                    {/* Day Header */}
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-xl font-display font-semibold text-navy-900">
                                                Day {dayNum}
                                            </h3>
                                            <p className="text-base text-navy-600">
                                                {port?.name}, {port?.country}
                                            </p>
                                        </div>

                                        {diaryEntry && (
                                            <div className="text-3xl">{diaryEntry.mood}</div>
                                        )}
                                    </div>

                                    {/* Diary Content */}
                                    {diaryEntry ? (
                                        <div className="space-y-4">
                                            {diaryEntry.title && (
                                                <h4 className="text-lg font-semibold text-navy-800">
                                                    {diaryEntry.title}
                                                </h4>
                                            )}

                                            {diaryEntry.text && (
                                                <p className="text-base text-navy-700 leading-relaxed">
                                                    {diaryEntry.text}
                                                </p>
                                            )}

                                            {diaryEntry.photos && diaryEntry.photos.length > 0 && (
                                                <PhotoGallery photos={diaryEntry.photos} />
                                            )}

                                            {diaryEntry.tags && diaryEntry.tags.length > 0 && (
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {diaryEntry.tags.map((tag, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="tag-pill text-sm"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <div className="text-center py-6">
                                            <p className="text-navy-500 mb-3">No memories yet for this day</p>
                                            <button className="btn-secondary text-sm">
                                                Add Memory
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Floating Add Button */}
            <button className="fab">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
            </button>
        </div>
    );
}
