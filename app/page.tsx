import dynamic from 'next/dynamic';

const LeafletMap = dynamic(() => import('./LeafletMap'), { ssr: false });

export default function Home() {
    return (
        <div>
            <h1>Fuel Price Tracker Map</h1>
            <LeafletMap />
        </div>
    );
}