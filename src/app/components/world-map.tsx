"use client";

import { ComposableMap, Geographies, Geography } from "@vnedyalk0v/react19-simple-maps";
import { useState, useEffect } from "react";

export default function WorldMap() {
   const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/world-110m.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) return <p>Loading map...</p>;
  return (
    <ComposableMap>
      <Geographies geography={data}>
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
