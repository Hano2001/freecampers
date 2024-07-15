import React from "react";
import { CampLocation } from "../types/Locations";

export default function SingleLocationCard({ info }: { info: CampLocation }) {
  return (
    <>
      <h6>{info.location}</h6>
      <p>{info.x}</p>
      <p>{info.y}</p>
    </>
  );
}
