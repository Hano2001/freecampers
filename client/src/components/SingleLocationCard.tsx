import React from "react";
import { CampLocation } from "../types/Locations";

export default function SingleLocationCard({ info }: { info: CampLocation }) {
  return (
    <article className="location-card">
      <h3>{info.location}</h3>
      <p>Longitude: {info.x}</p>
      <p>Latitude: {info.y}</p>
      <h4>Features</h4>
      <ul>
        {info.utils?.map((u) => {
          return (
            <li>
              <p>-{u}</p>
            </li>
          );
        })}
      </ul>
    </article>
  );
}
