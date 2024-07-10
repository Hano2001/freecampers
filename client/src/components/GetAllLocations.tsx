import { useEffect, useState } from "react";
import axios from "axios";
import { Location } from "../types/Locations";
import SingleLocationCard from "./SingleLocationCard";

export default function GetAllLocations() {
  const [locations, setLocations] = useState<Location[]>([]);
  const [locationCardInfo, setLocationCardInfo] = useState<Location | null>(
    null,
  );
  useEffect(() => {
    axios("http://localhost:3000/api/locations").then((res) => {
      setLocations(res.data);
    });
  }, []);

  async function getSingleLocation(id: number) {
    const data = await axios(
      `http://localhost:3000/api/locations/${Number(id)}`,
    ).then((res) => {
      return res.data;
    });
    setLocationCardInfo(data);
    console.log(locationCardInfo);
  }
  if (locations.length !== 0) {
    return (
      <>
        {locations.map((l) => {
          return (
            <button onClick={() => getSingleLocation(l.id)}>
              {l.location}
            </button>
          );
        })}
        {locationCardInfo ? (
          <SingleLocationCard info={locationCardInfo} />
        ) : null}
      </>
    );
  }
}
