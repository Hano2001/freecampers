import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

type Location = {
  id: number;
  y: number;
  x: number;
  location: string;
};

const locations: Location[] = [
  { id: 1, y: 100, x: 100, location: "Haninge" },
  { id: 2, y: 200, x: 200, location: "Kungsholmen" },
  { id: 3, y: 300, x: 300, location: "Enköping" },
  { id: 4, y: 400, x: 400, location: "Fjärdhundra" },
];

const apiUrl = "/api/locations";

//Middlewares
const validId = (req: Request, res: Response, next: NextFunction) => {
  const location = locations.some((l) => l.id === Number(req.params.id));
  console.log("This writes only on endpoints with locations/id-routes");

  if (location) {
    next();
  } else {
    res.status(404).send("Location not found");
  }
};

app.use(apiUrl + "/:id", validId);

//Response Methods

app.get(apiUrl, (req, res) => {
  res.json(locations);
});
app.get(apiUrl + "/:id", (req, res) => {
  const id = Number(req.params.id);
  const location = locations.find((l) => l.id == id);
  res.json(location);
});
app.delete(apiUrl + "/:id", (req, res) => {
  const id = Number(req.params.id);
  const locationIndex = locations.findIndex((l) => l.id == id);
  locations.splice(locationIndex, 1);
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
