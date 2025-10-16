import express from "express";
import ViteExpress from "vite-express";

import asyncHandler from "express-async-handler";

import adversaryData from './data/adversaries/index.json' with { type: 'json' };
import ancestryData from './data/ancestries/index.json' with { type: 'json' };
import classData from './data/classes/index.json' with { type: 'json' };
import communityData from './data/communities/index.json' with { type: 'json' };
import domainData from './data/domains/index.json' with { type: 'json' };
import environmentData from './data/environments/index.json' with { type: 'json' };
import subclassData from './data/subclasses/index.json' with { type: 'json' };



const getDataFromJSON = async (id, dataObj, genre = false)=>{
  if(!genre){
    return dataObj[id].map((obj)=>{return obj.name;});
  }
  const result = dataObj[genre].filter((obj)=>{return id.toLowerCase() == obj.name.toLowerCase();});
  return result;
};


const app = express();

// Ancestries
app.get("/api/adversaries", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('adversaries', adversaryData);
  res.send(data);
}));

// Ancestry
app.get("/api/adversary/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, adversaryData, 'adversaries');
  if(data.length == 0) return res.status(404).json('Unknown ancestry');
  res.send(data);
}));

// Ancestries
app.get("/api/ancestries", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('ancestries', ancestryData);
  res.send(data);
}));

// Ancestry
app.get("/api/ancestry/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, ancestryData, 'ancestries');
  if(data.length == 0) return res.status(404).json('Unknown ancestry');
  res.send(data);
}));

// Classes
app.get("/api/classes", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('classes', classData);
  res.send(data);
}));

// Class
app.get("/api/class/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, classData, 'classes');
  if(data.length == 0) return res.status(404).json('Unknown class');
  res.send(data);
}));

// Communities
app.get("/api/communities", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('communities', communityData);
  res.send(data);
}));

// Community
app.get("/api/community/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, communityData, 'communities');
  if(data.length == 0) return res.status(404).json('Unknown community');
  res.send(data);
}));

// Domains
app.get("/api/domains", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('domains', domainData);
  res.send(data);
}));

// Domain
app.get("/api/domain/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, domainData, 'domains');
  if(data.length == 0) return res.status(404).json('Unknown domain');
  res.send(data);
}));

// Environments
app.get("/api/environments", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('environments', environmentData);
  res.send(data);
}));

// Domain
app.get("/api/environment/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, environmentData, 'environments');
  if(data.length == 0) return res.status(404).json('Unknown domain');
  res.send(data);
}));

// Subclasses
app.get("/api/subclasses", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON('subclasses', subclassData);
  res.send(data);
}));

// Subclass
app.get("/api/subclass/:id", asyncHandler(async (req, res) => {
  const data = await getDataFromJSON(req.params.id, subclassData, 'subclasses');
  if(data.length == 0) return res.status(404).json('Unknown subclass');
  res.send(data);
}));


ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);

export default app;