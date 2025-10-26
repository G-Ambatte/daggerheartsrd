import dedent from 'dedent';

const type = 'weapon';
const category = 'weapons';

const suggestionsRoute = '/api/weapons';
const dataRoute = '/api/weapon';

const formatFn = (data)=>{
	return dedent`{{card,weapon

		# ${data.name}
		***Tier ${data.tier} ${data.burden} ${data.type} Weapon***  
		*${data.slot}*
		:
		**Trait:** ${data.trait} | **Range:** ${data.range} | **Damage:** ${data.damage}

		---

		**Feature:** ${data.feature}
		:

		${data.sources.map((source)=>{return `{{source *${source.id} ${source.set}, ${source.updated} - ${source.publisher}*}}`;}).join('  \n')}
		}}
		
		::

		${data.attribution}	
`;
};

export {
	type,
	category,
	suggestionsRoute,
	dataRoute,
	formatFn
};