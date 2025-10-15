import './input.css'

import { useState, useEffect } from 'react'

import AutocompleteTextField from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';

import ancestryData from '../types/ancestries.js';
import classData from '../types/classes.js';


const URL = '/api/';

function Input({ setData, type, setType }) {
	const types = [ 'ancestry', 'class' ];

	const [autoCompleteSuggestions, setAutoCompleteSuggestions] = useState([ '', '' ]);

	const [ text, setText ] = useState('');

	useEffect(()=>{
		const suggestionsMap = {
			'ancestry': ancestryData.suggestionsRoute,
			'class'   : classData.suggestionsRoute
		};
		if(!Object.keys(suggestionsMap).includes(type)){
			console.log('Unknown type for suggestions:', type);
			setAutoCompleteSuggestions([]);
			return;
		}

		const fetchSuggestions = async ()=>{
			const response = await fetch(suggestionsMap[type]);

			const suggestionData = await response.json();
			const suggestions = suggestionData.sort((a,b)=>{return a.name > b.name;}).map((suggestion)=>{return suggestion.name;});

			setAutoCompleteSuggestions(suggestions);
		}
		fetchSuggestions();
		setData();
		setText(''); 
	}, [type, setData])

	const fetchData = async function(e){
		e.preventDefault();
		if(!text) {
			setData(undefined);
			return;
		}

		try {

			const dataMap = {
				'ancestry': ancestryData.dataRoute,
				'class'   : classData.dataRoute
			};

			// console.log(dataURL);

			const response = await fetch(`${dataMap[type]}/${text}`);

			if (!response.ok) {
			  throw new Error(`Response status: ${response.status}`);
			}
		
			const apiData = await response.json();

			setData(apiData[0])
			return
		  } catch (error) {
			console.error(error.message);
		  }
		setData(undefined);
	};

	return <>
		<div className='input'>
			<form onSubmit={fetchData}>
				<label>
					<span>
						<select onChange={(e)=>{setType(e.target.value);}}>
							{types.sort().map((type, index)=>{ return <option key={index}>{type}</option>;})}
						</select>
						/
						<AutocompleteTextField Component="input" value={text} onChange={(e)=>{setText(e)}} options={autoCompleteSuggestions} regex={/./} trigger='' spacer='' />
					</span>
				</label>
				<input type="submit" value="Fetch"></input>
			</form>
		</div>
	</>;
}

export default Input;