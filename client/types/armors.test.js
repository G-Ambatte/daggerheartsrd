import * as testObj from './armors.js';

import { describe, test, expect } from 'vitest';

describe('Check Armor Type', ()=>{
	test('Check expected properties exist', async ()=>{
		expect(testObj).toHaveProperty('type');
		expect(testObj).toHaveProperty('category');
		expect(testObj).toHaveProperty('suggestionsRoute');
		expect(testObj).toHaveProperty('dataRoute');
		expect(testObj).toHaveProperty('formatFn');
	});

	test('Check static properties', async ()=>{
		expect(testObj.type).toEqual('armor');
		expect(testObj.category).toEqual('armors');
		expect(testObj.suggestionsRoute).toEqual('/api/armors');
		expect(testObj.dataRoute).toEqual('/api/armor');
	});

	test('Format function should throw when data missing', async ()=>{
		const testData = {};
		expect(()=>{return testObj.formatFn(testData);}).toThrowError();
	});

	test('Format function should return known result for given data', async ()=>{
		const testData = {
			name        : 'test',
			tier        : 'tier',
			base        : 'base',
			description : 'description',
			feature     : 'feature',
			attribution : 'attribution',
			thresholds  : {
				major  : 0,
				severe : 0
			},
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