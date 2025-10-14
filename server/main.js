import express from "express";
import ViteExpress from "vite-express";

import asyncHandler from "express-async-handler";


const getDataFromJSON = async (id, file, genre = false)=>{
  const dataObj = await import(file, { with: { type: 'json' } });
  const data = dataObj.default;
  if(!genre){
    return data[id];
  }
  const result = data[genre].filter((obj)=>{return id.toLowerCase() == obj.name.toLowerCase();});
  return result;
};


const app = express();

// Ancestries
app.get("/api/ancestries", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('ancestries', './data/ancestry/index.json');
  res.send(data);
}));

// Ancestry
app.get("/api/ancestry/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, './data/ancestry/index.json', 'ancestries');
  if(data.length == 0) return res.status(404).json('Unknown ancestry');
  res.send(data);
}));

// Classes
app.get("/api/classes", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('classes', './data/classes/index.json');
  res.send(data);
}));

// Class
app.get("/api/class/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, './data/classes/index.json', 'classes');
  if(data.length == 0) return res.status(404).json('Unknown class');
  res.send(data);
}));

// Communities
app.get("/api/communities", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('communities', './data/communities/index.json');
  res.send(data);
}));

// Community
app.get("/api/community/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, './data/communities/index.json', 'communities');
  if(data.length == 0) return res.status(404).json('Unknown community');
  res.send(data);
}));

// Domains
app.get("/api/domains", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('domains', './data/domains/index.json');
  res.send(data);
}));

// Domain
app.get("/api/domain/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, './data/domains/index.json', 'domains');
  if(data.length == 0) return res.status(404).json('Unknown domain');
  res.send(data);
}));

// Subclasses
app.get("/api/subclasses", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('subclasses', './data/subclasses/index.json');
  res.send(data);
}));

// Subclass
app.get("/api/subclass/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, './data/subclasses/index.json', 'subclasses');
  if(data.length == 0) return res.status(404).json('Unknown subclass');
  res.send(data);
}));


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

export default app;