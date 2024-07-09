import React from "react";
import { Location } from "../types/Locations";

export default function SingleLocationCard(info: Location) {
  return (
    <>
      <h6>{info.location}</h6>
      <p>{info.x}</p>
      <p>{info.y}</p>
    </>
  );
}
