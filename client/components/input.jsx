import './input.css';

import { useState, useEffect } from 'react';

import AutocompleteTextField from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';

import * as adversaryData from '../types/adversaries.js';
import * as ancestryData from '../types/ancestries.js';
import * as classData from '../types/classes.js';
import * as communityData from '../types/communities.js';
import * as domainData from '../types/domains.js';
import * as environmentData from '../types/environments.js';
import * as subclassData from '../types/subclasses.js';


// const URL = '/api/';

function Input({ setData, type, setType }) {
	const types = ['adversary', 'ancestry', 'class', 'community', 'domain', 'environment', 'subclass'];

	const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState(['', '']);

	const [text, setText] = useState('');

	useEffect(()=>{
		const suggestionsMap = {
			'adversary'   : adversaryData.suggestionsRoute,
			'ancestry'    : ancestryData.suggestionsRoute,
			'class'       : classData.suggestionsRoute,
			'community'   : communityData.suggestionsRoute,
			'domain'      : domainData.suggestionsRoute,
			'environment' : environmentData.suggestionsRoute,
			'subclass'    : subclassData.suggestionsRoute
		};
		if(!Object.keys(suggestionsMap).includes(type)){
			console.log('Unknown type for suggestions:', type);
			setAutoCompleteSuggestions([]);
			return;
		}

		const fetchSuggestions = async ()=>{
			const response = await fetch(suggestionsMap[type]);

			const suggestionData = await response.json();
			const suggestions = suggestionData.sort((a, b)=>{return a.name > b.name;}).map((suggestion)=>{return suggestion.name;});

			setAutoCompleteSuggestions(suggestions);
		};
		fetchSuggestions();
		setData();
		setText('');
	}, [type, setData]);

	const fetchData = async function(e){
		e.preventDefault();
		if(!text) {
			setData(undefined);
			return;
		}

		try {

			const dataMap = {
				'adversary'   : adversaryData.dataRoute,
				'ancestry'    : ancestryData.dataRoute,
				'class'       : classData.dataRoute,
				'community'   : communityData.dataRoute,
				'domain'      : domainData.dataRoute,
				'environment' : environmentData.dataRoute,
				'subclass'    : subclassData.dataRoute
			};

			// console.log(dataURL);

			const response = await fetch(`${dataMap[type]}/${text}`);

			if(!response.ok) {
			  throw new Error(`Response status: ${response.status}`);
			}

			const apiData = await response.json();

			setData(apiData[0]);
			return;
		  } catch (error) {
			console.error(error.message);
		  }
		setData(undefined);
	};

	return <>
		<div className='input'>
			<form onSubmit={(e)=>{return fetchData(e);}}>
				<label>
					<span>
						<select onChange={(e)=>{setType(e.target.value);}}>
							{types.sort().map((type, index)=>{ return <option key={index}>{type}</option>;})}
						</select>
						/
						<AutocompleteTextField Component='input' value={text} onChange={(e)=>{setText(e);}} options={autoCompleteSuggestions} regex={/./} trigger='' spacer='' />
					</span>
				</label>
				<input type='submit' value='Fetch'></input>
			</form>
		</div>
	</>;
}

export default Input;