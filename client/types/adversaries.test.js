import * as testObj from './adversaries.js';

import { describe, test, expect } from 'vitest';

describe('Check Adversary Type', ()=>{
	test('Check expected properties exist', async ()=>{
		expect(testObj).toHaveProperty('type');
		expect(testObj).toHaveProperty('category');
		expect(testObj).toHaveProperty('suggestionsRoute');
		expect(testObj).toHaveProperty('dataRoute');
		expect(testObj).toHaveProperty('formatFn');
	});

	test('Check static properties', async ()=>{
		expect(testObj.type).toEqual('adversary');
		expect(testObj.category).toEqual('adversaries');
		expect(testObj.suggestionsRoute).toEqual('/api/adversaries');
		expect(testObj.dataRoute).toEqual('/api/adversary');
	});

	test('Format function should throw when data missing', async ()=>{
		const testData = {};
		expect(()=>{return testObj.formatFn(testData);}).toThrowError();
	});

	test('Format function should return known result for given data', async ()=>{
		const testData = {
			name        : 'test',
			tier        : 'tier',
			type        : 'type',
			description : 'description',
			tactics     : 'tactics',
			difficulty  : 'difficulty',
			hitPoints   : 'hitPoints',
			stress      : 'stress',
			experience  : 'experience',
			attribution : 'attribution',
			thresholds  : {
				major  : 1,
				severe : 2
			},
			attack : {
				name   : 'attack',
				range  : 'range',
				mod    : 'mod',
				damage : 'damage'
			},
			features : [
				{
					name        : 'featName',
					type        : 'featType',
					description : 'featDescription'
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
			tier        : 'tier',
			type        : 'type',
			description : 'description',
			tactics     : 'tactics',
			difficulty  : 'difficulty',
			hitPoints   : 'hitPoints',
			stress      : 'stress',
			attribution : 'attribution',
			thresholds  : {
				major  : 0,
				severe : 0
			},
			attack : {
				name   : 'attack',
				range  : 'range',
				mod    : 'mod',
				damage : 'damage'
			},
			features : [
				{
					name        : 'featName',
					type        : 'featType',
					description : 'featDescription'
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