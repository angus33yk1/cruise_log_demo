import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import mapboxgl from 'mapbox-gl';
import UserStatsPanel from '../components/UserStatsPanel';
import CruiseDetailPanel from '../components/CruiseDetailPanel';

// Mapbox token - you can replace with your own
mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';

export default function Home({ user, cruises }) {
    const [selectedCruise, setSelectedCruise] = useState(cruises[0]);
    const [showDetailPanel, setShowDetailPanel] = useState(true);
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [10, 42], // Center on Mediterranean
            zoom: 4,
            projection: 'mercator'
        });

        map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }, []);

    // Update route when cruise selected
    useEffect(() => {
        if (!map.current || !selectedCruise) return;

        const drawRoute = () => {
            // Remove existing layers
            if (map.current.getLayer('cruise-route')) {
                map.current.removeLayer('cruise-route');
            }
            if (map.current.getSource('cruise-route')) {
                map.current.removeSource('cruise-route');
            }

            // Add cruise route
            if (selectedCruise.routeCoordinates) {
                map.current.addSource('cruise-route', {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'LineString',
                            coordinates: selectedCruise.routeCoordinates
                        }
                    }
                });

                map.current.addLayer({
                    id: 'cruise-route',
                    type: 'line',
                    source: 'cruise-route',
                    layout: {
                        'line-join': 'round',
                        'line-cap': 'round'
                    },
                    paint: {
                        'line-color': '#00B4D8',
                        'line-width': 3,
                        'line-opacity': 0.9
                    }
                });

                // Fit bounds to route
                const bounds = new mapboxgl.LngLatBounds();
                selectedCruise.routeCoordinates.forEach(coord => {
                    bounds.extend(coord);
                });
                map.current.fitBounds(bounds, { padding: 80 });
            }

            // Add port markers
            selectedCruise.ports.forEach((port, index) => {
                const el = document.createElement('div');
                el.className = 'port-marker';
                el.innerHTML = `
                    <div class="w-4 h-4 bg-cruise-gold rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                        <span class="text-[8px] font-bold text-cruise-dark">${index + 1}</span>
                    </div>
                `;

                new mapboxgl.Marker(el)
                    .setLngLat(port.coordinates)
                    .setPopup(new mapboxgl.Popup().setHTML(`<strong>${port.name}</strong><br/>${port.country}`))
                    .addTo(map.current);
            });
        };

        if (map.current.isStyleLoaded()) {
            drawRoute();
        } else {
            map.current.on('load', drawRoute);
        }
    }, [selectedCruise]);

    return (
        <div className="h-screen w-screen overflow-hidden bg-cruise-dark flex flex-col">
            {/* Top Header */}
            <header className="h-12 bg-cruise-navy border-b border-cruise-border flex items-center px-4 z-20">
                <div className="flex items-center gap-6">
                    {/* Logo */}
                    <h1 className="font-brand font-bold text-white text-lg tracking-wide">
                        the cruise globe
                    </h1>

                    {/* Tab Navigation */}
                    <div className="flex gap-1 bg-cruise-dark rounded-lg p-1">
                        <button className="px-4 py-1.5 bg-cruise-panel text-white text-sm font-medium rounded-md cursor-pointer">
                            My Cruises
                        </button>
                        <button className="px-4 py-1.5 text-white/60 hover:text-white text-sm font-medium rounded-md transition-colors cursor-pointer">
                            LIVE Map
                        </button>
                    </div>
                </div>

                {/* Right side - User avatar */}
                <div className="ml-auto flex items-center gap-3">
                    <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full border-2 border-cruise-accent"
                    />
                </div>
            </header>

            {/* Main Content Area */}
            <div className="flex-1 flex overflow-hidden">
                {/* Left Sidebar */}
                <UserStatsPanel
                    user={user}
                    cruises={cruises}
                    selectedCruise={selectedCruise}
                    onSelectCruise={setSelectedCruise}
                />

                {/* Map Container */}
                <div className="flex-1 relative">
                    <div ref={mapContainer} className="absolute inset-0" />

                    {/* Map Attribution */}
                    <div className="absolute bottom-4 left-4 text-white/40 text-xs">
                        © Mapbox
                    </div>

                    {/* Cruise Replay Button */}
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-4 right-4 flex items-center gap-2 bg-cruise-navy/90 backdrop-blur-sm text-white px-4 py-2 rounded-lg border border-cruise-border hover:bg-cruise-panel transition-colors cursor-pointer"
                    >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5,3 19,12 5,21" fill="currentColor" />
                        </svg>
                        Cruise Replay
                    </motion.button>
                </div>

                {/* Right Detail Panel */}
                {showDetailPanel && selectedCruise && (
                    <CruiseDetailPanel
                        cruise={selectedCruise}
                        onClose={() => setShowDetailPanel(false)}
                    />
                )}
            </div>
        </div>
    );
}
