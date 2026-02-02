// Weather data for ports (mock data with realistic temperatures)
export const mockWeatherData = {
    'Barcelona': {
        temp: 18,
        condition: 'Partly Cloudy',
        icon: '⛅',
        humidity: 65,
        wind: '15 km/h'
    },
    'Palma de Mallorca': {
        temp: 19,
        condition: 'Sunny',
        icon: '☀️',
        humidity: 60,
        wind: '12 km/h'
    },
    'Marseille': {
        temp: 16,
        condition: 'Cloudy',
        icon: '☁️',
        humidity: 70,
        wind: '18 km/h'
    },
    'La Spezia': {
        temp: 17,
        condition: 'Partly Cloudy',
        icon: '⛅',
        humidity: 68,
        wind: '10 km/h'
    },
    'Rome (Civitavecchia)': {
        temp: 19,
        condition: 'Sunny',
        icon: '☀️',
        humidity: 62,
        wind: '14 km/h'
    },
    'Miami': {
        temp: 28,
        condition: 'Sunny',
        icon: '☀️',
        humidity: 75,
        wind: '20 km/h'
    },
    'Cozumel': {
        temp: 30,
        condition: 'Partly Cloudy',
        icon: '⛅',
        humidity: 80,
        wind: '15 km/h'
    },
    'Roatán': {
        temp: 29,
        condition: 'Sunny',
        icon: '☀️',
        humidity: 78,
        wind: '12 km/h'
    },
    'Costa Maya': {
        temp: 31,
        condition: 'Hot & Sunny',
        icon: '🌞',
        humidity: 82,
        wind: '10 km/h'
    }
};

// Get weather for a port
export function getWeatherForPort(portName) {
    return mockWeatherData[portName] || {
        temp: 22,
        condition: 'Pleasant',
        icon: '🌤️',
        humidity: 65,
        wind: '15 km/h'
    };
}
