import { useNavigate } from 'react-router-dom';

export default function Header({ title, subtitle, showBack = false, action }) {
    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-30 safe-area-top">
            <div className="glass-card border-b-2 border-ocean-200/30 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                        {showBack && (
                            <button
                                onClick={() => navigate(-1)}
                                className="text-ocean-600 hover:text-ocean-700 transition-colors p-2 -ml-2"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                        )}

                        <div className="flex-1">
                            <h1 className="text-2xl font-display font-bold text-navy-900">
                                {title}
                            </h1>
                            {subtitle && (
                                <p className="text-base text-navy-600 mt-1">
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
