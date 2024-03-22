/* eslint-disable import/no-anonymous-default-export */
import { useState } from "react";
import { Marker } from "react-map-gl/maplibre";

// Customized popup that displays locker titles and descriptions
// import LockerPopup from "./Popup";

import PinIcon from "./PinIcon";

// Displays a single marker with interaction and a custom icon
const PropertyMarker = ({ property, selectedProperty, onPropertySelected }) => (
  <Marker
    latitude={property.latitude}
    longitude={property.longitude}
    onClick={(e) => {
      e.originalEvent.stopPropagation();
      onPropertySelected(property);
    }}
  >
    <PinIcon size={35} isSelected={property === selectedProperty} />
  </Marker>
);

// Render markers for all properties, with a popup for the selected locker
export default ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState();

  return (
    <>
      {
        // Render markers for all lockers
        properties.map((property, index) => (
          <PropertyMarker
            key={index}
            property={property}
            selectedProperty={selectedProperty}
            onPropertySelected={setSelectedProperty}
          />
        ))
      }
      {/* Display a popup when a locker is selected
      {selectedLocker && (
        <LockerPopup locker={selectedLocker} onClose={() => setSelectedLocker(null)} />
      )} */}
    </>
  );
};