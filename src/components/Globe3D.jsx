import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Globe3D({ cruises, onCruiseClick }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;

        let rotation = 0;

        // Simple globe rendering
        function drawGlobe() {
            ctx.clearRect(0, 0, width, height);

            // Draw globe background
            const gradient = ctx.createRadialGradient(
                width / 2, height / 2, 0,
                width / 2, height / 2, width / 2
            );
            gradient.addColorStop(0, '#0ea5e9');
            gradient.addColorStop(0.7, '#0369a1');
            gradient.addColorStop(1, '#082f49');

            ctx.fillStyle = gradient;
            ctx.beginPath();
            ctx.arc(width / 2, height / 2, width / 2 - 10, 0, Math.PI * 2);
            ctx.fill();

            // Draw continents (simplified)
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 2;

            // Draw cruise routes
            cruises.forEach((cruise, index) => {
                if (cruise.routeCoordinates) {
                    ctx.strokeStyle = index === 0 ? '#fbbf24' : '#fb7185';
                    ctx.lineWidth = 3;
                    ctx.beginPath();

                    cruise.routeCoordinates.forEach((coord, i) => {
                        const [lon, lat] = coord;
                        const x = width / 2 + (lon / 180) * (width / 2 - 20) * Math.cos(rotation);
                        const y = height / 2 - (lat / 90) * (height / 2 - 20);

                        if (i === 0) {
                            ctx.moveTo(x, y);
                        } else {
                            ctx.lineTo(x, y);
                        }
                    });

                    ctx.stroke();

                    // Draw photo pins
                    cruise.diary.forEach((entry) => {
                        if (entry.photos && entry.photos.length > 0) {
                            const portIndex = entry.day - 1;
                            const port = cruise.ports[Math.min(portIndex, cruise.ports.length - 1)];
                            if (port && port.coordinates) {
                                const [lon, lat] = port.coordinates;
                                const x = width / 2 + (lon / 180) * (width / 2 - 20) * Math.cos(rotation);
                                const y = height / 2 - (lat / 90) * (height / 2 - 20);

                                // Draw pin
                                ctx.fillStyle = '#fbbf24';
                                ctx.beginPath();
                                ctx.arc(x, y, 6, 0, Math.PI * 2);
                                ctx.fill();

                                ctx.strokeStyle = '#fff';
                                ctx.lineWidth = 2;
                                ctx.stroke();
                            }
                        }
                    });
                }
            });

            rotation += 0.002;
            requestAnimationFrame(drawGlobe);
        }

        drawGlobe();
    }, [cruises]);

    return (
        <div className="relative w-full aspect-square max-w-md mx-auto">
            <canvas
                ref={canvasRef}
                width={400}
                height={400}
                className="w-full h-full"
            />

            {/* Globe overlay info */}
            <div className="absolute top-4 left-4 right-4 text-center">
                <h2 className="text-2xl font-display font-bold text-white drop-shadow-lg">
                    the cruise globe
                </h2>
            </div>
        </div>
    );
}
