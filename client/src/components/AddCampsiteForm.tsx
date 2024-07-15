import { ChangeEvent, FormEvent, useState } from "react";
import { CampLocation } from "../types/Locations";

export const AddCampsiteForm = ({ setLocations, locations }) => {
  const [formData, setFormData] = useState({
    location: "",
    x: 0,
    y: 0,
  });
  const [utilData, setUtilData] = useState<string[]>([]);
  const utils = [
    { name: "Campfire", value: "campfire" },
    { name: "Lake", value: "lake" },
    { name: "Public Transport", value: "transport" },
    { name: "Public Toilet", value: "toilet" },
  ];
  const utilCheckHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setUtilData([...utilData, e.target.value]);
    } else {
      setUtilData(utilData.filter((u) => u !== e.target.value));
    }
  };

  const addCampLocation = (e) => {
    e.preventDefault();
    const newLocation: CampLocation = {
      id: locations.length + 1,
      x: formData.x,
      y: formData.y,
      location: formData.location,
      utils: utilData,
    };
    setLocations([...locations, newLocation]);
  };

  return (
    <>
      <form>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) => (formData[e.target.name] = e.target.value)}
        />
        <label htmlFor="x">X - Coordinate:</label>
        <input
          type="number"
          name="x"
          id="x"
          onChange={(e) => (formData[e.target.name] = e.target.value)}
        />
        <label htmlFor="y">Y - Coordinate:</label>
        <input
          type="number"
          name="y"
          id="y"
          onChange={(e) => (formData[e.target.name] = e.target.value)}
        />
        {utils.map((u, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={u.value}
                name="util"
                value={u.name}
                onChange={(e) => utilCheckHandler(e)}
              />
              <label htmlFor={u.value}>{u.name}</label>
            </div>
          );
        })}
      </form>
      <button onClick={(e) => addCampLocation(e)}>Add Location</button>
    </>
  );
};
