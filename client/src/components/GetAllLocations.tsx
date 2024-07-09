import React, { useEffect, useState } from "react";
import axios from "axios";
import { Location } from "../types/Locations";

export default function GetAllLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  useEffect(() => {
    axios("http://localhost:3000/api/locations").then((res) => {
      setLocations(res.data);
    });
  }, []);

  if (locations.length !== 0) {
    return (
      <>
        {locations.map((l) => {
          return <p>{l.location}</p>;
        })}
      </>
    );
  }
}
