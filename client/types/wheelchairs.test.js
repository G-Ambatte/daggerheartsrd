import * as testObj from './wheelchairs.js';

import { describe, test, expect } from 'vitest';

describe('Check Wheelchair Type', ()=>{
	test('Check expected properties exist', async ()=>{
		expect(testObj).toHaveProperty('type');
		expect(testObj).toHaveProperty('category');
		expect(testObj).toHaveProperty('suggestionsRoute');
		expect(testObj).toHaveProperty('dataRoute');
		expect(testObj).toHaveProperty('formatFn');
	});

	test('Check static properties', async ()=>{
		expect(testObj.type).toEqual('wheelchair');
		expect(testObj.category).toEqual('wheelchairs');
		expect(testObj.suggestionsRoute).toEqual('/api/wheelchairs');
		expect(testObj.dataRoute).toEqual('/api/wheelchair');
	});

	test('Format function should throw when data missing', async ()=>{
		const testData = {};
		expect(()=>{return testObj.formatFn(testData);}).toThrowError();
	});

	test('Format function should return known result for given data', async ()=>{
		const testData = {
			name        : 'test',
			tier        : 'tier',
			burden      : 'burden',
			trait       : 'trait',
			range       : 'range',
			damage      : 'damage',
			feature     : 'feature',
			attribution : 'attribution',
			sources     : [
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