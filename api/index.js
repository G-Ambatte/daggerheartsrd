import express from 'express';
import ViteExpress from 'vite-express';

import asyncHandler from 'express-async-handler';

import dpcgl from './data/dpcgl.js';

import armorData from './data/armors/index.json' with { type: 'json' };
import adversaryData from './data/adversaries/index.json' with { type: 'json' };
import beastformData from './data/beastforms/index.json' with { type: 'json' };
import ancestryData from './data/ancestries/index.json' with { type: 'json' };
import cardData from './data/cards/index.json' with { type: 'json' };
import classData from './data/classes/index.json' with { type: 'json' };
import communityData from './data/communities/index.json' with { type: 'json' };
import consumableData from './data/consumables/index.json' with { type:'json' };
import domainData from './data/domains/index.json' with { type: 'json' };
import environmentData from './data/environments/index.json' with { type: 'json' };
import lootData from './data/loots/index.json' with { type: 'json' };
import subclassData from './data/subclasses/index.json' with { type: 'json' };
import weaponData from './data/weapons/index.json' with { type: 'json' };
import wheelchairData from './data/wheelchairs/index.json' with { type: 'json' };


const getDataFromJSON = async (id, dataObj, genre = false)=>{
	if(!genre){
		return dataObj[id].map((obj)=>{ obj.attribution = dpcgl; return obj; });
	}
	const result = dataObj[genre].filter((obj)=>{return id.toLowerCase() == obj.name.toLowerCase();});
	if(result.length > 0) result[0].attribution = dpcgl;
	return result;
};


const app = express();

// Armors
app.get('/api/armors', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('armors', armorData);
	res.send(data);
}));

// Armor
app.get('/api/armor/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, armorData, 'armors');
	if(data.length == 0) return res.status(404).json('Unknown armor');
	res.send(data);
}));

// Adversaries
app.get('/api/adversaries', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('adversaries', adversaryData);
	res.send(data);
}));

// Adversary
app.get('/api/adversary/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, adversaryData, 'adversaries');
	if(data.length == 0) return res.status(404).json('Unknown adversary');
	res.send(data);
}));

// Ancestries
app.get('/api/ancestries', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('ancestries', ancestryData);
	res.send(data);
}));

// Ancestry
app.get('/api/ancestry/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, ancestryData, 'ancestries');
	if(data.length == 0) return res.status(404).json('Unknown ancestry');
	res.send(data);
}));

// Beastforms
app.get('/api/beastforms', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('beastforms', beastformData);
	res.send(data);
}));

// Beastform
app.get('/api/beastform/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, beastformData, 'beastforms');
	if(data.length == 0) return res.status(404).json('Unknown beastform');
	res.send(data);
}));

// Cards
app.get('/api/cards', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('cards', cardData);
	res.send(data);
}));

// Card
app.get('/api/card/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, cardData, 'cards');
	if(data.length == 0) return res.status(404).json('Unknown card');
	res.send(data);
}));

// Classes
app.get('/api/classes', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('classes', classData);
	res.send(data);
}));

// Class
app.get('/api/class/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, classData, 'classes');
	if(data.length == 0) return res.status(404).json('Unknown class');
	res.send(data);
}));

// Communities
app.get('/api/communities', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('communities', communityData);
	res.send(data);
}));

// Community
app.get('/api/community/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, communityData, 'communities');
	if(data.length == 0) return res.status(404).json('Unknown community');
	res.send(data);
}));

// Consumables
app.get('/api/consumables', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('consumables', consumableData);
	res.send(data);
}));

// Consumable
app.get('/api/consumable/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, consumableData, 'consumables');
	if(data.length == 0) return res.status(404).json('Unknown consumable');
	res.send(data);
}));

// Domains
app.get('/api/domains', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('domains', domainData);
	res.send(data);
}));

// Domain
app.get('/api/domain/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, domainData, 'domains');
	if(data.length == 0) return res.status(404).json('Unknown domain');
	res.send(data);
}));

// Environments
app.get('/api/environments', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('environments', environmentData);
	res.send(data);
}));

// Environment
app.get('/api/environment/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, environmentData, 'environments');
	if(data.length == 0) return res.status(404).json('Unknown environment');
	res.send(data);
}));

// Environments
app.get('/api/loots', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('loots', lootData);
	res.send(data);
}));

// Environment
app.get('/api/loot/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, lootData, 'loots');
	if(data.length == 0) return res.status(404).json('Unknown loot');
	res.send(data);
}));

// Subclasses
app.get('/api/subclasses', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('subclasses', subclassData);
	res.send(data);
}));

// Subclass
app.get('/api/subclass/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, subclassData, 'subclasses');
	if(data.length == 0) return res.status(404).json('Unknown subclass');
	res.send(data);
}));

// Weapons
app.get('/api/weapons', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('weapons', weaponData);
	res.send(data);
}));

// Weapon
app.get('/api/weapon/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, weaponData, 'weapons');
	if(data.length == 0) return res.status(404).json('Unknown weapon');
	res.send(data);
}));

// Wheelchairs
app.get('/api/wheelchairs', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON('wheelchairs', wheelchairData);
	res.send(data);
}));

// Wheelchair
app.get('/api/wheelchair/:id', asyncHandler(async (req, res)=>{
	const data = await getDataFromJSON(req.params.id, wheelchairData, 'wheelchairs');
	if(data.length == 0) return res.status(404).json('Unknown wheelchair');
	res.send(data);
}));


ViteExpress.listen(app, 3000, ()=>console.log('Server is listening on port 3000...'),
);

export default app;