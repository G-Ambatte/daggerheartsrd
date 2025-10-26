import dedent from 'dedent';

const type = 'environment';
const category = 'environments';

const suggestionsRoute = '/api/environments';
const dataRoute = '/api/environment';

const formatFn = (data)=>{
	return dedent`{{card,environment

		# ${data.name}
		***Tier ${data.tier} ${data.type}***  
		*${data.description}*  
		**Impulses:** ${data.impulses}

		:

		{{descriptive
		**Difficulty:** :: ${data.difficulty}
		**Potential Adversaries:** :: ${data.potentialAdversaries.join(', ')}
		}}

		## Features
		${data.features.map((feature)=>{
		return `**${feature.name} - ${feature.type}** ${feature.description.join('  \n')}\n\n{{questions *${feature.questions}* }}\n`;
	}).join('\n:\n')}

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