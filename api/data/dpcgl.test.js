import { describe, test, expect } from 'vitest';

import dpcgl from './dpcgl.js';

describe('DPCGL tests', ()=>{
	test('Check DPCGL text', async ()=>{
		expect(dpcgl).toMatchSnapshot();
	});
});