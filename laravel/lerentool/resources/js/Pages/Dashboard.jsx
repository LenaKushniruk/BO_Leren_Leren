import React, { useState, useMemo } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    const [currentTrack, setCurrentTrack] = useState(null);
    const [playingTrackId, setPlayingTrackId] = useState(null); // Track die afspeelt

    // Gebruik useMemo om te voorkomen dat de array opnieuw wordt gemaakt bij renders
    const musicTracks = useMemo(() => [
        { id: 1, name: "Track 1", src: "/audio/track1.mp3", image: "/images/track1.jpg" },
        { id: 2, name: "Track 2", src: "/audio/track2.mp3", image: "/images/track2.jpg" },
    ], []);

    // Functie om een track af te spelen
    const playTrack = (trackSrc, trackId) => {
        if (currentTrack !== trackSrc) {
            setCurrentTrack(trackSrc);
            setPlayingTrackId(trackId);
        }
    };

    return (
        <AuthenticatedLayout>
            <Head title="Muziek Dashboard" />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Muziek Lijst</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {musicTracks.map((track) => (
                        <div key={track.id} className="bg-white rounded-lg shadow-md p-4 text-center">
                            <h3 className="text-lg font-medium">{track.name}</h3>
                            <button
                                onClick={() => playTrack(track.src, track.id)}
                                className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                                aria-label={`Afspelen van ${track.name}`}
                            >
                                Afspelen
                            </button>
                            {playingTrackId === track.id && (
                                <div className="mt-4">
                                    <audio 
                                        controls 
                                        src={currentTrack} 
                                        className="w-full focus:outline-none" 
                                        aria-label={`Speel ${track.name} af`} 
                                        preload="none" // Lazy load de audio
                                    />
                                </div>
                            )}
                            <img
                                src={track.image}
                                alt={`Afbeelding van ${track.name}`}
                                className="w-full h-32 object-cover rounded mt-4"
                                loading="lazy" // Lazy load afbeelding
                            />
                        </div>
                    ))}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
