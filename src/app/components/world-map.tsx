"use client";

import { ComposableMap, Geographies, Geography } from "react-simple-maps";

export default function WorldMap() {
  return (
    <ComposableMap>
      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
        {({ geographies }: { geographies: any }) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#E0E0E0" },
                hover: { fill: "#109618" },
                pressed: { fill: "#272727" },
              }}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
}
