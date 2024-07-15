import { CampLocation } from "../types/Locations";

export const AddCampsiteForm = ({ setLocations, locations }) => {
  const utils = [
    { name: "Campfire", value: "campfire" },
    { name: "Lake", value: "lake" },
    { name: "Public Transport", value: "transport" },
    { name: "Public Toilet", value: "toilet" },
  ];
  const submitHandler = (e) => {
    e.preventDefault();
    const newLocation: CampLocation = {
      id: locations.length + 1,
      x: e.target.xcoord.value,
      y: e.target.ycoord.value,
      location: e.target.location.value,
    };
    setLocations([...locations, newLocation]);
  };
  return (
    <>
      <form onSubmit={(e) => submitHandler(e)}>
        <label htmlFor="location">Location: </label>
        <input type="text" name="location" id="location" />
        <label htmlFor="xcoord">X - Coordinate:</label>
        <input type="text" name="xcoord" id="xcoord" />
        <label htmlFor="ycoord">Y - Coordinate:</label>
        <input type="text" name="ycoord" id="ycoord" />
        {utils.map((u, i) => {
          return (
            <div key={i}>
              <input type="checkbox" id={u.value} name="util" value={u.value} />
              <label htmlFor={u.value}>{u.name}</label>
            </div>
          );
        })}
        <button type="submit">Add Location</button>
      </form>
    </>
  );
};
