// Mock Data for 3 Cruises
export const mockCruises = [
    {
        id: 'cruise-1',
        ship: 'Symphony of the Seas',
        line: 'Royal Caribbean',
        dates: {
            embark: '2025-06-15',
            disembark: '2025-06-22'
        },
        status: 'completed',
        heroImage: 'https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=1200',
        ports: [
            { name: 'Miami', country: 'USA', arrival: '2025-06-15T00:00:00', departure: '2025-06-15T16:00:00', coordinates: [-80.1918, 25.7617] },
            { name: 'Cozumel', country: 'Mexico', arrival: '2025-06-17T08:00:00', departure: '2025-06-17T18:00:00', coordinates: [-86.9223, 20.5083] },
            { name: 'Roatán', country: 'Honduras', arrival: '2025-06-18T08:00:00', departure: '2025-06-18T17:00:00', coordinates: [-86.5267, 16.3088] },
            { name: 'Costa Maya', country: 'Mexico', arrival: '2025-06-19T08:00:00', departure: '2025-06-19T17:00:00', coordinates: [-87.7094, 18.7186] },
            { name: 'Miami', country: 'USA', arrival: '2025-06-22T07:00:00', departure: null, coordinates: [-80.1918, 25.7617] }
        ],
        routeCoordinates: [
            [-80.1918, 25.7617],
            [-82.5, 24.0],
            [-85.0, 21.5],
            [-86.9223, 20.5083],
            [-86.5267, 16.3088],
            [-87.7094, 18.7186],
            [-85.0, 21.5],
            [-82.5, 24.0],
            [-80.1918, 25.7617]
        ],
        diary: [
            {
                day: 1,
                date: '2025-06-15',
                title: 'Embarkation Day!',
                text: 'Finally aboard! The ship is even more magnificent than the photos. Can\'t wait to explore everything.',
                photos: [
                    'https://images.unsplash.com/photo-1584200186925-87fa8f93be9b?w=800',
                    'https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800'
                ],
                mood: '🤩',
                tags: ['Embarkation', 'Ship']
            },
            {
                day: 2,
                date: '2025-06-16',
                title: 'Sea Day Bliss',
                text: 'Spent the morning by the pool, afternoon at the spa. The sunset from deck 15 was breathtaking.',
                photos: [
                    'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'
                ],
                mood: '😌',
                tags: ['Sea Day', 'Relaxation']
            },
            {
                day: 3,
                date: '2025-06-17',
                title: 'Cozumel Adventure',
                text: 'Snorkeling at Palancar Reef was incredible! Saw sea turtles and colorful fish. Best excursion ever.',
                photos: [
                    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
                    'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800'
                ],
                mood: '😍',
                tags: ['Excursion', 'Snorkeling']
            }
        ],
        companions: ['Sarah', 'John'],
        stats: {
            totalMiles: 1247,
            daysAtSea: 3,
            portsVisited: 4
        }
    },
    {
        id: 'cruise-2',
        ship: 'Norwegian Escape',
        line: 'Norwegian Cruise Line',
        dates: {
            embark: '2024-11-10',
            disembark: '2024-11-17'
        },
        status: 'completed',
        heroImage: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200',
        ports: [
            { name: 'New York', country: 'USA', arrival: '2024-11-10T00:00:00', departure: '2024-11-10T16:00:00', coordinates: [-74.0060, 40.7128] },
            { name: 'Port Canaveral', country: 'USA', arrival: '2024-11-12T08:00:00', departure: '2024-11-12T18:00:00', coordinates: [-80.6077, 28.4158] },
            { name: 'Nassau', country: 'Bahamas', arrival: '2024-11-14T08:00:00', departure: '2024-11-14T17:00:00', coordinates: [-77.3504, 25.0443] },
            { name: 'New York', country: 'USA', arrival: '2024-11-17T07:00:00', departure: null, coordinates: [-74.0060, 40.7128] }
        ],
        routeCoordinates: [
            [-74.0060, 40.7128],
            [-76.0, 35.0],
            [-78.0, 30.0],
            [-80.6077, 28.4158],
            [-79.0, 27.0],
            [-77.3504, 25.0443],
            [-76.0, 30.0],
            [-75.0, 35.0],
            [-74.0060, 40.7128]
        ],
        diary: [
            {
                day: 1,
                date: '2024-11-10',
                title: 'Sailing from NYC',
                text: 'Watching the Statue of Liberty from the deck as we sailed away was magical. What a way to start!',
                photos: [
                    'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=800'
                ],
                mood: '🤩',
                tags: ['Embarkation', 'NYC']
            }
        ],
        companions: ['Mom', 'Dad'],
        stats: {
            totalMiles: 1856,
            daysAtSea: 4,
            portsVisited: 3
        }
    },
    {
        id: 'cruise-3',
        ship: 'Harmony of the Seas',
        line: 'Royal Caribbean',
        dates: {
            embark: '2026-03-15',
            disembark: '2026-03-22'
        },
        status: 'upcoming',
        heroImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200',
        ports: [
            { name: 'Barcelona', country: 'Spain', arrival: '2026-03-15T00:00:00', departure: '2026-03-15T17:00:00', coordinates: [2.1734, 41.3851] },
            { name: 'Palma de Mallorca', country: 'Spain', arrival: '2026-03-17T08:00:00', departure: '2026-03-17T18:00:00', coordinates: [2.6502, 39.5696] },
            { name: 'Marseille', country: 'France', arrival: '2026-03-18T08:00:00', departure: '2026-03-18T18:00:00', coordinates: [5.3698, 43.2965] },
            { name: 'La Spezia', country: 'Italy', arrival: '2026-03-19T08:00:00', departure: '2026-03-19T18:00:00', coordinates: [9.8249, 44.1025] },
            { name: 'Rome (Civitavecchia)', country: 'Italy', arrival: '2026-03-21T07:00:00', departure: '2026-03-21T19:00:00', coordinates: [11.7972, 42.0942] },
            { name: 'Barcelona', country: 'Spain', arrival: '2026-03-22T07:00:00', departure: null, coordinates: [2.1734, 41.3851] }
        ],
        routeCoordinates: [
            [2.1734, 41.3851],
            [2.6502, 39.5696],
            [4.0, 41.0],
            [5.3698, 43.2965],
            [7.5, 43.5],
            [9.8249, 44.1025],
            [10.5, 43.0],
            [11.7972, 42.0942],
            [10.0, 41.5],
            [6.0, 41.0],
            [2.1734, 41.3851]
        ],
        diary: [],
        companions: [],
        stats: {
            totalMiles: 1456,
            daysAtSea: 2,
            portsVisited: 5
        },
        reminders: [
            { id: 'r1', text: 'Online check-in opens', date: '2026-02-13', completed: false },
            { id: 'r2', text: 'Book shore excursions', date: '2026-02-20', completed: false },
            { id: 'r3', text: 'Start packing', date: '2026-03-10', completed: false },
            { id: 'r4', text: 'Print boarding passes', date: '2026-03-14', completed: false }
        ],
        wishlist: [
            'Visit Sagrada Familia in Barcelona',
            'Try authentic paella',
            'Explore Cinque Terre from La Spezia',
            'See the Colosseum in Rome'
        ]
    }
];

// User Profile
export const mockUser = {
    id: 'user-1',
    name: 'Margaret Thompson',
    avatar: 'https://i.pravatar.cc/150?img=47',
    joinDate: '2024-01-15',
    totalCruises: 12,
    totalPorts: 47,
    totalMiles: 18543,
    totalShips: 8,
    totalLines: 4,
    countries: ['USA', 'Mexico', 'Honduras', 'Bahamas', 'Spain', 'France', 'Italy', 'Greece', 'Turkey'],
    friends: [
        { id: 'f1', name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=32' },
        { id: 'f2', name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=12' },
        { id: 'f3', name: 'Emily Davis', avatar: 'https://i.pravatar.cc/150?img=45' }
    ]
};

// Same Sailing Network (for upcoming cruise)
export const mockSameSailing = [
    { id: 's1', name: 'Robert & Linda', avatar: 'https://i.pravatar.cc/150?img=60', cabin: 'Hidden', isAnonymous: false },
    { id: 's2', name: 'Cruise Enthusiast', avatar: null, cabin: 'Hidden', isAnonymous: true },
    { id: 's3', name: 'The Martinez Family', avatar: 'https://i.pravatar.cc/150?img=25', cabin: 'Deck 8', isAnonymous: false }
];

// Route Twins (users who sailed same itinerary)
export const mockRouteTwins = [
    {
        id: 't1',
        name: 'Patricia Wilson',
        avatar: 'https://i.pravatar.cc/150?img=44',
        sailedDate: '2025-05-10',
        ship: 'Symphony of the Seas',
        highlight: 'The snorkeling in Cozumel was unforgettable!'
    },
    {
        id: 't2',
        name: 'James Anderson',
        avatar: 'https://i.pravatar.cc/150?img=15',
        sailedDate: '2025-04-20',
        ship: 'Symphony of the Seas',
        highlight: 'Loved the beach day in Roatán. Crystal clear water!'
    }
];

// Moments Feed (friends' diary highlights)
export const mockMomentsFeed = [
    {
        id: 'm1',
        user: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=32' },
        cruise: 'Oasis of the Seas',
        date: '2026-01-28',
        photo: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
        caption: 'Perfect Day at CocoCay! The water slide was amazing! 🌊',
        likes: 24,
        comments: 5
    },
    {
        id: 'm2',
        user: { name: 'John Smith', avatar: 'https://i.pravatar.cc/150?img=12' },
        cruise: 'Celebrity Edge',
        date: '2026-01-25',
        photo: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800',
        caption: 'Sunset in Santorini. No words can describe this beauty. 🌅',
        likes: 42,
        comments: 8
    }
];
