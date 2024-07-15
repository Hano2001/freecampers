import { useEffect, useState } from "react";
import { mockCamps } from "../mockdata/mockcamp";
import { CampLocation } from "../types/Locations";
import SingleLocationCard from "./SingleLocationCard";
import { AddCampsiteForm } from "./AddCampsiteForm";

export const ShowMockLocations = () => {
  const [locations, setLocations] = useState<CampLocation[] | null>(null);

  useEffect(() => {
    setLocations(mockCamps);
  }, []);

  return (
    <>
      <section className="location-gallery">
        {locations
          ? locations.map((l, i) => {
              return <SingleLocationCard key={i} info={l} />;
            })
          : "There are no locations.."}
      </section>
      <AddCampsiteForm setLocations={setLocations} locations={locations} />
    </>
  );
};
