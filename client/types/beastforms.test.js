import * as testObj from './beastforms.js';

import { describe, test, expect } from 'vitest';

describe('Check Beastform Type', ()=>{
	test('Check expected properties exist', async ()=>{
		expect(testObj).toHaveProperty('type');
		expect(testObj).toHaveProperty('category');
		expect(testObj).toHaveProperty('suggestionsRoute');
		expect(testObj).toHaveProperty('dataRoute');
		expect(testObj).toHaveProperty('formatFn');
	});

	test('Check static properties', async ()=>{
		expect(testObj.type).toEqual('beastform');
		expect(testObj.category).toEqual('beastforms');
		expect(testObj.suggestionsRoute).toEqual('/api/beastforms');
		expect(testObj.dataRoute).toEqual('/api/beastform');
	});

	test('Format function should throw when data missing', async ()=>{
		const testData = {};
		expect(()=>{return testObj.formatFn(testData);}).toThrowError();
	});

	test('Format function should return known result for given data', async ()=>{
		const testData = {
			name        : 'test',
			examples    : 'examples',
			tier        : 'tier',
			attribution : 'attribution',
			advantage   : 'advantage',
			attack      : {
				trait  : 'trait',
				range  : 'range',
				damage : 'damage'
			},
			traits : [
				{
					name  : 'traitName',
					bonus : 'traitBonus'
				}
			],
			features : [
				{
					name        : 'featName',
					type        : 'featType',
					description : ['featDescription']
				}
			],
			sources : [
				{
					id        : 'sourceID',
					set       : 'sourceSet',
					updated   : 'sourceUpdated',
					publisher : 'sourcePublisher'
				}
			]
		};

		expect(testObj.formatFn(testData)).toMatchSnapshot();
	});

	test('Format function should return known result for alternate data', async ()=>{
		const testData = {
			name        : 'test',
			examples    : 'examples',
			tier        : 'tier',
			attribution : 'attribution',
			advantage   : 'advantage',
			attack      : {
				trait  : 'trait',
				range  : 'range',
				damage : 'damage'
			},
			traits : [
				{
					name  : 'traitName',
					bonus : 'traitBonus'
				}
			],
			sources : [
				{
					id        : 'sourceID',
					set       : 'sourceSet',
					updated   : 'sourceUpdated',
					publisher : 'sourcePublisher'
				}
			]
		};

		expect(testObj.formatFn(testData)).toMatchSnapshot();
	});
});