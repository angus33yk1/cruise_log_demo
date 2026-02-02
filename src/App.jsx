import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import DiaryTimeline from './pages/DiaryTimeline';
import Achievements from './pages/Achievements';
import FutureHub from './pages/FutureHub';
import Social from './pages/Social';
import { mockCruises, mockUser } from './data/mockData';

function App() {
    const [user] = useState(mockUser);
    const [cruises] = useState(mockCruises);
    const [selectedCruise, setSelectedCruise] = useState(cruises[0]);

    return (
        <Router>
            <div className="min-h-screen">
                <Routes>
                    <Route path="/" element={<Home user={user} cruises={cruises} />} />
                    <Route
                        path="/diary/:cruiseId"
                        element={<DiaryTimeline cruises={cruises} />}
                    />
                    <Route path="/achievements" element={<Achievements user={user} />} />
                    <Route path="/future" element={<FutureHub cruises={cruises} />} />
                    <Route path="/social" element={<Social user={user} />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

                <Navigation />
            </div>
        </Router>
    );
}

export default App;
