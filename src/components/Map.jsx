import GoogleMapReact from 'google-map-react';

const Map = ({ latitude, longitude }) => {
  const defaultProps = {
    center: {
      lat: latitude,
      lng: longitude,
    },
    zoom: 10,
  };

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_MAP_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
};

export default Map;
