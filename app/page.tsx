import LeafletMap from './LeafletMap';

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background">
            <div className="w-full max-w-4xl">
                <LeafletMap />
            </div>
        </div>
    );
}