import leaflet, { LayerGroup, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { Offers } from '../../types/offer';

const URL_MARKER_DEFAULT = 'img/pin.svg';
const URL_MARKER_CURRENT = 'img/pin-active.svg';
const PIN_WIDTH = 27;
const PIN_HEIGHT = 39;

type MapProps = {
  cards: Offers;
  activeCard?: number | null;
  className: string;
}

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [PIN_WIDTH, PIN_HEIGHT],
  iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [PIN_WIDTH, PIN_HEIGHT],
  iconAnchor: [PIN_WIDTH / 2, PIN_HEIGHT],
});

function Map({cards, activeCard, className }: MapProps): JSX.Element {
  const city = cards[0].city;
  const points = cards;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  const markersLayer = useRef<LayerGroup>();

  useEffect(() => {
    if (map) {
      markersLayer.current?.clearLayers();

      markersLayer.current = new LayerGroup().addTo(map);

      points.forEach((point) => {
        const { location } = point;

        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            point.id === activeCard ? currentCustomIcon : defaultCustomIcon,
          )
          .addTo(markersLayer.current as LayerGroup);
      });
    }
  }, [activeCard, map, points]);

  return (
    <section
      className={`${className} map`}
      ref={mapRef}
    >
    </section>
  );
}

export default Map;
