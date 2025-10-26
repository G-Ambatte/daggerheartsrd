import dedent from 'dedent';

const type = 'wheelchair';
const category = 'wheelchairs';

const suggestionsRoute = '/api/wheelchairs';
const dataRoute = '/api/wheelchair';

const formatFn = (data)=>{
	return dedent`{{card,wheelchair

		# ${data.name}
		***Tier ${data.tier} ${data.burden} Wheelchair***  
		:
		**Trait:** ${data.trait} | **Range:** ${data.range} | **Damage:** ${data.damage}

		---

		**Feature:** ${data.feature}
		:

		{{source ${data.sources.map((source)=>{return `*${source.id} ${source.set}, ${source.updated} - ${source.publisher}*`;}).join('\n')}}}
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