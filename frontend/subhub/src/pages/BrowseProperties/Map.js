import React from "react";
import { useEffect } from "react";
import maplibregl from "maplibre-gl"; // Import MapLibre GL library
// import 'maplibre-gl/dist/maplibre-gl.css'; // Import MapLibre GL CSS
// import markersData from './testMarkers.json'

const Map = () => {
    useEffect(() => {
        const apiKey =
            "v1.public.eyJqdGkiOiIwMDkxNjQ5OC1iMjg5LTQ2YTctODY0ZS1jNGIyNWQ3N2FjOGEifW1cXwvtr-ap9wsqhl7kndZHJ0PkMxj21y21G-HA9SKXvlSYq8x-sVIK7kfFtMCIVT-SlVgsgQrBc1o8BjaoTo3Uc4sboWfKNE5O4WPW9FmMCFqpG48eSJ65hJuykor0fUTmBX75wdSRIBEsPILU-FV82_H59tE7-tx-Y1jxkUlhH8kMYfN7iA9PobBDKv7VPO0OdWvQl7duaXBMvv31x4tiPVpqU1cKOJVwBWfHgdlkc6TEscBzd0N-IDbQIwP2fDsc3XcEOzhUZfM7yQVIMPCCQMFoRenjYuuPrXkaAj9lW76QQVpa-qE9sZzLIZR2uMQ4gKkfpA1MsgSZ3P_GBp0.ZWU0ZWIzMTktMWRhNi00Mzg0LTllMzYtNzlmMDU3MjRmYTkx";
        const mapName = "SubHub";
        const region = "us-east-1";

        const map = new maplibregl.Map({
            container: "map",
            style: `https://maps.geo.${region}.amazonaws.com/maps/v0/maps/${mapName}/style-descriptor?key=${apiKey}`,
            center: [-79.3832, 43.6532],
            zoom: 14,
        });

        map.addControl(new maplibregl.NavigationControl(), "top-left");

        // Add markers based on JSON data
        // markersData.forEach(marker => {
        //   const { latitude, longitude } = marker;
        //   new maplibregl.Marker()
        //     .setLngLat([longitude, latitude])
        //     .addTo(map);
        // });

        return () => map.remove();
    }, []);

    return <div id="map" style={{ height: "100vh" }} />;
};

export default Map;
