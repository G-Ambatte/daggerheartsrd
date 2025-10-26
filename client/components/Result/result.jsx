import './result.css';

import { useState, useEffect } from 'react';

import resultStyle from './resultStyle.js';
import { formatFn as adversaryFormat } from '../../types/adversaries.js';
import { formatFn as armorFormat } from '../../types/armors.js';
import { formatFn as environmentFormat } from '../../types/environments.js';
import { formatFn as lootFormat } from '../../types/loots.js';
import { formatFn as weaponFormat } from '../../types/weapons.js';
import { formatFn as wheelchairFormat } from '../../types/wheelchairs.js';

function Result({ data, type }) {

	const DEFAULT_TAB = 'raw';

	const [activeTab, setActiveTab] = useState(DEFAULT_TAB);
	const [text, setText] = useState('');
	const [copyState, setCopyState] = useState(false);

	useEffect(()=>{
		setCopyState(false);
		if(!data) setText('');
	}, [data]);

	useEffect(()=>{
		setActiveTab(DEFAULT_TAB);
	}, [type]);

	useEffect(()=>{
		if(!data) return;
		// const url = '';

		const outputMap = {
			'adversary'   : adversaryFormat,
			'armor'       : armorFormat,
			'environment' : environmentFormat,
			'loot'        : lootFormat,
			'weapon'      : weaponFormat,
			'wheelchair'  : wheelchairFormat
		};

		if(activeTab == 'homebrewery') setText(Object.keys(outputMap).includes(type) ? `${outputMap[type](data)}\n\n<style>${resultStyle}</style>` : '');
		if(activeTab == 'raw') setText(JSON.stringify(data));

		setCopyState(false);

	},	[activeTab, type, data]);


	const copyToClipboard = function(){
		navigator.clipboard.writeText(text);
		setCopyState(true);
	};

	const tabs = ['Homebrewery', 'Raw'];

	return <>
		<div className='result'>
			<div className='tabs'>
				{tabs.map((tab, index)=>{return <button key={index} onClick={()=>{setActiveTab(tab.toLowerCase());}}>{tab}</button>;})}
			</div>
			<textarea className='result' spellCheck={false} defaultValue={text}></textarea>
			<button onClick={()=>{copyToClipboard();}}>{copyState ? 'Copied!' : 'Copy'}</button>
		</div>
	</>;
}

export default Result;