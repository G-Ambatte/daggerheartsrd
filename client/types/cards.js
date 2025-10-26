import dedent from 'dedent';

const type = 'card';
const category = 'cards';

const suggestionsRoute = '/api/cards';
const dataRoute = '/api/card';

const formatFn = (data)=>{

	return dedent`{{card,cards

		# ${data.name}
		*Level ${data.level} ${data.domain} ${data.type}*  
		*Recall Cost ${data.recall}*
		:
		**Description:** ${data.description.join('  \n')}
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