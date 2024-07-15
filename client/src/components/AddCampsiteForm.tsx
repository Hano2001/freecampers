import { FormEvent, useState } from "react";
import { CampLocation } from "../types/Locations";

export const AddCampsiteForm = ({ setLocations, locations }) => {
  const [formData, setFormData] = useState({
    location: "",
    x: "",
    y: "",
  });
  const [utilData, setUtilData] = useState<string[]>([]);
  const utils = [
    { name: "Campfire", value: "campfire" },
    { name: "Lake", value: "lake" },
    { name: "Public Transport", value: "transport" },
    { name: "Public Toilet", value: "toilet" },
  ];
  const onChangeHandler = (e) => {
    if (e.target.name == "util") {
      if (e.target.checked) {
        setUtilData([...utilData, e.target.value]);
      } else {
        setUtilData(utilData.filter((u) => u !== e.target.value));
      }
    } else {
      formData[e.target.name] = e.target.value;
    }

    // e.preventDefault();
    // const newLocation: CampLocation = {
    //   id: locations.length + 1,
    //   x: e.target.x.value,
    //   y: e.target.y.value,
    //   location: e.target.location.value,
    // };
    // setLocations([...locations, newLocation]);
  };
  return (
    <>
      <form>
        <label htmlFor="location">Location: </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={(e) => onChangeHandler(e)}
        />
        <label htmlFor="x">X - Coordinate:</label>
        <input
          type="text"
          name="x"
          id="x"
          onChange={(e) => onChangeHandler(e)}
        />
        <label htmlFor="y">Y - Coordinate:</label>
        <input
          type="text"
          name="y"
          id="y"
          onChange={(e) => onChangeHandler(e)}
        />
        {utils.map((u, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={u.value}
                name="util"
                value={u.value}
                onChange={(e) => onChangeHandler(e)}
              />
              <label htmlFor={u.value}>{u.name}</label>
            </div>
          );
        })}
        <button type="submit">Add Location</button>
      </form>
      <button onClick={() => console.log(formData, utilData)}>TEST</button>
    </>
  );
};
