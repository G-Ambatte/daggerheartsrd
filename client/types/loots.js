import dedent from 'dedent';

const type = 'loot';
const category = 'loots';

const suggestionsRoute = '/api/loots';
const dataRoute = '/api/loot';

const formatFn = (data)=>{

	return dedent`{{card,loot

		# ${data.name}
		*Loot Table #${data.roll}*
		:
		**Description:** ${data.description}
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