import styled from 'styled-components'

export const MapWrapper = styled.div`
  width: 100%;
  height: 100%;
  .leaflet-container {
    background-color: var(--background);
  }
  .leaflet-marker-pane {
    filter: hue-rotate(150deg);
  }

  .leaflet-control-attribution.leaflet-control {
    display: none;
  }
`
