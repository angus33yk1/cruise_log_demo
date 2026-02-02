// Date utility functions
export function formatDate(dateString, format = 'long') {
    const date = new Date(dateString);

    if (format === 'long') {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    if (format === 'short') {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    }

    if (format === 'day-month') {
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    }

    return date.toLocaleDateString();
}

// Calculate days until a future date
export function daysUntil(dateString) {
    const target = new Date(dateString);
    const now = new Date();
    const diff = target - now;
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Calculate countdown (days, hours, minutes, seconds)
export function getCountdown(dateString) {
    const target = new Date(dateString);
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, expired: false };
}

// Get cruise duration in days
export function getCruiseDuration(embarkDate, disembarkDate) {
    const embark = new Date(embarkDate);
    const disembark = new Date(disembarkDate);
    const diff = disembark - embark;
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1; // +1 to include both days
}

// Get day number for a specific date within a cruise
export function getDayNumber(cruiseEmbarkDate, targetDate) {
    const embark = new Date(cruiseEmbarkDate);
    const target = new Date(targetDate);
    const diff = target - embark;
    return Math.floor(diff / (1000 * 60 * 60 * 24)) + 1;
}

// Check if date is in the past
export function isPast(dateString) {
    return new Date(dateString) < new Date();
}

// Check if date is today
export function isToday(dateString) {
    const date = new Date(dateString);
    const today = new Date();
    return date.toDateString() === today.toDateString();
}

// Format time (HH:MM)
export function formatTime(dateString) {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    });
}
