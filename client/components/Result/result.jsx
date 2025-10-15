import './result.css'

import { useState, useEffect } from 'react'


function Result({ data, type }) {

	const [ activeTab, setActiveTab ] = useState('raw');
	const [ text, setText ] = useState('');
	const [ copyState, setCopyState] = useState(false);

	useEffect(()=>{
		setCopyState(false);
	}, [data])

	useEffect(()=>{
		if(!data) return;
		const url = '';

		const outputMap = {
		}

		if(activeTab == 'homebrewery') setText(outputMap[type] ? outputMap[type](data, url) : '');
		if(activeTab == 'raw') setText(JSON.stringify(data));

		setCopyState(false);

	},	[activeTab, type, data])


	const copyToClipboard = function(){
		navigator.clipboard.writeText(text);
		setCopyState(true);
	}

	const tabs = [ 'Homebrewery', 'Raw'];

	return <>
		<div className='result'>
			<div className='tabs'>
				{tabs.map((tab, index)=>{return <button key={index} onClick={()=>{setActiveTab(tab.toLowerCase());}}>{tab}</button>})}
			</div>
			<textarea className='result' defaultValue={text}></textarea>
			<button onClick={copyToClipboard}>{copyState ? 'Copied!' : 'Copy'}</button>
		</div>
	</>
}

export default Result