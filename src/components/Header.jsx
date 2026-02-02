import { useNavigate } from 'react-router-dom';

// SVG Icons
const BackIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export default function Header({ title, subtitle, showBack = false, action }) {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-30 safe-area-top">
            <div className="bg-cruise-navy border-b border-cruise-border px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                        {showBack && (
                            <button
                                onClick={() => navigate(-1)}
                                className="text-cruise-accent hover:text-white transition-colors p-2 -ml-2 cursor-pointer"
                            >
                                <BackIcon />
                            </button>
                        )}

                        <div className="flex-1">
                            <h1 className="text-2xl font-display font-bold text-white">
                                {title}
                            </h1>
                            {subtitle && (
                                <p className="text-base text-white/70 mt-1">
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>

                    {action && (
                        <div className="ml-4">
                            {action}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}
