import { ChangeEvent, FormEvent, useState } from "react";
import { CampLocation } from "../types/Locations";

export const AddCampsiteForm = ({ setLocations, locations }) => {
  const resetFormData = {
    location: "",
    x: 0,
    y: 0,
  };
  const [formData, setFormData] = useState(resetFormData);
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
    setFormData(resetFormData);
  };

  return (
    <section className="add-campsite--section">
      <form className="add-campsite--section--form">
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          value={formData.location}
        />
        <label htmlFor="x">X - Coordinate:</label>
        <input
          type="number"
          name="x"
          id="x"
          onChange={(e) => setFormData({ ...formData, x: e.target.value })}
          value={formData.x}
        />
        <label htmlFor="y">Y - Coordinate:</label>
        <input
          type="number"
          name="y"
          id="y"
          onChange={(e) => setFormData({ ...formData, y: e.target.value })}
          value={formData.y}
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
    </section>
  );
};
