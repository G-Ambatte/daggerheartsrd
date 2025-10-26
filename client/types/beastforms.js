import dedent from 'dedent';

const type = 'beastform';
const category = 'beastforms';

const suggestionsRoute = '/api/beastforms';
const dataRoute = '/api/beastform';

const formatFn = (data)=>{

	return dedent`{{card,beastform

		# ${data.name}
		*Tier ${data.tier} Beast Form*
		*Examples: ${data.examples}*
		:

		{{descriptive
		${data.traits.map((trait)=>{return `**${trait.name}** ${trait.bonus}`;}).join(' | ')}  
		**ATK:** ${data.attack.trait} | **Range:** ${data.attack.range} | **Damage:** ${data.attack.damage}
		}}


		**Advantage on:** ${data.advantage}
		:
		${data.features
		?
		`## Features
		${data.features.map((feature)=>{ return `**${feature.name}:** ${feature.description.join('  \n')}`; }).join('  \n')}`
		:
		''}


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