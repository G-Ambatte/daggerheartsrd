import dedent from "dedent";

const type = 'adversary';
const category = 'adversaries';

const suggestionsRoute = '/api/adversaries';
const dataRoute = '/api/adversary';

const formatFn = (data)=>{
	return dedent`{{card,adversary

	# ${data.name}
	***Tier ${data.tier} ${data.type}***  
	*${data.description}*  
	**Motives & Tactics:** ${data.tactics}

	:

	{{descriptive
	**Difficulty:** ${data.difficulty} | **Thresholds:** ${data.thresholds.major > 0 ? data.thresholds.major : '-'}/${data.thresholds.severe > 0 ? data.thresholds.severe : '-'}
	**ATK:** ${data.attack.mod} | **${data.attack.name}:** ${data.attack.range} | ${data.attack.damage}
	
	---

	**Experience:** :: ${data.experience}
	}}

	## Features
	${data.features.map((feature)=>{
		return `***${feature.name} - ${feature.type}:*** ${feature.description}\n`;
	}).join('\n:\n')}

	:

	{{source ${data.sources.map((source)=>{return `*${source.id} ${source.set}, ${source.updated} - ${source.publisher}*`;}).join('\n')}}}
	}}`;
};

export {
	type,
	category,
	suggestionsRoute,
	dataRoute,
	formatFn
};