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


const types  = [
	{ singular: 'armor', plural: 'armors', data: armorData },
	{ singular: 'adversary', plural: 'adversaries', data: adversaryData },
	{ singular: 'ancestry', plural: 'ancestries', data: ancestryData },
	{ singular: 'beastform', plural: 'beastforms', data: beastformData },
	{ singular: 'card', plural: 'cards', data: cardData },
	{ singular: 'class', plural: 'classes', data: classData },
	{ singular: 'community', plural: 'communities', data: communityData },
	{ singular: 'consumable', plural: 'consumables', data: consumableData },
	{ singular: 'domain', plural: 'domains', data: domainData },
	{ singular: 'environment', plural: 'environments', data: environmentData },
	{ singular: 'loot', plural: 'loots', data: lootData },
	{ singular: 'subclass', plural: 'subclasses', data: subclassData },
	{ singular: 'weapon', plural: 'weapons', data: weaponData },
	{ singular: 'wheelchair', plural: 'wheelchairs', data: wheelchairData }
];


const app = express();

types.map((type)=>{
	app.get(`/api/${type.plural}`, asyncHandler(async (req, res)=>{
		const data = await getDataFromJSON(type.plural, type.data);
		res.send(data);
	}));
	app.get(`/api/${type.singular}/:id`, asyncHandler(async (req, res)=>{
		const data = await getDataFromJSON(req.params.id, type.data, type.plural);
		if(data.length == 0) return res.status(404).json(`Unknown ${type.singular}`);
		res.send(data);
	}));
});



ViteExpress.listen(app, 3000, ()=>console.log('Server is listening on port 3000...'),
);

export default app;