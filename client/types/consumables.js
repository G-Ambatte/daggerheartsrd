import dedent from 'dedent';

const type = 'consumable';
const category = 'consumables';

const suggestionsRoute = '/api/consumables';
const dataRoute = '/api/consumable';

const formatFn = (data)=>{

	return dedent`{{card,consumable

		# ${data.name}
		*Consumable Table #${data.roll}*
		:
		**Description:** ${data.description}
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