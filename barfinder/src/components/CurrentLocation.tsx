import React from 'react';
// Styles
import { StyledBtn } from './CurrentLocation.styles';

type Props = {
  moveTo: (position: google.maps.LatLngLiteral) => void;
};

const CurrentLocation: React.FC<Props> = ({ moveTo }) => {
  const [disabled, setDisabled] = React.useState(false);

  return (
    <StyledBtn
      disabled={disabled}
      onClick={() => {
        // Deactivate button when geolocation is working
        setDisabled(true);
        navigator.geolocation.getCurrentPosition(position => {
          // Activate button when geolocation has finished
          setDisabled(false);
          // Call the callback function
          moveTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        });
      }}
    >
      {disabled ? <p>Searching ...</p> : <p>Get Current Position</p>}
    </StyledBtn>
  );
};

export default CurrentLocation;
