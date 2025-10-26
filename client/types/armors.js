import dedent from 'dedent';

const type = 'armor';
const category = 'armors';

const suggestionsRoute = '/api/armors';
const dataRoute = '/api/armor';

const formatFn = (data)=>{

	return dedent`{{card,armor

		# ${data.name}
		***Tier ${data.tier} Armor***  
		:
		**Base Score:** ${data.base} | **Thresholds:** ${data.thresholds.major}/${data.thresholds.severe}

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