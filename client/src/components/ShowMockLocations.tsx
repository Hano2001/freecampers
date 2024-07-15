import { useEffect, useState } from "react";
import { mockCamps } from "../mockdata/mockcamp";
import { CampLocation } from "../types/Locations";
import SingleLocationCard from "./SingleLocationCard";

export const ShowMockLocations = () => {
  const [locations, setLocations] = useState<CampLocation[] | null>(null);

  useEffect(() => {
    setLocations(mockCamps);
  }, []);

  return (
    <>
      {locations
        ? locations.map((l) => {
            return <SingleLocationCard info={l} />;
          })
        : "There are no locations.."}
    </>
  );
};
