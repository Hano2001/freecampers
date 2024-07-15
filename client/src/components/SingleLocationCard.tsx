import React from "react";
import { CampLocation } from "../types/Locations";

export default function SingleLocationCard({ info }: { info: CampLocation }) {
  return (
    <article className="location-card">
      <h3>{info.location}</h3>
      <p>{info.x}</p>
      <p>{info.y}</p>
      {info.utils?.map((u) => {
        return <p>-{u}</p>;
      })}
    </article>
  );
}
